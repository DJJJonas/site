import type PauseMenu from "./lib/components/PauseMenu.svelte";

const pauseContentFrames = [
  {
    filter: "grayscale(0) blur(0px) brightness(1)",
    boxShadow: "0 0 0 rgba(0, 0, 0, 0) inset",
  },
  {
    filter: "grayscale(1) blur(1px) brightness(1.5)",
    boxShadow: "0 0 1000px rgba(0, 0, 0, 0.9) inset",
  },
];
const pauseContentOptions = {
  duration: 100,
  fill: "forwards",
};

const unpauseContentFrames = [
  {
    filter: "grayscale(1) blur(1px) brightness(1.5)",
    boxShadow: "0 0 1000px rgba(0, 0, 0, 0.9) inset",
  },
  {
    filter: "grayscale(0) blur(0px) brightness(1)",
    boxShadow: "0 0 0 rgba(0, 0, 0, 0) inset",
  },
];
const unpauseContentOptions = {
  duration: 1000,
  fill: "forwards",
};

/**
 * Returns a function that, when called, will toggle the pause menu
 * @param pauseMenu The PauseMenu component itself
 * @param contentDiv The content div to be animated when the pause menu is toggled
 * @returns Handler for opening or closing the pause menu
 */
export function pauseContent(contentDiv: HTMLDivElement) {
  contentDiv.animate(
    pauseContentFrames,
    pauseContentOptions as KeyframeAnimationOptions
  );
}

export function unpauseContent(contentDiv: HTMLDivElement) {
  contentDiv.animate(
    unpauseContentFrames,
    unpauseContentOptions as KeyframeAnimationOptions
  );
}
