// src/index.ts
import "./index-PC34KAA7.css";

// src/components/Button/Button.tsx
import {
  useCallback,
  useMemo,
  useRef
} from "react";
import { jsx } from "react/jsx-runtime";
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
  const classes = useMemo(() => `guwmi-btn ${size} ${color} ${variant} ${theme}${className ? " " + className : ""}`, []);
  const button = useRef(null);
  const handleClick = useCallback((e) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  }, [href, onClick, button.current]);
  return href && !disabled ? /* @__PURE__ */ jsx("a", { className: classes, href, target, ref: button, children }) : /* @__PURE__ */ jsx("button", { className: classes, onClick: (e) => handleClick(e), ref: button, disabled, children });
}

// src/components/ButtonGroup/ButtonGroup.tsx
import React2, { useMemo as useMemo2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
function ButtonGroup(props) {
  const {
    children,
    size = "md",
    color = "primary",
    variant = "fill",
    theme = "round",
    className
  } = props;
  const classes = useMemo2(() => `guwmi-btn-group ${size} ${color} ${variant} ${theme}${className ? " " + className : ""}`, []);
  const buttonChildren = useMemo2(() => React2.Children.map(children, (child) => {
    if (React2.isValidElement(child)) {
      return React2.cloneElement(child, {
        size,
        color,
        variant,
        theme
      });
    }
    return child;
  }), [children]);
  return /* @__PURE__ */ jsx2("div", { className: classes, children: buttonChildren });
}

// src/components/IconButton/IconButton.tsx
import { useMemo as useMemo3 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
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
  const classes = useMemo3(() => `guwmi-btn icon ${size} ${color} ${variant} ${theme}${className ? " " + className : ""}`, []);
  return /* @__PURE__ */ jsx3("button", { className: classes, onClick, "aria-label": ariaLabel, disabled, children });
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
  const {
    children,
    position = "bottom-right",
    width,
    ariaLabel
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const classes = useMemo4(() => `guwmi-menu-container ${position}`, []);
  return /* @__PURE__ */ jsx4("div", { className: classes, children: /* @__PURE__ */ jsx4(MenuContext_default.Provider, { value: { isOpen, setIsOpen, ariaLabel }, children }) });
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
  const { children } = props;
  const { isOpen, setIsOpen, ariaLabel } = useContext(MenuContext_default);
  const dropDownRef = useRef4(null);
  const { isVisible } = useAnimation_default(isOpen, "open", dropDownRef);
  useTabThrough_default(isOpen, () => setIsOpen(false), dropDownRef);
  return /* @__PURE__ */ jsx5(Fragment, { children: isVisible && /* @__PURE__ */ jsx5(
    "nav",
    {
      className: "guwmi-menu-dropdown",
      "data-testid": "guwmi-menu-dropdown",
      ref: dropDownRef,
      "aria-label": ariaLabel,
      children: /* @__PURE__ */ jsx5("ul", { role: "menubar", children })
    }
  ) });
}

// src/components/Menu/MenuItem.tsx
import { useMemo as useMemo5 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
function MenuItem(props) {
  const { children, onClick, href } = props;
  const classes = useMemo5(() => `guwmi-menu-item`, []);
  return /* @__PURE__ */ jsx6("li", { className: classes, children: href ? /* @__PURE__ */ jsx6("a", { className: "guwmi-menu-btn", href, children }) : /* @__PURE__ */ jsx6("button", { className: "guwmi-menu-btn", onClick, children }) });
}

// src/components/Menu/MenuTrigger.tsx
import React6, { useMemo as useMemo6, useContext as useContext2 } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
function MenuTrigger(props) {
  const { children } = props;
  const { isOpen, setIsOpen } = useContext2(MenuContext_default);
  const childrenWithClick = useMemo6(() => React6.Children.map(children, (child) => {
    if (React6.isValidElement(child)) {
      return React6.cloneElement(child, { onClick: () => setIsOpen(!isOpen) });
    }
    return child;
  }), [children, isOpen]);
  return /* @__PURE__ */ jsx7("div", { className: "guwmi-menu-trigger", children: childrenWithClick });
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
  const { children } = props;
  const [selectedTab, setSelectedTab] = useState3(0);
  const id = useId();
  return /* @__PURE__ */ jsx8(TabsContext_default.Provider, { value: { id, selectedTab, setSelectedTab }, children: /* @__PURE__ */ jsx8("div", { className: "guwmi-tabs-container", children }) });
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
  const { children } = props;
  const { selectedTab } = useContext3(TabsContext_default);
  const tabsContainer = useRef5(null);
  const slider = useRef5(null);
  const activeTab = useRef5(null);
  const childrenWithIndex = useMemo7(() => {
    return React8.Children.map(children, (child, index) => {
      if (React8.isValidElement(child)) {
        return React8.cloneElement(child, { index });
      }
      return child;
    });
  }, [children]);
  useEffect3(() => {
    if (tabsContainer.current.querySelector(".guwmi-tab.active")) {
      activeTab.current = tabsContainer.current.querySelector(".guwmi-tab.active");
    }
  }, [tabsContainer, selectedTab]);
  useEffect3(() => {
    if (activeTab.current) {
      const left = activeTab.current.offsetLeft;
      const width = activeTab.current.offsetWidth;
      slider.current.style.width = `${width}px`;
      slider.current.style.left = `${left}px`;
    }
  }, [activeTab.current]);
  return /* @__PURE__ */ jsxs("nav", { className: "guwmi-tabs", role: "tablist", ref: tabsContainer, children: [
    /* @__PURE__ */ jsx9("span", { className: "guwmi-tabs-slider", ref: slider }),
    childrenWithIndex
  ] });
}

// src/components/Tabs/Tab.tsx
import { useContext as useContext4 } from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
function Tab(props) {
  const { children, index } = props;
  const { id, selectedTab, setSelectedTab } = useContext4(TabsContext_default);
  return /* @__PURE__ */ jsx10(
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}

// src/components/Tabs/TabPanels.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
function TabPanels(props) {
  const { children } = props;
  const { selectedTab } = useContext5(TabsContext_default);
  const windowWidth = useWindowWidth();
  const panels = useRef6(null);
  const childrenWithIndex = useMemo8(() => {
    return React10.Children.map(children, (child, index) => {
      if (React10.isValidElement(child)) {
        return React10.cloneElement(child, { index });
      }
      return child;
    });
  }, [children]);
  useEffect5(() => {
    const active = panels.current.querySelector(".active");
    const height = active.offsetHeight;
    panels.current.style.height = `${height}px`;
  }, [selectedTab, windowWidth]);
  return /* @__PURE__ */ jsx11("div", { className: "guwmi-tab-panels", ref: panels, children: childrenWithIndex });
}

// src/components/Tabs/TabPanel.tsx
import { useContext as useContext6 } from "react";
import { jsx as jsx12 } from "react/jsx-runtime";
function TabPanel(props) {
  const { children, index } = props;
  const { id, selectedTab } = useContext6(TabsContext_default);
  return /* @__PURE__ */ jsx12(
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
import { useId as useId3, useMemo as useMemo11 } from "react";

// src/components/Table/TableRow.tsx
import { useMemo as useMemo9 } from "react";
import { Fragment as Fragment2, jsx as jsx13 } from "react/jsx-runtime";
function TableRow(props) {
  const { headers, data, tableId } = props;
  const cellData = useMemo9(() => {
    const arr = [];
    headers.forEach((h) => {
      if (data[h.key]) {
        arr.push({ id: data.id, col: h.key, value: data[h.key] });
      }
    });
    return arr;
  }, [headers, data]);
  return /* @__PURE__ */ jsx13(Fragment2, { children: cellData && /* @__PURE__ */ jsx13("tr", { children: cellData.map((cell) => /* @__PURE__ */ jsx13("td", { children: cell.value }, `table-${tableId}-cell-${cell.id}-${cell.col}`)) }) });
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

// src/components/Icon/Icon.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var Icon = forwardRef((props, ref) => {
  const {
    name,
    size = 24,
    stroke = 2,
    color = "currentColor",
    className
  } = props;
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
    }
  }, [name]);
  return /* @__PURE__ */ jsx15(
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
import { jsx as jsx16, jsxs as jsxs3 } from "react/jsx-runtime";
function SearchInput(props) {
  const { placeholder } = props;
  const id = useId2();
  return /* @__PURE__ */ jsxs3("div", { className: "guwmi-search-input", children: [
    /* @__PURE__ */ jsx16("span", { children: /* @__PURE__ */ jsx16(Icon_default, { name: "search", size: 18 }) }),
    /* @__PURE__ */ jsx16("label", { htmlFor: id, className: "guwmi-sr-only", children: "Search" }),
    /* @__PURE__ */ jsx16("input", { id, type: "search", placeholder: placeholder ? placeholder : "Search..." })
  ] });
}

// src/components/Table/Table.tsx
import { Fragment as Fragment4, jsx as jsx17, jsxs as jsxs4 } from "react/jsx-runtime";
function Table(props) {
  const { headers, rows, isCondensed, isSearchable } = props;
  const id = useId3();
  const classes = useMemo11(() => `guwmi-table-container${isCondensed ? " condensed" : ""}`, []);
  return /* @__PURE__ */ jsxs4("div", { className: classes, children: [
    headers.length > 0 && isSearchable && /* @__PURE__ */ jsx17("div", { className: "guwmi-table-search", children: /* @__PURE__ */ jsx17(SearchInput, {}) }),
    /* @__PURE__ */ jsx17("table", { cellPadding: 0, cellSpacing: 0, children: headers.length > 0 ? /* @__PURE__ */ jsxs4(Fragment4, { children: [
      /* @__PURE__ */ jsx17("thead", { children: /* @__PURE__ */ jsx17("tr", { children: headers.map((header, i) => /* @__PURE__ */ jsx17("th", { children: header.title }, `table-${id}-header-${i}`)) }) }),
      /* @__PURE__ */ jsx17("tbody", { children: rows.length > 0 ? rows.map((row) => /* @__PURE__ */ jsx17(TableRow, { headers, data: row, tableId: id }, `table-${id}-row-${row.id}`)) : /* @__PURE__ */ jsx17("tr", { children: /* @__PURE__ */ jsx17("td", { colSpan: headers.length, children: "There is no data to display in the table" }) }) })
    ] }) : /* @__PURE__ */ jsx17("tbody", { children: /* @__PURE__ */ jsx17("tr", { children: /* @__PURE__ */ jsx17("td", { children: "No column headers provided for the table" }) }) }) })
  ] });
}

// src/components/Accordion/Accordion.tsx
import { useState as useState5, useEffect as useEffect6 } from "react";

// src/components/Accordion/AccordionContext.ts
import { createContext as createContext3 } from "react";
var AccordionContext = createContext3(null);
var AccordionContext_default = AccordionContext;

// src/components/Accordion/Accordion.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
function Accordion(props) {
  const { children, defaultOpen } = props;
  const [openAccordions, setOpenAccordions] = useState5([]);
  useEffect6(() => {
    if (defaultOpen) {
      setOpenAccordions([...openAccordions, defaultOpen]);
    }
  }, [defaultOpen]);
  return /* @__PURE__ */ jsx18(AccordionContext_default.Provider, { value: { openAccordions, setOpenAccordions }, children: /* @__PURE__ */ jsx18("div", { className: "guwmi-accordion-container", children }) });
}

// src/components/Accordion/AccrodionItem.tsx
import {
  useCallback as useCallback3,
  useContext as useContext7,
  useRef as useRef7,
  useState as useState6,
  useEffect as useEffect7
} from "react";
import { jsx as jsx19, jsxs as jsxs5 } from "react/jsx-runtime";
function AccordionItem(props) {
  const { children, title, id } = props;
  const { openAccordions, setOpenAccordions } = useContext7(AccordionContext_default);
  const windowWidth = useWindowWidth();
  const panelRef = useRef7(null);
  const contentRef = useRef7(null);
  const [isOpen, setIsOpen] = useState6(false);
  const [isAnimating, setIsAnimating] = useState6(false);
  useEffect7(() => {
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
  useEffect7(() => {
    var _a, _b;
    (_a = panelRef.current) == null ? void 0 : _a.addEventListener("transitioncancel", () => setIsAnimating(false));
    (_b = panelRef.current) == null ? void 0 : _b.addEventListener("transitionend", () => setIsAnimating(false));
  }, [panelRef.current]);
  useEffect7(() => {
    if (contentRef.current && isOpen) {
      const height = contentRef.current.offsetHeight;
      panelRef.current.style.height = `${height}px`;
    } else {
      panelRef.current.style.height = `0px`;
    }
  }, [contentRef.current, isOpen, windowWidth]);
  return /* @__PURE__ */ jsxs5("div", { className: "guwmi-accordion-item", children: [
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
        "data-testid": id,
        "aria-labelledby": `guwmi-accordion-controller-${id}`,
        ref: panelRef,
        children: /* @__PURE__ */ jsx19("div", { className: "guwmi-accordion-panel-content", ref: contentRef, children })
      }
    )
  ] });
}

// src/components/Cards/Cards.tsx
import { useMemo as useMemo12 } from "react";
import { jsx as jsx20 } from "react/jsx-runtime";
function Cards(props) {
  const { children, columns = 3 } = props;
  const classes = useMemo12(() => {
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
  return /* @__PURE__ */ jsx20("div", { className: classes, "data-testid": "guwmi-card-grid", children });
}

// src/components/Cards/Card.tsx
import { jsx as jsx21, jsxs as jsxs6 } from "react/jsx-runtime";
function Card(props) {
  const {
    title,
    subTitle,
    image,
    children
  } = props;
  return /* @__PURE__ */ jsxs6("div", { className: "guwmi-card", "data-testid": "guwmi-card", children: [
    image && /* @__PURE__ */ jsx21("img", { src: image, alt: title ? title : "Card image", className: "guwmi-card-image", "data-testid": "guwmi-card-image" }),
    (title || subTitle) && /* @__PURE__ */ jsxs6("div", { className: "guwmi-card-section guwmi-card-title", children: [
      title && /* @__PURE__ */ jsx21("h2", { "data-testid": "guwmi-card-title", children: title }),
      subTitle && /* @__PURE__ */ jsx21("h3", { "data-testid": "guwmi-card-sub-title", children: subTitle })
    ] }),
    children
  ] });
}

// src/components/Cards/CardSection.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
function CardSection(props) {
  const { children } = props;
  return /* @__PURE__ */ jsx22("div", { className: "guwmi-card-section", children });
}

// src/components/Notification/Notification.tsx
import { useMemo as useMemo13, useState as useState7 } from "react";
import { jsx as jsx23, jsxs as jsxs7 } from "react/jsx-runtime";
function Notification(props) {
  const { kind, title, content } = props;
  const [isVisible, setIsVisible] = useState7(true);
  const titleText = useMemo13(() => title ? title : kind.charAt(0).toUpperCase() + kind.slice(1), [title, kind]);
  const classes = useMemo13(() => `guwmi-notification ${kind}`, [kind]);
  return isVisible ? /* @__PURE__ */ jsxs7("dialog", { className: classes, children: [
    kind === "error" ? /* @__PURE__ */ jsx23(Icon_default, { name: "alert-circle", size: 20, stroke: "3" }) : kind === "warning" ? /* @__PURE__ */ jsx23(Icon_default, { name: "alert-triangle", size: 20, stroke: "3" }) : /* @__PURE__ */ jsx23(Icon_default, { name: "check", size: 20, stroke: "3" }),
    /* @__PURE__ */ jsx23("h2", { children: titleText }),
    /* @__PURE__ */ jsx23("p", { children: content }),
    /* @__PURE__ */ jsx23(
      "button",
      {
        onClick: () => setIsVisible(false),
        "aria-label": "Close notification",
        tabIndex: 0,
        children: /* @__PURE__ */ jsx23(Icon_default, { name: "close", size: 18 })
      }
    )
  ] }) : null;
}

// src/components/Modal/Modal.tsx
import { useMemo as useMemo14, useRef as useRef10 } from "react";

// src/hooks/useFocusTrap.ts
import { useCallback as useCallback4, useEffect as useEffect8, useRef as useRef8 } from "react";
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
  useEffect8(() => {
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
import { useCallback as useCallback5, useEffect as useEffect9, useRef as useRef9 } from "react";
var useCloseOutClick = (open, onClose, elementRef) => {
  const triggerRef = useRef9(null);
  const closeOutClick = useCallback5((e) => {
    var _a;
    if (e.target !== triggerRef.current && !((_a = elementRef.current) == null ? void 0 : _a.contains(e.target))) {
      onClose();
    }
  }, [elementRef.current]);
  useEffect9(() => {
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
import { useEffect as useEffect10 } from "react";
var usePreventScroll = (open, enabled) => {
  useEffect10(() => {
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
import { useEffect as useEffect11, useState as useState8 } from "react";
import ReactDOM from "react-dom";
function BodyPortal(props) {
  const { children } = props;
  const [hasDocument, setHasDocument] = useState8(false);
  useEffect11(() => {
    setHasDocument(typeof document !== "undefined");
  }, []);
  return hasDocument ? ReactDOM.createPortal(children, document.body) : null;
}

// src/components/Modal/Modal.tsx
import { jsx as jsx24, jsxs as jsxs8 } from "react/jsx-runtime";
function Modal(props) {
  const { open, onClose, preventScroll = false, size = "sm", children } = props;
  const classes = useMemo14(() => `guwmi-modal ${size}`, [size]);
  const modalOverlay = useRef10(null);
  const modal = useRef10(null);
  const { isVisible } = useAnimation_default(open, "open", modalOverlay);
  useFocusTrap_default(open, onClose, modal);
  useCloseOutClick_default(open, onClose, modal);
  usePreventScroll_default(open, preventScroll);
  return isVisible && /* @__PURE__ */ jsx24(BodyPortal, { children: /* @__PURE__ */ jsx24("div", { className: "guwmi-modal-overlay", ref: modalOverlay, children: /* @__PURE__ */ jsxs8("dialog", { className: classes, ref: modal, children: [
    /* @__PURE__ */ jsx24(
      "button",
      {
        className: "guwmi-modal-close-button",
        "aria-label": "Close modal",
        onClick: () => onClose(),
        children: /* @__PURE__ */ jsx24(Icon_default, { name: "close", size: 20 })
      }
    ),
    children
  ] }) }) });
}

// src/components/Drawer/Drawer.tsx
import { useMemo as useMemo15, useRef as useRef11 } from "react";
import { jsx as jsx25, jsxs as jsxs9 } from "react/jsx-runtime";
function Drawer(props) {
  const { open, onClose, preventScroll = false, position = "left", children } = props;
  const classes = useMemo15(() => `guwmi-drawer ${position}`, [position]);
  const drawerOverlay = useRef11(null);
  const drawer = useRef11(null);
  const { isVisible } = useAnimation_default(open, "open", drawerOverlay);
  useFocusTrap_default(open, onClose, drawer);
  useCloseOutClick_default(open, onClose, drawer);
  usePreventScroll_default(open, preventScroll);
  return isVisible && /* @__PURE__ */ jsx25(BodyPortal, { children: /* @__PURE__ */ jsx25("div", { className: "guwmi-drawer-overlay", ref: drawerOverlay, "data-testid": "guwmi-drawer", children: /* @__PURE__ */ jsxs9("aside", { className: classes, ref: drawer, "aria-modal": "true", tabIndex: 0, children: [
    /* @__PURE__ */ jsx25(
      "button",
      {
        className: "guwmi-drawer-close-button",
        "aria-label": "Close drawer",
        onClick: () => onClose(),
        children: /* @__PURE__ */ jsx25(Icon_default, { name: "close", size: 20 })
      }
    ),
    children
  ] }) }) });
}
export {
  Accordion,
  AccordionItem,
  Button,
  ButtonGroup,
  Card,
  CardSection,
  Cards,
  Drawer,
  Icon_default as Icon,
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
};
//# sourceMappingURL=index.js.map