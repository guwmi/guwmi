// import library functionality
import { render, screen } from '@testing-library/react';

// import components
import InfoBlock from '../../components/InfoBlock/InfoBlock';

describe('InfoBlock Component', () => {

  test('renders with correct content', () => {

    render (
      <InfoBlock label="Test label" data-testid="guwmi-info-block">
        <p>Test content</p>
      </InfoBlock>
    )

    const info = screen.getByTestId('guwmi-info-block');
    const label = info.querySelector('h2');
    const paragraph = info.querySelector('p');
    expect(label).toHaveTextContent('Test label');
    expect(paragraph).toHaveTextContent('Test content');
  });

  test('renders with override class', () => {

    render (
      <InfoBlock label="Test label" className="override-class" data-testid="guwmi-info-block">
        <p>Test content</p>
      </InfoBlock>
    )

    const info = screen.getByTestId('guwmi-info-block');
    expect(info).toHaveClass('override-class');
  });

  test('renders with correct kind variations', () => {

    const { rerender } = render (
      <InfoBlock label="Test label" data-testid="guwmi-info-block">
        <p>Test content</p>
      </InfoBlock>
    )

    const block = screen.getByTestId('guwmi-info-block');
    expect(block).toHaveClass('info');
    rerender (
      <InfoBlock label="Test label" kind="danger" data-testid="guwmi-info-block">
        <p>Test content</p>
      </InfoBlock>
    );
    expect(block).toHaveClass('danger');
    rerender (
      <InfoBlock label="Test label" kind="warning" data-testid="guwmi-info-block">
        <p>Test content</p>
      </InfoBlock>
    );
    expect(block).toHaveClass('warning');
    rerender (
      <InfoBlock label="Test label" kind="success" data-testid="guwmi-info-block">
        <p>Test content</p>
      </InfoBlock>
    );
    expect(block).toHaveClass('success');
  });
})