// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import components
import TabsContainer from '../../components/Tabs/TabsContainer';
import Tabs from '../../components/Tabs/Tabs';
import Tab from '../../components/Tabs/Tab';
import TabPanels from '../../components/Tabs/TabPanels';
import TabPanel from '../../components/Tabs/TabPanel';

describe('Tabs Components', () => {

  const tabsJSX = 
    <TabsContainer className="override-class-container" data-testid="guwmi-tabs-container">
      <Tabs className="override-class-tabs" data-testid="guwmi-tabs-nav">
        <Tab className="override-class-tab">Item one</Tab>
        <Tab>Item two</Tab>
      </Tabs>
      <TabPanels className="override-class-panels" data-testid="guwmi-tabs-panels">
        <TabPanel className="override-class-panel">
          <p>Item one content</p>
        </TabPanel>
        <TabPanel>
          <p>Item two content</p>
        </TabPanel>
      </TabPanels>
    </TabsContainer>;
  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
  });

  test('renders correctly', () => {

    render(tabsJSX)

    const tabsContainer = screen.getByTestId('guwmi-tabs-container');
    const tabsNav = screen.getByTestId('guwmi-tabs-nav');
    const tabItems = tabsNav.querySelectorAll('button');
    const tabsPanels = screen.getByTestId('guwmi-tabs-panels');
    const tabPanelItems = tabsPanels.querySelectorAll('section');
    expect(tabsContainer).toBeInTheDocument();
    expect(tabsNav).toBeInTheDocument();
    expect(tabItems).toHaveLength(2);
    expect(tabsPanels).toBeInTheDocument();
    expect(tabPanelItems).toHaveLength(2);

  });

  test('renders with override classes', () => {

    render(tabsJSX)

    const tabsContainer = screen.getByTestId('guwmi-tabs-container');
    const tabsNav = screen.getByTestId('guwmi-tabs-nav');
    const tabItems = tabsNav.querySelectorAll('button');
    const tabsPanels = screen.getByTestId('guwmi-tabs-panels');
    const tabPanelItems = tabsPanels.querySelectorAll('section');
    expect(tabsContainer).toHaveClass('override-class-container');
    expect(tabsNav).toHaveClass('override-class-tabs');
    expect(tabItems[0]).toHaveClass('override-class-tab');
    expect(tabsPanels).toHaveClass('override-class-panels');
    expect(tabPanelItems[0]).toHaveClass('override-class-panel');
  });

  test('applies visibility to correct panels by default and on click', async () => {

    render(tabsJSX)

    const tabsNav = screen.getByTestId('guwmi-tabs-nav');
    const tabItems = tabsNav.querySelectorAll('button');
    const tabsPanels = screen.getByTestId('guwmi-tabs-panels');
    const tabPanelItems = tabsPanels.querySelectorAll('section');
    expect(tabItems[0]).toHaveClass('active');
    expect(tabPanelItems[0]).not.toHaveAttribute('hidden');
    await user.click(tabItems[1]);
    expect(tabItems[0]).not.toHaveClass('active');
    expect(tabPanelItems[0]).toHaveAttribute('hidden');
    expect(tabItems[1]).toHaveClass('active');
    expect(tabPanelItems[1]).not.toHaveAttribute('hidden');
  });

  test('renders with skeleton classes', () => {

    render (
      <TabsContainer skeleton>
        <Tabs data-testid="guwmi-tabs-nav">
          <Tab>Item one</Tab>
        </Tabs>
        <TabPanels data-testid="guwmi-tabs-panels">
          <TabPanel>
            <p>Item one content</p>
          </TabPanel>
        </TabPanels>
      </TabsContainer>
    );

    const tabsNav = screen.getByTestId('guwmi-tabs-nav');
    const tabsPanels = screen.getByTestId('guwmi-tabs-panels');
    expect(tabsNav).toHaveClass('guwmi-skeleton');
    expect(tabsPanels).toHaveClass('guwmi-skeleton');
  });

  test('handles non-element children correctly', () => {

    render (
      <TabsContainer>
        <Tabs>Test tabs child</Tabs>
        <TabPanels>Test tabs panel child</TabPanels>
      </TabsContainer>
    )

    expect(screen.getByText('Test tabs child')).toBeInTheDocument();
    expect(screen.getByText('Test tabs panel child')).toBeInTheDocument();
  })
})