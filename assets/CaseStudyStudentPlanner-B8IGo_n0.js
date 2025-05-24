import { r as reactExports, R as React, j as jsxRuntimeExports, L as Link } from "./index-CeAM5WGX.js";
import { c as createLucideIcon, Z as ZoomableImage, H as Header, S as SectionReveal, C as Card, B as Badge, F as Footer } from "./Header-Cnl0bEpM.js";
import { A as ArrowLeft } from "./arrow-left-B-v4BWpG.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronLeft = createLucideIcon("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
function isObject$1(subject) {
  return Object.prototype.toString.call(subject) === "[object Object]";
}
function isRecord(subject) {
  return isObject$1(subject) || Array.isArray(subject);
}
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function areOptionsEqual(optionsA, optionsB) {
  const optionsAKeys = Object.keys(optionsA);
  const optionsBKeys = Object.keys(optionsB);
  if (optionsAKeys.length !== optionsBKeys.length) return false;
  const breakpointsA = JSON.stringify(Object.keys(optionsA.breakpoints || {}));
  const breakpointsB = JSON.stringify(Object.keys(optionsB.breakpoints || {}));
  if (breakpointsA !== breakpointsB) return false;
  return optionsAKeys.every((key) => {
    const valueA = optionsA[key];
    const valueB = optionsB[key];
    if (typeof valueA === "function") return `${valueA}` === `${valueB}`;
    if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
    return areOptionsEqual(valueA, valueB);
  });
}
function sortAndMapPluginToOptions(plugins) {
  return plugins.concat().sort((a, b) => a.name > b.name ? 1 : -1).map((plugin) => plugin.options);
}
function arePluginsEqual(pluginsA, pluginsB) {
  if (pluginsA.length !== pluginsB.length) return false;
  const optionsA = sortAndMapPluginToOptions(pluginsA);
  const optionsB = sortAndMapPluginToOptions(pluginsB);
  return optionsA.every((optionA, index) => {
    const optionB = optionsB[index];
    return areOptionsEqual(optionA, optionB);
  });
}
function isNumber(subject) {
  return typeof subject === "number";
}
function isString(subject) {
  return typeof subject === "string";
}
function isBoolean(subject) {
  return typeof subject === "boolean";
}
function isObject(subject) {
  return Object.prototype.toString.call(subject) === "[object Object]";
}
function mathAbs(n) {
  return Math.abs(n);
}
function mathSign(n) {
  return Math.sign(n);
}
function deltaAbs(valueB, valueA) {
  return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
  if (valueB === 0 || valueA === 0) return 0;
  if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
  const diff = deltaAbs(mathAbs(valueB), mathAbs(valueA));
  return mathAbs(diff / valueB);
}
function roundToTwoDecimals(num) {
  return Math.round(num * 100) / 100;
}
function arrayKeys(array) {
  return objectKeys(array).map(Number);
}
function arrayLast(array) {
  return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
  return Math.max(0, array.length - 1);
}
function arrayIsLastIndex(array, index) {
  return index === arrayLastIndex(array);
}
function arrayFromNumber(n, startAt = 0) {
  return Array.from(Array(n), (_, i) => startAt + i);
}
function objectKeys(object) {
  return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
  return [objectA, objectB].reduce((mergedObjects, currentObject) => {
    objectKeys(currentObject).forEach((key) => {
      const valueA = mergedObjects[key];
      const valueB = currentObject[key];
      const areObjects = isObject(valueA) && isObject(valueB);
      mergedObjects[key] = areObjects ? objectsMergeDeep(valueA, valueB) : valueB;
    });
    return mergedObjects;
  }, {});
}
function isMouseEvent(evt, ownerWindow) {
  return typeof ownerWindow.MouseEvent !== "undefined" && evt instanceof ownerWindow.MouseEvent;
}
function Alignment(align, viewSize) {
  const predefined = {
    start,
    center,
    end
  };
  function start() {
    return 0;
  }
  function center(n) {
    return end(n) / 2;
  }
  function end(n) {
    return viewSize - n;
  }
  function measure(n, index) {
    if (isString(align)) return predefined[align](n);
    return align(viewSize, n, index);
  }
  const self = {
    measure
  };
  return self;
}
function EventStore() {
  let listeners = [];
  function add(node, type, handler, options = {
    passive: true
  }) {
    let removeListener;
    if ("addEventListener" in node) {
      node.addEventListener(type, handler, options);
      removeListener = () => node.removeEventListener(type, handler, options);
    } else {
      const legacyMediaQueryList = node;
      legacyMediaQueryList.addListener(handler);
      removeListener = () => legacyMediaQueryList.removeListener(handler);
    }
    listeners.push(removeListener);
    return self;
  }
  function clear() {
    listeners = listeners.filter((remove) => remove());
  }
  const self = {
    add,
    clear
  };
  return self;
}
function Animations(ownerDocument, ownerWindow, update, render) {
  const documentVisibleHandler = EventStore();
  const fixedTimeStep = 1e3 / 60;
  let lastTimeStamp = null;
  let accumulatedTime = 0;
  let animationId = 0;
  function init() {
    documentVisibleHandler.add(ownerDocument, "visibilitychange", () => {
      if (ownerDocument.hidden) reset();
    });
  }
  function destroy() {
    stop();
    documentVisibleHandler.clear();
  }
  function animate(timeStamp) {
    if (!animationId) return;
    if (!lastTimeStamp) {
      lastTimeStamp = timeStamp;
      update();
      update();
    }
    const timeElapsed = timeStamp - lastTimeStamp;
    lastTimeStamp = timeStamp;
    accumulatedTime += timeElapsed;
    while (accumulatedTime >= fixedTimeStep) {
      update();
      accumulatedTime -= fixedTimeStep;
    }
    const alpha = accumulatedTime / fixedTimeStep;
    render(alpha);
    if (animationId) {
      animationId = ownerWindow.requestAnimationFrame(animate);
    }
  }
  function start() {
    if (animationId) return;
    animationId = ownerWindow.requestAnimationFrame(animate);
  }
  function stop() {
    ownerWindow.cancelAnimationFrame(animationId);
    lastTimeStamp = null;
    accumulatedTime = 0;
    animationId = 0;
  }
  function reset() {
    lastTimeStamp = null;
    accumulatedTime = 0;
  }
  const self = {
    init,
    destroy,
    start,
    stop,
    update,
    render
  };
  return self;
}
function Axis(axis, contentDirection) {
  const isRightToLeft = contentDirection === "rtl";
  const isVertical = axis === "y";
  const scroll = isVertical ? "y" : "x";
  const cross = isVertical ? "x" : "y";
  const sign = !isVertical && isRightToLeft ? -1 : 1;
  const startEdge = getStartEdge();
  const endEdge = getEndEdge();
  function measureSize(nodeRect) {
    const {
      height,
      width
    } = nodeRect;
    return isVertical ? height : width;
  }
  function getStartEdge() {
    if (isVertical) return "top";
    return isRightToLeft ? "right" : "left";
  }
  function getEndEdge() {
    if (isVertical) return "bottom";
    return isRightToLeft ? "left" : "right";
  }
  function direction(n) {
    return n * sign;
  }
  const self = {
    scroll,
    cross,
    startEdge,
    endEdge,
    measureSize,
    direction
  };
  return self;
}
function Limit(min = 0, max = 0) {
  const length = mathAbs(min - max);
  function reachedMin(n) {
    return n < min;
  }
  function reachedMax(n) {
    return n > max;
  }
  function reachedAny(n) {
    return reachedMin(n) || reachedMax(n);
  }
  function constrain(n) {
    if (!reachedAny(n)) return n;
    return reachedMin(n) ? min : max;
  }
  function removeOffset(n) {
    if (!length) return n;
    return n - length * Math.ceil((n - max) / length);
  }
  const self = {
    length,
    max,
    min,
    constrain,
    reachedAny,
    reachedMax,
    reachedMin,
    removeOffset
  };
  return self;
}
function Counter(max, start, loop) {
  const {
    constrain
  } = Limit(0, max);
  const loopEnd = max + 1;
  let counter = withinLimit(start);
  function withinLimit(n) {
    return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
  }
  function get() {
    return counter;
  }
  function set(n) {
    counter = withinLimit(n);
    return self;
  }
  function add(n) {
    return clone().set(get() + n);
  }
  function clone() {
    return Counter(max, get(), loop);
  }
  const self = {
    get,
    set,
    add,
    clone
  };
  return self;
}
function DragHandler(axis, rootNode, ownerDocument, ownerWindow, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction, watchDrag) {
  const {
    cross: crossAxis,
    direction
  } = axis;
  const focusNodes = ["INPUT", "SELECT", "TEXTAREA"];
  const nonPassiveEvent = {
    passive: false
  };
  const initEvents = EventStore();
  const dragEvents = EventStore();
  const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
  const snapForceBoost = {
    mouse: 300,
    touch: 400
  };
  const freeForceBoost = {
    mouse: 500,
    touch: 600
  };
  const baseSpeed = dragFree ? 43 : 25;
  let isMoving = false;
  let startScroll = 0;
  let startCross = 0;
  let pointerIsDown = false;
  let preventScroll = false;
  let preventClick = false;
  let isMouse = false;
  function init(emblaApi) {
    if (!watchDrag) return;
    function downIfAllowed(evt) {
      if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
    }
    const node = rootNode;
    initEvents.add(node, "dragstart", (evt) => evt.preventDefault(), nonPassiveEvent).add(node, "touchmove", () => void 0, nonPassiveEvent).add(node, "touchend", () => void 0).add(node, "touchstart", downIfAllowed).add(node, "mousedown", downIfAllowed).add(node, "touchcancel", up).add(node, "contextmenu", up).add(node, "click", click, true);
  }
  function destroy() {
    initEvents.clear();
    dragEvents.clear();
  }
  function addDragEvents() {
    const node = isMouse ? ownerDocument : rootNode;
    dragEvents.add(node, "touchmove", move, nonPassiveEvent).add(node, "touchend", up).add(node, "mousemove", move, nonPassiveEvent).add(node, "mouseup", up);
  }
  function isFocusNode(node) {
    const nodeName = node.nodeName || "";
    return focusNodes.includes(nodeName);
  }
  function forceBoost() {
    const boost = dragFree ? freeForceBoost : snapForceBoost;
    const type = isMouse ? "mouse" : "touch";
    return boost[type];
  }
  function allowedForce(force, targetChanged) {
    const next = index.add(mathSign(force) * -1);
    const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
    if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
    if (skipSnaps && targetChanged) return baseForce * 0.5;
    return scrollTarget.byIndex(next.get(), 0).distance;
  }
  function down(evt) {
    const isMouseEvt = isMouseEvent(evt, ownerWindow);
    isMouse = isMouseEvt;
    preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
    isMoving = deltaAbs(target.get(), location.get()) >= 2;
    if (isMouseEvt && evt.button !== 0) return;
    if (isFocusNode(evt.target)) return;
    pointerIsDown = true;
    dragTracker.pointerDown(evt);
    scrollBody.useFriction(0).useDuration(0);
    target.set(location);
    addDragEvents();
    startScroll = dragTracker.readPoint(evt);
    startCross = dragTracker.readPoint(evt, crossAxis);
    eventHandler.emit("pointerDown");
  }
  function move(evt) {
    const isTouchEvt = !isMouseEvent(evt, ownerWindow);
    if (isTouchEvt && evt.touches.length >= 2) return up(evt);
    const lastScroll = dragTracker.readPoint(evt);
    const lastCross = dragTracker.readPoint(evt, crossAxis);
    const diffScroll = deltaAbs(lastScroll, startScroll);
    const diffCross = deltaAbs(lastCross, startCross);
    if (!preventScroll && !isMouse) {
      if (!evt.cancelable) return up(evt);
      preventScroll = diffScroll > diffCross;
      if (!preventScroll) return up(evt);
    }
    const diff = dragTracker.pointerMove(evt);
    if (diffScroll > dragThreshold) preventClick = true;
    scrollBody.useFriction(0.3).useDuration(0.75);
    animation.start();
    target.add(direction(diff));
    evt.preventDefault();
  }
  function up(evt) {
    const currentLocation = scrollTarget.byDistance(0, false);
    const targetChanged = currentLocation.index !== index.get();
    const rawForce = dragTracker.pointerUp(evt) * forceBoost();
    const force = allowedForce(direction(rawForce), targetChanged);
    const forceFactor = factorAbs(rawForce, force);
    const speed = baseSpeed - 10 * forceFactor;
    const friction = baseFriction + forceFactor / 50;
    preventScroll = false;
    pointerIsDown = false;
    dragEvents.clear();
    scrollBody.useDuration(speed).useFriction(friction);
    scrollTo.distance(force, !dragFree);
    isMouse = false;
    eventHandler.emit("pointerUp");
  }
  function click(evt) {
    if (preventClick) {
      evt.stopPropagation();
      evt.preventDefault();
      preventClick = false;
    }
  }
  function pointerDown() {
    return pointerIsDown;
  }
  const self = {
    init,
    destroy,
    pointerDown
  };
  return self;
}
function DragTracker(axis, ownerWindow) {
  const logInterval = 170;
  let startEvent;
  let lastEvent;
  function readTime(evt) {
    return evt.timeStamp;
  }
  function readPoint(evt, evtAxis) {
    const property = evtAxis || axis.scroll;
    const coord = `client${property === "x" ? "X" : "Y"}`;
    return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
  }
  function pointerDown(evt) {
    startEvent = evt;
    lastEvent = evt;
    return readPoint(evt);
  }
  function pointerMove(evt) {
    const diff = readPoint(evt) - readPoint(lastEvent);
    const expired = readTime(evt) - readTime(startEvent) > logInterval;
    lastEvent = evt;
    if (expired) startEvent = evt;
    return diff;
  }
  function pointerUp(evt) {
    if (!startEvent || !lastEvent) return 0;
    const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
    const diffTime = readTime(evt) - readTime(startEvent);
    const expired = readTime(evt) - readTime(lastEvent) > logInterval;
    const force = diffDrag / diffTime;
    const isFlick = diffTime && !expired && mathAbs(force) > 0.1;
    return isFlick ? force : 0;
  }
  const self = {
    pointerDown,
    pointerMove,
    pointerUp,
    readPoint
  };
  return self;
}
function NodeRects() {
  function measure(node) {
    const {
      offsetTop,
      offsetLeft,
      offsetWidth,
      offsetHeight
    } = node;
    const offset = {
      top: offsetTop,
      right: offsetLeft + offsetWidth,
      bottom: offsetTop + offsetHeight,
      left: offsetLeft,
      width: offsetWidth,
      height: offsetHeight
    };
    return offset;
  }
  const self = {
    measure
  };
  return self;
}
function PercentOfView(viewSize) {
  function measure(n) {
    return viewSize * (n / 100);
  }
  const self = {
    measure
  };
  return self;
}
function ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects) {
  const observeNodes = [container].concat(slides);
  let resizeObserver;
  let containerSize;
  let slideSizes = [];
  let destroyed = false;
  function readSize(node) {
    return axis.measureSize(nodeRects.measure(node));
  }
  function init(emblaApi) {
    if (!watchResize) return;
    containerSize = readSize(container);
    slideSizes = slides.map(readSize);
    function defaultCallback(entries) {
      for (const entry of entries) {
        if (destroyed) return;
        const isContainer = entry.target === container;
        const slideIndex = slides.indexOf(entry.target);
        const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
        const newSize = readSize(isContainer ? container : slides[slideIndex]);
        const diffSize = mathAbs(newSize - lastSize);
        if (diffSize >= 0.5) {
          emblaApi.reInit();
          eventHandler.emit("resize");
          break;
        }
      }
    }
    resizeObserver = new ResizeObserver((entries) => {
      if (isBoolean(watchResize) || watchResize(emblaApi, entries)) {
        defaultCallback(entries);
      }
    });
    ownerWindow.requestAnimationFrame(() => {
      observeNodes.forEach((node) => resizeObserver.observe(node));
    });
  }
  function destroy() {
    destroyed = true;
    if (resizeObserver) resizeObserver.disconnect();
  }
  const self = {
    init,
    destroy
  };
  return self;
}
function ScrollBody(location, offsetLocation, previousLocation, target, baseDuration, baseFriction) {
  let scrollVelocity = 0;
  let scrollDirection = 0;
  let scrollDuration = baseDuration;
  let scrollFriction = baseFriction;
  let rawLocation = location.get();
  let rawLocationPrevious = 0;
  function seek() {
    const displacement = target.get() - location.get();
    const isInstant = !scrollDuration;
    let scrollDistance = 0;
    if (isInstant) {
      scrollVelocity = 0;
      previousLocation.set(target);
      location.set(target);
      scrollDistance = displacement;
    } else {
      previousLocation.set(location);
      scrollVelocity += displacement / scrollDuration;
      scrollVelocity *= scrollFriction;
      rawLocation += scrollVelocity;
      location.add(scrollVelocity);
      scrollDistance = rawLocation - rawLocationPrevious;
    }
    scrollDirection = mathSign(scrollDistance);
    rawLocationPrevious = rawLocation;
    return self;
  }
  function settled() {
    const diff = target.get() - offsetLocation.get();
    return mathAbs(diff) < 1e-3;
  }
  function duration() {
    return scrollDuration;
  }
  function direction() {
    return scrollDirection;
  }
  function velocity() {
    return scrollVelocity;
  }
  function useBaseDuration() {
    return useDuration(baseDuration);
  }
  function useBaseFriction() {
    return useFriction(baseFriction);
  }
  function useDuration(n) {
    scrollDuration = n;
    return self;
  }
  function useFriction(n) {
    scrollFriction = n;
    return self;
  }
  const self = {
    direction,
    duration,
    velocity,
    seek,
    settled,
    useBaseFriction,
    useBaseDuration,
    useFriction,
    useDuration
  };
  return self;
}
function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
  const pullBackThreshold = percentOfView.measure(10);
  const edgeOffsetTolerance = percentOfView.measure(50);
  const frictionLimit = Limit(0.1, 0.99);
  let disabled = false;
  function shouldConstrain() {
    if (disabled) return false;
    if (!limit.reachedAny(target.get())) return false;
    if (!limit.reachedAny(location.get())) return false;
    return true;
  }
  function constrain(pointerDown) {
    if (!shouldConstrain()) return;
    const edge = limit.reachedMin(location.get()) ? "min" : "max";
    const diffToEdge = mathAbs(limit[edge] - location.get());
    const diffToTarget = target.get() - location.get();
    const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
    target.subtract(diffToTarget * friction);
    if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
      target.set(limit.constrain(target.get()));
      scrollBody.useDuration(25).useBaseFriction();
    }
  }
  function toggleActive(active) {
    disabled = !active;
  }
  const self = {
    shouldConstrain,
    constrain,
    toggleActive
  };
  return self;
}
function ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance) {
  const scrollBounds = Limit(-contentSize + viewSize, 0);
  const snapsBounded = measureBounded();
  const scrollContainLimit = findScrollContainLimit();
  const snapsContained = measureContained();
  function usePixelTolerance(bound, snap) {
    return deltaAbs(bound, snap) <= 1;
  }
  function findScrollContainLimit() {
    const startSnap = snapsBounded[0];
    const endSnap = arrayLast(snapsBounded);
    const min = snapsBounded.lastIndexOf(startSnap);
    const max = snapsBounded.indexOf(endSnap) + 1;
    return Limit(min, max);
  }
  function measureBounded() {
    return snapsAligned.map((snapAligned, index) => {
      const {
        min,
        max
      } = scrollBounds;
      const snap = scrollBounds.constrain(snapAligned);
      const isFirst = !index;
      const isLast = arrayIsLastIndex(snapsAligned, index);
      if (isFirst) return max;
      if (isLast) return min;
      if (usePixelTolerance(min, snap)) return min;
      if (usePixelTolerance(max, snap)) return max;
      return snap;
    }).map((scrollBound) => parseFloat(scrollBound.toFixed(3)));
  }
  function measureContained() {
    if (contentSize <= viewSize + pixelTolerance) return [scrollBounds.max];
    if (containScroll === "keepSnaps") return snapsBounded;
    const {
      min,
      max
    } = scrollContainLimit;
    return snapsBounded.slice(min, max);
  }
  const self = {
    snapsContained,
    scrollContainLimit
  };
  return self;
}
function ScrollLimit(contentSize, scrollSnaps, loop) {
  const max = scrollSnaps[0];
  const min = loop ? max - contentSize : arrayLast(scrollSnaps);
  const limit = Limit(min, max);
  const self = {
    limit
  };
  return self;
}
function ScrollLooper(contentSize, limit, location, vectors) {
  const jointSafety = 0.1;
  const min = limit.min + jointSafety;
  const max = limit.max + jointSafety;
  const {
    reachedMin,
    reachedMax
  } = Limit(min, max);
  function shouldLoop(direction) {
    if (direction === 1) return reachedMax(location.get());
    if (direction === -1) return reachedMin(location.get());
    return false;
  }
  function loop(direction) {
    if (!shouldLoop(direction)) return;
    const loopDistance = contentSize * (direction * -1);
    vectors.forEach((v) => v.add(loopDistance));
  }
  const self = {
    loop
  };
  return self;
}
function ScrollProgress(limit) {
  const {
    max,
    length
  } = limit;
  function get(n) {
    const currentLocation = n - max;
    return length ? currentLocation / -length : 0;
  }
  const self = {
    get
  };
  return self;
}
function ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll) {
  const {
    startEdge,
    endEdge
  } = axis;
  const {
    groupSlides
  } = slidesToScroll;
  const alignments = measureSizes().map(alignment.measure);
  const snaps = measureUnaligned();
  const snapsAligned = measureAligned();
  function measureSizes() {
    return groupSlides(slideRects).map((rects) => arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
  }
  function measureUnaligned() {
    return slideRects.map((rect) => containerRect[startEdge] - rect[startEdge]).map((snap) => -mathAbs(snap));
  }
  function measureAligned() {
    return groupSlides(snaps).map((g) => g[0]).map((snap, index) => snap + alignments[index]);
  }
  const self = {
    snaps,
    snapsAligned
  };
  return self;
}
function SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes) {
  const {
    groupSlides
  } = slidesToScroll;
  const {
    min,
    max
  } = scrollContainLimit;
  const slideRegistry = createSlideRegistry();
  function createSlideRegistry() {
    const groupedSlideIndexes = groupSlides(slideIndexes);
    const doNotContain = !containSnaps || containScroll === "keepSnaps";
    if (scrollSnaps.length === 1) return [slideIndexes];
    if (doNotContain) return groupedSlideIndexes;
    return groupedSlideIndexes.slice(min, max).map((group, index, groups) => {
      const isFirst = !index;
      const isLast = arrayIsLastIndex(groups, index);
      if (isFirst) {
        const range = arrayLast(groups[0]) + 1;
        return arrayFromNumber(range);
      }
      if (isLast) {
        const range = arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1;
        return arrayFromNumber(range, arrayLast(groups)[0]);
      }
      return group;
    });
  }
  const self = {
    slideRegistry
  };
  return self;
}
function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
  const {
    reachedAny,
    removeOffset,
    constrain
  } = limit;
  function minDistance(distances) {
    return distances.concat().sort((a, b) => mathAbs(a) - mathAbs(b))[0];
  }
  function findTargetSnap(target) {
    const distance = loop ? removeOffset(target) : constrain(target);
    const ascDiffsToSnaps = scrollSnaps.map((snap, index2) => ({
      diff: shortcut(snap - distance, 0),
      index: index2
    })).sort((d1, d2) => mathAbs(d1.diff) - mathAbs(d2.diff));
    const {
      index
    } = ascDiffsToSnaps[0];
    return {
      index,
      distance
    };
  }
  function shortcut(target, direction) {
    const targets = [target, target + contentSize, target - contentSize];
    if (!loop) return target;
    if (!direction) return minDistance(targets);
    const matchingTargets = targets.filter((t) => mathSign(t) === direction);
    if (matchingTargets.length) return minDistance(matchingTargets);
    return arrayLast(targets) - contentSize;
  }
  function byIndex(index, direction) {
    const diffToSnap = scrollSnaps[index] - targetVector.get();
    const distance = shortcut(diffToSnap, direction);
    return {
      index,
      distance
    };
  }
  function byDistance(distance, snap) {
    const target = targetVector.get() + distance;
    const {
      index,
      distance: targetSnapDistance
    } = findTargetSnap(target);
    const reachedBound = !loop && reachedAny(target);
    if (!snap || reachedBound) return {
      index,
      distance
    };
    const diffToSnap = scrollSnaps[index] - targetSnapDistance;
    const snapDistance = distance + shortcut(diffToSnap, 0);
    return {
      index,
      distance: snapDistance
    };
  }
  const self = {
    byDistance,
    byIndex,
    shortcut
  };
  return self;
}
function ScrollTo(animation, indexCurrent, indexPrevious, scrollBody, scrollTarget, targetVector, eventHandler) {
  function scrollTo(target) {
    const distanceDiff = target.distance;
    const indexDiff = target.index !== indexCurrent.get();
    targetVector.add(distanceDiff);
    if (distanceDiff) {
      if (scrollBody.duration()) {
        animation.start();
      } else {
        animation.update();
        animation.render(1);
        animation.update();
      }
    }
    if (indexDiff) {
      indexPrevious.set(indexCurrent.get());
      indexCurrent.set(target.index);
      eventHandler.emit("select");
    }
  }
  function distance(n, snap) {
    const target = scrollTarget.byDistance(n, snap);
    scrollTo(target);
  }
  function index(n, direction) {
    const targetIndex = indexCurrent.clone().set(n);
    const target = scrollTarget.byIndex(targetIndex.get(), direction);
    scrollTo(target);
  }
  const self = {
    distance,
    index
  };
  return self;
}
function SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus) {
  const focusListenerOptions = {
    passive: true,
    capture: true
  };
  let lastTabPressTime = 0;
  function init(emblaApi) {
    if (!watchFocus) return;
    function defaultCallback(index) {
      const nowTime = (/* @__PURE__ */ new Date()).getTime();
      const diffTime = nowTime - lastTabPressTime;
      if (diffTime > 10) return;
      eventHandler.emit("slideFocusStart");
      root.scrollLeft = 0;
      const group = slideRegistry.findIndex((group2) => group2.includes(index));
      if (!isNumber(group)) return;
      scrollBody.useDuration(0);
      scrollTo.index(group, 0);
      eventHandler.emit("slideFocus");
    }
    eventStore.add(document, "keydown", registerTabPress, false);
    slides.forEach((slide, slideIndex) => {
      eventStore.add(slide, "focus", (evt) => {
        if (isBoolean(watchFocus) || watchFocus(emblaApi, evt)) {
          defaultCallback(slideIndex);
        }
      }, focusListenerOptions);
    });
  }
  function registerTabPress(event) {
    if (event.code === "Tab") lastTabPressTime = (/* @__PURE__ */ new Date()).getTime();
  }
  const self = {
    init
  };
  return self;
}
function Vector1D(initialValue) {
  let value = initialValue;
  function get() {
    return value;
  }
  function set(n) {
    value = normalizeInput(n);
  }
  function add(n) {
    value += normalizeInput(n);
  }
  function subtract(n) {
    value -= normalizeInput(n);
  }
  function normalizeInput(n) {
    return isNumber(n) ? n : n.get();
  }
  const self = {
    get,
    set,
    add,
    subtract
  };
  return self;
}
function Translate(axis, container) {
  const translate = axis.scroll === "x" ? x : y;
  const containerStyle = container.style;
  let previousTarget = null;
  let disabled = false;
  function x(n) {
    return `translate3d(${n}px,0px,0px)`;
  }
  function y(n) {
    return `translate3d(0px,${n}px,0px)`;
  }
  function to(target) {
    if (disabled) return;
    const newTarget = roundToTwoDecimals(axis.direction(target));
    if (newTarget === previousTarget) return;
    containerStyle.transform = translate(newTarget);
    previousTarget = newTarget;
  }
  function toggleActive(active) {
    disabled = !active;
  }
  function clear() {
    if (disabled) return;
    containerStyle.transform = "";
    if (!container.getAttribute("style")) container.removeAttribute("style");
  }
  const self = {
    clear,
    to,
    toggleActive
  };
  return self;
}
function SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, location, slides) {
  const roundingSafety = 0.5;
  const ascItems = arrayKeys(slideSizesWithGaps);
  const descItems = arrayKeys(slideSizesWithGaps).reverse();
  const loopPoints = startPoints().concat(endPoints());
  function removeSlideSizes(indexes, from) {
    return indexes.reduce((a, i) => {
      return a - slideSizesWithGaps[i];
    }, from);
  }
  function slidesInGap(indexes, gap) {
    return indexes.reduce((a, i) => {
      const remainingGap = removeSlideSizes(a, gap);
      return remainingGap > 0 ? a.concat([i]) : a;
    }, []);
  }
  function findSlideBounds(offset) {
    return snaps.map((snap, index) => ({
      start: snap - slideSizes[index] + roundingSafety + offset,
      end: snap + viewSize - roundingSafety + offset
    }));
  }
  function findLoopPoints(indexes, offset, isEndEdge) {
    const slideBounds = findSlideBounds(offset);
    return indexes.map((index) => {
      const initial = isEndEdge ? 0 : -contentSize;
      const altered = isEndEdge ? contentSize : 0;
      const boundEdge = isEndEdge ? "end" : "start";
      const loopPoint = slideBounds[index][boundEdge];
      return {
        index,
        loopPoint,
        slideLocation: Vector1D(-1),
        translate: Translate(axis, slides[index]),
        target: () => location.get() > loopPoint ? initial : altered
      };
    });
  }
  function startPoints() {
    const gap = scrollSnaps[0];
    const indexes = slidesInGap(descItems, gap);
    return findLoopPoints(indexes, contentSize, false);
  }
  function endPoints() {
    const gap = viewSize - scrollSnaps[0] - 1;
    const indexes = slidesInGap(ascItems, gap);
    return findLoopPoints(indexes, -contentSize, true);
  }
  function canLoop() {
    return loopPoints.every(({
      index
    }) => {
      const otherIndexes = ascItems.filter((i) => i !== index);
      return removeSlideSizes(otherIndexes, viewSize) <= 0.1;
    });
  }
  function loop() {
    loopPoints.forEach((loopPoint) => {
      const {
        target,
        translate,
        slideLocation
      } = loopPoint;
      const shiftLocation = target();
      if (shiftLocation === slideLocation.get()) return;
      translate.to(shiftLocation);
      slideLocation.set(shiftLocation);
    });
  }
  function clear() {
    loopPoints.forEach((loopPoint) => loopPoint.translate.clear());
  }
  const self = {
    canLoop,
    clear,
    loop,
    loopPoints
  };
  return self;
}
function SlidesHandler(container, eventHandler, watchSlides) {
  let mutationObserver;
  let destroyed = false;
  function init(emblaApi) {
    if (!watchSlides) return;
    function defaultCallback(mutations) {
      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          emblaApi.reInit();
          eventHandler.emit("slidesChanged");
          break;
        }
      }
    }
    mutationObserver = new MutationObserver((mutations) => {
      if (destroyed) return;
      if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) {
        defaultCallback(mutations);
      }
    });
    mutationObserver.observe(container, {
      childList: true
    });
  }
  function destroy() {
    if (mutationObserver) mutationObserver.disconnect();
    destroyed = true;
  }
  const self = {
    init,
    destroy
  };
  return self;
}
function SlidesInView(container, slides, eventHandler, threshold) {
  const intersectionEntryMap = {};
  let inViewCache = null;
  let notInViewCache = null;
  let intersectionObserver;
  let destroyed = false;
  function init() {
    intersectionObserver = new IntersectionObserver((entries) => {
      if (destroyed) return;
      entries.forEach((entry) => {
        const index = slides.indexOf(entry.target);
        intersectionEntryMap[index] = entry;
      });
      inViewCache = null;
      notInViewCache = null;
      eventHandler.emit("slidesInView");
    }, {
      root: container.parentElement,
      threshold
    });
    slides.forEach((slide) => intersectionObserver.observe(slide));
  }
  function destroy() {
    if (intersectionObserver) intersectionObserver.disconnect();
    destroyed = true;
  }
  function createInViewList(inView) {
    return objectKeys(intersectionEntryMap).reduce((list, slideIndex) => {
      const index = parseInt(slideIndex);
      const {
        isIntersecting
      } = intersectionEntryMap[index];
      const inViewMatch = inView && isIntersecting;
      const notInViewMatch = !inView && !isIntersecting;
      if (inViewMatch || notInViewMatch) list.push(index);
      return list;
    }, []);
  }
  function get(inView = true) {
    if (inView && inViewCache) return inViewCache;
    if (!inView && notInViewCache) return notInViewCache;
    const slideIndexes = createInViewList(inView);
    if (inView) inViewCache = slideIndexes;
    if (!inView) notInViewCache = slideIndexes;
    return slideIndexes;
  }
  const self = {
    init,
    destroy,
    get
  };
  return self;
}
function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
  const {
    measureSize,
    startEdge,
    endEdge
  } = axis;
  const withEdgeGap = slideRects[0] && readEdgeGap;
  const startGap = measureStartGap();
  const endGap = measureEndGap();
  const slideSizes = slideRects.map(measureSize);
  const slideSizesWithGaps = measureWithGaps();
  function measureStartGap() {
    if (!withEdgeGap) return 0;
    const slideRect = slideRects[0];
    return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
  }
  function measureEndGap() {
    if (!withEdgeGap) return 0;
    const style = ownerWindow.getComputedStyle(arrayLast(slides));
    return parseFloat(style.getPropertyValue(`margin-${endEdge}`));
  }
  function measureWithGaps() {
    return slideRects.map((rect, index, rects) => {
      const isFirst = !index;
      const isLast = arrayIsLastIndex(rects, index);
      if (isFirst) return slideSizes[index] + startGap;
      if (isLast) return slideSizes[index] + endGap;
      return rects[index + 1][startEdge] - rect[startEdge];
    }).map(mathAbs);
  }
  const self = {
    slideSizes,
    slideSizesWithGaps,
    startGap,
    endGap
  };
  return self;
}
function SlidesToScroll(axis, viewSize, slidesToScroll, loop, containerRect, slideRects, startGap, endGap, pixelTolerance) {
  const {
    startEdge,
    endEdge,
    direction
  } = axis;
  const groupByNumber = isNumber(slidesToScroll);
  function byNumber(array, groupSize) {
    return arrayKeys(array).filter((i) => i % groupSize === 0).map((i) => array.slice(i, i + groupSize));
  }
  function bySize(array) {
    if (!array.length) return [];
    return arrayKeys(array).reduce((groups, rectB, index) => {
      const rectA = arrayLast(groups) || 0;
      const isFirst = rectA === 0;
      const isLast = rectB === arrayLastIndex(array);
      const edgeA = containerRect[startEdge] - slideRects[rectA][startEdge];
      const edgeB = containerRect[startEdge] - slideRects[rectB][endEdge];
      const gapA = !loop && isFirst ? direction(startGap) : 0;
      const gapB = !loop && isLast ? direction(endGap) : 0;
      const chunkSize = mathAbs(edgeB - gapB - (edgeA + gapA));
      if (index && chunkSize > viewSize + pixelTolerance) groups.push(rectB);
      if (isLast) groups.push(array.length);
      return groups;
    }, []).map((currentSize, index, groups) => {
      const previousSize = Math.max(groups[index - 1] || 0);
      return array.slice(previousSize, currentSize);
    });
  }
  function groupSlides(array) {
    return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
  }
  const self = {
    groupSlides
  };
  return self;
}
function Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler) {
  const {
    align,
    axis: scrollAxis,
    direction,
    startIndex,
    loop,
    duration,
    dragFree,
    dragThreshold,
    inViewThreshold,
    slidesToScroll: groupSlides,
    skipSnaps,
    containScroll,
    watchResize,
    watchSlides,
    watchDrag,
    watchFocus
  } = options;
  const pixelTolerance = 2;
  const nodeRects = NodeRects();
  const containerRect = nodeRects.measure(container);
  const slideRects = slides.map(nodeRects.measure);
  const axis = Axis(scrollAxis, direction);
  const viewSize = axis.measureSize(containerRect);
  const percentOfView = PercentOfView(viewSize);
  const alignment = Alignment(align, viewSize);
  const containSnaps = !loop && !!containScroll;
  const readEdgeGap = loop || !!containScroll;
  const {
    slideSizes,
    slideSizesWithGaps,
    startGap,
    endGap
  } = SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow);
  const slidesToScroll = SlidesToScroll(axis, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap, pixelTolerance);
  const {
    snaps,
    snapsAligned
  } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
  const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
  const {
    snapsContained,
    scrollContainLimit
  } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance);
  const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
  const {
    limit
  } = ScrollLimit(contentSize, scrollSnaps, loop);
  const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
  const indexPrevious = index.clone();
  const slideIndexes = arrayKeys(slides);
  const update = ({
    dragHandler,
    scrollBody: scrollBody2,
    scrollBounds,
    options: {
      loop: loop2
    }
  }) => {
    if (!loop2) scrollBounds.constrain(dragHandler.pointerDown());
    scrollBody2.seek();
  };
  const render = ({
    scrollBody: scrollBody2,
    translate,
    location: location2,
    offsetLocation: offsetLocation2,
    previousLocation: previousLocation2,
    scrollLooper,
    slideLooper,
    dragHandler,
    animation: animation2,
    eventHandler: eventHandler2,
    scrollBounds,
    options: {
      loop: loop2
    }
  }, alpha) => {
    const shouldSettle = scrollBody2.settled();
    const withinBounds = !scrollBounds.shouldConstrain();
    const hasSettled = loop2 ? shouldSettle : shouldSettle && withinBounds;
    const hasSettledAndIdle = hasSettled && !dragHandler.pointerDown();
    if (hasSettledAndIdle) animation2.stop();
    const interpolatedLocation = location2.get() * alpha + previousLocation2.get() * (1 - alpha);
    offsetLocation2.set(interpolatedLocation);
    if (loop2) {
      scrollLooper.loop(scrollBody2.direction());
      slideLooper.loop();
    }
    translate.to(offsetLocation2.get());
    if (hasSettledAndIdle) eventHandler2.emit("settle");
    if (!hasSettled) eventHandler2.emit("scroll");
  };
  const animation = Animations(ownerDocument, ownerWindow, () => update(engine), (alpha) => render(engine, alpha));
  const friction = 0.68;
  const startLocation = scrollSnaps[index.get()];
  const location = Vector1D(startLocation);
  const previousLocation = Vector1D(startLocation);
  const offsetLocation = Vector1D(startLocation);
  const target = Vector1D(startLocation);
  const scrollBody = ScrollBody(location, offsetLocation, previousLocation, target, duration, friction);
  const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
  const scrollTo = ScrollTo(animation, index, indexPrevious, scrollBody, scrollTarget, target, eventHandler);
  const scrollProgress = ScrollProgress(limit);
  const eventStore = EventStore();
  const slidesInView = SlidesInView(container, slides, eventHandler, inViewThreshold);
  const {
    slideRegistry
  } = SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
  const slideFocus = SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus);
  const engine = {
    ownerDocument,
    ownerWindow,
    eventHandler,
    containerRect,
    slideRects,
    animation,
    axis,
    dragHandler: DragHandler(axis, root, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction, watchDrag),
    eventStore,
    percentOfView,
    index,
    indexPrevious,
    limit,
    location,
    offsetLocation,
    previousLocation,
    options,
    resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects),
    scrollBody,
    scrollBounds: ScrollBounds(limit, offsetLocation, target, scrollBody, percentOfView),
    scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [location, offsetLocation, previousLocation, target]),
    scrollProgress,
    scrollSnapList: scrollSnaps.map(scrollProgress.get),
    scrollSnaps,
    scrollTarget,
    scrollTo,
    slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
    slideFocus,
    slidesHandler: SlidesHandler(container, eventHandler, watchSlides),
    slidesInView,
    slideIndexes,
    slideRegistry,
    slidesToScroll,
    target,
    translate: Translate(axis, container)
  };
  return engine;
}
function EventHandler() {
  let listeners = {};
  let api;
  function init(emblaApi) {
    api = emblaApi;
  }
  function getListeners(evt) {
    return listeners[evt] || [];
  }
  function emit(evt) {
    getListeners(evt).forEach((e) => e(api, evt));
    return self;
  }
  function on(evt, cb) {
    listeners[evt] = getListeners(evt).concat([cb]);
    return self;
  }
  function off(evt, cb) {
    listeners[evt] = getListeners(evt).filter((e) => e !== cb);
    return self;
  }
  function clear() {
    listeners = {};
  }
  const self = {
    init,
    emit,
    off,
    on,
    clear
  };
  return self;
}
const defaultOptions = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: false,
  dragThreshold: 10,
  loop: false,
  skipSnaps: false,
  duration: 25,
  startIndex: 0,
  active: true,
  watchDrag: true,
  watchResize: true,
  watchSlides: true,
  watchFocus: true
};
function OptionsHandler(ownerWindow) {
  function mergeOptions(optionsA, optionsB) {
    return objectsMergeDeep(optionsA, optionsB || {});
  }
  function optionsAtMedia(options) {
    const optionsAtMedia2 = options.breakpoints || {};
    const matchedMediaOptions = objectKeys(optionsAtMedia2).filter((media) => ownerWindow.matchMedia(media).matches).map((media) => optionsAtMedia2[media]).reduce((a, mediaOption) => mergeOptions(a, mediaOption), {});
    return mergeOptions(options, matchedMediaOptions);
  }
  function optionsMediaQueries(optionsList) {
    return optionsList.map((options) => objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries) => acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
  }
  const self = {
    mergeOptions,
    optionsAtMedia,
    optionsMediaQueries
  };
  return self;
}
function PluginsHandler(optionsHandler) {
  let activePlugins = [];
  function init(emblaApi, plugins) {
    activePlugins = plugins.filter(({
      options
    }) => optionsHandler.optionsAtMedia(options).active !== false);
    activePlugins.forEach((plugin) => plugin.init(emblaApi, optionsHandler));
    return plugins.reduce((map, plugin) => Object.assign(map, {
      [plugin.name]: plugin
    }), {});
  }
  function destroy() {
    activePlugins = activePlugins.filter((plugin) => plugin.destroy());
  }
  const self = {
    init,
    destroy
  };
  return self;
}
function EmblaCarousel(root, userOptions, userPlugins) {
  const ownerDocument = root.ownerDocument;
  const ownerWindow = ownerDocument.defaultView;
  const optionsHandler = OptionsHandler(ownerWindow);
  const pluginsHandler = PluginsHandler(optionsHandler);
  const mediaHandlers = EventStore();
  const eventHandler = EventHandler();
  const {
    mergeOptions,
    optionsAtMedia,
    optionsMediaQueries
  } = optionsHandler;
  const {
    on,
    off,
    emit
  } = eventHandler;
  const reInit = reActivate;
  let destroyed = false;
  let engine;
  let optionsBase = mergeOptions(defaultOptions, EmblaCarousel.globalOptions);
  let options = mergeOptions(optionsBase);
  let pluginList = [];
  let pluginApis;
  let container;
  let slides;
  function storeElements() {
    const {
      container: userContainer,
      slides: userSlides
    } = options;
    const customContainer = isString(userContainer) ? root.querySelector(userContainer) : userContainer;
    container = customContainer || root.children[0];
    const customSlides = isString(userSlides) ? container.querySelectorAll(userSlides) : userSlides;
    slides = [].slice.call(customSlides || container.children);
  }
  function createEngine(options2) {
    const engine2 = Engine(root, container, slides, ownerDocument, ownerWindow, options2, eventHandler);
    if (options2.loop && !engine2.slideLooper.canLoop()) {
      const optionsWithoutLoop = Object.assign({}, options2, {
        loop: false
      });
      return createEngine(optionsWithoutLoop);
    }
    return engine2;
  }
  function activate(withOptions, withPlugins) {
    if (destroyed) return;
    optionsBase = mergeOptions(optionsBase, withOptions);
    options = optionsAtMedia(optionsBase);
    pluginList = withPlugins || pluginList;
    storeElements();
    engine = createEngine(options);
    optionsMediaQueries([optionsBase, ...pluginList.map(({
      options: options2
    }) => options2)]).forEach((query) => mediaHandlers.add(query, "change", reActivate));
    if (!options.active) return;
    engine.translate.to(engine.location.get());
    engine.animation.init();
    engine.slidesInView.init();
    engine.slideFocus.init(self);
    engine.eventHandler.init(self);
    engine.resizeHandler.init(self);
    engine.slidesHandler.init(self);
    if (engine.options.loop) engine.slideLooper.loop();
    if (container.offsetParent && slides.length) engine.dragHandler.init(self);
    pluginApis = pluginsHandler.init(self, pluginList);
  }
  function reActivate(withOptions, withPlugins) {
    const startIndex = selectedScrollSnap();
    deActivate();
    activate(mergeOptions({
      startIndex
    }, withOptions), withPlugins);
    eventHandler.emit("reInit");
  }
  function deActivate() {
    engine.dragHandler.destroy();
    engine.eventStore.clear();
    engine.translate.clear();
    engine.slideLooper.clear();
    engine.resizeHandler.destroy();
    engine.slidesHandler.destroy();
    engine.slidesInView.destroy();
    engine.animation.destroy();
    pluginsHandler.destroy();
    mediaHandlers.clear();
  }
  function destroy() {
    if (destroyed) return;
    destroyed = true;
    mediaHandlers.clear();
    deActivate();
    eventHandler.emit("destroy");
    eventHandler.clear();
  }
  function scrollTo(index, jump, direction) {
    if (!options.active || destroyed) return;
    engine.scrollBody.useBaseFriction().useDuration(jump === true ? 0 : options.duration);
    engine.scrollTo.index(index, direction || 0);
  }
  function scrollNext(jump) {
    const next = engine.index.add(1).get();
    scrollTo(next, jump, -1);
  }
  function scrollPrev(jump) {
    const prev = engine.index.add(-1).get();
    scrollTo(prev, jump, 1);
  }
  function canScrollNext() {
    const next = engine.index.add(1).get();
    return next !== selectedScrollSnap();
  }
  function canScrollPrev() {
    const prev = engine.index.add(-1).get();
    return prev !== selectedScrollSnap();
  }
  function scrollSnapList() {
    return engine.scrollSnapList;
  }
  function scrollProgress() {
    return engine.scrollProgress.get(engine.offsetLocation.get());
  }
  function selectedScrollSnap() {
    return engine.index.get();
  }
  function previousScrollSnap() {
    return engine.indexPrevious.get();
  }
  function slidesInView() {
    return engine.slidesInView.get();
  }
  function slidesNotInView() {
    return engine.slidesInView.get(false);
  }
  function plugins() {
    return pluginApis;
  }
  function internalEngine() {
    return engine;
  }
  function rootNode() {
    return root;
  }
  function containerNode() {
    return container;
  }
  function slideNodes() {
    return slides;
  }
  const self = {
    canScrollNext,
    canScrollPrev,
    containerNode,
    internalEngine,
    destroy,
    off,
    on,
    emit,
    plugins,
    previousScrollSnap,
    reInit,
    rootNode,
    scrollNext,
    scrollPrev,
    scrollProgress,
    scrollSnapList,
    scrollTo,
    selectedScrollSnap,
    slideNodes,
    slidesInView,
    slidesNotInView
  };
  activate(userOptions, userPlugins);
  setTimeout(() => eventHandler.emit("init"), 0);
  return self;
}
EmblaCarousel.globalOptions = void 0;
function useEmblaCarousel(options = {}, plugins = []) {
  const storedOptions = reactExports.useRef(options);
  const storedPlugins = reactExports.useRef(plugins);
  const [emblaApi, setEmblaApi] = reactExports.useState();
  const [viewport, setViewport] = reactExports.useState();
  const reInit = reactExports.useCallback(() => {
    if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);
  }, [emblaApi]);
  reactExports.useEffect(() => {
    if (areOptionsEqual(storedOptions.current, options)) return;
    storedOptions.current = options;
    reInit();
  }, [options, reInit]);
  reactExports.useEffect(() => {
    if (arePluginsEqual(storedPlugins.current, plugins)) return;
    storedPlugins.current = plugins;
    reInit();
  }, [plugins, reInit]);
  reactExports.useEffect(() => {
    if (canUseDOM() && viewport) {
      EmblaCarousel.globalOptions = useEmblaCarousel.globalOptions;
      const newEmblaApi = EmblaCarousel(viewport, storedOptions.current, storedPlugins.current);
      setEmblaApi(newEmblaApi);
      return () => newEmblaApi.destroy();
    } else {
      setEmblaApi(void 0);
    }
  }, [viewport, setEmblaApi]);
  return [setViewport, emblaApi];
}
useEmblaCarousel.globalOptions = void 0;
const ImageCarousel = React.memo(({ images, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: images.length > 1,
    // It's important that 'options' prop has a stable reference if ImageCarousel is memoized.
    // If 'options' is defined inline in the parent, it will change on every parent render,
    // breaking memoization for ImageCarousel. Assume 'options' is stable or not performance critical.
    align: "start",
    containScroll: "trimSnaps",
    ...options
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = reactExports.useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = reactExports.useState(false);
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const scrollPrev = reactExports.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = reactExports.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = reactExports.useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
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
  if (!images || images.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-foreground/70", children: "No images to display." });
  }
  if (images.length === 1) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomableImage, { src: images[0].src, alt: images[0].alt, className: "w-full h-auto object-contain aspect-video" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group/carousel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-lg", ref: emblaRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: images.map((image, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] min-w-0 pl-4",
        "aria-roledescription": "slide",
        "aria-label": `${index + 1} of ${images.length}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ZoomableImage,
          {
            src: image.src,
            alt: image.alt,
            className: "w-full h-auto object-contain aspect-[4/3] p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm"
          }
        )
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
    ] })
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "reveal shadow-lg bg-accent-bg dark:bg-slate-800/50 border-t-4 border-brand-secondary overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-4 xs:px-4 xs:py-5 sm:p-6 md:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 xs:mb-4 flex items-center space-x-2 xs:space-x-3 reveal", children: [
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "bg-brand-secondary text-white text-xs xs:text-sm", children: "Case Study" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground/70", children: "Published May 2025" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl xs:text-4xl sm:text-5xl font-semibold mb-6 xs:mb-8 text-brand-secondary leading-tight font-heading reveal", children: "From Chaos to Clarity: Student Course Planner Redesign" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-accent-bg overflow-hidden shadow-inner reveal border-y border-brand-secondary/20", children: [
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ZoomableImage,
              {
                src: "/Elanable-uploads/78be9a59-8230-4ea5-b024-d96fd3cdd83e.png",
                alt: "Student Course Planner AI Advisor Interface",
                className: "w-full h-full object-cover"
              }
            )
          ] })
        ] }) }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Back to Portfolio" })
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
//# sourceMappingURL=CaseStudyStudentPlanner-B8IGo_n0.js.map
