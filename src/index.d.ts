declare global {
    interface Window {
      google: {
        translate: {
          TranslateElement: new (options: object, element: string) => void;
        };
      };
      googleTranslateElementInit: () => void;
    }
  }