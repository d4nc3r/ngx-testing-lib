import { fireEvent, render, screen } from '@testing-library/angular';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { UserStatusComponent } from './user-status.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { selectUserIsAuthenticated, selectUserName } from '../../state';
import { TestBed } from '@angular/core/testing';
import { AuthEvents } from '../../state/actions/auth.actions';

describe('the user status component', () => {
  describe('the user is logged in', () => {
    beforeEach(async () => {
      render(UserStatusComponent, {
        providers: [
          provideMockStore({
            selectors: [
              { selector: selectUserIsAuthenticated, value: true },
              { selector: selectUserName, value: 'Rhonda' },
            ],
          }),
        ],
        imports: [ReactiveComponentModule],
      });
    });

    it('displays the logout button', () => {
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Log Out Rhonda');
      // screen.debug();
    });

    it('dispatches the right action when clicked', () => {
      const store = TestBed.inject(MockStore);

      store.dispatch = jest.fn(); // mock object

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(store.dispatch).toHaveBeenCalled();
      const expectedAction = AuthEvents.logoutRequested();

      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
    // it('does not show the login button');
  });

  describe('the user is not logged in', () => {
    beforeEach(async () => {
      render(UserStatusComponent, {
        providers: [
          provideMockStore({
            selectors: [
              { selector: selectUserIsAuthenticated, value: false },
              { selector: selectUserName, value: '' },
            ],
          }),
        ],
        imports: [ReactiveComponentModule],
      });
    });

    it('displays the login button', () => {
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Log In');
      // screen.debug();
    });

    it('dispatches the right action when clicked', () => {
      const store = TestBed.inject(MockStore);

      store.dispatch = jest.fn(); // mock object

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(store.dispatch).toHaveBeenCalled();
      const expectedAction = AuthEvents.loginRequested({});

      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
