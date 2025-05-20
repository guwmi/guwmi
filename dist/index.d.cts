import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { PropsWithChildren, SVGProps } from 'react';

interface ComponentProps$f extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'danger';
    variant?: 'fill' | 'outline' | 'ghost';
    theme?: 'square' | 'round' | 'pill';
    className?: string;
    onClick?: (React__default.MouseEventHandler<HTMLButtonElement> | undefined);
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    disabled?: boolean;
}
/**
 * Button Component ********************************************************************************
 * @param ComponentProps
 */
declare function Button(props: ComponentProps$f): react_jsx_runtime.JSX.Element;

interface ComponentProps$e extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'danger';
    variant?: 'fill' | 'outline' | 'ghost';
    theme?: 'square' | 'round' | 'pill';
    className?: string;
}
declare function ButtonGroup(props: ComponentProps$e): react_jsx_runtime.JSX.Element;

interface ComponentProps$d extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'black' | 'white' | 'gray';
    variant?: 'fill' | 'outline' | 'ghost';
    theme?: 'square' | 'round' | 'circle';
    className?: string;
    onClick?: (React__default.MouseEventHandler<HTMLButtonElement> | undefined);
    ariaLabel: string;
}
/**
 * Icon Button Component ********************************************************************************
 * @param ComponentProps
 */
declare function IconButton(props: ComponentProps$d): react_jsx_runtime.JSX.Element;

interface ComponentProps$c extends PropsWithChildren {
    position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
    width?: number;
    ariaLabel: string;
}
/**
 * Menu component **********************************************************************************
 * @param ComponenProps
 */
declare function Menu(props: ComponentProps$c): react_jsx_runtime.JSX.Element;

/**
 * Menu Dropdown component ************************************************************************
 * @param children - ReactElements provided as props
 */
declare function MenuDropdown(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

interface ComponentProps$b extends PropsWithChildren {
    onClick?: (React__default.MouseEventHandler<HTMLButtonElement> | undefined);
    href?: string;
}
/**
 * Menu Item component *****************************************************************************
 * @param ComponentProps
 */
declare function MenuItem(props: ComponentProps$b): react_jsx_runtime.JSX.Element;

/**
 * Menu Trigger component ************************************************************************
 * @param children - ReacElements provided as props
 */
declare function MenuTrigger(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

declare function TabsContainer(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

declare function Tabs(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

interface ComponentProps$a extends PropsWithChildren {
    index?: number;
}
declare function Tab(props: ComponentProps$a): react_jsx_runtime.JSX.Element;

declare function TabPanels(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

interface ComponentProps$9 extends PropsWithChildren {
    index?: number;
}
declare function TabPanel(props: ComponentProps$9): react_jsx_runtime.JSX.Element;

interface ComponentProps$8 {
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
declare function Table(props: ComponentProps$8): react_jsx_runtime.JSX.Element;

interface ComponentProps$7 extends PropsWithChildren {
    defaultOpen?: string;
}
declare function Accordion(props: ComponentProps$7): react_jsx_runtime.JSX.Element;

interface ComponentProps$6 extends PropsWithChildren {
    title: string;
    id: string;
}
declare function AccordionItem(props: ComponentProps$6): react_jsx_runtime.JSX.Element;

interface ComponentProps$5 extends PropsWithChildren {
    columns?: 2 | 3 | 4 | 5 | 6;
}
declare function Cards(props: ComponentProps$5): react_jsx_runtime.JSX.Element;

interface ComponentProps$4 extends PropsWithChildren {
    title?: string;
    subTitle?: string;
    image?: string;
}
declare function Card(props: ComponentProps$4): react_jsx_runtime.JSX.Element;

declare function CardSection(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

interface ComponentProps$3 {
    kind: 'error' | 'warning' | 'success';
    title?: string;
    content: string;
}
declare function Notification(props: ComponentProps$3): react_jsx_runtime.JSX.Element;

interface ComponentProps$2 extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    open: boolean;
    onClose: () => void;
    preventScroll?: boolean;
}
declare function Modal(props: ComponentProps$2): react_jsx_runtime.JSX.Element;

interface ComponentProps$1 extends PropsWithChildren {
    open: boolean;
    onClose: () => void;
    preventScroll?: boolean;
    position?: 'left' | 'right';
}
declare function Drawer(props: ComponentProps$1): react_jsx_runtime.JSX.Element;

interface ComponentProps extends SVGProps<SVGSVGElement> {
    name: 'alert-circle' | 'alert-squre' | 'alert-triangle' | 'check' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'copy' | 'close' | 'dots' | 'home' | 'info' | 'login' | 'menu' | 'progress-alert' | 'progress-check' | 'progress' | 'search' | 'settings';
    size?: number;
    stroke?: '1' | '2' | '3';
    color?: string;
    className?: string;
}
/**
 * Icon component ****************************************************************************
 * @param ComponentProps
 */
declare const Icon: React.ForwardRefExoticComponent<Omit<ComponentProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

export { Accordion, AccordionItem, Button, ButtonGroup, Card, CardSection, Cards, Drawer, Icon, IconButton, Menu, MenuDropdown, MenuItem, MenuTrigger, Modal, Notification, Tab, TabPanel, TabPanels, Table, Tabs, TabsContainer };
