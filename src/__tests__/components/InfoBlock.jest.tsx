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
  })
})