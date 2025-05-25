import { R as React, r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion } from "./index-Cxmww_Gd.js";
import { X } from "./Header-BblcJzyT.js";
const ZoomableImage = React.memo(({ src, alt, className = "" }) => {
  const [isZoomed, setIsZoomed] = reactExports.useState(false);
  const [position, setPosition] = reactExports.useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const imageRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const closeButtonRef = reactExports.useRef(null);
  const handleClose = reactExports.useCallback(() => {
    var _a;
    setIsZoomed(false);
    (_a = containerRef.current) == null ? void 0 : _a.focus();
  }, []);
  const handleClick = reactExports.useCallback(() => {
    if (!isLoading) {
      setIsZoomed((prevIsZoomed) => !prevIsZoomed);
    }
  }, [isLoading]);
  const handleKeyDown = reactExports.useCallback((e) => {
    if (e.key === "Escape" && isZoomed) {
      handleClose();
    } else if ((e.key === "Enter" || e.key === " ") && !isLoading) {
      e.preventDefault();
      handleClick();
    }
  }, [isZoomed, isLoading, handleClose, handleClick]);
  const handleMouseMove = reactExports.useCallback((e) => {
    if (!containerRef.current || !imageRef.current || !isZoomed) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width * 100;
    const y = (e.clientY - top) / height * 100;
    setPosition({ x, y });
  }, [isZoomed]);
  reactExports.useEffect(() => {
    const localHandleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        handleClose();
      }
    };
    const localHandleEscapeAndTab = (e) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "Tab") {
        if (closeButtonRef.current && document.activeElement === closeButtonRef.current) {
          e.preventDefault();
        } else if (closeButtonRef.current) {
          closeButtonRef.current.focus();
          e.preventDefault();
        }
      }
    };
    if (isZoomed) {
      document.addEventListener("mousedown", localHandleClickOutside);
      document.addEventListener("keydown", localHandleEscapeAndTab);
      const timer = setTimeout(() => {
        var _a;
        (_a = closeButtonRef.current) == null ? void 0 : _a.focus();
      }, 100);
      return () => {
        clearTimeout(timer);
        document.removeEventListener("mousedown", localHandleClickOutside);
        document.removeEventListener("keydown", localHandleEscapeAndTab);
      };
    }
  }, [isZoomed, handleClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: containerRef,
      className: `relative overflow-hidden ${!isLoading ? "cursor-zoom-in" : "cursor-wait"} ${className}`,
      onClick: handleClick,
      onMouseMove: handleMouseMove,
      onKeyDown: handleKeyDown,
      role: "button",
      tabIndex: 0,
      "aria-label": `${isZoomed ? "Close" : "Zoom"} image: ${alt}`,
      children: [
        isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex items-center justify-center bg-accent-bg dark:bg-slate-800 rounded-lg", children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" }),
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            ref: imageRef,
            src,
            alt,
            className: `w-full h-full object-cover transition-transform duration-300 ${isZoomed ? "scale-150" : "hover:scale-105"} ${isLoading ? "opacity-0" : "opacity-100"}`,
            style: isZoomed ? {
              transformOrigin: `${position.x}% ${position.y}%`
            } : {},
            onLoad: () => setIsLoading(false),
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isZoomed && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className: "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4",
            onClick: (e) => e.stopPropagation(),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Zoomed image view",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.img,
                {
                  initial: { scale: 0.5 },
                  animate: { scale: 1 },
                  exit: { scale: 0.5 },
                  src,
                  alt,
                  className: "max-w-full max-h-[90vh] object-contain"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  ref: closeButtonRef,
                  className: "absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors",
                  onClick: handleClose,
                  "aria-label": "Close zoomed view",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" })
                }
              )
            ]
          }
        ) })
      ]
    }
  );
});
ZoomableImage.displayName = "ZoomableImage";
export {
  ZoomableImage as Z
};
//# sourceMappingURL=ZoomableImage-BDfVuXWg.js.map
