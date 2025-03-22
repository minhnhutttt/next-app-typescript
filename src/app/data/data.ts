export interface ArticleData {
    id: string;
    date: string;
    title: string;
    category: string;
    content: string;
    annotations?: {
      term: string;
      definition: string;
    }[];
    lang: 'ja' | 'en' | 'zh';
  }

  export const dataBlockChain: ArticleData[] = [
    {
      id: "01",
      date: "2024.4.18",
      title: "ビットコインに価値がないと言うのなら、人類は皆まともに歩けないと言っているようなものにすぎない",
      category: "仮想通貨",
      content: `ja`,
      annotations: [
        {
          term: "ボラティリティ",
          definition: "価格や数値の変動性を示す指標。主に金融市場で使用され、値動きの激しさを表現する。"
        }
      ],
      lang: "ja"
    },
    
    {
      id: "01",
      date: "2024.4.18",
      title: "Saying Bitcoin Has No Value Is Like Saying Humans Can't Walk Properly",
      category: "Cryptocurrency",
      content: `eng`,
      annotations: [
        {
          term: "Volatility",
          definition: "An indicator showing the variability of prices or values. Primarily used in financial markets to express the intensity of price movements."
        }
      ],
      lang: "en"
    },
    
    {
      id: "01",
      date: "2024.4.18",
      title: "说比特币没有价值就像说人类不能正常行走一样",
      category: "加密货币",
      content: `zh`,
      annotations: [
        {
          term: "波动性",
          definition: "表示价格或数值变化程度的指标。主要在金融市场使用，表达价格变动的剧烈程度。"
        }
      ],
      lang: "zh"
    },
  
    {
      id: "02",
      date: "2024.3.15",
      title: "ブロックチェーン技術：金融の未来",
      category: "ブロックチェーン",
      content: `<p>ブロックチェーン技術は、金融セクターに革命をもたらしています。この分散型台帳技術は、仲介者なしで安全な取引を可能にします。</p>
      <p>本記事では、ブロックチェーンの基本原理と、それが金融システムにどのように影響するかについて詳しく説明します。</p>`,
      lang: "ja"
    },
    {
      id: "02",
      date: "2024.3.15",
      title: "Blockchain Technology: The Future of Finance",
      category: "Blockchain",
      content: `<p>Blockchain technology is revolutionizing the financial sector. This distributed ledger technology enables secure transactions without intermediaries.</p>
      <p>In this article, we'll explore the fundamental principles of blockchain and how it's affecting financial systems.</p>`,
      lang: "en"
    },
    {
      id: "02",
      date: "2024.3.15",
      title: "区块链技术：金融的未来",
      category: "区块链",
      content: `<p>区块链技术正在彻底改变金融领域。这种分布式账本技术使安全交易无需中介机构。</p>
      <p>在本文中，我们将探讨区块链的基本原理及其对金融系统的影响。</p>`,
      lang: "zh"
    }
  ];

  export const dataAI: ArticleData[] = [
    {
      id: "01",
      date: "2024.4.18",
      title: "ビットコインに価値がないと言うのなら、人類は皆まともに歩けないと言っているようなものにすぎない",
      category: "仮想通貨",
      content: `ja`,
      annotations: [
        {
          term: "ボラティリティ",
          definition: "価格や数値の変動性を示す指標。主に金融市場で使用され、値動きの激しさを表現する。"
        }
      ],
      lang: "ja"
    },
    
    {
      id: "01",
      date: "2024.4.18",
      title: "Saying Bitcoin Has No Value Is Like Saying Humans Can't Walk Properly",
      category: "Cryptocurrency",
      content: `eng`,
      annotations: [
        {
          term: "Volatility",
          definition: "An indicator showing the variability of prices or values. Primarily used in financial markets to express the intensity of price movements."
        }
      ],
      lang: "en"
    },
    
    {
      id: "01",
      date: "2024.4.18",
      title: "说比特币没有价值就像说人类不能正常行走一样",
      category: "加密货币",
      content: `zh`,
      annotations: [
        {
          term: "波动性",
          definition: "表示价格或数值变化程度的指标。主要在金融市场使用，表达价格变动的剧烈程度。"
        }
      ],
      lang: "zh"
    },
  
    {
      id: "02",
      date: "2024.3.15",
      title: "ブロックチェーン技術：金融の未来",
      category: "ブロックチェーン",
      content: `<p>ブロックチェーン技術は、金融セクターに革命をもたらしています。この分散型台帳技術は、仲介者なしで安全な取引を可能にします。</p>
      <p>本記事では、ブロックチェーンの基本原理と、それが金融システムにどのように影響するかについて詳しく説明します。</p>`,
      lang: "ja"
    },
    {
      id: "02",
      date: "2024.3.15",
      title: "Blockchain Technology: The Future of Finance",
      category: "Blockchain",
      content: `<p>Blockchain technology is revolutionizing the financial sector. This distributed ledger technology enables secure transactions without intermediaries.</p>
      <p>In this article, we'll explore the fundamental principles of blockchain and how it's affecting financial systems.</p>`,
      lang: "en"
    },
    {
      id: "02",
      date: "2024.3.15",
      title: "区块链技术：金融的未来",
      category: "区块链",
      content: `<p>区块链技术正在彻底改变金融领域。这种分布式账本技术使安全交易无需中介机构。</p>
      <p>在本文中，我们将探讨区块链的基本原理及其对金融系统的影响。</p>`,
      lang: "zh"
    }
  ];
  export const dataWebSite: ArticleData[] = [
    {
      id: "01",
      date: "2024.4.18",
      title: "ビットコインに価値がないと言うのなら、人類は皆まともに歩けないと言っているようなものにすぎない",
      category: "仮想通貨",
      content: `ja`,
      annotations: [
        {
          term: "ボラティリティ",
          definition: "価格や数値の変動性を示す指標。主に金融市場で使用され、値動きの激しさを表現する。"
        }
      ],
      lang: "ja"
    },
    
    {
      id: "01",
      date: "2024.4.18",
      title: "Saying Bitcoin Has No Value Is Like Saying Humans Can't Walk Properly",
      category: "Cryptocurrency",
      content: `eng`,
      annotations: [
        {
          term: "Volatility",
          definition: "An indicator showing the variability of prices or values. Primarily used in financial markets to express the intensity of price movements."
        }
      ],
      lang: "en"
    },
    
    {
      id: "01",
      date: "2024.4.18",
      title: "说比特币没有价值就像说人类不能正常行走一样",
      category: "加密货币",
      content: `zh`,
      annotations: [
        {
          term: "波动性",
          definition: "表示价格或数值变化程度的指标。主要在金融市场使用，表达价格变动的剧烈程度。"
        }
      ],
      lang: "zh"
    },
  
    {
      id: "02",
      date: "2024.3.15",
      title: "ブロックチェーン技術：金融の未来",
      category: "ブロックチェーン",
      content: `<p>ブロックチェーン技術は、金融セクターに革命をもたらしています。この分散型台帳技術は、仲介者なしで安全な取引を可能にします。</p>
      <p>本記事では、ブロックチェーンの基本原理と、それが金融システムにどのように影響するかについて詳しく説明します。</p>`,
      lang: "ja"
    },
    {
      id: "02",
      date: "2024.3.15",
      title: "Blockchain Technology: The Future of Finance",
      category: "Blockchain",
      content: `<p>Blockchain technology is revolutionizing the financial sector. This distributed ledger technology enables secure transactions without intermediaries.</p>
      <p>In this article, we'll explore the fundamental principles of blockchain and how it's affecting financial systems.</p>`,
      lang: "en"
    },
    {
      id: "02",
      date: "2024.3.15",
      title: "区块链技术：金融的未来",
      category: "区块链",
      content: `<p>区块链技术正在彻底改变金融领域。这种分布式账本技术使安全交易无需中介机构。</p>
      <p>在本文中，我们将探讨区块链的基本原理及其对金融系统的影响。</p>`,
      lang: "zh"
    }
  ];

  export const dataAD: ArticleData[] = [
    {
      id: "01",
      date: "2024.4.18",
      title: "ビットコインに価値がないと言うのなら、人類は皆まともに歩けないと言っているようなものにすぎない",
      category: "仮想通貨",
      content: `ja`,
      annotations: [
        {
          term: "ボラティリティ",
          definition: "価格や数値の変動性を示す指標。主に金融市場で使用され、値動きの激しさを表現する。"
        }
      ],
      lang: "ja"
    },
    
    {
      id: "01",
      date: "2024.4.18",
      title: "Saying Bitcoin Has No Value Is Like Saying Humans Can't Walk Properly",
      category: "Cryptocurrency",
      content: `eng`,
      annotations: [
        {
          term: "Volatility",
          definition: "An indicator showing the variability of prices or values. Primarily used in financial markets to express the intensity of price movements."
        }
      ],
      lang: "en"
    },
    
    {
      id: "01",
      date: "2024.4.18",
      title: "说比特币没有价值就像说人类不能正常行走一样",
      category: "加密货币",
      content: `zh`,
      annotations: [
        {
          term: "波动性",
          definition: "表示价格或数值变化程度的指标。主要在金融市场使用，表达价格变动的剧烈程度。"
        }
      ],
      lang: "zh"
    },
  
    {
      id: "02",
      date: "2024.3.15",
      title: "ブロックチェーン技術：金融の未来",
      category: "ブロックチェーン",
      content: `<p>ブロックチェーン技術は、金融セクターに革命をもたらしています。この分散型台帳技術は、仲介者なしで安全な取引を可能にします。</p>
      <p>本記事では、ブロックチェーンの基本原理と、それが金融システムにどのように影響するかについて詳しく説明します。</p>`,
      lang: "ja"
    },
    {
      id: "02",
      date: "2024.3.15",
      title: "Blockchain Technology: The Future of Finance",
      category: "Blockchain",
      content: `<p>Blockchain technology is revolutionizing the financial sector. This distributed ledger technology enables secure transactions without intermediaries.</p>
      <p>In this article, we'll explore the fundamental principles of blockchain and how it's affecting financial systems.</p>`,
      lang: "en"
    },
    {
      id: "02",
      date: "2024.3.15",
      title: "区块链技术：金融的未来",
      category: "区块链",
      content: `<p>区块链技术正在彻底改变金融领域。这种分布式账本技术使安全交易无需中介机构。</p>
      <p>在本文中，我们将探讨区块链的基本原理及其对金融系统的影响。</p>`,
      lang: "zh"
    }
  ];
  export const dataMarketing: ArticleData[] = [
    {
      id: "01",
      date: "2024.4.18",
      title: "ビットコインに価値がないと言うのなら、人類は皆まともに歩けないと言っているようなものにすぎない",
      category: "仮想通貨",
      content: `ja`,
      annotations: [
        {
          term: "ボラティリティ",
          definition: "価格や数値の変動性を示す指標。主に金融市場で使用され、値動きの激しさを表現する。"
        }
      ],
      lang: "ja"
    },
    
    {
      id: "01",
      date: "2024.4.18",
      title: "Saying Bitcoin Has No Value Is Like Saying Humans Can't Walk Properly",
      category: "Cryptocurrency",
      content: `eng`,
      annotations: [
        {
          term: "Volatility",
          definition: "An indicator showing the variability of prices or values. Primarily used in financial markets to express the intensity of price movements."
        }
      ],
      lang: "en"
    },
    
    {
      id: "01",
      date: "2024.4.18",
      title: "说比特币没有价值就像说人类不能正常行走一样",
      category: "加密货币",
      content: `zh`,
      annotations: [
        {
          term: "波动性",
          definition: "表示价格或数值变化程度的指标。主要在金融市场使用，表达价格变动的剧烈程度。"
        }
      ],
      lang: "zh"
    },
  
    {
      id: "02",
      date: "2024.3.15",
      title: "ブロックチェーン技術：金融の未来",
      category: "ブロックチェーン",
      content: `<p>ブロックチェーン技術は、金融セクターに革命をもたらしています。この分散型台帳技術は、仲介者なしで安全な取引を可能にします。</p>
      <p>本記事では、ブロックチェーンの基本原理と、それが金融システムにどのように影響するかについて詳しく説明します。</p>`,
      lang: "ja"
    },
    {
      id: "02",
      date: "2024.3.15",
      title: "Blockchain Technology: The Future of Finance",
      category: "Blockchain",
      content: `<p>Blockchain technology is revolutionizing the financial sector. This distributed ledger technology enables secure transactions without intermediaries.</p>
      <p>In this article, we'll explore the fundamental principles of blockchain and how it's affecting financial systems.</p>`,
      lang: "en"
    },
    {
      id: "02",
      date: "2024.3.15",
      title: "区块链技术：金融的未来",
      category: "区块链",
      content: `<p>区块链技术正在彻底改变金融领域。这种分布式账本技术使安全交易无需中介机构。</p>
      <p>在本文中，我们将探讨区块链的基本原理及其对金融系统的影响。</p>`,
      lang: "zh"
    }
  ];
  export const dataFx: ArticleData[] = [
    {
      id: "01",
      date: "2024.4.18",
      title: "ビットコインに価値がないと言うのなら、人類は皆まともに歩けないと言っているようなものにすぎない",
      category: "仮想通貨",
      content: `ja`,
      annotations: [
        {
          term: "ボラティリティ",
          definition: "価格や数値の変動性を示す指標。主に金融市場で使用され、値動きの激しさを表現する。"
        }
      ],
      lang: "ja"
    },
    
    {
      id: "01",
      date: "2024.4.18",
      title: "Saying Bitcoin Has No Value Is Like Saying Humans Can't Walk Properly",
      category: "Cryptocurrency",
      content: `eng`,
      annotations: [
        {
          term: "Volatility",
          definition: "An indicator showing the variability of prices or values. Primarily used in financial markets to express the intensity of price movements."
        }
      ],
      lang: "en"
    },
    
    {
      id: "01",
      date: "2024.4.18",
      title: "说比特币没有价值就像说人类不能正常行走一样",
      category: "加密货币",
      content: `zh`,
      annotations: [
        {
          term: "波动性",
          definition: "表示价格或数值变化程度的指标。主要在金融市场使用，表达价格变动的剧烈程度。"
        }
      ],
      lang: "zh"
    },
  
    {
      id: "02",
      date: "2024.3.15",
      title: "ブロックチェーン技術：金融の未来",
      category: "ブロックチェーン",
      content: `<p>ブロックチェーン技術は、金融セクターに革命をもたらしています。この分散型台帳技術は、仲介者なしで安全な取引を可能にします。</p>
      <p>本記事では、ブロックチェーンの基本原理と、それが金融システムにどのように影響するかについて詳しく説明します。</p>`,
      lang: "ja"
    },
    {
      id: "02",
      date: "2024.3.15",
      title: "Blockchain Technology: The Future of Finance",
      category: "Blockchain",
      content: `<p>Blockchain technology is revolutionizing the financial sector. This distributed ledger technology enables secure transactions without intermediaries.</p>
      <p>In this article, we'll explore the fundamental principles of blockchain and how it's affecting financial systems.</p>`,
      lang: "en"
    },
    {
      id: "02",
      date: "2024.3.15",
      title: "区块链技术：金融的未来",
      category: "区块链",
      content: `<p>区块链技术正在彻底改变金融领域。这种分布式账本技术使安全交易无需中介机构。</p>
      <p>在本文中，我们将探讨区块链的基本原理及其对金融系统的影响。</p>`,
      lang: "zh"
    }
  ];

  // Helper function để lấy bài viết theo ID và ngôn ngữ
export const getArticleByIdAndLang = (id: string, lang: string): ArticleData | undefined => {
    return dataBlockChain.find(article => article.id === id && article.lang === lang);
  };
  
  // Helper function để lấy tất cả các bài viết theo ngôn ngữ
  export const getAllArticlesByLang = (data: ArticleData[], lang: string): ArticleData[] => {
    return data.filter(article => article.lang === lang);
  };
  
  // Lấy tất cả các ID duy nhất của bài viết
  export const getAllArticleIds = (): string[] => {
    const ids = new Set(dataBlockChain.map(article => article.id));
    return Array.from(ids);
  };