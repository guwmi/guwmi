// import library functionality
import { render, screen } from '@testing-library/react';

import Icon from '../../components/Icon/Icon';

describe('Icon Component', () => {

  const iconNames = [
    'alert-circle',
    'alert-square',
    'alert-triangle',
    'check',
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'copy',
    'close',
    'dots',
    'external-link',
    'hide',
    'home',
    'info',
    'login',
    'menu',
    'progress-alert',
    'progress-check',
    'progress',
    'search',
    'settings',
    'view'
  ];

  test('renders with correct classname', () => {

    render(
      iconNames.map((icon, index) => (
        // @ts-ignore
        <Icon key={index} name={icon} data-testid={`guwmi-icon-${icon}`} />
      ))
    )

    iconNames.forEach((icon) => {
      const svg = screen.getByTestId(`guwmi-icon-${icon}`);
      const paths = svg.querySelectorAll('path');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass(`guwmi-icon-${icon}`);
      expect(paths.length > 0).toBe(true);
    })
  })

  test('renders with correct attributes', () => {

    render(<Icon name="close" size={20} stroke="2" color="blue" className="override-class" ariaLabel="Test aria" data-testid="guwmi-icon" />)

    const svg = screen.getByTestId('guwmi-icon');
    expect(svg).toHaveAttribute('height', '20');
    expect(svg).toHaveAttribute('width', '20');
    expect(svg).toHaveAttribute('stroke-width', '2');
    expect(svg).toHaveAttribute('stroke', 'blue');
    expect(svg).toHaveClass('override-class');
    expect(svg).toHaveAttribute('aria-label', 'Test aria');
  });
})