// import library functionality
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import component to test
import Accordion from '../../components/Accordion/Accordion';
import AccordionItem from '../../components/Accordion/AccrodionItem';

describe('Accordion Component', () => {

  const accordionItems = [
    { title: 'Item One', id: 'item-one', content: 'Lorem ipsum item one elit.' },
    { title: 'Item Two', id: 'item-two', content: 'Lorem ipsum item two elit.' },
    { title: 'Item Three', id: 'item-thrree', content: 'Lorem ipsum item three elit.' },
  ];
  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
  });

  test('renders all titles and hides content by default', () => {

    render(
      <Accordion>
        {accordionItems.map((item, index) => (
          <AccordionItem title={item.title} id={item.id} key={index} data-testid={item.id}>
            <p>{item.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    )
    accordionItems.forEach((item) => {
      expect(screen.getByRole('button', { name: item.title })).toBeInTheDocument();
      expect(screen.getByTestId(item.id).querySelector('section')).toHaveAttribute('hidden');
    })
  });

  test('renders with the default item expanded', () => {

    const openId = accordionItems[1].id;
    render(
      <Accordion defaultOpen={openId}>
        {accordionItems.map((item, index) => (
          <AccordionItem title={item.title} id={item.id} key={index} data-testid={item.id}>
            <p>{item.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    )
    
    accordionItems.forEach((item) => {
      expect(screen.getByRole('button', { name: item.title })).toBeInTheDocument();
      if (item.id === openId) {
        expect(screen.getByTestId(item.id).querySelector('section')).not.toHaveAttribute('hidden');
      } else {
        expect(screen.getByTestId(item.id).querySelector('section')).toHaveAttribute('hidden');
      }
    })
  });

  test('expands item when its title is clicked', async () => {

    render(
      <Accordion>
        {accordionItems.map((item, index) => (
          <AccordionItem title={item.title} id={item.id} key={index} data-testid={item.id}>
            <p>{item.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    )

    const openItem = accordionItems[0];
    const itemButton = screen.getByRole('button', { name: openItem.title })
    await user.click(itemButton);
    accordionItems.forEach((item) => {
      if (item.id === openItem.id) {
        expect(screen.getByTestId(item.id).querySelector('section')).not.toHaveAttribute('hidden');
      } else {
        expect(screen.getByTestId(item.id).querySelector('section')).toHaveAttribute('hidden');
      }
    })
  });

  test('collapses an item when its title is clicked again', async () => {

    render(
      <Accordion>
        {accordionItems.map((item, index) => (
          <AccordionItem title={item.title} id={item.id} key={index} data-testid={item.id}>
            <p>{item.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    )

    const openItem = accordionItems[0];
    const itemButton = screen.getByRole('button', { name: openItem.title })
    const itemSection = screen.getByTestId(openItem.id).querySelector('section');
    expect(itemSection).toHaveAttribute('hidden');
    await user.click(itemButton);
    expect(itemSection).not.toHaveAttribute('hidden');
    await user.click(itemButton);
    fireEvent.transitionEnd(itemSection);
    expect(itemSection).toHaveAttribute('hidden');
  });

  test('renders with correct accessibility attributes', async () => {

    render(
      <Accordion>
        {accordionItems.map((item, index) => (
          <AccordionItem title={item.title} id={item.id} key={index} data-testid={item.id}>
            <p>{item.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    )
    
    const openItem = accordionItems[0];
    const itemButton = screen.getByRole('button', { name: openItem.title });
    const itemSection = screen.getByTestId(openItem.id).querySelector('section');
    expect(itemButton).toHaveAttribute('aria-controls', `guwmi-accordion-panel-${openItem.id}`);
    expect(itemSection).toHaveAttribute('aria-labelledby', `guwmi-accordion-controller-${openItem.id}`);
    expect(itemButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(itemButton);
    expect(itemButton).toHaveAttribute('aria-expanded', 'true')
  });

  test('renders with override classes', () => {

    render(
      <Accordion className="override-class" data-testid="guwmi-accordion">
        <AccordionItem title="test title" id="test-id" className="override-class" data-testid="guwmi-accordion-item">
          <p>test content</p>
        </AccordionItem>
      </Accordion>
    )
    
    const accordion = screen.getByTestId('guwmi-accordion');
    expect(accordion).toHaveClass('override-class');
    const accordionItem = screen.getByTestId('guwmi-accordion-item');
    expect(accordionItem).toHaveClass('override-class');
  });
})