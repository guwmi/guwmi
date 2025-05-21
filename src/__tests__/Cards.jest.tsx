// import library functionality
import { render, screen } from '@testing-library/react';

// import components
import Cards from '@components/Cards/Cards';
import Card from '@components/Cards/Card';
import CardSection from '@components/Cards/CardSection';

describe('Cards', () => {

  const cards = [
    { title: 'Card one', subTitle: 'Card one subtitle', image: '/file.jpg' },
    { title: 'Card two', subTitle: 'Card two subtitle', image: '/file.jpg' },
    { title: 'Card three', subTitle: 'Card three subtitle', image: '/file.jpg' },
    { title: 'Card four', subTitle: 'Card four subtitle', image: '/file.jpg' },
    { title: 'Card five', subTitle: 'Card five subtitle', image: '/file.jpg' },
    { title: 'Card six', subTitle: 'Card six subtitle', image: '/file.jpg' }
  ]

  const sections = [
    { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { content: 'In convallis, sapien at scelerisque accumsan, enim mi sollicitudin nisl.'}
  ]

  test('renders cards without any props provided', () => {
    
    render(
      <Cards>
        {cards.map((card, index) => (
          <Card key={index}>
            {sections.map((section, index) => (
              <CardSection key={index}>
                <p>{section.content}</p>
              </CardSection>
            ))}
          </Card>
        ))}
      </Cards>
    )

    const images = screen.queryAllByTestId('guwmi-card-image');
    expect(images).toHaveLength(0)
    const titles = screen.queryAllByTestId('guwmi-card-title');
    expect(titles).toHaveLength(0)
    const subTitles = screen.queryAllByTestId('guwmi-card-sub-title');
    expect(subTitles).toHaveLength(0)
  });

  test('renders cards with mixed props provided', () => {

    const mixedCards = cards.map((card, index) => {
      if (index === 1) {
        return { ...card, image: '' }
      } else if (index === 2) {
        return { ...card, title: '' }
      } else if (index === 3) {
        return { ...card, subTitle: '' }
      } else {
        return card;
      }
    })
    
    render(
      <Cards>
        {mixedCards.map((card, index) => (
          <Card title={card.title} subTitle={card.subTitle} image={card.image} key={index}>
            {sections.map((section, index) => (
              <CardSection key={index}>
                <p>{section.content}</p>
              </CardSection>
            ))}
          </Card>
        ))}
      </Cards>
    )

    const images = screen.queryAllByTestId('guwmi-card-image');
    expect(images).toHaveLength(5)
    const titles = screen.queryAllByTestId('guwmi-card-title');
    expect(titles).toHaveLength(5)
    const subTitles = screen.queryAllByTestId('guwmi-card-sub-title');
    expect(subTitles).toHaveLength(5)
  });

  test('renders cards with the correct column class', () => {

    const columnCount = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
    
    render(
      //@ts-ignore ---- type will never mismatch despite number note matching 2 | 3 | 4 | 5 | 6
      <Cards columns={columnCount}>
        {cards.map((card, index) => (
          <Card key={index}>
            {sections.map((section, index) => (
              <CardSection key={index}>
                <p>{section.content}</p>
              </CardSection>
            ))}
          </Card>
        ))}
      </Cards>
    )

    const cardContainer = screen.getByTestId('guwmi-card-grid');
    switch(columnCount) {
      case 2:
        expect(cardContainer).toHaveClass('two');
        break;
      case 4:
        expect(cardContainer).toHaveClass('four');
        break;
      case 5:
        expect(cardContainer).toHaveClass('five');
        break;
      case 6:
        expect(cardContainer).toHaveClass('six');
        break;
      default:
        expect(cardContainer).toHaveClass('three');
    }
  });
})