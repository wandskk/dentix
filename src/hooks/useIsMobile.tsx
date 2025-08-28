"use client";

import React from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window) {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  return { isMobile };
};
