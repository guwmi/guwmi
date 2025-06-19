// import library functionality
import { render, screen } from '@testing-library/react';

// import component to test
import SkeletonBlock from '../../components/Skeletons/SkeletonBlock';
import SkeletonHeading from '../../components/Skeletons/SkeletonHeading';
import SkeletonParagraph from '../../components/Skeletons/SkeletonParagraph';

describe('Skeleton Components', () => {

  test('renders with correct skeleton headers', () => {

    const { rerender } = render ( <SkeletonHeading heading="h1" data-testid="guwmi-skeleton-heading" /> );
    let heading = screen.getByTestId('guwmi-skeleton-heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveProperty('tagName', 'H1');

    rerender ( <SkeletonHeading heading="h2" data-testid="guwmi-skeleton-heading" /> );
    heading = screen.getByTestId('guwmi-skeleton-heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveProperty('tagName', 'H2');

    rerender ( <SkeletonHeading heading="h3" data-testid="guwmi-skeleton-heading" /> );
    heading = screen.getByTestId('guwmi-skeleton-heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveProperty('tagName', 'H3');

    rerender ( <SkeletonHeading heading="h4" data-testid="guwmi-skeleton-heading" /> );
    heading = screen.getByTestId('guwmi-skeleton-heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveProperty('tagName', 'H4');

    rerender ( <SkeletonHeading heading="h5" data-testid="guwmi-skeleton-heading" /> );
    heading = screen.getByTestId('guwmi-skeleton-heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveProperty('tagName', 'H5');

    rerender ( <SkeletonHeading heading="h6" data-testid="guwmi-skeleton-heading" /> );
    heading = screen.getByTestId('guwmi-skeleton-heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveProperty('tagName', 'H6');
  });

  test('renders with correct number of skeleton paragraph lines', () => {

    render ( <SkeletonParagraph numLines={5} data-testid="guwmi-skeleton-paragraph" /> );

    const paragraph = screen.getByTestId('guwmi-skeleton-paragraph');
    const spans = paragraph.querySelectorAll('span');
    expect(spans).toHaveLength(5);
  });

  test('renders skeleton block with correct height and width', () => {

    render ( <SkeletonBlock height={475} width={132} data-testid="guwmi-skeleton-block" /> );

    const block = screen.getByTestId('guwmi-skeleton-block');
    expect(block).toHaveStyle('height: 475px');
    expect(block).toHaveStyle('width: 132px');
  });
})