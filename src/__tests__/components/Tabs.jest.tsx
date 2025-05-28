// import library functionality
import { render, screen, fireEvent } from '@testing-library/react';

// import components
import TabsContainer from '@components/Tabs/TabsContainer';
import Tabs from '@components/Tabs/Tabs';
import Tab from '@components/Tabs/Tab';
import TabPanels from '@components/Tabs/TabPanels';
import TabPanel from '@components/Tabs/TabPanel';

describe('Tabs', () => {

  const tabsJSX = 
    <TabsContainer data-testid="guwmi-tabs-container">
      <Tabs data-testid="guwmi-tabs-nav">
        <Tab>Item one</Tab>
        <Tab>Item two</Tab>
      </Tabs>
      <TabPanels data-testid="guwmi-tabs-panels">
        <TabPanel>
          <p>Item one content</p>
        </TabPanel>
        <TabPanel>
          <p>Item two content</p>
        </TabPanel>
      </TabPanels>
    </TabsContainer>;

  test('renders tabs correctly', () => {

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
  })

  test('tabs visibility applies to correct panels by default and on click', () => {

    render(tabsJSX)

    const tabsNav = screen.getByTestId('guwmi-tabs-nav');
    const tabItems = tabsNav.querySelectorAll('button');
    const tabsPanels = screen.getByTestId('guwmi-tabs-panels');
    const tabPanelItems = tabsPanels.querySelectorAll('section');
    expect(tabItems[0]).toHaveClass('active');
    expect(tabPanelItems[0]).not.toHaveAttribute('hidden');
    fireEvent.click(tabItems[1]);
    expect(tabItems[0]).not.toHaveClass('active');
    expect(tabPanelItems[0]).toHaveAttribute('hidden');
    expect(tabItems[1]).toHaveClass('active');
    expect(tabPanelItems[1]).not.toHaveAttribute('hidden');
  })
})