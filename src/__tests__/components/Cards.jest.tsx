// import library functionality
import { render, screen } from '@testing-library/react';

// import components
import Grid from '../../components/Grid/Grid';
import Card from '../../components/Cards/Card';
import CardSection from '../../components/Cards/CardSection';

describe('Card Component', () => {

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

  test('renders correctly y default', () => {
    
    render(
      <Grid data-testid="guwmi-card-grid">
        {cards.map((card, index) => (
          <Card key={index}>
            {sections.map((section, index) => (
              <CardSection key={index}>
                <p>{section.content}</p>
              </CardSection>
            ))}
          </Card>
        ))}
      </Grid>
    )

    const cardGrid = screen.getByTestId('guwmi-card-grid');
    const images = cardGrid.querySelectorAll('img');
    expect(images).toHaveLength(0)
    const titles = cardGrid.querySelectorAll('h2');
    expect(titles).toHaveLength(0)
    const subTitles = cardGrid.querySelectorAll('h3');
    expect(subTitles).toHaveLength(0)
  });

  test('renders with mixed props provided', () => {

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
      <Grid data-testid="guwmi-card-grid">
        {mixedCards.map((card, index) => (
          <Card title={card.title} subTitle={card.subTitle} image={card.image} key={index}>
            {sections.map((section, index) => (
              <CardSection key={index}>
                <p>{section.content}</p>
              </CardSection>
            ))}
          </Card>
        ))}
      </Grid>
    )

    const cardGrid = screen.getByTestId('guwmi-card-grid');
    const images = cardGrid.querySelectorAll('img');
    expect(images).toHaveLength(5)
    const titles = cardGrid.querySelectorAll('h2');
    expect(titles).toHaveLength(5)
    const subTitles = cardGrid.querySelectorAll('h3');
    expect(subTitles).toHaveLength(5)
  });

  test('renders with override classes', () => {
    
    render(
      <Card className="override-class" data-testid="guwmi-card">
        <CardSection className="override-class" data-testid="guwmi-card-section">
          <p>test</p>
        </CardSection>
    </Card>
    )

    const card = screen.getByTestId('guwmi-card');
    expect(card).toHaveClass('override-class');
    const section = screen.getByTestId('guwmi-card-section');
    expect(section).toHaveClass('override-class');
  });
})