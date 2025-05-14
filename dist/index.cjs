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
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
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
    return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
        className: classes,
        href: href,
        onClick: function() {
            return handleClick;
        },
        target: target,
        ref: button,
        children: children
    }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        className: classes,
        onClick: function(e) {
            return handleClick(e);
        },
        ref: button,
        children: children
    });
}
// src/components/IconButton/IconButton.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function IconButton(props) {
    var children = props.children, _props_size = props.size, size = _props_size === void 0 ? "md" : _props_size, _props_color = props.color, color = _props_color === void 0 ? "primary" : _props_color, _props_kind = props.kind, kind = _props_kind === void 0 ? "fill" : _props_kind, _props_theme = props.theme, theme = _props_theme === void 0 ? "round" : _props_theme, className = props.className, onClick = props.onClick, ariaLabel = props.ariaLabel;
    var classes = (0, import_react2.useMemo)(function() {
        return "guwmi-btn icon ".concat(size, " ").concat(color, " ").concat(kind, " ").concat(theme).concat(className ? " " + className : "");
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", {
        className: classes,
        onClick: onClick,
        "aria-label": ariaLabel,
        children: children
    });
}
// src/components/Menu/Menu.tsx
var import_react4 = require("react");
// src/components/Menu/MenuContext.ts
var import_react3 = require("react");
var MenuContext = (0, import_react3.createContext)(null);
var MenuContext_default = MenuContext;
// src/components/Menu/Menu.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Menu(props) {
    var children = props.children, _props_position = props.position, position = _props_position === void 0 ? "bottom-right" : _props_position, width = props.width, ariaLabel = props.ariaLabel;
    var _ref = _sliced_to_array((0, import_react4.useState)(false), 2), isOpen = _ref[0], setIsOpen = _ref[1];
    var classes = (0, import_react4.useMemo)(function() {
        return "guwmi-menu-container ".concat(position);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        className: classes,
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MenuContext_default.Provider, {
            value: {
                isOpen: isOpen,
                setIsOpen: setIsOpen,
                ariaLabel: ariaLabel
            },
            children: children
        })
    });
}
// src/components/Menu/MenuDropdown.tsx
var import_react5 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, {
        children: (isOpen || isAnimating) && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("nav", {
            className: classes,
            ref: dropDownRef,
            "aria-label": ariaLabel,
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", {
                role: "menubar",
                children: children
            })
        })
    });
}
// src/components/Menu/MenuItem.tsx
var import_react6 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
function MenuItem(props) {
    var children = props.children, onClick = props.onClick, href = props.href;
    var classes = (0, import_react6.useMemo)(function() {
        return "guwmi-menu-item";
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", {
        className: classes,
        children: href ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", {
            className: "guwmi-menu-btn",
            href: href,
            children: children
        }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", {
            className: "guwmi-menu-btn",
            onClick: onClick,
            children: children
        })
    });
}
// src/components/Menu/MenuTrigger.tsx
var import_react7 = __toESM(require("react"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
        className: "guwmi-menu-trigger",
        children: childrenWithClick
    });
}
// src/components/Tabs/TabsContainer.tsx
var import_react9 = require("react");
// src/components/Tabs/TabsContext.ts
var import_react8 = require("react");
var TabsContext = (0, import_react8.createContext)(null);
var TabsContext_default = TabsContext;
// src/components/Tabs/TabsContainer.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function TabsContainer(props) {
    var children = props.children;
    var _ref = _sliced_to_array((0, import_react9.useState)(0), 2), selectedTab = _ref[0], setSelectedTab = _ref[1];
    var id = (0, import_react9.useId)();
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TabsContext_default.Provider, {
        value: {
            id: id,
            selectedTab: selectedTab,
            setSelectedTab: setSelectedTab
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
            className: "guwmi-tabs-container",
            children: children
        })
    });
}
// src/components/Tabs/Tabs.tsx
var import_react10 = __toESM(require("react"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("nav", {
        className: "guwmi-tabs",
        role: "tablist",
        ref: tabsContainer,
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", {
                className: "guwmi-tabs-slider",
                ref: slider
            }),
            childrenWithIndex
        ]
    });
}
// src/components/Tabs/Tab.tsx
var import_react11 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
function Tab(props) {
    var children = props.children, index = props.index;
    var _ref = (0, import_react11.useContext)(TabsContext_default), id = _ref.id, selectedTab = _ref.selectedTab, setSelectedTab = _ref.setSelectedTab;
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", {
        className: "guwmi-tab".concat(selectedTab === index ? " active" : ""),
        onClick: function() {
            return setSelectedTab(index);
        },
        id: "tabs-".concat(id, "-tab-").concat(index),
        "aria-selected": selectedTab === index,
        "aria-controls": "tabs-".concat(id, "-tabpanel-").concat(index),
        children: children
    });
}
// src/components/Tabs/TabPanels.tsx
var import_react13 = __toESM(require("react"), 1);
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
var import_jsx_runtime10 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className: "guwmi-tab-panels",
        ref: panels,
        children: childrenWithIndex
    });
}
// src/components/Tabs/TabPanel.tsx
var import_react14 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
function TabPanel(props) {
    var children = props.children, index = props.index;
    var _ref = (0, import_react14.useContext)(TabsContext_default), id = _ref.id, selectedTab = _ref.selectedTab;
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("section", {
        className: "guwmi-tab-panel".concat(selectedTab === index ? " active" : ""),
        role: "tabpanel",
        hidden: selectedTab !== index,
        "aria-labelledby": "tabs-".concat(id, "-tab-").concat(index),
        id: "tabs-".concat(id, "-tabpanel-").concat(index),
        children: children
    });
}
// src/components/Table/Table.tsx
var import_react17 = require("react");
// src/components/Table/TableRow.tsx
var import_react15 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, {
        children: cellData && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", {
            children: cellData.map(function(cell) {
                return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", {
                    children: cell.value
                }, "table-".concat(tableId, "-cell-").concat(cell.id, "-").concat(cell.col));
            })
        })
    });
}
// src/components/Inputs/Search/SearchInput.tsx
var import_react16 = require("react");
var import_icons_react = require("@tabler/icons-react");
var import_jsx_runtime13 = require("react/jsx-runtime");
function SearchInput(props) {
    var placeholder = props.placeholder;
    var id = (0, import_react16.useId)();
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", {
        className: "guwmi-search-input",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", {
                children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_icons_react.IconSearch, {
                    size: 18
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", {
                htmlFor: id,
                className: "guwmi-sr-only",
                children: "Search"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("input", {
                id: id,
                type: "search",
                placeholder: placeholder ? placeholder : "Search..."
            })
        ]
    });
}
// src/components/Table/Table.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function Table(props) {
    var headers = props.headers, rows = props.rows, isCondensed = props.isCondensed, isSearchable = props.isSearchable;
    var id = (0, import_react17.useId)();
    var classes = (0, import_react17.useMemo)(function() {
        return "guwmi-table-container".concat(isCondensed ? " condensed" : "");
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", {
        className: classes,
        children: [
            headers.length > 0 && isSearchable && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", {
                className: "guwmi-table-search",
                children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SearchInput, {})
            }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("table", {
                cellPadding: 0,
                cellSpacing: 0,
                children: headers.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, {
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("thead", {
                            children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", {
                                children: headers.map(function(header, i) {
                                    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("th", {
                                        children: header.title
                                    }, "table-".concat(id, "-header-").concat(i));
                                })
                            })
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tbody", {
                            children: rows.length > 0 ? rows.map(function(row) {
                                return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TableRow, {
                                    headers: headers,
                                    data: row,
                                    tableId: id
                                }, "table-".concat(id, "-row-").concat(row.id));
                            }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", {
                                children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", {
                                    colSpan: headers.length,
                                    children: "There is no data to display in the table"
                                })
                            })
                        })
                    ]
                }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tbody", {
                    children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", {
                        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", {
                            children: "No column headers provided for the table"
                        })
                    })
                })
            })
        ]
    });
}
// src/components/Accordion/Accordion.tsx
var import_react19 = require("react");
// src/components/Accordion/AccordionContext.ts
var import_react18 = require("react");
var AccordionContext = (0, import_react18.createContext)(null);
var AccordionContext_default = AccordionContext;
// src/components/Accordion/Accordion.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function Accordion(props) {
    var children = props.children, defaultOpen = props.defaultOpen;
    var _ref = _sliced_to_array((0, import_react19.useState)([]), 2), openAccordions = _ref[0], setOpenAccordions = _ref[1];
    (0, import_react19.useEffect)(function() {
        if (defaultOpen) {
            setOpenAccordions(_to_consumable_array(openAccordions).concat([
                defaultOpen
            ]));
        }
    }, [
        defaultOpen
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(AccordionContext_default.Provider, {
        value: {
            openAccordions: openAccordions,
            setOpenAccordions: setOpenAccordions
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
            className: "guwmi-accordion-container",
            children: children
        })
    });
}
// src/components/Accordion/AccrodionItem.tsx
var import_react20 = require("react");
var import_icons_react2 = require("@tabler/icons-react");
var import_jsx_runtime16 = require("react/jsx-runtime");
function AccordionItem(props) {
    var children = props.children, title = props.title, id = props.id;
    var _ref = (0, import_react20.useContext)(AccordionContext_default), openAccordions = _ref.openAccordions, setOpenAccordions = _ref.setOpenAccordions;
    var windowWidth = useWindowWidth();
    var panelRef = (0, import_react20.useRef)(null);
    var contentRef = (0, import_react20.useRef)(null);
    var _ref1 = _sliced_to_array((0, import_react20.useState)(false), 2), isOpen = _ref1[0], setIsOpen = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react20.useState)(false), 2), isAnimating = _ref2[0], setIsAnimating = _ref2[1];
    (0, import_react20.useEffect)(function() {
        if (openAccordions.includes(id)) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [
        openAccordions
    ]);
    var open = (0, import_react20.useCallback)(function() {
        setOpenAccordions(_to_consumable_array(openAccordions).concat([
            id
        ]));
        setIsAnimating(true);
    }, [
        id,
        openAccordions
    ]);
    var close = (0, import_react20.useCallback)(function() {
        setOpenAccordions(openAccordions.filter(function(value) {
            return value !== id;
        }));
        setIsAnimating(true);
    }, [
        id,
        openAccordions
    ]);
    (0, import_react20.useEffect)(function() {
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
    (0, import_react20.useEffect)(function() {
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
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", {
        className: "guwmi-accordion-item",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("button", {
                onClick: function() {
                    return isOpen ? close() : open();
                },
                id: "guwmi-accordion-controller-".concat(id),
                "aria-controls": "guwmi-accordion-panel-".concat(id),
                "aria-expanded": isOpen,
                className: isOpen ? "active" : null,
                children: [
                    title,
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_icons_react2.IconChevronRight, {
                        size: 20
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("section", {
                hidden: !isOpen && !isAnimating,
                id: "guwmi-accordion-panel-".concat(id),
                "aria-labelledby": "guwmi-accordion-controller-".concat(id),
                ref: panelRef,
                children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", {
                    className: "guwmi-accordion-panel-content",
                    ref: contentRef,
                    children: children
                })
            })
        ]
    });
}
// src/components/Cards/Cards.tsx
var import_react21 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
function Cards(props) {
    var children = props.children, _props_columns = props.columns, columns = _props_columns === void 0 ? 3 : _props_columns;
    var classes = (0, import_react21.useMemo)(function() {
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
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
        className: classes,
        children: children
    });
}
// src/components/Cards/Card.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function Card(props) {
    var title = props.title, subTitle = props.subTitle, image = props.image, children = props.children;
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", {
        className: "guwmi-card",
        children: [
            image && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("img", {
                src: image,
                alt: title ? title : "Card image",
                className: "guwmi-card-image"
            }),
            (title || subTitle) && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", {
                className: "guwmi-card-section guwmi-card-title",
                children: [
                    title && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", {
                        children: title
                    }),
                    subTitle && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", {
                        children: subTitle
                    })
                ]
            }),
            children
        ]
    });
}
// src/components/Cards/CardSection.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function CardSection(props) {
    var children = props.children;
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
        className: "guwmi-card-section",
        children: children
    });
}
// src/components/Notification/Notification.tsx
var import_react22 = require("react");
var import_icons_react3 = require("@tabler/icons-react");
var import_jsx_runtime20 = require("react/jsx-runtime");
function Notification(props) {
    var kind = props.kind, title = props.title, content = props.content;
    var _ref = _sliced_to_array((0, import_react22.useState)(true), 2), isVisible = _ref[0], setIsVisible = _ref[1];
    var titleText = (0, import_react22.useMemo)(function() {
        return title ? title : kind.charAt(0).toUpperCase() + kind.slice(1);
    }, [
        title,
        kind
    ]);
    var classes = (0, import_react22.useMemo)(function() {
        return "guwmi-notification ".concat(kind);
    }, [
        kind
    ]);
    return isVisible ? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("dialog", {
        className: classes,
        children: [
            kind === "error" ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_icons_react3.IconAlertCircle, {
                size: 20,
                stroke: 3
            }) : kind === "warning" ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_icons_react3.IconAlertTriangle, {
                size: 20,
                stroke: 3
            }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_icons_react3.IconCheck, {
                size: 20,
                stroke: 3
            }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h2", {
                children: titleText
            }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", {
                children: content
            }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", {
                onClick: function() {
                    return setIsVisible(false);
                },
                "aria-label": "Close notification",
                tabIndex: 0,
                children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_icons_react3.IconX, {
                    size: 18
                })
            })
        ]
    }) : null;
}
// src/components/Modal/Modal.tsx
var import_react23 = require("react");
var import_react_dom = __toESM(require("react-dom"), 1);
var import_icons_react4 = require("@tabler/icons-react");
var import_jsx_runtime21 = require("react/jsx-runtime");
function ModalPortal(props) {
    var children = props.children;
    var _ref = _sliced_to_array((0, import_react23.useState)(false), 2), hasDocument = _ref[0], setHasDocument = _ref[1];
    (0, import_react23.useEffect)(function() {
        setHasDocument(typeof document !== "undefined");
    }, []);
    return hasDocument ? import_react_dom.default.createPortal(children, document.body) : null;
}
function Modal(props) {
    var open = props.open, onClose = props.onClose, _props_preventScroll = props.preventScroll, preventScroll = _props_preventScroll === void 0 ? false : _props_preventScroll, _props_size = props.size, size = _props_size === void 0 ? "sm" : _props_size, children = props.children;
    var _ref = _sliced_to_array((0, import_react23.useState)(false), 2), isAnimating = _ref[0], setIsAnimating = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react23.useState)(false), 2), isOpen = _ref1[0], setIsOpen = _ref1[1];
    var overlayClasses = (0, import_react23.useMemo)(function() {
        return "guwmi-modal-overlay".concat(isOpen ? " open" : "");
    }, [
        isOpen
    ]);
    var classes = (0, import_react23.useMemo)(function() {
        return "guwmi-modal ".concat(size);
    }, [
        size
    ]);
    var modalOverlay = (0, import_react23.useRef)(null);
    var modal = (0, import_react23.useRef)(null);
    var modalButton = (0, import_react23.useRef)(null);
    var close = (0, import_react23.useCallback)(function() {
        setIsAnimating(true);
        setIsOpen(false);
        modalButton.current.focus();
    }, []);
    var setAnimationState = (0, import_react23.useCallback)(function() {
        setIsAnimating(false);
    }, []);
    var closeOutClick = (0, import_react23.useCallback)(function(e) {
        if (!modal.current.contains(e.target)) {
            close();
        }
    }, [
        modal.current
    ]);
    var handleTab = (0, import_react23.useCallback)(function(e) {
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
    var handleEscape = (0, import_react23.useCallback)(function(e) {
        if (e.key === "Escape") {
            close();
        }
    }, []);
    (0, import_react23.useEffect)(function() {
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
    (0, import_react23.useEffect)(function() {
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
    (0, import_react23.useEffect)(function() {
        if (!isOpen) {
            onClose();
        }
    }, [
        isOpen
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ModalPortal, {
        children: (open || isOpen || isAnimating) && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", {
            className: overlayClasses,
            ref: modalOverlay,
            children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("dialog", {
                className: classes,
                ref: modal,
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", {
                        className: "guwmi-modal-close-button",
                        "aria-label": "Close modal",
                        onClick: function() {
                            return close();
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_icons_react4.IconX, {
                            size: 20
                        })
                    }),
                    children
                ]
            })
        })
    });
}
// src/components/Drawer/Drawer.tsx
var import_react26 = require("react");
// src/hooks/useAnimation.ts
var import_react24 = require("react");
var useAnimation = function(componentState, classString, elementRef) {
    var _ref = _sliced_to_array((0, import_react24.useState)(componentState), 2), isInDOM = _ref[0], setIsInDOM = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react24.useState)(false), 2), isAnimating = _ref1[0], setIsAnimating = _ref1[1];
    var initialLoad = (0, import_react24.useRef)(true);
    var handleAnimation = function() {
        setIsAnimating(false);
    };
    var toggleClass = function() {
        if (!initialLoad.current) {
            setIsAnimating(true);
            if (componentState) {
                var _elementRef_current;
                (_elementRef_current = elementRef.current) === null || _elementRef_current === void 0 ? void 0 : _elementRef_current.classList.add(classString);
            } else {
                var _elementRef_current1;
                (_elementRef_current1 = elementRef.current) === null || _elementRef_current1 === void 0 ? void 0 : _elementRef_current1.classList.remove(classString);
            }
        }
    };
    (0, import_react24.useEffect)(function() {
        if (componentState) {
            setIsInDOM(true);
        } else {
            toggleClass();
        }
    }, [
        componentState
    ]);
    (0, import_react24.useEffect)(function() {
        if (isInDOM) {
            setTimeout(function() {
                return toggleClass();
            }, 25);
        }
    }, [
        isInDOM
    ]);
    (0, import_react24.useEffect)(function() {
        if (!componentState && !isAnimating) {
            setIsInDOM(false);
        }
    }, [
        componentState,
        isAnimating
    ]);
    (0, import_react24.useEffect)(function() {
        var _elementRef_current, _elementRef_current1;
        (_elementRef_current = elementRef.current) === null || _elementRef_current === void 0 ? void 0 : _elementRef_current.addEventListener("transitioncancel", handleAnimation);
        (_elementRef_current1 = elementRef.current) === null || _elementRef_current1 === void 0 ? void 0 : _elementRef_current1.addEventListener("transitionend", handleAnimation);
        return function() {
            var _elementRef_current, _elementRef_current1;
            (_elementRef_current = elementRef.current) === null || _elementRef_current === void 0 ? void 0 : _elementRef_current.removeEventListener("transitioncancel", handleAnimation);
            (_elementRef_current1 = elementRef.current) === null || _elementRef_current1 === void 0 ? void 0 : _elementRef_current1.removeEventListener("transitionend", handleAnimation);
        };
    }, [
        elementRef.current
    ]);
    (0, import_react24.useEffect)(function() {
        initialLoad.current = false;
    }, []);
    return {
        isVisible: isInDOM || isAnimating
    };
};
var useAnimation_default = useAnimation;
// src/components/Drawer/DrawerPortal.tsx
var import_react25 = require("react");
var import_react_dom2 = __toESM(require("react-dom"), 1);
function DrawerPortal(props) {
    var children = props.children;
    var _ref = _sliced_to_array((0, import_react25.useState)(false), 2), hasDocument = _ref[0], setHasDocument = _ref[1];
    (0, import_react25.useEffect)(function() {
        setHasDocument(typeof document !== "undefined");
    }, []);
    return hasDocument ? import_react_dom2.default.createPortal(children, document.body) : null;
}
// src/components/Drawer/Drawer.tsx
var import_icons_react5 = require("@tabler/icons-react");
var import_jsx_runtime22 = require("react/jsx-runtime");
function Drawer(props) {
    var open = props.open, onClose = props.onClose, _props_preventScroll = props.preventScroll, preventScroll = _props_preventScroll === void 0 ? false : _props_preventScroll, _props_position = props.position, position = _props_position === void 0 ? "left" : _props_position, children = props.children;
    var classes = (0, import_react26.useMemo)(function() {
        return "guwmi-drawer ".concat(position);
    }, [
        position
    ]);
    var drawerOverlay = (0, import_react26.useRef)(null);
    var drawer = (0, import_react26.useRef)(null);
    var drawerButton = (0, import_react26.useRef)(null);
    var isVisible = useAnimation_default(open, "open", drawerOverlay).isVisible;
    var closeOutClick = (0, import_react26.useCallback)(function(e) {
        if (!drawer.current.contains(e.target)) {
            onClose();
        }
    }, [
        drawer.current
    ]);
    var handleTab = (0, import_react26.useCallback)(function(e) {
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
    var handleEscape = (0, import_react26.useCallback)(function(e) {
        if (e.key === "Escape") {
            onClose();
        }
    }, []);
    (0, import_react26.useEffect)(function() {
        if (open) {
            var _drawer_current;
            drawerButton.current = document.activeElement;
            (_drawer_current = drawer.current) === null || _drawer_current === void 0 ? void 0 : _drawer_current.focus();
            document.addEventListener("click", closeOutClick);
            document.addEventListener("keydown", handleTab);
            document.addEventListener("keydown", handleEscape);
            if (preventScroll) {
                document.body.style.height = "100%";
                document.body.style.overflow = "hidden";
            }
        } else {
            var _drawerButton_current;
            (_drawerButton_current = drawerButton.current) === null || _drawerButton_current === void 0 ? void 0 : _drawerButton_current.focus();
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
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DrawerPortal, {
        children: isVisible && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", {
            className: "guwmi-drawer-overlay",
            ref: drawerOverlay,
            children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("aside", {
                className: classes,
                ref: drawer,
                "aria-modal": "true",
                tabIndex: 0,
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", {
                        className: "guwmi-drawer-close-button",
                        "aria-label": "Close drawer",
                        onClick: function() {
                            return onClose();
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_icons_react5.IconX, {
                            size: 20
                        })
                    }),
                    children
                ]
            })
        })
    });
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
});
//# sourceMappingURL=index.cjs.map