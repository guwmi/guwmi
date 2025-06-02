var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/index.ts
import "./guwmi-GMMVTX5E.css";

// src/components/Button/Button.tsx
import {
  useCallback,
  useMemo,
  useRef
} from "react";
import { jsx } from "react/jsx-runtime";
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
  const classes = useMemo(() => `guwmi-btn ${size} ${color} ${variant} ${theme}${className ? " " + className : ""}`, []);
  const button = useRef(null);
  const handleClick = useCallback((e) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  }, [href, onClick, button.current]);
  return href && !disabled ? /* @__PURE__ */ jsx("a", __spreadProps(__spreadValues({ className: classes, href, target, ref: button }, rest), { children })) : /* @__PURE__ */ jsx("button", __spreadProps(__spreadValues({ className: classes, onClick: (e) => handleClick(e), ref: button, disabled }, rest), { children }));
}

// src/components/ButtonGroup/ButtonGroup.tsx
import React2, { useMemo as useMemo2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
function ButtonGroup(props) {
  const _a = props, {
    children,
    size = "md",
    color = "neutral",
    variant = "fill",
    theme = "round",
    className
  } = _a, rest = __objRest(_a, [
    "children",
    "size",
    "color",
    "variant",
    "theme",
    "className"
  ]);
  const classes = useMemo2(() => `guwmi-btn-group ${size} ${color} ${variant} ${theme}${className ? " " + className : ""}`, []);
  const buttonChildren = useMemo2(() => React2.Children.map(children, (child) => {
    return React2.cloneElement(child, {
      size,
      color,
      variant,
      theme
    });
  }), [children]);
  return /* @__PURE__ */ jsx2("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: buttonChildren }));
}

// src/components/IconButton/IconButton.tsx
import { useMemo as useMemo3 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
function IconButton(props) {
  const _a = props, {
    children,
    size = "md",
    color = "primary",
    variant = "fill",
    theme = "round",
    className,
    onClick,
    ariaLabel,
    disabled = false
  } = _a, rest = __objRest(_a, [
    "children",
    "size",
    "color",
    "variant",
    "theme",
    "className",
    "onClick",
    "ariaLabel",
    "disabled"
  ]);
  const classes = useMemo3(() => `guwmi-btn icon ${size} ${color} ${variant} ${theme}${className ? " " + className : ""}`, []);
  return /* @__PURE__ */ jsx3(
    "button",
    __spreadProps(__spreadValues({
      className: classes,
      onClick,
      "aria-label": ariaLabel,
      disabled
    }, rest), {
      children
    })
  );
}

// src/components/Menu/Menu.tsx
import { useState, useMemo as useMemo4 } from "react";

// src/components/Menu/MenuContext.ts
import { createContext } from "react";
var MenuContext = createContext(null);
var MenuContext_default = MenuContext;

// src/components/Menu/Menu.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function Menu(props) {
  const _a = props, {
    children,
    position = "bottom-right",
    width,
    ariaLabel
  } = _a, rest = __objRest(_a, [
    "children",
    "position",
    "width",
    "ariaLabel"
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const classes = useMemo4(() => `guwmi-menu-container ${position}`, []);
  return /* @__PURE__ */ jsx4("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: /* @__PURE__ */ jsx4(MenuContext_default.Provider, { value: { isOpen, setIsOpen, ariaLabel }, children }) }));
}

// src/components/Menu/MenuDropdown.tsx
import { useContext, useRef as useRef4 } from "react";

// src/hooks/useAnimation.ts
import { useEffect, useState as useState2, useRef as useRef2 } from "react";
var useAnimation = (componentState, classString, elementRef) => {
  const [isInDOM, setIsInDOM] = useState2(componentState);
  const [hasClass, setHasClass] = useState2(false);
  const initialLoad = useRef2(true);
  const listnerAdded = useRef2(false);
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
  useEffect(() => {
    initialLoad.current = false;
  }, []);
  useEffect(() => {
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
import { useCallback as useCallback2, useEffect as useEffect2, useRef as useRef3 } from "react";
var useTabThrough = (open, onClose, elementRef) => {
  const triggerRef = useRef3(null);
  const handleTab = useCallback2((e) => {
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
  const handleEscape = useCallback2((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, []);
  useEffect2(() => {
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
import { Fragment, jsx as jsx5 } from "react/jsx-runtime";
function MenuDropdown(props) {
  const _a = props, { children } = _a, rest = __objRest(_a, ["children"]);
  const { isOpen, setIsOpen, ariaLabel } = useContext(MenuContext_default);
  const dropDownRef = useRef4(null);
  const { isVisible } = useAnimation_default(isOpen, "open", dropDownRef);
  useTabThrough_default(isOpen, () => setIsOpen(false), dropDownRef);
  return /* @__PURE__ */ jsx5(Fragment, { children: isVisible && /* @__PURE__ */ jsx5(
    "nav",
    __spreadProps(__spreadValues({
      className: "guwmi-menu-dropdown",
      ref: dropDownRef,
      "aria-label": ariaLabel
    }, rest), {
      children: /* @__PURE__ */ jsx5("ul", { role: "menubar", children })
    })
  ) });
}

// src/components/Menu/MenuItem.tsx
import { useMemo as useMemo5 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
function MenuItem(props) {
  const _a = props, { children, onClick, href } = _a, rest = __objRest(_a, ["children", "onClick", "href"]);
  const classes = useMemo5(() => `guwmi-menu-item`, []);
  return /* @__PURE__ */ jsx6("li", { className: classes, children: href ? /* @__PURE__ */ jsx6("a", __spreadProps(__spreadValues({ className: "guwmi-menu-btn", href }, rest), { children })) : /* @__PURE__ */ jsx6("button", __spreadProps(__spreadValues({ className: "guwmi-menu-btn", onClick }, rest), { children })) });
}

// src/components/Menu/MenuTrigger.tsx
import React6, { useMemo as useMemo6, useContext as useContext2 } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
function MenuTrigger(props) {
  const _a = props, { children } = _a, rest = __objRest(_a, ["children"]);
  const { isOpen, setIsOpen } = useContext2(MenuContext_default);
  const childrenWithClick = useMemo6(() => {
    return React6.Children.map(children, (child) => React6.cloneElement(child, { onClick: () => setIsOpen(!isOpen) }));
  }, [children, isOpen]);
  return /* @__PURE__ */ jsx7("div", __spreadProps(__spreadValues({ className: "guwmi-menu-trigger" }, rest), { children: childrenWithClick }));
}

// src/components/Tabs/TabsContainer.tsx
import { useState as useState3, useId } from "react";

// src/components/Tabs/TabsContext.ts
import { createContext as createContext2 } from "react";
var TabsContext = createContext2(null);
var TabsContext_default = TabsContext;

// src/components/Tabs/TabsContainer.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
function TabsContainer(props) {
  const _a = props, { children } = _a, rest = __objRest(_a, ["children"]);
  const [selectedTab, setSelectedTab] = useState3(0);
  const id = useId();
  return /* @__PURE__ */ jsx8(TabsContext_default.Provider, { value: { id, selectedTab, setSelectedTab }, children: /* @__PURE__ */ jsx8("div", __spreadProps(__spreadValues({ className: "guwmi-tabs-container" }, rest), { children })) });
}

// src/components/Tabs/Tabs.tsx
import React8, {
  useEffect as useEffect3,
  useMemo as useMemo7,
  useRef as useRef5,
  useContext as useContext3
} from "react";
import { jsx as jsx9, jsxs } from "react/jsx-runtime";
function Tabs(props) {
  const _a = props, { children } = _a, rest = __objRest(_a, ["children"]);
  const { selectedTab } = useContext3(TabsContext_default);
  const tabsContainer = useRef5(null);
  const slider = useRef5(null);
  const childrenWithIndex = useMemo7(() => {
    return React8.Children.map(children, (child, index) => React8.cloneElement(child, { index }));
  }, [children]);
  useEffect3(() => {
    if (tabsContainer.current.querySelector(".guwmi-tab.active")) {
      const activeTab = tabsContainer.current.querySelector(".guwmi-tab.active");
      const left = activeTab.offsetLeft;
      const width = activeTab.offsetWidth;
      slider.current.style.width = `${width}px`;
      slider.current.style.left = `${left}px`;
    }
  }, [tabsContainer, selectedTab]);
  return /* @__PURE__ */ jsxs("nav", __spreadProps(__spreadValues({ className: "guwmi-tabs", role: "tablist", ref: tabsContainer }, rest), { children: [
    /* @__PURE__ */ jsx9("span", { className: "guwmi-tabs-slider", ref: slider }),
    childrenWithIndex
  ] }));
}

// src/components/Tabs/Tab.tsx
import { useContext as useContext4 } from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
function Tab(props) {
  const _a = props, { children, index } = _a, rest = __objRest(_a, ["children", "index"]);
  const { id, selectedTab, setSelectedTab } = useContext4(TabsContext_default);
  return /* @__PURE__ */ jsx10(
    "button",
    __spreadProps(__spreadValues({
      className: `guwmi-tab${selectedTab === index ? " active" : ""}`,
      onClick: () => setSelectedTab(index),
      id: `tabs-${id}-tab-${index}`,
      "aria-selected": selectedTab === index,
      "aria-controls": `tabs-${id}-tabpanel-${index}`
    }, rest), {
      children
    })
  );
}

// src/components/Tabs/TabPanels.tsx
import React10, {
  useContext as useContext5,
  useMemo as useMemo8,
  useRef as useRef6,
  useEffect as useEffect5
} from "react";

// src/hooks/useWindowWidth.ts
import { useState as useState4, useEffect as useEffect4 } from "react";
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState4();
  const handleResize = () => setWindowWidth(window.innerWidth);
  useEffect4(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}

// src/components/Tabs/TabPanels.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
function TabPanels(props) {
  const _a = props, { children } = _a, rest = __objRest(_a, ["children"]);
  const { selectedTab } = useContext5(TabsContext_default);
  const windowWidth = useWindowWidth();
  const panels = useRef6(null);
  const childrenWithIndex = useMemo8(() => {
    return React10.Children.map(children, (child, index) => React10.cloneElement(child, { index }));
  }, [children]);
  useEffect5(() => {
    const active = panels.current.querySelector(".active");
    const height = active.offsetHeight;
    panels.current.style.height = `${height}px`;
  }, [selectedTab, windowWidth]);
  return /* @__PURE__ */ jsx11("div", __spreadProps(__spreadValues({ className: "guwmi-tab-panels", ref: panels }, rest), { children: childrenWithIndex }));
}

// src/components/Tabs/TabPanel.tsx
import { useContext as useContext6 } from "react";
import { jsx as jsx12 } from "react/jsx-runtime";
function TabPanel(props) {
  const _a = props, { children, index } = _a, rest = __objRest(_a, ["children", "index"]);
  const { id, selectedTab } = useContext6(TabsContext_default);
  return /* @__PURE__ */ jsx12(
    "section",
    __spreadProps(__spreadValues({
      className: `guwmi-tab-panel${selectedTab === index ? " active" : ""}`,
      role: "tabpanel",
      hidden: selectedTab !== index,
      "aria-labelledby": `tabs-${id}-tab-${index}`,
      id: `tabs-${id}-tabpanel-${index}`
    }, rest), {
      children
    })
  );
}

// src/components/Table/Table.tsx
import { useEffect as useEffect6, useId as useId3, useMemo as useMemo11, useState as useState5 } from "react";

// src/utils/isEmpty.ts
var isEmpty = (variable) => {
  if (typeof variable === "undefined") {
    return true;
  } else if (variable === null) {
    return true;
  } else if (typeof variable === "string" && variable.length === 0) {
    return true;
  } else if (typeof variable === "number" && isNaN(variable)) {
    return true;
  } else if (typeof variable === "object" && Object.keys(variable).length === 0) {
    return true;
  } else if (Array.isArray(variable) && variable.length === 0) {
    return true;
  } else {
    return false;
  }
};
var isEmpty_default = isEmpty;

// src/utils/tableSearch.ts
var tableSearch = (arr = [], keys, value = "") => {
  if (!isEmpty_default(arr) && !isEmpty_default(keys)) {
    return arr.filter((item) => {
      return keys.some((key) => {
        if (key.search === "includes") {
          return item[key.key].toLowerCase().includes(value.toLowerCase());
        } else if (key.search === "starts-with") {
          return item[key.key].toLowerCase().startsWith(value.toLowerCase());
        }
      });
    });
  } else {
    return [];
  }
};
var tableSearch_default = tableSearch;

// src/components/Table/TableRow.tsx
import { useMemo as useMemo9 } from "react";
import { Fragment as Fragment2, jsx as jsx13 } from "react/jsx-runtime";
function TableRow(props) {
  const _a = props, { headers, data, tableId } = _a, rest = __objRest(_a, ["headers", "data", "tableId"]);
  const cellData = useMemo9(() => {
    const arr = [];
    headers.forEach((h) => {
      if (data[h.key]) {
        arr.push({ id: data.id, col: h.key, value: data[h.key] });
      }
    });
    return arr;
  }, [headers, data]);
  return /* @__PURE__ */ jsx13(Fragment2, { children: cellData && /* @__PURE__ */ jsx13("tr", __spreadProps(__spreadValues({}, rest), { children: cellData.map((cell) => /* @__PURE__ */ jsx13("td", { children: cell.value }, `table-${tableId}-cell-${cell.id}-${cell.col}`)) })) });
}

// src/components/Inputs/Search/SearchInput.tsx
import { useId as useId2 } from "react";

// src/components/Icon/Icon.tsx
import { useMemo as useMemo10, forwardRef } from "react";

// src/components/Icon/paths.tsx
import { Fragment as Fragment3, jsx as jsx14, jsxs as jsxs2 } from "react/jsx-runtime";
function AlertCircle() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }),
    /* @__PURE__ */ jsx14("path", { d: "M12 8v4" }),
    /* @__PURE__ */ jsx14("path", { d: "M12 16h.01" })
  ] });
}
function AlertSquare() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" }),
    /* @__PURE__ */ jsx14("path", { d: "M12 8v4" }),
    /* @__PURE__ */ jsx14("path", { d: "M12 16h.01" })
  ] });
}
function AlertTriangle() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M12 9v4" }),
    /* @__PURE__ */ jsx14("path", { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" }),
    /* @__PURE__ */ jsx14("path", { d: "M12 16h.01" })
  ] });
}
function Check() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M5 12l5 5l10 -10" })
  ] });
}
function ChevronDown() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M6 9l6 6l6 -6" })
  ] });
}
function ChevronLeft() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M15 6l-6 6l6 6" })
  ] });
}
function ChevronRight() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M9 6l6 6l-6 6" })
  ] });
}
function ChevronUp() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M6 15l6 -6l6 6" })
  ] });
}
function Copy() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" }),
    /* @__PURE__ */ jsx14("path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" })
  ] });
}
function Close() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M18 6l-12 12" }),
    /* @__PURE__ */ jsx14("path", { d: "M6 6l12 12" })
  ] });
}
function Dots() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }),
    /* @__PURE__ */ jsx14("path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }),
    /* @__PURE__ */ jsx14("path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" })
  ] });
}
function ExternalLink() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" }),
    /* @__PURE__ */ jsx14("path", { d: "M11 13l9 -9" }),
    /* @__PURE__ */ jsx14("path", { d: "M15 4h5v5" })
  ] });
}
function Hide() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828" }),
    /* @__PURE__ */ jsx14("path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" }),
    /* @__PURE__ */ jsx14("path", { d: "M3 3l18 18" })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M5 12l-2 0l9 -9l9 9l-2 0" }),
    /* @__PURE__ */ jsx14("path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" }),
    /* @__PURE__ */ jsx14("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" })
  ] });
}
function Info() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }),
    /* @__PURE__ */ jsx14("path", { d: "M12 9h.01" }),
    /* @__PURE__ */ jsx14("path", { d: "M11 12h1v4h1" })
  ] });
}
function Login() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" }),
    /* @__PURE__ */ jsx14("path", { d: "M3 12h13l-3 -3" }),
    /* @__PURE__ */ jsx14("path", { d: "M13 15l3 -3" })
  ] });
}
function Menu2() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M4 6l16 0" }),
    /* @__PURE__ */ jsx14("path", { d: "M4 12l16 0" }),
    /* @__PURE__ */ jsx14("path", { d: "M4 18l16 0" })
  ] });
}
function ProgressAlert() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" }),
    /* @__PURE__ */ jsx14("path", { d: "M14 3.223a9.003 9.003 0 0 1 0 17.554" }),
    /* @__PURE__ */ jsx14("path", { d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" }),
    /* @__PURE__ */ jsx14("path", { d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" }),
    /* @__PURE__ */ jsx14("path", { d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" }),
    /* @__PURE__ */ jsx14("path", { d: "M12 8v4" }),
    /* @__PURE__ */ jsx14("path", { d: "M12 16v.01" })
  ] });
}
function ProgressCheck() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" }),
    /* @__PURE__ */ jsx14("path", { d: "M14 3.223a9.003 9.003 0 0 1 0 17.554" }),
    /* @__PURE__ */ jsx14("path", { d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" }),
    /* @__PURE__ */ jsx14("path", { d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" }),
    /* @__PURE__ */ jsx14("path", { d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" }),
    /* @__PURE__ */ jsx14("path", { d: "M9 12l2 2l4 -4" })
  ] });
}
function Progress() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" }),
    /* @__PURE__ */ jsx14("path", { d: "M14 3.223a9.003 9.003 0 0 1 0 17.554" }),
    /* @__PURE__ */ jsx14("path", { d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" }),
    /* @__PURE__ */ jsx14("path", { d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" }),
    /* @__PURE__ */ jsx14("path", { d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" })
  ] });
}
function Search() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }),
    /* @__PURE__ */ jsx14("path", { d: "M21 21l-6 -6" })
  ] });
}
function Settings() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" }),
    /* @__PURE__ */ jsx14("path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" })
  ] });
}
function View() {
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx14("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx14("path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }),
    /* @__PURE__ */ jsx14("path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" })
  ] });
}

// src/components/Icon/Icon.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var Icon = forwardRef((props, ref) => {
  const _a = props, {
    name,
    size = 24,
    stroke = 2,
    color = "currentColor",
    className
  } = _a, rest = __objRest(_a, [
    "name",
    "size",
    "stroke",
    "color",
    "className"
  ]);
  const classes = useMemo10(() => `icon guwmi-icon guwmi-icon-${name}${className ? " " + className : ""}`, [className]);
  const paths = useMemo10(() => {
    switch (name) {
      case "alert-circle":
        return /* @__PURE__ */ jsx15(AlertCircle, {});
      case "alert-squre":
        return /* @__PURE__ */ jsx15(AlertSquare, {});
      case "alert-triangle":
        return /* @__PURE__ */ jsx15(AlertTriangle, {});
      case "check":
        return /* @__PURE__ */ jsx15(Check, {});
      case "chevron-down":
        return /* @__PURE__ */ jsx15(ChevronDown, {});
      case "chevron-left":
        return /* @__PURE__ */ jsx15(ChevronLeft, {});
      case "chevron-right":
        return /* @__PURE__ */ jsx15(ChevronRight, {});
      case "chevron-up":
        return /* @__PURE__ */ jsx15(ChevronUp, {});
      case "copy":
        return /* @__PURE__ */ jsx15(Copy, {});
      case "close":
        return /* @__PURE__ */ jsx15(Close, {});
      case "dots":
        return /* @__PURE__ */ jsx15(Dots, {});
      case "external-link":
        return /* @__PURE__ */ jsx15(ExternalLink, {});
      case "hide":
        return /* @__PURE__ */ jsx15(Hide, {});
      case "home":
        return /* @__PURE__ */ jsx15(Home, {});
      case "info":
        return /* @__PURE__ */ jsx15(Info, {});
      case "login":
        return /* @__PURE__ */ jsx15(Login, {});
      case "menu":
        return /* @__PURE__ */ jsx15(Menu2, {});
      case "progress-alert":
        return /* @__PURE__ */ jsx15(ProgressAlert, {});
      case "progress-check":
        return /* @__PURE__ */ jsx15(ProgressCheck, {});
      case "progress":
        return /* @__PURE__ */ jsx15(Progress, {});
      case "search":
        return /* @__PURE__ */ jsx15(Search, {});
      case "settings":
        return /* @__PURE__ */ jsx15(Settings, {});
      case "view":
        return /* @__PURE__ */ jsx15(View, {});
    }
  }, [name]);
  return /* @__PURE__ */ jsx15(
    "svg",
    __spreadProps(__spreadValues({
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
      className: classes
    }, rest), {
      children: paths
    })
  );
});
var Icon_default = Icon;

// src/components/Inputs/Search/SearchInput.tsx
import { jsx as jsx16, jsxs as jsxs3 } from "react/jsx-runtime";
function SearchInput(props) {
  const _a = props, {
    label,
    id,
    name,
    placeholder,
    disabled,
    value,
    readOnly,
    maxLength,
    onChange,
    onBlur,
    onFocus
  } = _a, rest = __objRest(_a, [
    "label",
    "id",
    "name",
    "placeholder",
    "disabled",
    "value",
    "readOnly",
    "maxLength",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const searchId = id != null ? id : useId2();
  return /* @__PURE__ */ jsxs3("div", __spreadProps(__spreadValues({ className: "guwmi-search-input" }, rest), { children: [
    /* @__PURE__ */ jsx16("span", { children: /* @__PURE__ */ jsx16(Icon_default, { name: "search", size: 18 }) }),
    /* @__PURE__ */ jsx16("label", { htmlFor: searchId, className: "guwmi-sr-only", children: label != null ? label : "Search" }),
    /* @__PURE__ */ jsx16(
      "input",
      {
        id: searchId,
        type: "search",
        name,
        placeholder: placeholder ? placeholder : "Search...",
        disabled,
        value,
        readOnly,
        maxLength,
        onChange,
        onBlur,
        onFocus
      }
    )
  ] }));
}

// src/components/Table/Table.tsx
import { Fragment as Fragment4, jsx as jsx17, jsxs as jsxs4 } from "react/jsx-runtime";
function Table(props) {
  const _a = props, { title, description, headers, rows, isCondensed } = _a, rest = __objRest(_a, ["title", "description", "headers", "rows", "isCondensed"]);
  const id = useId3();
  const isSearchable = useMemo11(() => headers.some((header) => (header == null ? void 0 : header.search) === "includes" || (header == null ? void 0 : header.search) === "starts-with"), [headers]);
  const classes = useMemo11(() => `guwmi-table-container${isCondensed ? " condensed" : ""}`, []);
  const searchHeaders = useMemo11(() => headers.filter((header) => (header == null ? void 0 : header.search) === "includes" || (header == null ? void 0 : header.search) === "starts-with"), [headers]);
  const [searchValue, setSearchValue] = useState5("");
  const [tableRows, setTableRows] = useState5(rows);
  const handleSearch = () => {
    const updatedRows = tableSearch_default(
      rows,
      searchHeaders,
      searchValue
    );
    setTableRows(updatedRows);
  };
  useEffect6(() => {
    if (isSearchable) {
      handleSearch();
    }
  }, [searchValue]);
  return /* @__PURE__ */ jsxs4("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    (title || description) && /* @__PURE__ */ jsxs4("div", { className: "guwmi-table-header", children: [
      title && /* @__PURE__ */ jsx17("h2", { children: title }),
      description && /* @__PURE__ */ jsx17("p", { children: description })
    ] }),
    headers.length > 0 && isSearchable && /* @__PURE__ */ jsx17("div", { className: "guwmi-table-search", children: /* @__PURE__ */ jsx17(SearchInput, { onChange: (e) => setSearchValue(e.target.value) }) }),
    /* @__PURE__ */ jsx17("table", { cellPadding: 0, cellSpacing: 0, children: headers.length > 0 ? /* @__PURE__ */ jsxs4(Fragment4, { children: [
      /* @__PURE__ */ jsx17("thead", { children: /* @__PURE__ */ jsx17("tr", { children: headers.map((header, i) => /* @__PURE__ */ jsx17("th", { children: header.title }, `table-${id}-header-${i}`)) }) }),
      /* @__PURE__ */ jsx17("tbody", { children: tableRows.length > 0 ? tableRows.map((row) => /* @__PURE__ */ jsx17(TableRow, { headers, data: row, tableId: id }, `table-${id}-row-${row.id}`)) : /* @__PURE__ */ jsx17("tr", { children: /* @__PURE__ */ jsx17("td", { colSpan: headers.length, children: "There is no data to display in the table" }) }) })
    ] }) : /* @__PURE__ */ jsx17("tbody", { children: /* @__PURE__ */ jsx17("tr", { children: /* @__PURE__ */ jsx17("td", { children: "No column headers provided for the table" }) }) }) })
  ] }));
}

// src/components/Accordion/Accordion.tsx
import { useState as useState6, useEffect as useEffect7 } from "react";

// src/components/Accordion/AccordionContext.ts
import { createContext as createContext3 } from "react";
var AccordionContext = createContext3(null);
var AccordionContext_default = AccordionContext;

// src/components/Accordion/Accordion.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
function Accordion(props) {
  const _a = props, { children, defaultOpen } = _a, rest = __objRest(_a, ["children", "defaultOpen"]);
  const [openAccordions, setOpenAccordions] = useState6([]);
  useEffect7(() => {
    if (defaultOpen) {
      setOpenAccordions([...openAccordions, defaultOpen]);
    }
  }, [defaultOpen]);
  return /* @__PURE__ */ jsx18(AccordionContext_default.Provider, { value: { openAccordions, setOpenAccordions }, children: /* @__PURE__ */ jsx18("div", __spreadProps(__spreadValues({ className: "guwmi-accordion-container" }, rest), { children })) });
}

// src/components/Accordion/AccrodionItem.tsx
import {
  useCallback as useCallback3,
  useContext as useContext7,
  useRef as useRef7,
  useState as useState7,
  useEffect as useEffect8
} from "react";
import { jsx as jsx19, jsxs as jsxs5 } from "react/jsx-runtime";
function AccordionItem(props) {
  const _a = props, { children, title, id } = _a, rest = __objRest(_a, ["children", "title", "id"]);
  const { openAccordions, setOpenAccordions } = useContext7(AccordionContext_default);
  const windowWidth = useWindowWidth();
  const panelRef = useRef7(null);
  const contentRef = useRef7(null);
  const [isOpen, setIsOpen] = useState7(false);
  const [isAnimating, setIsAnimating] = useState7(false);
  useEffect8(() => {
    if (openAccordions.includes(id)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [openAccordions]);
  const open = useCallback3(() => {
    setOpenAccordions([...openAccordions, id]);
    setIsAnimating(true);
  }, [id, openAccordions]);
  const close = useCallback3(() => {
    setOpenAccordions(openAccordions.filter((value) => value !== id));
    setIsAnimating(true);
  }, [id, openAccordions]);
  useEffect8(() => {
    var _a2, _b;
    (_a2 = panelRef.current) == null ? void 0 : _a2.addEventListener("transitioncancel", () => setIsAnimating(false));
    (_b = panelRef.current) == null ? void 0 : _b.addEventListener("transitionend", () => setIsAnimating(false));
  }, [panelRef.current]);
  useEffect8(() => {
    if (contentRef.current && isOpen) {
      const height = contentRef.current.offsetHeight;
      panelRef.current.style.height = `${height}px`;
    } else {
      panelRef.current.style.height = `0px`;
    }
  }, [contentRef.current, isOpen, windowWidth]);
  return /* @__PURE__ */ jsxs5("div", __spreadProps(__spreadValues({ className: "guwmi-accordion-item" }, rest), { children: [
    /* @__PURE__ */ jsxs5(
      "button",
      {
        onClick: () => isOpen ? close() : open(),
        id: `guwmi-accordion-controller-${id}`,
        "aria-controls": `guwmi-accordion-panel-${id}`,
        "aria-expanded": isOpen,
        className: isOpen ? "active" : null,
        children: [
          title,
          /* @__PURE__ */ jsx19(Icon_default, { name: "chevron-right", size: 20 })
        ]
      }
    ),
    /* @__PURE__ */ jsx19(
      "section",
      {
        hidden: !isOpen && !isAnimating,
        id: `guwmi-accordion-panel-${id}`,
        "aria-labelledby": `guwmi-accordion-controller-${id}`,
        ref: panelRef,
        children: /* @__PURE__ */ jsx19("div", { className: "guwmi-accordion-panel-content", ref: contentRef, children })
      }
    )
  ] }));
}

// src/components/Grid/Grid.tsx
import { useMemo as useMemo12 } from "react";
import { jsx as jsx20 } from "react/jsx-runtime";
function Grid(props) {
  const _a = props, {
    children,
    columns = 3,
    wrap = "wrap",
    rowOrder = "standard",
    align = "left"
  } = _a, rest = __objRest(_a, [
    "children",
    "columns",
    "wrap",
    "rowOrder",
    "align"
  ]);
  const classes = useMemo12(() => {
    let classString = "guwmi-grid";
    switch (columns) {
      case "auto":
        classString += " auto";
        break;
      case 2:
        classString += " two";
        break;
      case 4:
        classString += " four";
        break;
      case 5:
        classString += " five";
        break;
      case 6:
        classString += " six";
        break;
      default:
        classString += " three";
    }
    if (wrap === "no-wrap") {
      classString += " no-wrap";
    }
    if (rowOrder === "reverse") {
      classString += " reverse";
    }
    if (align !== "left") {
      if (align === "right") {
        classString += " right";
      } else if (align === "center") {
        classString += " center";
      }
    }
    return classString;
  }, [columns, wrap, rowOrder, align]);
  return /* @__PURE__ */ jsx20("div", __spreadProps(__spreadValues({ className: classes }, rest), { children }));
}

// src/components/VerticalGrid/VerticalGrid.tsx
import { useMemo as useMemo13 } from "react";
import { jsx as jsx21 } from "react/jsx-runtime";
function VerticalGrid(props) {
  const _a = props, {
    children,
    spacing = 2
  } = _a, rest = __objRest(_a, [
    "children",
    "spacing"
  ]);
  const classes = useMemo13(() => {
    let classString = "guwmi-vertical-grid";
    switch (spacing) {
      case 1:
        classString += " one";
        break;
      case 2:
        classString += " two";
        break;
      case 4:
        classString += " four";
        break;
      case 5:
        classString += " five";
        break;
      case 6:
        classString += " six";
        break;
      default:
        classString += " three";
    }
    return classString;
  }, [spacing]);
  return /* @__PURE__ */ jsx21("div", __spreadProps(__spreadValues({ className: classes }, rest), { children }));
}

// src/components/Cards/Card.tsx
import { jsx as jsx22, jsxs as jsxs6 } from "react/jsx-runtime";
function Card(props) {
  const _a = props, {
    title,
    subTitle,
    image,
    children
  } = _a, rest = __objRest(_a, [
    "title",
    "subTitle",
    "image",
    "children"
  ]);
  return /* @__PURE__ */ jsxs6("div", __spreadProps(__spreadValues({ className: "guwmi-card" }, rest), { children: [
    image && /* @__PURE__ */ jsx22("img", { src: image, alt: title ? title : "Card image", className: "guwmi-card-image" }),
    (title || subTitle) && /* @__PURE__ */ jsxs6("div", { className: "guwmi-card-section guwmi-card-title", children: [
      title && /* @__PURE__ */ jsx22("h2", { children: title }),
      subTitle && /* @__PURE__ */ jsx22("h3", { children: subTitle })
    ] }),
    children
  ] }));
}

// src/components/Cards/CardSection.tsx
import { jsx as jsx23 } from "react/jsx-runtime";
function CardSection(props) {
  const _a = props, { children } = _a, rest = __objRest(_a, ["children"]);
  return /* @__PURE__ */ jsx23("div", __spreadProps(__spreadValues({ className: "guwmi-card-section" }, rest), { children }));
}

// src/components/Notification/Notification.tsx
import { useMemo as useMemo14, useState as useState8 } from "react";
import { jsx as jsx24, jsxs as jsxs7 } from "react/jsx-runtime";
function Notification(props) {
  const _a = props, { kind, title, content } = _a, rest = __objRest(_a, ["kind", "title", "content"]);
  const [isVisible, setIsVisible] = useState8(true);
  const titleText = useMemo14(() => title ? title : kind.charAt(0).toUpperCase() + kind.slice(1), [title, kind]);
  const classes = useMemo14(() => `guwmi-notification ${kind}`, [kind]);
  return isVisible ? /* @__PURE__ */ jsxs7("dialog", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    kind === "error" ? /* @__PURE__ */ jsx24(Icon_default, { name: "alert-circle", size: 20, stroke: "3" }) : kind === "warning" ? /* @__PURE__ */ jsx24(Icon_default, { name: "alert-triangle", size: 20, stroke: "3" }) : /* @__PURE__ */ jsx24(Icon_default, { name: "check", size: 20, stroke: "3" }),
    /* @__PURE__ */ jsx24("h2", { children: titleText }),
    /* @__PURE__ */ jsx24("p", { children: content }),
    /* @__PURE__ */ jsx24(
      "button",
      {
        onClick: () => setIsVisible(false),
        "aria-label": "Close notification",
        tabIndex: 0,
        children: /* @__PURE__ */ jsx24(Icon_default, { name: "close", size: 18 })
      }
    )
  ] })) : null;
}

// src/components/Modal/Modal.tsx
import { useMemo as useMemo15, useRef as useRef10 } from "react";

// src/hooks/useFocusTrap.ts
import { useCallback as useCallback4, useEffect as useEffect9, useRef as useRef8 } from "react";
var useFocusTrap = (open, onClose, elementRef) => {
  const triggerRef = useRef8(null);
  const handleTab = useCallback4((e) => {
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
  const handleEscape = useCallback4((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, []);
  useEffect9(() => {
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

// src/hooks/useClickOutside.ts
import { useCallback as useCallback5, useEffect as useEffect10, useRef as useRef9 } from "react";
var useClickOutside = (enabled, onClick, elementRef) => {
  const triggerRef = useRef9(null);
  const closeOutClick = useCallback5((e) => {
    var _a;
    if (e.target !== triggerRef.current && !((_a = elementRef.current) == null ? void 0 : _a.contains(e.target))) {
      onClick();
    }
  }, [elementRef.current]);
  useEffect10(() => {
    var _a;
    if (enabled) {
      triggerRef.current = document.activeElement;
      document.addEventListener("click", closeOutClick);
    } else {
      (_a = triggerRef.current) == null ? void 0 : _a.focus();
      document.removeEventListener("click", closeOutClick);
    }
    return () => {
      document.removeEventListener("click", closeOutClick);
    };
  }, [enabled]);
};
var useClickOutside_default = useClickOutside;

// src/hooks/usePreventScroll.ts
import { useEffect as useEffect11 } from "react";
var usePreventScroll = (open, enabled) => {
  useEffect11(() => {
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
import { useEffect as useEffect12, useState as useState9 } from "react";
import ReactDOM from "react-dom";
function BodyPortal(props) {
  const { children } = props;
  const [hasDocument, setHasDocument] = useState9(false);
  useEffect12(() => {
    setHasDocument(typeof document !== "undefined");
  }, []);
  return hasDocument ? ReactDOM.createPortal(children, document.body) : null;
}

// src/components/Modal/Modal.tsx
import { jsx as jsx25, jsxs as jsxs8 } from "react/jsx-runtime";
function Modal(props) {
  const _a = props, { open, onClose, preventScroll = false, size = "sm", children } = _a, rest = __objRest(_a, ["open", "onClose", "preventScroll", "size", "children"]);
  const classes = useMemo15(() => `guwmi-modal ${size}`, [size]);
  const modalOverlay = useRef10(null);
  const modal = useRef10(null);
  const { isVisible } = useAnimation_default(open, "open", modalOverlay);
  useFocusTrap_default(open, onClose, modal);
  useClickOutside_default(open, onClose, modal);
  usePreventScroll_default(open, preventScroll);
  return isVisible && /* @__PURE__ */ jsx25(BodyPortal, { children: /* @__PURE__ */ jsx25("div", __spreadProps(__spreadValues({ className: "guwmi-modal-overlay", ref: modalOverlay }, rest), { children: /* @__PURE__ */ jsxs8("dialog", { className: classes, ref: modal, children: [
    /* @__PURE__ */ jsx25(
      "button",
      {
        className: "guwmi-modal-close-button",
        "aria-label": "Close modal",
        onClick: () => onClose(),
        children: /* @__PURE__ */ jsx25(Icon_default, { name: "close", size: 20 })
      }
    ),
    children
  ] }) })) });
}

// src/components/Drawer/Drawer.tsx
import { useMemo as useMemo16, useRef as useRef11 } from "react";
import { jsx as jsx26, jsxs as jsxs9 } from "react/jsx-runtime";
function Drawer(props) {
  const _a = props, { open, onClose, preventScroll = false, position = "left", children } = _a, rest = __objRest(_a, ["open", "onClose", "preventScroll", "position", "children"]);
  const classes = useMemo16(() => `guwmi-drawer ${position}`, [position]);
  const drawerOverlay = useRef11(null);
  const drawer = useRef11(null);
  const { isVisible } = useAnimation_default(open, "open", drawerOverlay);
  useFocusTrap_default(open, onClose, drawer);
  useClickOutside_default(open, onClose, drawer);
  usePreventScroll_default(open, preventScroll);
  return isVisible && /* @__PURE__ */ jsx26(BodyPortal, { children: /* @__PURE__ */ jsx26("div", __spreadProps(__spreadValues({ className: "guwmi-drawer-overlay", ref: drawerOverlay }, rest), { children: /* @__PURE__ */ jsxs9("aside", { className: classes, ref: drawer, "aria-modal": "true", tabIndex: 0, children: [
    /* @__PURE__ */ jsx26(
      "button",
      {
        className: "guwmi-drawer-close-button",
        "aria-label": "Close drawer",
        onClick: () => onClose(),
        children: /* @__PURE__ */ jsx26(Icon_default, { name: "close", size: 20 })
      }
    ),
    children
  ] }) })) });
}

// src/components/Inputs/Password/PasswordInput.tsx
import { useId as useId4, useMemo as useMemo17, useRef as useRef12, useState as useState10 } from "react";
import { jsx as jsx27, jsxs as jsxs10 } from "react/jsx-runtime";
function PasswordInput(props) {
  const _a = props, {
    label,
    hideLabel,
    id,
    name,
    placeholder,
    disabled,
    value,
    readOnly,
    error,
    hasError,
    maxLength,
    onChange,
    onBlur,
    onFocus
  } = _a, rest = __objRest(_a, [
    "label",
    "hideLabel",
    "id",
    "name",
    "placeholder",
    "disabled",
    "value",
    "readOnly",
    "error",
    "hasError",
    "maxLength",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const inputId = id != null ? id : useId4();
  const passwordRef = useRef12(null);
  const classes = useMemo17(() => `guwmi-password-input${hasError ? " error" : ""}${disabled ? " disabled" : ""}`, [hasError, disabled]);
  const [type, setType] = useState10("password");
  const toggleType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  useClickOutside_default(type === "text", toggleType, passwordRef);
  return /* @__PURE__ */ jsxs10("div", __spreadProps(__spreadValues({ className: classes }, rest), { ref: passwordRef, children: [
    /* @__PURE__ */ jsx27("label", { htmlFor: inputId, className: hideLabel ? "guwmi-sr-only" : null, children: label }),
    /* @__PURE__ */ jsxs10("div", { className: "guwmi-password-container", children: [
      /* @__PURE__ */ jsx27(
        "input",
        {
          type,
          id: inputId,
          name,
          placeholder,
          disabled,
          value,
          readOnly,
          maxLength,
          onChange,
          onBlur,
          onFocus
        }
      ),
      /* @__PURE__ */ jsx27("button", { onClick: () => toggleType(), "aria-label": type === "password" ? "Show password" : "Hide password", children: type === "password" ? /* @__PURE__ */ jsx27(Icon_default, { name: "view" }) : /* @__PURE__ */ jsx27(Icon_default, { name: "hide" }) })
    ] }),
    hasError && /* @__PURE__ */ jsx27("span", { children: error })
  ] }));
}

// src/components/Inputs/RadioGroup/RadioGroup.tsx
import { useId as useId5, useMemo as useMemo18 } from "react";
import { jsx as jsx28, jsxs as jsxs11 } from "react/jsx-runtime";
function RadioGroup(props) {
  const _a = props, {
    label,
    id,
    name,
    disabled,
    value,
    error,
    hasError,
    options,
    layout = "column",
    onChange,
    onBlur,
    onFocus
  } = _a, rest = __objRest(_a, [
    "label",
    "id",
    "name",
    "disabled",
    "value",
    "error",
    "hasError",
    "options",
    "layout",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const inputId = id != null ? id : useId5();
  const classes = useMemo18(() => `guwmi-radio-group${hasError ? " error" : ""}${disabled ? " disabled" : ""}`, [hasError, disabled]);
  return /* @__PURE__ */ jsxs11("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsxs11(
      "fieldset",
      {
        id: inputId,
        name,
        disabled,
        children: [
          /* @__PURE__ */ jsx28("legend", { children: label }),
          /* @__PURE__ */ jsx28("div", { className: `guwmi-radio-container ${layout}`, children: options && options.map((option, index) => /* @__PURE__ */ jsxs11("div", { className: option.disabled ? "disabled" : null, children: [
            /* @__PURE__ */ jsx28(
              "input",
              {
                type: "radio",
                name: name != null ? name : label.toLowerCase(),
                id: `${id}-${option.value}`,
                value: option.value,
                disabled: option.disabled,
                onChange,
                onBlur,
                onFocus
              }
            ),
            /* @__PURE__ */ jsx28("label", { htmlFor: `${id}-${option.value}`, children: option.name })
          ] }, `${id}-${index}`)) })
        ]
      }
    ),
    hasError && /* @__PURE__ */ jsx28("span", { children: error })
  ] }));
}

// src/components/Inputs/Select/SelectInput.tsx
import { useId as useId6, useMemo as useMemo19 } from "react";
import { jsx as jsx29, jsxs as jsxs12 } from "react/jsx-runtime";
function SelectInput(props) {
  const _a = props, {
    label,
    id,
    name,
    disabled,
    value,
    error,
    hasError,
    options,
    onChange,
    onBlur,
    onFocus
  } = _a, rest = __objRest(_a, [
    "label",
    "id",
    "name",
    "disabled",
    "value",
    "error",
    "hasError",
    "options",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const inputId = id != null ? id : useId6();
  const classes = useMemo19(() => `guwmi-select-input${hasError ? " error" : ""}${disabled ? " disabled" : ""}`, [hasError, disabled]);
  return /* @__PURE__ */ jsxs12("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsx29("label", { htmlFor: inputId, children: label }),
    /* @__PURE__ */ jsxs12("div", { className: "guwmi-select-container", children: [
      /* @__PURE__ */ jsx29(
        "select",
        {
          id: inputId,
          name,
          disabled,
          value,
          onChange,
          onBlur,
          onFocus,
          children: options && options.map((option, index) => /* @__PURE__ */ jsx29("option", { value: option.value, disabled: option.disabled, children: option.name }, `${id}-${index}`))
        }
      ),
      /* @__PURE__ */ jsx29("span", { className: "guwmi-select-icon", children: /* @__PURE__ */ jsx29(Icon_default, { name: "chevron-down", size: 20 }) })
    ] }),
    hasError && /* @__PURE__ */ jsx29("span", { className: "guwmi-select-error", children: error })
  ] }));
}

// src/components/Inputs/TextArea/TextArea.tsx
import { useId as useId7, useMemo as useMemo20 } from "react";
import { jsx as jsx30, jsxs as jsxs13 } from "react/jsx-runtime";
function TextArea(props) {
  const _a = props, {
    label,
    hideLabel,
    id,
    name,
    placeholder,
    disabled,
    value,
    readOnly,
    error,
    hasError,
    maxLength,
    rows,
    onChange,
    onBlur,
    onFocus
  } = _a, rest = __objRest(_a, [
    "label",
    "hideLabel",
    "id",
    "name",
    "placeholder",
    "disabled",
    "value",
    "readOnly",
    "error",
    "hasError",
    "maxLength",
    "rows",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const inputId = id != null ? id : useId7();
  const classes = useMemo20(() => `guwmi-textarea${hasError ? " error" : ""}${disabled ? " disabled" : ""}`, [hasError, disabled]);
  return /* @__PURE__ */ jsxs13("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsx30("label", { htmlFor: inputId, className: hideLabel ? "guwmi-sr-only" : null, children: label }),
    /* @__PURE__ */ jsx30(
      "textarea",
      {
        id: inputId,
        name,
        placeholder,
        disabled,
        value,
        readOnly,
        maxLength,
        rows,
        onChange,
        onBlur,
        onFocus
      }
    ),
    hasError && /* @__PURE__ */ jsx30("span", { children: error })
  ] }));
}

// src/components/Inputs/Text/TextInput.tsx
import { useId as useId8, useMemo as useMemo21 } from "react";
import { jsx as jsx31, jsxs as jsxs14 } from "react/jsx-runtime";
function TextInput(props) {
  const _a = props, {
    label,
    hideLabel,
    id,
    name,
    placeholder,
    disabled,
    value,
    readOnly,
    error,
    hasError,
    maxLength,
    onChange,
    onBlur,
    onFocus
  } = _a, rest = __objRest(_a, [
    "label",
    "hideLabel",
    "id",
    "name",
    "placeholder",
    "disabled",
    "value",
    "readOnly",
    "error",
    "hasError",
    "maxLength",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const inputId = id != null ? id : useId8();
  const classes = useMemo21(() => `guwmi-text-input${hasError ? " error" : ""}${disabled ? " disabled" : ""}`, [hasError, disabled]);
  return /* @__PURE__ */ jsxs14("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsx31("label", { htmlFor: inputId, className: hideLabel ? "guwmi-sr-only" : null, children: label }),
    /* @__PURE__ */ jsx31(
      "input",
      {
        type: "text",
        id: inputId,
        name,
        placeholder,
        disabled,
        value,
        readOnly,
        maxLength,
        onChange,
        onBlur,
        onFocus
      }
    ),
    hasError && /* @__PURE__ */ jsx31("span", { children: error })
  ] }));
}

// src/components/Loading/Loading.tsx
import { useMemo as useMemo22 } from "react";
import { jsx as jsx32 } from "react/jsx-runtime";
function Loading(props) {
  const { active, size = "md", position = "block", speed = "normal", overlay = false } = props;
  const classes = useMemo22(() => `guwmi-loading-container ${size} ${speed} ${position} ${overlay ? "overlay" : ""}`, [size, speed, position, overlay]);
  usePreventScroll_default(active, position === "full-screen");
  return active && (position !== "full-screen" ? /* @__PURE__ */ jsx32("div", { className: classes, children: /* @__PURE__ */ jsx32("div", { className: "guwmi-spinner" }) }) : /* @__PURE__ */ jsx32(BodyPortal, { children: /* @__PURE__ */ jsx32("div", { className: classes, children: /* @__PURE__ */ jsx32("div", { className: "guwmi-spinner" }) }) }));
}
export {
  Accordion,
  AccordionItem,
  Button,
  ButtonGroup,
  Card,
  CardSection,
  Drawer,
  Grid,
  Icon_default as Icon,
  IconButton,
  Loading,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTrigger,
  Modal,
  Notification,
  PasswordInput,
  RadioGroup,
  SearchInput,
  SelectInput,
  Tab,
  TabPanel,
  TabPanels,
  Table,
  Tabs,
  TabsContainer,
  TextArea,
  TextInput,
  VerticalGrid
};
//# sourceMappingURL=index.js.map