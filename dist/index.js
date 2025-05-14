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
import {
  useContext,
  useEffect,
  useMemo as useMemo4,
  useRef as useRef2,
  useState as useState2
} from "react";
import { Fragment, jsx as jsx4 } from "react/jsx-runtime";
function MenuDropdown(props) {
  const { children } = props;
  const { isOpen, ariaLabel } = useContext(MenuContext_default);
  const [isAnimating, setIsAnimating] = useState2(false);
  const classes = useMemo4(() => `guwmi-menu-dropdown${isOpen ? " open" : ""}`, [isOpen]);
  const dropDownRef = useRef2(null);
  useEffect(() => {
    var _a, _b;
    (_a = dropDownRef.current) == null ? void 0 : _a.addEventListener("transitioncancel", () => setIsAnimating(false));
    (_b = dropDownRef.current) == null ? void 0 : _b.addEventListener("transitionend", () => setIsAnimating(false));
  }, [dropDownRef.current]);
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);
  return /* @__PURE__ */ jsx4(Fragment, { children: (isOpen || isAnimating) && /* @__PURE__ */ jsx4("nav", { className: classes, ref: dropDownRef, "aria-label": ariaLabel, children: /* @__PURE__ */ jsx4("ul", { role: "menubar", children }) }) });
}

// src/components/Menu/MenuItem.tsx
import { useMemo as useMemo5 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
function MenuItem(props) {
  const { children, onClick, href } = props;
  const classes = useMemo5(() => `guwmi-menu-item`, []);
  return /* @__PURE__ */ jsx5("li", { className: classes, children: href ? /* @__PURE__ */ jsx5("a", { className: "guwmi-menu-btn", href, children }) : /* @__PURE__ */ jsx5("button", { className: "guwmi-menu-btn", onClick, children }) });
}

// src/components/Menu/MenuTrigger.tsx
import React6, { useMemo as useMemo6, useContext as useContext2 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
function MenuTrigger(props) {
  const { children } = props;
  const { isOpen, setIsOpen } = useContext2(MenuContext_default);
  const childrenWithClick = useMemo6(() => React6.Children.map(children, (child) => {
    if (React6.isValidElement(child)) {
      return React6.cloneElement(child, { onClick: () => setIsOpen(!isOpen) });
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
import React8, {
  useEffect as useEffect2,
  useMemo as useMemo7,
  useRef as useRef3,
  useContext as useContext3
} from "react";
import { jsx as jsx8, jsxs } from "react/jsx-runtime";
function Tabs(props) {
  const { children } = props;
  const { selectedTab } = useContext3(TabsContext_default);
  const tabsContainer = useRef3(null);
  const slider = useRef3(null);
  const activeTab = useRef3(null);
  const childrenWithIndex = useMemo7(() => {
    return React8.Children.map(children, (child, index) => {
      if (React8.isValidElement(child)) {
        return React8.cloneElement(child, { index });
      }
      return child;
    });
  }, [children]);
  useEffect2(() => {
    if (tabsContainer.current.querySelector(".guwmi-tab.active")) {
      activeTab.current = tabsContainer.current.querySelector(".guwmi-tab.active");
    }
  }, [tabsContainer, selectedTab]);
  useEffect2(() => {
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
import React10, {
  useContext as useContext5,
  useMemo as useMemo8,
  useRef as useRef4,
  useEffect as useEffect4
} from "react";

// src/hooks/useWindowWidth.ts
import { useState as useState4, useEffect as useEffect3 } from "react";
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState4();
  const handleResize = () => setWindowWidth(window.innerWidth);
  useEffect3(() => {
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
  const panels = useRef4(null);
  const childrenWithIndex = useMemo8(() => {
    return React10.Children.map(children, (child, index) => {
      if (React10.isValidElement(child)) {
        return React10.cloneElement(child, { index });
      }
      return child;
    });
  }, [children]);
  useEffect4(() => {
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
import { useId as useId3, useMemo as useMemo10 } from "react";

// src/components/Table/TableRow.tsx
import { useMemo as useMemo9 } from "react";
import { Fragment as Fragment2, jsx as jsx12 } from "react/jsx-runtime";
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
  const classes = useMemo10(() => `guwmi-table-container${isCondensed ? " condensed" : ""}`, []);
  return /* @__PURE__ */ jsxs3("div", { className: classes, children: [
    headers.length > 0 && isSearchable && /* @__PURE__ */ jsx14("div", { className: "guwmi-table-search", children: /* @__PURE__ */ jsx14(SearchInput, {}) }),
    /* @__PURE__ */ jsx14("table", { cellPadding: 0, cellSpacing: 0, children: headers.length > 0 ? /* @__PURE__ */ jsxs3(Fragment3, { children: [
      /* @__PURE__ */ jsx14("thead", { children: /* @__PURE__ */ jsx14("tr", { children: headers.map((header, i) => /* @__PURE__ */ jsx14("th", { children: header.title }, `table-${id}-header-${i}`)) }) }),
      /* @__PURE__ */ jsx14("tbody", { children: rows.length > 0 ? rows.map((row) => /* @__PURE__ */ jsx14(TableRow, { headers, data: row, tableId: id }, `table-${id}-row-${row.id}`)) : /* @__PURE__ */ jsx14("tr", { children: /* @__PURE__ */ jsx14("td", { colSpan: headers.length, children: "There is no data to display in the table" }) }) })
    ] }) : /* @__PURE__ */ jsx14("tbody", { children: /* @__PURE__ */ jsx14("tr", { children: /* @__PURE__ */ jsx14("td", { children: "No column headers provided for the table" }) }) }) })
  ] });
}

// src/components/Accordion/Accordion.tsx
import { useState as useState5, useEffect as useEffect5 } from "react";

// src/components/Accordion/AccordionContext.ts
import { createContext as createContext3 } from "react";
var AccordionContext = createContext3(null);
var AccordionContext_default = AccordionContext;

// src/components/Accordion/Accordion.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
function Accordion(props) {
  const { children, defaultOpen } = props;
  const [openAccordions, setOpenAccordions] = useState5([]);
  useEffect5(() => {
    if (defaultOpen) {
      setOpenAccordions([...openAccordions, defaultOpen]);
    }
  }, [defaultOpen]);
  return /* @__PURE__ */ jsx15(AccordionContext_default.Provider, { value: { openAccordions, setOpenAccordions }, children: /* @__PURE__ */ jsx15("div", { className: "guwmi-accordion-container", children }) });
}

// src/components/Accordion/AccrodionItem.tsx
import {
  useCallback as useCallback2,
  useContext as useContext7,
  useRef as useRef5,
  useState as useState6,
  useEffect as useEffect6
} from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { jsx as jsx16, jsxs as jsxs4 } from "react/jsx-runtime";
function AccordionItem(props) {
  const { children, title, id } = props;
  const { openAccordions, setOpenAccordions } = useContext7(AccordionContext_default);
  const windowWidth = useWindowWidth();
  const panelRef = useRef5(null);
  const contentRef = useRef5(null);
  const [isOpen, setIsOpen] = useState6(false);
  const [isAnimating, setIsAnimating] = useState6(false);
  useEffect6(() => {
    if (openAccordions.includes(id)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [openAccordions]);
  const open = useCallback2(() => {
    setOpenAccordions([...openAccordions, id]);
    setIsAnimating(true);
  }, [id, openAccordions]);
  const close = useCallback2(() => {
    setOpenAccordions(openAccordions.filter((value) => value !== id));
    setIsAnimating(true);
  }, [id, openAccordions]);
  useEffect6(() => {
    var _a, _b;
    (_a = panelRef.current) == null ? void 0 : _a.addEventListener("transitioncancel", () => setIsAnimating(false));
    (_b = panelRef.current) == null ? void 0 : _b.addEventListener("transitionend", () => setIsAnimating(false));
  }, [panelRef.current]);
  useEffect6(() => {
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
import { useMemo as useMemo11 } from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
function Cards(props) {
  const { children, columns = 3 } = props;
  const classes = useMemo11(() => {
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
import { useMemo as useMemo12, useState as useState7 } from "react";
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
  const titleText = useMemo12(() => title ? title : kind.charAt(0).toUpperCase() + kind.slice(1), [title, kind]);
  const classes = useMemo12(() => `guwmi-notification ${kind}`, [kind]);
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
import {
  useCallback as useCallback3,
  useEffect as useEffect7,
  useMemo as useMemo13,
  useRef as useRef6,
  useState as useState8
} from "react";
import ReactDOM from "react-dom";
import { IconX as IconX2 } from "@tabler/icons-react";
import { jsx as jsx21, jsxs as jsxs7 } from "react/jsx-runtime";
function ModalPortal(props) {
  const { children } = props;
  const [hasDocument, setHasDocument] = useState8(false);
  useEffect7(() => {
    setHasDocument(typeof document !== "undefined");
  }, []);
  return hasDocument ? ReactDOM.createPortal(children, document.body) : null;
}
function Modal(props) {
  const { open, onClose, preventScroll = false, size = "sm", children } = props;
  const [isAnimating, setIsAnimating] = useState8(false);
  const [isOpen, setIsOpen] = useState8(false);
  const overlayClasses = useMemo13(() => `guwmi-modal-overlay${isOpen ? " open" : ""}`, [isOpen]);
  const classes = useMemo13(() => `guwmi-modal ${size}`, [size]);
  const modalOverlay = useRef6(null);
  const modal = useRef6(null);
  const modalButton = useRef6(null);
  const close = useCallback3(() => {
    setIsAnimating(true);
    setIsOpen(false);
    modalButton.current.focus();
  }, []);
  const setAnimationState = useCallback3(() => {
    setIsAnimating(false);
  }, []);
  const closeOutClick = useCallback3((e) => {
    if (!modal.current.contains(e.target)) {
      close();
    }
  }, [modal.current]);
  const handleTab = useCallback3((e) => {
    if (e.key === "Tab") {
      const focusableElements = modal.current.querySelectorAll("a[href], button, input, textarea, select, details, [tabindex]");
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      if (e.shiftKey) {
        if (modal.current.contains(e.target) && e.target === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (modal.current.contains(e.target) && e.target === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }, [modal.current]);
  const handleEscape = useCallback3((e) => {
    if (e.key === "Escape") {
      close();
    }
  }, []);
  useEffect7(() => {
    if (open) {
      setIsAnimating(true);
      setIsOpen(true);
      modalButton.current = document.activeElement;
      modal.current.focus();
      document.addEventListener("click", closeOutClick);
      document.addEventListener("keydown", handleTab);
      document.addEventListener("keydown", handleEscape);
      if (preventScroll) {
        document.body.style.height = "100%";
        document.body.style.overflow = "hidden";
      }
    } else {
      document.removeEventListener("click", closeOutClick);
      document.removeEventListener("keydown", handleTab);
      document.removeEventListener("keydown", handleEscape);
      if (preventScroll) {
        document.body.removeAttribute("style");
      }
    }
    return () => {
      document.removeEventListener("click", closeOutClick);
      document.removeEventListener("keydown", handleTab);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);
  useEffect7(() => {
    var _a, _b;
    (_a = modalOverlay.current) == null ? void 0 : _a.addEventListener("transitioncancel", setAnimationState);
    (_b = modalOverlay.current) == null ? void 0 : _b.addEventListener("transitionend", setAnimationState);
    return () => {
      var _a2, _b2;
      (_a2 = modalOverlay.current) == null ? void 0 : _a2.removeEventListener("transitioncancel", setAnimationState);
      (_b2 = modalOverlay.current) == null ? void 0 : _b2.removeEventListener("transitionend", setAnimationState);
    };
  }, [modalOverlay.current]);
  useEffect7(() => {
    if (!isOpen) {
      onClose();
    }
  }, [isOpen]);
  return /* @__PURE__ */ jsx21(ModalPortal, { children: (open || isOpen || isAnimating) && /* @__PURE__ */ jsx21("div", { className: overlayClasses, ref: modalOverlay, children: /* @__PURE__ */ jsxs7("dialog", { className: classes, ref: modal, children: [
    /* @__PURE__ */ jsx21(
      "button",
      {
        className: "guwmi-modal-close-button",
        "aria-label": "Close modal",
        onClick: () => close(),
        children: /* @__PURE__ */ jsx21(IconX2, { size: 20 })
      }
    ),
    children
  ] }) }) });
}

// src/components/Drawer/Drawer.tsx
import {
  useCallback as useCallback4,
  useEffect as useEffect10,
  useMemo as useMemo14,
  useRef as useRef8
} from "react";

// src/hooks/useAnimation.ts
import { useEffect as useEffect8, useState as useState9, useRef as useRef7 } from "react";
var useAnimation = (componentState, classString, elementRef) => {
  const [isInDOM, setIsInDOM] = useState9(componentState);
  const [hasClass, setHasClass] = useState9(false);
  const initialLoad = useRef7(true);
  const listnerAdded = useRef7(false);
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
  useEffect8(() => {
    initialLoad.current = false;
  }, []);
  useEffect8(() => {
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

// src/components/Drawer/DrawerPortal.tsx
import { useEffect as useEffect9, useState as useState10 } from "react";
import ReactDOM2 from "react-dom";
function DrawerPortal(props) {
  const { children } = props;
  const [hasDocument, setHasDocument] = useState10(false);
  useEffect9(() => {
    setHasDocument(typeof document !== "undefined");
  }, []);
  return hasDocument ? ReactDOM2.createPortal(children, document.body) : null;
}

// src/components/Drawer/Drawer.tsx
import { IconX as IconX3 } from "@tabler/icons-react";
import { jsx as jsx22, jsxs as jsxs8 } from "react/jsx-runtime";
function Drawer(props) {
  const { open, onClose, preventScroll = false, position = "left", children } = props;
  const classes = useMemo14(() => `guwmi-drawer ${position}`, [position]);
  const drawerOverlay = useRef8(null);
  const drawer = useRef8(null);
  const drawerButton = useRef8(null);
  const { isVisible } = useAnimation_default(open, "open", drawerOverlay);
  const closeOutClick = useCallback4((e) => {
    var _a;
    if (e.target !== drawerButton.current && !((_a = drawer.current) == null ? void 0 : _a.contains(e.target))) {
      onClose();
    }
  }, [drawer.current]);
  const handleTab = useCallback4((e) => {
    var _a, _b;
    if (e.key === "Tab") {
      const focusableElements = drawer.current.querySelectorAll("a[href], button, input, textarea, select, details, [tabindex]");
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      if (e.shiftKey) {
        if (((_a = drawer.current) == null ? void 0 : _a.contains(e.target)) && e.target === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (((_b = drawer.current) == null ? void 0 : _b.contains(e.target)) && e.target === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }, [drawer.current]);
  const handleEscape = useCallback4((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, []);
  useEffect10(() => {
    var _a, _b;
    if (open) {
      drawerButton.current = document.activeElement;
      (_a = drawer.current) == null ? void 0 : _a.focus();
      document.addEventListener("click", closeOutClick);
      document.addEventListener("keydown", handleTab);
      document.addEventListener("keydown", handleEscape);
      if (preventScroll) {
        document.body.style.height = "100%";
        document.body.style.overflow = "hidden";
      }
    } else {
      (_b = drawerButton.current) == null ? void 0 : _b.focus();
      document.removeEventListener("click", closeOutClick);
      document.removeEventListener("keydown", handleTab);
      document.removeEventListener("keydown", handleEscape);
      if (preventScroll) {
        document.body.removeAttribute("style");
      }
    }
    return () => {
      document.removeEventListener("click", closeOutClick);
      document.removeEventListener("keydown", handleTab);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);
  return isVisible && /* @__PURE__ */ jsx22(DrawerPortal, { children: /* @__PURE__ */ jsx22("div", { className: "guwmi-drawer-overlay", ref: drawerOverlay, children: /* @__PURE__ */ jsxs8("aside", { className: classes, ref: drawer, "aria-modal": "true", tabIndex: 0, children: [
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