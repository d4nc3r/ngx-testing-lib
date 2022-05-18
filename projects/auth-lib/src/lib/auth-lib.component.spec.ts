import { render, screen, fireEvent } from '@testing-library/angular';
import { AuthLibComponent } from './auth-lib.component';

describe('the auth component', () => {
  it('has the right thing on the screen', async () => {
    await render(AuthLibComponent);

    const el = screen.getByRole('heading');
    expect(el).toHaveTextContent('auth-lib works!');
  });
});
