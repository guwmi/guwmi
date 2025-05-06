"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = function(fn, res) {
    return function __init() {
        return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    };
};
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs
var defaultAttributes;
var init_defaultAttributes = __esm({
    "node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs": function() {
        defaultAttributes = {
            outline: {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            },
            filled: {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                stroke: "none"
            }
        };
    }
});
// node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs
var import_react16, createReactComponent;
var init_createReactComponent = __esm({
    "node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs": function() {
        import_react16 = require("react");
        init_defaultAttributes();
        createReactComponent = function(type, iconName, iconNamePascal, iconNode) {
            var Component = (0, import_react16.forwardRef)(function(_param, ref) {
                var _param_color = _param.color, color = _param_color === void 0 ? "currentColor" : _param_color, _param_size = _param.size, size = _param_size === void 0 ? 24 : _param_size, _param_stroke = _param.stroke, stroke = _param_stroke === void 0 ? 2 : _param_stroke, title = _param.title, className = _param.className, children = _param.children, rest = _object_without_properties(_param, [
                    "color",
                    "size",
                    "stroke",
                    "title",
                    "className",
                    "children"
                ]);
                return (0, import_react16.createElement)("svg", _object_spread(_object_spread_props(_object_spread({
                    ref: ref
                }, defaultAttributes[type]), {
                    width: size,
                    height: size,
                    className: [
                        "tabler-icon",
                        "tabler-icon-".concat(iconName),
                        className
                    ].join(" ")
                }), type === "filled" ? {
                    fill: color
                } : {
                    strokeWidth: stroke,
                    stroke: color
                }, rest), [
                    title && (0, import_react16.createElement)("title", {
                        key: "svg-title"
                    }, title)
                ].concat(_to_consumable_array(iconNode.map(function(param) {
                    var _$_param = _sliced_to_array(param, 2), tag = _$_param[0], attrs = _$_param[1];
                    return (0, import_react16.createElement)(tag, attrs);
                })), _to_consumable_array(Array.isArray(children) ? children : [
                    children
                ])));
            });
            Component.displayName = "".concat(iconNamePascal);
            return Component;
        };
    }
});
// node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs
var IconAlertCircle;
var init_IconAlertCircle = __esm({
    "node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs": function() {
        init_createReactComponent();
        IconAlertCircle = createReactComponent("outline", "alert-circle", "IconAlertCircle", [
            [
                "path",
                {
                    "d": "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",
                    "key": "svg-0"
                }
            ],
            [
                "path",
                {
                    "d": "M12 8v4",
                    "key": "svg-1"
                }
            ],
            [
                "path",
                {
                    "d": "M12 16h.01",
                    "key": "svg-2"
                }
            ]
        ]);
    }
});
// node_modules/@tabler/icons-react/dist/esm/icons/IconAlertTriangle.mjs
var IconAlertTriangle;
var init_IconAlertTriangle = __esm({
    "node_modules/@tabler/icons-react/dist/esm/icons/IconAlertTriangle.mjs": function() {
        init_createReactComponent();
        IconAlertTriangle = createReactComponent("outline", "alert-triangle", "IconAlertTriangle", [
            [
                "path",
                {
                    "d": "M12 9v4",
                    "key": "svg-0"
                }
            ],
            [
                "path",
                {
                    "d": "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",
                    "key": "svg-1"
                }
            ],
            [
                "path",
                {
                    "d": "M12 16h.01",
                    "key": "svg-2"
                }
            ]
        ]);
    }
});
// node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs
var IconCheck;
var init_IconCheck = __esm({
    "node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs": function() {
        init_createReactComponent();
        IconCheck = createReactComponent("outline", "check", "IconCheck", [
            [
                "path",
                {
                    "d": "M5 12l5 5l10 -10",
                    "key": "svg-0"
                }
            ]
        ]);
    }
});
// node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs
var IconChevronRight;
var init_IconChevronRight = __esm({
    "node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs": function() {
        init_createReactComponent();
        IconChevronRight = createReactComponent("outline", "chevron-right", "IconChevronRight", [
            [
                "path",
                {
                    "d": "M9 6l6 6l-6 6",
                    "key": "svg-0"
                }
            ]
        ]);
    }
});
// node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs
var IconSearch;
var init_IconSearch = __esm({
    "node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs": function() {
        init_createReactComponent();
        IconSearch = createReactComponent("outline", "search", "IconSearch", [
            [
                "path",
                {
                    "d": "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",
                    "key": "svg-0"
                }
            ],
            [
                "path",
                {
                    "d": "M21 21l-6 -6",
                    "key": "svg-1"
                }
            ]
        ]);
    }
});
// node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs
var IconX;
var init_IconX = __esm({
    "node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs": function() {
        init_createReactComponent();
        IconX = createReactComponent("outline", "x", "IconX", [
            [
                "path",
                {
                    "d": "M18 6l-12 12",
                    "key": "svg-0"
                }
            ],
            [
                "path",
                {
                    "d": "M6 6l12 12",
                    "key": "svg-1"
                }
            ]
        ]);
    }
});
// src/index.ts
var index_exports = {};
__export(index_exports, {
    Accordion: function() {
        return Accordion;
    },
    AccordionItem: function() {
        return AccordionItem;
    },
    Button: function() {
        return Button;
    },
    Card: function() {
        return Card;
    },
    CardSection: function() {
        return CardSection;
    },
    Cards: function() {
        return Cards;
    },
    Drawer: function() {
        return Drawer;
    },
    IconButton: function() {
        return IconButton;
    },
    Menu: function() {
        return Menu;
    },
    MenuDropdown: function() {
        return MenuDropdown;
    },
    MenuItem: function() {
        return MenuItem;
    },
    MenuTrigger: function() {
        return MenuTrigger;
    },
    Modal: function() {
        return Modal;
    },
    Notification: function() {
        return Notification;
    },
    Tab: function() {
        return Tab;
    },
    TabPanel: function() {
        return TabPanel;
    },
    TabPanels: function() {
        return TabPanels;
    },
    Table: function() {
        return Table;
    },
    Tabs: function() {
        return Tabs;
    },
    TabsContainer: function() {
        return TabsContainer;
    }
});
module.exports = __toCommonJS(index_exports);
var import_styles = require("./index-L3NGY2JV.css");
// src/components/Button/Button.tsx
var import_react = __toESM(require("react"));
function Button(props) {
    var children = props.children, _props_size = props.size, size = _props_size === void 0 ? "md" : _props_size, _props_color = props.color, color = _props_color === void 0 ? "primary" : _props_color, _props_kind = props.kind, kind = _props_kind === void 0 ? "fill" : _props_kind, _props_theme = props.theme, theme = _props_theme === void 0 ? "round" : _props_theme, className = props.className, onClick = props.onClick, href = props.href, _props_target = props.target, target = _props_target === void 0 ? null : _props_target;
    var classes = (0, import_react.useMemo)(function() {
        return "guwmi-btn ".concat(size, " ").concat(color, " ").concat(kind, " ").concat(theme).concat(className ? " " + className : "");
    }, []);
    var button = (0, import_react.useRef)(null);
    var handleClick = (0, import_react.useCallback)(function(e) {
        button.current.focus();
        if (onClick) {
            onClick(e);
        }
    }, [
        href,
        onClick,
        button.current
    ]);
    return href ? /* @__PURE__ */ import_react.default.createElement("a", {
        className: classes,
        href: href,
        onClick: function() {
            return handleClick;
        },
        target: target,
        ref: button
    }, children) : /* @__PURE__ */ import_react.default.createElement("button", {
        className: classes,
        onClick: function(e) {
            return handleClick(e);
        },
        ref: button
    }, children);
}
// src/components/IconButton/IconButton.tsx
var import_react2 = __toESM(require("react"));
function IconButton(props) {
    var children = props.children, _props_size = props.size, size = _props_size === void 0 ? "md" : _props_size, _props_color = props.color, color = _props_color === void 0 ? "primary" : _props_color, _props_kind = props.kind, kind = _props_kind === void 0 ? "fill" : _props_kind, _props_theme = props.theme, theme = _props_theme === void 0 ? "round" : _props_theme, className = props.className, onClick = props.onClick, ariaLabel = props.ariaLabel;
    var classes = (0, import_react2.useMemo)(function() {
        return "guwmi-btn icon ".concat(size, " ").concat(color, " ").concat(kind, " ").concat(theme).concat(className ? " " + className : "");
    }, []);
    return /* @__PURE__ */ import_react2.default.createElement("button", {
        className: classes,
        onClick: onClick,
        "aria-label": ariaLabel
    }, children);
}
// src/components/Menu/Menu.tsx
var import_react4 = __toESM(require("react"));
// src/components/Menu/MenuContext.ts
var import_react3 = require("react");
var MenuContext = (0, import_react3.createContext)(null);
var MenuContext_default = MenuContext;
// src/components/Menu/Menu.tsx
function Menu(props) {
    var children = props.children, _props_position = props.position, position = _props_position === void 0 ? "bottom-right" : _props_position, width = props.width, ariaLabel = props.ariaLabel;
    var _ref = _sliced_to_array((0, import_react4.useState)(false), 2), isOpen = _ref[0], setIsOpen = _ref[1];
    var classes = (0, import_react4.useMemo)(function() {
        return "guwmi-menu-container ".concat(position);
    }, []);
    return /* @__PURE__ */ import_react4.default.createElement("div", {
        className: classes
    }, /* @__PURE__ */ import_react4.default.createElement(MenuContext_default.Provider, {
        value: {
            isOpen: isOpen,
            setIsOpen: setIsOpen,
            ariaLabel: ariaLabel
        }
    }, children));
}
// src/components/Menu/MenuDropdown.tsx
var import_react5 = __toESM(require("react"));
function MenuDropdown(props) {
    var children = props.children;
    var _ref = (0, import_react5.useContext)(MenuContext_default), isOpen = _ref.isOpen, ariaLabel = _ref.ariaLabel;
    var _ref1 = _sliced_to_array((0, import_react5.useState)(false), 2), isAnimating = _ref1[0], setIsAnimating = _ref1[1];
    var classes = (0, import_react5.useMemo)(function() {
        return "guwmi-menu-dropdown".concat(isOpen ? " open" : "");
    }, [
        isOpen
    ]);
    var dropDownRef = (0, import_react5.useRef)(null);
    (0, import_react5.useEffect)(function() {
        var _dropDownRef_current, _dropDownRef_current1;
        (_dropDownRef_current = dropDownRef.current) === null || _dropDownRef_current === void 0 ? void 0 : _dropDownRef_current.addEventListener("transitioncancel", function() {
            return setIsAnimating(false);
        });
        (_dropDownRef_current1 = dropDownRef.current) === null || _dropDownRef_current1 === void 0 ? void 0 : _dropDownRef_current1.addEventListener("transitionend", function() {
            return setIsAnimating(false);
        });
    }, [
        dropDownRef.current
    ]);
    (0, import_react5.useEffect)(function() {
        if (isOpen) {
            setIsAnimating(true);
        }
    }, [
        isOpen
    ]);
    return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, (isOpen || isAnimating) && /* @__PURE__ */ import_react5.default.createElement("nav", {
        className: classes,
        ref: dropDownRef,
        "aria-label": ariaLabel
    }, /* @__PURE__ */ import_react5.default.createElement("ul", {
        role: "menubar"
    }, children)));
}
// src/components/Menu/MenuItem.tsx
var import_react6 = __toESM(require("react"));
function MenuItem(props) {
    var children = props.children, onClick = props.onClick, href = props.href;
    var classes = (0, import_react6.useMemo)(function() {
        return "guwmi-menu-item";
    }, []);
    return /* @__PURE__ */ import_react6.default.createElement("li", {
        className: classes
    }, href ? /* @__PURE__ */ import_react6.default.createElement("a", {
        className: "guwmi-menu-btn",
        href: href
    }, children) : /* @__PURE__ */ import_react6.default.createElement("button", {
        className: "guwmi-menu-btn",
        onClick: onClick
    }, children));
}
// src/components/Menu/MenuTrigger.tsx
var import_react7 = __toESM(require("react"));
function MenuTrigger(props) {
    var children = props.children;
    var _ref = (0, import_react7.useContext)(MenuContext_default), isOpen = _ref.isOpen, setIsOpen = _ref.setIsOpen;
    var childrenWithClick = (0, import_react7.useMemo)(function() {
        return import_react7.default.Children.map(children, function(child) {
            if (import_react7.default.isValidElement(child)) {
                return import_react7.default.cloneElement(child, {
                    onClick: function() {
                        return setIsOpen(!isOpen);
                    }
                });
            }
            return child;
        });
    }, [
        children,
        isOpen
    ]);
    return /* @__PURE__ */ import_react7.default.createElement("div", {
        className: "guwmi-menu-trigger"
    }, childrenWithClick);
}
// src/components/Tabs/TabsContainer.tsx
var import_react9 = __toESM(require("react"));
// src/components/Tabs/TabsContext.ts
var import_react8 = require("react");
var TabsContext = (0, import_react8.createContext)(null);
var TabsContext_default = TabsContext;
// src/components/Tabs/TabsContainer.tsx
function TabsContainer(props) {
    var children = props.children;
    var _ref = _sliced_to_array((0, import_react9.useState)(0), 2), selectedTab = _ref[0], setSelectedTab = _ref[1];
    var id = (0, import_react9.useId)();
    return /* @__PURE__ */ import_react9.default.createElement(TabsContext_default.Provider, {
        value: {
            id: id,
            selectedTab: selectedTab,
            setSelectedTab: setSelectedTab
        }
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "guwmi-tabs-container"
    }, children));
}
// src/components/Tabs/Tabs.tsx
var import_react10 = __toESM(require("react"));
function Tabs(props) {
    var children = props.children;
    var selectedTab = (0, import_react10.useContext)(TabsContext_default).selectedTab;
    var tabsContainer = (0, import_react10.useRef)(null);
    var slider = (0, import_react10.useRef)(null);
    var activeTab = (0, import_react10.useRef)(null);
    var childrenWithIndex = (0, import_react10.useMemo)(function() {
        return import_react10.default.Children.map(children, function(child, index) {
            if (import_react10.default.isValidElement(child)) {
                return import_react10.default.cloneElement(child, {
                    index: index
                });
            }
            return child;
        });
    }, [
        children
    ]);
    (0, import_react10.useEffect)(function() {
        if (tabsContainer.current.querySelector(".guwmi-tab.active")) {
            activeTab.current = tabsContainer.current.querySelector(".guwmi-tab.active");
        }
    }, [
        tabsContainer,
        selectedTab
    ]);
    (0, import_react10.useEffect)(function() {
        if (activeTab.current) {
            var left = activeTab.current.offsetLeft;
            var width = activeTab.current.offsetWidth;
            slider.current.style.width = "".concat(width, "px");
            slider.current.style.left = "".concat(left, "px");
        }
    }, [
        activeTab.current
    ]);
    return /* @__PURE__ */ import_react10.default.createElement("nav", {
        className: "guwmi-tabs",
        role: "tablist",
        ref: tabsContainer
    }, /* @__PURE__ */ import_react10.default.createElement("span", {
        className: "guwmi-tabs-slider",
        ref: slider
    }), childrenWithIndex);
}
// src/components/Tabs/Tab.tsx
var import_react11 = __toESM(require("react"));
function Tab(props) {
    var children = props.children, index = props.index;
    var _ref = (0, import_react11.useContext)(TabsContext_default), id = _ref.id, selectedTab = _ref.selectedTab, setSelectedTab = _ref.setSelectedTab;
    return /* @__PURE__ */ import_react11.default.createElement("button", {
        className: "guwmi-tab".concat(selectedTab === index ? " active" : ""),
        onClick: function() {
            return setSelectedTab(index);
        },
        id: "tabs-".concat(id, "-tab-").concat(index),
        "aria-selected": selectedTab === index,
        "aria-controls": "tabs-".concat(id, "-tabpanel-").concat(index)
    }, children);
}
// src/components/Tabs/TabPanels.tsx
var import_react13 = __toESM(require("react"));
// src/hooks/useWindowWidth.ts
var import_react12 = require("react");
function useWindowWidth() {
    var _ref = _sliced_to_array((0, import_react12.useState)(), 2), windowWidth = _ref[0], setWindowWidth = _ref[1];
    var handleResize = function() {
        return setWindowWidth(window.innerWidth);
    };
    (0, import_react12.useEffect)(function() {
        window.addEventListener("resize", handleResize);
        return function() {
            return window.removeEventListener("resize", handleResize);
        };
    }, []);
    return windowWidth;
}
// src/components/Tabs/TabPanels.tsx
function TabPanels(props) {
    var children = props.children;
    var selectedTab = (0, import_react13.useContext)(TabsContext_default).selectedTab;
    var windowWidth = useWindowWidth();
    var panels = (0, import_react13.useRef)(null);
    var childrenWithIndex = (0, import_react13.useMemo)(function() {
        return import_react13.default.Children.map(children, function(child, index) {
            if (import_react13.default.isValidElement(child)) {
                return import_react13.default.cloneElement(child, {
                    index: index
                });
            }
            return child;
        });
    }, [
        children
    ]);
    (0, import_react13.useEffect)(function() {
        var active = panels.current.querySelector(".active");
        var height = active.offsetHeight;
        panels.current.style.height = "".concat(height, "px");
    }, [
        selectedTab,
        windowWidth
    ]);
    return /* @__PURE__ */ import_react13.default.createElement("div", {
        className: "guwmi-tab-panels",
        ref: panels
    }, childrenWithIndex);
}
// src/components/Tabs/TabPanel.tsx
var import_react14 = __toESM(require("react"));
function TabPanel(props) {
    var children = props.children, index = props.index;
    var _ref = (0, import_react14.useContext)(TabsContext_default), id = _ref.id, selectedTab = _ref.selectedTab;
    return /* @__PURE__ */ import_react14.default.createElement("section", {
        className: "guwmi-tab-panel".concat(selectedTab === index ? " active" : ""),
        role: "tabpanel",
        hidden: selectedTab !== index,
        "aria-labelledby": "tabs-".concat(id, "-tab-").concat(index),
        id: "tabs-".concat(id, "-tabpanel-").concat(index)
    }, children);
}
// src/components/Table/Table.tsx
var import_react18 = __toESM(require("react"));
// src/components/Table/TableRow.tsx
var import_react15 = __toESM(require("react"));
function TableRow(props) {
    var headers = props.headers, data = props.data, tableId = props.tableId;
    var cellData = (0, import_react15.useMemo)(function() {
        var arr = [];
        headers.forEach(function(h) {
            if (data[h.key]) {
                arr.push({
                    id: data.id,
                    col: h.key,
                    value: data[h.key]
                });
            }
        });
        return arr;
    }, [
        headers,
        data
    ]);
    return /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, cellData && /* @__PURE__ */ import_react15.default.createElement("tr", null, cellData.map(function(cell) {
        return /* @__PURE__ */ import_react15.default.createElement("td", {
            key: "table-".concat(tableId, "-cell-").concat(cell.id, "-").concat(cell.col)
        }, cell.value);
    })));
}
// src/components/Inputs/Search/SearchInput.tsx
var import_react17 = __toESM(require("react"));
// node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.mjs
init_IconAlertCircle();
init_IconAlertTriangle();
init_IconCheck();
init_IconChevronRight();
init_IconSearch();
init_IconX();
// src/components/Inputs/Search/SearchInput.tsx
function SearchInput(props) {
    var placeholder = props.placeholder;
    var id = (0, import_react17.useId)();
    return /* @__PURE__ */ import_react17.default.createElement("div", {
        className: "guwmi-search-input"
    }, /* @__PURE__ */ import_react17.default.createElement("span", null, /* @__PURE__ */ import_react17.default.createElement(IconSearch, {
        size: 18
    })), /* @__PURE__ */ import_react17.default.createElement("label", {
        htmlFor: id,
        className: "guwmi-sr-only"
    }, "Search"), /* @__PURE__ */ import_react17.default.createElement("input", {
        id: id,
        type: "search",
        placeholder: placeholder ? placeholder : "Search..."
    }));
}
// src/components/Table/Table.tsx
function Table(props) {
    var headers = props.headers, rows = props.rows, isCondensed = props.isCondensed, isSearchable = props.isSearchable;
    var id = (0, import_react18.useId)();
    var classes = (0, import_react18.useMemo)(function() {
        return "guwmi-table-container".concat(isCondensed ? " condensed" : "");
    }, []);
    return /* @__PURE__ */ import_react18.default.createElement("div", {
        className: classes
    }, headers.length > 0 && isSearchable && /* @__PURE__ */ import_react18.default.createElement("div", {
        className: "guwmi-table-search"
    }, /* @__PURE__ */ import_react18.default.createElement(SearchInput, null)), /* @__PURE__ */ import_react18.default.createElement("table", {
        cellPadding: 0,
        cellSpacing: 0
    }, headers.length > 0 ? /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, /* @__PURE__ */ import_react18.default.createElement("thead", null, /* @__PURE__ */ import_react18.default.createElement("tr", null, headers.map(function(header, i) {
        return /* @__PURE__ */ import_react18.default.createElement("th", {
            key: "table-".concat(id, "-header-").concat(i)
        }, header.title);
    }))), /* @__PURE__ */ import_react18.default.createElement("tbody", null, rows.length > 0 ? rows.map(function(row) {
        return /* @__PURE__ */ import_react18.default.createElement(TableRow, {
            key: "table-".concat(id, "-row-").concat(row.id),
            headers: headers,
            data: row,
            tableId: id
        });
    }) : /* @__PURE__ */ import_react18.default.createElement("tr", null, /* @__PURE__ */ import_react18.default.createElement("td", {
        colSpan: headers.length
    }, "There is no data to display in the table")))) : /* @__PURE__ */ import_react18.default.createElement("tbody", null, /* @__PURE__ */ import_react18.default.createElement("tr", null, /* @__PURE__ */ import_react18.default.createElement("td", null, "No column headers provided for the table")))));
}
// src/components/Accordion/Accordion.tsx
var import_react20 = __toESM(require("react"));
// src/components/Accordion/AccordionContext.ts
var import_react19 = require("react");
var AccordionContext = (0, import_react19.createContext)(null);
var AccordionContext_default = AccordionContext;
// src/components/Accordion/Accordion.tsx
function Accordion(props) {
    var children = props.children, defaultOpen = props.defaultOpen;
    var _ref = _sliced_to_array((0, import_react20.useState)([]), 2), openAccordions = _ref[0], setOpenAccordions = _ref[1];
    (0, import_react20.useEffect)(function() {
        if (defaultOpen) {
            setOpenAccordions(_to_consumable_array(openAccordions).concat([
                defaultOpen
            ]));
        }
    }, [
        defaultOpen
    ]);
    return /* @__PURE__ */ import_react20.default.createElement(AccordionContext_default.Provider, {
        value: {
            openAccordions: openAccordions,
            setOpenAccordions: setOpenAccordions
        }
    }, /* @__PURE__ */ import_react20.default.createElement("div", {
        className: "guwmi-accordion-container"
    }, children));
}
// src/components/Accordion/AccrodionItem.tsx
var import_react21 = __toESM(require("react"));
function AccordionItem(props) {
    var children = props.children, title = props.title, id = props.id;
    var _ref = (0, import_react21.useContext)(AccordionContext_default), openAccordions = _ref.openAccordions, setOpenAccordions = _ref.setOpenAccordions;
    var windowWidth = useWindowWidth();
    var panelRef = (0, import_react21.useRef)(null);
    var contentRef = (0, import_react21.useRef)(null);
    var _ref1 = _sliced_to_array((0, import_react21.useState)(false), 2), isOpen = _ref1[0], setIsOpen = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react21.useState)(false), 2), isAnimating = _ref2[0], setIsAnimating = _ref2[1];
    (0, import_react21.useEffect)(function() {
        if (openAccordions.includes(id)) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [
        openAccordions
    ]);
    var open = (0, import_react21.useCallback)(function() {
        setOpenAccordions(_to_consumable_array(openAccordions).concat([
            id
        ]));
        setIsAnimating(true);
    }, [
        id,
        openAccordions
    ]);
    var close = (0, import_react21.useCallback)(function() {
        setOpenAccordions(openAccordions.filter(function(value) {
            return value !== id;
        }));
        setIsAnimating(true);
    }, [
        id,
        openAccordions
    ]);
    (0, import_react21.useEffect)(function() {
        var _panelRef_current, _panelRef_current1;
        (_panelRef_current = panelRef.current) === null || _panelRef_current === void 0 ? void 0 : _panelRef_current.addEventListener("transitioncancel", function() {
            return setIsAnimating(false);
        });
        (_panelRef_current1 = panelRef.current) === null || _panelRef_current1 === void 0 ? void 0 : _panelRef_current1.addEventListener("transitionend", function() {
            return setIsAnimating(false);
        });
    }, [
        panelRef.current
    ]);
    (0, import_react21.useEffect)(function() {
        if (contentRef.current && isOpen) {
            var height = contentRef.current.offsetHeight;
            panelRef.current.style.height = "".concat(height, "px");
        } else {
            panelRef.current.style.height = "0px";
        }
    }, [
        contentRef.current,
        isOpen,
        windowWidth
    ]);
    return /* @__PURE__ */ import_react21.default.createElement("div", {
        className: "guwmi-accordion-item"
    }, /* @__PURE__ */ import_react21.default.createElement("button", {
        onClick: function() {
            return isOpen ? close() : open();
        },
        id: "guwmi-accordion-controller-".concat(id),
        "aria-controls": "guwmi-accordion-panel-".concat(id),
        "aria-expanded": isOpen,
        className: isOpen ? "active" : null
    }, title, /* @__PURE__ */ import_react21.default.createElement(IconChevronRight, {
        size: 20
    })), /* @__PURE__ */ import_react21.default.createElement("section", {
        hidden: !isOpen && !isAnimating,
        id: "guwmi-accordion-panel-".concat(id),
        "aria-labelledby": "guwmi-accordion-controller-".concat(id),
        ref: panelRef
    }, /* @__PURE__ */ import_react21.default.createElement("div", {
        className: "guwmi-accordion-panel-content",
        ref: contentRef
    }, children)));
}
// src/components/Cards/Cards.tsx
var import_react22 = __toESM(require("react"));
function Cards(props) {
    var children = props.children, _props_columns = props.columns, columns = _props_columns === void 0 ? 3 : _props_columns;
    var classes = (0, import_react22.useMemo)(function() {
        var classString = "guwmi-card-grid ";
        switch(columns){
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
    }, [
        columns
    ]);
    return /* @__PURE__ */ import_react22.default.createElement("div", {
        className: classes
    }, children);
}
// src/components/Cards/Card.tsx
var import_react23 = __toESM(require("react"));
function Card(props) {
    var title = props.title, subTitle = props.subTitle, image = props.image, children = props.children;
    return /* @__PURE__ */ import_react23.default.createElement("div", {
        className: "guwmi-card"
    }, image && /* @__PURE__ */ import_react23.default.createElement("img", {
        src: image,
        alt: title ? title : "Card image",
        className: "guwmi-card-image"
    }), (title || subTitle) && /* @__PURE__ */ import_react23.default.createElement("div", {
        className: "guwmi-card-section guwmi-card-title"
    }, title && /* @__PURE__ */ import_react23.default.createElement("h2", null, title), subTitle && /* @__PURE__ */ import_react23.default.createElement("h3", null, subTitle)), children);
}
// src/components/Cards/CardSection.tsx
var import_react24 = __toESM(require("react"));
function CardSection(props) {
    var children = props.children;
    return /* @__PURE__ */ import_react24.default.createElement("div", {
        className: "guwmi-card-section"
    }, children);
}
// src/components/Notification/Notification.tsx
var import_react25 = __toESM(require("react"));
function Notification(props) {
    var kind = props.kind, title = props.title, content = props.content;
    var _ref = _sliced_to_array((0, import_react25.useState)(true), 2), isVisible = _ref[0], setIsVisible = _ref[1];
    var titleText = (0, import_react25.useMemo)(function() {
        return title ? title : kind.charAt(0).toUpperCase() + kind.slice(1);
    }, [
        title,
        kind
    ]);
    var classes = (0, import_react25.useMemo)(function() {
        return "guwmi-notification ".concat(kind);
    }, [
        kind
    ]);
    return isVisible ? /* @__PURE__ */ import_react25.default.createElement("dialog", {
        className: classes
    }, kind === "error" ? /* @__PURE__ */ import_react25.default.createElement(IconAlertCircle, {
        size: 20,
        stroke: 3
    }) : kind === "warning" ? /* @__PURE__ */ import_react25.default.createElement(IconAlertTriangle, {
        size: 20,
        stroke: 3
    }) : /* @__PURE__ */ import_react25.default.createElement(IconCheck, {
        size: 20,
        stroke: 3
    }), /* @__PURE__ */ import_react25.default.createElement("h2", null, titleText), /* @__PURE__ */ import_react25.default.createElement("p", null, content), /* @__PURE__ */ import_react25.default.createElement("button", {
        onClick: function() {
            return setIsVisible(false);
        },
        "aria-label": "Close notification",
        tabIndex: 0
    }, /* @__PURE__ */ import_react25.default.createElement(IconX, {
        size: 18
    }))) : null;
}
// src/components/Modal/Modal.tsx
var import_react26 = __toESM(require("react"));
var import_react_dom = __toESM(require("react-dom"));
function ModalPortal(props) {
    var children = props.children;
    var _ref = _sliced_to_array((0, import_react26.useState)(false), 2), hasDocument = _ref[0], setHasDocument = _ref[1];
    (0, import_react26.useEffect)(function() {
        setHasDocument(typeof document !== "undefined");
    }, []);
    return hasDocument ? import_react_dom.default.createPortal(children, document.body) : null;
}
function Modal(props) {
    var open = props.open, onClose = props.onClose, _props_preventScroll = props.preventScroll, preventScroll = _props_preventScroll === void 0 ? false : _props_preventScroll, _props_size = props.size, size = _props_size === void 0 ? "sm" : _props_size, children = props.children;
    var _ref = _sliced_to_array((0, import_react26.useState)(false), 2), isAnimating = _ref[0], setIsAnimating = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react26.useState)(false), 2), isOpen = _ref1[0], setIsOpen = _ref1[1];
    var overlayClasses = (0, import_react26.useMemo)(function() {
        return "guwmi-modal-overlay".concat(isOpen ? " open" : "");
    }, [
        isOpen
    ]);
    var classes = (0, import_react26.useMemo)(function() {
        return "guwmi-modal ".concat(size);
    }, [
        size
    ]);
    var modalOverlay = (0, import_react26.useRef)(null);
    var modal = (0, import_react26.useRef)(null);
    var modalButton = (0, import_react26.useRef)(null);
    var close = (0, import_react26.useCallback)(function() {
        setIsAnimating(true);
        setIsOpen(false);
        modalButton.current.focus();
    }, []);
    var setAnimationState = (0, import_react26.useCallback)(function() {
        setIsAnimating(false);
    }, []);
    var closeOutClick = (0, import_react26.useCallback)(function(e) {
        if (!modal.current.contains(e.target)) {
            close();
        }
    }, [
        modal.current
    ]);
    var handleTab = (0, import_react26.useCallback)(function(e) {
        if (e.key === "Tab") {
            var focusableElements = modal.current.querySelectorAll("a[href], button, input, textarea, select, details, [tabindex]");
            var firstFocusable = focusableElements[0];
            var lastFocusable = focusableElements[focusableElements.length - 1];
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
    }, [
        modal.current
    ]);
    var handleEscape = (0, import_react26.useCallback)(function(e) {
        if (e.key === "Escape") {
            close();
        }
    }, []);
    (0, import_react26.useEffect)(function() {
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
        return function() {
            document.removeEventListener("click", closeOutClick);
            document.removeEventListener("keydown", handleTab);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [
        open
    ]);
    (0, import_react26.useEffect)(function() {
        var _modalOverlay_current, _modalOverlay_current1;
        (_modalOverlay_current = modalOverlay.current) === null || _modalOverlay_current === void 0 ? void 0 : _modalOverlay_current.addEventListener("transitioncancel", setAnimationState);
        (_modalOverlay_current1 = modalOverlay.current) === null || _modalOverlay_current1 === void 0 ? void 0 : _modalOverlay_current1.addEventListener("transitionend", setAnimationState);
        return function() {
            var _modalOverlay_current, _modalOverlay_current1;
            (_modalOverlay_current = modalOverlay.current) === null || _modalOverlay_current === void 0 ? void 0 : _modalOverlay_current.removeEventListener("transitioncancel", setAnimationState);
            (_modalOverlay_current1 = modalOverlay.current) === null || _modalOverlay_current1 === void 0 ? void 0 : _modalOverlay_current1.removeEventListener("transitionend", setAnimationState);
        };
    }, [
        modalOverlay.current
    ]);
    (0, import_react26.useEffect)(function() {
        if (!isOpen) {
            onClose();
        }
    }, [
        isOpen
    ]);
    return /* @__PURE__ */ import_react26.default.createElement(ModalPortal, null, (open || isOpen || isAnimating) && /* @__PURE__ */ import_react26.default.createElement("div", {
        className: overlayClasses,
        ref: modalOverlay
    }, /* @__PURE__ */ import_react26.default.createElement("dialog", {
        className: classes,
        ref: modal
    }, /* @__PURE__ */ import_react26.default.createElement("button", {
        className: "guwmi-modal-close-button",
        "aria-label": "Close modal",
        onClick: function() {
            return close();
        }
    }, /* @__PURE__ */ import_react26.default.createElement(IconX, {
        size: 20
    })), children)));
}
// src/components/Drawer/Drawer.tsx
var import_react27 = __toESM(require("react"));
var import_react_dom2 = __toESM(require("react-dom"));
function DrawerPortal(props) {
    var children = props.children;
    var _ref = _sliced_to_array((0, import_react27.useState)(false), 2), hasDocument = _ref[0], setHasDocument = _ref[1];
    (0, import_react27.useEffect)(function() {
        setHasDocument(typeof document !== "undefined");
    }, []);
    return hasDocument ? import_react_dom2.default.createPortal(children, document.body) : null;
}
function Drawer(props) {
    var open = props.open, onClose = props.onClose, _props_preventScroll = props.preventScroll, preventScroll = _props_preventScroll === void 0 ? false : _props_preventScroll, _props_position = props.position, position = _props_position === void 0 ? "left" : _props_position, children = props.children;
    var _ref = _sliced_to_array((0, import_react27.useState)(false), 2), isAnimating = _ref[0], setIsAnimating = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react27.useState)(false), 2), isOpen = _ref1[0], setIsOpen = _ref1[1];
    var overlayClasses = (0, import_react27.useMemo)(function() {
        return "guwmi-drawer-overlay".concat(isOpen ? " open" : "");
    }, [
        isOpen
    ]);
    var classes = (0, import_react27.useMemo)(function() {
        return "guwmi-drawer ".concat(position);
    }, [
        position
    ]);
    var drawerOverlay = (0, import_react27.useRef)(null);
    var drawer = (0, import_react27.useRef)(null);
    var drawerButton = (0, import_react27.useRef)(null);
    var close = (0, import_react27.useCallback)(function() {
        setIsAnimating(true);
        setIsOpen(false);
        drawerButton.current.focus();
    }, []);
    var setAnimationState = (0, import_react27.useCallback)(function() {
        setIsAnimating(false);
    }, []);
    var closeOutClick = (0, import_react27.useCallback)(function(e) {
        if (!drawer.current.contains(e.target)) {
            close();
        }
    }, [
        drawer.current
    ]);
    var handleTab = (0, import_react27.useCallback)(function(e) {
        if (e.key === "Tab") {
            var focusableElements = drawer.current.querySelectorAll("a[href], button, input, textarea, select, details, [tabindex]");
            var firstFocusable = focusableElements[0];
            var lastFocusable = focusableElements[focusableElements.length - 1];
            if (e.shiftKey) {
                if (drawer.current.contains(e.target) && e.target === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (drawer.current.contains(e.target) && e.target === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    }, [
        drawer.current
    ]);
    var handleEscape = (0, import_react27.useCallback)(function(e) {
        if (e.key === "Escape") {
            close();
        }
    }, []);
    (0, import_react27.useEffect)(function() {
        if (open) {
            setIsAnimating(true);
            setIsOpen(true);
            drawerButton.current = document.activeElement;
            drawer.current.focus();
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
        return function() {
            document.removeEventListener("click", closeOutClick);
            document.removeEventListener("keydown", handleTab);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [
        open
    ]);
    (0, import_react27.useEffect)(function() {
        var _drawerOverlay_current, _drawerOverlay_current1;
        (_drawerOverlay_current = drawerOverlay.current) === null || _drawerOverlay_current === void 0 ? void 0 : _drawerOverlay_current.addEventListener("transitioncancel", setAnimationState);
        (_drawerOverlay_current1 = drawerOverlay.current) === null || _drawerOverlay_current1 === void 0 ? void 0 : _drawerOverlay_current1.addEventListener("transitionend", setAnimationState);
        return function() {
            var _drawerOverlay_current, _drawerOverlay_current1;
            (_drawerOverlay_current = drawerOverlay.current) === null || _drawerOverlay_current === void 0 ? void 0 : _drawerOverlay_current.removeEventListener("transitioncancel", setAnimationState);
            (_drawerOverlay_current1 = drawerOverlay.current) === null || _drawerOverlay_current1 === void 0 ? void 0 : _drawerOverlay_current1.removeEventListener("transitionend", setAnimationState);
        };
    }, [
        drawerOverlay.current
    ]);
    (0, import_react27.useEffect)(function() {
        if (!isOpen) {
            onClose();
        }
    }, [
        isOpen
    ]);
    return /* @__PURE__ */ import_react27.default.createElement(DrawerPortal, null, (open || isOpen || isAnimating) && /* @__PURE__ */ import_react27.default.createElement("div", {
        className: overlayClasses,
        ref: drawerOverlay
    }, /* @__PURE__ */ import_react27.default.createElement("aside", {
        className: classes,
        ref: drawer,
        "aria-modal": "true",
        tabIndex: 0
    }, /* @__PURE__ */ import_react27.default.createElement("button", {
        className: "guwmi-drawer-close-button",
        "aria-label": "Close drawer",
        onClick: function() {
            return close();
        }
    }, /* @__PURE__ */ import_react27.default.createElement(IconX, {
        size: 20
    })), children)));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Accordion: Accordion,
    AccordionItem: AccordionItem,
    Button: Button,
    Card: Card,
    CardSection: CardSection,
    Cards: Cards,
    Drawer: Drawer,
    IconButton: IconButton,
    Menu: Menu,
    MenuDropdown: MenuDropdown,
    MenuItem: MenuItem,
    MenuTrigger: MenuTrigger,
    Modal: Modal,
    Notification: Notification,
    Tab: Tab,
    TabPanel: TabPanel,
    TabPanels: TabPanels,
    Table: Table,
    Tabs: Tabs,
    TabsContainer: TabsContainer
}); /*! Bundled license information:

@tabler/icons-react/dist/esm/defaultAttributes.mjs:
@tabler/icons-react/dist/esm/createReactComponent.mjs:
@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs:
@tabler/icons-react/dist/esm/icons/IconAlertTriangle.mjs:
@tabler/icons-react/dist/esm/icons/IconCheck.mjs:
@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs:
@tabler/icons-react/dist/esm/icons/IconSearch.mjs:
@tabler/icons-react/dist/esm/icons/IconX.mjs:
@tabler/icons-react/dist/esm/tabler-icons-react.mjs:
  (**
   * @license @tabler/icons-react v3.31.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/ 
//# sourceMappingURL=index.js.map