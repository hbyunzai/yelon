export const resizeWindow = (): void => {
  window.dispatchEvent(new Event('resize'));
};
