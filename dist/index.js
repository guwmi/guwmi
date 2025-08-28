"use client";
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
import "./guwmi-BLBHMFPU.css";

// src/components/Accordion/Accordion.tsx
import { useState, useEffect } from "react";

// src/components/Accordion/AccordionContext.ts
import { createContext } from "react";
var AccordionContext = createContext(null);
var AccordionContext_default = AccordionContext;

// src/components/Accordion/Accordion.tsx
import { jsx } from "react/jsx-runtime";
function Accordion(props) {
  const _a = props, {
    children,
    defaultOpen,
    className,
    skeleton
  } = _a, rest = __objRest(_a, [
    "children",
    "defaultOpen",
    "className",
    "skeleton"
  ]);
  const [openAccordions, setOpenAccordions] = useState([]);
  const classes = `guwmi-accordion-container${className ? " " + className : ""}`;
  useEffect(() => {
    if (defaultOpen) {
      setOpenAccordions([...openAccordions, defaultOpen]);
    }
  }, [defaultOpen]);
  return /* @__PURE__ */ jsx(AccordionContext_default.Provider, { value: { skeleton, openAccordions, setOpenAccordions }, children: /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({ className: classes }, rest), { children })) });
}

// src/components/Accordion/AccrodionItem.tsx
import {
  useCallback as useCallback2,
  useContext,
  useRef,
  useState as useState3,
  useEffect as useEffect3
} from "react";

// src/hooks/useWindowWidth.ts
import { useState as useState2, useEffect as useEffect2 } from "react";
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState2();
  const handleResize = () => setWindowWidth(window.innerWidth);
  useEffect2(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}

// src/components/Icon/Icon.tsx
import { useCallback, forwardRef } from "react";

// src/components/Icon/paths.tsx
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
function AlertCircle() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }),
    /* @__PURE__ */ jsx2("path", { d: "M12 8v4" }),
    /* @__PURE__ */ jsx2("path", { d: "M12 16h.01" })
  ] });
}
function AlertSquare() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" }),
    /* @__PURE__ */ jsx2("path", { d: "M12 8v4" }),
    /* @__PURE__ */ jsx2("path", { d: "M12 16h.01" })
  ] });
}
function AlertTriangle() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M12 9v4" }),
    /* @__PURE__ */ jsx2("path", { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" }),
    /* @__PURE__ */ jsx2("path", { d: "M12 16h.01" })
  ] });
}
function Check() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M5 12l5 5l10 -10" })
  ] });
}
function ChevronDown() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M6 9l6 6l6 -6" })
  ] });
}
function ChevronLeft() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M15 6l-6 6l6 6" })
  ] });
}
function ChevronRight() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M9 6l6 6l-6 6" })
  ] });
}
function ChevronUp() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M6 15l6 -6l6 6" })
  ] });
}
function Copy() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" }),
    /* @__PURE__ */ jsx2("path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" })
  ] });
}
function Close() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M18 6l-12 12" }),
    /* @__PURE__ */ jsx2("path", { d: "M6 6l12 12" })
  ] });
}
function Dots() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }),
    /* @__PURE__ */ jsx2("path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }),
    /* @__PURE__ */ jsx2("path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" })
  ] });
}
function ExternalLink() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" }),
    /* @__PURE__ */ jsx2("path", { d: "M11 13l9 -9" }),
    /* @__PURE__ */ jsx2("path", { d: "M15 4h5v5" })
  ] });
}
function Hide() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828" }),
    /* @__PURE__ */ jsx2("path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" }),
    /* @__PURE__ */ jsx2("path", { d: "M3 3l18 18" })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M5 12l-2 0l9 -9l9 9l-2 0" }),
    /* @__PURE__ */ jsx2("path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" }),
    /* @__PURE__ */ jsx2("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" })
  ] });
}
function Info() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }),
    /* @__PURE__ */ jsx2("path", { d: "M12 9h.01" }),
    /* @__PURE__ */ jsx2("path", { d: "M11 12h1v4h1" })
  ] });
}
function Login() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" }),
    /* @__PURE__ */ jsx2("path", { d: "M3 12h13l-3 -3" }),
    /* @__PURE__ */ jsx2("path", { d: "M13 15l3 -3" })
  ] });
}
function Menu() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M4 6l16 0" }),
    /* @__PURE__ */ jsx2("path", { d: "M4 12l16 0" }),
    /* @__PURE__ */ jsx2("path", { d: "M4 18l16 0" })
  ] });
}
function ProgressAlert() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" }),
    /* @__PURE__ */ jsx2("path", { d: "M14 3.223a9.003 9.003 0 0 1 0 17.554" }),
    /* @__PURE__ */ jsx2("path", { d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" }),
    /* @__PURE__ */ jsx2("path", { d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" }),
    /* @__PURE__ */ jsx2("path", { d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" }),
    /* @__PURE__ */ jsx2("path", { d: "M12 8v4" }),
    /* @__PURE__ */ jsx2("path", { d: "M12 16v.01" })
  ] });
}
function ProgressCheck() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" }),
    /* @__PURE__ */ jsx2("path", { d: "M14 3.223a9.003 9.003 0 0 1 0 17.554" }),
    /* @__PURE__ */ jsx2("path", { d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" }),
    /* @__PURE__ */ jsx2("path", { d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" }),
    /* @__PURE__ */ jsx2("path", { d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" }),
    /* @__PURE__ */ jsx2("path", { d: "M9 12l2 2l4 -4" })
  ] });
}
function Progress() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" }),
    /* @__PURE__ */ jsx2("path", { d: "M14 3.223a9.003 9.003 0 0 1 0 17.554" }),
    /* @__PURE__ */ jsx2("path", { d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" }),
    /* @__PURE__ */ jsx2("path", { d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" }),
    /* @__PURE__ */ jsx2("path", { d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" })
  ] });
}
function Search() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }),
    /* @__PURE__ */ jsx2("path", { d: "M21 21l-6 -6" })
  ] });
}
function Settings() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" }),
    /* @__PURE__ */ jsx2("path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" })
  ] });
}
function Trash() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M4 7l16 0" }),
    /* @__PURE__ */ jsx2("path", { d: "M10 11l0 6" }),
    /* @__PURE__ */ jsx2("path", { d: "M14 11l0 6" }),
    /* @__PURE__ */ jsx2("path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" }),
    /* @__PURE__ */ jsx2("path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" })
  ] });
}
function User() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" }),
    /* @__PURE__ */ jsx2("path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" })
  ] });
}
function View() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx2("path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }),
    /* @__PURE__ */ jsx2("path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" })
  ] });
}

// src/components/Icon/Icon.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Icon = forwardRef((props, ref) => {
  const _a = props, {
    ariaLabel,
    name,
    size = 24,
    stroke = "2",
    color = "currentColor",
    className
  } = _a, rest = __objRest(_a, [
    "ariaLabel",
    "name",
    "size",
    "stroke",
    "color",
    "className"
  ]);
  const classes = `icon guwmi-icon guwmi-icon-${name}${className ? " " + className : ""}`;
  const getPaths = useCallback((iconName) => {
    switch (iconName) {
      case "alert-circle":
        return /* @__PURE__ */ jsx3(AlertCircle, {});
      case "alert-square":
        return /* @__PURE__ */ jsx3(AlertSquare, {});
      case "alert-triangle":
        return /* @__PURE__ */ jsx3(AlertTriangle, {});
      case "check":
        return /* @__PURE__ */ jsx3(Check, {});
      case "chevron-down":
        return /* @__PURE__ */ jsx3(ChevronDown, {});
      case "chevron-left":
        return /* @__PURE__ */ jsx3(ChevronLeft, {});
      case "chevron-right":
        return /* @__PURE__ */ jsx3(ChevronRight, {});
      case "chevron-up":
        return /* @__PURE__ */ jsx3(ChevronUp, {});
      case "copy":
        return /* @__PURE__ */ jsx3(Copy, {});
      case "close":
        return /* @__PURE__ */ jsx3(Close, {});
      case "dots":
        return /* @__PURE__ */ jsx3(Dots, {});
      case "external-link":
        return /* @__PURE__ */ jsx3(ExternalLink, {});
      case "hide":
        return /* @__PURE__ */ jsx3(Hide, {});
      case "home":
        return /* @__PURE__ */ jsx3(Home, {});
      case "info":
        return /* @__PURE__ */ jsx3(Info, {});
      case "login":
        return /* @__PURE__ */ jsx3(Login, {});
      case "menu":
        return /* @__PURE__ */ jsx3(Menu, {});
      case "progress-alert":
        return /* @__PURE__ */ jsx3(ProgressAlert, {});
      case "progress-check":
        return /* @__PURE__ */ jsx3(ProgressCheck, {});
      case "progress":
        return /* @__PURE__ */ jsx3(Progress, {});
      case "search":
        return /* @__PURE__ */ jsx3(Search, {});
      case "settings":
        return /* @__PURE__ */ jsx3(Settings, {});
      case "trash":
        return /* @__PURE__ */ jsx3(Trash, {});
      case "user":
        return /* @__PURE__ */ jsx3(User, {});
      case "view":
        return /* @__PURE__ */ jsx3(View, {});
    }
  }, []);
  const paths = getPaths(name);
  return /* @__PURE__ */ jsx3(
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
      className: classes,
      "aria-label": ariaLabel != null ? ariaLabel : name
    }, rest), {
      children: paths
    })
  );
});
var Icon_default = Icon;

// src/components/Accordion/AccrodionItem.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function AccordionItem(props) {
  const _a = props, {
    children,
    title,
    id,
    className
  } = _a, rest = __objRest(_a, [
    "children",
    "title",
    "id",
    "className"
  ]);
  const { skeleton, openAccordions, setOpenAccordions } = useContext(AccordionContext_default);
  const windowWidth = useWindowWidth();
  const panelRef = useRef(null);
  const contentRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState3(false);
  const [styles, setStyles] = useState3({ height: "0px", minHeight: "0px" });
  const isOpen = openAccordions.includes(id);
  const classes = `guwmi-accordion-item${skeleton ? " guwmi-skeleton" : ""}${className ? " " + className : ""}`;
  const onAnimationEnd = useCallback2(() => setIsAnimating(false), []);
  const open = useCallback2(() => {
    setOpenAccordions([...openAccordions, id]);
    setIsAnimating(true);
  }, [id, openAccordions]);
  const close = useCallback2(() => {
    setOpenAccordions(openAccordions.filter((value) => value !== id));
    setIsAnimating(true);
  }, [id, openAccordions]);
  useEffect3(() => {
    var _a2, _b;
    (_a2 = panelRef.current) == null ? void 0 : _a2.addEventListener("transitioncancel", onAnimationEnd);
    (_b = panelRef.current) == null ? void 0 : _b.addEventListener("transitionend", onAnimationEnd);
    return () => {
      var _a3, _b2;
      (_a3 = panelRef.current) == null ? void 0 : _a3.removeEventListener("transitioncancel", onAnimationEnd);
      (_b2 = panelRef.current) == null ? void 0 : _b2.removeEventListener("transitionend", onAnimationEnd);
    };
  }, []);
  useEffect3(() => {
    if (!isAnimating && styles.height !== "0px") {
      setStyles(__spreadProps(__spreadValues({}, styles), { height: "auto" }));
    }
  }, [isAnimating]);
  useEffect3(() => {
    if (contentRef.current && isOpen) {
      const height = contentRef.current.offsetHeight;
      setStyles({ height, minHeight: height });
    } else {
      setStyles({ height: "0px", minHeight: "0px" });
    }
  }, [isOpen, windowWidth]);
  return /* @__PURE__ */ jsxs2("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsxs2(
      "button",
      {
        onClick: () => isOpen ? close() : open(),
        id: `guwmi-accordion-controller-${id}`,
        "aria-controls": `guwmi-accordion-panel-${id}`,
        "aria-expanded": isOpen,
        className: isOpen ? "active" : null,
        tabIndex: skeleton ? -1 : 0,
        children: [
          title,
          /* @__PURE__ */ jsx4(Icon_default, { name: "chevron-right", size: 20 })
        ]
      }
    ),
    /* @__PURE__ */ jsx4(
      "section",
      {
        hidden: !isOpen && !isAnimating,
        id: `guwmi-accordion-panel-${id}`,
        "aria-labelledby": `guwmi-accordion-controller-${id}`,
        ref: panelRef,
        style: styles,
        children: /* @__PURE__ */ jsx4("div", { className: "guwmi-accordion-panel-content", ref: contentRef, children })
      }
    )
  ] }));
}

// src/components/Breadcrumbs/Breadcrumbs.tsx
import { Fragment as Fragment2, jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function Breadcrumbs(props) {
  const _a = props, {
    ariaLabel,
    links,
    hasBackground,
    className,
    skeleton
  } = _a, rest = __objRest(_a, [
    "ariaLabel",
    "links",
    "hasBackground",
    "className",
    "skeleton"
  ]);
  const classes = `guwmi-breadcrumbs${hasBackground ? " has-background" : ""}${className ? " " + className : ""}`;
  return /* @__PURE__ */ jsx5("nav", __spreadProps(__spreadValues({ className: classes, "aria-label": ariaLabel }, rest), { children: /* @__PURE__ */ jsx5("ol", { children: links.map((link, index) => /* @__PURE__ */ jsx5(
    "li",
    {
      className: skeleton && hasBackground ? "guwmi-skeleton alt" : skeleton ? "guwmi-skeleton" : null,
      children: index + 1 !== links.length ? /* @__PURE__ */ jsxs3(Fragment2, { children: [
        link.href && !link.disabled ? /* @__PURE__ */ jsx5("a", { href: link.href, tabIndex: skeleton ? -1 : 0, children: link.text }) : /* @__PURE__ */ jsx5("button", { onClick: link.onClick, disabled: link.disabled, tabIndex: skeleton ? -1 : 0, children: link.text }),
        /* @__PURE__ */ jsx5(Icon_default, { name: "chevron-right", "aria-hidden": "true", size: 16 })
      ] }) : /* @__PURE__ */ jsx5("a", { "aria-current": "location", className: "guwmi-breadcrumb-current", children: link.text })
    },
    `${link.text.toLowerCase().replaceAll(" ", "")}-${index}`
  )) }) }));
}

// src/components/Button/Button.tsx
import { useRef as useRef2 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
function Button(props) {
  const _a = props, {
    size = "md",
    color = "primary",
    variant = "fill",
    theme = "round",
    href,
    target,
    disabled,
    className,
    skeleton,
    onClick,
    children
  } = _a, rest = __objRest(_a, [
    "size",
    "color",
    "variant",
    "theme",
    "href",
    "target",
    "disabled",
    "className",
    "skeleton",
    "onClick",
    "children"
  ]);
  const classes = `guwmi-btn ${size} ${color} ${variant} ${theme}${skeleton ? " guwmi-skeleton" : ""}${className ? " " + className : ""}`;
  const button = useRef2(null);
  const handleClick = (e) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  };
  return href && !disabled && !skeleton ? /* @__PURE__ */ jsx6("a", __spreadProps(__spreadValues({ className: classes, href, target }, rest), { children })) : /* @__PURE__ */ jsx6("button", __spreadProps(__spreadValues({ className: classes, onClick: (e) => handleClick(e), ref: button, disabled: disabled || skeleton }, rest), { children }));
}

// src/components/ButtonGroup/ButtonGroup.tsx
import React2, { useMemo } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
function ButtonGroup(props) {
  const _a = props, {
    size = "md",
    color = "neutral",
    variant = "fill",
    theme = "round",
    className,
    skeleton,
    children
  } = _a, rest = __objRest(_a, [
    "size",
    "color",
    "variant",
    "theme",
    "className",
    "skeleton",
    "children"
  ]);
  const classes = `guwmi-btn-group ${size} ${color} ${variant} ${theme}${className ? " " + className : ""}`;
  const buttonChildren = useMemo(() => React2.Children.map(children, (child) => {
    return React2.cloneElement(child, {
      size,
      color,
      variant,
      theme,
      skeleton
    });
  }), [children]);
  return /* @__PURE__ */ jsx7("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: buttonChildren }));
}

// src/components/Cards/Card.tsx
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
function Card(props) {
  const _a = props, {
    title,
    subTitle,
    image,
    className,
    children,
    skeleton
  } = _a, rest = __objRest(_a, [
    "title",
    "subTitle",
    "image",
    "className",
    "children",
    "skeleton"
  ]);
  const classes = `guwmi-card${skeleton ? " guwmi-skeleton" : ""}${className ? " " + className : ""}`;
  return /* @__PURE__ */ jsxs4("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    image && /* @__PURE__ */ jsx8("img", { src: image, alt: title ? "Image that represents " + title : "Image representing the content for this card", className: "guwmi-card-image" }),
    (title || subTitle) && /* @__PURE__ */ jsxs4("div", { className: "guwmi-card-section guwmi-card-title", children: [
      title && /* @__PURE__ */ jsx8("h2", { children: title }),
      subTitle && /* @__PURE__ */ jsx8("h3", { children: subTitle })
    ] }),
    children
  ] }));
}

// src/components/Cards/CardSection.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
function CardSection(props) {
  const _a = props, { className, children } = _a, rest = __objRest(_a, ["className", "children"]);
  const classes = `guwmi-card-section${className ? " " + className : ""}`;
  return /* @__PURE__ */ jsx9("div", __spreadProps(__spreadValues({ className: classes }, rest), { children }));
}

// src/components/Inputs/Checkbox/Checkbox.tsx
import { useId } from "react";
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
function Checkbox(props) {
  const _a = props, {
    label,
    id,
    name,
    disabled,
    checked,
    className,
    skeleton,
    onChange,
    onBlur,
    onFocus
  } = _a, rest = __objRest(_a, [
    "label",
    "id",
    "name",
    "disabled",
    "checked",
    "className",
    "skeleton",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const classes = `guwmi-checkbox-input${disabled ? " disabled" : ""}${className ? " " + className : ""}`;
  const inputId = id != null ? id : useId();
  const lowerCaseLabel = label.toLowerCase().replaceAll(" ", "-");
  return /* @__PURE__ */ jsxs5("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsxs5("div", { className: `guwmi-checkbox-container${skeleton ? " guwmi-skeleton" : ""}`, children: [
      /* @__PURE__ */ jsx10("span", { className: "guwmi-checkmark", children: /* @__PURE__ */ jsx10(Icon_default, { name: "check", size: 14, stroke: "3" }) }),
      /* @__PURE__ */ jsx10(
        "input",
        {
          type: "checkbox",
          id: inputId,
          name: name != null ? name : lowerCaseLabel,
          disabled: disabled || skeleton,
          checked,
          onChange,
          onBlur,
          onFocus
        }
      )
    ] }),
    /* @__PURE__ */ jsx10("label", { className: skeleton ? "guwmi-skeleton" : null, htmlFor: inputId, children: label })
  ] }));
}

// src/components/Container/Container.tsx
import { useState as useState6 } from "react";

// src/components/Drawer/Drawer.tsx
import { useRef as useRef6 } from "react";

// src/hooks/useAnimation.ts
import { useEffect as useEffect4, useState as useState4, useRef as useRef3 } from "react";
var useAnimation = (componentState, classString, elementRef) => {
  const [isInDOM, setIsInDOM] = useState4(componentState);
  const [hasClass, setHasClass] = useState4(false);
  const initialLoad = useRef3(true);
  const listnerAdded = useRef3(false);
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
  useEffect4(() => {
    initialLoad.current = false;
  }, []);
  useEffect4(() => {
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

// src/hooks/useFocusTrap.ts
import { useCallback as useCallback3, useEffect as useEffect5, useRef as useRef4 } from "react";
var useFocusTrap = (open, onClose, elementRef) => {
  const triggerRef = useRef4(null);
  const handleTab = useCallback3((e) => {
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
  const handleEscape = useCallback3((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, []);
  useEffect5(() => {
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
import { useCallback as useCallback4, useEffect as useEffect6, useRef as useRef5 } from "react";
var useClickOutside = (enabled, onClick, elementRef) => {
  const triggerRef = useRef5(null);
  const closeOutClick = useCallback4((e) => {
    var _a;
    if (e.target !== triggerRef.current && !((_a = elementRef.current) == null ? void 0 : _a.contains(e.target))) {
      onClick();
    }
  }, [elementRef.current]);
  useEffect6(() => {
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

// src/components/utils/BodyPortal.tsx
import { useEffect as useEffect7, useState as useState5 } from "react";
import ReactDOM from "react-dom";
function BodyPortal(props) {
  const { children } = props;
  const [hasDocument, setHasDocument] = useState5(false);
  useEffect7(() => {
    setHasDocument(typeof document !== "undefined");
  }, []);
  return hasDocument ? ReactDOM.createPortal(children, document.body) : null;
}

// src/hooks/usePreventScroll.ts
import { useEffect as useEffect8 } from "react";
var usePreventScroll = (open, enabled) => {
  useEffect8(() => {
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

// src/components/Drawer/Drawer.tsx
import { jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
function Drawer(props) {
  const _a = props, {
    ariaLabel = "Content drawer",
    open,
    preventScroll,
    position = "left",
    className,
    onClose,
    children
  } = _a, rest = __objRest(_a, [
    "ariaLabel",
    "open",
    "preventScroll",
    "position",
    "className",
    "onClose",
    "children"
  ]);
  const classes = `guwmi-drawer ${position}${className ? " " + className : ""}`;
  const drawerOverlay = useRef6(null);
  const drawer = useRef6(null);
  const { isVisible } = useAnimation_default(open, "open", drawerOverlay);
  useFocusTrap_default(open, onClose, drawer);
  useClickOutside_default(open, onClose, drawer);
  usePreventScroll_default(open, preventScroll);
  return isVisible && /* @__PURE__ */ jsx11(BodyPortal, { children: /* @__PURE__ */ jsx11("div", __spreadProps(__spreadValues({ className: "guwmi-drawer-overlay", ref: drawerOverlay }, rest), { children: /* @__PURE__ */ jsxs6("aside", { className: classes, "aria-label": ariaLabel, ref: drawer, children: [
    /* @__PURE__ */ jsx11(
      "button",
      {
        className: "guwmi-drawer-close-button",
        "aria-label": "Close drawer",
        onClick: () => onClose(),
        children: /* @__PURE__ */ jsx11(Icon_default, { name: "close", size: 20 })
      }
    ),
    children
  ] }) })) });
}

// src/components/IconButton/IconButton.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
function IconButton(props) {
  const _a = props, {
    size = "md",
    color = "primary",
    variant = "fill",
    theme = "round",
    ariaLabel,
    disabled,
    className,
    skeleton,
    onClick,
    children
  } = _a, rest = __objRest(_a, [
    "size",
    "color",
    "variant",
    "theme",
    "ariaLabel",
    "disabled",
    "className",
    "skeleton",
    "onClick",
    "children"
  ]);
  const classes = `guwmi-btn icon ${size} ${color} ${variant} ${theme}${skeleton ? " guwmi-skeleton" : ""}${className ? " " + className : ""}`;
  return /* @__PURE__ */ jsx12(
    "button",
    __spreadProps(__spreadValues({
      className: classes,
      onClick,
      "aria-label": ariaLabel,
      disabled: disabled || skeleton
    }, rest), {
      children
    })
  );
}

// src/components/Container/Container.tsx
import { jsx as jsx13, jsxs as jsxs7 } from "react/jsx-runtime";
function Container(props) {
  const _a = props, {
    header,
    sidebar,
    sidebarAria,
    sidebarIsDrawer,
    sidebarButtonIcon = /* @__PURE__ */ jsx13(Icon_default, { name: "menu" }),
    className,
    children
  } = _a, rest = __objRest(_a, [
    "header",
    "sidebar",
    "sidebarAria",
    "sidebarIsDrawer",
    "sidebarButtonIcon",
    "className",
    "children"
  ]);
  const classes = `guwmi-container${className ? " " + className : ""}`;
  const [sidebarOpen, setSidebarOpen] = useState6(false);
  return /* @__PURE__ */ jsxs7("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    header && /* @__PURE__ */ jsxs7("header", { className: "guwmi-container-header", children: [
      sidebarIsDrawer && /* @__PURE__ */ jsx13("div", { children: /* @__PURE__ */ jsx13(
        IconButton,
        {
          ariaLabel: `Open ${sidebarAria}`,
          onClick: () => setSidebarOpen(true),
          variant: "ghost",
          children: sidebarButtonIcon
        }
      ) }),
      header
    ] }),
    /* @__PURE__ */ jsxs7("div", { children: [
      sidebar && !sidebarIsDrawer ? /* @__PURE__ */ jsx13("aside", { className: "guwmi-container-sidebar", "aria-label": sidebarAria != null ? sidebarAria : "Application sidebar", children: sidebar }) : /* @__PURE__ */ jsx13(Drawer, { open: sidebarOpen, onClose: () => setSidebarOpen(false), ariaLabel: sidebarAria != null ? sidebarAria : "Application sidebar", children: /* @__PURE__ */ jsx13("div", { className: "guwmi-container-sidebar", children: sidebar }) }),
      /* @__PURE__ */ jsx13("main", { className: "guwmi-container-content", children })
    ] })
  ] }));
}

// src/components/Grid/Grid.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
function Grid(props) {
  const _a = props, {
    columns = 3,
    spacing = 1,
    wrap = "wrap",
    rowOrder = "standard",
    align = "left",
    className,
    children
  } = _a, rest = __objRest(_a, [
    "columns",
    "spacing",
    "wrap",
    "rowOrder",
    "align",
    "className",
    "children"
  ]);
  const getClasses = () => {
    let classString = "guwmi-grid";
    switch (columns) {
      case "auto":
        classString += " auto";
        break;
      case 2:
        classString += " col-2";
        break;
      case 4:
        classString += " col-4";
        break;
      case 5:
        classString += " col-5";
        break;
      case 6:
        classString += " col-6";
        break;
      default:
        classString += " col-3";
    }
    switch (spacing) {
      case 0:
        classString += " space-0";
        break;
      case 2:
        classString += " space-2";
        break;
      case 3:
        classString += " space-3";
        break;
      case 4:
        classString += " space-4";
        break;
      case 5:
        classString += " space-5";
        break;
      case 6:
        classString += " space-6";
        break;
      default:
        classString += " space-1";
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
    if (className) {
      classString += " " + className;
    }
    return classString;
  };
  const classes = getClasses();
  return /* @__PURE__ */ jsx14("div", __spreadProps(__spreadValues({ className: classes }, rest), { children }));
}

// src/components/InfoBlock/InfoBlock.tsx
import { jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
function InfoBlock(props) {
  const _a = props, {
    label,
    kind = "info",
    className,
    skeleton,
    children
  } = _a, rest = __objRest(_a, [
    "label",
    "kind",
    "className",
    "skeleton",
    "children"
  ]);
  const classes = `guwmi-info-block ${kind}${skeleton ? " guwmi-skeleton" : ""}${className ? " " + className : ""}`;
  const getIconName = () => {
    switch (kind) {
      case "danger":
        return "alert-square";
      case "warning":
        return "alert-triangle";
      case "success":
        return "check";
      default:
        return "info";
    }
  };
  const iconName = getIconName();
  return /* @__PURE__ */ jsxs8("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsx15("div", { children: /* @__PURE__ */ jsx15(Icon_default, { name: iconName }) }),
    /* @__PURE__ */ jsxs8("div", { children: [
      label ? /* @__PURE__ */ jsx15("h2", { className: "guwmi-info-block-label", children: label }) : /* @__PURE__ */ jsx15("h2", { className: "guwmi-info-block-label", children: kind.charAt(0).toUpperCase() + kind.slice(1) }),
      children
    ] })
  ] }));
}

// src/components/Loading/Loading.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
function Loading(props) {
  const _a = props, {
    active,
    size = "md",
    speed = "normal",
    position = "block",
    overlay = false,
    className
  } = _a, rest = __objRest(_a, [
    "active",
    "size",
    "speed",
    "position",
    "overlay",
    "className"
  ]);
  const classes = `guwmi-loading-container ${size} ${speed} ${position} ${className != null ? className : ""}${overlay ? " overlay" : ""} `;
  usePreventScroll_default(active, position === "full-screen");
  return active && (position !== "full-screen" ? /* @__PURE__ */ jsx16("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: /* @__PURE__ */ jsx16("div", { className: "guwmi-spinner" }) })) : /* @__PURE__ */ jsx16(BodyPortal, { children: /* @__PURE__ */ jsx16("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: /* @__PURE__ */ jsx16("div", { className: "guwmi-spinner" }) })) }));
}

// src/components/Menu/Menu.tsx
import { useState as useState7 } from "react";

// src/components/Menu/MenuContext.ts
import { createContext as createContext2 } from "react";
var MenuContext = createContext2(null);
var MenuContext_default = MenuContext;

// src/components/Menu/Menu.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
function Menu2(props) {
  const _a = props, {
    children,
    position = "bottom-left",
    width,
    ariaLabel,
    className
  } = _a, rest = __objRest(_a, [
    "children",
    "position",
    "width",
    "ariaLabel",
    "className"
  ]);
  const [isOpen, setIsOpen] = useState7(false);
  const classes = `guwmi-menu-container ${position}${className ? " " + className : ""}`;
  const styles = width ? { width: `${width}px` } : null;
  return /* @__PURE__ */ jsx17("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: /* @__PURE__ */ jsx17(MenuContext_default.Provider, { value: { isOpen, setIsOpen, ariaLabel, styles }, children }) }));
}

// src/components/Menu/MenuDropdown.tsx
import { useContext as useContext2, useRef as useRef8 } from "react";

// src/hooks/useTabThrough.ts
import { useCallback as useCallback5, useEffect as useEffect9, useRef as useRef7 } from "react";
var useTabThrough = (open, onClose, elementRef) => {
  const triggerRef = useRef7(null);
  const handleTab = useCallback5((e) => {
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
  const handleEscape = useCallback5((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, []);
  useEffect9(() => {
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
import { Fragment as Fragment3, jsx as jsx18 } from "react/jsx-runtime";
function MenuDropdown(props) {
  const _a = props, { className, children } = _a, rest = __objRest(_a, ["className", "children"]);
  const { isOpen, setIsOpen, ariaLabel, styles } = useContext2(MenuContext_default);
  const classes = `guwmi-menu-dropdown${className ? " " + className : ""}`;
  const dropDownRef = useRef8(null);
  const { isVisible } = useAnimation_default(isOpen, "open", dropDownRef);
  useTabThrough_default(isOpen, () => setIsOpen(false), dropDownRef);
  return /* @__PURE__ */ jsx18(Fragment3, { children: isVisible && /* @__PURE__ */ jsx18(
    "nav",
    __spreadProps(__spreadValues({
      className: classes,
      ref: dropDownRef,
      "aria-label": ariaLabel,
      style: styles
    }, rest), {
      children: /* @__PURE__ */ jsx18("ul", { role: "menubar", children })
    })
  ) });
}

// src/components/Menu/MenuItem.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
function MenuItem(props) {
  const _a = props, {
    href,
    target,
    disabled,
    className,
    onClick,
    children
  } = _a, rest = __objRest(_a, [
    "href",
    "target",
    "disabled",
    "className",
    "onClick",
    "children"
  ]);
  const classes = `guwmi-menu-item${className ? " " + className : ""}`;
  return /* @__PURE__ */ jsx19("li", __spreadProps(__spreadValues({ className: classes }, rest), { children: href && !disabled ? /* @__PURE__ */ jsx19("a", { className: "guwmi-menu-btn", href, target, children }) : /* @__PURE__ */ jsx19("button", { className: "guwmi-menu-btn", onClick, disabled, children }) }));
}

// src/components/Menu/MenuTrigger.tsx
import React3, { useMemo as useMemo2, useContext as useContext3 } from "react";
import { jsx as jsx20 } from "react/jsx-runtime";
function MenuTrigger(props) {
  const _a = props, { className, children } = _a, rest = __objRest(_a, ["className", "children"]);
  const { isOpen, setIsOpen } = useContext3(MenuContext_default);
  const childrenWithClick = useMemo2(() => {
    return React3.Children.map(children, (child) => React3.cloneElement(child, { onClick: () => setIsOpen(!isOpen) }));
  }, [children, isOpen]);
  const classes = `guwmi-menu-trigger${className ? " " + className : ""}`;
  return /* @__PURE__ */ jsx20("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: childrenWithClick }));
}

// src/components/Modal/Modal.tsx
import { useRef as useRef9 } from "react";
import { jsx as jsx21, jsxs as jsxs9 } from "react/jsx-runtime";
function Modal(props) {
  const _a = props, {
    open,
    onClose,
    preventScroll = false,
    size = "md",
    className,
    children
  } = _a, rest = __objRest(_a, [
    "open",
    "onClose",
    "preventScroll",
    "size",
    "className",
    "children"
  ]);
  const classes = `guwmi-modal ${size}${className ? " " + className : ""}`;
  const modalOverlay = useRef9(null);
  const modal = useRef9(null);
  const { isVisible } = useAnimation_default(open, "open", modalOverlay);
  useFocusTrap_default(open, onClose, modal);
  useClickOutside_default(open, onClose, modal);
  usePreventScroll_default(open, preventScroll);
  return isVisible && /* @__PURE__ */ jsx21(BodyPortal, { children: /* @__PURE__ */ jsx21("div", __spreadProps(__spreadValues({ className: "guwmi-modal-overlay", ref: modalOverlay }, rest), { children: /* @__PURE__ */ jsxs9("dialog", { className: classes, ref: modal, "aria-modal": "true", children: [
    /* @__PURE__ */ jsx21(
      "button",
      {
        className: "guwmi-modal-close-button",
        "aria-label": "Close modal",
        onClick: () => onClose(),
        children: /* @__PURE__ */ jsx21(Icon_default, { name: "close", size: 20 })
      }
    ),
    children
  ] }) })) });
}

// src/components/Navbar/Navbar.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
function Navbar(props) {
  const _a = props, {
    ariaLabel,
    className,
    skeleton,
    children
  } = _a, rest = __objRest(_a, [
    "ariaLabel",
    "className",
    "skeleton",
    "children"
  ]);
  const classes = `guwmi-navbar${className ? " " + className : ""}`;
  return /* @__PURE__ */ jsx22(
    "nav",
    __spreadProps(__spreadValues({
      className: classes,
      "aria-label": ariaLabel
    }, rest), {
      children: skeleton ? /* @__PURE__ */ jsx22("ul", { role: "menubar", children: Array.from({ length: 5 }, (_, index) => index).map((v, i) => /* @__PURE__ */ jsx22("li", { className: "guwmi-navbar-item", children: /* @__PURE__ */ jsx22("button", { className: "guwmi-navbar-button guwmi-skeleton", disabled: true }) }, `navbar-skeleton-${i}`)) }) : /* @__PURE__ */ jsx22("ul", { role: "menubar", children })
    })
  );
}

// src/components/Navbar/NavbarGroup.tsx
import React4, {
  useEffect as useEffect10,
  useMemo as useMemo3,
  useRef as useRef10,
  useState as useState8
} from "react";
import { jsx as jsx23, jsxs as jsxs10 } from "react/jsx-runtime";
function NavbarGroup(props) {
  const _a = props, {
    label,
    defaultOpen = false,
    className,
    children
  } = _a, rest = __objRest(_a, [
    "label",
    "defaultOpen",
    "className",
    "children"
  ]);
  const itemRef = useRef10(null);
  const contentRef = useRef10(null);
  const buttonRef = useRef10(null);
  const [isOpen, setIsOpen] = useState8(false);
  const classes = `guwmi-navbar-group${isOpen ? " open" : ""}${className ? " " + className : ""}`;
  const initialRender = useRef10(true);
  useAnimation_default(isOpen, "open", itemRef);
  const buttonChildren = useMemo3(() => React4.Children.map(children, (child) => {
    if (!isOpen) {
      return React4.cloneElement(child, { disabled: true });
    } else {
      return child;
    }
  }), [children, isOpen]);
  useEffect10(() => {
    const defaultHeight = buttonRef.current.offsetHeight;
    if (contentRef.current && isOpen) {
      const height = contentRef.current.offsetHeight;
      itemRef.current.style.height = `${height + defaultHeight}px`;
    } else {
      itemRef.current.style.height = `${defaultHeight}px`;
    }
  }, [isOpen]);
  useEffect10(() => {
    initialRender.current = false;
    if (defaultOpen) {
      setIsOpen(true);
    }
  }, []);
  return /* @__PURE__ */ jsxs10("li", __spreadProps(__spreadValues({ className: classes, ref: itemRef }, rest), { children: [
    /* @__PURE__ */ jsxs10(
      "button",
      {
        className: "guwmi-navbar-button",
        "aria-expanded": isOpen,
        onClick: () => setIsOpen(!isOpen),
        ref: buttonRef,
        children: [
          label,
          /* @__PURE__ */ jsx23(Icon_default, { name: "chevron-right", size: 18 })
        ]
      }
    ),
    !initialRender.current && /* @__PURE__ */ jsx23("ul", { ref: contentRef, tabIndex: !isOpen ? -1 : void 0, children: buttonChildren })
  ] }));
}

// src/components/Navbar/NavbarItem.tsx
import React5, { useRef as useRef11, useMemo as useMemo4 } from "react";
import { jsx as jsx24 } from "react/jsx-runtime";
function NavbarItem(props) {
  const _a = props, {
    active,
    href,
    target,
    disabled,
    className,
    onClick,
    children
  } = _a, rest = __objRest(_a, [
    "active",
    "href",
    "target",
    "disabled",
    "className",
    "onClick",
    "children"
  ]);
  const classes = `guwmi-navbar-item${active ? " active" : ""}${className ? " " + className : ""}`;
  const buttonClasses = `guwmi-navbar-button${disabled ? " disabled" : ""}`;
  const button = useRef11(null);
  const handleClick = (e) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  };
  const isElement = useMemo4(() => {
    let valid = false;
    React5.Children.forEach(children, (child) => {
      if (React5.isValidElement(child)) {
        valid = true;
      }
    });
    return valid;
  }, [children]);
  const mappedChildren = useMemo4(() => {
    if (!href && !onClick && disabled) {
      return React5.Children.map(children, (child) => {
        if (React5.isValidElement(child)) {
          return React5.cloneElement(child, { tabIndex: -1, href: "" });
        } else {
          return child;
        }
      });
    } else {
      return children;
    }
  }, [children, href, onClick, disabled]);
  return /* @__PURE__ */ jsx24("li", __spreadProps(__spreadValues({ className: classes }, rest), { children: isElement && !disabled ? /* @__PURE__ */ jsx24("div", { className: buttonClasses, children: mappedChildren }) : href && !disabled ? /* @__PURE__ */ jsx24("a", { className: buttonClasses, href, target, children: mappedChildren }) : /* @__PURE__ */ jsx24("button", { className: buttonClasses, onClick: (e) => handleClick(e), ref: button, disabled, children: mappedChildren }) }));
}

// src/components/Notification/Notification.tsx
import { useEffect as useEffect11, useState as useState9, useRef as useRef12 } from "react";
import { jsx as jsx25, jsxs as jsxs11 } from "react/jsx-runtime";
function Notification(props) {
  const _a = props, {
    kind = "info",
    title,
    content,
    className
  } = _a, rest = __objRest(_a, [
    "kind",
    "title",
    "content",
    "className"
  ]);
  const [isVisible, setIsVisible] = useState9(true);
  const titleText = title ? title : kind.charAt(0).toUpperCase() + kind.slice(1);
  const classes = `guwmi-notification ${kind}${className ? " " + className : ""}`;
  const getIconName = () => {
    switch (kind) {
      case "error":
        return "alert-square";
      case "warning":
        return "alert-triangle";
      case "success":
        return "check";
      case "info":
        return "info";
    }
  };
  const iconName = useRef12(getIconName());
  useEffect11(() => {
    iconName.current = getIconName();
  }, [kind]);
  return isVisible ? /* @__PURE__ */ jsxs11("dialog", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsx25(Icon_default, { name: iconName.current, size: 20, stroke: "3" }),
    /* @__PURE__ */ jsx25("h2", { children: titleText }),
    /* @__PURE__ */ jsx25("p", { children: content }),
    /* @__PURE__ */ jsx25(
      "button",
      {
        onClick: () => setIsVisible(false),
        "aria-label": "Close notification",
        tabIndex: 0,
        children: /* @__PURE__ */ jsx25(Icon_default, { name: "close", size: 18 })
      }
    )
  ] })) : null;
}

// src/components/Pagination/Pagination.tsx
import {
  useEffect as useEffect12,
  useMemo as useMemo5,
  useRef as useRef13,
  useState as useState10
} from "react";

// src/components/Inputs/Select/SelectInput.tsx
import { useId as useId2 } from "react";
import { jsx as jsx26, jsxs as jsxs12 } from "react/jsx-runtime";
function SelectInput(props) {
  const _a = props, {
    label,
    id,
    name,
    disabled,
    value,
    error,
    hasError,
    className,
    skeleton,
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
    "className",
    "skeleton",
    "options",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const inputId = id != null ? id : useId2();
  const classes = `guwmi-select-input${hasError ? " error" : ""}${disabled ? " disabled" : ""}${className ? " " + className : ""}`;
  return /* @__PURE__ */ jsxs12("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsx26("label", { className: skeleton ? "guwmi-skeleton" : null, htmlFor: inputId, children: label }),
    /* @__PURE__ */ jsxs12("div", { className: `guwmi-select-container${skeleton ? " guwmi-skeleton" : ""}`, children: [
      /* @__PURE__ */ jsx26(
        "select",
        {
          id: inputId,
          name,
          disabled: disabled || skeleton,
          value,
          onChange,
          onBlur,
          onFocus,
          children: options && options.map((option, index) => /* @__PURE__ */ jsx26("option", { value: option.value, disabled: option.disabled || skeleton, children: option.name }, `${inputId}-${index}`))
        }
      ),
      /* @__PURE__ */ jsx26("span", { className: "guwmi-select-icon", children: /* @__PURE__ */ jsx26(Icon_default, { name: "chevron-down", size: 20 }) })
    ] }),
    hasError && /* @__PURE__ */ jsx26("span", { className: "guwmi-select-error", children: error })
  ] }));
}

// src/components/Pagination/Pagination.tsx
import { jsx as jsx27, jsxs as jsxs13 } from "react/jsx-runtime";
function Pagination(props) {
  const _a = props, {
    currentPage = 1,
    currentSize,
    pageSizes,
    totalItems,
    className,
    skeleton,
    onChange
  } = _a, rest = __objRest(_a, [
    "currentPage",
    "currentSize",
    "pageSizes",
    "totalItems",
    "className",
    "skeleton",
    "onChange"
  ]);
  const [page, setPage] = useState10(currentPage);
  const [size, setSize] = useState10(currentSize);
  const pageRef = useRef13(currentPage);
  const sizeRef = useRef13(currentSize);
  const classes = `guwmi-pagination${skeleton ? " guwmi-skeleton" : ""}${className ? " " + className : ""}`;
  const numPages = useMemo5(() => Math.ceil(totalItems / size), [totalItems, size]);
  const start = useMemo5(() => size * page - size + 1, [size, page]);
  const end = useMemo5(() => size * page - size + size, [size, page]);
  const pageSizeArray = useMemo5(() => {
    const options = pageSizes.filter((s) => s < totalItems).map((s) => ({ name: s.toString(), value: s.toString() }));
    options.push({ name: "All", value: totalItems.toString() });
    return options;
  }, [pageSizes, totalItems]);
  const pageArray = useMemo5(() => {
    return [...Array(Math.ceil(totalItems / size)).keys()].map((i) => {
      return { name: (i + 1).toString(), value: (i + 1).toString() };
    });
  }, [totalItems, size]);
  useEffect12(() => {
    if (size !== sizeRef.current || page !== pageRef.current) {
      sizeRef.current = size;
      pageRef.current = page;
      onChange({ currentPage: page, currentSize: size });
    }
  }, [page, size]);
  return /* @__PURE__ */ jsxs13("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsx27("div", { className: "guwmi-pagination-page-size-contaiiner", children: /* @__PURE__ */ jsx27(
      SelectInput,
      {
        label: "Items per page:",
        options: pageSizeArray,
        onChange: (e) => {
          setPage(1);
          setSize(Number(e.target.value));
        },
        disabled: skeleton
      }
    ) }),
    /* @__PURE__ */ jsx27("div", { className: "guwmi-pagination-current-info", children: /* @__PURE__ */ jsxs13("p", { children: [
      "Showing ",
      /* @__PURE__ */ jsxs13("span", { children: [
        `${start}\u2013${end > totalItems ? totalItems : end}`,
        " "
      ] }),
      " of ",
      /* @__PURE__ */ jsx27("span", { children: totalItems }),
      " items"
    ] }) }),
    /* @__PURE__ */ jsxs13("div", { className: "guwmi-pagination-navigation", children: [
      /* @__PURE__ */ jsx27(
        SelectInput,
        {
          label: `of ${numPages} pages`,
          options: pageArray,
          onChange: (e) => setPage(Number(e.target.value)),
          value: page.toString(),
          disabled: skeleton
        }
      ),
      /* @__PURE__ */ jsx27("button", { "aria-label": "Previous page", onClick: () => setPage(page - 1), disabled: page === 1 || skeleton, children: /* @__PURE__ */ jsx27(Icon_default, { name: "chevron-left", size: 20 }) }),
      /* @__PURE__ */ jsx27("button", { "aria-label": "Next page", onClick: () => setPage(page + 1), disabled: page === numPages || skeleton, children: /* @__PURE__ */ jsx27(Icon_default, { name: "chevron-right", size: 20 }) })
    ] })
  ] }));
}

// src/components/Inputs/Password/PasswordInput.tsx
import { useId as useId3, useRef as useRef14, useState as useState11 } from "react";
import { jsx as jsx28, jsxs as jsxs14 } from "react/jsx-runtime";
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
    className,
    skeleton,
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
    "className",
    "skeleton",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const inputId = id != null ? id : useId3();
  const passwordRef = useRef14(null);
  const classes = `guwmi-password-input${hasError ? " error" : ""}${disabled ? " disabled" : ""}${className ? " " + className : ""}`;
  const [type, setType] = useState11("password");
  const toggleType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  useClickOutside_default(type === "text", toggleType, passwordRef);
  return /* @__PURE__ */ jsxs14("div", __spreadProps(__spreadValues({ className: classes }, rest), { ref: passwordRef, children: [
    /* @__PURE__ */ jsx28("label", { htmlFor: inputId, className: skeleton && !hideLabel ? "guwmi-skeleton" : hideLabel ? "guwmi-sr-only" : null, children: label }),
    /* @__PURE__ */ jsxs14("div", { className: `guwmi-password-container${skeleton ? " guwmi-skeleton" : ""}`, children: [
      /* @__PURE__ */ jsx28(
        "input",
        {
          type,
          id: inputId,
          name,
          placeholder,
          disabled: disabled || skeleton,
          value,
          readOnly,
          maxLength,
          onChange,
          onBlur,
          onFocus
        }
      ),
      /* @__PURE__ */ jsx28("button", { onClick: () => toggleType(), "aria-label": type === "password" ? "Show password" : "Hide password", disabled: disabled || skeleton, children: type === "password" ? /* @__PURE__ */ jsx28(Icon_default, { name: "view" }) : /* @__PURE__ */ jsx28(Icon_default, { name: "hide" }) })
    ] }),
    hasError && /* @__PURE__ */ jsx28("span", { children: error })
  ] }));
}

// src/components/Inputs/RadioGroup/RadioGroup.tsx
import { useId as useId4 } from "react";
import { jsx as jsx29, jsxs as jsxs15 } from "react/jsx-runtime";
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
    className,
    skeleton,
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
    "className",
    "skeleton",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const inputId = id != null ? id : useId4();
  const classes = `guwmi-radio-group${hasError ? " error" : ""}${disabled ? " disabled" : ""}${className ? " " + className : ""}`;
  return /* @__PURE__ */ jsxs15("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsxs15(
      "fieldset",
      {
        id: inputId,
        name,
        disabled: disabled || skeleton,
        children: [
          /* @__PURE__ */ jsx29("legend", { className: skeleton ? "guwmi-skeleton" : null, children: label }),
          /* @__PURE__ */ jsx29("div", { className: `guwmi-radio-container ${layout}`, children: options && options.map((option, index) => /* @__PURE__ */ jsxs15("div", { className: skeleton ? "guwmi-skeleton" : option.disabled ? "disabled" : null, children: [
            /* @__PURE__ */ jsx29(
              "input",
              {
                type: "radio",
                name: name != null ? name : label.toLowerCase(),
                id: `${inputId}-${option.value}`,
                value: option.value,
                disabled: option.disabled || skeleton,
                onChange,
                onBlur,
                onFocus
              }
            ),
            /* @__PURE__ */ jsx29("label", { htmlFor: `${inputId}-${option.value}`, children: option.name })
          ] }, `${inputId}-${index}`)) })
        ]
      }
    ),
    hasError && /* @__PURE__ */ jsx29("span", { children: error })
  ] }));
}

// src/components/Inputs/Search/SearchInput.tsx
import { useId as useId5 } from "react";
import { jsx as jsx30, jsxs as jsxs16 } from "react/jsx-runtime";
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
    skeleton,
    className,
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
    "skeleton",
    "className",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const classes = `guwmi-search-input${skeleton ? " guwmi-skeleton" : ""}${className ? " " + className : ""}`;
  const searchId = id != null ? id : useId5();
  return /* @__PURE__ */ jsxs16("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsx30("span", { children: /* @__PURE__ */ jsx30(Icon_default, { name: "search", size: 18 }) }),
    /* @__PURE__ */ jsx30("label", { htmlFor: searchId, className: "guwmi-sr-only", children: label != null ? label : "Search" }),
    /* @__PURE__ */ jsx30(
      "input",
      {
        id: searchId,
        type: "search",
        name,
        placeholder: placeholder ? placeholder : "Search...",
        disabled: disabled || skeleton,
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

// src/components/Skeletons/SkeletonBlock.tsx
import { useEffect as useEffect13, useRef as useRef15 } from "react";
import { jsx as jsx31 } from "react/jsx-runtime";
function SkeletonBlock(props) {
  const _a = props, { height, width, className } = _a, rest = __objRest(_a, ["height", "width", "className"]);
  const block = useRef15(null);
  const classes = `guwmi-skeleton-block guwmi-skeleton${className ? " " + className : ""}`;
  useEffect13(() => {
    if (height) {
      block.current.style.height = `${height}px`;
    }
    if (width) {
      block.current.style.width = `${width}px`;
    }
  }, [height, width]);
  return /* @__PURE__ */ jsx31("div", __spreadValues({ className: classes, ref: block }, rest));
}

// src/components/Skeletons/SkeletonHeading.tsx
import { jsx as jsx32 } from "react/jsx-runtime";
function SkeletonHeading(props) {
  const _a = props, { heading, className } = _a, rest = __objRest(_a, ["heading", "className"]);
  const classes = `guwmi-skeleton-heading guwmi-skeleton${className ? " " + className : ""}`;
  switch (heading) {
    case "h1":
      return /* @__PURE__ */ jsx32("h1", __spreadProps(__spreadValues({ className: classes }, rest), { children: "Skeleton..." }));
    case "h2":
      return /* @__PURE__ */ jsx32("h2", __spreadProps(__spreadValues({ className: classes }, rest), { children: "Skeleton.." }));
    case "h3":
      return /* @__PURE__ */ jsx32("h3", __spreadProps(__spreadValues({ className: classes }, rest), { children: "Skeleton.." }));
    case "h4":
      return /* @__PURE__ */ jsx32("h4", __spreadProps(__spreadValues({ className: classes }, rest), { children: "Skeleton.." }));
    case "h5":
      return /* @__PURE__ */ jsx32("h5", __spreadProps(__spreadValues({ className: classes }, rest), { children: "Skeleton.." }));
    case "h6":
      return /* @__PURE__ */ jsx32("h6", __spreadProps(__spreadValues({ className: classes }, rest), { children: "Skeleton.." }));
  }
}

// src/components/Skeletons/SkeletonParagraph.tsx
import { jsx as jsx33 } from "react/jsx-runtime";
function SkeletonParagraph(props) {
  const _a = props, { numLines = 5, className } = _a, rest = __objRest(_a, ["numLines", "className"]);
  const classes = `guwmi-skeleton-paragraph${className ? " " + className : ""}`;
  return /* @__PURE__ */ jsx33("p", __spreadProps(__spreadValues({ className: classes }, rest), { children: Array.from({ length: numLines }, (_, index) => index).map((v, i) => /* @__PURE__ */ jsx33("span", { className: "guwmi-skeleton", children: "Skeleton..." }, `guwmi-skeleton-p-${i}`)) }));
}

// src/components/Tabs/Tab.tsx
import { useContext as useContext4 } from "react";

// src/components/Tabs/TabsContext.ts
import { createContext as createContext3 } from "react";
var TabsContext = createContext3(null);
var TabsContext_default = TabsContext;

// src/components/Tabs/Tab.tsx
import { jsx as jsx34 } from "react/jsx-runtime";
function Tab(props) {
  const _a = props, {
    className,
    children,
    index
  } = _a, rest = __objRest(_a, [
    "className",
    "children",
    "index"
  ]);
  const { id, selectedTab, setSelectedTab, skeleton } = useContext4(TabsContext_default);
  const classes = `guwmi-tab${selectedTab === index ? " active" : ""}${className ? " " + className : ""}`;
  return /* @__PURE__ */ jsx34(
    "button",
    __spreadProps(__spreadValues({
      className: classes,
      onClick: () => setSelectedTab(index),
      id: `tabs-${id}-tab-${index}`,
      "aria-selected": selectedTab === index,
      "aria-controls": `tabs-${id}-tabpanel-${index}`,
      disabled: skeleton,
      role: "tab"
    }, rest), {
      children
    })
  );
}

// src/components/Tabs/TabPanels.tsx
import React6, {
  useContext as useContext5,
  useMemo as useMemo6,
  useRef as useRef16,
  useEffect as useEffect14
} from "react";
import { jsx as jsx35 } from "react/jsx-runtime";
function TabPanels(props) {
  const _a = props, { className, children } = _a, rest = __objRest(_a, ["className", "children"]);
  const { skeleton, selectedTab } = useContext5(TabsContext_default);
  const windowWidth = useWindowWidth();
  const panels = useRef16(null);
  const classes = `guwmi-tab-panels${skeleton ? " guwmi-skeleton" : ""}${className ? " " + className : ""}`;
  const childrenWithIndex = useMemo6(() => {
    return React6.Children.map(children, (child, index) => React6.cloneElement(child, { index }));
  }, [children]);
  useEffect14(() => {
    const active = panels.current.querySelector(".active");
    const height = active.offsetHeight;
    panels.current.style.height = `${height}px`;
  }, [selectedTab, windowWidth]);
  return /* @__PURE__ */ jsx35("div", __spreadProps(__spreadValues({ className: classes, ref: panels }, rest), { children: childrenWithIndex }));
}

// src/components/Tabs/TabPanel.tsx
import { useContext as useContext6 } from "react";
import { jsx as jsx36 } from "react/jsx-runtime";
function TabPanel(props) {
  const _a = props, {
    className,
    children,
    index
  } = _a, rest = __objRest(_a, [
    "className",
    "children",
    "index"
  ]);
  const { id, selectedTab } = useContext6(TabsContext_default);
  const classes = `guwmi-tab-panel${selectedTab === index ? " active" : ""}${className ? " " + className : ""}`;
  return /* @__PURE__ */ jsx36(
    "section",
    __spreadProps(__spreadValues({
      className: classes,
      role: "tabpanel",
      hidden: selectedTab !== index,
      "aria-labelledby": `tabs-${id}-tab-${index}`,
      id: `tabs-${id}-tabpanel-${index}`
    }, rest), {
      children
    })
  );
}

// src/components/Tabs/Tabs.tsx
import React7, {
  useContext as useContext7,
  useEffect as useEffect15,
  useMemo as useMemo7,
  useRef as useRef17
} from "react";
import { jsx as jsx37, jsxs as jsxs17 } from "react/jsx-runtime";
function Tabs(props) {
  const _a = props, { className, children } = _a, rest = __objRest(_a, ["className", "children"]);
  const { skeleton, selectedTab } = useContext7(TabsContext_default);
  const tabsContainer = useRef17(null);
  const slider = useRef17(null);
  const classes = `guwmi-tabs${skeleton ? " guwmi-skeleton" : ""}${className ? " " + className : ""}`;
  const childrenWithIndex = useMemo7(() => {
    return React7.Children.map(children, (child, index) => React7.cloneElement(child, { index }));
  }, [children]);
  useEffect15(() => {
    if (tabsContainer.current.querySelector(".guwmi-tab.active")) {
      const activeTab = tabsContainer.current.querySelector(".guwmi-tab.active");
      const left = activeTab.offsetLeft;
      const width = activeTab.offsetWidth;
      slider.current.style.width = `${width}px`;
      slider.current.style.left = `${left}px`;
    }
  }, [tabsContainer, selectedTab]);
  return /* @__PURE__ */ jsxs17("nav", __spreadProps(__spreadValues({ className: classes, role: "tablist", ref: tabsContainer }, rest), { children: [
    /* @__PURE__ */ jsx37("span", { className: "guwmi-tabs-slider", ref: slider }),
    childrenWithIndex
  ] }));
}

// src/components/Tabs/TabsContainer.tsx
import { useState as useState12, useId as useId6 } from "react";
import { jsx as jsx38 } from "react/jsx-runtime";
function TabsContainer(props) {
  const _a = props, {
    className,
    skeleton,
    children
  } = _a, rest = __objRest(_a, [
    "className",
    "skeleton",
    "children"
  ]);
  const [selectedTab, setSelectedTab] = useState12(0);
  const classes = `guwmi-tabs-container${className ? " " + className : ""}`;
  const id = useId6();
  return /* @__PURE__ */ jsx38(TabsContext_default.Provider, { value: { skeleton, id, selectedTab, setSelectedTab }, children: /* @__PURE__ */ jsx38("div", __spreadProps(__spreadValues({ className: classes }, rest), { children })) });
}

// src/components/Table/Table.tsx
import {
  useEffect as useEffect17,
  useId as useId7,
  useMemo as useMemo10,
  useState as useState14
} from "react";

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

// src/hooks/usePagination.ts
import { useState as useState13, useEffect as useEffect16, useRef as useRef18, useCallback as useCallback6, useMemo as useMemo8 } from "react";
function usePagination(sourceData = []) {
  const [data, setData] = useState13([]);
  const [pageSize, setPageSize] = useState13(5);
  const [currentPage, setCurrentPage] = useState13(1);
  const numItems = useRef18(sourceData.length);
  const paginate = useCallback6((e) => {
    setPageSize(e.currentSize);
    setCurrentPage(e.currentPage);
  }, []);
  const start = useMemo8(() => currentPage * pageSize - pageSize, [pageSize, currentPage]);
  const end = useMemo8(() => currentPage * pageSize, [pageSize, currentPage]);
  useEffect16(() => {
    if (!isEmpty_default(sourceData)) {
      setData(sourceData.slice(start, end));
    } else {
      setData([]);
    }
  }, [sourceData, pageSize, currentPage]);
  useEffect16(() => {
    numItems.current = sourceData.length;
  }, [sourceData]);
  return {
    data: {
      values: data,
      pageSize,
      currentPage,
      numItems: numItems.current
    },
    setPageSize,
    setCurrentPage,
    paginate
  };
}

// src/components/Table/TableRow.tsx
import { useMemo as useMemo9 } from "react";
import { Fragment as Fragment4, jsx as jsx39 } from "react/jsx-runtime";
function TableRow(props) {
  const _a = props, {
    headers,
    data,
    tableId
  } = _a, rest = __objRest(_a, [
    "headers",
    "data",
    "tableId"
  ]);
  const cellData = useMemo9(() => {
    const arr = [];
    headers.forEach((h) => {
      if (data[h.key]) {
        arr.push({ id: data.id, col: h.key, value: data[h.key] });
      }
    });
    return arr;
  }, [headers, data]);
  return /* @__PURE__ */ jsx39(Fragment4, { children: cellData && /* @__PURE__ */ jsx39("tr", __spreadProps(__spreadValues({}, rest), { children: cellData.map((cell) => /* @__PURE__ */ jsx39("td", { children: cell.value }, `table-${tableId}-cell-${cell.id}-${cell.col}`)) })) });
}

// src/components/Table/Table.tsx
import { Fragment as Fragment5, jsx as jsx40, jsxs as jsxs18 } from "react/jsx-runtime";
function Table(props) {
  const _a = props, {
    title,
    description,
    headers,
    rows,
    isCondensed,
    hasPagination = false,
    className,
    skeleton
  } = _a, rest = __objRest(_a, [
    "title",
    "description",
    "headers",
    "rows",
    "isCondensed",
    "hasPagination",
    "className",
    "skeleton"
  ]);
  const id = useId7();
  const isSearchable = useMemo10(() => headers.some((header) => (header == null ? void 0 : header.search) === "includes" || (header == null ? void 0 : header.search) === "starts-with"), [headers]);
  const searchHeaders = useMemo10(() => headers.filter((header) => (header == null ? void 0 : header.search) === "includes" || (header == null ? void 0 : header.search) === "starts-with"), [headers]);
  const classes = `guwmi-table-container${isCondensed ? " condensed" : ""}${className ? " " + className : ""}`;
  const [searchValue, setSearchValue] = useState14("");
  const [tableRows, setTableRows] = useState14(rows);
  const { data: paginatedData, paginate } = usePagination(tableRows);
  const handleSearch = () => {
    const updatedRows = tableSearch_default(
      rows,
      searchHeaders,
      searchValue
    );
    setTableRows(updatedRows);
  };
  useEffect17(() => {
    if (isSearchable) {
      handleSearch();
    }
  }, [searchValue]);
  return /* @__PURE__ */ jsxs18("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    (title || description) && /* @__PURE__ */ jsxs18("div", { className: "guwmi-table-header", children: [
      title && /* @__PURE__ */ jsx40("h2", { className: skeleton ? "guwmi-skeleton" : null, children: title }),
      description && /* @__PURE__ */ jsx40("p", { className: skeleton ? "guwmi-skeleton" : null, children: description })
    ] }),
    /* @__PURE__ */ jsxs18("div", { className: "guwmi-table-content", children: [
      headers.length > 0 && isSearchable && /* @__PURE__ */ jsx40("div", { className: "guwmi-table-search", children: /* @__PURE__ */ jsx40(SearchInput, { onChange: (e) => setSearchValue(e.target.value), skeleton }) }),
      /* @__PURE__ */ jsx40("table", { cellPadding: 0, cellSpacing: 0, tabIndex: -1, children: skeleton ? /* @__PURE__ */ jsxs18(Fragment5, { children: [
        /* @__PURE__ */ jsx40("thead", { children: /* @__PURE__ */ jsx40("tr", { children: Array.from({ length: 4 }, (_, index) => index).map((v, i) => /* @__PURE__ */ jsx40("th", { className: "guwmi-skeleton" }, `guwmi-table-skelton-header-${i}`)) }) }),
        /* @__PURE__ */ jsx40("tbody", { children: Array.from({ length: 5 }, (_, index) => index).map((v, i) => /* @__PURE__ */ jsx40("tr", { children: Array.from({ length: 4 }, (_, index) => index).map((v2, i2) => /* @__PURE__ */ jsx40("td", { className: "guwmi-skeleton" }, `guwmi-table-skelton-td-${i2}`)) }, `guwmi-table-skelton-row-${i}`)) })
      ] }) : headers.length > 0 ? /* @__PURE__ */ jsxs18(Fragment5, { children: [
        /* @__PURE__ */ jsx40("thead", { children: /* @__PURE__ */ jsx40("tr", { children: headers.map((header, i) => /* @__PURE__ */ jsx40("th", { children: header.title }, `table-${id}-header-${i}`)) }) }),
        /* @__PURE__ */ jsx40("tbody", { children: !hasPagination && tableRows.length > 0 ? tableRows.map((row) => /* @__PURE__ */ jsx40(TableRow, { headers, data: row, tableId: id }, `table-${id}-row-${row.id}`)) : hasPagination && paginatedData.values.length > 0 ? paginatedData.values.map((row) => /* @__PURE__ */ jsx40(TableRow, { headers, data: row, tableId: id }, `table-${id}-row-${row.id}`)) : /* @__PURE__ */ jsx40("tr", { children: /* @__PURE__ */ jsx40("td", { colSpan: headers.length, children: "There is no data to display in the table" }) }) })
      ] }) : /* @__PURE__ */ jsx40("tbody", { children: /* @__PURE__ */ jsx40("tr", { children: /* @__PURE__ */ jsx40("td", { children: "No column headers provided for the table" }) }) }) }),
      hasPagination && /* @__PURE__ */ jsx40(
        Pagination,
        {
          totalItems: tableRows.length,
          pageSizes: [5, 10, 20, 50],
          currentPage: paginatedData.currentPage,
          currentSize: paginatedData.pageSize,
          onChange: paginate,
          skeleton
        }
      )
    ] })
  ] }));
}

// src/components/Tag/Tag.tsx
import { useRef as useRef19 } from "react";
import { jsx as jsx41 } from "react/jsx-runtime";
function Tag(props) {
  const _a = props, {
    value,
    size = "md",
    variant = "neutral",
    href,
    target,
    disabled,
    className,
    skeleton,
    onClick = null
  } = _a, rest = __objRest(_a, [
    "value",
    "size",
    "variant",
    "href",
    "target",
    "disabled",
    "className",
    "skeleton",
    "onClick"
  ]);
  const classes = `guwmi-tag ${size} ${variant}${skeleton ? " guwmi-skeleton" : ""}${className ? " " + className : ""}`;
  const button = useRef19(null);
  const handleClick = (e) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  };
  return href && (!disabled || skeleton) ? /* @__PURE__ */ jsx41("a", __spreadProps(__spreadValues({ className: classes, href, ref: button, target }, rest), { children: value })) : (onClick || disabled) && !skeleton ? /* @__PURE__ */ jsx41("button", __spreadProps(__spreadValues({ className: classes, onClick: (e) => handleClick(e), ref: button, disabled }, rest), { children: value })) : /* @__PURE__ */ jsx41("span", __spreadProps(__spreadValues({ className: classes }, rest), { children: value }));
}

// src/components/Inputs/TextArea/TextArea.tsx
import { useId as useId8 } from "react";
import { jsx as jsx42, jsxs as jsxs19 } from "react/jsx-runtime";
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
    className,
    skeleton,
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
    "className",
    "skeleton",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const inputId = id != null ? id : useId8();
  const classes = `guwmi-textarea${hasError ? " error" : ""}${disabled ? " disabled" : ""}${className ? " " + className : ""}`;
  return /* @__PURE__ */ jsxs19("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsx42("label", { htmlFor: inputId, className: skeleton && !hideLabel ? "guwmi-skeleton" : hideLabel ? "guwmi-sr-only" : null, children: label }),
    /* @__PURE__ */ jsx42("div", { className: `guwmi-textarea-container${skeleton ? " guwmi-skeleton" : ""}`, children: /* @__PURE__ */ jsx42(
      "textarea",
      {
        id: inputId,
        name,
        placeholder,
        disabled: disabled || skeleton,
        value,
        readOnly,
        maxLength,
        rows,
        onChange,
        onBlur,
        onFocus
      }
    ) }),
    hasError && /* @__PURE__ */ jsx42("span", { children: error })
  ] }));
}

// src/components/Inputs/Text/TextInput.tsx
import { useId as useId9 } from "react";
import { jsx as jsx43, jsxs as jsxs20 } from "react/jsx-runtime";
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
    className,
    skeleton,
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
    "className",
    "skeleton",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const inputId = id != null ? id : useId9();
  const classes = `guwmi-text-input${hasError ? " error" : ""}${disabled ? " disabled" : ""}${className ? " " + className : ""}`;
  return /* @__PURE__ */ jsxs20("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsx43("label", { htmlFor: inputId, className: skeleton && !hideLabel ? "guwmi-skeleton" : hideLabel ? "guwmi-sr-only" : null, children: label }),
    /* @__PURE__ */ jsx43("div", { className: `guwmi-text-input-container${skeleton ? " guwmi-skeleton" : ""}`, children: /* @__PURE__ */ jsx43(
      "input",
      {
        type: "text",
        id: inputId,
        name,
        placeholder,
        disabled: disabled || skeleton,
        value,
        readOnly,
        maxLength,
        onChange,
        onBlur,
        onFocus
      }
    ) }),
    hasError && /* @__PURE__ */ jsx43("span", { children: error })
  ] }));
}

// src/components/Inputs/Toggle/Toggle.tsx
import { useId as useId10 } from "react";
import { jsx as jsx44, jsxs as jsxs21 } from "react/jsx-runtime";
function Toggle(props) {
  const _a = props, {
    label,
    labelAlign = "left",
    id,
    name,
    disabled,
    toggled,
    className,
    skeleton,
    onChange,
    onBlur,
    onFocus
  } = _a, rest = __objRest(_a, [
    "label",
    "labelAlign",
    "id",
    "name",
    "disabled",
    "toggled",
    "className",
    "skeleton",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const classes = `guwmi-toggle ${labelAlign}${disabled ? " disabled" : ""}${className ? " " + className : ""}`;
  const inputId = id != null ? id : useId10();
  const lowerCaseLabel = label.toLowerCase().replaceAll(" ", "-");
  return /* @__PURE__ */ jsxs21("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsx44("div", { className: `guwmi-toggle-container${skeleton ? " guwmi-skeleton" : ""}`, children: /* @__PURE__ */ jsx44(
      "input",
      {
        type: "checkbox",
        id: inputId,
        name: name != null ? name : lowerCaseLabel,
        disabled: disabled || skeleton,
        checked: toggled,
        onChange,
        onBlur,
        onFocus
      }
    ) }),
    /* @__PURE__ */ jsx44("label", { className: skeleton ? "guwmi-skeleton" : null, htmlFor: inputId, children: label })
  ] }));
}

// src/components/Tooltip/Tooltip.tsx
import { useId as useId11 } from "react";
import { jsx as jsx45, jsxs as jsxs22 } from "react/jsx-runtime";
function Tooltip(props) {
  const _a = props, {
    text,
    align = "top",
    className,
    children
  } = _a, rest = __objRest(_a, [
    "text",
    "align",
    "className",
    "children"
  ]);
  const id = useId11();
  const classes = `guwmi-tooltip ${align}${className ? " " + className : ""}`;
  return /* @__PURE__ */ jsxs22("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ jsx45("span", { role: "tooltip", id, children: text }),
    /* @__PURE__ */ jsx45("div", { "aria-describedby": id, children })
  ] }));
}

// src/components/VerticalGrid/VerticalGrid.tsx
import { jsx as jsx46 } from "react/jsx-runtime";
function VerticalGrid(props) {
  const _a = props, {
    children,
    spacing = 1,
    padding = 0,
    className
  } = _a, rest = __objRest(_a, [
    "children",
    "spacing",
    "padding",
    "className"
  ]);
  const getClasses = () => {
    let classString = "guwmi-vertical-grid ";
    switch (spacing) {
      case 0:
        classString += "space-0";
        break;
      case 1:
        classString += "space-1";
        break;
      case 3:
        classString += "space-3";
        break;
      case 4:
        classString += "space-4";
        break;
      case 5:
        classString += "space-5";
        break;
      case 6:
        classString += "space-6";
        break;
      default:
        classString += "space-2";
    }
    switch (padding) {
      case 0:
        classString += " pad-0";
        break;
      case 1:
        classString += " pad-1";
        break;
      case 3:
        classString += " pad-3";
        break;
      case 4:
        classString += " pad-4";
        break;
      case 5:
        classString += " pad-5";
        break;
      case 6:
        classString += " pad-6";
        break;
      default:
        classString += " pad-2";
    }
    if (className) {
      classString += " " + className;
    }
    return classString;
  };
  const classes = getClasses();
  return /* @__PURE__ */ jsx46("div", __spreadProps(__spreadValues({ className: classes }, rest), { children }));
}
export {
  Accordion,
  AccordionItem,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Card,
  CardSection,
  Checkbox,
  Container,
  Drawer,
  Grid,
  Icon_default as Icon,
  IconButton,
  InfoBlock,
  Loading,
  Menu2 as Menu,
  MenuDropdown,
  MenuItem,
  MenuTrigger,
  Modal,
  Navbar,
  NavbarGroup,
  NavbarItem,
  Notification,
  Pagination,
  PasswordInput,
  RadioGroup,
  SearchInput,
  SelectInput,
  SkeletonBlock,
  SkeletonHeading,
  SkeletonParagraph,
  Tab,
  TabPanel,
  TabPanels,
  Table,
  Tabs,
  TabsContainer,
  Tag,
  TextArea,
  TextInput,
  Toggle,
  Tooltip,
  VerticalGrid
};
//# sourceMappingURL=index.js.map