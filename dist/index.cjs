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
  Breadcrumbs: () => Breadcrumbs,
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  Card: () => Card,
  CardSection: () => CardSection,
  Checkbox: () => Checkbox,
  Container: () => Container,
  Drawer: () => Drawer,
  Grid: () => Grid,
  Icon: () => Icon_default,
  IconButton: () => IconButton,
  InfoBlock: () => InfoBlock,
  Loading: () => Loading,
  Menu: () => Menu2,
  MenuDropdown: () => MenuDropdown,
  MenuItem: () => MenuItem,
  MenuTrigger: () => MenuTrigger,
  Modal: () => Modal,
  Navbar: () => Navbar,
  NavbarGroup: () => NavbarGroup,
  NavbarItem: () => NavbarItem,
  Notification: () => Notification,
  Pagination: () => Pagination,
  PasswordInput: () => PasswordInput,
  RadioGroup: () => RadioGroup,
  SearchInput: () => SearchInput,
  SelectInput: () => SelectInput,
  SkeletonBlock: () => SkeletonBlock,
  SkeletonHeading: () => SkeletonHeading,
  SkeletonParagraph: () => SkeletonParagraph,
  Tab: () => Tab,
  TabPanel: () => TabPanel,
  TabPanels: () => TabPanels,
  Table: () => Table,
  Tabs: () => Tabs,
  TabsContainer: () => TabsContainer,
  Tag: () => Tag,
  TextArea: () => TextArea,
  TextInput: () => TextInput,
  Toggle: () => Toggle,
  Tooltip: () => Tooltip,
  VerticalGrid: () => VerticalGrid
});
module.exports = __toCommonJS(index_exports);
var import_guwmi = require("./guwmi-4HCCVGA7.css");

// src/components/Accordion/Accordion.tsx
var import_react2 = require("react");

// src/components/Accordion/AccordionContext.ts
var import_react = require("react");
var AccordionContext = (0, import_react.createContext)(null);
var AccordionContext_default = AccordionContext;

// src/components/Accordion/Accordion.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
  const [openAccordions, setOpenAccordions] = (0, import_react2.useState)([]);
  const classes = `guwmi-accordion-container${className ? " " + className : ""}`;
  (0, import_react2.useEffect)(() => {
    if (defaultOpen) {
      setOpenAccordions([...openAccordions, defaultOpen]);
    }
  }, [defaultOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContext_default.Provider, { value: { skeleton, openAccordions, setOpenAccordions }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children })) });
}

// src/components/Accordion/AccrodionItem.tsx
var import_react5 = require("react");

// src/hooks/useWindowWidth.ts
var import_react3 = require("react");
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = (0, import_react3.useState)();
  const handleResize = () => setWindowWidth(window.innerWidth);
  (0, import_react3.useEffect)(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}

// src/components/Icon/Icon.tsx
var import_react4 = require("react");

// src/components/Icon/paths.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function AlertCircle() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 8v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 16h.01" })
  ] });
}
function AlertSquare() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 8v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 16h.01" })
  ] });
}
function AlertTriangle() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 9v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 16h.01" })
  ] });
}
function Check() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M5 12l5 5l10 -10" })
  ] });
}
function ChevronDown() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M6 9l6 6l6 -6" })
  ] });
}
function ChevronLeft() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M15 6l-6 6l6 6" })
  ] });
}
function ChevronRight() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M9 6l6 6l-6 6" })
  ] });
}
function ChevronUp() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M6 15l6 -6l6 6" })
  ] });
}
function Copy() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" })
  ] });
}
function Close() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M18 6l-12 12" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M6 6l12 12" })
  ] });
}
function Dots() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" })
  ] });
}
function ExternalLink() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M11 13l9 -9" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M15 4h5v5" })
  ] });
}
function Hide() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3 3l18 18" })
  ] });
}
function Home() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M5 12l-2 0l9 -9l9 9l-2 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" })
  ] });
}
function Info() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 9h.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M11 12h1v4h1" })
  ] });
}
function Login() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3 12h13l-3 -3" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M13 15l3 -3" })
  ] });
}
function Menu() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M4 6l16 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M4 12l16 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M4 18l16 0" })
  ] });
}
function ProgressAlert() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M14 3.223a9.003 9.003 0 0 1 0 17.554" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 8v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 16v.01" })
  ] });
}
function ProgressCheck() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M14 3.223a9.003 9.003 0 0 1 0 17.554" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M9 12l2 2l4 -4" })
  ] });
}
function Progress() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M14 3.223a9.003 9.003 0 0 1 0 17.554" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" })
  ] });
}
function Search() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M21 21l-6 -6" })
  ] });
}
function Settings() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" })
  ] });
}
function View() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" })
  ] });
}

// src/components/Icon/Icon.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Icon = (0, import_react4.forwardRef)((props, ref) => {
  const _a = props, {
    name,
    size = 24,
    stroke = "2",
    color = "currentColor",
    className
  } = _a, rest = __objRest(_a, [
    "name",
    "size",
    "stroke",
    "color",
    "className"
  ]);
  const classes = `icon guwmi-icon guwmi-icon-${name}${className ? " " + className : ""}`;
  const getPaths = (0, import_react4.useCallback)((iconName) => {
    switch (iconName) {
      case "alert-circle":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(AlertCircle, {});
      case "alert-square":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(AlertSquare, {});
      case "alert-triangle":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(AlertTriangle, {});
      case "check":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Check, {});
      case "chevron-down":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ChevronDown, {});
      case "chevron-left":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ChevronLeft, {});
      case "chevron-right":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ChevronRight, {});
      case "chevron-up":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ChevronUp, {});
      case "copy":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Copy, {});
      case "close":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Close, {});
      case "dots":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Dots, {});
      case "external-link":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ExternalLink, {});
      case "hide":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Hide, {});
      case "home":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Home, {});
      case "info":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Info, {});
      case "login":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Login, {});
      case "menu":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Menu, {});
      case "progress-alert":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ProgressAlert, {});
      case "progress-check":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ProgressCheck, {});
      case "progress":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Progress, {});
      case "search":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Search, {});
      case "settings":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Settings, {});
      case "view":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(View, {});
    }
  }, []);
  const paths = getPaths(name);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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

// src/components/Accordion/AccrodionItem.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
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
  const { skeleton, openAccordions, setOpenAccordions } = (0, import_react5.useContext)(AccordionContext_default);
  const windowWidth = useWindowWidth();
  const panelRef = (0, import_react5.useRef)(null);
  const contentRef = (0, import_react5.useRef)(null);
  const [isOpen, setIsOpen] = (0, import_react5.useState)(false);
  const [isAnimating, setIsAnimating] = (0, import_react5.useState)(false);
  const classes = `guwmi-accordion-item${skeleton ? " guwmi-skeleton" : ""}${className ? " " + className : ""}`;
  (0, import_react5.useEffect)(() => {
    if (openAccordions.includes(id)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [openAccordions]);
  const open = (0, import_react5.useCallback)(() => {
    setOpenAccordions([...openAccordions, id]);
    setIsAnimating(true);
  }, [id, openAccordions]);
  const close = (0, import_react5.useCallback)(() => {
    setOpenAccordions(openAccordions.filter((value) => value !== id));
    setIsAnimating(true);
  }, [id, openAccordions]);
  (0, import_react5.useEffect)(() => {
    var _a2, _b;
    (_a2 = panelRef.current) == null ? void 0 : _a2.addEventListener("transitioncancel", () => setIsAnimating(false));
    (_b = panelRef.current) == null ? void 0 : _b.addEventListener("transitionend", () => setIsAnimating(false));
  }, [panelRef.current]);
  (0, import_react5.useEffect)(() => {
    if (contentRef.current && isOpen) {
      const height = contentRef.current.offsetHeight;
      panelRef.current.style.height = `${height}px`;
    } else {
      panelRef.current.style.height = `0px`;
    }
  }, [contentRef.current, isOpen, windowWidth]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "button",
      {
        onClick: () => isOpen ? close() : open(),
        id: `guwmi-accordion-controller-${id}`,
        "aria-controls": `guwmi-accordion-panel-${id}`,
        "aria-expanded": isOpen,
        className: isOpen ? "active" : null,
        children: [
          title,
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon_default, { name: "chevron-right", size: 20 })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "section",
      {
        hidden: !isOpen && !isAnimating,
        id: `guwmi-accordion-panel-${id}`,
        "aria-labelledby": `guwmi-accordion-controller-${id}`,
        ref: panelRef,
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "guwmi-accordion-panel-content", ref: contentRef, children })
      }
    )
  ] }));
}

// src/components/Breadcrumbs/Breadcrumbs.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("nav", __spreadProps(__spreadValues({ className: classes, "aria-label": ariaLabel }, rest), { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ol", { children: links.map((link, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "li",
    {
      className: skeleton && hasBackground ? "guwmi-skeleton alt" : skeleton ? "guwmi-skeleton" : null,
      children: index + 1 !== links.length ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
        link.href && !link.disabled ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: link.href, children: link.text }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { onClick: link.onClick, disabled: link.disabled, children: link.text }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon_default, { name: "chevron-right", "aria-hidden": "true", size: 16 })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { "aria-current": "location", className: "guwmi-breadcrumb-current", children: link.text })
    },
    `${link.text.toLowerCase().replaceAll(" ", "")}-${index}`
  )) }) }));
}

// src/components/Button/Button.tsx
var import_react6 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  const button = (0, import_react6.useRef)(null);
  const handleClick = (e) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  };
  return href && !disabled && !skeleton ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", __spreadProps(__spreadValues({ className: classes, href, target }, rest), { children })) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", __spreadProps(__spreadValues({ className: classes, onClick: (e) => handleClick(e), ref: button, disabled: disabled || skeleton }, rest), { children }));
}

// src/components/ButtonGroup/ButtonGroup.tsx
var import_react7 = __toESM(require("react"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
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
  const buttonChildren = (0, import_react7.useMemo)(() => import_react7.default.Children.map(children, (child) => {
    return import_react7.default.cloneElement(child, {
      size,
      color,
      variant,
      theme,
      skeleton
    });
  }), [children]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: buttonChildren }));
}

// src/components/Cards/Card.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    image && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", { src: image, alt: title ? "Image that represents " + title : "Image representing the content for this card", className: "guwmi-card-image" }),
    (title || subTitle) && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "guwmi-card-section guwmi-card-title", children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { children: title }),
      subTitle && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { children: subTitle })
    ] }),
    children
  ] }));
}

// src/components/Cards/CardSection.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function CardSection(props) {
  const _a = props, { className, children } = _a, rest = __objRest(_a, ["className", "children"]);
  const classes = `guwmi-card-section${className ? " " + className : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children }));
}

// src/components/Inputs/Checkbox/Checkbox.tsx
var import_react8 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
function Checkbox(props) {
  const _a = props, {
    label,
    id,
    name,
    disabled,
    value,
    checked,
    readOnly,
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
    "checked",
    "readOnly",
    "className",
    "skeleton",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const classes = `guwmi-checkbox-input${disabled ? " disabled" : ""}${className ? " " + className : ""}`;
  const inputId = id != null ? id : (0, import_react8.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: `guwmi-checkbox-container${skeleton ? " guwmi-skeleton" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "guwmi-checkmark", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon_default, { name: "check", size: 15, stroke: "3" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "input",
        {
          type: "checkbox",
          id: inputId,
          name: name != null ? name : label,
          value: value != null ? value : label,
          readOnly,
          disabled: disabled || skeleton,
          checked,
          onChange,
          onBlur,
          onFocus
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { className: skeleton ? "guwmi-skeleton" : null, htmlFor: inputId, children: label })
  ] }));
}

// src/components/Container/Container.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function Container(props) {
  const _a = props, {
    header,
    sidebar,
    className,
    children
  } = _a, rest = __objRest(_a, [
    "header",
    "sidebar",
    "className",
    "children"
  ]);
  const classes = `guwmi-container${className ? " " + className : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    header && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("header", { className: "guwmi-container-header", children: header }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
      sidebar && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("aside", { className: "guwmi-container-sidebar", children: sidebar }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("main", { className: "guwmi-container-content", children })
    ] })
  ] }));
}

// src/components/Drawer/Drawer.tsx
var import_react14 = require("react");

// src/hooks/useAnimation.ts
var import_react9 = require("react");
var useAnimation = (componentState, classString, elementRef) => {
  const [isInDOM, setIsInDOM] = (0, import_react9.useState)(componentState);
  const [hasClass, setHasClass] = (0, import_react9.useState)(false);
  const initialLoad = (0, import_react9.useRef)(true);
  const listnerAdded = (0, import_react9.useRef)(false);
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
  (0, import_react9.useEffect)(() => {
    initialLoad.current = false;
  }, []);
  (0, import_react9.useEffect)(() => {
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
var import_react10 = require("react");
var useFocusTrap = (open, onClose, elementRef) => {
  const triggerRef = (0, import_react10.useRef)(null);
  const handleTab = (0, import_react10.useCallback)((e) => {
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
  const handleEscape = (0, import_react10.useCallback)((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, []);
  (0, import_react10.useEffect)(() => {
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
var import_react11 = require("react");
var useClickOutside = (enabled, onClick, elementRef) => {
  const triggerRef = (0, import_react11.useRef)(null);
  const closeOutClick = (0, import_react11.useCallback)((e) => {
    var _a;
    if (e.target !== triggerRef.current && !((_a = elementRef.current) == null ? void 0 : _a.contains(e.target))) {
      onClick();
    }
  }, [elementRef.current]);
  (0, import_react11.useEffect)(() => {
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
var import_react12 = require("react");
var import_react_dom = __toESM(require("react-dom"), 1);
function BodyPortal(props) {
  const { children } = props;
  const [hasDocument, setHasDocument] = (0, import_react12.useState)(false);
  (0, import_react12.useEffect)(() => {
    setHasDocument(typeof document !== "undefined");
  }, []);
  return hasDocument ? import_react_dom.default.createPortal(children, document.body) : null;
}

// src/hooks/usePreventScroll.ts
var import_react13 = require("react");
var usePreventScroll = (open, enabled) => {
  (0, import_react13.useEffect)(() => {
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
var import_jsx_runtime12 = require("react/jsx-runtime");
function Drawer(props) {
  const _a = props, {
    open,
    preventScroll,
    position = "left",
    className,
    onClose,
    children
  } = _a, rest = __objRest(_a, [
    "open",
    "preventScroll",
    "position",
    "className",
    "onClose",
    "children"
  ]);
  const classes = `guwmi-drawer ${position}${className ? " " + className : ""}`;
  const drawerOverlay = (0, import_react14.useRef)(null);
  const drawer = (0, import_react14.useRef)(null);
  const { isVisible } = useAnimation_default(open, "open", drawerOverlay);
  useFocusTrap_default(open, onClose, drawer);
  useClickOutside_default(open, onClose, drawer);
  usePreventScroll_default(open, preventScroll);
  return isVisible && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(BodyPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", __spreadProps(__spreadValues({ className: "guwmi-drawer-overlay", ref: drawerOverlay }, rest), { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("aside", { className: classes, ref: drawer, "aria-modal": "true", tabIndex: 0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "button",
      {
        className: "guwmi-drawer-close-button",
        "aria-label": "Close drawer",
        onClick: () => onClose(),
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Icon_default, { name: "close", size: 20 })
      }
    ),
    children
  ] }) })) });
}

// src/components/Grid/Grid.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children }));
}

// src/components/IconButton/IconButton.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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

// src/components/InfoBlock/InfoBlock.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Icon_default, { name: iconName }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "guwmi-info-block-label", children: label }),
      children
    ] })
  ] }));
}

// src/components/Loading/Loading.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
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
  return active && (position !== "full-screen" ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "guwmi-spinner" }) })) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(BodyPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "guwmi-spinner" }) })) }));
}

// src/components/Menu/Menu.tsx
var import_react16 = require("react");

// src/components/Menu/MenuContext.ts
var import_react15 = require("react");
var MenuContext = (0, import_react15.createContext)(null);
var MenuContext_default = MenuContext;

// src/components/Menu/Menu.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function Menu2(props) {
  const _a = props, {
    children,
    position = "bottom-right",
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
  const [isOpen, setIsOpen] = (0, import_react16.useState)(false);
  const classes = `guwmi-menu-container ${position}${className ? " " + className : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(MenuContext_default.Provider, { value: { isOpen, setIsOpen, ariaLabel }, children }) }));
}

// src/components/Menu/MenuDropdown.tsx
var import_react18 = require("react");

// src/hooks/useTabThrough.ts
var import_react17 = require("react");
var useTabThrough = (open, onClose, elementRef) => {
  const triggerRef = (0, import_react17.useRef)(null);
  const handleTab = (0, import_react17.useCallback)((e) => {
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
  const handleEscape = (0, import_react17.useCallback)((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, []);
  (0, import_react17.useEffect)(() => {
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
var import_jsx_runtime18 = require("react/jsx-runtime");
function MenuDropdown(props) {
  const _a = props, { className, children } = _a, rest = __objRest(_a, ["className", "children"]);
  const { isOpen, setIsOpen, ariaLabel } = (0, import_react18.useContext)(MenuContext_default);
  const classes = `guwmi-menu-dropdown${className ? " " + className : ""}`;
  const dropDownRef = (0, import_react18.useRef)(null);
  const { isVisible } = useAnimation_default(isOpen, "open", dropDownRef);
  useTabThrough_default(isOpen, () => setIsOpen(false), dropDownRef);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_jsx_runtime18.Fragment, { children: isVisible && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "nav",
    __spreadProps(__spreadValues({
      className: classes,
      ref: dropDownRef,
      "aria-label": ariaLabel
    }, rest), {
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("ul", { role: "menubar", children })
    })
  ) });
}

// src/components/Menu/MenuItem.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("li", __spreadProps(__spreadValues({ className: classes }, rest), { children: href && !disabled ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: "guwmi-menu-btn", href, target, children }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "guwmi-menu-btn", onClick, disabled, children }) }));
}

// src/components/Menu/MenuTrigger.tsx
var import_react19 = __toESM(require("react"), 1);
var import_jsx_runtime20 = require("react/jsx-runtime");
function MenuTrigger(props) {
  const _a = props, { className, children } = _a, rest = __objRest(_a, ["className", "children"]);
  const { isOpen, setIsOpen } = (0, import_react19.useContext)(MenuContext_default);
  const childrenWithClick = (0, import_react19.useMemo)(() => {
    return import_react19.default.Children.map(children, (child) => import_react19.default.cloneElement(child, { onClick: () => setIsOpen(!isOpen) }));
  }, [children, isOpen]);
  const classes = `guwmi-menu-trigger${className ? " " + className : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: childrenWithClick }));
}

// src/components/Modal/Modal.tsx
var import_react20 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
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
  const modalOverlay = (0, import_react20.useRef)(null);
  const modal = (0, import_react20.useRef)(null);
  const { isVisible } = useAnimation_default(open, "open", modalOverlay);
  useFocusTrap_default(open, onClose, modal);
  useClickOutside_default(open, onClose, modal);
  usePreventScroll_default(open, preventScroll);
  return isVisible && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BodyPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", __spreadProps(__spreadValues({ className: "guwmi-modal-overlay", ref: modalOverlay }, rest), { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("dialog", { className: classes, ref: modal, children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "button",
      {
        className: "guwmi-modal-close-button",
        "aria-label": "Close modal",
        onClick: () => onClose(),
        children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icon_default, { name: "close", size: 20 })
      }
    ),
    children
  ] }) })) });
}

// src/components/Navbar/Navbar.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    "nav",
    __spreadProps(__spreadValues({
      className: classes,
      "aria-label": ariaLabel
    }, rest), {
      children: skeleton ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("ul", { children: Array.from({ length: 5 }, (_, index) => index).map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("li", { className: "guwmi-navbar-item", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { className: "guwmi-navbar-button guwmi-skeleton" }) }, `navbar-skeleton-${i}`)) }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("ul", { children })
    })
  );
}

// src/components/Navbar/NavbarGroup.tsx
var import_react21 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
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
  const itemRef = (0, import_react21.useRef)(null);
  const contentRef = (0, import_react21.useRef)(null);
  const buttonRef = (0, import_react21.useRef)(null);
  const [isOpen, setIsOpen] = (0, import_react21.useState)(defaultOpen);
  const { isVisible } = useAnimation_default(isOpen, "open", itemRef);
  const classes = `guwmi-navbar-group${isOpen ? " open" : ""}${className ? " " + className : ""}`;
  (0, import_react21.useEffect)(() => {
    const defaultHeight = buttonRef.current.offsetHeight;
    if (contentRef.current && isOpen) {
      const height = contentRef.current.offsetHeight;
      itemRef.current.style.height = `${height + defaultHeight}px`;
    } else {
      itemRef.current.style.height = `${defaultHeight}px`;
    }
  }, [isOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("li", __spreadProps(__spreadValues({ className: classes, ref: itemRef }, rest), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
      "button",
      {
        className: "guwmi-navbar-button",
        "aria-expanded": isOpen,
        onClick: () => setIsOpen(!isOpen),
        ref: buttonRef,
        children: [
          label,
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Icon_default, { name: "chevron-right", size: 18 })
        ]
      }
    ),
    isVisible && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("ul", { ref: contentRef, children })
  ] }));
}

// src/components/Navbar/NavbarItem.tsx
var import_react22 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
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
  const button = (0, import_react22.useRef)(null);
  const handleClick = (e) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", __spreadProps(__spreadValues({ className: classes }, rest), { children: href && !disabled ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("a", { className: "guwmi-navbar-button", href, target, children }) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("button", { className: "guwmi-navbar-button", onClick: (e) => handleClick(e), ref: button, disabled, children }) }));
}

// src/components/Notification/Notification.tsx
var import_react23 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
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
  const [isVisible, setIsVisible] = (0, import_react23.useState)(true);
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
  const iconName = (0, import_react23.useRef)(getIconName());
  (0, import_react23.useEffect)(() => {
    iconName.current = getIconName();
  }, [kind]);
  return isVisible ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("dialog", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Icon_default, { name: iconName.current, size: 20, stroke: "3" }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h2", { children: titleText }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { children: content }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      "button",
      {
        onClick: () => setIsVisible(false),
        "aria-label": "Close notification",
        tabIndex: 0,
        children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Icon_default, { name: "close", size: 18 })
      }
    )
  ] })) : null;
}

// src/components/Pagination/Pagination.tsx
var import_react25 = require("react");

// src/components/Inputs/Select/SelectInput.tsx
var import_react24 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
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
  const inputId = id != null ? id : (0, import_react24.useId)();
  const classes = `guwmi-select-input${hasError ? " error" : ""}${disabled ? " disabled" : ""}${className ? " " + className : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("label", { className: skeleton ? "guwmi-skeleton" : null, htmlFor: inputId, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: `guwmi-select-container${skeleton ? " guwmi-skeleton" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "select",
        {
          id: inputId,
          name,
          disabled,
          value,
          onChange,
          onBlur,
          onFocus,
          children: options && options.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("option", { value: option.value, disabled: option.disabled, children: option.name }, `${id}-${index}`))
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "guwmi-select-icon", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Icon_default, { name: "chevron-down", size: 20 }) })
    ] }),
    hasError && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "guwmi-select-error", children: error })
  ] }));
}

// src/components/Pagination/Pagination.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
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
  const [page, setPage] = (0, import_react25.useState)(currentPage);
  const [size, setSize] = (0, import_react25.useState)(currentSize);
  const pageRef = (0, import_react25.useRef)(currentPage);
  const sizeRef = (0, import_react25.useRef)(currentSize);
  const classes = `guwmi-pagination${skeleton ? " guwmi-skeleton" : ""}${className ? " " + className : ""}`;
  const numPages = (0, import_react25.useMemo)(() => Math.ceil(totalItems / size), [totalItems, size]);
  const start = (0, import_react25.useMemo)(() => size * page - size + 1, [size, page]);
  const end = (0, import_react25.useMemo)(() => size * page - size + size, [size, page]);
  const pageSizeArray = (0, import_react25.useMemo)(() => {
    const options = pageSizes.filter((s) => s < totalItems).map((s) => ({ name: s.toString(), value: s.toString() }));
    options.push({ name: "All", value: totalItems.toString() });
    return options;
  }, [pageSizes, totalItems]);
  const pageArray = (0, import_react25.useMemo)(() => {
    return [...Array(Math.ceil(totalItems / size)).keys()].map((i) => {
      return { name: (i + 1).toString(), value: (i + 1).toString() };
    });
  }, [totalItems, size]);
  (0, import_react25.useEffect)(() => {
    if (size !== sizeRef.current || page !== pageRef.current) {
      sizeRef.current = size;
      pageRef.current = page;
      onChange({ currentPage: page, currentSize: size });
    }
  }, [page, size]);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "guwmi-pagination-page-size-contaiiner", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      SelectInput,
      {
        label: "Items per page:",
        options: pageSizeArray,
        onChange: (e) => {
          setPage(1);
          setSize(Number(e.target.value));
        }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "guwmi-pagination-current-info", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { children: [
      "Showing ",
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { children: [
        `${start}\u2013${end > totalItems ? totalItems : end}`,
        " "
      ] }),
      " of ",
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: totalItems }),
      " items"
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "guwmi-pagination-navigation", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        SelectInput,
        {
          label: `of ${numPages} pages`,
          options: pageArray,
          onChange: (e) => setPage(Number(e.target.value)),
          value: page.toString()
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("button", { "aria-label": "Previous page", onClick: () => setPage(page - 1), disabled: page === 1, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Icon_default, { name: "chevron-left", size: 20 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("button", { "aria-label": "Next page", onClick: () => setPage(page + 1), disabled: page === numPages, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Icon_default, { name: "chevron-right", size: 20 }) })
    ] })
  ] }));
}

// src/components/Inputs/Password/PasswordInput.tsx
var import_react26 = require("react");
var import_jsx_runtime28 = require("react/jsx-runtime");
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
  const inputId = id != null ? id : (0, import_react26.useId)();
  const passwordRef = (0, import_react26.useRef)(null);
  const classes = `guwmi-password-input${hasError ? " error" : ""}${disabled ? " disabled" : ""}${className ? " " + className : ""}`;
  const [type, setType] = (0, import_react26.useState)("password");
  const toggleType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  useClickOutside_default(type === "text", toggleType, passwordRef);
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", __spreadProps(__spreadValues({ className: classes }, rest), { ref: passwordRef, children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("label", { htmlFor: inputId, className: skeleton && !hideLabel ? "guwmi-skeleton" : hideLabel ? "guwmi-sr-only" : null, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: `guwmi-password-container${skeleton ? " guwmi-skeleton" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("button", { onClick: () => toggleType(), "aria-label": type === "password" ? "Show password" : "Hide password", children: type === "password" ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Icon_default, { name: "view" }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Icon_default, { name: "hide" }) })
    ] }),
    hasError && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { children: error })
  ] }));
}

// src/components/Inputs/RadioGroup/RadioGroup.tsx
var import_react27 = require("react");
var import_jsx_runtime29 = require("react/jsx-runtime");
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
  const inputId = id != null ? id : (0, import_react27.useId)();
  const classes = `guwmi-radio-group${hasError ? " error" : ""}${disabled ? " disabled" : ""}${className ? " " + className : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
      "fieldset",
      {
        id: inputId,
        name,
        disabled,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("legend", { className: skeleton ? "guwmi-skeleton" : null, children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: `guwmi-radio-container ${layout}`, children: options && options.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: skeleton ? "guwmi-skeleton" : option.disabled ? "disabled" : null, children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("label", { htmlFor: `${id}-${option.value}`, children: option.name })
          ] }, `${id}-${index}`)) })
        ]
      }
    ),
    hasError && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: error })
  ] }));
}

// src/components/Inputs/Search/SearchInput.tsx
var import_react28 = require("react");
var import_jsx_runtime30 = require("react/jsx-runtime");
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
  const searchId = id != null ? id : (0, import_react28.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Icon_default, { name: "search", size: 18 }) }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("label", { htmlFor: searchId, className: "guwmi-sr-only", children: label != null ? label : "Search" }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
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

// src/components/Skeletons/SkeletonBlock.tsx
var import_react29 = require("react");
var import_jsx_runtime31 = require("react/jsx-runtime");
function SkeletonBlock(props) {
  const _a = props, { height, width } = _a, rest = __objRest(_a, ["height", "width"]);
  const block = (0, import_react29.useRef)(null);
  (0, import_react29.useEffect)(() => {
    if (height) {
      block.current.style.height = `${height}px`;
    }
    if (width) {
      block.current.style.width = `${width}px`;
    }
  }, [height, width]);
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", __spreadValues({ className: "guwmi-skeleton-block guwmi-skeleton", ref: block }, rest));
}

// src/components/Skeletons/SkeletonHeading.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
function SkeletonHeading(props) {
  const _a = props, { heading } = _a, rest = __objRest(_a, ["heading"]);
  switch (heading) {
    case "h1":
      return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h1", __spreadProps(__spreadValues({ className: "guwmi-skeleton-heading guwmi-skeleton" }, rest), { children: "Skeleton..." }));
    case "h2":
      return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h2", __spreadProps(__spreadValues({ className: "guwmi-skeleton-heading guwmi-skeleton" }, rest), { children: "Skeleton.." }));
    case "h3":
      return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h3", __spreadProps(__spreadValues({ className: "guwmi-skeleton-heading guwmi-skeleton" }, rest), { children: "Skeleton.." }));
    case "h4":
      return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h4", __spreadProps(__spreadValues({ className: "guwmi-skeleton-heading guwmi-skeleton" }, rest), { children: "Skeleton.." }));
    case "h5":
      return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h5", __spreadProps(__spreadValues({ className: "guwmi-skeleton-heading guwmi-skeleton" }, rest), { children: "Skeleton.." }));
    case "h6":
      return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h6", __spreadProps(__spreadValues({ className: "guwmi-skeleton-heading guwmi-skeleton" }, rest), { children: "Skeleton.." }));
  }
}

// src/components/Skeletons/SkeletonParagraph.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
function SkeletonParagraph(props) {
  const _a = props, { numLines = 5 } = _a, rest = __objRest(_a, ["numLines"]);
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", __spreadProps(__spreadValues({ className: "guwmi-skeleton-paragraph" }, rest), { children: Array.from({ length: numLines }, (_, index) => index).map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "guwmi-skeleton", children: "Skeleton..." }, `guwmi-skeleton-p-${i}`)) }));
}

// src/components/Tabs/Tab.tsx
var import_react31 = require("react");

// src/components/Tabs/TabsContext.ts
var import_react30 = require("react");
var TabsContext = (0, import_react30.createContext)(null);
var TabsContext_default = TabsContext;

// src/components/Tabs/Tab.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
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
  const { id, selectedTab, setSelectedTab } = (0, import_react31.useContext)(TabsContext_default);
  const classes = `guwmi-tab${selectedTab === index ? " active" : ""}${className ? " " + className : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    "button",
    __spreadProps(__spreadValues({
      className: classes,
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
var import_react32 = __toESM(require("react"), 1);
var import_jsx_runtime35 = require("react/jsx-runtime");
function TabPanels(props) {
  const _a = props, { className, children } = _a, rest = __objRest(_a, ["className", "children"]);
  const { skeleton, selectedTab } = (0, import_react32.useContext)(TabsContext_default);
  const windowWidth = useWindowWidth();
  const panels = (0, import_react32.useRef)(null);
  const classes = `guwmi-tab-panels${skeleton ? " guwmi-skeleton" : ""}${className ? " " + className : ""}`;
  const childrenWithIndex = (0, import_react32.useMemo)(() => {
    return import_react32.default.Children.map(children, (child, index) => import_react32.default.cloneElement(child, { index }));
  }, [children]);
  (0, import_react32.useEffect)(() => {
    const active = panels.current.querySelector(".active");
    const height = active.offsetHeight;
    panels.current.style.height = `${height}px`;
  }, [selectedTab, windowWidth]);
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", __spreadProps(__spreadValues({ className: classes, ref: panels }, rest), { children: childrenWithIndex }));
}

// src/components/Tabs/TabPanel.tsx
var import_react33 = require("react");
var import_jsx_runtime36 = require("react/jsx-runtime");
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
  const { id, selectedTab } = (0, import_react33.useContext)(TabsContext_default);
  const classes = `guwmi-tab-panel${selectedTab === index ? " active" : ""}${className ? " " + className : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
var import_react34 = __toESM(require("react"), 1);
var import_jsx_runtime37 = require("react/jsx-runtime");
function Tabs(props) {
  const _a = props, { className, children } = _a, rest = __objRest(_a, ["className", "children"]);
  const { skeleton, selectedTab } = (0, import_react34.useContext)(TabsContext_default);
  const tabsContainer = (0, import_react34.useRef)(null);
  const slider = (0, import_react34.useRef)(null);
  const classes = `guwmi-tabs${skeleton ? " guwmi-skeleton" : ""}${className ? " " + className : ""}`;
  const childrenWithIndex = (0, import_react34.useMemo)(() => {
    return import_react34.default.Children.map(children, (child, index) => import_react34.default.cloneElement(child, { index }));
  }, [children]);
  (0, import_react34.useEffect)(() => {
    if (tabsContainer.current.querySelector(".guwmi-tab.active")) {
      const activeTab = tabsContainer.current.querySelector(".guwmi-tab.active");
      const left = activeTab.offsetLeft;
      const width = activeTab.offsetWidth;
      slider.current.style.width = `${width}px`;
      slider.current.style.left = `${left}px`;
    }
  }, [tabsContainer, selectedTab]);
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("nav", __spreadProps(__spreadValues({ className: classes, role: "tablist", ref: tabsContainer }, rest), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "guwmi-tabs-slider", ref: slider }),
    childrenWithIndex
  ] }));
}

// src/components/Tabs/TabsContainer.tsx
var import_react35 = require("react");
var import_jsx_runtime38 = require("react/jsx-runtime");
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
  const [selectedTab, setSelectedTab] = (0, import_react35.useState)(0);
  const classes = `guwmi-tabs-container${className ? " " + className : ""}`;
  const id = (0, import_react35.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(TabsContext_default.Provider, { value: { skeleton, id, selectedTab, setSelectedTab }, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children })) });
}

// src/components/Table/Table.tsx
var import_react38 = require("react");

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
var import_react36 = require("react");
function usePagination(sourceData = []) {
  const [data, setData] = (0, import_react36.useState)([]);
  const [pageSize, setPageSize] = (0, import_react36.useState)(5);
  const [currentPage, setCurrentPage] = (0, import_react36.useState)(1);
  const numItems = (0, import_react36.useRef)(sourceData.length);
  const paginate = (0, import_react36.useCallback)((e) => {
    setPageSize(e.currentSize);
    setCurrentPage(e.currentPage);
  }, []);
  const start = (0, import_react36.useMemo)(() => currentPage * pageSize - pageSize, [pageSize, currentPage]);
  const end = (0, import_react36.useMemo)(() => currentPage * pageSize, [pageSize, currentPage]);
  (0, import_react36.useEffect)(() => {
    if (!isEmpty_default(sourceData)) {
      setData(sourceData.slice(start, end));
    } else {
      setData([]);
    }
  }, [sourceData, pageSize, currentPage]);
  (0, import_react36.useEffect)(() => {
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
var import_react37 = require("react");
var import_jsx_runtime39 = require("react/jsx-runtime");
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
  const cellData = (0, import_react37.useMemo)(() => {
    const arr = [];
    headers.forEach((h) => {
      if (data[h.key]) {
        arr.push({ id: data.id, col: h.key, value: data[h.key] });
      }
    });
    return arr;
  }, [headers, data]);
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_jsx_runtime39.Fragment, { children: cellData && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("tr", __spreadProps(__spreadValues({}, rest), { children: cellData.map((cell) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("td", { children: cell.value }, `table-${tableId}-cell-${cell.id}-${cell.col}`)) })) });
}

// src/components/Table/Table.tsx
var import_jsx_runtime40 = require("react/jsx-runtime");
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
  const id = (0, import_react38.useId)();
  const isSearchable = (0, import_react38.useMemo)(() => headers.some((header) => (header == null ? void 0 : header.search) === "includes" || (header == null ? void 0 : header.search) === "starts-with"), [headers]);
  const searchHeaders = (0, import_react38.useMemo)(() => headers.filter((header) => (header == null ? void 0 : header.search) === "includes" || (header == null ? void 0 : header.search) === "starts-with"), [headers]);
  const classes = `guwmi-table-container${isCondensed ? " condensed" : ""}${className ? " " + className : ""}`;
  const [searchValue, setSearchValue] = (0, import_react38.useState)("");
  const [tableRows, setTableRows] = (0, import_react38.useState)(rows);
  const { data: paginatedData, paginate } = usePagination(tableRows);
  const handleSearch = () => {
    const updatedRows = tableSearch_default(
      rows,
      searchHeaders,
      searchValue
    );
    setTableRows(updatedRows);
  };
  (0, import_react38.useEffect)(() => {
    if (isSearchable) {
      handleSearch();
    }
  }, [searchValue]);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    (title || description) && /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "guwmi-table-header", children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h2", { className: skeleton ? "guwmi-skeleton" : null, children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { className: skeleton ? "guwmi-skeleton" : null, children: description })
    ] }),
    headers.length > 0 && isSearchable && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "guwmi-table-search", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(SearchInput, { onChange: (e) => setSearchValue(e.target.value), skeleton }) }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("table", { cellPadding: 0, cellSpacing: 0, children: skeleton ? /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("tr", { children: Array.from({ length: 4 }, (_, index) => index).map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("th", { className: "guwmi-skeleton" }, `guwmi-table-skelton-header-${i}`)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("tbody", { children: Array.from({ length: 5 }, (_, index) => index).map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("tr", { children: Array.from({ length: 4 }, (_, index) => index).map((v2, i2) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("td", { className: "guwmi-skeleton" }, `guwmi-table-skelton-td-${i2}`)) }, `guwmi-table-skelton-row-${i}`)) })
    ] }) : headers.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("tr", { children: headers.map((header, i) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("th", { children: header.title }, `table-${id}-header-${i}`)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("tbody", { children: !hasPagination && tableRows.length > 0 ? tableRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(TableRow, { headers, data: row, tableId: id }, `table-${id}-row-${row.id}`)) : hasPagination && paginatedData.values.length > 0 ? paginatedData.values.map((row) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(TableRow, { headers, data: row, tableId: id }, `table-${id}-row-${row.id}`)) : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("td", { colSpan: headers.length, children: "There is no data to display in the table" }) }) })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("tbody", { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("td", { children: "No column headers provided for the table" }) }) }) }),
    hasPagination && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
  ] }));
}

// src/components/Tag/Tag.tsx
var import_react39 = require("react");
var import_jsx_runtime41 = require("react/jsx-runtime");
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
  const button = (0, import_react39.useRef)(null);
  const handleClick = (e) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  };
  return href && (!disabled || skeleton) ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("a", __spreadProps(__spreadValues({ className: classes, href, ref: button, target }, rest), { children: value })) : onClick || href && disabled && !skeleton ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("button", __spreadProps(__spreadValues({ className: classes, onClick: (e) => handleClick(e), ref: button, disabled }, rest), { children: value })) : /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", __spreadProps(__spreadValues({ className: classes }, rest), { children: value }));
}

// src/components/Inputs/TextArea/TextArea.tsx
var import_react40 = require("react");
var import_jsx_runtime42 = require("react/jsx-runtime");
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
  const inputId = id != null ? id : (0, import_react40.useId)();
  const classes = `guwmi-textarea${hasError ? " error" : ""}${disabled ? " disabled" : ""}${className ? " " + className : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("label", { htmlFor: inputId, className: skeleton && !hideLabel ? "guwmi-skeleton" : hideLabel ? "guwmi-sr-only" : null, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: `guwmi-textarea-container${skeleton ? " guwmi-skeleton" : ""}`, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
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
    ) }),
    hasError && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: error })
  ] }));
}

// src/components/Inputs/Text/TextInput.tsx
var import_react41 = require("react");
var import_jsx_runtime43 = require("react/jsx-runtime");
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
  const inputId = id != null ? id : (0, import_react41.useId)();
  const classes = `guwmi-text-input${hasError ? " error" : ""}${disabled ? " disabled" : ""}${className ? " " + className : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("label", { htmlFor: inputId, className: skeleton && !hideLabel ? "guwmi-skeleton" : hideLabel ? "guwmi-sr-only" : null, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: `guwmi-text-input-container${skeleton ? " guwmi-skeleton" : ""}`, children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
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
    ) }),
    hasError && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { children: error })
  ] }));
}

// src/components/Inputs/Toggle/Toggle.tsx
var import_react42 = require("react");
var import_jsx_runtime44 = require("react/jsx-runtime");
function Toggle(props) {
  const _a = props, {
    label,
    labelAlign = "left",
    id,
    name,
    disabled = false,
    value,
    toggled,
    readOnly = false,
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
    "value",
    "toggled",
    "readOnly",
    "className",
    "skeleton",
    "onChange",
    "onBlur",
    "onFocus"
  ]);
  const classes = `guwmi-toggle ${labelAlign}${disabled ? " disabled" : ""}${className ? " " + className : ""}`;
  const inputId = id != null ? id : (0, import_react42.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("label", { className: skeleton ? "guwmi-skeleton" : null, htmlFor: inputId, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: `guwmi-toggle-container${skeleton ? " guwmi-skeleton" : ""}`, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      "input",
      {
        type: "checkbox",
        id: inputId,
        name: name != null ? name : label,
        value: value != null ? value : label,
        readOnly,
        disabled: disabled || skeleton,
        checked: toggled,
        onChange,
        onBlur,
        onFocus
      }
    ) })
  ] }));
}

// src/components/Tooltip/Tooltip.tsx
var import_jsx_runtime45 = require("react/jsx-runtime");
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
  const classes = `guwmi-tooltip ${align}${className ? " " + className : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { children: text }),
    children
  ] }));
}

// src/components/VerticalGrid/VerticalGrid.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", __spreadProps(__spreadValues({ className: classes }, rest), { children }));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  Icon,
  IconButton,
  InfoBlock,
  Loading,
  Menu,
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
});
//# sourceMappingURL=index.cjs.map