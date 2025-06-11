// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import components
import Notification from '@components/Notification/Notification';

describe('Notification', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
  });
  
  test('renders notification with proper classes', () => {

    render(
      <>
        <Notification kind="success" title="Success" content="Success content" data-testid="guwmi-success-notification" />
        <Notification kind="error" title="Error" content="Error content" data-testid="guwmi-error-notification" />
        <Notification kind="warning" title="Warning" content="Warning content" data-testid="guwmi-warning-notification" />
        <Notification kind="info" title="Info" content="Info content" className="override-class" data-testid="guwmi-info-notification" />
      </>
    )

    const success = screen.getByTestId('guwmi-success-notification');
    expect(success).toHaveClass('success');
    expect(success.querySelector('h2')).toHaveTextContent('Success');
    expect(success.querySelector('p')).toHaveTextContent('Success content');
    const error = screen.getByTestId('guwmi-error-notification');
    expect(error).toHaveClass('error');
    expect(error.querySelector('h2')).toHaveTextContent('Error');
    expect(error.querySelector('p')).toHaveTextContent('Error content');
    const warning = screen.getByTestId('guwmi-warning-notification');
    expect(warning).toHaveClass('warning');
    expect(warning.querySelector('h2')).toHaveTextContent('Warning');
    expect(warning.querySelector('p')).toHaveTextContent('Warning content');
    const info = screen.getByTestId('guwmi-info-notification');
    expect(info).toHaveClass('info');
    expect(info).toHaveClass('override-class');
    expect(info.querySelector('h2')).toHaveTextContent('Info');
    expect(info.querySelector('p')).toHaveTextContent('Info content');
  })

  test('renders notification with default title if not provided', () => {

    render(
      <>
        <Notification kind="success" content="Success content" data-testid="guwmi-success-notification" />
        <Notification kind="error" content="Error content" data-testid="guwmi-error-notification" />
        <Notification kind="warning" content="Warning content" data-testid="guwmi-warning-notification" />
        <Notification kind="info" content="Warning content" data-testid="guwmi-info-notification" />
      </>
    )

    const success = screen.getByTestId('guwmi-success-notification');
    expect(success.querySelector('h2')).toHaveTextContent('Success');
    const error = screen.getByTestId('guwmi-error-notification');
    expect(error.querySelector('h2')).toHaveTextContent('Error');
    const warning = screen.getByTestId('guwmi-warning-notification');
    expect(warning.querySelector('h2')).toHaveTextContent('Warning');
    const info = screen.getByTestId('guwmi-info-notification');
    expect(info.querySelector('h2')).toHaveTextContent('Info');
  })

  test('removes notification from dom when close button is clicked', async () => {

    render(<Notification kind="success" title="Success" content="Success content" data-testid="guwmi-notification" />)

    const notification = screen.getByTestId('guwmi-notification');
    const closeButton = notification.querySelector('button');
    await user.click(closeButton);
    expect(notification).not.toBeInTheDocument();
  })
})