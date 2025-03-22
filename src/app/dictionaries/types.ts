export interface Dictionary {
    common: {
      title: string;
      description: string;
      language: string;
    };
    navigation: {
      home: string;
      about: string;
      products: string;
      contact: string;
      blog: string;
    };
    homepage: {
      title: string;
      description: string;
      hero: {
        title: string;
        subtitle: string;
        cta: string;
      };
      features: {
        title: string;
        feature1: {
          title: string;
          description: string;
        };
        feature2: {
          title: string;
          description: string;
        };
        feature3: {
          title: string;
          description: string;
        };
      };
    };
    about: {
      title: string;
      description: string;
      mission: {
        title: string;
        description: string;
      };
      vision: {
        title: string;
        description: string;
      };
      team: {
        title: string;
        description: string;
      };
    };
    products: {
      title: string;
      description: string;
      filter: string;
      sort: string;
      price: string;
      category: string;
      search: string;
      noResults: string;
      addToCart: string;
      viewDetails: string;
    };
    contact: {
      title: string;
      description: string;
      form: {
        name: string;
        email: string;
        subject: string;
        message: string;
        submit: string;
      };
      info: {
        address: string;
        phone: string;
        email: string;
      };
      success: string;
      error: string;
    };
    footer: {
      copyright: string;
      terms: string;
      privacy: string;
      cookies: string;
    };
  }