import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { PropsWithChildren, SVGProps } from 'react';

interface ComponentProps$j extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'danger' | 'neutral';
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
declare function Button(props: ComponentProps$j): react_jsx_runtime.JSX.Element;

interface ComponentProps$i extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    color?: 'neutral' | 'primary' | 'secondary' | 'danger';
    variant?: 'fill' | 'outline' | 'ghost';
    theme?: 'square' | 'round' | 'pill';
    className?: string;
}
declare function ButtonGroup(props: ComponentProps$i): react_jsx_runtime.JSX.Element;

interface ComponentProps$h extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'danger';
    variant?: 'fill' | 'outline' | 'ghost';
    theme?: 'square' | 'round' | 'circle';
    className?: string;
    onClick?: (React__default.MouseEventHandler<HTMLButtonElement> | undefined);
    ariaLabel: string;
    disabled?: boolean;
}
/**
 * Icon Button Component ********************************************************************************
 * @param ComponentProps
 */
declare function IconButton(props: ComponentProps$h): react_jsx_runtime.JSX.Element;

interface ComponentProps$g extends PropsWithChildren {
    position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
    width?: number;
    ariaLabel: string;
}
/**
 * Menu component **********************************************************************************
 * @param ComponenProps
 */
declare function Menu(props: ComponentProps$g): react_jsx_runtime.JSX.Element;

/**
 * Menu Dropdown component ************************************************************************
 * @param children - ReactElements provided as props
 */
declare function MenuDropdown(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

interface ComponentProps$f extends PropsWithChildren {
    onClick?: (React__default.MouseEventHandler<HTMLButtonElement> | undefined);
    href?: string;
}
/**
 * Menu Item component *****************************************************************************
 * @param ComponentProps
 */
declare function MenuItem(props: ComponentProps$f): react_jsx_runtime.JSX.Element;

/**
 * Menu Trigger component ************************************************************************
 * @param children - ReacElements provided as props
 */
declare function MenuTrigger(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

declare function TabsContainer(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

declare function Tabs(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

interface ComponentProps$e extends PropsWithChildren {
    index?: number;
}
declare function Tab(props: ComponentProps$e): react_jsx_runtime.JSX.Element;

declare function TabPanels(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

interface ComponentProps$d extends PropsWithChildren {
    index?: number;
}
declare function TabPanel(props: ComponentProps$d): react_jsx_runtime.JSX.Element;

interface ComponentProps$c {
    title?: string;
    description?: string;
    headers: {
        title: string;
        key: string;
        search?: 'includes' | 'starts-with';
    }[];
    rows: {
        id: number | string;
        [key: string]: any;
    }[];
    isCondensed?: boolean;
}
declare function Table(props: ComponentProps$c): react_jsx_runtime.JSX.Element;

interface ComponentProps$b extends PropsWithChildren {
    defaultOpen?: string;
}
declare function Accordion(props: ComponentProps$b): react_jsx_runtime.JSX.Element;

interface ComponentProps$a extends PropsWithChildren {
    title: string;
    id: string;
}
declare function AccordionItem(props: ComponentProps$a): react_jsx_runtime.JSX.Element;

interface ComponentProps$9 extends PropsWithChildren {
    columns?: 2 | 3 | 4 | 5 | 6;
}
declare function Cards(props: ComponentProps$9): react_jsx_runtime.JSX.Element;

interface ComponentProps$8 extends PropsWithChildren {
    title?: string;
    subTitle?: string;
    image?: string;
}
declare function Card(props: ComponentProps$8): react_jsx_runtime.JSX.Element;

declare function CardSection(props: PropsWithChildren): react_jsx_runtime.JSX.Element;

interface ComponentProps$7 {
    kind: 'error' | 'warning' | 'success';
    title?: string;
    content: string;
}
declare function Notification(props: ComponentProps$7): react_jsx_runtime.JSX.Element;

interface ComponentProps$6 extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    open: boolean;
    onClose: () => void;
    preventScroll?: boolean;
}
declare function Modal(props: ComponentProps$6): react_jsx_runtime.JSX.Element;

interface ComponentProps$5 extends PropsWithChildren {
    open: boolean;
    onClose: () => void;
    preventScroll?: boolean;
    position?: 'left' | 'right';
}
declare function Drawer(props: ComponentProps$5): react_jsx_runtime.JSX.Element;

interface ComponentProps$4 extends SVGProps<SVGSVGElement> {
    name: 'alert-circle' | 'alert-squre' | 'alert-triangle' | 'check' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'copy' | 'close' | 'dots' | 'external-link' | 'hide' | 'home' | 'info' | 'login' | 'menu' | 'progress-alert' | 'progress-check' | 'progress' | 'search' | 'settings' | 'view';
    size?: number;
    stroke?: '1' | '2' | '3';
    color?: string;
    className?: string;
}
/**
 * Icon component ****************************************************************************
 * @param ComponentProps
 */
declare const Icon: React$1.ForwardRefExoticComponent<Omit<ComponentProps$4, "ref"> & React$1.RefAttributes<SVGSVGElement>>;

interface ComponentProps$3 {
    label: string;
    hideLabel?: boolean;
    id?: string;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    value?: string;
    readOnly?: boolean;
    error?: string;
    hasError?: boolean;
    maxLength?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
declare function PasswordInput(props: ComponentProps$3): react_jsx_runtime.JSX.Element;

interface ComponentProps$2 {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
}
declare function SearchInput(props: ComponentProps$2): react_jsx_runtime.JSX.Element;

interface ComponentProps$1 {
    label: string;
    hideLabel?: boolean;
    id?: string;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    value?: string;
    readOnly?: boolean;
    error?: string;
    hasError?: boolean;
    maxLength?: number;
    rows?: number;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}
declare function TextArea(props: ComponentProps$1): react_jsx_runtime.JSX.Element;

interface ComponentProps {
    label: string;
    hideLabel?: boolean;
    id?: string;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    value?: string;
    readOnly?: boolean;
    error?: string;
    hasError?: boolean;
    maxLength?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
declare function TextInput(props: ComponentProps): react_jsx_runtime.JSX.Element;

export { Accordion, AccordionItem, Button, ButtonGroup, Card, CardSection, Cards, Drawer, Icon, IconButton, Menu, MenuDropdown, MenuItem, MenuTrigger, Modal, Notification, PasswordInput, SearchInput, Tab, TabPanel, TabPanels, Table, Tabs, TabsContainer, TextArea, TextInput };
