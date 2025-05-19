import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { PropsWithChildren } from 'react';

interface ComponentProps$e extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'danger';
    variant?: 'fill' | 'outline' | 'ghost';
    theme?: 'square' | 'round' | 'pill';
    className?: string;
    onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    disabled?: boolean;
}
/**
 * Button Component ********************************************************************************
 * @param ComponentProps
 */
declare function Button(props: ComponentProps$e): react_jsx_runtime.JSX.Element;

interface ComponentProps$d extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'danger';
    variant?: 'fill' | 'outline' | 'ghost';
    theme?: 'square' | 'round' | 'pill';
    className?: string;
}
declare function ButtonGroup(props: ComponentProps$d): react_jsx_runtime.JSX.Element;

interface ComponentProps$c extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'black' | 'white' | 'gray';
    variant?: 'fill' | 'outline' | 'ghost';
    theme?: 'square' | 'round' | 'circle';
    className?: string;
    onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
    ariaLabel: string;
}
/**
 * Icon Button Component ********************************************************************************
 * @param ComponentProps
 */
declare function IconButton(props: ComponentProps$c): react_jsx_runtime.JSX.Element;

interface ComponentProps$b extends PropsWithChildren {
    position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
    width?: number;
    ariaLabel: string;
}
/**
 * Menu component **********************************************************************************
 * @param ComponenProps
 */
declare function Menu(props: ComponentProps$b): react_jsx_runtime.JSX.Element;

/**
 * Menu Dropdown component ************************************************************************
 * @param children - ReactElements provided as props
 */
declare function MenuDropdown(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

interface ComponentProps$a extends PropsWithChildren {
    onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
    href?: string;
}
/**
 * Menu Item component *****************************************************************************
 * @param ComponentProps
 */
declare function MenuItem(props: ComponentProps$a): react_jsx_runtime.JSX.Element;

/**
 * Menu Trigger component ************************************************************************
 * @param children - ReacElements provided as props
 */
declare function MenuTrigger(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

declare function TabsContainer(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

declare function Tabs(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

interface ComponentProps$9 extends PropsWithChildren {
    index?: number;
}
declare function Tab(props: ComponentProps$9): react_jsx_runtime.JSX.Element;

declare function TabPanels(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

interface ComponentProps$8 extends PropsWithChildren {
    index?: number;
}
declare function TabPanel(props: ComponentProps$8): react_jsx_runtime.JSX.Element;

interface ComponentProps$7 {
    headers: {
        title: string;
        key: string;
    }[];
    rows: {
        id: number | string;
        [key: string]: any;
    }[];
    isCondensed?: boolean;
    isSearchable?: boolean;
}
declare function Table(props: ComponentProps$7): react_jsx_runtime.JSX.Element;

interface ComponentProps$6 extends PropsWithChildren {
    defaultOpen?: string;
}
declare function Accordion(props: ComponentProps$6): react_jsx_runtime.JSX.Element;

interface ComponentProps$5 extends PropsWithChildren {
    title: string;
    id: string;
}
declare function AccordionItem(props: ComponentProps$5): react_jsx_runtime.JSX.Element;

interface ComponentProps$4 extends PropsWithChildren {
    columns?: 2 | 3 | 4 | 5 | 6;
}
declare function Cards(props: ComponentProps$4): react_jsx_runtime.JSX.Element;

interface ComponentProps$3 extends PropsWithChildren {
    title?: string;
    subTitle?: string;
    image?: string;
}
declare function Card(props: ComponentProps$3): react_jsx_runtime.JSX.Element;

declare function CardSection(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

interface ComponentProps$2 {
    kind: 'error' | 'warning' | 'success';
    title?: string;
    content: string;
}
declare function Notification(props: ComponentProps$2): react_jsx_runtime.JSX.Element;

interface ComponentProps$1 extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    open: boolean;
    onClose: () => void;
    preventScroll?: boolean;
}
declare function Modal(props: ComponentProps$1): react_jsx_runtime.JSX.Element;

interface ComponentProps extends PropsWithChildren {
    open: boolean;
    onClose: () => void;
    preventScroll?: boolean;
    position?: 'left' | 'right';
}
declare function Drawer(props: ComponentProps): react_jsx_runtime.JSX.Element;

export { Accordion, AccordionItem, Button, ButtonGroup, Card, CardSection, Cards, Drawer, IconButton, Menu, MenuDropdown, MenuItem, MenuTrigger, Modal, Notification, Tab, TabPanel, TabPanels, Table, Tabs, TabsContainer };
