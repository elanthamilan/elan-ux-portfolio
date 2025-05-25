import { R as React, r as reactExports, j as jsxRuntimeExports, a as reactDomExports, L as Link } from "./index-CihZPb68.js";
import { u as useEmblaCarousel, Z as ZoomableImage, M as Maximize2, C as ChevronLeft, b as ChevronRight, X, H as Header, A as ArrowLeft, S as SectionReveal, B as Badge, a as BigImageCarousel, F as Footer } from "./SectionReveal-Bx6EW7PQ.js";
const PlaceholderSVG = ({ width = 400, height = 300, text = "Design Process" }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width, height, viewBox: `0 0 ${width} ${height}`, fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width, height, rx: "16", fill: "#F2F8F7" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "20", y: "20", width: width - 40, height: "40", rx: "6", fill: "#3E8385" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "30", y: "30", width: "80", height: "8", rx: "4", fill: "#ffffff", opacity: "0.9" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: width - 80, y: "30", width: "50", height: "8", rx: "4", fill: "#ffffff", opacity: "0.7" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "20", y: "80", width: width - 40, height: height - 120, rx: "8", fill: "#FBF9F8", stroke: "#E0E7EF", strokeWidth: "1" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: width / 2, cy: height / 2, r: "20", fill: "#385681", opacity: "0.8" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50%", y: "85%", textAnchor: "middle", dy: ".3em", fontSize: "14", fill: "#385681", fontWeight: "500", children: text })
] });
const ImageCarousel = React.memo(({ images, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: images.length > 1,
    align: "start",
    containScroll: "trimSnaps",
    ...options
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = reactExports.useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = reactExports.useState(false);
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const [isFullscreen, setIsFullscreen] = reactExports.useState(false);
  const [fullscreenIndex, setFullscreenIndex] = reactExports.useState(0);
  const scrollPrev = reactExports.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = reactExports.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = reactExports.useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const handleImageClick = reactExports.useCallback((index) => {
    setFullscreenIndex(index);
    setIsFullscreen(true);
    document.body.style.overflow = "hidden";
  }, []);
  const handleCloseFullscreen = reactExports.useCallback(() => {
    setIsFullscreen(false);
    document.body.style.overflow = "unset";
  }, []);
  const onSelect = reactExports.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);
  reactExports.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
    };
  }, [emblaApi, onSelect]);
  reactExports.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isFullscreen) {
        handleCloseFullscreen();
      }
    };
    if (isFullscreen) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset";
      };
    }
  }, [isFullscreen, handleCloseFullscreen]);
  if (!images || images.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-foreground/70", children: "No images to display." });
  }
  if (images.length === 1) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-lg relative group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cursor-pointer", onClick: () => handleImageClick(0), children: images[0].svgPlaceholder ? /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderSVG, { text: images[0].alt || "Design Process" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomableImage, { src: images[0].src, alt: images[0].alt || "Image", className: "w-full h-auto object-contain aspect-video" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-all z-10 opacity-0 group-hover:opacity-100",
          onClick: (e) => {
            e.stopPropagation();
            handleImageClick(0);
          },
          "aria-label": "Full screen view",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "w-4 h-4 text-brand-primary" })
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group/carousel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-lg", ref: emblaRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: images.map((image, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] min-w-0 pl-4",
        "aria-roledescription": "slide",
        "aria-label": `${index + 1} of ${images.length}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group cursor-pointer", onClick: () => handleImageClick(index), children: [
          image.svgPlaceholder ? /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderSVG, { text: image.alt || "Design Process" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            ZoomableImage,
            {
              src: image.src,
              alt: image.alt || `Image ${index + 1}`,
              className: "w-full h-auto object-contain aspect-[4/3] p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-all z-10 opacity-0 group-hover:opacity-100",
              onClick: (e) => {
                e.stopPropagation();
                handleImageClick(index);
              },
              "aria-label": "Full screen view",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "w-3 h-3 text-brand-primary" })
            }
          )
        ] })
      },
      index
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "absolute top-1/2 -translate-y-1/2 left-2 p-2 bg-brand-primary/60 hover:bg-brand-primary text-white rounded-full shadow-md transition-opacity opacity-0 group-hover/carousel:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed z-10",
        onClick: scrollPrev,
        disabled: !prevBtnEnabled,
        "aria-label": "Previous slide",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 24 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "absolute top-1/2 -translate-y-1/2 right-2 p-2 bg-brand-primary/60 hover:bg-brand-primary text-white rounded-full shadow-md transition-opacity opacity-0 group-hover/carousel:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed z-10",
        onClick: scrollNext,
        disabled: !nextBtnEnabled,
        "aria-label": "Next slide",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 24 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3", children: [
      " ",
      images.map((_, index) => (
        // Added a larger invisible touch area around the visible dot for easier interaction
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => scrollTo(index),
            className: "p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1",
            "aria-label": `Go to slide ${index + 1}`,
            "aria-current": index === selectedIndex ? "true" : "false",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `block w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full transition-colors ${// Slightly larger visible dot, responsive
                index === selectedIndex ? "bg-brand-primary" : "bg-brand-primary/40 hover:bg-brand-primary/70"}`
              }
            )
          },
          index
        )
      ))
    ] }),
    isFullscreen && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "fixed inset-0 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm z-[10000]",
          style: { position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh" },
          onClick: handleCloseFullscreen,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "absolute top-4 right-4 z-[10001] text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 backdrop-blur-sm",
                onClick: handleCloseFullscreen,
                "aria-label": "Close full screen (Press Escape)",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-[95vw] max-h-[95vh] flex items-center justify-center", children: images[fullscreenIndex].svgPlaceholder ? /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderSVG, { width: 800, height: 600, text: images[fullscreenIndex].alt || "Full Design View" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: images[fullscreenIndex].src,
                alt: images[fullscreenIndex].alt || `Image ${fullscreenIndex + 1}`,
                className: "max-w-full max-h-full object-contain shadow-2xl",
                onClick: (e) => e.stopPropagation(),
                style: { maxWidth: "95vw", maxHeight: "95vh" }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm flex items-center space-x-4", children: [
              images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                fullscreenIndex + 1,
                " / ",
                images.length
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Click outside or press Escape to close" })
            ] })
          ]
        }
      ),
      document.body
    )
  ] });
});
ImageCarousel.displayName = "ImageCarousel";
const placeholderImages = [
  { src: "/placeholder.svg", alt: "Placeholder Image 1 for carousel" },
  { src: "/placeholder.svg", alt: "Placeholder Image 2 for carousel" },
  { src: "/placeholder.svg", alt: "Placeholder Image 3 for carousel" }
];
const CaseStudyStudentPlanner = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { id: "main-content", className: "flex-grow container mx-auto px-2 xs:px-4 sm:px-6 py-8 xs:py-12 md:py-16 bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center text-brand-primary hover:text-brand-secondary transition-colors mb-6 xs:mb-8 text-sm font-medium", children: [
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16, className: "mr-1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Back to Home" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "max-w-4xl mx-auto space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-brand-secondary text-white px-3 py-1.5 text-sm font-medium rounded-md shadow-sm", children: "Case Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-brand-primary/10 text-brand-primary border-brand-primary/20 px-3 py-1.5 text-sm font-medium rounded-md", children: "AI Integration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-brand-tertiary/10 text-brand-tertiary border-brand-tertiary/20 px-3 py-1.5 text-sm font-medium rounded-md", children: "EdTech" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/70 ml-auto", children: "Published May 2025" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl xs:text-5xl sm:text-6xl font-bold mb-6 text-foreground leading-tight font-heading", children: "From Chaos to Clarity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl xs:text-2xl text-foreground/80 mb-8 leading-relaxed font-medium", children: "Introducing an AI-powered Student Course Planner to eliminate scheduling frustrations and empower students by transforming how they build their academic lives" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 p-6 bg-accent-bg rounded-2xl border border-brand-secondary/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-brand-secondary mb-1", children: "Staff UX" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground/70 uppercase tracking-wider", children: "My Role" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground/60", children: "Lead Designer" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-brand-primary mb-1", children: "60% faster" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground/70 uppercase tracking-wider", children: "Target" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground/60", children: "Scheduling efficiency" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-brand-tertiary mb-1", children: "40% adoption" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground/70 uppercase tracking-wider", children: "Goal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground/60", children: "AI recommendations" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal w-full bg-card rounded-3xl overflow-hidden shadow-xl border border-brand-secondary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          BigImageCarousel,
          {
            images: [
              { src: "/Elanable-uploads/78be9a59-8230-4ea5-b024-d96fd3cdd83e.png", alt: "Student Course Planner AI Advisor Interface" },
              { src: "/Elanable-uploads/Geninfy.jpg", alt: "AI Recommendation Engine" },
              { svgPlaceholder: true, alt: "Calendar Visualization System" }
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-accent-light shadow-lg border border-brand-secondary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-secondary font-heading reveal", children: "Overview/Challenge" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "Project Name:" }),
            " Student Course Planner Redesign (AI Advisor Integration) (Shipped: May 2025)."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal", children: 'The existing Student Course Planner was outdated and a major source of frustration for students like Priya, a part-time undergrad juggling a job. She voiced a common sentiment: "I spend hours cross-referencing courses, and I still end up with conflicts. I just want something that fits my life!" The planner was a bottleneck, overwhelming students with manual conflict checks, poor visualization, and a disjointed flow from planning to registration. Administrators were also swamped with scheduling tickets.' }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground text-base xs:text-lg leading-relaxed space-y-2.5 xs:space-y-3 reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "Business Goals:" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-4 xs:pl-5 space-y-1 xs:space-y-1.5 reveal", children: [
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal", children: "Reduce scheduling bottlenecks by 60%." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal", children: "Increase schedule-to-cart conversions by 30%." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal", children: "Achieve 40% adoption of a new AI-driven recommendation feature." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 xs:mt-3 reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "User Pain Points included:" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-4 xs:pl-5 space-y-1 xs:space-y-1.5 reveal", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal", children: "Manual conflict checks: Tedious cross-referencing with potential overlaps." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal", children: "Cognitive Overload: Difficulty managing constraints like work hours and time zones." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal", children: "Poor Visualization: No intuitive way to see busy times or customize schedules." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal", children: "Disconnected Steps: Planning and registration felt separate, lacking a seamless handoff." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 xs:mt-3 reveal", children: "The mission was to modernize the tool, integrating an AI Advisor to deliver personalized schedules while keeping students in control, aiming to make the tool adapt to students' lives." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "border-l-4 border-brand-secondary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 xs:mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "not-italic font-sans font-medium text-brand-secondary text-base xs:text-lg", children: "Elan's Thinking: Identifying the Core Problem" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm xs:text-base", children: `"Sitting in that focus group, watching Priya's frustration, I realized we weren't just fixing a tool—we were fixing a broken experience. The manual conflict checks were wasting hours of students' lives. The poor visualization meant students couldn't 'see' their schedules easily. And the disconnected steps between planning and registration? Pure friction. I kept thinking: how can we make this tool adapt to students' lives, not force students to adapt to the tool?"` })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-accent-bg shadow-lg border border-brand-primary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-primary font-heading reveal", children: "My Role & Responsibilities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "Role:" }),
            " Staff UX Designer (Lead)."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed text-base xs:text-lg reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "Key Responsibilities:" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1 xs:space-y-1.5 reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal", children: "Leading User Research (focus groups, surveys, interviews)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal", children: "Persona Development and Journey Mapping (e.g., Priya's story)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal", children: "Defining UX Strategy for AI integration and personalization" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal", children: "Interaction Design (wireframing, prototyping from lo-fi to hi-fi)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal", children: "User Interface Design with a focus on visualization and usability" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal", children: "Conducting and analyzing Usability Testing sessions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal", children: "Iterating on designs based on user feedback and technical constraints" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "reveal", children: "Collaborating with product management and engineering teams" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-accent-off-white shadow-lg border border-brand-tertiary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-tertiary font-heading reveal", children: "The Process" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 text-brand-secondary font-heading reveal", children: "Discovery & Research" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal", children: "The process began with deep user research. Elan conducted surveys and interviews with undergraduates and part-time working students. The findings were stark: 75% felt overwhelmed by the existing planner, and 60% craved a simpler, more intuitive tool. Priya's story became a cornerstone persona; she needed a schedule that avoided her work hours (1:00 PM–2:00 PM, Monday to Thursday) and prioritized morning classes. The existing system offered no easy way to input such nuanced constraints. Stakeholders, including administrators and advisors, also desired fewer support tickets and better insights into student scheduling needs." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-brand-secondary/30 rounded-lg p-3 xs:p-4 sm:p-6 my-4 xs:my-6 reveal bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg xs:text-xl font-semibold mb-2 xs:mb-3 text-brand-secondary font-heading reveal", children: "Key Pain Points Highlighted:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-4 xs:gap-x-6 gap-y-2 xs:gap-y-3 text-foreground text-sm xs:text-base reveal", children: [
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start reveal", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { fill: "currentColor", viewBox: "0 0 20 20", children: [
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z", clipRule: "evenodd" }),
                  " "
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "Manual Conflict Checks:" }),
                  " Tedious and error-prone."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start reveal", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { fill: "currentColor", viewBox: "0 0 20 20", children: [
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }),
                  " "
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "Cognitive Overload:" }),
                  " Difficulty with constraints like work hours."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start reveal", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { fill: "currentColor", viewBox: "0 0 20 20", children: [
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm4 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0-4a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1z", clipRule: "evenodd" }),
                  " "
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "Poor Visualization:" }),
                  " No clear way to see schedules or busy times."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start reveal", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { fill: "currentColor", viewBox: "0 0 20 20", children: [
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z", clipRule: "evenodd" }),
                  " "
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "Disconnected Steps:" }),
                  " Planning and registration felt separate."
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "border-l-4 border-brand-secondary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 xs:mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "not-italic font-sans font-medium text-brand-secondary text-base xs:text-lg", children: "Elan's Thinking: Digging Deeper into User Needs" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm xs:text-base", children: `"Priya's story kept coming back to me—she wasn't just struggling with a tool; she was struggling to fit education into her complex life. The data showed 75% of students felt overwhelmed, but the stories revealed why: rigid systems that didn't bend to real life. I sketched scenarios: a student working night shifts, another taking care of family mid-day, a third with back-to-back intensive labs needing breaks. Our system had to adapt to their lives, not force standardization."` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-accent-bg py-4 xs:py-6 rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-secondary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImageCarousel, { images: placeholderImages.map((img) => ({ ...img, alt: img.alt.replace("Placeholder Image", "User research insights") })) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 mt-8 xs:mt-12 text-brand-primary font-heading reveal", children: "Ideation & Design" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal", children: [
            "The team reimagined the planner based on three core principles: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "Flexibility" }),
            " (allowing nuanced constraints), ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "Visualization" }),
            " (clear calendar views), and ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "AI Integration" }),
            ' (personalized suggestions with user control). Elan started with low-fidelity wireframes focusing on the core flow: inputting constraints, viewing AI-driven suggestions, customizing, and registering. The AI Advisor was envisioned as a key feature, learning student preferences to suggest optimal schedules. However, a crucial aspect was to avoid a "black box" approach—students needed to understand AI suggestions and retain the ability to override and customize.'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 my-6 xs:my-8 reveal", children: [
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-primary font-semibold", children: "Flexibility" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-xs xs:text-sm leading-relaxed", children: "Allow students to input nuanced constraints, like work hours and preferred times." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-primary font-semibold", children: "Visualization" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-xs xs:text-sm leading-relaxed", children: "Offer a clear, intuitive calendar view that highlights conflicts and available options." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-primary font-semibold", children: "AI Integration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-xs xs:text-sm leading-relaxed", children: "Use AI to suggest personalized schedules while keeping students in control." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "border-l-4 border-brand-primary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 xs:mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "not-italic font-sans font-medium text-brand-primary text-base xs:text-lg", children: "Elan's Thinking: Balancing AI and User Control" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm xs:text-base", children: `"AI was the key to personalization, but I didn't want to create a system that felt like a 'magic box.' Students needed to understand why the AI was suggesting certain schedules and have the power to override those suggestions. I sketched interfaces that showed the AI's reasoning—'This schedule avoids your work hours'—and made it easy to tweak the AI's recommendations. It was about empowering students, not replacing them."` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-accent-bg py-4 xs:py-6 rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImageCarousel, { images: placeholderImages.map((img) => ({ ...img, alt: img.alt.replace("Placeholder Image", "Solution concepts") })) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 mt-8 xs:mt-12 text-brand-tertiary font-heading reveal", children: "Testing & Iteration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal", children: "The team progressed to high-fidelity prototypes, testing different calendar views and AI suggestion interfaces. Usability testing was crucial. It revealed that while students loved the AI suggestions, they also desired more granular control over the calendar view. This feedback led to the addition of filters for course types and instructors, allowing students to fine-tune their schedules more effectively." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 my-6 xs:my-8 reveal", children: [
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-white shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-tertiary font-semibold", children: "Wireframes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-xs xs:text-sm leading-relaxed", children: "Focused on the core flow: inputting constraints, viewing suggestions, and registering for courses." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-white shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-tertiary font-semibold", children: "Prototypes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-xs xs:text-sm leading-relaxed", children: "Tested different calendar views and AI suggestion interfaces, gathering critical user feedback." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "border-l-4 border-brand-tertiary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 xs:mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "not-italic font-sans font-medium text-brand-tertiary text-base xs:text-lg", children: "Elan's Thinking: Iterating Based on User Feedback" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm xs:text-base", children: `"Usability testing was brutal but essential. Students loved the AI suggestions, but they also wanted to 'zoom in' on the calendar and filter courses by type and instructor. I realized I had over-engineered the AI and under-engineered the basic calendar view. It was a humbling lesson: AI is powerful, but it's not a substitute for a solid foundation."` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-accent-bg py-4 xs:py-6 rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-tertiary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImageCarousel, { images: placeholderImages.map((img) => ({ ...img, alt: img.alt.replace("Placeholder Image", "Wireframes and prototypes") })) }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-12 xs:mb-16 reveal rounded-lg bg-accent-light shadow-lg border border-brand-secondary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-secondary font-heading reveal", children: "The Solution" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed text-base xs:text-lg mb-4 xs:mb-6 reveal", children: "The redesigned Student Course Planner aimed to provide a flexible, intuitive, and AI-assisted scheduling experience. Key features included:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1.5 xs:space-y-2 mb-6 xs:mb-8 reveal", children: [
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "reveal", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "Advanced Constraint Input:" }),
                " Allowing students to specify work hours, preferred class times (morning/afternoon), and other personal commitments."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "reveal", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "AI-Powered Schedule Suggestions:" }),
                " The AI Advisor generates multiple schedule options based on student preferences, degree requirements, and course availability, clearly explaining the rationale behind suggestions."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "reveal", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "Interactive Calendar View:" }),
                " A visual calendar that displays potential schedules, highlights conflicts, and allows direct manipulation and customization."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "reveal", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "Filtering and Sorting:" }),
                " Options to filter courses by type, instructor, or department, and sort schedules by different criteria (e.g., fewest conflicts, preferred times)."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "reveal", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "Seamless Registration Flow:" }),
                " Once a schedule is finalized, a clear path to register for the selected courses directly from the planner."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "reveal", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium text-foreground", children: "User Control & Overrides:" }),
                " Maintaining student autonomy by allowing them to easily modify AI suggestions or build a schedule from scratch."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-accent-bg py-4 xs:py-6 rounded-b-lg shadow-inner reveal border-t border-brand-secondary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImageCarousel, { images: placeholderImages.map((img) => ({ ...img, alt: img.alt.replace("Placeholder Image", "Final UI mockups") })) }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-accent-bg shadow-lg border border-brand-primary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-primary font-heading reveal", children: "Impact/Results" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed text-base xs:text-lg mb-4 xs:mb-6 reveal", children: "While specific metrics post-launch are pending collection, the project targeted the following outcomes based on the business goals and usability improvements:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 mb-4 xs:mb-6 reveal", children: [
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-brand-primary/30 bg-white p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl xs:text-3xl sm:text-4xl font-semibold text-brand-primary mb-0.5 xs:mb-1", children: "60%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-xs xs:text-sm leading-relaxed", children: "Targeted Reduction in Scheduling Bottlenecks" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-brand-primary/30 bg-white p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl xs:text-3xl sm:text-4xl font-semibold text-brand-primary mb-0.5 xs:mb-1", children: "30%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-xs xs:text-sm leading-relaxed", children: "Targeted Increase in Schedule-to-Cart Conversions" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-brand-primary/30 bg-white p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl xs:text-3xl sm:text-4xl font-semibold text-brand-primary mb-0.5 xs:mb-1", children: "40%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-xs xs:text-sm leading-relaxed", children: "Targeted Adoption of AI Recommendations" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed text-base xs:text-lg reveal", children: "Qualitative feedback from usability testing indicated a significant improvement in user satisfaction, with students finding the new design more intuitive, less overwhelming, and better equipped to handle their complex scheduling needs." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-accent-off-white shadow-lg border border-brand-tertiary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-tertiary font-heading reveal", children: "Learnings/Reflections" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal", children: "The Student Course Planner redesign was a journey of balancing advanced AI capabilities with fundamental user needs for control and clarity. The key lessons learned were:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 my-6 xs:my-8 reveal", children: [
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-white shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-tertiary font-semibold", children: "Empathy is Foundational" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-xs xs:text-sm leading-relaxed", children: "Deeply understanding user frustrations (like Priya's) is crucial to designing meaningful solutions." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-white shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-tertiary font-semibold", children: "Iterate Relentlessly" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-xs xs:text-sm leading-relaxed", children: "User feedback, especially during usability testing, is invaluable. Be prepared to pivot and refine (e.g., enhancing calendar controls)." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-white shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-tertiary font-semibold", children: "AI Augments, Not Replaces" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-xs xs:text-sm leading-relaxed", children: "Use AI to empower users and simplify complex tasks, but always ensure they remain in control and understand the system's suggestions." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal", children: "This project reinforced that even with advanced technology, the core principles of user-centered design—empathy, clarity, and iterative improvement—are paramount to success." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "border-l-4 border-brand-tertiary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 xs:mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "not-italic font-sans font-medium text-brand-tertiary text-base xs:text-lg", children: "Elan's Thinking: The Bigger Picture" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm xs:text-base", children: `"This project taught me that UX design is more than just a job—it's a chance to make a positive impact on the world. By understanding people's struggles and creating solutions that make their lives a little easier, we can create a better future for everyone."` })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-12 xs:mb-16 reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-brand-secondary/12 to-brand-secondary/6 border-brand-secondary/20 shadow-brand-secondary/20 rounded-3xl overflow-hidden shadow-lg border-2 hover:shadow-xl transition-all duration-300 ease-in-out", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-8 md:px-8 md:py-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl xs:text-3xl sm:text-4xl font-bold font-heading text-brand-secondary mb-3", children: "Continue Reading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80 text-base xs:text-lg leading-relaxed", children: "Explore more case studies and design insights" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-brand-secondary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🎓" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg text-brand-primary mb-2 group-hover:text-brand-secondary transition-colors", children: "Campus Hiring Platform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 text-sm mb-3 leading-relaxed", children: "Streamlining campus recruitment with 40% faster hiring processes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/case-study/campus-hiring",
                    className: "inline-flex items-center text-brand-primary hover:text-brand-secondary transition-colors text-sm font-medium group-hover:translate-x-1 transform transition-transform duration-200",
                    children: [
                      "Read Case Study",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14, className: "ml-1.5 rotate-180" })
                    ]
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-brand-secondary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏠" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg text-brand-secondary mb-2 group-hover:text-brand-primary transition-colors", children: "Back to Portfolio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 text-sm mb-3 leading-relaxed", children: "Explore all projects and design work" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/",
                    className: "inline-flex items-center text-brand-secondary hover:text-brand-primary transition-colors text-sm font-medium group-hover:-translate-x-1 transform transition-transform duration-200",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14, className: "mr-1.5" }),
                      "View All Work"
                    ]
                  }
                )
              ] })
            ] }) })
          ] })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-12 xs:mt-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-accent-light shadow-lg border border-brand-secondary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base xs:text-lg text-foreground/80 mb-4 xs:mb-6 reveal", children: "⭐ End of Case Study ⭐" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 xs:mb-8 reveal", children: [
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg xs:text-xl sm:text-2xl font-heading font-semibold mb-1.5 xs:mb-2 text-brand-secondary", children: "Next Case Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-study/campus-hiring", className: "text-brand-primary hover:underline font-medium text-sm xs:text-base", children: [
              " ",
              "Camu Campus Recruitment App →"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center text-brand-primary hover:text-brand-secondary transition-colors text-sm font-medium reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16, className: "mr-1.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Back to Home" })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  CaseStudyStudentPlanner as default
};
//# sourceMappingURL=CaseStudyStudentPlanner-kwLHNPNj.js.map
