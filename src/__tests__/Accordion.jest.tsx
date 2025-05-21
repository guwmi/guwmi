// import library functionality
import { render, screen, fireEvent } from '@testing-library/react';

// import component to test
import Accordion from '@components/Accordion/Accordion';
import AccordionItem from '@components/Accordion/AccrodionItem';

describe('Accordion', () => {

  const accordionItems = [
    { title: 'Item One', id: 'item-one', content: 'Lorem ipsum item one elit.' },
    { title: 'Item Two', id: 'item-two', content: 'Lorem ipsum item two elit.' },
    { title: 'Item Three', id: 'item-thrree', content: 'Lorem ipsum item three elit.' },
  ]

  test('renders all accordion titles and hides content by default', () => {
    render(
      <Accordion>
        {accordionItems.map((item, index) => (
          <AccordionItem title={item.title} id={item.id} key={index}>
            <p>{item.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    )
    accordionItems.forEach((item) => {
      expect(screen.getByRole('button', { name: item.title })).toBeInTheDocument();
      expect(screen.getByTestId(item.id)).toHaveAttribute('hidden');
    })
  });

  test('renders accordion with the default item expanded', () => {
    const openId = accordionItems[1].id;
    render(
      <Accordion defaultOpen={openId}>
        {accordionItems.map((item, index) => (
          <AccordionItem title={item.title} id={item.id} key={index}>
            <p>{item.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    )
    accordionItems.forEach((item) => {
      expect(screen.getByRole('button', { name: item.title })).toBeInTheDocument();
      if (item.id === openId) {
        expect(screen.getByTestId(item.id)).not.toHaveAttribute('hidden');
      } else {
        expect(screen.getByTestId(item.id)).toHaveAttribute('hidden');
      }
    })
  });

  test('expands an accordion item when its title is clicked', () => {
    render(
      <Accordion>
        {accordionItems.map((item, index) => (
          <AccordionItem title={item.title} id={item.id} key={index}>
            <p>{item.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    )
    const openItem = accordionItems[0];
    const itemButton = screen.getByRole('button', { name: openItem.title })
    fireEvent.click(itemButton);
    accordionItems.forEach((item) => {
      if (item.id === openItem.id) {
        expect(screen.getByTestId(item.id)).not.toHaveAttribute('hidden');
      } else {
        expect(screen.getByTestId(item.id)).toHaveAttribute('hidden');
      }
    })
  });

  test('collapses an open accordion item when its title is clicked again', async () => {
    render(
      <Accordion>
        {accordionItems.map((item, index) => (
          <AccordionItem title={item.title} id={item.id} key={index}>
            <p>{item.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    )
    const openItem = accordionItems[0];
    const itemButton = screen.getByRole('button', { name: openItem.title })
    const itemSection = screen.getByTestId(openItem.id);

    fireEvent.click(itemButton);
    expect(itemSection).not.toHaveAttribute('hidden');

    fireEvent.click(itemButton);
    setTimeout(() => { // Need to convert to watch for tansitonend, but no animation is longer than 0.6s so this will work for now
      expect(itemSection).toHaveAttribute('hidden');
    }, 600)
  });

  test('applies correct accessibility attributes', () => {
    render(
      <Accordion>
        {accordionItems.map((item, index) => (
          <AccordionItem title={item.title} id={item.id} key={index}>
            <p>{item.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    )
    
    const openItem = accordionItems[0];
    const itemButton = screen.getByRole('button', { name: openItem.title });
    const itemSection = screen.getByTestId(openItem.id);
    expect(itemButton).toHaveAttribute('aria-controls', `guwmi-accordion-panel-${openItem.id}`);
    expect(itemSection).toHaveAttribute('aria-labelledby', `guwmi-accordion-controller-${openItem.id}`);
    expect(itemButton).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(itemButton);
    expect(itemButton).toHaveAttribute('aria-expanded', 'true')
  });
})