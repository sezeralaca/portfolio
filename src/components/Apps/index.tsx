"use client";

import { useEffect } from "react";

import { useWindowSize } from "usehooks-ts";
import { useWindowStore } from "@/store/window";

import { AppWindow } from "@/components/UI/Window";
import { Biography } from "./Biography";
import { Privacy } from "./Privacy";
import { getWindowPositionAndSize } from "@/lib/utils";

export const Apps = ({ openPrivacyOnLoad = false }: { openPrivacyOnLoad?: boolean }) => {
  const { width, height } = useWindowSize();

  const { openedWindows, openWindow } = useWindowStore();

  useEffect(() => {
    openWindow({
      id: "biography",
      title: "Biography",
      imageSrc: "/icons/computer.png",
      altImage: "Computer",
      isFullScreen: false,
      isMinimized: false,
      component: <Biography />,
      ...getWindowPositionAndSize(width, height - 40, []),
    });

    if (openPrivacyOnLoad) {
      openWindow({
        id: "privacy",
        title: "Privacy",
        imageSrc: "/icons/document.png",
        altImage: "Document",
        isFullScreen: false,
        isMinimized: false,
        component: <Privacy />,
        ...getWindowPositionAndSize(width, height - 40, []),
      });
    }
  }, [height, openPrivacyOnLoad, openWindow, width]);

  return openedWindows.map((window) => {
    if (window.isMinimized === false) {
      return <AppWindow key={window.id} window={window} />;
    }
  });
};
