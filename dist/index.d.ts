import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { PropsWithChildren, JSX, SVGProps } from 'react';

interface AccordionProps extends PropsWithChildren {
    defaultOpen?: string;
    className?: string;
    skeleton?: boolean;
}
/**
 * Accordion component **********************************************************************
 *
 * @param defaultOpen - (optional) string value of the accordion id to have open by default
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 *
 */
declare function Accordion(props: AccordionProps): react_jsx_runtime.JSX.Element;

interface AccordionItemProps extends PropsWithChildren {
    title: string;
    id: string;
    className?: string;
}
/**
 * Accordion item component *****************************************************************
 *
 * @param title - string value for the accordion title (button that opperates the accordion)
 * @param id - string value for the id of the accordion content
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare function AccordionItem(props: AccordionItemProps): react_jsx_runtime.JSX.Element;

interface BreadcrumbsProps {
    ariaLabel: string;
    links: {
        text: string;
        href?: string;
        onClick?: () => void;
        disabled?: boolean;
    }[];
    hasBackground?: boolean;
    className?: string;
    skeleton?: boolean;
}
/**
 * Breadcrumbs component ********************************************************************
 *
 * * If a link includes an href and are not disabled, it will render as an anchor element,
 *   otherwise it will render as a button element
 *
 * * The last link will always render as the 'current-location' <a> element without an href of onClick
 *
 * @param ariaLabel - string value for the aria-label property of the breadcrumbs nav element
 * @param links - array of link objects:
 *  - text - string value for the text of a link
 *  - href - (optional) string value for the href property of a link
 *  - onClick - (optional) function to be use onClick in place of an href (helpful for router pushing in SPAs)
 *  - disabled - (optionsl) boolean value that determines the disabled state of a link
 * @param hasBackground - (optional) boolean value that determines if the breadcrumbs are wrapped in a container with a background
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 *
 */
declare function Breadcrumbs(props: BreadcrumbsProps): react_jsx_runtime.JSX.Element;

interface ButtonProps extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'danger' | 'neutral';
    variant?: 'fill' | 'outline' | 'ghost';
    theme?: 'square' | 'round' | 'pill';
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    disabled?: boolean;
    className?: string;
    skeleton?: boolean;
    onClick?: (React__default.MouseEventHandler<HTMLButtonElement> | undefined);
}
/**
 * Button component ********************************************************************************
 *
 * * If a button includes an href and is not disabled or skeleton, it will render as an anchor element,
 *   otherwise it will render as a button element
 *
 * @param size - (options) size value of 'sm', 'md', or 'lg' - defaults to 'md'
 * @param color - (optional) color value of 'primary', 'secondary', 'danger', 'neutral' - defaults to 'primary'
 * @param variant - (optional) variant value of 'fill', 'outline', or 'ghost' - defaults to 'fill'
 * @param theme - (optional) theme value of 'square', 'round', or 'pill' - defaults to 'round'
 * @param href - (optional) string value for the href property of a button (link)
 * @param target - (optional) target value of '_blank', '_self', '_parent', or '_top' - only applies to buttons with an href property
 * @param disabled - (optionsl) boolean value that determines the disabled state of a link
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onClick - (optional) function to be called onClick
 *
 */
declare function Button(props: ButtonProps): react_jsx_runtime.JSX.Element;

interface ButtonGroupProps extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    color?: 'neutral' | 'primary' | 'secondary' | 'danger';
    variant?: 'fill' | 'outline' | 'ghost';
    theme?: 'square' | 'round' | 'pill';
    className?: string;
    skeleton?: boolean;
}
/**
 * Button Group component *******************************************************************
 *
 * @param size - (options) size value of 'sm', 'md', or 'lg' - defaults to 'md'
 * @param color - (optional) color value of 'primary', 'secondary', 'danger', 'neutral' - defaults to 'primary'
 * @param variant - (optional) variant value of 'fill', 'outline', or 'ghost' - defaults to 'fill'
 * @param theme - (optional) theme value of 'square', 'round', or 'pill' - defaults to 'round'
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 *
 */
declare function ButtonGroup(props: ButtonGroupProps): react_jsx_runtime.JSX.Element;

interface CardProps extends PropsWithChildren {
    title?: string;
    subTitle?: string;
    image?: string;
    className?: string;
    skeleton?: boolean;
}
/**
 * Card component ***************************************************************************
 *
 * @param title - (optional) string value for the title of the card - renders as <h2> element
 * @param subTitle - (optional) string value for the sub title of the card - renders as an <h3> element
 * @param image - (optional) string value for the url of an image for the card
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 *
 */
declare function Card(props: CardProps): react_jsx_runtime.JSX.Element;

interface CardSectionProps extends PropsWithChildren {
    className?: string;
}
/**
 * Card Section component *******************************************************************
 *
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare function CardSection(props: CardSectionProps): react_jsx_runtime.JSX.Element;

interface CheckboxProps {
    label: string;
    id?: string;
    name?: string;
    disabled?: boolean;
    value?: string;
    checked?: boolean;
    readOnly?: boolean;
    className?: string;
    skeleton?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
/**
 * Checkbox component ***********************************************************************
 *
 * @param label - string value for the input label
 * @param id - (optional) string value for the id proprty on the input
 * @param name - (optional) string value for the name proprty on the input
 * @param disabled - (optional) boolean value for the disabled state of the input
 * @param value - (optional) string value for the value proprty on the input
 * @param checked - (optional) boolean value fto determine the input checked state
 * @param readOnly - (optional) boolean value for the readOnly state of the input
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onChange - (optional) function to be called when the input value changes
 * @param onBlur - (optional) function to be called when focus leaves the input
 * @param onFocus - (optional) function to be called when the input recieves focus
 *
 */
declare function Checkbox(props: CheckboxProps): react_jsx_runtime.JSX.Element;

interface ContainerProps extends PropsWithChildren {
    header?: JSX.Element;
    sidebar?: JSX.Element;
    sidebarAria?: string;
    className?: string;
}
/**
 * Container component **********************************************************************
 *
 * @param header - (optional) JSX to render inside a <header> element inside of the container
 * @param sidebar - (optional) JSX to render inside an <aside> element inside of the container
 * @param sidebarAria - (optional) string value for the sidebar aria-label - defaults to 'Application sidebar'
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare function Container(props: ContainerProps): react_jsx_runtime.JSX.Element;

interface DrawerProps extends PropsWithChildren {
    open: boolean;
    preventScroll?: boolean;
    position?: 'left' | 'right';
    className?: string;
    onClose: () => void;
}
/**
 * Drawer component *************************************************************************
 *
 * @param open - boolean value that determines of the drawer is displayed (or in the DOM)
 * @param preventScroll - (optional) boolean value that determines if scrolling should be prevented while the drawer is open
 * @param position - (optional) value of 'left' or 'right' the determines the drawers position - defaults to 'left'
 * @param className - (optional) string value of class names to apply to the component
 * @param onClose - callback function called on any "closing" events like escape key press or close button click
 *
 */
declare function Drawer(props: DrawerProps): react_jsx_runtime.JSX.Element;

interface GridProps extends PropsWithChildren {
    columns?: 'auto' | 2 | 3 | 4 | 5 | 6;
    spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    wrap?: 'wrap' | 'no-wrap';
    rowOrder?: 'standard' | 'reverse';
    align?: 'left' | 'right' | 'center';
    className?: string;
}
/**
 * Grid component ****************************************************************************
 *
 * @param columns - (optional) value of 'auto', 2, 3, 4, 5, or 6 for the number of columns per row - defaults to 3
 * @param spacing - (optional) value of 0, 1, 2, 3, 4, 5, or 6 for the gap spacing between columns - defaults to 1
 * @param wrap - (optional) value of 'wrap' or 'no-wrap' determines if grid should wrap rows or force on one row - defaults to 'wrap'
 * @param rowOrder - (optional) value of 'standard' or 'reverse' dtermines the order of the columns in each row - defaults to 'standard'
 * @param align - (optional) value of 'left', 'right', or 'center' determines the alignment of columns in a row - defaults to 'left'
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare function Grid(props: GridProps): react_jsx_runtime.JSX.Element;

type IconName = 'alert-circle' | 'alert-square' | 'alert-triangle' | 'check' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'copy' | 'close' | 'dots' | 'external-link' | 'hide' | 'home' | 'info' | 'login' | 'menu' | 'progress-alert' | 'progress-check' | 'progress' | 'search' | 'settings' | 'trash' | 'user' | 'view';
interface IconProps extends SVGProps<SVGSVGElement> {
    ariaLabel?: string;
    name: IconName;
    size?: number;
    stroke?: '1' | '2' | '3';
    color?: string;
    className?: string;
}
/**
 * Icon component ****************************************************************************
 *
 * @param ariaLabel - (optional) string value to override the svg aria-label property
 * @param name - string value for the icon SVG to render.  options are:
 * * 'alert-circle'
 * * 'alert-square'
 * * 'alert-triangle'
 * * 'check'
 * * 'chevron-down'
 * * 'chevron-left'
 * * 'chevron-right'
 * * 'chevron-up'
 * * 'copy'
 * * 'close'
 * * 'dots'
 * * 'external-link'
 * * 'hide'
 * * 'home'
 * * 'info'
 * * 'login'
 * * 'menu'
 * * 'progress-alert'
 * * 'progress-check'
 * * 'progress'
 * * 'search'
 * * 'settings'
 * * 'trash'
 * * 'user'
 * * 'view';
 * @param size - (optional) number value for the size of the icon - defaults to 24
 * @param stroke - (optional) value of '1', '2', or '3' to determine the strokeWidth property of the SVG - defaults to '2'
 * @param color - (optional) string value for the color "stroke" property of the SVG - defaults to "currentColor"
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare const Icon: React$1.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React$1.RefAttributes<SVGSVGElement>>;

interface IconButtonProps extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'danger';
    variant?: 'fill' | 'outline' | 'ghost';
    theme?: 'square' | 'round' | 'circle';
    ariaLabel: string;
    disabled?: boolean;
    className?: string;
    skeleton?: boolean;
    onClick?: (React__default.MouseEventHandler<HTMLButtonElement> | undefined);
}
/**
 * Icon Button component ********************************************************************
 *
 * @param size - (options) size value of 'sm', 'md', or 'lg' - defaults to 'md'
 * @param color - (optional) color value of 'primary', 'secondary', or 'danger' - defaults to 'primary'
 * @param variant - (optional) variant value of 'fill', 'outline', or 'ghost' - defaults to 'fill'
 * @param theme - (optional) theme value of 'square', 'round', or 'pill' - defaults to 'round'
 * @param ariaLabel - string value for the aria-label property of the <button>> element
 * @param disabled - (optionsl) boolean value that determines the disabled state of a link
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onClick - (optional) function to be called onClick
 *
 */
declare function IconButton(props: IconButtonProps): react_jsx_runtime.JSX.Element;

interface InfoBlockProps extends PropsWithChildren {
    label?: string;
    kind?: 'danger' | 'warning' | 'success' | 'info';
    className?: string;
    skeleton?: boolean;
}
/**
 * Info Block component ********************************************************************
 *
 * @param label - optional string value for the label for the block - defaults to the kind value
 * @param kind - (optional) value of 'danger', 'warning', 'success', or 'info' determines the style and icon displayed - defaults to 'info'
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 *
 */
declare function InfoBlock(props: InfoBlockProps): react_jsx_runtime.JSX.Element;

interface LoadingProps {
    active: boolean;
    size?: 'sm' | 'md' | 'lg';
    speed?: 'slow' | 'normal' | 'fast';
    position?: 'inline' | 'block' | 'full-screen';
    overlay?: boolean;
    className?: string;
}
/**
 * Loading component ************************************************************************
 *
 * @param active - boolean value for whether the loading icon should be displayed
 * @param size - (optional) value of 'sm', 'md', or 'lg' that determines the size of the icon - defaults to 'md'
 * @param speed - (optional) value of slow', 'normal', or 'fast' that determines the speed the icon rotates - defaults to 'nornal'
 * @param position - (optional) value of 'inline', 'block', or 'full-screen' determines the display of the icon - defaults to 'block'
 * @param overlay - (optional) boolean value that determines if an overlay is rendered behind the icon
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare function Loading(props: LoadingProps): react_jsx_runtime.JSX.Element;

interface MenuProps extends PropsWithChildren {
    position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
    width?: number;
    ariaLabel: string;
    className?: string;
}
/**
 * Menu component **********************************************************************************
 * @param position - (optional) string value for the menu position.  options are:
 * * 'top-right'
 * * 'top-center'
 * * 'top-left'
 * * 'bottom-right'
 * * 'bottom-center'
 * * 'bottom-left';
 * @param width - (optional) number value for the width of the menu - defaults to auto width
 * @param ariaLabel - string value for the aria-lable fot he nav element
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare function Menu(props: MenuProps): react_jsx_runtime.JSX.Element;

interface MenuDropdownProps extends PropsWithChildren {
    className?: string;
}
/**
 * Menu Dropdown component *****************************************************************
 *
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare function MenuDropdown(props: MenuDropdownProps): react_jsx_runtime.JSX.Element;

interface MenuItemProps extends PropsWithChildren {
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    disabled?: boolean;
    className?: string;
    onClick?: (React__default.MouseEventHandler<HTMLButtonElement> | undefined);
}
/**
 * Menu Item component *****************************************************************************
 *
 * * If a menu item includes an href and is not disabled, it will render as an anchor element,
 *   otherwise it will render as a button element
 *
 * @param href - (optional) string value for the href property of a button (link)
 * @param target - (optional) target value of '_blank', '_self', '_parent', or '_top' - only applies to items with an href property
 * @param disabled - (optionsl) boolean value that determines the disabled state of an item
 * @param className - (optional) string value of class names to apply to the component
 * @param onClick - (optional) function to be called onClick
 *
 */
declare function MenuItem(props: MenuItemProps): react_jsx_runtime.JSX.Element;

interface MenuTriggerProps extends PropsWithChildren {
    className?: string;
}
/**
 * Menu Trigger component *******************************************************************
 *
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare function MenuTrigger(props: MenuTriggerProps): react_jsx_runtime.JSX.Element;

interface ModalProps extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg' | 'full-screen';
    open: boolean;
    preventScroll?: boolean;
    className?: string;
    onClose: () => void;
}
/**
 * Modal component ************************************************************************
 *
 * @param size - (optional) value of 'sm', 'md', lg', or 'full-screen' determines the modal size - defaults to 'md'
 * @param open - boolean value that determines of the modal is displayed (or in the DOM)
 * @param preventScroll - (optional) boolean value that determines if scrolling should be prevented while the modal is open
 * @param className - (optional) string value of class names to apply to the component
 * @param onClose - callback function called on any "closing" events like escape key press or close button click
 *
 */
declare function Modal(props: ModalProps): react_jsx_runtime.JSX.Element;

interface NavbarProps extends PropsWithChildren {
    ariaLabel: string;
    className?: string;
    skeleton?: boolean;
}
/**
 * Navbar component **************************************************************************
 *
 * @param ariaLabel - string value for the aria-label on the nav element
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 *
 */
declare function Navbar(props: NavbarProps): react_jsx_runtime.JSX.Element;

interface NavbarGroupProps extends PropsWithChildren {
    label: string;
    defaultOpen?: boolean;
    className?: string;
}
/**
 * Navbar Group component *******************************************************************
 *
 * @param label string value for the text label of the button to expand the group
 * @param defaultOpen - (optional) boolean value that determines if the group is open by default
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare function NavbarGroup(props: NavbarGroupProps): react_jsx_runtime.JSX.Element;

interface NavbarItemProps extends PropsWithChildren {
    active?: boolean;
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    disabled?: boolean;
    className?: string;
    onClick?: (React__default.MouseEventHandler<HTMLButtonElement> | undefined);
}
/**
 * Navbar Item component ********************************************************************
 *
 * * If a item includes an href and is not disabled, it will render as an anchor element,
 *   otherwise it will render as a button element
 *
 * @param active - (optional) boolean value for whether the item should be displayed as active
 * @param href - (optional) string value for the href property of a link
 * @param target - (optional) target value of '_blank', '_self', '_parent', or '_top' - only applies to items with an href property
 * @param disabled - (optionsl) boolean value that determines the disabled state of an item
 * @param className - (optional) string value of class names to apply to the component
 * @param onClick - (optional) function to be called onClick
 *
 */
declare function NavbarItem(props: NavbarItemProps): react_jsx_runtime.JSX.Element;

interface NotificationProps {
    kind?: 'error' | 'warning' | 'success' | 'info';
    title?: string;
    content: string;
    className?: string;
}
/**
 *
 * @param kind - (optional) value of 'error', 'warning', 'success', or 'info' determines styling and icon - defaults to 'info'
 * @param title - (optional) string value for the notification title - defaults to the kind value
 * @param content - string value for the content of the notification
 * @param className - (optional) string value of class names to apply to the component
 */
declare function Notification(props: NotificationProps): react_jsx_runtime.JSX.Element;

interface PaginationProps {
    currentPage?: number;
    currentSize: number;
    pageSizes: number[];
    totalItems: number;
    className?: string;
    skeleton?: boolean;
    onChange: (value: {
        currentPage: number;
        currentSize: number;
    }) => void;
}
/**
 * Pagination component ********************************************************************
 *
 * @param currentPage - (optional) number value for the current page - defaults to 1
 * @param currentSize - number value for the current page size
 * @param pageSizes - array of number values for the page size select input
 * @param totalItems - number value for the total number of items to paginate
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onChange - function to be called on any change event for the component
 * * passes a value parameter of {currentPage: number, currentSize: number}
 *
 */
declare function Pagination(props: PaginationProps): react_jsx_runtime.JSX.Element;

interface PasswordInputProps {
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
    className?: string;
    skeleton?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
/**
 * Password input component *****************************************************************
 *
 * @param label - string value for the input label
 * @param hideLabel - (optional) boolean value that determines if the label is visibly hidden
 * @param id - (optional) string value for the id proprty on the input
 * @param name - (optional) string value for the name proprty on the input
 * @param placeholder - (optional) string value for the placholder property on the input
 * @param disabled - (optional) boolean value for the disabled state of the input
 * @param value - (optional) string value for the value proprty on the input
 * @param readOnly - (optional) boolean value for the readOnly state of the input
 * @param error - (optional) string vlaue to be displayed if the hasError prop is true
 * @param hasError - (optional) boolean value to determine is the input should show as having an error
 * @param maxLength - (optional) number value for the maxLength proprty of the input
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onChange - (optional) function to be called when the input value changes
 * @param onBlur - (optional) function to be called when focus leaves the input
 * @param onFocus - (optional) function to be called when the input recieves focus
 *
 */
declare function PasswordInput(props: PasswordInputProps): react_jsx_runtime.JSX.Element;

interface RadioGroupProps {
    label: string;
    id?: string;
    name?: string;
    disabled?: boolean;
    value?: string;
    error?: string;
    hasError?: boolean;
    options: {
        name: string;
        value: string;
        disabled?: boolean;
    }[];
    layout?: 'column' | 'row';
    className?: string;
    skeleton?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
/**
 * Radio Group component ********************************************************************
 *
 * @param label - string value for the input label
 * @param id - (optional) string value for the id proprty on the input
 * @param name - (optional) string value for the name proprty on the input
 * @param disabled - (optional) boolean value for the disabled state of the input
 * @param value - (optional) string value for the value proprty on the input
 * @param error - (optional) string vlaue to be displayed if the hasError prop is true
 * @param hasError - (optional) boolean value to determine is the input should show as having an error
 * @param options - array of radio group option objects:
 *  - name - string value to be displayed for the option
 *  - value - string value for the value property of te option
 *  - disabled - (optional) boolean value to determine the options disabled state
 * @param layout - (optional) value of 'column'or 'row' determines the layout of the radio options - defaults to 'column'
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onChange - (optional) function to be called when the input value changes
 * @param onBlur - (optional) function to be called when focus leaves the input
 * @param onFocus - (optional) function to be called when the input recieves focus
 *
 */
declare function RadioGroup(props: RadioGroupProps): react_jsx_runtime.JSX.Element;

interface SearchInputProps {
    label?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    value?: string;
    readOnly?: boolean;
    maxLength?: number;
    className?: string;
    skeleton?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
/**
 * Search Input component *******************************************************************
 *
 * @param label - string value for the input label
 * @param id - (optional) string value for the id proprty on the input
 * @param name - (optional) string value for the name proprty on the input
 * @param placeholder - (optional) string value for the placholder property on the input
 * @param disabled - (optional) boolean value for the disabled state of the input
 * @param value - (optional) string value for the value proprty on the input
 * @param readOnly - (optional) boolean value for the readOnly state of the input
 * @param maxLength - (optional) number value for the maxLength proprty of the input
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onChange - (optional) function to be called when the input value changes
 * @param onBlur - (optional) function to be called when focus leaves the input
 * @param onFocus - (optional) function to be called when the input recieves focus
 *
 */
declare function SearchInput(props: SearchInputProps): react_jsx_runtime.JSX.Element;

interface SelectInputProps {
    label: string;
    id?: string;
    name?: string;
    disabled?: boolean;
    value?: string;
    error?: string;
    hasError?: boolean;
    className?: string;
    skeleton?: boolean;
    options: {
        name: string;
        value: string;
        disabled?: boolean;
    }[];
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
}
/**
 * Select Input component ******************************************************************
 *
 * @param label - string value for the input label
 * @param id - (optional) string value for the id proprty on the input
 * @param name - (optional) string value for the name proprty on the input
 * @param disabled - (optional) boolean value for the disabled state of the input
 * @param value - (optional) string value for the value proprty on the input
 * @param error - (optional) string vlaue to be displayed if the hasError prop is true
 * @param hasError - (optional) boolean value to determine is the input should show as having an error
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param options - array of select input option objects:
 *  - name - string value to be displayed for the option
 *  - value - string value for the value property of te option
 *  - disabled - (optional) boolean value to determine the options disabled state
 * @param onChange - (optional) function to be called when the input value changes
 * @param onBlur - (optional) function to be called when focus leaves the input
 * @param onFocus - (optional) function to be called when the input recieves focus
 *
 */
declare function SelectInput(props: SelectInputProps): react_jsx_runtime.JSX.Element;

interface SkeletonBlockProps {
    height?: number;
    width?: number;
}
/**
 * Skeleton Block component *****************************************************************
 *
 * @param height - (optional) number value for the height (in pixels) of the block
 * @param width - (optional) number value for the width (in pixels) of the block
 *
 */
declare function SkeletonBlock(props: SkeletonBlockProps): react_jsx_runtime.JSX.Element;

interface SkeletonHeadingProps {
    heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
/**
 * Skeleton Heading component ****************************************************************
 *
 * @param heading - value of 'h1', 'h2', 'h3', 'h4', 'h5', or 'h6' determines the heading tag rendered
 *
 */
declare function SkeletonHeading(props: SkeletonHeadingProps): react_jsx_runtime.JSX.Element;

interface SkeletonParagraphProps {
    numLines?: number;
}
/**
 * Skeleton Paragraph component ************************************************************
 *
 * @param numLines - (optional) number value for the number of mock paragraph lines to display - defaults to 5
 *
 */
declare function SkeletonParagraph(props: SkeletonParagraphProps): react_jsx_runtime.JSX.Element;

interface TabProps extends PropsWithChildren {
    index?: number;
    className?: string;
}
/**
 * Tab component **************************************************************************
 *
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare function Tab(props: TabProps): react_jsx_runtime.JSX.Element;

interface TabPanelsProps extends PropsWithChildren {
    className?: string;
}
/**
 * Tab Panels component *********************************************************************
 *
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare function TabPanels(props: TabPanelsProps): react_jsx_runtime.JSX.Element;

interface TabPanelProps extends PropsWithChildren {
    index?: number;
    className?: string;
}
/**
 * Tab Panel component **********************************************************************
 *
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare function TabPanel(props: TabPanelProps): react_jsx_runtime.JSX.Element;

interface TabsProps extends PropsWithChildren {
    className?: string;
}
/**
 * Tabs component **************************************************************************
 *
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare function Tabs(props: TabsProps): react_jsx_runtime.JSX.Element;

interface TabsContainerProps extends PropsWithChildren {
    className?: string;
    skeleton?: boolean;
}
/**
 * Tabs Container component ****************************************************************
 *
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 *
 */
declare function TabsContainer(props: TabsContainerProps): react_jsx_runtime.JSX.Element;

interface TableHeader {
    title: string;
    key: string;
    search?: 'includes' | 'starts-with';
}
interface TableRow {
    id: number | string;
    [key: string]: any;
}
interface TableProps {
    title?: string;
    description?: string;
    headers: TableHeader[];
    rows: TableRow[];
    isCondensed?: boolean;
    hasPagination?: boolean;
    className?: string;
    skeleton?: boolean;
}
/**
 * Table component ***************************************************************************
 *
 * @param title - (optional) string value for the table title
 * @param description - (optional) string value for the table description
 * @param headers - array of header objects
 *  - title: string
 *  - key: string
 *  - search?: 'includes' | 'starts-with'
 * @param rows - array of row objects
 *  - id: number | string
 *  - [key: string]: any
 * @param isCondensed - (optional) boolean value for displaying the table with condensed row height
 * @param hasPagination - (optional) boolean value for whether the table should include pagination
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 *
 */
declare function Table(props: TableProps): react_jsx_runtime.JSX.Element;

interface ComponentProps {
    value: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'outline' | 'neutral';
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    disabled?: boolean;
    className?: string;
    skeleton?: boolean;
    onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
}
/**
 * Tag component ****************************************************************************
 *
 * @param value - string value for the text of the tag
 * @param size - (options) size value of 'sm', 'md', or 'lg' - defaults to 'md'
 * @param variant - (optional) color value of 'primary', 'secondary', 'outline', 'neutral' - defaults to 'neutral'
 * @param href - (optional) string value for the href property of a link tag
 * @param target - (optional) target value of '_blank', '_self', '_parent', or '_top' - only applies to buttons with an href property
 * @param disabled - (optionsl) boolean value that determines the disabled state of a tag
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onClick - (optional) function to be called onClick
 *
 */
declare function Tag(props: ComponentProps): react_jsx_runtime.JSX.Element;

interface TextAreaProps {
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
    className?: string;
    skeleton?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}
/**
 * Textarea component ***********************************************************************
 *
 * @param label - string value for the input label
 * @param hideLabel - (optional) boolean value that determines if the label is visibly hidden
 * @param id - (optional) string value for the id proprty on the input
 * @param name - (optional) string value for the name proprty on the input
 * @param placeholder - (optional) string value for the placholder property on the input
 * @param disabled - (optional) boolean value for the disabled state of the input
 * @param value - (optional) string value for the value proprty on the input
 * @param readOnly - (optional) boolean value for the readOnly state of the input
 * @param error - (optional) string vlaue to be displayed if the hasError prop is true
 * @param hasError - (optional) boolean value to determine is the input should show as having an error
 * @param maxLength - (optional) number value for the maxLength proprty of the input
 * @param rows - (optional) number value for the rows proprty of the input
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onChange - (optional) function to be called when the input value changes
 * @param onBlur - (optional) function to be called when focus leaves the input
 * @param onFocus - (optional) function to be called when the input recieves focus
 *
 */
declare function TextArea(props: TextAreaProps): react_jsx_runtime.JSX.Element;

interface TextInputProps {
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
    className?: string;
    skeleton?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
/**
 * Text Input component *********************************************************************
 *
 * @param label - string value for the input label
 * @param hideLabel - (optional) boolean value that determines if the label is visibly hidden
 * @param id - (optional) string value for the id proprty on the input
 * @param name - (optional) string value for the name proprty on the input
 * @param placeholder - (optional) string value for the placholder property on the input
 * @param disabled - (optional) boolean value for the disabled state of the input
 * @param value - (optional) string value for the value proprty on the input
 * @param readOnly - (optional) boolean value for the readOnly state of the input
 * @param error - (optional) string vlaue to be displayed if the hasError prop is true
 * @param hasError - (optional) boolean value to determine is the input should show as having an error
 * @param maxLength - (optional) number value for the maxLength proprty of the input
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onChange - (optional) function to be called when the input value changes
 * @param onBlur - (optional) function to be called when focus leaves the input
 * @param onFocus - (optional) function to be called when the input recieves focus
 *
 */
declare function TextInput(props: TextInputProps): react_jsx_runtime.JSX.Element;

interface ToggleProps {
    label: string;
    labelAlign?: 'left' | 'right';
    id?: string;
    name?: string;
    disabled?: boolean;
    value?: string;
    toggled?: boolean;
    readOnly?: boolean;
    className?: string;
    skeleton?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
/**
 * Toggle component *************************************************************************
 *
 * @param label - string value for the input label
 * @param labelAlign - (optional) value of 'left' or 'right' determines label placement - defaults to 'left'
 * @param id - (optional) string value for the id proprty on the input
 * @param name - (optional) string value for the name proprty on the input
 * @param disabled - (optional) boolean value for the disabled state of the input
 * @param value - (optional) string value for the value proprty on the input
 * @param toggled - (optional) boolean value fto determine the input toggle state
 * @param readOnly - (optional) boolean value for the readOnly state of the input
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onChange - (optional) function to be called when the input value changes
 * @param onBlur - (optional) function to be called when focus leaves the input
 * @param onFocus - (optional) function to be called when the input recieves focus
 *
 */
declare function Toggle(props: ToggleProps): react_jsx_runtime.JSX.Element;

interface TooltipProps extends PropsWithChildren {
    text: string;
    align?: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
}
/**
 * Tooltip component ************************************************************************
 *
 * @param text - string value for the tooltip to display
 * @param align - (optional) value of 'top', 'bottom', 'left', or 'right' determines the tooltip alignment - defaults to 'top'
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare function Tooltip(props: TooltipProps): react_jsx_runtime.JSX.Element;

interface VerticalGridProps extends PropsWithChildren {
    spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    padding?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
}
/**
 * Vertical Grid component ******************************************************************
 *
 * @param spacing - (optional) number value of 0-6 sets the vertical spacing in rems - defaults to 1
 * @param padding - (optional) number value of 0-6 sets the padding in rems - defaults to 0
 * @param className - (optional) string value of class names to apply to the component
 *
 */
declare function VerticalGrid(props: VerticalGridProps): react_jsx_runtime.JSX.Element;

export { Accordion, AccordionItem, Breadcrumbs, Button, ButtonGroup, Card, CardSection, Checkbox, Container, Drawer, Grid, Icon, IconButton, InfoBlock, Loading, Menu, MenuDropdown, MenuItem, MenuTrigger, Modal, Navbar, NavbarGroup, NavbarItem, Notification, Pagination, PasswordInput, RadioGroup, SearchInput, SelectInput, SkeletonBlock, SkeletonHeading, SkeletonParagraph, Tab, TabPanel, TabPanels, Table, Tabs, TabsContainer, Tag, TextArea, TextInput, Toggle, Tooltip, VerticalGrid };
