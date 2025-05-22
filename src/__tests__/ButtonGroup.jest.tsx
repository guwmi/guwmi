// import library functionality
import { render, screen } from '@testing-library/react';

// import components
import Button from '@components/Button/Button';
import ButtonGroup from '@components/ButtonGroup/ButtonGroup';

describe('ButtonGroup', () => {

  test('renders button group with default values', () => {

    render(
      <ButtonGroup>
        <Button href="https://www.google.com">Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    )

    const buttons = screen.getAllByText('Button');
    buttons.forEach((button) => {
      expect(button).toHaveClass('guwmi-btn');
      expect(button).toHaveClass('md');
      expect(button).toHaveClass('primary');
      expect(button).toHaveClass('fill');
      expect(button).toHaveClass('round');
    })
  });

  test('renders buttons with prop overrides while keeping custom classes', () => {

    render(
      <ButtonGroup size="lg" color="secondary" variant="outline" theme="pill">
        <Button href="https://www.google.com" target="_blank" size="md" color="primary" variant="fill" theme="round">Button</Button>
        <Button size="sm" color="danger" variant="ghost" theme="square" className="test-class">Button</Button>
        <Button size="md" color="primary" variant="fill" theme="round">Button</Button>
      </ButtonGroup>
    )

    const buttons = screen.getAllByText('Button');
    buttons.forEach((button, index) => {
      expect(button).toHaveClass('guwmi-btn');
      expect(button).toHaveClass('lg');
      expect(button).toHaveClass('secondary');
      expect(button).toHaveClass('outline');
      expect(button).toHaveClass('pill');
      if (index === 1) {
        expect(button).toHaveClass('test-class');
      }
    })
  })
})