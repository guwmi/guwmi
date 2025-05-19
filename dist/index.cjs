"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_styles = require("./index-2P5H252K.css");

// src/components/Button/Button.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function Button(props) {
  const {
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
  } = props;
  const classes = (0, import_react.useMemo)(() => `guwmi-btn ${size} ${color} ${variant} ${theme}${className ? " " + className : ""}`, []);
  const button = (0, import_react.useRef)(null);
  const handleClick = (0, import_react.useCallback)((e) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  }, [href, onClick, button.current]);
  return href && !disabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { className: classes, href, onClick: () => handleClick, target, ref: button, children }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: classes, onClick: (e) => handleClick(e), ref: button, disabled, children });
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
    ariaLabel
  } = props;
  const classes = (0, import_react3.useMemo)(() => `guwmi-btn icon ${size} ${color} ${variant} ${theme}${className ? " " + className : ""}`, []);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: classes, onClick, "aria-label": ariaLabel, children });
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: isVisible && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("nav", { className: "guwmi-menu-dropdown", ref: dropDownRef, "aria-label": ariaLabel, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { role: "menubar", children }) }) });
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
var import_react20 = require("react");

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
var import_react19 = require("react");
var import_icons_react = require("@tabler/icons-react");
var import_jsx_runtime14 = require("react/jsx-runtime");
function SearchInput(props) {
  const { placeholder } = props;
  const id = (0, import_react19.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "guwmi-search-input", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_icons_react.IconSearch, { size: 18 }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("label", { htmlFor: id, className: "guwmi-sr-only", children: "Search" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("input", { id, type: "search", placeholder: placeholder ? placeholder : "Search..." })
  ] });
}

// src/components/Table/Table.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function Table(props) {
  const { headers, rows, isCondensed, isSearchable } = props;
  const id = (0, import_react20.useId)();
  const classes = (0, import_react20.useMemo)(() => `guwmi-table-container${isCondensed ? " condensed" : ""}`, []);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: classes, children: [
    headers.length > 0 && isSearchable && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "guwmi-table-search", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SearchInput, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("table", { cellPadding: 0, cellSpacing: 0, children: headers.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", { children: headers.map((header, i) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("th", { children: header.title }, `table-${id}-header-${i}`)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tbody", { children: rows.length > 0 ? rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TableRow, { headers, data: row, tableId: id }, `table-${id}-row-${row.id}`)) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("td", { colSpan: headers.length, children: "There is no data to display in the table" }) }) })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tbody", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("td", { children: "No column headers provided for the table" }) }) }) })
  ] });
}

// src/components/Accordion/Accordion.tsx
var import_react22 = require("react");

// src/components/Accordion/AccordionContext.ts
var import_react21 = require("react");
var AccordionContext = (0, import_react21.createContext)(null);
var AccordionContext_default = AccordionContext;

// src/components/Accordion/Accordion.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function Accordion(props) {
  const { children, defaultOpen } = props;
  const [openAccordions, setOpenAccordions] = (0, import_react22.useState)([]);
  (0, import_react22.useEffect)(() => {
    if (defaultOpen) {
      setOpenAccordions([...openAccordions, defaultOpen]);
    }
  }, [defaultOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AccordionContext_default.Provider, { value: { openAccordions, setOpenAccordions }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "guwmi-accordion-container", children }) });
}

// src/components/Accordion/AccrodionItem.tsx
var import_react23 = require("react");
var import_icons_react2 = require("@tabler/icons-react");
var import_jsx_runtime17 = require("react/jsx-runtime");
function AccordionItem(props) {
  const { children, title, id } = props;
  const { openAccordions, setOpenAccordions } = (0, import_react23.useContext)(AccordionContext_default);
  const windowWidth = useWindowWidth();
  const panelRef = (0, import_react23.useRef)(null);
  const contentRef = (0, import_react23.useRef)(null);
  const [isOpen, setIsOpen] = (0, import_react23.useState)(false);
  const [isAnimating, setIsAnimating] = (0, import_react23.useState)(false);
  (0, import_react23.useEffect)(() => {
    if (openAccordions.includes(id)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [openAccordions]);
  const open = (0, import_react23.useCallback)(() => {
    setOpenAccordions([...openAccordions, id]);
    setIsAnimating(true);
  }, [id, openAccordions]);
  const close = (0, import_react23.useCallback)(() => {
    setOpenAccordions(openAccordions.filter((value) => value !== id));
    setIsAnimating(true);
  }, [id, openAccordions]);
  (0, import_react23.useEffect)(() => {
    var _a, _b;
    (_a = panelRef.current) == null ? void 0 : _a.addEventListener("transitioncancel", () => setIsAnimating(false));
    (_b = panelRef.current) == null ? void 0 : _b.addEventListener("transitionend", () => setIsAnimating(false));
  }, [panelRef.current]);
  (0, import_react23.useEffect)(() => {
    if (contentRef.current && isOpen) {
      const height = contentRef.current.offsetHeight;
      panelRef.current.style.height = `${height}px`;
    } else {
      panelRef.current.style.height = `0px`;
    }
  }, [contentRef.current, isOpen, windowWidth]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "guwmi-accordion-item", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      "button",
      {
        onClick: () => isOpen ? close() : open(),
        id: `guwmi-accordion-controller-${id}`,
        "aria-controls": `guwmi-accordion-panel-${id}`,
        "aria-expanded": isOpen,
        className: isOpen ? "active" : null,
        children: [
          title,
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_icons_react2.IconChevronRight, { size: 20 })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "section",
      {
        hidden: !isOpen && !isAnimating,
        id: `guwmi-accordion-panel-${id}`,
        "aria-labelledby": `guwmi-accordion-controller-${id}`,
        ref: panelRef,
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "guwmi-accordion-panel-content", ref: contentRef, children })
      }
    )
  ] });
}

// src/components/Cards/Cards.tsx
var import_react24 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
function Cards(props) {
  const { children, columns = 3 } = props;
  const classes = (0, import_react24.useMemo)(() => {
    let classString = "guwmi-card-grid ";
    switch (columns) {
      case 2:
        classString += "two";
        break;
      case 3:
        classString += "three";
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
    }
    return classString;
  }, [columns]);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: classes, children });
}

// src/components/Cards/Card.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function Card(props) {
  const {
    title,
    subTitle,
    image,
    children
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "guwmi-card", children: [
    image && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("img", { src: image, alt: title ? title : "Card image", className: "guwmi-card-image" }),
    (title || subTitle) && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "guwmi-card-section guwmi-card-title", children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { children: title }),
      subTitle && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h3", { children: subTitle })
    ] }),
    children
  ] });
}

// src/components/Cards/CardSection.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function CardSection(props) {
  const { children } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "guwmi-card-section", children });
}

// src/components/Notification/Notification.tsx
var import_react25 = require("react");
var import_icons_react3 = require("@tabler/icons-react");
var import_jsx_runtime21 = require("react/jsx-runtime");
function Notification(props) {
  const { kind, title, content } = props;
  const [isVisible, setIsVisible] = (0, import_react25.useState)(true);
  const titleText = (0, import_react25.useMemo)(() => title ? title : kind.charAt(0).toUpperCase() + kind.slice(1), [title, kind]);
  const classes = (0, import_react25.useMemo)(() => `guwmi-notification ${kind}`, [kind]);
  return isVisible ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("dialog", { className: classes, children: [
    kind === "error" ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_icons_react3.IconAlertCircle, { size: 20, stroke: 3 }) : kind === "warning" ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_icons_react3.IconAlertTriangle, { size: 20, stroke: 3 }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_icons_react3.IconCheck, { size: 20, stroke: 3 }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h2", { children: titleText }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { children: content }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "button",
      {
        onClick: () => setIsVisible(false),
        "aria-label": "Close notification",
        tabIndex: 0,
        children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_icons_react3.IconX, { size: 18 })
      }
    )
  ] }) : null;
}

// src/components/Modal/Modal.tsx
var import_react30 = require("react");

// src/hooks/useTrapTabs.ts
var import_react26 = require("react");
var useTrapTabs = (open, onClose, elementRef) => {
  const triggerRef = (0, import_react26.useRef)(null);
  const handleTab = (0, import_react26.useCallback)((e) => {
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
  const handleEscape = (0, import_react26.useCallback)((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, []);
  (0, import_react26.useEffect)(() => {
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
var useTrapTabs_default = useTrapTabs;

// src/hooks/useCloseOutClick.ts
var import_react27 = require("react");
var useCloseOutClick = (open, onClose, elementRef) => {
  const triggerRef = (0, import_react27.useRef)(null);
  const closeOutClick = (0, import_react27.useCallback)((e) => {
    var _a;
    if (e.target !== triggerRef.current && !((_a = elementRef.current) == null ? void 0 : _a.contains(e.target))) {
      onClose();
    }
  }, [elementRef.current]);
  (0, import_react27.useEffect)(() => {
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
var import_react28 = require("react");
var usePreventScroll = (open, enabled) => {
  (0, import_react28.useEffect)(() => {
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
var import_react29 = require("react");
var import_react_dom = __toESM(require("react-dom"), 1);
function BodyPortal(props) {
  const { children } = props;
  const [hasDocument, setHasDocument] = (0, import_react29.useState)(false);
  (0, import_react29.useEffect)(() => {
    setHasDocument(typeof document !== "undefined");
  }, []);
  return hasDocument ? import_react_dom.default.createPortal(children, document.body) : null;
}

// src/components/Modal/Modal.tsx
var import_icons_react4 = require("@tabler/icons-react");
var import_jsx_runtime22 = require("react/jsx-runtime");
function Modal(props) {
  const { open, onClose, preventScroll = false, size = "sm", children } = props;
  const classes = (0, import_react30.useMemo)(() => `guwmi-modal ${size}`, [size]);
  const modalOverlay = (0, import_react30.useRef)(null);
  const modal = (0, import_react30.useRef)(null);
  const { isVisible } = useAnimation_default(open, "open", modalOverlay);
  useTrapTabs_default(open, onClose, modal);
  useCloseOutClick_default(open, onClose, modal);
  usePreventScroll_default(open, preventScroll);
  return isVisible && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(BodyPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "guwmi-modal-overlay", ref: modalOverlay, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("dialog", { className: classes, ref: modal, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "button",
      {
        className: "guwmi-modal-close-button",
        "aria-label": "Close modal",
        onClick: () => onClose(),
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_icons_react4.IconX, { size: 20 })
      }
    ),
    children
  ] }) }) });
}

// src/components/Drawer/Drawer.tsx
var import_react31 = require("react");
var import_icons_react5 = require("@tabler/icons-react");
var import_jsx_runtime23 = require("react/jsx-runtime");
function Drawer(props) {
  const { open, onClose, preventScroll = false, position = "left", children } = props;
  const classes = (0, import_react31.useMemo)(() => `guwmi-drawer ${position}`, [position]);
  const drawerOverlay = (0, import_react31.useRef)(null);
  const drawer = (0, import_react31.useRef)(null);
  const { isVisible } = useAnimation_default(open, "open", drawerOverlay);
  useTrapTabs_default(open, onClose, drawer);
  useCloseOutClick_default(open, onClose, drawer);
  usePreventScroll_default(open, preventScroll);
  return isVisible && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(BodyPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "guwmi-drawer-overlay", ref: drawerOverlay, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("aside", { className: classes, ref: drawer, "aria-modal": "true", tabIndex: 0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "button",
      {
        className: "guwmi-drawer-close-button",
        "aria-label": "Close drawer",
        onClick: () => onClose(),
        children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_icons_react5.IconX, { size: 20 })
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