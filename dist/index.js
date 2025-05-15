// src/index.ts
import "./index-L3NGY2JV.css";

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
    kind = "fill",
    theme = "round",
    className,
    onClick,
    href,
    target = null
  } = props;
  const classes = useMemo(() => `guwmi-btn ${size} ${color} ${kind} ${theme}${className ? " " + className : ""}`, []);
  const button = useRef(null);
  const handleClick = useCallback((e) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  }, [href, onClick, button.current]);
  return href ? /* @__PURE__ */ jsx("a", { className: classes, href, onClick: () => handleClick, target, ref: button, children }) : /* @__PURE__ */ jsx("button", { className: classes, onClick: (e) => handleClick(e), ref: button, children });
}

// src/components/IconButton/IconButton.tsx
import { useMemo as useMemo2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
function IconButton(props) {
  const {
    children,
    size = "md",
    color = "primary",
    kind = "fill",
    theme = "round",
    className,
    onClick,
    ariaLabel
  } = props;
  const classes = useMemo2(() => `guwmi-btn icon ${size} ${color} ${kind} ${theme}${className ? " " + className : ""}`, []);
  return /* @__PURE__ */ jsx2("button", { className: classes, onClick, "aria-label": ariaLabel, children });
}

// src/components/Menu/Menu.tsx
import { useState, useMemo as useMemo3 } from "react";

// src/components/Menu/MenuContext.ts
import { createContext } from "react";
var MenuContext = createContext(null);
var MenuContext_default = MenuContext;

// src/components/Menu/Menu.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Menu(props) {
  const {
    children,
    position = "bottom-right",
    width,
    ariaLabel
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const classes = useMemo3(() => `guwmi-menu-container ${position}`, []);
  return /* @__PURE__ */ jsx3("div", { className: classes, children: /* @__PURE__ */ jsx3(MenuContext_default.Provider, { value: { isOpen, setIsOpen, ariaLabel }, children }) });
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
import { Fragment, jsx as jsx4 } from "react/jsx-runtime";
function MenuDropdown(props) {
  const { children } = props;
  const { isOpen, setIsOpen, ariaLabel } = useContext(MenuContext_default);
  const dropDownRef = useRef4(null);
  const { isVisible } = useAnimation_default(isOpen, "open", dropDownRef);
  useTabThrough_default(isOpen, () => setIsOpen(false), dropDownRef);
  return /* @__PURE__ */ jsx4(Fragment, { children: isVisible && /* @__PURE__ */ jsx4("nav", { className: "guwmi-menu-dropdown", ref: dropDownRef, "aria-label": ariaLabel, children: /* @__PURE__ */ jsx4("ul", { role: "menubar", children }) }) });
}

// src/components/Menu/MenuItem.tsx
import { useMemo as useMemo4 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
function MenuItem(props) {
  const { children, onClick, href } = props;
  const classes = useMemo4(() => `guwmi-menu-item`, []);
  return /* @__PURE__ */ jsx5("li", { className: classes, children: href ? /* @__PURE__ */ jsx5("a", { className: "guwmi-menu-btn", href, children }) : /* @__PURE__ */ jsx5("button", { className: "guwmi-menu-btn", onClick, children }) });
}

// src/components/Menu/MenuTrigger.tsx
import React5, { useMemo as useMemo5, useContext as useContext2 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
function MenuTrigger(props) {
  const { children } = props;
  const { isOpen, setIsOpen } = useContext2(MenuContext_default);
  const childrenWithClick = useMemo5(() => React5.Children.map(children, (child) => {
    if (React5.isValidElement(child)) {
      return React5.cloneElement(child, { onClick: () => setIsOpen(!isOpen) });
    }
    return child;
  }), [children, isOpen]);
  return /* @__PURE__ */ jsx6("div", { className: "guwmi-menu-trigger", children: childrenWithClick });
}

// src/components/Tabs/TabsContainer.tsx
import { useState as useState3, useId } from "react";

// src/components/Tabs/TabsContext.ts
import { createContext as createContext2 } from "react";
var TabsContext = createContext2(null);
var TabsContext_default = TabsContext;

// src/components/Tabs/TabsContainer.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
function TabsContainer(props) {
  const { children } = props;
  const [selectedTab, setSelectedTab] = useState3(0);
  const id = useId();
  return /* @__PURE__ */ jsx7(TabsContext_default.Provider, { value: { id, selectedTab, setSelectedTab }, children: /* @__PURE__ */ jsx7("div", { className: "guwmi-tabs-container", children }) });
}

// src/components/Tabs/Tabs.tsx
import React7, {
  useEffect as useEffect3,
  useMemo as useMemo6,
  useRef as useRef5,
  useContext as useContext3
} from "react";
import { jsx as jsx8, jsxs } from "react/jsx-runtime";
function Tabs(props) {
  const { children } = props;
  const { selectedTab } = useContext3(TabsContext_default);
  const tabsContainer = useRef5(null);
  const slider = useRef5(null);
  const activeTab = useRef5(null);
  const childrenWithIndex = useMemo6(() => {
    return React7.Children.map(children, (child, index) => {
      if (React7.isValidElement(child)) {
        return React7.cloneElement(child, { index });
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
    /* @__PURE__ */ jsx8("span", { className: "guwmi-tabs-slider", ref: slider }),
    childrenWithIndex
  ] });
}

// src/components/Tabs/Tab.tsx
import { useContext as useContext4 } from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
function Tab(props) {
  const { children, index } = props;
  const { id, selectedTab, setSelectedTab } = useContext4(TabsContext_default);
  return /* @__PURE__ */ jsx9(
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
import React9, {
  useContext as useContext5,
  useMemo as useMemo7,
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
import { jsx as jsx10 } from "react/jsx-runtime";
function TabPanels(props) {
  const { children } = props;
  const { selectedTab } = useContext5(TabsContext_default);
  const windowWidth = useWindowWidth();
  const panels = useRef6(null);
  const childrenWithIndex = useMemo7(() => {
    return React9.Children.map(children, (child, index) => {
      if (React9.isValidElement(child)) {
        return React9.cloneElement(child, { index });
      }
      return child;
    });
  }, [children]);
  useEffect5(() => {
    const active = panels.current.querySelector(".active");
    const height = active.offsetHeight;
    panels.current.style.height = `${height}px`;
  }, [selectedTab, windowWidth]);
  return /* @__PURE__ */ jsx10("div", { className: "guwmi-tab-panels", ref: panels, children: childrenWithIndex });
}

// src/components/Tabs/TabPanel.tsx
import { useContext as useContext6 } from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
function TabPanel(props) {
  const { children, index } = props;
  const { id, selectedTab } = useContext6(TabsContext_default);
  return /* @__PURE__ */ jsx11(
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
import { useId as useId3, useMemo as useMemo9 } from "react";

// src/components/Table/TableRow.tsx
import { useMemo as useMemo8 } from "react";
import { Fragment as Fragment2, jsx as jsx12 } from "react/jsx-runtime";
function TableRow(props) {
  const { headers, data, tableId } = props;
  const cellData = useMemo8(() => {
    const arr = [];
    headers.forEach((h) => {
      if (data[h.key]) {
        arr.push({ id: data.id, col: h.key, value: data[h.key] });
      }
    });
    return arr;
  }, [headers, data]);
  return /* @__PURE__ */ jsx12(Fragment2, { children: cellData && /* @__PURE__ */ jsx12("tr", { children: cellData.map((cell) => /* @__PURE__ */ jsx12("td", { children: cell.value }, `table-${tableId}-cell-${cell.id}-${cell.col}`)) }) });
}

// src/components/Inputs/Search/SearchInput.tsx
import { useId as useId2 } from "react";
import { IconSearch } from "@tabler/icons-react";
import { jsx as jsx13, jsxs as jsxs2 } from "react/jsx-runtime";
function SearchInput(props) {
  const { placeholder } = props;
  const id = useId2();
  return /* @__PURE__ */ jsxs2("div", { className: "guwmi-search-input", children: [
    /* @__PURE__ */ jsx13("span", { children: /* @__PURE__ */ jsx13(IconSearch, { size: 18 }) }),
    /* @__PURE__ */ jsx13("label", { htmlFor: id, className: "guwmi-sr-only", children: "Search" }),
    /* @__PURE__ */ jsx13("input", { id, type: "search", placeholder: placeholder ? placeholder : "Search..." })
  ] });
}

// src/components/Table/Table.tsx
import { Fragment as Fragment3, jsx as jsx14, jsxs as jsxs3 } from "react/jsx-runtime";
function Table(props) {
  const { headers, rows, isCondensed, isSearchable } = props;
  const id = useId3();
  const classes = useMemo9(() => `guwmi-table-container${isCondensed ? " condensed" : ""}`, []);
  return /* @__PURE__ */ jsxs3("div", { className: classes, children: [
    headers.length > 0 && isSearchable && /* @__PURE__ */ jsx14("div", { className: "guwmi-table-search", children: /* @__PURE__ */ jsx14(SearchInput, {}) }),
    /* @__PURE__ */ jsx14("table", { cellPadding: 0, cellSpacing: 0, children: headers.length > 0 ? /* @__PURE__ */ jsxs3(Fragment3, { children: [
      /* @__PURE__ */ jsx14("thead", { children: /* @__PURE__ */ jsx14("tr", { children: headers.map((header, i) => /* @__PURE__ */ jsx14("th", { children: header.title }, `table-${id}-header-${i}`)) }) }),
      /* @__PURE__ */ jsx14("tbody", { children: rows.length > 0 ? rows.map((row) => /* @__PURE__ */ jsx14(TableRow, { headers, data: row, tableId: id }, `table-${id}-row-${row.id}`)) : /* @__PURE__ */ jsx14("tr", { children: /* @__PURE__ */ jsx14("td", { colSpan: headers.length, children: "There is no data to display in the table" }) }) })
    ] }) : /* @__PURE__ */ jsx14("tbody", { children: /* @__PURE__ */ jsx14("tr", { children: /* @__PURE__ */ jsx14("td", { children: "No column headers provided for the table" }) }) }) })
  ] });
}

// src/components/Accordion/Accordion.tsx
import { useState as useState5, useEffect as useEffect6 } from "react";

// src/components/Accordion/AccordionContext.ts
import { createContext as createContext3 } from "react";
var AccordionContext = createContext3(null);
var AccordionContext_default = AccordionContext;

// src/components/Accordion/Accordion.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
function Accordion(props) {
  const { children, defaultOpen } = props;
  const [openAccordions, setOpenAccordions] = useState5([]);
  useEffect6(() => {
    if (defaultOpen) {
      setOpenAccordions([...openAccordions, defaultOpen]);
    }
  }, [defaultOpen]);
  return /* @__PURE__ */ jsx15(AccordionContext_default.Provider, { value: { openAccordions, setOpenAccordions }, children: /* @__PURE__ */ jsx15("div", { className: "guwmi-accordion-container", children }) });
}

// src/components/Accordion/AccrodionItem.tsx
import {
  useCallback as useCallback3,
  useContext as useContext7,
  useRef as useRef7,
  useState as useState6,
  useEffect as useEffect7
} from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { jsx as jsx16, jsxs as jsxs4 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs4("div", { className: "guwmi-accordion-item", children: [
    /* @__PURE__ */ jsxs4(
      "button",
      {
        onClick: () => isOpen ? close() : open(),
        id: `guwmi-accordion-controller-${id}`,
        "aria-controls": `guwmi-accordion-panel-${id}`,
        "aria-expanded": isOpen,
        className: isOpen ? "active" : null,
        children: [
          title,
          /* @__PURE__ */ jsx16(IconChevronRight, { size: 20 })
        ]
      }
    ),
    /* @__PURE__ */ jsx16(
      "section",
      {
        hidden: !isOpen && !isAnimating,
        id: `guwmi-accordion-panel-${id}`,
        "aria-labelledby": `guwmi-accordion-controller-${id}`,
        ref: panelRef,
        children: /* @__PURE__ */ jsx16("div", { className: "guwmi-accordion-panel-content", ref: contentRef, children })
      }
    )
  ] });
}

// src/components/Cards/Cards.tsx
import { useMemo as useMemo10 } from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
function Cards(props) {
  const { children, columns = 3 } = props;
  const classes = useMemo10(() => {
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
  return /* @__PURE__ */ jsx17("div", { className: classes, children });
}

// src/components/Cards/Card.tsx
import { jsx as jsx18, jsxs as jsxs5 } from "react/jsx-runtime";
function Card(props) {
  const {
    title,
    subTitle,
    image,
    children
  } = props;
  return /* @__PURE__ */ jsxs5("div", { className: "guwmi-card", children: [
    image && /* @__PURE__ */ jsx18("img", { src: image, alt: title ? title : "Card image", className: "guwmi-card-image" }),
    (title || subTitle) && /* @__PURE__ */ jsxs5("div", { className: "guwmi-card-section guwmi-card-title", children: [
      title && /* @__PURE__ */ jsx18("h2", { children: title }),
      subTitle && /* @__PURE__ */ jsx18("h3", { children: subTitle })
    ] }),
    children
  ] });
}

// src/components/Cards/CardSection.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
function CardSection(props) {
  const { children } = props;
  return /* @__PURE__ */ jsx19("div", { className: "guwmi-card-section", children });
}

// src/components/Notification/Notification.tsx
import { useMemo as useMemo11, useState as useState7 } from "react";
import {
  IconX,
  IconAlertCircle,
  IconAlertTriangle,
  IconCheck
} from "@tabler/icons-react";
import { jsx as jsx20, jsxs as jsxs6 } from "react/jsx-runtime";
function Notification(props) {
  const { kind, title, content } = props;
  const [isVisible, setIsVisible] = useState7(true);
  const titleText = useMemo11(() => title ? title : kind.charAt(0).toUpperCase() + kind.slice(1), [title, kind]);
  const classes = useMemo11(() => `guwmi-notification ${kind}`, [kind]);
  return isVisible ? /* @__PURE__ */ jsxs6("dialog", { className: classes, children: [
    kind === "error" ? /* @__PURE__ */ jsx20(IconAlertCircle, { size: 20, stroke: 3 }) : kind === "warning" ? /* @__PURE__ */ jsx20(IconAlertTriangle, { size: 20, stroke: 3 }) : /* @__PURE__ */ jsx20(IconCheck, { size: 20, stroke: 3 }),
    /* @__PURE__ */ jsx20("h2", { children: titleText }),
    /* @__PURE__ */ jsx20("p", { children: content }),
    /* @__PURE__ */ jsx20(
      "button",
      {
        onClick: () => setIsVisible(false),
        "aria-label": "Close notification",
        tabIndex: 0,
        children: /* @__PURE__ */ jsx20(IconX, { size: 18 })
      }
    )
  ] }) : null;
}

// src/components/Modal/Modal.tsx
import { useMemo as useMemo12, useRef as useRef10 } from "react";

// src/hooks/useTrapTabs.ts
import { useCallback as useCallback4, useEffect as useEffect8, useRef as useRef8 } from "react";
var useTrapTabs = (open, onClose, elementRef) => {
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
var useTrapTabs_default = useTrapTabs;

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
import { IconX as IconX2 } from "@tabler/icons-react";
import { jsx as jsx21, jsxs as jsxs7 } from "react/jsx-runtime";
function Modal(props) {
  const { open, onClose, preventScroll = false, size = "sm", children } = props;
  const classes = useMemo12(() => `guwmi-modal ${size}`, [size]);
  const modalOverlay = useRef10(null);
  const modal = useRef10(null);
  const { isVisible } = useAnimation_default(open, "open", modalOverlay);
  useTrapTabs_default(open, onClose, modal);
  useCloseOutClick_default(open, onClose, modal);
  usePreventScroll_default(open, preventScroll);
  return isVisible && /* @__PURE__ */ jsx21(BodyPortal, { children: /* @__PURE__ */ jsx21("div", { className: "guwmi-modal-overlay", ref: modalOverlay, children: /* @__PURE__ */ jsxs7("dialog", { className: classes, ref: modal, children: [
    /* @__PURE__ */ jsx21(
      "button",
      {
        className: "guwmi-modal-close-button",
        "aria-label": "Close modal",
        onClick: () => onClose(),
        children: /* @__PURE__ */ jsx21(IconX2, { size: 20 })
      }
    ),
    children
  ] }) }) });
}

// src/components/Drawer/Drawer.tsx
import { useMemo as useMemo13, useRef as useRef11 } from "react";
import { IconX as IconX3 } from "@tabler/icons-react";
import { jsx as jsx22, jsxs as jsxs8 } from "react/jsx-runtime";
function Drawer(props) {
  const { open, onClose, preventScroll = false, position = "left", children } = props;
  const classes = useMemo13(() => `guwmi-drawer ${position}`, [position]);
  const drawerOverlay = useRef11(null);
  const drawer = useRef11(null);
  const { isVisible } = useAnimation_default(open, "open", drawerOverlay);
  useTrapTabs_default(open, onClose, drawer);
  useCloseOutClick_default(open, onClose, drawer);
  usePreventScroll_default(open, preventScroll);
  return isVisible && /* @__PURE__ */ jsx22(BodyPortal, { children: /* @__PURE__ */ jsx22("div", { className: "guwmi-drawer-overlay", ref: drawerOverlay, children: /* @__PURE__ */ jsxs8("aside", { className: classes, ref: drawer, "aria-modal": "true", tabIndex: 0, children: [
    /* @__PURE__ */ jsx22(
      "button",
      {
        className: "guwmi-drawer-close-button",
        "aria-label": "Close drawer",
        onClick: () => onClose(),
        children: /* @__PURE__ */ jsx22(IconX3, { size: 20 })
      }
    ),
    children
  ] }) }) });
}
export {
  Accordion,
  AccordionItem,
  Button,
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
};
//# sourceMappingURL=index.js.map