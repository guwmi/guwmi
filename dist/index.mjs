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
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = function(fn, res) {
    return function __init() {
        return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    };
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
import { forwardRef, createElement } from "react";
var createReactComponent;
var init_createReactComponent = __esm({
    "node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs": function() {
        init_defaultAttributes();
        createReactComponent = function(type, iconName, iconNamePascal, iconNode) {
            var Component = forwardRef(function(_param, ref) {
                var _param_color = _param.color, color = _param_color === void 0 ? "currentColor" : _param_color, _param_size = _param.size, size = _param_size === void 0 ? 24 : _param_size, _param_stroke = _param.stroke, stroke = _param_stroke === void 0 ? 2 : _param_stroke, title = _param.title, className = _param.className, children = _param.children, rest = _object_without_properties(_param, [
                    "color",
                    "size",
                    "stroke",
                    "title",
                    "className",
                    "children"
                ]);
                return createElement("svg", _object_spread(_object_spread_props(_object_spread({
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
                    title && createElement("title", {
                        key: "svg-title"
                    }, title)
                ].concat(_to_consumable_array(iconNode.map(function(param) {
                    var _$_param = _sliced_to_array(param, 2), tag = _$_param[0], attrs = _$_param[1];
                    return createElement(tag, attrs);
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
import "./index-L3NGY2JV.css";
// src/components/Button/Button.tsx
import React, { useCallback, useMemo, useRef } from "react";
function Button(props) {
    var children = props.children, _props_size = props.size, size = _props_size === void 0 ? "md" : _props_size, _props_color = props.color, color = _props_color === void 0 ? "primary" : _props_color, _props_kind = props.kind, kind = _props_kind === void 0 ? "fill" : _props_kind, _props_theme = props.theme, theme = _props_theme === void 0 ? "round" : _props_theme, className = props.className, onClick = props.onClick, href = props.href, _props_target = props.target, target = _props_target === void 0 ? null : _props_target;
    var classes = useMemo(function() {
        return "guwmi-btn ".concat(size, " ").concat(color, " ").concat(kind, " ").concat(theme).concat(className ? " " + className : "");
    }, []);
    var button = useRef(null);
    var handleClick = useCallback(function(e) {
        button.current.focus();
        if (onClick) {
            onClick(e);
        }
    }, [
        href,
        onClick,
        button.current
    ]);
    return href ? /* @__PURE__ */ React.createElement("a", {
        className: classes,
        href: href,
        onClick: function() {
            return handleClick;
        },
        target: target,
        ref: button
    }, children) : /* @__PURE__ */ React.createElement("button", {
        className: classes,
        onClick: function(e) {
            return handleClick(e);
        },
        ref: button
    }, children);
}
// src/components/IconButton/IconButton.tsx
import React2, { useMemo as useMemo2 } from "react";
function IconButton(props) {
    var children = props.children, _props_size = props.size, size = _props_size === void 0 ? "md" : _props_size, _props_color = props.color, color = _props_color === void 0 ? "primary" : _props_color, _props_kind = props.kind, kind = _props_kind === void 0 ? "fill" : _props_kind, _props_theme = props.theme, theme = _props_theme === void 0 ? "round" : _props_theme, className = props.className, onClick = props.onClick, ariaLabel = props.ariaLabel;
    var classes = useMemo2(function() {
        return "guwmi-btn icon ".concat(size, " ").concat(color, " ").concat(kind, " ").concat(theme).concat(className ? " " + className : "");
    }, []);
    return /* @__PURE__ */ React2.createElement("button", {
        className: classes,
        onClick: onClick,
        "aria-label": ariaLabel
    }, children);
}
// src/components/Menu/Menu.tsx
import React3, { useState, useMemo as useMemo3 } from "react";
// src/components/Menu/MenuContext.ts
import { createContext } from "react";
var MenuContext = createContext(null);
var MenuContext_default = MenuContext;
// src/components/Menu/Menu.tsx
function Menu(props) {
    var children = props.children, _props_position = props.position, position = _props_position === void 0 ? "bottom-right" : _props_position, width = props.width, ariaLabel = props.ariaLabel;
    var _useState = _sliced_to_array(useState(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var classes = useMemo3(function() {
        return "guwmi-menu-container ".concat(position);
    }, []);
    return /* @__PURE__ */ React3.createElement("div", {
        className: classes
    }, /* @__PURE__ */ React3.createElement(MenuContext_default.Provider, {
        value: {
            isOpen: isOpen,
            setIsOpen: setIsOpen,
            ariaLabel: ariaLabel
        }
    }, children));
}
// src/components/Menu/MenuDropdown.tsx
import React4, { useContext, useEffect, useMemo as useMemo4, useRef as useRef2, useState as useState2 } from "react";
function MenuDropdown(props) {
    var children = props.children;
    var _useContext = useContext(MenuContext_default), isOpen = _useContext.isOpen, ariaLabel = _useContext.ariaLabel;
    var _useState2 = _sliced_to_array(useState2(false), 2), isAnimating = _useState2[0], setIsAnimating = _useState2[1];
    var classes = useMemo4(function() {
        return "guwmi-menu-dropdown".concat(isOpen ? " open" : "");
    }, [
        isOpen
    ]);
    var dropDownRef = useRef2(null);
    useEffect(function() {
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
    useEffect(function() {
        if (isOpen) {
            setIsAnimating(true);
        }
    }, [
        isOpen
    ]);
    return /* @__PURE__ */ React4.createElement(React4.Fragment, null, (isOpen || isAnimating) && /* @__PURE__ */ React4.createElement("nav", {
        className: classes,
        ref: dropDownRef,
        "aria-label": ariaLabel
    }, /* @__PURE__ */ React4.createElement("ul", {
        role: "menubar"
    }, children)));
}
// src/components/Menu/MenuItem.tsx
import React5, { useMemo as useMemo5 } from "react";
function MenuItem(props) {
    var children = props.children, onClick = props.onClick, href = props.href;
    var classes = useMemo5(function() {
        return "guwmi-menu-item";
    }, []);
    return /* @__PURE__ */ React5.createElement("li", {
        className: classes
    }, href ? /* @__PURE__ */ React5.createElement("a", {
        className: "guwmi-menu-btn",
        href: href
    }, children) : /* @__PURE__ */ React5.createElement("button", {
        className: "guwmi-menu-btn",
        onClick: onClick
    }, children));
}
// src/components/Menu/MenuTrigger.tsx
import React6, { useMemo as useMemo6, useContext as useContext2 } from "react";
function MenuTrigger(props) {
    var children = props.children;
    var _useContext2 = useContext2(MenuContext_default), isOpen = _useContext2.isOpen, setIsOpen = _useContext2.setIsOpen;
    var childrenWithClick = useMemo6(function() {
        return React6.Children.map(children, function(child) {
            if (React6.isValidElement(child)) {
                return React6.cloneElement(child, {
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
    return /* @__PURE__ */ React6.createElement("div", {
        className: "guwmi-menu-trigger"
    }, childrenWithClick);
}
// src/components/Tabs/TabsContainer.tsx
import React7, { useState as useState3, useId } from "react";
// src/components/Tabs/TabsContext.ts
import { createContext as createContext2 } from "react";
var TabsContext = createContext2(null);
var TabsContext_default = TabsContext;
// src/components/Tabs/TabsContainer.tsx
function TabsContainer(props) {
    var children = props.children;
    var _useState3 = _sliced_to_array(useState3(0), 2), selectedTab = _useState3[0], setSelectedTab = _useState3[1];
    var id = useId();
    return /* @__PURE__ */ React7.createElement(TabsContext_default.Provider, {
        value: {
            id: id,
            selectedTab: selectedTab,
            setSelectedTab: setSelectedTab
        }
    }, /* @__PURE__ */ React7.createElement("div", {
        className: "guwmi-tabs-container"
    }, children));
}
// src/components/Tabs/Tabs.tsx
import React8, { useEffect as useEffect2, useMemo as useMemo7, useRef as useRef3, useContext as useContext3 } from "react";
function Tabs(props) {
    var children = props.children;
    var selectedTab = useContext3(TabsContext_default).selectedTab;
    var tabsContainer = useRef3(null);
    var slider = useRef3(null);
    var activeTab = useRef3(null);
    var childrenWithIndex = useMemo7(function() {
        return React8.Children.map(children, function(child, index) {
            if (React8.isValidElement(child)) {
                return React8.cloneElement(child, {
                    index: index
                });
            }
            return child;
        });
    }, [
        children
    ]);
    useEffect2(function() {
        if (tabsContainer.current.querySelector(".guwmi-tab.active")) {
            activeTab.current = tabsContainer.current.querySelector(".guwmi-tab.active");
        }
    }, [
        tabsContainer,
        selectedTab
    ]);
    useEffect2(function() {
        if (activeTab.current) {
            var left = activeTab.current.offsetLeft;
            var width = activeTab.current.offsetWidth;
            slider.current.style.width = "".concat(width, "px");
            slider.current.style.left = "".concat(left, "px");
        }
    }, [
        activeTab.current
    ]);
    return /* @__PURE__ */ React8.createElement("nav", {
        className: "guwmi-tabs",
        role: "tablist",
        ref: tabsContainer
    }, /* @__PURE__ */ React8.createElement("span", {
        className: "guwmi-tabs-slider",
        ref: slider
    }), childrenWithIndex);
}
// src/components/Tabs/Tab.tsx
import React9, { useContext as useContext4 } from "react";
function Tab(props) {
    var children = props.children, index = props.index;
    var _useContext4 = useContext4(TabsContext_default), id = _useContext4.id, selectedTab = _useContext4.selectedTab, setSelectedTab = _useContext4.setSelectedTab;
    return /* @__PURE__ */ React9.createElement("button", {
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
import React10, { useContext as useContext5, useMemo as useMemo8, useRef as useRef4, useEffect as useEffect4 } from "react";
// src/hooks/useWindowWidth.ts
import { useState as useState4, useEffect as useEffect3 } from "react";
function useWindowWidth() {
    var _useState4 = _sliced_to_array(useState4(), 2), windowWidth = _useState4[0], setWindowWidth = _useState4[1];
    var handleResize = function() {
        return setWindowWidth(window.innerWidth);
    };
    useEffect3(function() {
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
    var selectedTab = useContext5(TabsContext_default).selectedTab;
    var windowWidth = useWindowWidth();
    var panels = useRef4(null);
    var childrenWithIndex = useMemo8(function() {
        return React10.Children.map(children, function(child, index) {
            if (React10.isValidElement(child)) {
                return React10.cloneElement(child, {
                    index: index
                });
            }
            return child;
        });
    }, [
        children
    ]);
    useEffect4(function() {
        var active = panels.current.querySelector(".active");
        var height = active.offsetHeight;
        panels.current.style.height = "".concat(height, "px");
    }, [
        selectedTab,
        windowWidth
    ]);
    return /* @__PURE__ */ React10.createElement("div", {
        className: "guwmi-tab-panels",
        ref: panels
    }, childrenWithIndex);
}
// src/components/Tabs/TabPanel.tsx
import React11, { useContext as useContext6 } from "react";
function TabPanel(props) {
    var children = props.children, index = props.index;
    var _useContext6 = useContext6(TabsContext_default), id = _useContext6.id, selectedTab = _useContext6.selectedTab;
    return /* @__PURE__ */ React11.createElement("section", {
        className: "guwmi-tab-panel".concat(selectedTab === index ? " active" : ""),
        role: "tabpanel",
        hidden: selectedTab !== index,
        "aria-labelledby": "tabs-".concat(id, "-tab-").concat(index),
        id: "tabs-".concat(id, "-tabpanel-").concat(index)
    }, children);
}
// src/components/Table/Table.tsx
import React14, { useId as useId3, useMemo as useMemo10 } from "react";
// src/components/Table/TableRow.tsx
import React12, { useMemo as useMemo9 } from "react";
function TableRow(props) {
    var headers = props.headers, data = props.data, tableId = props.tableId;
    var cellData = useMemo9(function() {
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
    return /* @__PURE__ */ React12.createElement(React12.Fragment, null, cellData && /* @__PURE__ */ React12.createElement("tr", null, cellData.map(function(cell) {
        return /* @__PURE__ */ React12.createElement("td", {
            key: "table-".concat(tableId, "-cell-").concat(cell.id, "-").concat(cell.col)
        }, cell.value);
    })));
}
// src/components/Inputs/Search/SearchInput.tsx
import React13, { useId as useId2 } from "react";
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
    var id = useId2();
    return /* @__PURE__ */ React13.createElement("div", {
        className: "guwmi-search-input"
    }, /* @__PURE__ */ React13.createElement("span", null, /* @__PURE__ */ React13.createElement(IconSearch, {
        size: 18
    })), /* @__PURE__ */ React13.createElement("label", {
        htmlFor: id,
        className: "guwmi-sr-only"
    }, "Search"), /* @__PURE__ */ React13.createElement("input", {
        id: id,
        type: "search",
        placeholder: placeholder ? placeholder : "Search..."
    }));
}
// src/components/Table/Table.tsx
function Table(props) {
    var headers = props.headers, rows = props.rows, isCondensed = props.isCondensed, isSearchable = props.isSearchable;
    var id = useId3();
    var classes = useMemo10(function() {
        return "guwmi-table-container".concat(isCondensed ? " condensed" : "");
    }, []);
    return /* @__PURE__ */ React14.createElement("div", {
        className: classes
    }, headers.length > 0 && isSearchable && /* @__PURE__ */ React14.createElement("div", {
        className: "guwmi-table-search"
    }, /* @__PURE__ */ React14.createElement(SearchInput, null)), /* @__PURE__ */ React14.createElement("table", {
        cellPadding: 0,
        cellSpacing: 0
    }, headers.length > 0 ? /* @__PURE__ */ React14.createElement(React14.Fragment, null, /* @__PURE__ */ React14.createElement("thead", null, /* @__PURE__ */ React14.createElement("tr", null, headers.map(function(header, i) {
        return /* @__PURE__ */ React14.createElement("th", {
            key: "table-".concat(id, "-header-").concat(i)
        }, header.title);
    }))), /* @__PURE__ */ React14.createElement("tbody", null, rows.length > 0 ? rows.map(function(row) {
        return /* @__PURE__ */ React14.createElement(TableRow, {
            key: "table-".concat(id, "-row-").concat(row.id),
            headers: headers,
            data: row,
            tableId: id
        });
    }) : /* @__PURE__ */ React14.createElement("tr", null, /* @__PURE__ */ React14.createElement("td", {
        colSpan: headers.length
    }, "There is no data to display in the table")))) : /* @__PURE__ */ React14.createElement("tbody", null, /* @__PURE__ */ React14.createElement("tr", null, /* @__PURE__ */ React14.createElement("td", null, "No column headers provided for the table")))));
}
// src/components/Accordion/Accordion.tsx
import React15, { useState as useState5, useEffect as useEffect5 } from "react";
// src/components/Accordion/AccordionContext.ts
import { createContext as createContext3 } from "react";
var AccordionContext = createContext3(null);
var AccordionContext_default = AccordionContext;
// src/components/Accordion/Accordion.tsx
function Accordion(props) {
    var children = props.children, defaultOpen = props.defaultOpen;
    var _useState5 = _sliced_to_array(useState5([]), 2), openAccordions = _useState5[0], setOpenAccordions = _useState5[1];
    useEffect5(function() {
        if (defaultOpen) {
            setOpenAccordions(_to_consumable_array(openAccordions).concat([
                defaultOpen
            ]));
        }
    }, [
        defaultOpen
    ]);
    return /* @__PURE__ */ React15.createElement(AccordionContext_default.Provider, {
        value: {
            openAccordions: openAccordions,
            setOpenAccordions: setOpenAccordions
        }
    }, /* @__PURE__ */ React15.createElement("div", {
        className: "guwmi-accordion-container"
    }, children));
}
// src/components/Accordion/AccrodionItem.tsx
import React16, { useCallback as useCallback2, useContext as useContext7, useRef as useRef5, useState as useState6, useEffect as useEffect6 } from "react";
function AccordionItem(props) {
    var children = props.children, title = props.title, id = props.id;
    var _useContext7 = useContext7(AccordionContext_default), openAccordions = _useContext7.openAccordions, setOpenAccordions = _useContext7.setOpenAccordions;
    var windowWidth = useWindowWidth();
    var panelRef = useRef5(null);
    var contentRef = useRef5(null);
    var _useState6 = _sliced_to_array(useState6(false), 2), isOpen = _useState6[0], setIsOpen = _useState6[1];
    var _useState61 = _sliced_to_array(useState6(false), 2), isAnimating = _useState61[0], setIsAnimating = _useState61[1];
    useEffect6(function() {
        if (openAccordions.includes(id)) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [
        openAccordions
    ]);
    var open = useCallback2(function() {
        setOpenAccordions(_to_consumable_array(openAccordions).concat([
            id
        ]));
        setIsAnimating(true);
    }, [
        id,
        openAccordions
    ]);
    var close = useCallback2(function() {
        setOpenAccordions(openAccordions.filter(function(value) {
            return value !== id;
        }));
        setIsAnimating(true);
    }, [
        id,
        openAccordions
    ]);
    useEffect6(function() {
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
    useEffect6(function() {
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
    return /* @__PURE__ */ React16.createElement("div", {
        className: "guwmi-accordion-item"
    }, /* @__PURE__ */ React16.createElement("button", {
        onClick: function() {
            return isOpen ? close() : open();
        },
        id: "guwmi-accordion-controller-".concat(id),
        "aria-controls": "guwmi-accordion-panel-".concat(id),
        "aria-expanded": isOpen,
        className: isOpen ? "active" : null
    }, title, /* @__PURE__ */ React16.createElement(IconChevronRight, {
        size: 20
    })), /* @__PURE__ */ React16.createElement("section", {
        hidden: !isOpen && !isAnimating,
        id: "guwmi-accordion-panel-".concat(id),
        "aria-labelledby": "guwmi-accordion-controller-".concat(id),
        ref: panelRef
    }, /* @__PURE__ */ React16.createElement("div", {
        className: "guwmi-accordion-panel-content",
        ref: contentRef
    }, children)));
}
// src/components/Cards/Cards.tsx
import React17, { useMemo as useMemo11 } from "react";
function Cards(props) {
    var children = props.children, _props_columns = props.columns, columns = _props_columns === void 0 ? 3 : _props_columns;
    var classes = useMemo11(function() {
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
    return /* @__PURE__ */ React17.createElement("div", {
        className: classes
    }, children);
}
// src/components/Cards/Card.tsx
import React18 from "react";
function Card(props) {
    var title = props.title, subTitle = props.subTitle, image = props.image, children = props.children;
    return /* @__PURE__ */ React18.createElement("div", {
        className: "guwmi-card"
    }, image && /* @__PURE__ */ React18.createElement("img", {
        src: image,
        alt: title ? title : "Card image",
        className: "guwmi-card-image"
    }), (title || subTitle) && /* @__PURE__ */ React18.createElement("div", {
        className: "guwmi-card-section guwmi-card-title"
    }, title && /* @__PURE__ */ React18.createElement("h2", null, title), subTitle && /* @__PURE__ */ React18.createElement("h3", null, subTitle)), children);
}
// src/components/Cards/CardSection.tsx
import React19 from "react";
function CardSection(props) {
    var children = props.children;
    return /* @__PURE__ */ React19.createElement("div", {
        className: "guwmi-card-section"
    }, children);
}
// src/components/Notification/Notification.tsx
import React20, { useMemo as useMemo12, useState as useState7 } from "react";
function Notification(props) {
    var kind = props.kind, title = props.title, content = props.content;
    var _useState7 = _sliced_to_array(useState7(true), 2), isVisible = _useState7[0], setIsVisible = _useState7[1];
    var titleText = useMemo12(function() {
        return title ? title : kind.charAt(0).toUpperCase() + kind.slice(1);
    }, [
        title,
        kind
    ]);
    var classes = useMemo12(function() {
        return "guwmi-notification ".concat(kind);
    }, [
        kind
    ]);
    return isVisible ? /* @__PURE__ */ React20.createElement("dialog", {
        className: classes
    }, kind === "error" ? /* @__PURE__ */ React20.createElement(IconAlertCircle, {
        size: 20,
        stroke: 3
    }) : kind === "warning" ? /* @__PURE__ */ React20.createElement(IconAlertTriangle, {
        size: 20,
        stroke: 3
    }) : /* @__PURE__ */ React20.createElement(IconCheck, {
        size: 20,
        stroke: 3
    }), /* @__PURE__ */ React20.createElement("h2", null, titleText), /* @__PURE__ */ React20.createElement("p", null, content), /* @__PURE__ */ React20.createElement("button", {
        onClick: function() {
            return setIsVisible(false);
        },
        "aria-label": "Close notification",
        tabIndex: 0
    }, /* @__PURE__ */ React20.createElement(IconX, {
        size: 18
    }))) : null;
}
// src/components/Modal/Modal.tsx
import React21, { useCallback as useCallback3, useEffect as useEffect7, useMemo as useMemo13, useRef as useRef6, useState as useState8 } from "react";
import ReactDOM from "react-dom";
function ModalPortal(props) {
    var children = props.children;
    var _useState8 = _sliced_to_array(useState8(false), 2), hasDocument = _useState8[0], setHasDocument = _useState8[1];
    useEffect7(function() {
        setHasDocument(typeof document !== "undefined");
    }, []);
    return hasDocument ? ReactDOM.createPortal(children, document.body) : null;
}
function Modal(props) {
    var open = props.open, onClose = props.onClose, _props_preventScroll = props.preventScroll, preventScroll = _props_preventScroll === void 0 ? false : _props_preventScroll, _props_size = props.size, size = _props_size === void 0 ? "sm" : _props_size, children = props.children;
    var _useState8 = _sliced_to_array(useState8(false), 2), isAnimating = _useState8[0], setIsAnimating = _useState8[1];
    var _useState81 = _sliced_to_array(useState8(false), 2), isOpen = _useState81[0], setIsOpen = _useState81[1];
    var overlayClasses = useMemo13(function() {
        return "guwmi-modal-overlay".concat(isOpen ? " open" : "");
    }, [
        isOpen
    ]);
    var classes = useMemo13(function() {
        return "guwmi-modal ".concat(size);
    }, [
        size
    ]);
    var modalOverlay = useRef6(null);
    var modal = useRef6(null);
    var modalButton = useRef6(null);
    var close = useCallback3(function() {
        setIsAnimating(true);
        setIsOpen(false);
        modalButton.current.focus();
    }, []);
    var setAnimationState = useCallback3(function() {
        setIsAnimating(false);
    }, []);
    var closeOutClick = useCallback3(function(e) {
        if (!modal.current.contains(e.target)) {
            close();
        }
    }, [
        modal.current
    ]);
    var handleTab = useCallback3(function(e) {
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
    var handleEscape = useCallback3(function(e) {
        if (e.key === "Escape") {
            close();
        }
    }, []);
    useEffect7(function() {
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
    useEffect7(function() {
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
    useEffect7(function() {
        if (!isOpen) {
            onClose();
        }
    }, [
        isOpen
    ]);
    return /* @__PURE__ */ React21.createElement(ModalPortal, null, (open || isOpen || isAnimating) && /* @__PURE__ */ React21.createElement("div", {
        className: overlayClasses,
        ref: modalOverlay
    }, /* @__PURE__ */ React21.createElement("dialog", {
        className: classes,
        ref: modal
    }, /* @__PURE__ */ React21.createElement("button", {
        className: "guwmi-modal-close-button",
        "aria-label": "Close modal",
        onClick: function() {
            return close();
        }
    }, /* @__PURE__ */ React21.createElement(IconX, {
        size: 20
    })), children)));
}
// src/components/Drawer/Drawer.tsx
import React22, { useCallback as useCallback4, useEffect as useEffect8, useMemo as useMemo14, useRef as useRef7, useState as useState9 } from "react";
import ReactDOM2 from "react-dom";
function DrawerPortal(props) {
    var children = props.children;
    var _useState9 = _sliced_to_array(useState9(false), 2), hasDocument = _useState9[0], setHasDocument = _useState9[1];
    useEffect8(function() {
        setHasDocument(typeof document !== "undefined");
    }, []);
    return hasDocument ? ReactDOM2.createPortal(children, document.body) : null;
}
function Drawer(props) {
    var open = props.open, onClose = props.onClose, _props_preventScroll = props.preventScroll, preventScroll = _props_preventScroll === void 0 ? false : _props_preventScroll, _props_position = props.position, position = _props_position === void 0 ? "left" : _props_position, children = props.children;
    var _useState9 = _sliced_to_array(useState9(false), 2), isAnimating = _useState9[0], setIsAnimating = _useState9[1];
    var _useState91 = _sliced_to_array(useState9(false), 2), isOpen = _useState91[0], setIsOpen = _useState91[1];
    var overlayClasses = useMemo14(function() {
        return "guwmi-drawer-overlay".concat(isOpen ? " open" : "");
    }, [
        isOpen
    ]);
    var classes = useMemo14(function() {
        return "guwmi-drawer ".concat(position);
    }, [
        position
    ]);
    var drawerOverlay = useRef7(null);
    var drawer = useRef7(null);
    var drawerButton = useRef7(null);
    var close = useCallback4(function() {
        setIsAnimating(true);
        setIsOpen(false);
        drawerButton.current.focus();
    }, []);
    var setAnimationState = useCallback4(function() {
        setIsAnimating(false);
    }, []);
    var closeOutClick = useCallback4(function(e) {
        if (!drawer.current.contains(e.target)) {
            close();
        }
    }, [
        drawer.current
    ]);
    var handleTab = useCallback4(function(e) {
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
    var handleEscape = useCallback4(function(e) {
        if (e.key === "Escape") {
            close();
        }
    }, []);
    useEffect8(function() {
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
    useEffect8(function() {
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
    useEffect8(function() {
        if (!isOpen) {
            onClose();
        }
    }, [
        isOpen
    ]);
    return /* @__PURE__ */ React22.createElement(DrawerPortal, null, (open || isOpen || isAnimating) && /* @__PURE__ */ React22.createElement("div", {
        className: overlayClasses,
        ref: drawerOverlay
    }, /* @__PURE__ */ React22.createElement("aside", {
        className: classes,
        ref: drawer,
        "aria-modal": "true",
        tabIndex: 0
    }, /* @__PURE__ */ React22.createElement("button", {
        className: "guwmi-drawer-close-button",
        "aria-label": "Close drawer",
        onClick: function() {
            return close();
        }
    }, /* @__PURE__ */ React22.createElement(IconX, {
        size: 20
    })), children)));
}
export { Accordion, AccordionItem, Button, Card, CardSection, Cards, Drawer, IconButton, Menu, MenuDropdown, MenuItem, MenuTrigger, Modal, Notification, Tab, TabPanel, TabPanels, Table, Tabs, TabsContainer }; /*! Bundled license information:

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
//# sourceMappingURL=index.mjs.map