import { splitProps } from "../helpers.mjs";
import { panda } from "./factory.mjs";

import { createElement, forwardRef } from "react";
import { getGridStyle } from "../patterns/grid.mjs";

export const Grid = /* @__PURE__ */ forwardRef(function Grid(props, ref) {
  const [patternProps, restProps] = splitProps(props, [
    "gap",
    "columnGap",
    "rowGap",
    "columns",
    "minChildWidth",
  ]);

  const styleProps = getGridStyle(patternProps);
  const mergedProps = { ref, ...styleProps, ...restProps };

  return createElement(panda.div, mergedProps);
});
