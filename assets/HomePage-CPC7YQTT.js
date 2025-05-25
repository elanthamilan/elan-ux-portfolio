import { r as reactExports, j as jsxRuntimeExports, R as React, a as React$1, m as motion, L as Link, g as gsapWithCSS, S as ScrollTrigger, T as TextPlugin, A as AnimatePresence } from "./index-_Pnv69Rk.js";
import { c as createLucideIcon, u as useComposedRefs, a as createSlot, b as cn, C as Card, Z as ZoomableImage, d as CardHeader, e as CardTitle, f as CardDescription, g as CardContent, B as Badge, h as Button, S as SectionReveal, D as Download, M as Mail, P as Phone, i as MessageSquare, H as Header$1, F as Footer } from "./Header-MKRXhXpG.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowRight = createLucideIcon("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronDown = createLucideIcon("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GraduationCap = createLucideIcon("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Linkedin = createLucideIcon("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Network = createLucideIcon("Network", [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rocket = createLucideIcon("Rocket", [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz"
    }
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ShoppingCart = createLucideIcon("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
]);
function useIsMobile() {
  const [isMobile, setIsMobile] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = reactExports.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      var _a;
      const { scope, children, ...context } = props;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index]) || BaseContext;
      const value = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      var _a;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index]) || BaseContext;
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return reactExports.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
function createCollection(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope2] = createContextScope(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  );
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = React.useRef(null);
    const itemMap = React.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  };
  CollectionProvider.displayName = PROVIDER_NAME;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlotImpl = createSlot(COLLECTION_SLOT_NAME);
  const CollectionSlot = React.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionSlotImpl, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlotImpl = createSlot(ITEM_SLOT_NAME);
  const CollectionItemSlot = React.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = React.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      React.useEffect(() => {
        context.itemMap.set(ref, { ref, ...itemData });
        return () => void context.itemMap.delete(ref);
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionItemSlotImpl, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection2(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = React.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode) return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection2,
    createCollectionScope2
  ];
}
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}
var useLayoutEffect2 = (globalThis == null ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {
};
var useInsertionEffect = React$1[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  },
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  {
    const isControlledRef = reactExports.useRef(prop !== void 0);
    reactExports.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = reactExports.useCallback(
    (nextValue) => {
      var _a;
      if (isControlled) {
        const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value2 !== prop) {
          (_a = onChangeRef.current) == null ? void 0 : _a.call(onChangeRef, value2);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = reactExports.useState(defaultProp);
  const prevValueRef = reactExports.useRef(value);
  const onChangeRef = reactExports.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  reactExports.useEffect(() => {
    var _a;
    if (prevValueRef.current !== value) {
      (_a = onChangeRef.current) == null ? void 0 : _a.call(onChangeRef, value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function useStateMachine(initialState, machine) {
  return reactExports.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : reactExports.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? reactExports.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = reactExports.useState();
  const stylesRef = reactExports.useRef(null);
  const prevPresentRef = reactExports.useRef(present);
  const prevAnimationNameRef = reactExports.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  reactExports.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || (styles == null ? void 0 : styles.display) === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: reactExports.useCallback((node2) => {
      stylesRef.current = node2 ? getComputedStyle(node2) : null;
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return (styles == null ? void 0 : styles.animationName) || "none";
}
function getElementRef(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var useReactId = React$1[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = reactExports.useState(useReactId());
  useLayoutEffect2(() => {
    setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return id ? `radix-${id}` : "";
}
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            "data-state": getState$1(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME$1 = "CollapsibleTrigger";
var CollapsibleTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME$1, __scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState$1(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
CollapsibleTrigger.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "CollapsibleContent";
var CollapsibleContent = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME$1, props.__scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent.displayName = CONTENT_NAME$1;
var CollapsibleContentImpl = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME$1, __scopeCollapsible);
  const [isPresent, setIsPresent] = reactExports.useState(present);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = reactExports.useRef(0);
  const height = heightRef.current;
  const widthRef = reactExports.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = reactExports.useRef(isOpen);
  const originalStylesRef = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-state": getState$1(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
});
function getState$1(open) {
  return open ? "open" : "closed";
}
var Root = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;
var DirectionContext = reactExports.createContext(void 0);
function useDirection(localDir) {
  const globalDir = reactExports.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
var [Collection, useCollection, createCollectionScope] = createCollection(ACCORDION_NAME);
var [createAccordionContext, createAccordionScope] = createContextScope(ACCORDION_NAME, [
  createCollectionScope,
  createCollapsibleScope
]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { type, ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeAccordion, children: type === "multiple" ? /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplMultiple, { ...multipleProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplSingle, { ...singleProps, ref: forwardedRef }) });
  }
);
Accordion$1.displayName = ACCORDION_NAME;
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(
  ACCORDION_NAME,
  { collapsible: false }
);
var AccordionImplSingle = React.forwardRef(
  (props, forwardedRef) => {
    const {
      value: valueProp,
      defaultValue,
      onValueChange = () => {
      },
      collapsible = false,
      ...accordionSingleProps
    } = props;
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue ?? "",
      onChange: onValueChange,
      caller: ACCORDION_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionValueProvider,
      {
        scope: props.__scopeAccordion,
        value: React.useMemo(() => value ? [value] : [], [value]),
        onItemOpen: setValue,
        onItemClose: React.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionSingleProps, ref: forwardedRef }) })
      }
    );
  }
);
var AccordionImplMultiple = React.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...accordionMultipleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
    caller: ACCORDION_NAME
  });
  const handleItemOpen = React.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleItemClose = React.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AccordionValueProvider,
    {
      scope: props.__scopeAccordion,
      value,
      onItemOpen: handleItemOpen,
      onItemClose: handleItemClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionMultipleProps, ref: forwardedRef }) })
    }
  );
});
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
    const accordionRef = React.useRef(null);
    const composedRefs = useComposedRefs(accordionRef, forwardedRef);
    const getItems = useCollection(__scopeAccordion);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
      var _a;
      if (!ACCORDION_KEYS.includes(event.key)) return;
      const target = event.target;
      const triggerCollection = getItems().filter((item) => {
        var _a2;
        return !((_a2 = item.ref.current) == null ? void 0 : _a2.disabled);
      });
      const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
      const triggerCount = triggerCollection.length;
      if (triggerIndex === -1) return;
      event.preventDefault();
      let nextIndex = triggerIndex;
      const homeIndex = 0;
      const endIndex = triggerCount - 1;
      const moveNext = () => {
        nextIndex = triggerIndex + 1;
        if (nextIndex > endIndex) {
          nextIndex = homeIndex;
        }
      };
      const movePrev = () => {
        nextIndex = triggerIndex - 1;
        if (nextIndex < homeIndex) {
          nextIndex = endIndex;
        }
      };
      switch (event.key) {
        case "Home":
          nextIndex = homeIndex;
          break;
        case "End":
          nextIndex = endIndex;
          break;
        case "ArrowRight":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              moveNext();
            } else {
              movePrev();
            }
          }
          break;
        case "ArrowDown":
          if (orientation === "vertical") {
            moveNext();
          }
          break;
        case "ArrowLeft":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              movePrev();
            } else {
              moveNext();
            }
          }
          break;
        case "ArrowUp":
          if (orientation === "vertical") {
            movePrev();
          }
          break;
      }
      const clampedIndex = nextIndex % triggerCount;
      (_a = triggerCollection[clampedIndex].ref.current) == null ? void 0 : _a.focus();
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionImplProvider,
      {
        scope: __scopeAccordion,
        disabled,
        direction: dir,
        orientation,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            ...accordionProps,
            "data-orientation": orientation,
            ref: composedRefs,
            onKeyDown: disabled ? void 0 : handleKeyDown
          }
        ) })
      }
    );
  }
);
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, value, ...accordionItemProps } = props;
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    const triggerId = useId();
    const open = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionItemProvider,
      {
        scope: __scopeAccordion,
        open,
        disabled,
        triggerId,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root,
          {
            "data-orientation": accordionContext.orientation,
            "data-state": getState(open),
            ...collapsibleScope,
            ...accordionItemProps,
            ref: forwardedRef,
            disabled,
            open,
            onOpenChange: (open2) => {
              if (open2) {
                valueContext.onItemOpen(value);
              } else {
                valueContext.onItemClose(value);
              }
            }
          }
        )
      }
    );
  }
);
AccordionItem$1.displayName = ITEM_NAME;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...headerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.h3,
      {
        "data-orientation": accordionContext.orientation,
        "data-state": getState(itemContext.open),
        "data-disabled": itemContext.disabled ? "" : void 0,
        ...headerProps,
        ref: forwardedRef
      }
    );
  }
);
AccordionHeader.displayName = HEADER_NAME;
var TRIGGER_NAME = "AccordionTrigger";
var AccordionTrigger$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...triggerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trigger,
      {
        "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
        "data-orientation": accordionContext.orientation,
        id: itemContext.triggerId,
        ...collapsibleScope,
        ...triggerProps,
        ref: forwardedRef
      }
    ) });
  }
);
AccordionTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "AccordionContent";
var AccordionContent$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...contentProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content,
      {
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation,
        ...collapsibleScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
          ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
          ...props.style
        }
      }
    );
  }
);
AccordionContent$1.displayName = CONTENT_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var Root2 = Accordion$1;
var Item = AccordionItem$1;
var Header = AccordionHeader;
var Trigger2 = AccordionTrigger$1;
var Content2 = AccordionContent$1;
const Accordion = Root2;
const AccordionItem = reactExports.memo(
  // Wrapped AccordionItem with React.memo
  reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Item,
    {
      ref,
      className: cn("border-b", className),
      ...props
    }
  ))
);
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.memo(
  // Wrapped AccordionContent with React.memo
  reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    {
      ref,
      className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
    }
  ))
);
AccordionContent.displayName = Content2.displayName;
const CaseStudyCard = React.memo(({
  title,
  year,
  who,
  what,
  result,
  image,
  link,
  tags,
  description,
  index,
  cardClassName = "bg-accent-bg dark:bg-slate-800/50",
  // Default background
  accentColorName = "brand-primary",
  // Default accent color
  buttonVariant = "default"
}) => {
  const tagClasses = `bg-${accentColorName}/10 text-${accentColorName} border-${accentColorName}/20`;
  const cardBorderClasses = `border-b-4 border-${accentColorName}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: index * 0.1 },
      className: "h-full",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `rounded-3xl overflow-hidden transition-shadow duration-300 flex flex-col h-full ${cardClassName} ${cardBorderClasses}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ZoomableImage,
            {
              src: image,
              alt: title,
              className: "w-full h-48 md:h-56 object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 right-3 bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-medium text-foreground shadow-sm", children: [
            " ",
            year
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-4", children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl lg:text-2xl font-bold font-heading text-foreground mb-2", children: title }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardDescription, { className: "text-sm text-foreground/80", children: [
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground/60 uppercase tracking-wider", children: "Client:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground mt-0.5", children: who }),
                " "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground/60 uppercase tracking-wider", children: "Service:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground mt-0.5", children: what }),
                " "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground/60 uppercase tracking-wider", children: "Impact:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground mt-0.5", children: result }),
                " "
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex-grow pt-0 pb-4", children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 text-sm text-foreground", children: [
            " ",
            description
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
            " ",
            tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: `px-2.5 py-0.5 text-xs border ${tagClasses}`,
                children: tag
              },
              tag
            ))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: buttonVariant, size: "default", className: "w-full rounded-t-none mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: link, className: "flex items-center justify-center", children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View Case Study" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" }),
          " "
        ] }) })
      ] })
    }
  );
});
CaseStudyCard.displayName = "CaseStudyCard";
const SKILLS_DATA = [
  {
    title: "UX Strategy",
    description: "Objectives clarification, Employs methodology, Vision and solutioning, Planning prioritization, Roadmap strategies, Execution oversight, Measurement.",
    icon: "📈",
    size: "large",
    color: "bg-accent-light border-brand-primary"
  },
  {
    title: "User Research",
    description: "Owns research strategy, Performs heuristic reviews, Plans and conducts research, Reviews analytics, Builds personas, empathy maps, journeys, Voice of the user/customer.",
    icon: "🔍",
    size: "small",
    color: "bg-accent-light border-brand-secondary"
  },
  {
    title: "Product Design",
    description: "End-to-end product design, Wireframing, Prototyping, Visual design, Interaction design, Usability testing.",
    icon: "🎨",
    size: "large",
    color: "bg-accent-bg border-brand-primary"
  }
];
const SkillCardDisplay = React.memo(({ skill, index, onCardClick }) => {
  const getColSpan = () => {
    if (skill.size === "large") return "md:col-span-2";
    if (skill.size === "small") return "md:col-span-1";
    return "md:col-span-1";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `reveal ${getColSpan()} sm:col-span-1`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: `flex flex-col items-start justify-between rounded-3xl shadow-md hover:shadow-lg hover:scale-[1.02] focus-within:ring-2 focus-within:ring-brand-primary focus-within:ring-offset-2 transition-all duration-300 ease-in-out ${skill.color} px-3 py-4 xs:p-4 ${skill.size === "large" ? "md:p-8" : skill.size === "small" ? "sm:p-4" : "sm:p-6"} h-full border`,
          tabIndex: 0,
          "aria-label": skill.title,
          onClick: onCardClick,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col items-start p-0 h-full text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-3xl xs:text-4xl ${index < 2 ? "text-brand-primary" : "text-brand-secondary"}`, role: "img", "aria-label": skill.title, children: skill.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold text-foreground ${skill.size === "large" ? "text-xl xs:text-2xl" : skill.size === "small" ? "text-base xs:text-lg" : "text-lg xs:text-xl"}`, children: skill.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm xs:text-base", children: skill.description })
          ] })
        }
      )
    }
  );
});
SkillCardDisplay.displayName = "SkillCardDisplay";
const SkillsBentoGrid = React.memo(() => {
  const gridRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    gsapWithCSS.registerPlugin(ScrollTrigger);
  }, []);
  reactExports.useEffect(() => {
    let st;
    const currentGridRef = gridRef.current;
    if (currentGridRef) {
      gsapWithCSS.set(currentGridRef.querySelectorAll(".reveal"), { opacity: 1, y: 0 });
      st = ScrollTrigger.create({
        trigger: currentGridRef,
        start: "top center+=200",
        toggleActions: "play none none reverse",
        onEnter: () => gsapWithCSS.fromTo(
          currentGridRef.querySelectorAll(".reveal"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power4.out" }
        )
      });
    }
    return () => {
      st == null ? void 0 : st.kill();
    };
  }, []);
  const handleRipple = reactExports.useCallback((e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-12 xs:py-16 md:py-24 bg-background text-foreground", children: [
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8", children: [
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 md:mb-14", children: [
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl xs:text-3xl sm:text-4xl font-heading font-semibold mb-3 xs:mb-4 text-foreground", children: "Skills & Expertise" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground max-w-2xl mx-auto text-base xs:text-lg leading-relaxed", children: [
          " ",
          "With over 8 years of experience, I've developed a comprehensive skill set focused on creating exceptional user experiences for enterprise products."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: gridRef, className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 md:gap-8 max-w-7xl mx-auto", children: [
        " ",
        SKILLS_DATA.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          SkillCardDisplay,
          {
            skill,
            index,
            onCardClick: handleRipple
          },
          skill.title
        ))
      ] })
    ] })
  ] });
});
SkillsBentoGrid.displayName = "SkillsBentoGrid";
const AnimatedHeroBackground = React.memo(() => {
  const containerRef = reactExports.useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  reactExports.useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) {
      return;
    }
    const svg = containerRef.current;
    if (!svg) return;
    const numLines = 25;
    const lines = [];
    const brandPrimaryHsl = { h: 181, s: 48, l: 32 };
    for (let i = 0; i < numLines; i++) {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      const x1 = Math.random() * 100;
      const y1 = Math.random() * 100;
      const length = Math.random() * 15 + 5;
      const angle = Math.random() * 360;
      const x2 = x1 + length * Math.cos(angle * Math.PI / 180);
      const y2 = y1 + length * Math.sin(angle * Math.PI / 180);
      gsapWithCSS.set(line, {
        attr: {
          x1: `${x1}%`,
          y1: `${y1}%`,
          x2: `${x2}%`,
          y2: `${y2}%`,
          // Use HSL for brand-primary. Assuming --primary-hsl is like "181, 48%, 32%"
          stroke: `hsla(${brandPrimaryHsl.h}, ${brandPrimaryHsl.s}%, ${brandPrimaryHsl.l}%, ${Math.random() * 0.1 + 0.05})`,
          // Opacity 0.05 to 0.15
          "stroke-width": Math.random() * 0.3 + 0.1
          // Stroke width 0.1 to 0.4
        }
      });
      svg.appendChild(line);
      lines.push(line);
    }
    const tl = gsapWithCSS.timeline({ repeat: -1 });
    lines.forEach((line, index) => {
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 5;
      tl.to(line, {
        opacity: Math.random() * 0.2 + 0.1,
        // Target opacity 0.1 to 0.3
        duration: duration / 2,
        yoyo: true,
        repeat: 1,
        // This will make the opacity part of the yoyo
        ease: "sine.inOut"
      }, delay);
      if (index % 3 === 0) {
        const driftX = (Math.random() - 0.5) * 10;
        const driftY = (Math.random() - 0.5) * 10;
        tl.to(line, {
          attr: {
            x1: `+=${driftX}%`,
            y1: `+=${driftY}%`,
            x2: `+=${driftX}%`,
            // Keep line length and angle roughly the same
            y2: `+=${driftY}%`
          },
          duration,
          ease: "sine.inOut",
          yoyo: true,
          // Yoyo the positional drift
          repeat: 1
        }, delay);
      }
    });
    return () => {
      lines.forEach((line) => gsapWithCSS.killTweensOf(line));
      if (svg) {
        lines.forEach((line) => {
          if (svg.contains(line)) {
            svg.removeChild(line);
          }
        });
      }
    };
  }, [prefersReducedMotion]);
  if (prefersReducedMotion) {
    const brandPrimaryHsl = { h: 181, s: 48, l: 32 };
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden z-0 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100%", height: "100%", className: "block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "10%", y1: "20%", x2: "90%", y2: "30%", stroke: `hsla(${brandPrimaryHsl.h}, ${brandPrimaryHsl.s}%, ${brandPrimaryHsl.l}%, 0.07)`, strokeWidth: "0.2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "20%", y1: "80%", x2: "70%", y2: "10%", stroke: `hsla(${brandPrimaryHsl.h}, ${brandPrimaryHsl.s}%, ${brandPrimaryHsl.l}%, 0.07)`, strokeWidth: "0.2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50%", y1: "50%", x2: "30%", y2: "70%", stroke: `hsla(${brandPrimaryHsl.h}, ${brandPrimaryHsl.s}%, ${brandPrimaryHsl.l}%, 0.07)`, strokeWidth: "0.2" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden z-0 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ref: containerRef, width: "100%", height: "100%", className: "block", preserveAspectRatio: "xMidYMid slice" }) });
});
AnimatedHeroBackground.displayName = "AnimatedHeroBackground";
gsapWithCSS.registerPlugin(TextPlugin);
const PHRASES = [
  "Simplifying Enterprise Experiences",
  "UX Designer specializing in Enterprise SaaS",
  "Crafting User-Centric Digital Experiences",
  "Transforming Complexity into Clarity",
  "Expert in EdTech & HR Tech"
];
const INDUSTRIES = [
  { title: "EdTech", iconName: "GraduationCap", content: "Led UX strategy and design for SIS, LMS, Recruitment App, and Student Portals.   Revamped SIS through evaluation, design systems, and redesign of 30+ features.    Directed LMS design focusing on accessibility, usability, and scalable workflows.    Designed Student Portal for seamless navigation and mobile responsiveness.    Created eLearning platform for trading courses." },
  { title: "eCommerce", iconName: "ShoppingCart", content: "Redesigned key flows for a B2B pharma eCommerce site.   Designed eCommerce experiences for brands like Robinson Co. and Natural Partners.    Improved product discovery, navigation and checkout flows.    Crafted scalable UI systems for quick orders, subscriptions, and account management." },
  { title: "Connected Tech", iconName: "Network", content: "Led design for connected home interfaces (consumer & industrial IoT).   Founding member of product/design team, revamped platform, built design system.    Designed subscription-based water purifier interface and mobile app for idly dosa batter making machine. Experience includes designing asset management solutions for real-time tool tracking in industrial IoT settings." },
  { title: "Startup", iconName: "Rocket", content: "Contributed to the design and development of various startup products, focusing on user-centered design and rapid iteration.  " }
];
const ICON_MAP = {
  GraduationCap,
  ShoppingCart,
  Network,
  Rocket
};
const Hero = React.memo(() => {
  const [loaded, setLoaded] = reactExports.useState(false);
  const isMobile = useIsMobile();
  const headlineRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    setLoaded(true);
    if (headlineRef.current) {
      try {
        const mm = gsapWithCSS.matchMedia();
        mm.add({
          isReduced: "(prefers-reduced-motion: reduce)",
          isNotReduced: "(prefers-reduced-motion: no-preference)"
        }, (context) => {
          if (!context.conditions) return;
          const { isReduced, isNotReduced } = context.conditions;
          if (isNotReduced) {
            gsapWithCSS.set(headlineRef.current, { text: "" });
            const tl = gsapWithCSS.timeline({ repeat: -1, repeatDelay: 1 });
            PHRASES.forEach((phrase, index) => {
              if (index === 0) {
                tl.set(headlineRef.current, { text: "", opacity: 0, y: 20 }).to(headlineRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" }).to(headlineRef.current, { text: phrase, duration: phrase.length * 0.06, ease: "none" }, "+=0.2").to(headlineRef.current, { duration: 2 }, "+=0.5");
              } else {
                tl.to(headlineRef.current, { opacity: 0, y: -20, duration: 0.4, ease: "power1.in" });
                tl.set(headlineRef.current, { text: "", opacity: 0, y: 20 }).to(headlineRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" }).to(headlineRef.current, { text: phrase, duration: phrase.length * 0.06, ease: "none" }, "+=0.2").to(headlineRef.current, { duration: 2 }, "+=0.5");
              }
            });
            tl.to(headlineRef.current, { opacity: 0, y: -20, duration: 0.4, ease: "power1.in" });
          } else if (isReduced) {
            gsapWithCSS.set(headlineRef.current, { text: PHRASES[0], opacity: 0 });
            gsapWithCSS.to(headlineRef.current, { opacity: 1, duration: 1, ease: "power1.out" });
          }
          return () => {
            gsapWithCSS.killTweensOf(headlineRef.current);
          };
        });
        return () => {
          mm.revert();
        };
      } catch (error) {
        console.error("Error in Hero animation:", error);
        if (headlineRef.current) {
          headlineRef.current.textContent = PHRASES[0];
        }
      }
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `py-12 xs:py-16 md:py-24 text-foreground relative bg-background fade-in ${loaded ? "loaded" : ""}`, style: { opacity: loaded ? 1 : 0 }, "aria-labelledby": "hero-headline", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedHeroBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 md:space-y-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-brand-primary text-white px-3 py-1.5 text-sm font-medium rounded-md shadow-sm", children: "Enterprise UX Designer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { ref: headlineRef, id: "hero-headline", className: "mt-3 mb-5 text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight text-foreground", style: { minHeight: "120px" }, children: PHRASES[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center mb-6 space-x-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl md:text-2xl font-sans font-medium text-foreground", children: [
          "Hi, I'm ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading text-brand-primary", children: "Elanthamilan" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { role: "img", "aria-label": "wave", children: "👋" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { role: "img", "aria-label": "nerd face", children: "🤓" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground text-base xs:text-lg md:text-xl max-w-xl mb-8 leading-relaxed", children: [
          " ",
          "Experienced UX designer specializing in enterprise SaaS, EdTech, and HR Tech. I transform complex business challenges into intuitive, user-centered solutions that drive measurable impact and enhance usability for large-scale products."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full mb-6 flex justify-start", children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "default",
              size: "lg",
              asChild: true,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/Elanthamilan_UX_Resume.pdf", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2.5", children: [
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-5 w-5", "aria-hidden": "true" }),
                "Download Resume"
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-5 border-t border-b border-slate-200 dark:border-slate-700", children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-foreground mb-3 text-md xs:text-lg", children: "Brands I Have Worked With" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center overflow-x-auto space-x-8 py-2", children: [
              " ",
              [{ src: "/Elanable-uploads/Camu.png", alt: "Camu" }, { src: "/Elanable-uploads/Mastek.png", alt: "Mastek" }, { src: "/Elanable-uploads/Geninfy.jpg", alt: "Geninfy" }, { src: "/Elanable-uploads/Oceo.svg", alt: "Oceo" }].map((brand) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all text-center flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: brand.src, alt: brand.alt, width: "80", height: "40", className: "object-contain mx-auto" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/80 mt-1.5", children: brand.alt }),
                " "
              ] }, brand.alt))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 xs:gap-4 sm:grid-cols-4 border-b border-slate-200 dark:border-slate-700 py-5", children: [
          " ",
          [{ label: "Experience", value: "8+ Years" }, { label: "Products", value: "10+" }, { label: "Features", value: "30+" }, { label: "Design systems", value: "2" }].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground/70 block uppercase tracking-wider", children: stat.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-lg xs:text-xl md:text-2xl block text-foreground mt-0.5", children: stat.value }),
            " "
          ] }, stat.label))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-5 border-b border-slate-200 dark:border-slate-700", children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-foreground mb-3 text-md xs:text-lg", children: "Industries I have Worked In" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, defaultValue: "EdTech", className: "w-full text-foreground", children: INDUSTRIES.map((industry) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: industry.title, className: "border-b border-slate-200 dark:border-slate-700 last:border-b-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionTrigger, { className: "flex items-center w-full py-3 px-1 text-left font-semibold text-base xs:text-lg rounded-md hover:bg-accent-bg focus-visible:bg-accent-bg focus-visible:ring-1 focus-visible:ring-brand-primary transition-colors data-[state=open]:bg-accent-light data-[state=open]:text-brand-primary", children: [
              " ",
              (() => {
                const IconComponent = ICON_MAP[industry.iconName];
                return IconComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "mr-2.5 h-4 w-4 xs:h-5 xs:w-5 flex-shrink-0 text-brand-primary", "aria-hidden": "true" }) : null;
              })(),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: industry.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionContent, { className: "pt-2 pb-3 px-1 text-foreground text-sm xs:text-base leading-relaxed bg-transparent rounded-b-md", children: [
              " ",
              industry.content
            ] })
          ] }, industry.title)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-5", children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-foreground mb-3 text-md xs:text-lg", children: "Get In Touch" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xs:grid-cols-2 gap-2.5", children: [
            " ",
            [
              { label: "elanthamilan12@gmail.com", text: "elanthamilan12@gmail.com", icon: Mail, action: () => {
                navigator.clipboard.writeText("elanthamilan12@gmail.com");
                alert("Email copied to clipboard!");
              }, aria: "Copy Email to Clipboard" },
              { label: "+918148622302", text: "+918148622302", icon: Phone, action: () => {
                navigator.clipboard.writeText("+918148622302");
                alert("Phone number copied to clipboard!");
              }, aria: "Copy Phone to Clipboard" },
              { label: "WhatsApp", text: "WhatsApp", icon: MessageSquare, href: "https://wa.me/918148622302", aria: "Chat on WhatsApp" },
              { label: "LinkedIn", text: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/elanthamilan", aria: "Visit LinkedIn Profile" }
            ].map((item) => item.href ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: item.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "w-full inline-flex items-center justify-center px-4 py-3 rounded-md text-xs xs:text-sm font-medium min-h-[44px] border border-brand-primary/50 bg-transparent text-brand-primary shadow-sm hover:bg-brand-primary/10 hover:text-brand-primary hover:border-brand-primary focus-visible:ring-1 focus-visible:ring-brand-primary active:scale-95 transition-all duration-200 ease-in-out",
                "aria-label": item.aria,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "mr-1.5 h-3.5 w-3.5 xs:h-4 xs:w-4 flex-shrink-0", "aria-hidden": "true" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.text })
                ]
              },
              item.label
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                onClick: item.action,
                className: "w-full inline-flex items-center justify-center px-4 py-3 rounded-md text-xs xs:text-sm font-medium focus-visible:ring-1 focus-visible:ring-brand-primary min-h-[44px]",
                "aria-label": item.aria,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "mr-1.5 h-3.5 w-3.5 xs:h-4 xs:w-4 flex-shrink-0", "aria-hidden": "true" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.text })
                ]
              },
              item.label
            ))
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: isMobile ? "mt-8 w-full" : "mt-0 md:mt-12", style: { maxWidth: "720px", width: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl xs:text-3xl md:text-4xl font-heading font-semibold text-foreground", id: "case-studies-heading", children: "Case Studies" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", role: "list", "aria-labelledby": "case-studies-heading", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CaseStudyCard,
            {
              title: "Campus Hiring Platform",
              year: "2023",
              who: "Top Indian University",
              what: "End-to-end campus hiring solution",
              result: "50% faster hiring",
              image: "/Elanable-uploads/Camu Campus Recruitment App.png",
              link: "/case-study/campus-hiring",
              tags: ["EdTech", "SaaS", "UX/UI"],
              description: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-sm text-foreground", children: "A platform to streamline campus hiring processes." }) }),
              index: 0,
              cardClassName: "bg-accent-light dark:bg-slate-800/60",
              accentColorName: "brand-primary"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CaseStudyCard,
            {
              title: "AI Student Course Planner",
              year: "2025",
              who: "University Students",
              what: "AI-powered course planning tool",
              result: "60% less scheduling time",
              image: "/Elanable-uploads/78be9a59-8230-4ea5-b024-d96fd3cdd83e.png",
              link: "/case-study/student-planner",
              tags: ["AI", "UX Research", "EdTech"],
              description: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-sm text-foreground", children: "A redesign of a student course planning tool with AI integration." }) }),
              index: 1,
              cardClassName: "bg-accent-bg",
              accentColorName: "brand-secondary",
              buttonVariant: "secondary"
            }
          )
        ] })
      ] }) })
    ] }) })
  ] });
});
Hero.displayName = "Hero";
const HeroWithSkills = React.memo(() => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsBentoGrid, {}) })
  ] });
});
HeroWithSkills.displayName = "HeroWithSkills";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToTop();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      initial: { opacity: 0, scale: 0.5, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.5, y: 20 },
      transition: { type: "spring", stiffness: 300, damping: 20 },
      onClick: scrollToTop,
      onKeyDown: handleKeyDown,
      className: "fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 transition-all duration-200 z-50",
      "aria-label": "Scroll to top",
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "material-symbols-outlined text-xl", "aria-hidden": "true", children: "arrow_upward" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Scroll to top" })
      ]
    }
  ) });
};
const HomePage = () => {
  const [isThemeInitialized, setIsThemeInitialized] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem("theme");
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme;
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
        setIsThemeInitialized(true);
      } catch (error) {
        console.error("Error initializing theme:", error);
        document.documentElement.classList.remove("dark");
        setIsThemeInitialized(true);
      }
    };
    initializeTheme();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  if (!isThemeInitialized || isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-pulse flex flex-col items-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-primary/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-32 bg-primary/20 rounded" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 p-6 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroWithSkills, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollToTop, {})
  ] });
};
export {
  HomePage as default
};
//# sourceMappingURL=HomePage-CPC7YQTT.js.map
