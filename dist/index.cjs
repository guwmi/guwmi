"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AccordionItem: () => AccordionItem,
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  Card: () => Card,
  CardSection: () => CardSection,
  Cards: () => Cards,
  Drawer: () => Drawer,
  Icon: () => Icon_default,
  IconButton: () => IconButton,
  Menu: () => Menu,
  MenuDropdown: () => MenuDropdown,
  MenuItem: () => MenuItem,
  MenuTrigger: () => MenuTrigger,
  Modal: () => Modal,
  Notification: () => Notification,
  Tab: () => Tab,
  TabPanel: () => TabPanel,
  TabPanels: () => TabPanels,
  Table: () => Table,
  Tabs: () => Tabs,
  TabsContainer: () => TabsContainer
});
module.exports = __toCommonJS(index_exports);
var import_styles = require("./index-PC34KAA7.css");

// src/components/Button/Button.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function Button(props) {
  const _a = props, {
    children,
    size = "md",
    color = "primary",
    variant = "fill",
    theme = "round",
    className,
    onClick,
    href,
    target = null,
    disabled = false
  } = _a, rest = __objRest(_a, [
    "children",
    "size",
    "color",
    "variant",
    "theme",
    "className",
    "onClick",
    "href",
    "target",
    "disabled"
  ]);
  const classes = (0, import_react.useMemo)(() => `guwmi-btn ${size} ${color} ${variant} ${theme}${className ? " " + className : ""}`, []);
  const button = (0, import_react.useRef)(null);
  const handleClick = (0, import_react.useCallback)((e) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  }, [href, onClick, button.current]);
  return href && !disabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", __spreadProps(__spreadValues({ className: classes, href, target, ref: button }, rest), { children })) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", __spreadProps(__spreadValues({ className: classes, onClick: (e) => handleClick(e), ref: button, disabled }, rest), { children }));
}

// src/components/ButtonGroup/ButtonGroup.tsx
var import_react2 = __toESM(require("react"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
function ButtonGroup(props) {
  const {
    children,
    size = "md",
    color = "primary",
    variant = "fill",
    theme = "round",
    className
  } = props;
  const classes = (0, import_react2.useMemo)(() => `guwmi-btn-group ${size} ${color} ${variant} ${theme}${className ? " " + className : ""}`, []);
  const buttonChildren = (0, import_react2.useMemo)(() => import_react2.default.Children.map(children, (child) => {
    if (import_react2.default.isValidElement(child)) {
      return import_react2.default.cloneElement(child, {
        size,
        color,
        variant,
        theme
      });
    }
    return child;
  }), [children]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: classes, children: buttonChildren });
}

// src/components/IconButton/IconButton.tsx
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
function IconButton(props) {
  const {
    children,
    size = "md",
    color = "primary",
    variant = "fill",
    theme = "round",
    className,
    onClick,
    ariaLabel,
    disabled = false
  } = props;
  const classes = (0, import_react3.useMemo)(() => `guwmi-btn icon ${size} ${color} ${variant} ${theme}${className ? " " + className : ""}`, []);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: classes, onClick, "aria-label": ariaLabel, disabled, children });
}

// src/components/Menu/Menu.tsx
var import_react5 = require("react");

// src/components/Menu/MenuContext.ts
var import_react4 = require("react");
var MenuContext = (0, import_react4.createContext)(null);
var MenuContext_default = MenuContext;

// src/components/Menu/Menu.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Menu(props) {
  const {
    children,
    position = "bottom-right",
    width,
    ariaLabel
  } = props;
  const [isOpen, setIsOpen] = (0, import_react5.useState)(false);
  const classes = (0, import_react5.useMemo)(() => `guwmi-menu-container ${position}`, []);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: classes, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MenuContext_default.Provider, { value: { isOpen, setIsOpen, ariaLabel }, children }) });
}

// src/components/Menu/MenuDropdown.tsx
var import_react8 = require("react");

// src/hooks/useAnimation.ts
var import_react6 = require("react");
var useAnimation = (componentState, classString, elementRef) => {
  const [isInDOM, setIsInDOM] = (0, import_react6.useState)(componentState);
  const [hasClass, setHasClass] = (0, import_react6.useState)(false);
  const initialLoad = (0, import_react6.useRef)(true);
  const listnerAdded = (0, import_react6.useRef)(false);
  const setClassState = () => {
    var _a, _b;
    if (elementRef.current) {
      const classExists = (_b = Array.from((_a = elementRef.current) == null ? void 0 : _a.classList)) == null ? void 0 : _b.includes(classString);
      setHasClass(classExists);
    }
  };
  const toggleClass = () => {
    var _a, _b, _c, _d;
    if (componentState) {
      if (!listnerAdded.current) {
        (_a = elementRef.current) == null ? void 0 : _a.addEventListener("transitioncancel", setClassState);
        (_b = elementRef.current) == null ? void 0 : _b.addEventListener("transitionend", setClassState);
        listnerAdded.current = true;
      }
      (_c = elementRef.current) == null ? void 0 : _c.classList.add(classString);
    } else {
      (_d = elementRef.current) == null ? void 0 : _d.classList.remove(classString);
      listnerAdded.current = false;
    }
  };
  (0, import_react6.useEffect)(() => {
    initialLoad.current = false;
  }, []);
  (0, import_react6.useEffect)(() => {
    if (!initialLoad.current) {
      if (componentState && !isInDOM) {
        setIsInDOM(true);
      } else if (componentState && isInDOM && !hasClass) {
        setTimeout(() => toggleClass(), 25);
      } else if (!componentState && isInDOM && hasClass) {
        toggleClass();
      } else if (!componentState && isInDOM && !hasClass) {
        setIsInDOM(false);
      }
    }
  }, [componentState, isInDOM, hasClass]);
  return { isVisible: isInDOM || hasClass };
};
var useAnimation_default = useAnimation;

// src/hooks/useTabThrough.ts
var import_react7 = require("react");
var useTabThrough = (open, onClose, elementRef) => {
  const triggerRef = (0, import_react7.useRef)(null);
  const handleTab = (0, import_react7.useCallback)((e) => {
    var _a, _b, _c;
    if (e.key === "Tab") {
      const focusableElements = elementRef.current.querySelectorAll("a[href], button, input, textarea, select, details, [tabindex]");
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      if (e.shiftKey) {
        if (e.target === triggerRef.current || ((_a = elementRef.current) == null ? void 0 : _a.contains(e.target)) && e.target === firstFocusable) {
          e.preventDefault();
          (_b = triggerRef.current) == null ? void 0 : _b.focus();
          onClose();
        }
      } else {
        if (((_c = elementRef.current) == null ? void 0 : _c.contains(e.target)) && e.target === lastFocusable) {
          onClose();
        }
      }
    }
  }, [elementRef.current]);
  const handleEscape = (0, import_react7.useCallback)((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, []);
  (0, import_react7.useEffect)(() => {
    if (open) {
      triggerRef.current = document.activeElement;
      setTimeout(() => {
        var _a;
        return (_a = elementRef.current) == null ? void 0 : _a.focus();
      }, 25);
      document.addEventListener("keydown", handleTab);
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleTab);
      document.removeEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleTab);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);
};
var useTabThrough_default = useTabThrough;

// src/components/Menu/MenuDropdown.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function MenuDropdown(props) {
  const { children } = props;
  const { isOpen, setIsOpen, ariaLabel } = (0, import_react8.useContext)(MenuContext_default);
  const dropDownRef = (0, import_react8.useRef)(null);
  const { isVisible } = useAnimation_default(isOpen, "open", dropDownRef);
  useTabThrough_default(isOpen, () => setIsOpen(false), dropDownRef);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: isVisible && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "nav",
    {
      className: "guwmi-menu-dropdown",
      "data-testid": "guwmi-menu-dropdown",
      ref: dropDownRef,
      "aria-label": ariaLabel,
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { role: "menubar", children })
    }
  ) });
}

// src/components/Menu/MenuItem.tsx
var import_react9 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function MenuItem(props) {
  const { children, onClick, href } = props;
  const classes = (0, import_react9.useMemo)(() => `guwmi-menu-item`, []);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { className: classes, children: href ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { className: "guwmi-menu-btn", href, children }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { className: "guwmi-menu-btn", onClick, children }) });
}

// src/components/Menu/MenuTrigger.tsx
var import_react10 = __toESM(require("react"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
function MenuTrigger(props) {
  const { children } = props;
  const { isOpen, setIsOpen } = (0, import_react10.useContext)(MenuContext_default);
  const childrenWithClick = (0, import_react10.useMemo)(() => import_react10.default.Children.map(children, (child) => {
    if (import_react10.default.isValidElement(child)) {
      return import_react10.default.cloneElement(child, { onClick: () => setIsOpen(!isOpen) });
    }
    return child;
  }), [children, isOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "guwmi-menu-trigger", children: childrenWithClick });
}

// src/components/Tabs/TabsContainer.tsx
var import_react12 = require("react");

// src/components/Tabs/TabsContext.ts
var import_react11 = require("react");
var TabsContext = (0, import_react11.createContext)(null);
var TabsContext_default = TabsContext;

// src/components/Tabs/TabsContainer.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function TabsContainer(props) {
  const { children } = props;
  const [selectedTab, setSelectedTab] = (0, import_react12.useState)(0);
  const id = (0, import_react12.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(TabsContext_default.Provider, { value: { id, selectedTab, setSelectedTab }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "guwmi-tabs-container", children }) });
}

// src/components/Tabs/Tabs.tsx
var import_react13 = __toESM(require("react"), 1);
var import_jsx_runtime9 = require("react/jsx-runtime");
function Tabs(props) {
  const { children } = props;
  const { selectedTab } = (0, import_react13.useContext)(TabsContext_default);
  const tabsContainer = (0, import_react13.useRef)(null);
  const slider = (0, import_react13.useRef)(null);
  const activeTab = (0, import_react13.useRef)(null);
  const childrenWithIndex = (0, import_react13.useMemo)(() => {
    return import_react13.default.Children.map(children, (child, index) => {
      if (import_react13.default.isValidElement(child)) {
        return import_react13.default.cloneElement(child, { index });
      }
      return child;
    });
  }, [children]);
  (0, import_react13.useEffect)(() => {
    if (tabsContainer.current.querySelector(".guwmi-tab.active")) {
      activeTab.current = tabsContainer.current.querySelector(".guwmi-tab.active");
    }
  }, [tabsContainer, selectedTab]);
  (0, import_react13.useEffect)(() => {
    if (activeTab.current) {
      const left = activeTab.current.offsetLeft;
      const width = activeTab.current.offsetWidth;
      slider.current.style.width = `${width}px`;
      slider.current.style.left = `${left}px`;
    }
  }, [activeTab.current]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("nav", { className: "guwmi-tabs", role: "tablist", ref: tabsContainer, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "guwmi-tabs-slider", ref: slider }),
    childrenWithIndex
  ] });
}

// src/components/Tabs/Tab.tsx
var import_react14 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
function Tab(props) {
  const { children, index } = props;
  const { id, selectedTab, setSelectedTab } = (0, import_react14.useContext)(TabsContext_default);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "button",
    {
      className: `guwmi-tab${selectedTab === index ? " active" : ""}`,
      onClick: () => setSelectedTab(index),
      id: `tabs-${id}-tab-${index}`,
      "aria-selected": selectedTab === index,
      "aria-controls": `tabs-${id}-tabpanel-${index}`,
      children
    }
  );
}

// src/components/Tabs/TabPanels.tsx
var import_react16 = __toESM(require("react"), 1);

// src/hooks/useWindowWidth.ts
var import_react15 = require("react");
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = (0, import_react15.useState)();
  const handleResize = () => setWindowWidth(window.innerWidth);
  (0, import_react15.useEffect)(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}

// src/components/Tabs/TabPanels.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function TabPanels(props) {
  const { children } = props;
  const { selectedTab } = (0, import_react16.useContext)(TabsContext_default);
  const windowWidth = useWindowWidth();
  const panels = (0, import_react16.useRef)(null);
  const childrenWithIndex = (0, import_react16.useMemo)(() => {
    return import_react16.default.Children.map(children, (child, index) => {
      if (import_react16.default.isValidElement(child)) {
        return import_react16.default.cloneElement(child, { index });
      }
      return child;
    });
  }, [children]);
  (0, import_react16.useEffect)(() => {
    const active = panels.current.querySelector(".active");
    const height = active.offsetHeight;
    panels.current.style.height = `${height}px`;
  }, [selectedTab, windowWidth]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "guwmi-tab-panels", ref: panels, children: childrenWithIndex });
}

// src/components/Tabs/TabPanel.tsx
var import_react17 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
function TabPanel(props) {
  const { children, index } = props;
  const { id, selectedTab } = (0, import_react17.useContext)(TabsContext_default);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "section",
    {
      className: `guwmi-tab-panel${selectedTab === index ? " active" : ""}`,
      role: "tabpanel",
      hidden: selectedTab !== index,
      "aria-labelledby": `tabs-${id}-tab-${index}`,
      id: `tabs-${id}-tabpanel-${index}`,
      children
    }
  );
}

// src/components/Table/Table.tsx
var import_react21 = require("react");

// src/components/Table/TableRow.tsx
var import_react18 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
function TableRow(props) {
  const { headers, data, tableId } = props;
  const cellData = (0, import_react18.useMemo)(() => {
    const arr = [];
    headers.forEach((h) => {
      if (data[h.key]) {
        arr.push({ id: data.id, col: h.key, value: data[h.key] });
      }
    });
    return arr;
  }, [headers, data]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, { children: cellData && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tr", { children: cellData.map((cell) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("td", { children: cell.value }, `table-${tableId}-cell-${cell.id}-${cell.col}`)) }) });
}

// src/components/Inputs/Search/SearchInput.tsx
var import_react20 = require("react");

// src/components/Icon/Icon.tsx
var import_react19 = require("react");

// src/components/Icon/paths.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function AlertCircle() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 8v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 16h.01" })
  ] });
}
function AlertSquare() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 8v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 16h.01" })
  ] });
}
function AlertTriangle() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 9v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 16h.01" })
  ] });
}
function Check() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M5 12l5 5l10 -10" })
  ] });
}
function ChevronDown() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M6 9l6 6l6 -6" })
  ] });
}
function ChevronLeft() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M15 6l-6 6l6 6" })
  ] });
}
function ChevronRight() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M9 6l6 6l-6 6" })
  ] });
}
function ChevronUp() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M6 15l6 -6l6 6" })
  ] });
}
function Copy() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" })
  ] });
}
function Close() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M18 6l-12 12" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M6 6l12 12" })
  ] });
}
function Dots() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" })
  ] });
}
function ExternalLink() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M11 13l9 -9" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M15 4h5v5" })
  ] });
}
function Home() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M5 12l-2 0l9 -9l9 9l-2 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" })
  ] });
}
function Info() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 9h.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M11 12h1v4h1" })
  ] });
}
function Login() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M3 12h13l-3 -3" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M13 15l3 -3" })
  ] });
}
function Menu2() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M4 6l16 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M4 12l16 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M4 18l16 0" })
  ] });
}
function ProgressAlert() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M14 3.223a9.003 9.003 0 0 1 0 17.554" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 8v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 16v.01" })
  ] });
}
function ProgressCheck() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M14 3.223a9.003 9.003 0 0 1 0 17.554" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M9 12l2 2l4 -4" })
  ] });
}
function Progress() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M14 3.223a9.003 9.003 0 0 1 0 17.554" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" })
  ] });
}
function Search() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M21 21l-6 -6" })
  ] });
}
function Settings() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" })
  ] });
}

// src/components/Icon/Icon.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var Icon = (0, import_react19.forwardRef)((props, ref) => {
  const {
    name,
    size = 24,
    stroke = 2,
    color = "currentColor",
    className
  } = props;
  const classes = (0, import_react19.useMemo)(() => `icon guwmi-icon guwmi-icon-${name}${className ? " " + className : ""}`, [className]);
  const paths = (0, import_react19.useMemo)(() => {
    switch (name) {
      case "alert-circle":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(AlertCircle, {});
      case "alert-squre":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(AlertSquare, {});
      case "alert-triangle":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(AlertTriangle, {});
      case "check":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Check, {});
      case "chevron-down":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ChevronDown, {});
      case "chevron-left":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ChevronLeft, {});
      case "chevron-right":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ChevronRight, {});
      case "chevron-up":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ChevronUp, {});
      case "copy":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Copy, {});
      case "close":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Close, {});
      case "dots":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Dots, {});
      case "external-link":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ExternalLink, {});
      case "home":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Home, {});
      case "info":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Info, {});
      case "login":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Login, {});
      case "menu":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Menu2, {});
      case "progress-alert":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ProgressAlert, {});
      case "progress-check":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ProgressCheck, {});
      case "progress":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Progress, {});
      case "search":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Search, {});
      case "settings":
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Settings, {});
    }
  }, [name]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: classes,
      children: paths
    }
  );
});
var Icon_default = Icon;

// src/components/Inputs/Search/SearchInput.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function SearchInput(props) {
  const { placeholder } = props;
  const id = (0, import_react20.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "guwmi-search-input", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Icon_default, { name: "search", size: 18 }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { htmlFor: id, className: "guwmi-sr-only", children: "Search" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { id, type: "search", placeholder: placeholder ? placeholder : "Search..." })
  ] });
}

// src/components/Table/Table.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function Table(props) {
  const { headers, rows, isCondensed, isSearchable } = props;
  const id = (0, import_react21.useId)();
  const classes = (0, import_react21.useMemo)(() => `guwmi-table-container${isCondensed ? " condensed" : ""}`, []);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: classes, children: [
    headers.length > 0 && isSearchable && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "guwmi-table-search", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SearchInput, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("table", { cellPadding: 0, cellSpacing: 0, children: headers.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tr", { children: headers.map((header, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { children: header.title }, `table-${id}-header-${i}`)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tbody", { children: rows.length > 0 ? rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(TableRow, { headers, data: row, tableId: id }, `table-${id}-row-${row.id}`)) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", { colSpan: headers.length, children: "There is no data to display in the table" }) }) })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tbody", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", { children: "No column headers provided for the table" }) }) }) })
  ] });
}

// src/components/Accordion/Accordion.tsx
var import_react23 = require("react");

// src/components/Accordion/AccordionContext.ts
var import_react22 = require("react");
var AccordionContext = (0, import_react22.createContext)(null);
var AccordionContext_default = AccordionContext;

// src/components/Accordion/Accordion.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function Accordion(props) {
  const { children, defaultOpen } = props;
  const [openAccordions, setOpenAccordions] = (0, import_react23.useState)([]);
  (0, import_react23.useEffect)(() => {
    if (defaultOpen) {
      setOpenAccordions([...openAccordions, defaultOpen]);
    }
  }, [defaultOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(AccordionContext_default.Provider, { value: { openAccordions, setOpenAccordions }, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "guwmi-accordion-container", children }) });
}

// src/components/Accordion/AccrodionItem.tsx
var import_react24 = require("react");
var import_jsx_runtime19 = require("react/jsx-runtime");
function AccordionItem(props) {
  const { children, title, id } = props;
  const { openAccordions, setOpenAccordions } = (0, import_react24.useContext)(AccordionContext_default);
  const windowWidth = useWindowWidth();
  const panelRef = (0, import_react24.useRef)(null);
  const contentRef = (0, import_react24.useRef)(null);
  const [isOpen, setIsOpen] = (0, import_react24.useState)(false);
  const [isAnimating, setIsAnimating] = (0, import_react24.useState)(false);
  (0, import_react24.useEffect)(() => {
    if (openAccordions.includes(id)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [openAccordions]);
  const open = (0, import_react24.useCallback)(() => {
    setOpenAccordions([...openAccordions, id]);
    setIsAnimating(true);
  }, [id, openAccordions]);
  const close = (0, import_react24.useCallback)(() => {
    setOpenAccordions(openAccordions.filter((value) => value !== id));
    setIsAnimating(true);
  }, [id, openAccordions]);
  (0, import_react24.useEffect)(() => {
    var _a, _b;
    (_a = panelRef.current) == null ? void 0 : _a.addEventListener("transitioncancel", () => setIsAnimating(false));
    (_b = panelRef.current) == null ? void 0 : _b.addEventListener("transitionend", () => setIsAnimating(false));
  }, [panelRef.current]);
  (0, import_react24.useEffect)(() => {
    if (contentRef.current && isOpen) {
      const height = contentRef.current.offsetHeight;
      panelRef.current.style.height = `${height}px`;
    } else {
      panelRef.current.style.height = `0px`;
    }
  }, [contentRef.current, isOpen, windowWidth]);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "guwmi-accordion-item", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
      "button",
      {
        onClick: () => isOpen ? close() : open(),
        id: `guwmi-accordion-controller-${id}`,
        "aria-controls": `guwmi-accordion-panel-${id}`,
        "aria-expanded": isOpen,
        className: isOpen ? "active" : null,
        children: [
          title,
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Icon_default, { name: "chevron-right", size: 20 })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "section",
      {
        hidden: !isOpen && !isAnimating,
        id: `guwmi-accordion-panel-${id}`,
        "data-testid": id,
        "aria-labelledby": `guwmi-accordion-controller-${id}`,
        ref: panelRef,
        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "guwmi-accordion-panel-content", ref: contentRef, children })
      }
    )
  ] });
}

// src/components/Cards/Cards.tsx
var import_react25 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
function Cards(props) {
  const { children, columns = 3 } = props;
  const classes = (0, import_react25.useMemo)(() => {
    let classString = "guwmi-card-grid ";
    switch (columns) {
      case 2:
        classString += "two";
        break;
      case 4:
        classString += "four";
        break;
      case 5:
        classString += "five";
        break;
      case 6:
        classString += "six";
        break;
      default:
        classString += "three";
    }
    return classString;
  }, [columns]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: classes, "data-testid": "guwmi-card-grid", children });
}

// src/components/Cards/Card.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
function Card(props) {
  const {
    title,
    subTitle,
    image,
    children
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "guwmi-card", "data-testid": "guwmi-card", children: [
    image && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("img", { src: image, alt: title ? title : "Card image", className: "guwmi-card-image", "data-testid": "guwmi-card-image" }),
    (title || subTitle) && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "guwmi-card-section guwmi-card-title", children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h2", { "data-testid": "guwmi-card-title", children: title }),
      subTitle && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h3", { "data-testid": "guwmi-card-sub-title", children: subTitle })
    ] }),
    children
  ] });
}

// src/components/Cards/CardSection.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function CardSection(props) {
  const { children } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "guwmi-card-section", children });
}

// src/components/Notification/Notification.tsx
var import_react26 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
function Notification(props) {
  const { kind, title, content } = props;
  const [isVisible, setIsVisible] = (0, import_react26.useState)(true);
  const titleText = (0, import_react26.useMemo)(() => title ? title : kind.charAt(0).toUpperCase() + kind.slice(1), [title, kind]);
  const classes = (0, import_react26.useMemo)(() => `guwmi-notification ${kind}`, [kind]);
  return isVisible ? /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("dialog", { className: classes, children: [
    kind === "error" ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Icon_default, { name: "alert-circle", size: 20, stroke: "3" }) : kind === "warning" ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Icon_default, { name: "alert-triangle", size: 20, stroke: "3" }) : /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Icon_default, { name: "check", size: 20, stroke: "3" }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h2", { children: titleText }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { children: content }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "button",
      {
        onClick: () => setIsVisible(false),
        "aria-label": "Close notification",
        tabIndex: 0,
        children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Icon_default, { name: "close", size: 18 })
      }
    )
  ] }) : null;
}

// src/components/Modal/Modal.tsx
var import_react31 = require("react");

// src/hooks/useFocusTrap.ts
var import_react27 = require("react");
var useFocusTrap = (open, onClose, elementRef) => {
  const triggerRef = (0, import_react27.useRef)(null);
  const handleTab = (0, import_react27.useCallback)((e) => {
    var _a, _b;
    if (e.key === "Tab") {
      const focusableElements = elementRef.current.querySelectorAll("a[href], button, input, textarea, select, details, [tabindex]");
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      if (e.shiftKey) {
        if (((_a = elementRef.current) == null ? void 0 : _a.contains(e.target)) && e.target === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (((_b = elementRef.current) == null ? void 0 : _b.contains(e.target)) && e.target === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }, [elementRef.current]);
  const handleEscape = (0, import_react27.useCallback)((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, []);
  (0, import_react27.useEffect)(() => {
    var _a;
    if (open) {
      triggerRef.current = document.activeElement;
      setTimeout(() => {
        var _a2;
        return (_a2 = elementRef.current) == null ? void 0 : _a2.focus();
      }, 25);
      document.addEventListener("keydown", handleTab);
      document.addEventListener("keydown", handleEscape);
    } else {
      (_a = triggerRef.current) == null ? void 0 : _a.focus();
      document.removeEventListener("keydown", handleTab);
      document.removeEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleTab);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);
};
var useFocusTrap_default = useFocusTrap;

// src/hooks/useCloseOutClick.ts
var import_react28 = require("react");
var useCloseOutClick = (open, onClose, elementRef) => {
  const triggerRef = (0, import_react28.useRef)(null);
  const closeOutClick = (0, import_react28.useCallback)((e) => {
    var _a;
    if (e.target !== triggerRef.current && !((_a = elementRef.current) == null ? void 0 : _a.contains(e.target))) {
      onClose();
    }
  }, [elementRef.current]);
  (0, import_react28.useEffect)(() => {
    var _a;
    if (open) {
      triggerRef.current = document.activeElement;
      document.addEventListener("click", closeOutClick);
    } else {
      (_a = triggerRef.current) == null ? void 0 : _a.focus();
      document.removeEventListener("click", closeOutClick);
    }
    return () => {
      document.removeEventListener("click", closeOutClick);
    };
  }, [open]);
};
var useCloseOutClick_default = useCloseOutClick;

// src/hooks/usePreventScroll.ts
var import_react29 = require("react");
var usePreventScroll = (open, enabled) => {
  (0, import_react29.useEffect)(() => {
    if (open) {
      if (enabled) {
        document.body.style.height = "100%";
        document.body.style.overflow = "hidden";
      }
    } else {
      if (enabled) {
        document.body.removeAttribute("style");
      }
    }
  }, [open]);
};
var usePreventScroll_default = usePreventScroll;

// src/components/utils/BodyPortal.tsx
var import_react30 = require("react");
var import_react_dom = __toESM(require("react-dom"), 1);
function BodyPortal(props) {
  const { children } = props;
  const [hasDocument, setHasDocument] = (0, import_react30.useState)(false);
  (0, import_react30.useEffect)(() => {
    setHasDocument(typeof document !== "undefined");
  }, []);
  return hasDocument ? import_react_dom.default.createPortal(children, document.body) : null;
}

// src/components/Modal/Modal.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
function Modal(props) {
  const { open, onClose, preventScroll = false, size = "sm", children } = props;
  const classes = (0, import_react31.useMemo)(() => `guwmi-modal ${size}`, [size]);
  const modalOverlay = (0, import_react31.useRef)(null);
  const modal = (0, import_react31.useRef)(null);
  const { isVisible } = useAnimation_default(open, "open", modalOverlay);
  useFocusTrap_default(open, onClose, modal);
  useCloseOutClick_default(open, onClose, modal);
  usePreventScroll_default(open, preventScroll);
  return isVisible && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(BodyPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "guwmi-modal-overlay", ref: modalOverlay, "data-testid": "guwmi-modal", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("dialog", { className: classes, ref: modal, children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "button",
      {
        className: "guwmi-modal-close-button",
        "aria-label": "Close modal",
        onClick: () => onClose(),
        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Icon_default, { name: "close", size: 20 })
      }
    ),
    children
  ] }) }) });
}

// src/components/Drawer/Drawer.tsx
var import_react32 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
function Drawer(props) {
  const { open, onClose, preventScroll = false, position = "left", children } = props;
  const classes = (0, import_react32.useMemo)(() => `guwmi-drawer ${position}`, [position]);
  const drawerOverlay = (0, import_react32.useRef)(null);
  const drawer = (0, import_react32.useRef)(null);
  const { isVisible } = useAnimation_default(open, "open", drawerOverlay);
  useFocusTrap_default(open, onClose, drawer);
  useCloseOutClick_default(open, onClose, drawer);
  usePreventScroll_default(open, preventScroll);
  return isVisible && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(BodyPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "guwmi-drawer-overlay", ref: drawerOverlay, "data-testid": "guwmi-drawer", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("aside", { className: classes, ref: drawer, "aria-modal": "true", tabIndex: 0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      "button",
      {
        className: "guwmi-drawer-close-button",
        "aria-label": "Close drawer",
        onClick: () => onClose(),
        children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Icon_default, { name: "close", size: 20 })
      }
    ),
    children
  ] }) }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionItem,
  Button,
  ButtonGroup,
  Card,
  CardSection,
  Cards,
  Drawer,
  Icon,
  IconButton,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTrigger,
  Modal,
  Notification,
  Tab,
  TabPanel,
  TabPanels,
  Table,
  Tabs,
  TabsContainer
});
//# sourceMappingURL=index.cjs.map