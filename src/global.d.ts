export {};

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (options: any, element: string | HTMLElement) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}
