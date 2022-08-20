import { useEffect, useState } from "react";

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect();
  window.addEventListener("resize", handleWindowResize);
};
