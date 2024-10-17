declare global {
  interface Window {
    utag: any;
    Weglot?: {
      switchTo: (lang: string) => void;
      getCurrentLang: () => string;
      on: (event: string, callback: () => void) => void;
      off: (event: string, callback: () => void) => void;
    };
  }

  const utag: any;
}

export {};
