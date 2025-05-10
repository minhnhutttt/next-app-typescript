export function preloadImages(
  imgs: NodeListOf<HTMLImageElement> | HTMLCollection | HTMLImageElement[],
): Promise<void> {
  return Promise.all(
    Array.from(imgs).map((img) => {
      const imgElement = img as HTMLImageElement;

      if (imgElement.complete) return Promise.resolve();
      return new Promise<void>((resolve) => {
        imgElement.onload = () => resolve();
        imgElement.onerror = () => resolve();
      });
    }),
  ).then(() => {});
}
