export interface ArticleTranslation {
  title: string;
  content: string;
  category: string;
  annotations: {
    modal: string;
    term: string;
    definition: string;
  }[];
}

export interface ArticleType {
  id: string;
  link: string;
  translations: {
    [langCode: string]: ArticleTranslation;
  };
}

export interface ArticleContent {
  id: string;
  title: string;
  category: string;
  link: string;
  content: string;
  annotations: {
    modal: string;
    term: string;
    definition: string;
  }[];
  lang: string;
}

export const getArticleByIdAndLang2 = (
  data: ArticleType[],
  id: string,
  lang: string
) => {
  const article = data.find((item) => item.id === id);

  if (!article || !article.translations[lang]) {
    return null;
  }

  const translation = article.translations[lang];

  return {
    id: article.id,
    title: translation.title,
    link: article.link,
    category: translation.category,
    content: translation.content,
    annotations: translation.annotations,
    lang: lang,
  };
};

export const getAllArticlesByLang2 = (
  data: ArticleType[],
  lang: string
): ArticleContent[] => {
  const articlesWithLang = data.filter(
    (article) => article.translations && article.translations[lang]
  );

  return articlesWithLang.map((article) => {
    const translation = article.translations[lang];

    return {
      id: article.id,
      link: article.link,
      title: translation.title,
      category: translation.category,
      content: translation.content,
      annotations: translation.annotations,
      lang: lang,
    };
  });
};

export const getTranslationByLang = (
  article: ArticleType,
  lang: string
): ArticleTranslation | null => {
  if (article.translations && article.translations[lang]) {
    return article.translations[lang];
  }

  return null;
};

export const dataAI: ArticleType[] = [
  {
    id: "01",
    link: "/ai/01",
    translations: {
      ja: {
        title:
          "AI開発とプロンプト開発をわからず騙される顧客の実態〜カニかまとカニだと信じてしまうようなアホなあなたへ〜",
        category: "",
        content: `「<span data-modal='anno-01'>プロンプト</span>」って何のことか説明できますか?<br><br><span data-modal='anno-03'>ChatGPT</span>などの<span data-modal='anno-02'>生成AI</span>が注目されはじめてから1年以上がたちます。<br>ですがいまだに、「<span data-modal='anno-01'>プロンプト</span>」って何なのか、よくわからない人は多いでしょう。<br><br><span class="hightlight">もし、あなたが、<br><span data-modal='anno-04'>AI開発</span>と<span data-modal='anno-05'>プロンプト開発</span>を同じだと思っているのであれば、<br><br>ろうそくと電球と同じものだと思って生活し、<br>カニかまをカニだと思って食べ続け、<br>野球ゲームで高得点を取れる人を野球選手と呼ぶくらい、<br><br>アホな勘違いをしていると思ってください。<br><br></span>AIの必要性に気づいた経営者の方から「AIを使ったサービスを作りたい」<br>という依頼を受けることも増えてきました。<br><br>会社としてAI活用を推進するのは、時代の流れを踏まえれば当然のこと。<br>ですが実際にヒアリングをすると、どうやら<span data-modal='anno-04'>AI開発</span>という名<br>「言葉遊び」に気づいてない人が多いようです。<br><br>2024年現在、<br><span class="hightlight">AI開発を謳っている企業の多くは、正確にはAI開発をしていません。</span><br>彼らが<span data-modal='anno-04'>AI開発</span>と呼んでいる開発の多くは、実は「<span data-modal='anno-05'>プロンプト開発</span>」です。<br>ここで言う<span data-modal='anno-05'>プロンプト開発</span>とは、<span data-modal='anno-02'>生成AI</span>にタスクを実行させるために、<br>プログラムではなく人間の言葉によって指示の出し方を工夫し、<br>最適化することを指します。<br><br>この与えられた<span data-modal='anno-01'>プロンプト</span>に基づいて、<br>AIはテキスト・画像・音楽などを生成するため、<br>与える<span data-modal='anno-01'>プロンプト</span>次第でアウトプットの質は大きく左右されます。<br>コーヒーづくりで例えるなら、次のような感じです。<br><br><div class="border border-black dark:border-white p-5"><strong>▼<span data-modal='anno-05'>プロンプト開発</span></strong><br />役割<br />最適なコーヒーを淹れる方法を見つける<br />主な作業<br /><ul class="list-disc list-inside pl-6"><li>既存のコーヒーメーカーを使用して、最高のコーヒーを淹れるための設定や手順を調整</li><li>異なる条件や好みに応じた最適なレシピや手順を開発</li><li>ユーザーが最適な結果を得られるように、具体的な指示やガイドラインを提供</li></ul></div><br /><div class="border border-black dark:border-white p-5"><strong>▼<span data-modal='anno-04'>AI開発</span></strong><br />役割<br />最適なコーヒーの淹れ方をもとに、最適なコーヒーメーカーを設計・構築する<br />主な作業<br /><ul class="list-disc list-inside pl-6"><li>最適なコーヒーを淹れるための条件や手順を理解し、その情報をもとに新しいコーヒーメーカーの機能や構造を設計</li><li>コーヒー抽出プロセスを効率化するための技術や<span data-modal='anno-09'>アルゴリズム</span>を開発</li><li>製品が一貫して最高のコーヒーを淹れられるように、機械のテストと改良を繰り返す</li></ul></div><br />確かに広義では、<span data-modal='anno-05'>プロンプト開発</span>も<span data-modal='anno-04'>AI開発</span>といえるかもしれません。<br />より厳密には、<span data-modal='anno-01'>プロンプト</span>にシステムが付随する場合は「<span data-modal='anno-04'>AI開発</span>=システム開発」となります。<br>この「システム」が抜け落ちてしまった結果、<span data-modal='anno-05'>プロンプト開発</span>という言葉だけが先行しているのでしょう。<br><br>そのような会社は、<span data-modal='anno-10'>LP</span>に「<span data-modal='anno-04'>AI開発</span>できます！」とデカデカと掲げるのは控えるべきです。<br><br>もしあなたが<span data-modal='anno-04'>AI開発</span>を外部に委託する場合、<br>その企業が<span data-modal='anno-06'>大規模言語モデル</span>や<span data-modal='anno-07'>機械学習</span>を得意とするのか<br>ディープラーニングを開発しているのか、<br><span data-modal='anno-01'>プロンプト</span>を開発しているのか<br>この点を見極めなければいけません。<br><br>これに付随して、「エンジニア」という言葉にも騙されないようにしてください。<br><span data-modal='anno-02'>生成AI</span>の誕生と共に、「<span data-modal='anno-08'>プロンプトエンジニア</span>」という職業がこの世に生まれました。<br><br><span class="hightlight"><span data-modal='anno-08'>プロンプトエンジニア</span>の仕事は、<br>AIに対する指示や質問(つまり、プロンプト)を設計し、最適化すること。</span><br>AIが生成するコンテンツの質や精度を高めるうえで、<br><span data-modal='anno-08'>プロンプトエンジニア</span>は間違いなく重要な存在となります。<br><br>しかし、あなたが仕事を依頼する委託先の口から<br>「うちのエンジニアが・・・」<br>という言葉が出てきたときは要注意。<br><br>相手が「<span data-modal='anno-01'>プロンプト</span>」のことを単に「AI」と呼んだり、<br>「<span data-modal='anno-08'>プロンプトエンジニア</span>」のことを「エンジニア」と呼ぶのには、<br>以下の3パターンの理由があると考えられます。<br><br /><div class="border border-black dark:border-white p-5">《パターン1:×》<br />ブランディングとして戦略的・営業的にそういった表現を使っている場合。<br />この場合、あなたが話している相手は技術者ではなく営業マンの可能性があります。<br />相手がAIの技術的なことを理解しているのかどうか、手元の<span data-modal='anno-03'>ChatGPT</span>で裏を取りながら確認ましょう。</div><br /><div class="border border-black dark:border-white p-5">《パターン2:×》<br />単に思考停止で「AI」「エンジニア」という言葉を使っている場合。<br />このケースは、特に実害もありませんがメリットもないです。このような相手はスルーで。</div><br /><div class="border border-black dark:border-white p-5">《パターン3:◎》<br />お客様、つまりあなたが理解しやすいように、あえて馴染みのある言葉を使っている場合。<br />このような相手は、「<span data-modal='anno-01'>プロンプト</span>」「AI」「エンジニア」が指す内容について、きちんと開示してくれるはず。<br />付き合うべきパートナーです。</div><br />私が言いたいのは、「言葉は正しく使うべき」ということ。<br><br>扱うのが<span data-modal='anno-01'>プロンプト</span>ならば<span data-modal='anno-04'>AI開発</span>ではなく<br>「<span data-modal='anno-05'>プロンプト開発</span>」「<span data-modal='anno-01'>プロンプト</span>実装」<br>と呼ぶべきです。<br><br>エンジニアという曖昧な言葉で濁すのではなく、<br>「<span data-modal='anno-08'>プロンプトエンジニア</span>」<br>「<span data-modal='anno-01'>プロンプト</span>ディレクター」<br>という適切な呼び名を使えということなんです。<br><br>勘違いしてほしくないのは、<br>決して<span data-modal='anno-05'>プロンプト開発</span>を下に見ているわけではないということです。<br><span class="hightlight">重要なのは、<br>「委託先が謳う<span data-modal='anno-04'>AI開発</span>は、蓋を開けたら実は<span data-modal='anno-05'>プロンプト開発</span>だった」<br>という可能性があることを、まずは知ること。</span><br><br>これに気づかないのは、<br>まさにコーヒーメーカーをコーヒーレシピだと思っているのに等しいわけです。<br>カニカマをカニだと思って食べていると表現した理由もわかったでしょう。<br><br>葱を背負っている鴨に成り下りたくなければ、しっかりと理解してください<br><br>。別にカニカマが悪いわけではありません。<br>でも、奥さんに「カニを買ってきて」と言われたのにカニカマを持って帰ってきたら<br>「なんてバカな旦那なんだろうか」と思われることはわかるでしょう。<br><br><span data-modal='anno-05'>プロンプト開発</span>を頼みたいなら、委託先に対して明確に<span data-modal='anno-05'>プロンプト開発</span>を依頼すべき。<br><br>一方、<span data-modal='anno-04'>AI開発</span>を頼みたいのに、<br>実は委託先が「<span data-modal='anno-05'>プロンプト開発</span>企業」だったと気づいたならば、<br>正しく<span data-modal='anno-04'>AI開発</span>ができる企業に依頼すべきです。<br><br><span class="hightlight">最も悲劇なのは、<br>今回解説したような真実を知らぬままに、<br>プロンプト開発しかできない企業にAI開発の仕事を発注してしまうことです。</span><br><br>おそらくその委託先は、あなたが望むアウトプットを出してくれません。<br>これに対して私は、かつての<span data-modal='anno-11'>SEO</span>のような匂いを感じています。<br>システムと違い、AIも<span data-modal='anno-11'>SEO</span>も答えが明確ではなくコロコロ変わる。<br><br>その意味では<span data-modal='anno-05'>プロンプト開発</span>は「終わりなき開発、ゴールなき開発」<br>であるにもかかわらず、言葉の曖昧さでうまく濁されてしまっている。<br><br>その「言葉の曖昧さ」をわかった上で<br>意図して「<span data-modal='anno-04'>AI開発</span>」と謳っている企業を見ると、あまり良い気分がしません。<br><br>この記事を読み、<span data-modal='anno-04'>AI開発</span>という言葉の裏にひそむ<br>「言葉遊び」について理解できたならば、<br>もう騙されることはないはずです。<br><br><span class="hightlight">私たちは仕事の依頼を受ける時、<br>最初に「AI開発」と「プロンプト開発」の違いを明確に説明しています。</span>あなたがもし望むのであれば、<br><span data-modal='anno-04'>AI開発</span>でも<span data-modal='anno-05'>プロンプト開発</span>でもよいので、<br>相談に乗りますよ。
        `,
        annotations: [
          {
            modal: "anno-01",
            term: "プロンプト",
            definition:
              "AIに対して出す指示や質問のこと。人間の言葉でAIに何をしてほしいかを伝える文章。",
          },
          {
            modal: "anno-02",
            term: "生成AI",
            definition:
              "テキスト、画像、音楽などを自動で作り出すAI技術。ChatGPTなどが代表例。",
          },
          {
            modal: "anno-03",
            term: "ChatGPT",
            definition:
              "OpenAI社が開発した対話型AI。質問に答えたり、文章を作成したりできる。",
          },
          {
            modal: "anno-04",
            term: "AI開発",
            definition:
              "AIの仕組み自体を設計・構築すること。機械学習モデルやアルゴリズムを作る技術開発。",
          },
          {
            modal: "anno-05",
            term: "プロンプト開発",
            definition:
              "既存のAIに対する指示の出し方を工夫し、より良い結果を得るための手法開発。",
          },
          {
            modal: "anno-06",
            term: "大規模言語モデル",
            definition:
              "膨大な文章データで学習した、言語を理解・生成できる巨大なAIシステム。",
          },
          {
            modal: "anno-07",
            term: "機械学習",
            definition:
              "コンピューターがデータから自動的にパターンを見つけて学習する技術。ディープラーニング人間の脳の神経回路を模倣した、多層構造を持つ機械学習の手法。",
          },
          {
            modal: "anno-08",
            term: "プロンプトエンジニア",
            definition:
              "AIへの指示文を設計・最適化して、AIの性能を最大化する専門職。",
          },
          {
            modal: "anno-09",
            term: "アルゴリズム",
            definition:
              "問題を解決するための計算手順や処理方法を定めた規則・手順。",
          },
          {
            modal: "anno-10",
            term: "LP（ランディングページ）",
            definition:
              "商品やサービスを紹介するためのウェブページ。訪問者の行動を促すのが目的。",
          },
          {
            modal: "anno-11",
            term: "SEO",
            definition:
              "検索エンジン最適化。Googleなどの検索結果で上位表示されやすくする技術。",
          },
        ],
      },
      en: {
        title:
          "The reality of customers who are deceived because they don't understand AI development and prompt development - For those of you who are so stupid that you believe it's a crab stick and a crab -",
        category: "",
        content: `Can you explain what a "<span data-modal='anno-01'>prompt</span>" is?<br><br>It's been over a year since <span data-modal='anno-03'>ChatGPT</span> and other <span data-modal='anno-02'>generative AI</span> tools started gaining attention.<br>But even now, many people still don't really understand what a "<span data-modal='anno-01'>prompt</span>" is.<br><br><span class="hightlight">If you think <span data-modal='anno-04'>AI development</span> and <span data-modal='anno-05'>prompt development</span> are the same thing,<br><br>it's like living your life thinking candles and light bulbs are the same thing,<br>continuing to eat imitation crab thinking it's real crab,<br>or calling someone who can score high in a baseball video game a baseball player—<br><br>you're making a foolish mistake.<br><br></span>We've been receiving more and more requests from business leaders who recognize the necessity of AI, saying "We want to create services using AI."<br><br>It's natural for companies to promote AI utilization given the current trends.<br>But when we actually conduct interviews, it seems many people haven't noticed the "word games" behind the term <span data-modal='anno-04'>AI development</span>.<br><br>As of 2024,<br><span class="hightlight">most companies claiming to do AI development are not actually doing AI development.</span><br>Much of what they call <span data-modal='anno-04'>AI development</span> is actually "<span data-modal='anno-05'>prompt development</span>."<br>What we mean by <span data-modal='anno-05'>prompt development</span> here refers to devising and optimizing<br>how to give instructions to <span data-modal='anno-02'>generative AI</span> to execute tasks,<br>not through programming but through human language.<br><br>Based on the given <span data-modal='anno-01'>prompt</span>,<br>AI generates text, images, music, etc.,<br>so the quality of output is greatly influenced by the <span data-modal='anno-01'>prompt</span> you provide.<br>Using coffee making as an example, it would be something like this.<br><br><div class="border border-black dark:border-white p-5"><strong>▼<span data-modal='anno-05'>Prompt Development</span></strong><br />Role<br />Find the method to brew the optimal coffee<br />Main Tasks<br /><ul class="list-disc list-inside pl-6"><li>Use existing coffee makers to adjust settings and procedures for brewing the best coffee</li><li>Develop optimal recipes and procedures according to different conditions and preferences</li><li>Provide specific instructions and guidelines for users to achieve optimal results</li></ul></div><br /><div class="border border-black dark:border-white p-5"><strong>▼<span data-modal='anno-04'>AI Development</span></strong><br />Role<br />Design and build the optimal coffee maker based on optimal coffee brewing methods<br />Main Tasks<br /><ul class="list-disc list-inside pl-6"><li>Understand the conditions and procedures for brewing optimal coffee, and design new coffee maker functions and structures based on this information</li><li>Develop technologies and <span data-modal='anno-09'>algorithms</span> to optimize the coffee extraction process</li><li>Repeatedly test and improve the machine so the product can consistently brew the best coffee</li></ul></div><br />Certainly, in a broad sense, <span data-modal='anno-05'>prompt development</span> could also be called <span data-modal='anno-04'>AI development</span>.<br />More strictly speaking, when systems accompany <span data-modal='anno-01'>prompts</span>, "<span data-modal='anno-04'>AI development</span> = system development."<br>It's because this "system" component has been dropped that only the term <span data-modal='anno-05'>prompt development</span> has taken precedence.<br><br>Such companies should refrain from boldly displaying "We can do <span data-modal='anno-04'>AI development</span>!" on their <span data-modal='anno-10'>landing pages</span>.<br><br>If you're outsourcing <span data-modal='anno-04'>AI development</span>,<br>you need to determine whether that company specializes in <span data-modal='anno-06'>large language models</span> or <span data-modal='anno-07'>machine learning</span>,<br>whether they're developing deep learning,<br>or whether they're developing <span data-modal='anno-01'>prompts</span>.<br><br>Related to this, don't be fooled by the word "engineer."<br>With the birth of <span data-modal='anno-02'>generative AI</span>, the profession of "<span data-modal='anno-08'>prompt engineer</span>" was born into this world.<br><br><span class="hightlight">The job of a <span data-modal='anno-08'>prompt engineer</span> is<br>to design and optimize instructions or questions to AI (i.e., prompts).</span><br><span data-modal='anno-08'>Prompt engineers</span> are undoubtedly important for improving the quality and accuracy of AI-generated content.<br><br>However, be careful when you hear<br>"Our engineers..."<br>from the contractors you're talking to.<br><br>When they simply call "<span data-modal='anno-01'>prompts</span>" "AI" or<br>call "<span data-modal='anno-08'>prompt engineers</span>" "engineers,"<br>there are three possible reasons:<br><br /><div class="border border-black dark:border-white p-5">《Pattern 1: ×》<br />When they strategically use such expressions for branding or sales purposes.<br />In this case, the person you're talking to might be a salesperson rather than a technical person.<br />Verify whether they understand AI technical matters by cross-checking with your <span data-modal='anno-03'>ChatGPT</span>.</div><br /><div class="border border-black dark:border-white p-5">《Pattern 2: ×》<br />When they mindlessly use words like "AI" and "engineer."<br />This case has no particular harm but no benefits either. Skip such people.</div><br /><div class="border border-black dark:border-white p-5">《Pattern 3: ◎》<br />When they deliberately use familiar terms to make it easier for customers (you) to understand.<br />Such people will properly disclose what "<span data-modal='anno-01'>prompts</span>," "AI," and "engineers" refer to.<br />They are partners you should work with.</div><br />What I want to say is, "Words should be used correctly."<br><br>If you're dealing with <span data-modal='anno-01'>prompts</span>, it shouldn't be called <span data-modal='anno-04'>AI development</span><br>but should be called "<span data-modal='anno-05'>prompt development</span>" or "<span data-modal='anno-01'>prompt</span> implementation."<br><br>Instead of obscuring things with the ambiguous word "engineer,"<br>use appropriate titles like "<span data-modal='anno-08'>prompt engineer</span>"<br>or "<span data-modal='anno-01'>prompt</span> director."<br><br>I don't want you to misunderstand—<br>I'm certainly not looking down on <span data-modal='anno-05'>prompt development</span>.<br><span class="hightlight">What's important is<br>first knowing the possibility that "the <span data-modal='anno-04'>AI development</span> your contractor claims to do<br>might actually be <span data-modal='anno-05'>prompt development</span> when you look under the hood."</span><br><br>Not noticing this is exactly like thinking a coffee maker is a coffee recipe.<br>Now you understand why I used the expression of eating imitation crab thinking it's real crab.<br><br>If you don't want to become a duck carrying green onions, understand this properly.<br><br>There's nothing wrong with imitation crab itself.<br>But if your wife tells you to "buy crab" and you come home with imitation crab,<br>you understand you'd be thought of as "what a foolish husband," right?<br><br>If you want to commission <span data-modal='anno-05'>prompt development</span>, you should clearly request <span data-modal='anno-05'>prompt development</span> from your contractor.<br><br>On the other hand, if you want to commission <span data-modal='anno-04'>AI development</span><br>but realize your contractor is actually a "<span data-modal='anno-05'>prompt development</span> company,"<br>you should commission a company that can properly do <span data-modal='anno-04'>AI development</span>.<br><br><span class="hightlight">The most tragic thing is<br>ordering AI development work from a company that can only do prompt development<br>without knowing the truth I've explained today.</span><br><br>That contractor probably won't deliver the output you want.<br>I sense something similar to the old <span data-modal='anno-11'>SEO</span> situation here.<br>Unlike systems, both AI and <span data-modal='anno-11'>SEO</span> don't have clear answers and keep changing.<br><br>In that sense, <span data-modal='anno-05'>prompt development</span> is "endless development, goalless development,"<br>yet it's cleverly obscured by linguistic ambiguity.<br><br>I don't feel good seeing companies that intentionally advertise "<span data-modal='anno-04'>AI development</span>"<br>while understanding this "linguistic ambiguity."<br><br>After reading this article, if you can understand<br>the "word games" hidden behind the term <span data-modal='anno-04'>AI development</span>,<br>you should never be deceived again.<br><br><span class="hightlight">When we receive work requests,<br>we first clearly explain the difference between "AI development" and "prompt development."</span>If you wish,<br>whether it's <span data-modal='anno-04'>AI development</span> or <span data-modal='anno-05'>prompt development</span>,<br>we can provide consultation.`,
        annotations: [
          {
            modal: "anno-01",
            term: "Prompt",
            definition:
              "Instructions or questions given to AI. Text written in human language to communicate what you want the AI to do.",
          },
          {
            modal: "anno-02",
            term: "Generative AI",
            definition:
              "AI technology that automatically creates text, images, music, and other content. ChatGPT is a representative example.",
          },
          {
            modal: "anno-03",
            term: "ChatGPT",
            definition:
              "A conversational AI developed by OpenAI. It can answer questions and create written content.",
          },
          {
            modal: "anno-04",
            term: "AI Development",
            definition:
              "Designing and building AI systems themselves. Technical development of machine learning models and algorithms.",
          },
          {
            modal: "anno-05",
            term: "Prompt Development",
            definition:
              "Developing methods to improve instruction-giving to existing AI systems to achieve better results.",
          },
          {
            modal: "anno-06",
            term: "Large Language Model",
            definition:
              "A massive AI system trained on vast amounts of text data that can understand and generate language.",
          },
          {
            modal: "anno-07",
            term: "Machine Learning",
            definition:
              "Technology that enables computers to automatically find patterns and learn from data. Deep learning is a machine learning method with multi-layered structures that mimics the neural networks of the human brain.",
          },
          {
            modal: "anno-08",
            term: "Prompt Engineer",
            definition:
              "A specialized profession that designs and optimizes instruction text for AI to maximize AI performance.",
          },
          {
            modal: "anno-09",
            term: "Algorithm",
            definition:
              "Rules and procedures that define computational steps or processing methods for solving problems.",
          },
          {
            modal: "anno-10",
            term: "LP (Landing Page)",
            definition:
              "A web page designed to introduce products or services. Its purpose is to encourage visitor actions.",
          },
          {
            modal: "anno-11",
            term: "SEO",
            definition:
              "Search Engine Optimization. Technology to make websites more likely to appear at the top of search results on Google and other search engines.",
          },
        ],
      },
      zh: {
        title:
          "因为不懂AI开发和提示开发而被欺骗的客户的现实——对于那些愚蠢到相信这是蟹棒和螃蟹的人——",
        category: "",
        content: `你能解释一下什么是「<span data-modal='anno-01'>提示词</span>」吗？<br><br>自从<span data-modal='anno-03'>ChatGPT</span>等<span data-modal='anno-02'>生成式AI</span>开始受到关注以来，已经过去一年多了。<br>但至今仍有很多人不太明白什么是「<span data-modal='anno-01'>提示词</span>」。<br><br><span class="hightlight">如果你认为<span data-modal='anno-04'>AI开发</span>和<span data-modal='anno-05'>提示词开发</span>是同一回事的话，<br><br>就像把蜡烛和电灯泡当作同样的东西来生活，<br>把蟹肉棒当作真螃蟹一直吃下去，<br>把在棒球游戏中能取得高分的人称为棒球选手一样，<br><br>你正在犯着愚蠢的错误。<br><br></span>从意识到AI必要性的经营者那里收到「想要制作使用AI的服务」的委托也越来越多了。<br><br>作为公司推进AI活用，考虑到时代潮流是理所当然的。<br>但实际进行咨询时，似乎很多人没有注意到<span data-modal='anno-04'>AI开发</span>这个名词背后的「文字游戏」。<br><br>2024年现在，<br><span class="hightlight">声称进行AI开发的企业中，大多数实际上并没有在进行AI开发。</span><br>他们称之为<span data-modal='anno-04'>AI开发</span>的开发工作，实际上大多是「<span data-modal='anno-05'>提示词开发</span>」。<br>这里所说的<span data-modal='anno-05'>提示词开发</span>，是指为了让<span data-modal='anno-02'>生成式AI</span>执行任务，<br>不是通过程序而是通过人类语言来巧妙地给出指示，<br>并进行最优化的工作。<br><br>基于给定的<span data-modal='anno-01'>提示词</span>，<br>AI会生成文本、图像、音乐等，<br>因此根据给出的<span data-modal='anno-01'>提示词</span>不同，输出质量会有很大差异。<br>用制作咖啡来举例的话，大概是这样的感觉。<br><br><div class="border border-black dark:border-white p-5"><strong>▼<span data-modal='anno-05'>提示词开发</span></strong><br />角色<br />找到冲泡最佳咖啡的方法<br />主要工作<br /><ul class="list-disc list-inside pl-6"><li>使用现有的咖啡机，调整设定和步骤来冲泡最好的咖啡</li><li>根据不同条件和喜好开发最佳配方和步骤</li><li>为用户提供具体指示和指导原则，以获得最佳结果</li></ul></div><br /><div class="border border-black dark:border-white p-5"><strong>▼<span data-modal='anno-04'>AI开发</span></strong><br />角色<br />基于最佳咖啡冲泡方法，设计和构建最佳咖啡机<br />主要工作<br /><ul class="list-disc list-inside pl-6"><li>理解冲泡最佳咖啡的条件和步骤，基于这些信息设计新咖啡机的功能和结构</li><li>开发提高咖啡萃取过程效率的技术和<span data-modal='anno-09'>算法</span></li><li>反复测试和改良机器，使产品能够持续冲泡出最好的咖啡</li></ul></div><br />确实从广义上来说，<span data-modal='anno-05'>提示词开发</span>也可以称为<span data-modal='anno-04'>AI开发</span>。<br />更严格地说，当<span data-modal='anno-01'>提示词</span>附带系统时，「<span data-modal='anno-04'>AI开发</span>=系统开发」。<br>正是因为这个「系统」被遗漏了，所以只有<span data-modal='anno-05'>提示词开发</span>这个词先行了。<br><br>这样的公司应该避免在<span data-modal='anno-10'>落地页</span>上大张旗鼓地写着「我们能做<span data-modal='anno-04'>AI开发</span>！」。<br><br>如果你要将<span data-modal='anno-04'>AI开发</span>委托给外部，<br>必须确认那家企业是否擅长<span data-modal='anno-06'>大语言模型</span>或<span data-modal='anno-07'>机器学习</span>，<br>是否在开发深度学习，<br>还是在开发<span data-modal='anno-01'>提示词</span>，<br>必须看清这一点。<br><br>与此相关，也不要被「工程师」这个词所欺骗。<br>随着<span data-modal='anno-02'>生成式AI</span>的诞生，「<span data-modal='anno-08'>提示词工程师</span>」这个职业在这个世界上诞生了。<br><br><span class="hightlight"><span data-modal='anno-08'>提示词工程师</span>的工作是<br>设计和优化对AI的指示或问题（即提示词）。</span><br>在提高AI生成内容的质量和准确性方面，<br><span data-modal='anno-08'>提示词工程师</span>无疑是重要的存在。<br><br>但是，当你委托工作的对象口中<br>说出「我们的工程师...」<br>这样的话时要特别注意。<br><br>对方将「<span data-modal='anno-01'>提示词</span>」简单地称为「AI」，<br>或将「<span data-modal='anno-08'>提示词工程师</span>」称为「工程师」，<br>可以考虑以下3种模式的原因。<br><br /><div class="border border-black dark:border-white p-5">《模式1:×》<br />作为品牌战略性、营销性地使用这样的表达的情况。<br />在这种情况下，与你交谈的对方可能不是技术人员而是销售人员。<br />要确认对方是否理解AI的技术内容，可以用手头的<span data-modal='anno-03'>ChatGPT</span>来验证。</div><br /><div class="border border-black dark:border-white p-5">《模式2:×》<br />单纯思考停止地使用「AI」「工程师」这样的词的情况。<br />这种情况特别没有实际危害，但也没有好处。这样的对象直接忽略即可。</div><br /><div class="border border-black dark:border-white p-5">《模式3:◎》<br />为了让客户（即你）更容易理解，故意使用熟悉词汇的情况。<br />这样的对象会正确地披露「<span data-modal='anno-01'>提示词</span>」「AI」「工程师」所指的内容。<br />是应该合作的伙伴。</div><br />我想说的是，「应该正确使用词汇」。<br><br>如果处理的是<span data-modal='anno-01'>提示词</span>，就不应该叫<span data-modal='anno-04'>AI开发</span>，<br>而应该称为「<span data-modal='anno-05'>提示词开发</span>」「<span data-modal='anno-01'>提示词</span>实现」。<br><br>不要用工程师这样模糊的词来糊弄，<br>而应该使用「<span data-modal='anno-08'>提示词工程师</span>」<br>「<span data-modal='anno-01'>提示词</span>总监」<br>这样适当的称呼。<br><br>希望不要误解的是，<br>我决不是在小看<span data-modal='anno-05'>提示词开发</span>。<br><span class="hightlight">重要的是，<br>首先要知道「委托方声称的<span data-modal='anno-04'>AI开发</span>，打开一看实际上是<span data-modal='anno-05'>提示词开发</span>」<br>这种可能性。</span><br><br>没有注意到这一点，<br>正如把咖啡机当作咖啡配方一样。<br>现在你也明白我为什么用把蟹肉棒当作螃蟹吃来表达的原因了吧。<br><br>如果不想成为背着大葱的鸭子，请好好理解。<br><br>蟹肉棒本身并没有什么不好。<br>但是，如果妻子说「买螃蟹回来」，你却买蟹肉棒回家，<br>会被认为「这是个多么愚蠢的丈夫啊」，这你是明白的吧。<br><br><span data-modal='anno-05'>提示词开发</span>を頼みたいなら、委託先に対して明確に<span data-modal='anno-05'>提示词开发</span>的要求。<br><br>另一方面，如果想委托<span data-modal='anno-04'>AI开发</span>，<br>却发现委托方实际上是「<span data-modal='anno-05'>提示词开发</span>企业」的话，<br>就应该委托能够正确进行<span data-modal='anno-04'>AI开发</span>的企业。<br><br><span class="hightlight">最悲惨的是，<br>在不知道今天解说的这种真相的情况下，<br>向只能进行提示词开发的企业下达AI开发的工作订单。</span><br><br>那个委托方恐怕不会给出你想要的输出。<br>对此我感受到了类似过去<span data-modal='anno-11'>SEO</span>的味道。<br>与系统不同，AI和<span data-modal='anno-11'>SEO</span>都没有明确的答案且不断变化。<br><br>从这个意义上说，<span data-modal='anno-05'>提示词开发</span>是「无止境的开发、没有目标的开发」，<br>然而却被词汇的模糊性巧妙地糊弄过去了。<br><br>看到那些明知这种「词汇模糊性」却故意宣称「<span data-modal='anno-04'>AI开发</span>」的企业，感觉不太好。<br><br>读了这篇文章，如果你能理解<span data-modal='anno-04'>AI开发</span>这个词背后隐藏的<br>「文字游戏」，<br>就再也不会被欺骗了。<br><br><span class="hightlight">我们在接受工作委托时，<br>首先会明确说明「AI开发」和「提示词开发」的区别。</span>如果你希望的话，<br>无论是<span data-modal='anno-04'>AI开发</span>还是<span data-modal='anno-05'>提示词开发</span>，<br>我们都可以为你提供咨询。`,
        annotations: [
          {
            modal: "anno-01",
            term: "提示词",
            definition:
              "向AI发出的指令或问题。用人类语言告诉AI需要做什么的文本。",
          },
          {
            modal: "anno-02",
            term: "生成式AI",
            definition:
              "自动创建文本、图像、音乐等内容的AI技术。ChatGPT是典型例子。",
          },
          {
            modal: "anno-03",
            term: "ChatGPT",
            definition: "OpenAI公司开发的对话式AI。能够回答问题和创作文章。",
          },
          {
            modal: "anno-04",
            term: "AI开发",
            definition:
              "设计和构建AI系统本身。创建机器学习模型和算法的技术开发。",
          },
          {
            modal: "anno-05",
            term: "提示词开发",
            definition: "优化对现有AI的指令方式，开发获得更好结果的方法。",
          },
          {
            modal: "anno-06",
            term: "大型语言模型",
            definition:
              "用海量文本数据训练的、能够理解和生成语言的巨型AI系统。",
          },
          {
            modal: "anno-07",
            term: "机器学习",
            definition:
              "计算机从数据中自动发现模式并学习的技术。深度学习是模仿人脑神经回路、具有多层结构的机器学习方法。",
          },
          {
            modal: "anno-08",
            term: "提示词工程师",
            definition: "设计和优化AI指令文本，最大化AI性能的专业职业。",
          },
          {
            modal: "anno-09",
            term: "算法",
            definition: "解决问题的计算步骤或处理方法的规则和程序。",
          },
          {
            modal: "anno-10",
            term: "LP（着陆页）",
            definition: "用于介绍产品或服务的网页。目的是促进访问者采取行动。",
          },
          {
            modal: "anno-11",
            term: "SEO",
            definition:
              "搜索引擎优化。使网站在谷歌等搜索结果中更容易排名靠前的技术。",
          },
        ],
      },
    },
  },
  {
    id: "02",
    link: "/ai/02",
    translations: {
      ja: {
        title:
          '令和版『桃太郎』AIを使う鬼との戦い 〜AIの"中身"が企業の明暗を分ける時代〜',
        category: "",
        content: `<span class="hightlight">「桃太郎」が令和の時代にいたら、鬼退治はどうなるでしょうか?</span><br><br>おじいさんは桃太郎に、<br>「村から金品を巻き上げた鬼を退治してくれ」<br>「これがあれば、楽に鬼退治ができるはずだ」<br><br>そう言って、<br>きびだんごではなく、<span data-modal='anno-01'>AIツール</span>を授けました。<br><br>この<span data-modal='anno-01'>AIツール</span>を使えば、<br>鬼の居場所を瞬時に把握できるし、戦略も立てやすい。<br><br>犬・猿・キジという仲間を連れずに、鬼ヶ島にも行かず、<br><span data-modal='anno-02'>遠隔操作</span>で<span data-modal='anno-11'>コスパ</span>よく鬼退治ができました。<br><br>しかし、めでたくお話は終わりません。<br><br>桃太郎の功績を知った力も頭脳もない村の商売人たちはこう考えました。<br>「そんな簡単なら俺たちでも同じことができるんじゃないか?」<br><br>そして、「<span data-modal='anno-03'>AI搭載</span>」という"旗印"を掲げ始めます。<br><br>「当店の武器はAIを搭載しています！」<br>「AIの力で楽々あなたも英雄に！」<br><br>一見すると本当にAIを搭載したかのような<span data-modal='anno-12'>ハイテク</span>に身を包んでいますが、<br>その実態は犬・猿・キジを共にして戦う旧式スタイルと変わりません。<br><br>"AIを看板に掲げるだけ"<br><br>の村の商売人は「<span data-modal='anno-04'>AIブーム</span>」に便乗して、<br>自分より弱い立場の人間を探しては鬼のように金儲けを試みるだけでした。<br>こうして村人の心に鬼は宿ってしまったのでした。<br><br>実際、世界はこの1年で、<br>「AI = なんかすごい= なんかすごいサービス =売れる 」<br>といった最強(短絡的)方程式を完成させました。<br><br>そんな方程式を見つけた企業は、<br>一目散に「<span data-modal='anno-03'>AI搭載</span>してます」ポーズを取り始めます。<br>言ってしまえば、<br><br><span class="hightlight">「AIの皮を被っただけ」のニセモノが乱立している</span><br><br>というわけです。<br><br>だから、AIの中身は「カラッポ」なのです。<br><br>しかし、本当の勝負はこれからです。<br>「搭載するAIの"中身"」こそが、企業の優劣を決める時代がやってきます。<br><br><span class="hightlight">表面的に「AI搭載」と言うだけでは、もう意味がありません。</span><br><br>「どれだけ"高度な"AIを搭載しているか」<br>「AIをどれだけ"<span data-modal='anno-09'>戦略的</span>に"活用しているか」<br><br>そうしたAIの「中身」が問われるようになるはずです。<br>そして、その「中身」こそがこれからの<span data-modal='anno-07'>ビジネス</span>の勝敗を分けることになる。<br>私はそう確信しています。<br><br>とはいえ「AIの皮を被る」だけでも今のうちは十分に売上は立つかもしれません。<br><br><span class="hightlight">でも、見せかけに頼っていては、いずれ時代に淘汰されるのは目に見えています。</span><br><br>そのような企業とは一線を画すべく、<br><span class="hightlight">私たちは「AIの中身」にこだわり抜きます。</span><br><br><span class="hightlight"><span data-modal='anno-06'>クライアント</span>の<span data-modal='anno-07'>ビジネス</span>を、真に成功に導くための<span data-modal='anno-05'>AIソリューション</span>を提供する。<br>世の中を本質的なサービスで満たしていく。</span><br><br>それが、私たちの<span data-modal='anno-08'>ミッション</span>です。<br><br>あなたが善良な<span data-modal='anno-07'>ビジネス</span>マンであれば、ともに人の心に宿った鬼退治をしましょう。<br>「本物でAIを活用したい!」と思ったなら、ぜひ我々に問い合わせをしましょう。<br>きびだんごはあげられませんが、本物のAI<span data-modal='anno-07'>ビジネス</span>体験をさせてあげましょう。
        `,
        annotations: [
          {
            modal: "anno-01",
            term: "AIツール",
            definition:
              "人工知能の機能を活用して作業を効率化するソフトウェアやアプリケーション。",
          },
          {
            modal: "anno-02",
            term: "遠隔操作",
            definition:
              "離れた場所からコンピューターやシステムを操作すること。リモートコントロール。",
          },
          {
            modal: "anno-03",
            term: "AI搭載",
            definition:
              "製品やサービスに人工知能の機能を組み込んでいること。AIを内蔵している状態。",
          },
          {
            modal: "anno-04",
            term: "AIブーム",
            definition:
              "人工知能技術への注目が高まり、多くの企業がAI関連事業に参入する社会現象。",
          },
          {
            modal: "anno-05",
            term: "AIソリューション",
            definition:
              "人工知能技術を使って企業の課題を解決するサービスや製品の総称。",
          },
          {
            modal: "anno-06",
            term: "クライアント",
            definition:
              "サービスや商品を利用する顧客・依頼主のこと。取引先やお客様を指すビジネス用語。",
          },
          {
            modal: "anno-07",
            term: "ビジネス",
            definition:
              "利益を目的とした商業活動や事業のこと。商売や企業活動全般を指す。",
          },
          {
            modal: "anno-08",
            term: "ミッション",
            definition:
              "企業や組織が果たすべき使命や存在意義。社会に対する役割や目標を表す。",
          },
          {
            modal: "anno-09",
            term: "戦略的",
            definition:
              "長期的な目標達成のために計画的・効果的に行動すること。戦略に基づいた。",
          },
          {
            modal: "anno-10",
            term: "淘汰",
            definition:
              "競争により劣ったものが自然に排除され、優れたものだけが生き残ること。",
          },
          {
            modal: "anno-11",
            term: "コスパ",
            definition:
              "コストパフォーマンスの略。費用に対する効果や成果の割合。費用対効果。",
          },
          {
            modal: "anno-12",
            term: "ハイテク",
            definition:
              "ハイテクノロジーの略。最新の高度な技術を使った製品やサービス。",
          },
        ],
      },
      en: {
        title:
          'Reiwa version of "Momotaro": Fighting against demons using AI ~The era in which the "contents" of AI determine the success or failure of a company~',
        category: "",
        content: `<span class="hightlight">If "Momotaro" existed in the Reiwa era, what would demon slaying look like?</span><br><br>The old man said to Momotaro,<br>"Please defeat the demons who have stolen money and valuables from the village"<br>"With this, you should be able to defeat demons easily"<br><br>And so,<br>instead of millet dumplings, he gave Momotaro <span data-modal='anno-01'>AI tools</span>.<br><br>Using these <span data-modal='anno-01'>AI tools</span>,<br>he could instantly locate the demons and easily formulate strategies.<br><br>Without bringing along companions like dogs, monkeys, and pheasants, and without going to Demon Island,<br>he could defeat demons with high <span data-modal='anno-11'>cost performance</span> through <span data-modal='anno-02'>remote operation</span>.<br><br>However, the story didn't end happily ever after.<br><br>The village merchants, who had neither strength nor brains, learned of Momotaro's achievements and thought:<br>"If it's that simple, couldn't we do the same thing?"<br><br>And so, they began raising the banner of "<span data-modal='anno-03'>AI-powered</span>."<br><br>"Our store's weapons are AI-powered!"<br>"With the power of AI, you too can easily become a hero!"<br><br>On the surface, they appeared to be equipped with <span data-modal='anno-12'>high-tech</span> gear that truly incorporated AI,<br>but in reality, they were no different from the old-style approach of fighting alongside dogs, monkeys, and pheasants.<br><br>"Just using AI as a signboard"<br><br>The village merchants rode the "<span data-modal='anno-04'>AI boom</span>,"<br>simply looking for people in weaker positions and trying to make money like demons.<br>Thus, demons came to dwell in the hearts of the villagers.<br><br>In fact, over this past year, the world has perfected this ultimate (short-sighted) equation:<br>"AI = something amazing = amazing service = sells well"<br><br>Companies that discovered this equation<br>immediately began striking poses saying "We're <span data-modal='anno-03'>AI-powered</span>."<br>To put it bluntly,<br><br><span class="hightlight">Fakes "just wearing AI skin" are proliferating everywhere</span><br><br>That's what's happening.<br><br>So, the content of AI is "empty."<br><br>But the real battle starts now.<br>An era is coming where "the 'content' of the AI being implemented" will determine corporate superiority.<br><br><span class="hightlight">Simply saying "AI-powered" on the surface no longer has meaning.</span><br><br>"How 'advanced' is the AI being implemented?"<br>"How '<span data-modal='anno-09'>strategically</span>' is AI being utilized?"<br><br>Such AI "content" will come to be questioned.<br>And that "content" will determine the victory or defeat of future <span data-modal='anno-07'>business</span>.<br>I'm convinced of this.<br><br>That said, just "wearing AI skin" might still generate sufficient sales for now.<br><br><span class="hightlight">But relying on appearances will inevitably lead to being weeded out by the times—that's obvious.</span><br><br>To distinguish ourselves from such companies,<br><span class="hightlight">we are completely committed to the "content of AI."</span><br><br><span class="hightlight">We provide <span data-modal='anno-05'>AI solutions</span> that truly guide our <span data-modal='anno-06'>clients</span>' <span data-modal='anno-07'>businesses</span> to success.<br>We fill the world with essential services.</span><br><br>That is our <span data-modal='anno-08'>mission</span>.<br><br>If you are an honest <span data-modal='anno-07'>business</span>person, let's work together to defeat the demons that have taken residence in people's hearts.<br>If you think "I want to truly utilize AI!" then please contact us.<br>We can't give you millet dumplings, but we'll give you a real AI <span data-modal='anno-07'>business</span> experience.`,
        annotations: [
          {
            modal: "anno-01",
            term: "AI Tools",
            definition:
              "Software or applications that utilize artificial intelligence functions to improve work efficiency.",
          },
          {
            modal: "anno-02",
            term: "Remote Operation",
            definition:
              "Operating computers or systems from a distant location. Remote control.",
          },
          {
            modal: "anno-03",
            term: "AI-Powered",
            definition:
              "Having artificial intelligence functions integrated into products or services. State of having built-in AI.",
          },
          {
            modal: "anno-04",
            term: "AI Boom",
            definition:
              "A social phenomenon where artificial intelligence technology gains widespread attention and many companies enter AI-related businesses.",
          },
          {
            modal: "anno-05",
            term: "AI Solutions",
            definition:
              "General term for services or products that use artificial intelligence technology to solve corporate challenges.",
          },
          {
            modal: "anno-06",
            term: "Client",
            definition:
              "Customers or principals who use services or products. Business term referring to business partners or customers.",
          },
          {
            modal: "anno-07",
            term: "Business",
            definition:
              "Commercial activities or enterprises aimed at profit. Refers to commerce or corporate activities in general.",
          },
          {
            modal: "anno-08",
            term: "Mission",
            definition:
              "The mission or purpose that a company or organization should fulfill. Represents the role or goals toward society.",
          },
          {
            modal: "anno-09",
            term: "Strategic",
            definition:
              "Acting in a planned and effective manner to achieve long-term goals. Based on strategy.",
          },
          {
            modal: "anno-10",
            term: "Natural Selection",
            definition:
              "The process where inferior things are naturally eliminated through competition, and only superior ones survive.",
          },
          {
            modal: "anno-11",
            term: "Cost Performance",
            definition:
              "Abbreviation of cost performance. The ratio of effects or results to cost. Cost-effectiveness.",
          },
          {
            modal: "anno-12",
            term: "High-Tech",
            definition:
              "Abbreviation of high technology. Products or services using the latest advanced technology.",
          },
        ],
      },
      zh: {
        title: "令和版《桃太郎》：用AI对抗恶魔～AI的“内容”将决定企业的成败～",
        category: "",
        content: `<span class="hightlight">如果「桃太郎」生活在令和时代，退治鬼怪会是什么样子呢？</span><br><br>爷爷对桃太郎说，<br>「请退治从村子里掠夺金钱财物的鬼怪」<br>「有了这个，就能轻松退治鬼怪了」<br><br>说着，<br>爷爷给了桃太郎的不是黍团子，而是<span data-modal='anno-01'>AI工具</span>。<br><br>使用这个<span data-modal='anno-01'>AI工具</span>，<br>能瞬间掌握鬼怪的位置，也容易制定战略。<br><br>不用带着狗、猴子、雉鸡这些伙伴，也不用去鬼岛，<br>通过<span data-modal='anno-02'>远程操作</span>就能高<span data-modal='anno-11'>性价比</span>地完成退治鬼怪的任务。<br><br>然而，故事并没有圆满结束。<br><br>村里那些既没有力量也没有头脑的商人们知道了桃太郎的功绩后这样想：<br>「既然这么简单，我们也能做同样的事情吧？」<br><br>于是，他们开始举起「<span data-modal='anno-03'>AI搭载</span>」这面"旗帜"。<br><br>「本店的武器搭载了AI！」<br>「借助AI的力量，您也能轻松成为英雄！」<br><br>表面上看起来真的像搭载了AI的<span data-modal='anno-12'>高科技</span>装备，<br>但实际上和带着狗、猴子、雉鸡一起战斗的旧式风格没有区别。<br><br>"只是把AI当作招牌"<br><br>村里的商人们便乘着「<span data-modal='anno-04'>AI热潮</span>」，<br>只是寻找比自己弱势的人，像鬼一样试图赚钱而已。<br>就这样，鬼怪在村民心中安了家。<br><br>实际上，这一年来世界完成了这样一个最强（短视）方程式：<br>「AI = 很厉害 = 很厉害的服务 = 畅销」<br><br>发现了这个方程式的企业，<br>立刻开始摆出「我们<span data-modal='anno-03'>搭载AI</span>」的姿态。<br>说白了，<br><br><span class="hightlight">「只是披着AI外皮」的假货在大量出现</span><br><br>就是这么回事。<br><br>所以，AI的内容是「空虚」的。<br><br>但是，真正的较量从现在开始。<br>「搭载AI的"内容"」将决定企业优劣的时代即将到来。<br><br><span class="hightlight">表面上只说「搭载AI」已经没有意义了。</span><br><br>「搭载了多么"高端"的AI」<br>「如何"<span data-modal='anno-09'>战略性</span>"地活用AI」<br><br>这样的AI「内容」将会被重视。<br>而且，这个「内容」将决定今后<span data-modal='anno-07'>商业</span>的胜负。<br>我对此深信不疑。<br><br>话虽如此，现在仅仅「披着AI的外皮」也许还能有充分的销售额。<br><br><span class="hightlight">但是，依赖表面功夫的话，迟早会被时代淘汰，这是显而易见的。</span><br><br>为了与这样的企业划清界限，<br><span class="hightlight">我们坚持追求「AI的内容」。</span><br><br><span class="hightlight">提供真正能引导<span data-modal='anno-06'>客户</span><span data-modal='anno-07'>商业</span>走向成功的<span data-modal='anno-05'>AI解决方案</span>。<br>用本质性的服务来充实这个世界。</span><br><br>这就是我们的<span data-modal='anno-08'>使命</span>。<br><br>如果您是善良的<span data-modal='anno-07'>商业</span>人士，让我们一起退治人心中的鬼怪吧。<br>如果您想「用真正的AI来经营！」，请一定要联系我们。<br>虽然不能给您黍团子，但我们会让您体验真正的AI<span data-modal='anno-07'>商业</span>。`,
        annotations: [
          {
            modal: "anno-01",
            term: "AI工具",
            definition: "利用人工智能功能提高工作效率的软件或应用程序。",
          },
          {
            modal: "anno-02",
            term: "远程操作",
            definition: "从远处操作计算机或系统。远程控制。",
          },
          {
            modal: "anno-03",
            term: "AI搭载",
            definition: "在产品或服务中集成人工智能功能。内置AI的状态。",
          },
          {
            modal: "anno-04",
            term: "AI热潮",
            definition:
              "人工智能技术受到广泛关注，众多企业进入AI相关业务的社会现象。",
          },
          {
            modal: "anno-05",
            term: "AI解决方案",
            definition: "使用人工智能技术解决企业问题的服务或产品的总称。",
          },
          {
            modal: "anno-06",
            term: "客户",
            definition:
              "使用服务或商品的顾客、委托方。指交易对象或客户的商业术语。",
          },
          {
            modal: "anno-07",
            term: "商业",
            definition:
              "以营利为目的的商业活动或事业。指商业或企业活动的总称。",
          },
          {
            modal: "anno-08",
            term: "使命",
            definition:
              "企业或组织应履行的使命或存在意义。表示对社会的角色或目标。",
          },
          {
            modal: "anno-09",
            term: "战略性",
            definition: "为实现长期目标而有计划、有效地行动。基于战略的。",
          },
          {
            modal: "anno-10",
            term: "淘汰",
            definition: "通过竞争，劣势者被自然淘汰，只有优秀者生存下来。",
          },
          {
            modal: "anno-11",
            term: "性价比",
            definition:
              "成本效益比的简称。费用相对于效果或成果的比例。成本效益。",
          },
          {
            modal: "anno-12",
            term: "高科技",
            definition: "高科技的简称。使用最新高端技术的产品或服务。",
          },
        ],
      },
    },
  },
];

export const dataBlockChain: ArticleType[] = [
  {
    id: "01",
    link: "/blockchain/01",
    translations: {
      ja: {
        title:
          "99%の企業は未だにアンフェアな”みかじめ料”を払っていることに気づいているのか",
        category: "",
        content: `関所<br>昔の商売人は、主要な町を通過するたびに、通行料を払っていました。<br>当然、今はありません。<br><br>みかじめ料<br>暴力団に力があった頃、飲食店や小売店は用心棒代として<br>半ば強制的に金銭を徴収されていました。<br>まだ文化としては残っていますが、ほとんどなくなっています。<br>時代が経るにつれて理不尽な徴収は少なくなり、<br>商売がしやすくなっているようにも思えます。<br><br>しかし、それはあくまで目に見える世界での話です。<br><br><span class="hightlight">今、経営者たちは、常に上納をし続けています。</span><br>目には見えない<span class="hightlight">"電子決済手数料"</span>を。<br><br>当然、そんなことは意識はして商売をしていることでしょう。<br><br>大手<span data-modal='anno-02'>ペイ払いサービス</span>でも約3パーセント。<br><span data-modal='anno-03'>クレカ決済</span>ではそれ以上の手数料がかかることも。<br><br>手数料が3パーセントの場合、<br>売上10億円の企業の「上納」金額は、少なくとも3,000万円となります。<br><br><span data-modal='anno-04'>取引手数料</span>、<span data-modal='anno-05'>固定手数料</span>、返金処理や不正利用などイレギュラーな手数料・・・<br>諸々含めると、売上の1割も手数料支払いで消えることも。<br><br>クレカやペイ払いで、たしかに顧客の利便性は向上します。<br>現金払いに比べて売上を取りっぱぐれるリスクが減るため、<br>一概にデメリットばかりとは言えません。<br><br>このようなメリットを受ける対価としてコスト(手数料)を支払う事自体は、<br>何の問題もありません。資本主義の自然構造です。<br><br><span class="hightlight">しかし、問題なのは、<br>カード会社やペイ払い運営会社は自分たちだけが、<br>儲かる仕組みを独占的に構築していることです。<br></span><br>彼らは、<br><span class="hightlight">よりコストを抑えながら利便性を維持できる"手段"を知っているのに、<br>それをひた隠しにしています。<br>その"手段"とは、<span data-modal='anno-06'>ブロックチェーン</span>です。<br></span><br>暗号資産(仮想通貨)や<span data-modal='anno-08'>NFT</span>の文脈で語られることが多い<span data-modal='anno-06'>ブロックチェーン</span>。<br>しかしその本質は、投資や投機の範疇に留まりません。<br><br><span data-modal='anno-06'>ブロックチェーン</span>をビジネスに導入することで、<br>決済システム企業への手数料上納を回避できます。<br><br>なぜ<span data-modal='anno-06'>ブロックチェーン</span>が、手数料の上納を回避することにつながるのか。<br><br>この点を理解するために、<br>そもそもあなたようカード利用事業者が「手数料の上納」も含め、<br>どのような不利益を被っているのかを2つの観点から説明します。<br><br><div class="border border-black dark:border-white p-5"><strong>《1.カード会社に支払う手数料負担》</strong><br /><br />現金を用いない電子決済ではカード会社のような「<span data-modal='anno-13'>中間管理者</span>」がカード利用事業者と ユーザーの間に必ず入り込んできます。<br>現金決済であれば、事業者はユーザーからダイレクトに売上を受け取ることができます。<br>中間の管理会社が入り込む余地はありません。<br>一方、カード決済を導入している場合、カード利用事業者は売上の数パーセントをカード会 社に必ず納めなければなりません。</div><br><div class="border border-black dark:border-white p-5"><strong>《2.<span data-modal='anno-09'>売掛金</span>の<span data-modal='anno-10'>着金</span>の遅れ》</strong><br /><br />現金決済ならば、売上が発生した瞬間に、事業者は売上の全額をユーザーから直接受け 取れます。<br>常に「リアルタイムでダイレクトな<span data-modal='anno-10'>着金</span>」であり、売掛という概念すら存在しません。<br>しかし、間にカード会社が入る場合はそうはいきません。<br>ユーザーがカードで支払いをした場合、その売上はまずカード会社に計上されます。<br>その後、手数料を差し引いた上で残りの売上がカード利用事業者に<span data-modal='anno-10'>着金</span>します。 しかも、1〜2ヶ月遅れで。<br></div><br>なぜ、自社の売上がカード会社という「第三者」に一旦計上されなければならないのか?<br>なぜ、売上の<span data-modal='anno-10'>着金</span>が1〜2ヶ月遅れになるというリスクをカード利用事業者側が背負う必要が あるのか?<br><br>たしかに、これらのデメリットは利便性とのトレードオフになっています。<br>利便性のためにデメリットも同時に受け入れろと言われたらそれまでです。<br><br>ところが、<br>この仕組みを根底から変えうる技術があります。<br>それが<span data-modal='anno-06'>ブロックチェーン</span>なのです。<br><br><span class="hightlight"><span data-modal='anno-06'>ブロックチェーン</span>で実現できることを一言で表すらなら、<br>「インターネット上におけるダイレクトな電子商取引の実現」<br></span><br><span data-modal='anno-06'>ブロックチェーン</span>を用いたインターネット上のやりとりには、<br>ピア・ツー・ピア(Peer to Peer:P2P)という特徴があります。<br><br>ここで言うPeerとは「対価の支払い・受け取り」に直接関わる主体、<br>つまり、<br>・支払いを受ける事業者<br>・支払いを行う<span data-modal='anno-12'>エンドユーザー</span><br>を指します。<br><br><span data-modal='anno-06'>ブロックチェーン</span>が提供するP2Pの仕組みにおいては、<br>Peer(<span data-modal='anno-12'>エンドユーザー</span>)からPeer(事業者)に対して、<br>カード会社のような<span data-modal='anno-13'>中間管理者</span>を介さないダイレクトな支払いが可能なのです。<br><br><span class="hightlight">管理者を介さないことで取引の<span data-modal='anno-14'>透明性</span>や<span data-modal='anno-15'>セキュリティ</span>が担保され、<br>手数料も安く済むことから、<br><span data-modal='anno-06'>ブロックチェーン</span>を活用した決済方法を好むユーザーも増えてきています。<br></span><br>さらに、企業にとっても、<br>それまで接点がなかった新たなユーザーの呼び込みにつながるなどのメリッ トがあります。<br><br>クレジットカード払いやペイ払いは、<br>現時点での利便性はたしかに<span data-modal='anno-06'>ブロックチェーン</span>よりも優れているかもしれません。<br><br>しかし、その利便性はあなたの会社がカード会社に<br> "上納" する手数料によって成り立っています。<br>もっと便利な<span data-modal='anno-06'>ブロックチェーン</span>という仕組みが世の中にはあるにもかかわらず。<br><br><span class="hightlight">この中世の<span data-modal='anno-16'>農奴制</span>と変わらない仕組みを理解しつつもまだ、<br>貢ぎ物やらみかじめ料を上納し続けたいでしょうか?<br><br>上に搾取される前提で、手数料を上乗せして<br>あなたも顧客から無駄に搾取し続けるのですか?<br><br>そこに、健全な競争原理はあるんでしょうか?<br>搾取の連鎖が続くだけではないでしょうか?<br></span><br>私たちは、そのことをよく理解しています。<br>だから、私たちは搾取できません。嘘もつけません。<br><br>もう、搾取も嘘も疲れませんか?<br>あなたがもし、健全で安全、<br>かつ便利な決済サービスの導入を考えているならば、<br>すぐに我々に問い合わせてください。<br>`,
        annotations: [
          {
            modal: "anno-01",
            term: "電子決済手数料",
            definition:
              "クレジットカードや電子マネーでの支払いの際に、決済代行会社に支払う手数料。",
          },
          {
            modal: "anno-02",
            term: "ペイ払いサービス",
            definition:
              "PayPayやLINE Payなど、スマートフォンアプリを使った電子決済サービス。",
          },
          {
            modal: "anno-03",
            term: "クレカ決済",
            definition:
              "クレジットカードを使った支払い方法。カード会社が一時的に代金を立て替える仕組み。",
          },
          {
            modal: "anno-04",
            term: "取引手数料",
            definition:
              "商品やサービスの売買が成立した際に、仲介業者に支払う手数料。",
          },
          {
            modal: "anno-05",
            term: "固定手数料",
            definition:
              "取引金額に関わらず一定額が課される手数料。月額料金などが代表例。",
          },
          {
            modal: "anno-06",
            term: "ブロックチェーン",
            definition:
              "取引記録を暗号化して分散管理する技術。改ざんが困難で透明性が高い。",
          },
          {
            modal: "anno-07",
            term: "暗号資産（仮想通貨）",
            definition:
              "ブロックチェーン技術を使ったデジタル通貨。ビットコインが代表例。",
          },
          {
            modal: "anno-08",
            term: "NFT",
            definition:
              "ブロックチェーン上で発行される、デジタル資産の所有権を証明する仕組み。",
          },
          {
            modal: "anno-09",
            term: "売掛金",
            definition:
              "商品を販売したが、まだ代金を受け取っていない債権。売上の未回収分。",
          },
          {
            modal: "anno-10",
            term: "着金",
            definition:
              "銀行口座に代金が振り込まれること。売上が実際に手元に入ること。",
          },
          {
            modal: "anno-11",
            term: "ピア・ツー・ピア（P2P）",
            definition:
              "中央管理者を介さず、利用者同士が直接やり取りする通信方式。",
          },
          {
            modal: "anno-12",
            term: "エンドユーザー",
            definition:
              "商品やサービスを最終的に利用する消費者。最終利用者のこと。",
          },
          {
            modal: "anno-13",
            term: "中間管理者",
            definition:
              "取引の仲介を行う業者。クレジットカード会社や決済代行会社など。",
          },
          {
            modal: "anno-14",
            term: "透明性",
            definition:
              "取引内容や処理過程が公開され、誰でも確認できる状態。不正を防ぐ仕組み。",
          },
          {
            modal: "anno-15",
            term: "セキュリティ",
            definition: "情報やシステムを不正アクセスや攻撃から守る安全対策。",
          },
          {
            modal: "anno-16",
            term: "農奴制",
            definition:
              "中世ヨーロッパの制度で、農民が領主に労働や貢物を強制される社会システム。",
          },
        ],
      },
      en: {
        title:
          'Are 99% of Companies Aware They\'re Still Paying Unfair "Protection Money"?',
        category: "",
        content: `Checkpoint Tolls<br>In the past, merchants had to pay tolls every time they passed through major towns.<br>Of course, these no longer exist today.<br><br>Protection Money<br>When organized crime groups had power, restaurants and retail stores were<br>semi-forcibly charged money as bodyguard fees.<br>While this culture still remains, it has mostly disappeared.<br>As time has passed, unreasonable collections have decreased,<br>and it seems business has become easier.<br><br>However, this is only true in the visible world.<br><br><span class="hightlight">Now, business owners are constantly paying tribute.</span><br>Invisible <span class="hightlight">"electronic payment processing fees."</span><br><br>Of course, they must be conscious of this when doing business.<br><br>Even major <span data-modal='anno-02'>mobile payment services</span> charge about 3%.<br><span data-modal='anno-03'>Credit card payments</span> sometimes charge even higher fees.<br><br>When fees are 3%,<br>a company with 1 billion yen in sales pays at least 30 million yen in "tribute."<br><br><span data-modal='anno-04'>Transaction fees</span>, <span data-modal='anno-05'>fixed fees</span>, refund processing and fraudulent use fees...<br>Including various charges, up to 10% of sales can disappear in fee payments.<br><br>Credit cards and mobile payments certainly improve customer convenience.<br>Compared to cash payments, they reduce the risk of uncollected sales,<br>so it can't be said that there are only disadvantages.<br><br>Paying costs (fees) as compensation for receiving such benefits<br>is not a problem at all. It's the natural structure of capitalism.<br><br><span class="hightlight">However, the problem is that<br>credit card companies and mobile payment operators alone<br>have monopolistically built profitable mechanisms.<br></span><br>They<br><span class="hightlight">know the "means" to maintain convenience while reducing costs,<br>but they keep it strictly hidden.<br>That "means" is <span data-modal='anno-06'>blockchain</span>.<br></span><br><span data-modal='anno-06'>Blockchain</span> is often discussed in the context of <span data-modal='anno-07'>cryptocurrency</span> and <span data-modal='anno-08'>NFTs</span>.<br>However, its essence is not limited to the realm of investment or speculation.<br><br>By introducing <span data-modal='anno-06'>blockchain</span> into business,<br>you can avoid paying tribute fees to payment system companies.<br><br>Why does <span data-modal='anno-06'>blockchain</span> help avoid paying tribute fees?<br><br>To understand this point,<br>let me explain from two perspectives what disadvantages card-using businesses like yours suffer,<br>including "fee tribute payments."<br><br><div class="border border-black dark:border-white p-5"><strong>《1. Fee burden paid to credit card companies》</strong><br /><br />In electronic payments that don't use cash, "<span data-modal='anno-13'>intermediaries</span>" like credit card companies inevitably intervene between card-using businesses and users.<br>With cash payments, businesses can receive sales revenue directly from users.<br>There's no room for intermediate management companies to intervene.<br>On the other hand, when credit card payments are introduced, card-using businesses must pay several percent of sales to credit card companies.</div><br><div class="border border-black dark:border-white p-5"><strong>《2. Delayed <span data-modal='anno-10'>fund receipt</span> of <span data-modal='anno-09'>accounts receivable</span>》</strong><br /><br />With cash payments, the moment sales occur, businesses can receive the full amount directly from users.<br>It's always "real-time direct <span data-modal='anno-10'>fund receipt</span>," and the concept of accounts receivable doesn't even exist.<br>However, when credit card companies are involved, it's different.<br>When users pay with cards, that sales revenue is first recorded with the credit card company.<br>After that, the remaining sales after deducting fees are <span data-modal='anno-10'>deposited</span> to the card-using business. Moreover, with a 1-2 month delay.<br></div><br>Why must your company's sales be first recorded with the credit card company, a "third party"?<br>Why should card-using businesses bear the risk of 1-2 month delays in sales <span data-modal='anno-10'>fund receipt</span>?<br><br>Certainly, these disadvantages are trade-offs with convenience.<br>If told to accept disadvantages simultaneously for the sake of convenience, that's that.<br><br>However,<br>there is technology that can fundamentally change this mechanism.<br>That is <span data-modal='anno-06'>blockchain</span>.<br><br><span class="hightlight">If we express what <span data-modal='anno-06'>blockchain</span> can achieve in one phrase:<br>"Realizing direct electronic commerce transactions on the internet"<br></span><br>Internet interactions using <span data-modal='anno-06'>blockchain</span><br>have the characteristic of peer-to-peer (P2P).<br><br>Peer here refers to entities directly involved in "payment and receipt of consideration,"<br>namely:<br>・Businesses receiving payments<br>・<span data-modal='anno-12'>End users</span> making payments<br><br>In the P2P mechanism provided by <span data-modal='anno-06'>blockchain</span>,<br>direct payments are possible from Peer (<span data-modal='anno-12'>end users</span>) to Peer (businesses)<br>without going through <span data-modal='anno-13'>intermediaries</span> like credit card companies.<br><br><span class="hightlight">By not going through managers, transaction <span data-modal='anno-14'>transparency</span> and <span data-modal='anno-15'>security</span> are guaranteed,<br>fees are also cheaper,<br>and users who prefer payment methods using <span data-modal='anno-06'>blockchain</span> are increasing.<br></span><br>Furthermore, for companies,<br>there are benefits such as attracting new users they previously had no contact with.<br><br>Credit card payments and mobile payments<br>may indeed currently be superior to <span data-modal='anno-06'>blockchain</span> in terms of convenience.<br><br>However, that convenience is built on the fees your company<br>pays as "tribute" to credit card companies.<br>Despite the existence of more convenient mechanisms like <span data-modal='anno-06'>blockchain</span> in the world.<br><br><span class="hightlight">Understanding this mechanism that's no different from medieval <span data-modal='anno-16'>serfdom</span>, do you still<br>want to continue paying tribute and protection money?<br><br>Under the premise of being exploited from above, adding fees<br>will you continue to needlessly exploit customers?<br><br>Is there healthy competitive principle there?<br>Isn't it just a continuation of the chain of exploitation?<br></span><br>We understand this well.<br>Therefore, we cannot exploit. We cannot lie either.<br><br>Aren't you tired of exploitation and lies?<br>If you are considering introducing healthy, safe<br>and convenient payment services,<br>please contact us immediately.`,
        annotations: [
          {
            modal: "anno-01",
            term: "Electronic Payment Processing Fees",
            definition:
              "Fees paid to payment processing companies when making payments with credit cards or electronic money.",
          },
          {
            modal: "anno-02",
            term: "Mobile Payment Services",
            definition:
              "Electronic payment services using smartphone apps, such as PayPay and LINE Pay.",
          },
          {
            modal: "anno-03",
            term: "Credit Card Payment",
            definition:
              "Payment method using credit cards. A system where the card company temporarily advances the payment.",
          },
          {
            modal: "anno-04",
            term: "Transaction Fees",
            definition:
              "Fees paid to intermediary companies when the purchase or sale of goods or services is completed.",
          },
          {
            modal: "anno-05",
            term: "Fixed Fees",
            definition:
              "Fees charged at a fixed amount regardless of transaction amount. Monthly fees are a typical example.",
          },
          {
            modal: "anno-06",
            term: "Blockchain",
            definition:
              "Technology that encrypts and manages transaction records in a distributed manner. Difficult to tamper with and highly transparent.",
          },
          {
            modal: "anno-07",
            term: "Cryptocurrency (Virtual Currency)",
            definition:
              "Digital currency using blockchain technology. Bitcoin is a representative example.",
          },
          {
            modal: "anno-08",
            term: "NFT",
            definition:
              "A mechanism issued on blockchain that proves ownership of digital assets.",
          },
          {
            modal: "anno-09",
            term: "Accounts Receivable",
            definition:
              "Claims for goods sold but payment not yet received. Uncollected portion of sales revenue.",
          },
          {
            modal: "anno-10",
            term: "Fund Receipt",
            definition:
              "Money being deposited into a bank account. Sales revenue actually coming into hand.",
          },
          {
            modal: "anno-11",
            term: "Peer-to-Peer (P2P)",
            definition:
              "Communication method where users interact directly with each other without going through a central administrator.",
          },
          {
            modal: "anno-12",
            term: "End User",
            definition:
              "Consumers who ultimately use products or services. Final users.",
          },
          {
            modal: "anno-13",
            term: "Intermediary",
            definition:
              "Companies that mediate transactions. Such as credit card companies or payment processing companies.",
          },
          {
            modal: "anno-14",
            term: "Transparency",
            definition:
              "A state where transaction content or processing procedures are disclosed and anyone can verify them. A mechanism to prevent fraud.",
          },
          {
            modal: "anno-15",
            term: "Security",
            definition:
              "Safety measures to protect information or systems from unauthorized access or attacks.",
          },
          {
            modal: "anno-16",
            term: "Serfdom",
            definition:
              "A medieval European system where peasants were forced to provide labor or tribute to lords. A social system.",
          },
        ],
      },
      zh: {
        title: '99%的企业是否意识到他们仍在支付不公平的"保护费"？',
        category: "",
        content: `关所<br>过去的商人每次经过主要城镇时，都要缴纳通行费。<br>当然，现在已经不存在了。<br><br>保护费<br>在暴力团有势力的时代，饮食店和零售店作为保镖费<br>被半强制性地征收金钱。<br>虽然作为文化还残留着，但几乎已经消失了。<br>随着时代的发展，不合理的征收减少了，<br>做生意似乎也变得容易了。<br><br>然而，这只是在可见世界里的情况。<br><br><span class="hightlight">现在，经营者们一直在持续上缴。</span><br>看不见的<span class="hightlight">"电子支付手续费"</span>。<br><br>当然，他们应该是有意识地在这样经营着。<br><br>大型<span data-modal='anno-02'>移动支付服务</span>也要约3%。<br><span data-modal='anno-03'>信用卡支付</span>有时会收取更高的手续费。<br><br>手续费为3%的情况下，<br>销售额10亿日元企业的「上缴」金额，至少是3000万日元。<br><br><span data-modal='anno-04'>交易手续费</span>、<span data-modal='anno-05'>固定手续费</span>、退款处理和欺诈使用等非常规手续费...<br>各种费用加起来，销售额的10%也可能在手续费支付中消失。<br><br>通过信用卡和移动支付，客户的便利性确实提高了。<br>与现金支付相比，减少了销售收不回来的风险，<br>不能一概而论都是缺点。<br><br>作为享受这些好处的代价而支付成本（手续费）本身，<br>没有任何问题。这是资本主义的自然结构。<br><br><span class="hightlight">但是，问题在于，<br>信用卡公司和移动支付运营公司只有他们自己，<br>垄断性地构建了盈利的机制。<br></span><br>他们，<br><span class="hightlight">明明知道能够在降低成本的同时维持便利性的"手段"，<br>却将其严密隐藏着。<br>那个"手段"就是<span data-modal='anno-06'>区块链</span>。<br></span><br>在<span data-modal='anno-07'>加密资产（虚拟货币）</span>和<span data-modal='anno-08'>NFT</span>的语境中经常被提及的<span data-modal='anno-06'>区块链</span>。<br>但其本质并不仅限于投资或投机的范畴。<br><br>通过在商业中导入<span data-modal='anno-06'>区块链</span>，<br>可以避免向支付系统企业上缴手续费。<br><br>为什么<span data-modal='anno-06'>区块链</span>能够避免手续费的上缴呢。<br><br>为了理解这一点，<br>首先从两个角度说明像您这样的信用卡使用事业者包括「手续费上缴」在内，<br>遭受着怎样的不利益。<br><br><div class="border border-black dark:border-white p-5"><strong>《1.向信用卡公司支付的手续费负担》</strong><br /><br />在不使用现金的电子支付中，像信用卡公司这样的「<span data-modal='anno-13'>中间管理者</span>」必然会介入信用卡使用事业者和用户之间。<br>如果是现金支付，事业者可以直接从用户那里收到销售额。<br>中间管理公司没有介入的余地。<br>另一方面，如果导入了信用卡支付，信用卡使用事业者必须向信用卡公司缴纳销售额的几个百分点。</div><br><div class="border border-black dark:border-white p-5"><strong>《2.<span data-modal='anno-09'>应收账款</span>的<span data-modal='anno-10'>到账</span>延迟》</strong><br /><br />如果是现金支付，在发生销售的瞬间，事业者可以直接从用户那里收到销售额的全部金额。<br>总是「实时直接的<span data-modal='anno-10'>到账</span>」，甚至不存在应收账款的概念。<br>但是，如果中间有信用卡公司介入就不是这样了。<br>当用户用信用卡支付时，那个销售额首先计入信用卡公司。<br>之后，扣除手续费后剩余的销售额<span data-modal='anno-10'>到账</span>给信用卡使用事业者。而且，要延迟12个月。<br></div><br>为什么自己公司的销售额必须先计入信用卡公司这个「第三方」？<br>为什么销售额的<span data-modal='anno-10'>到账</span>延迟12个月这样的风险需要由信用卡使用事业者方面承担？<br><br>确实，这些缺点是与便利性的权衡。<br>如果被说为了便利性也要同时接受缺点的话，那就这样了。<br><br>然而，<br>有能够从根本上改变这个机制的技术。<br>那就是<span data-modal='anno-06'>区块链</span>。<br><br><span class="hightlight">如果用一句话来表达<span data-modal='anno-06'>区块链</span>能实现的事情，<br>「在互联网上实现直接的电子商务交易」<br></span><br>使用<span data-modal='anno-06'>区块链</span>的互联网上的交流，<br>具有点对点（Peer to Peer：P2P）的特征。<br><br>这里所说的Peer是指直接参与「对价的支付・接收」的主体，<br>即：<br>・接受支付的事业者<br>・进行支付的<span data-modal='anno-12'>终端用户</span><br><br><span data-modal='anno-06'>区块链</span>提供的P2P机制中，<br>可以从Peer（<span data-modal='anno-12'>终端用户</span>）向Peer（事业者）进行，<br>不通过像信用卡公司这样的<span data-modal='anno-13'>中间管理者</span>的直接支付。<br><br><span class="hightlight">通过不经过管理者来保证交易的<span data-modal='anno-14'>透明度</span>和<span data-modal='anno-15'>安全性</span>，<br>手续费也便宜，<br>喜欢使用<span data-modal='anno-06'>区块链</span>支付方法的用户也在增加。<br></span><br>此外，对企业来说，<br>也有能够吸引到此前没有接触过的新用户等好处。<br><br>信用卡支付和移动支付，<br>目前的便利性确实可能比<span data-modal='anno-06'>区块链</span>更优秀。<br><br>但是，那个便利性是建立在您的公司向信用卡公司<br>"上缴"的手续费之上的。<br>尽管世界上有更便利的<span data-modal='anno-06'>区块链</span>这样的机制。<br><br><span class="hightlight">理解了这个与中世纪<span data-modal='anno-16'>农奴制</span>没有区别的机制，但仍然<br>还想继续上缴贡品和保护费吗？<br><br>在被上级剥削的前提下，加上手续费<br>您也要继续无谓地剥削客户吗？<br><br>那里有健全的竞争原理吗？<br>不就是剥削的连锁继续下去吗？<br></span><br>我们很好地理解这一点。<br>所以，我们不能剥削。也不能说谎。<br><br>剥削和谎言不累吗？<br>如果您正在考虑导入健全、安全<br>且便利的支付服务，<br>请立即联系我们。`,
        annotations: [
          {
            modal: "anno-01",
            term: "电子支付手续费",
            definition:
              "使用信用卡或电子货币支付时，向支付代理公司支付的手续费。",
          },
          {
            modal: "anno-02",
            term: "移动支付服务",
            definition:
              "如PayPay和LINE Pay等，使用智能手机应用程序的电子支付服务。",
          },
          {
            modal: "anno-03",
            term: "信用卡支付",
            definition:
              "使用信用卡的支付方式。由信用卡公司暂时垫付款项的机制。",
          },
          {
            modal: "anno-04",
            term: "交易手续费",
            definition: "商品或服务买卖成交时，向中介机构支付的手续费。",
          },
          {
            modal: "anno-05",
            term: "固定手续费",
            definition:
              "不论交易金额多少，都收取固定金额的手续费。月费等是典型例子。",
          },
          {
            modal: "anno-06",
            term: "区块链",
            definition:
              "将交易记录加密并分布式管理的技术。难以篡改且透明度高。",
          },
          {
            modal: "anno-07",
            term: "加密资产（虚拟货币）",
            definition: "使用区块链技术的数字货币。比特币是典型代表。",
          },
          {
            modal: "anno-08",
            term: "NFT",
            definition: "在区块链上发行的，证明数字资产所有权的机制。",
          },
          {
            modal: "anno-09",
            term: "应收账款",
            definition:
              "已销售商品但尚未收到款项的债权。销售收入的未回收部分。",
          },
          {
            modal: "anno-10",
            term: "到账",
            definition: "款项汇入银行账户。销售收入实际到手。",
          },
          {
            modal: "anno-11",
            term: "点对点（P2P）",
            definition: "不通过中央管理者，用户之间直接交互的通信方式。",
          },
          {
            modal: "anno-12",
            term: "终端用户",
            definition: "最终使用商品或服务的消费者。最终使用者。",
          },
          {
            modal: "anno-13",
            term: "中间管理者",
            definition: "进行交易中介的机构。如信用卡公司或支付代理公司等。",
          },
          {
            modal: "anno-14",
            term: "透明度",
            definition:
              "交易内容或处理过程公开，任何人都可以确认的状态。防止不正行为的机制。",
          },
          {
            modal: "anno-15",
            term: "安全性",
            definition: "保护信息或系统免受非法访问或攻击的安全措施。",
          },
          {
            modal: "anno-16",
            term: "农奴制",
            definition:
              "中世纪欧洲的制度，农民被强制向领主提供劳动或贡物的社会体系。",
          },
        ],
      },
    },
  },
  {
    id: "02",
    link: "/blockchain/02",
    translations: {
      ja: {
        title:
          "ビットコインに価値がないと言うのなら、人類は皆まともに歩けないと言っているようなものにすぎない",
        category: "",
        content: `「赤ちゃんはよちよち歩きで不安定だから、将来はちゃんと歩けないだろう」<br>こんなことを言う人はいないでしょう。<br><br>「<span data-modal='anno-01'>ビットコイン</span>は送金速度が遅いし不安定な通貨だから、将来も実務的に使えないだろう」<br>こんなことを言う人は山ほどいます。<br><br><span class="hightlight">いまだ、<span data-modal='anno-01'>ビットコイン</span>に対して懐疑的に見る人が今なお一定数いるようですが、<br>非常に愚かです。<br></span><br><span data-modal='anno-01'>ビットコイン</span>の送金や決済には、たしかに時間がかかります。<br><br>自動販売機での支払いに<span data-modal='anno-01'>ビットコイン</span>を使った結果、<br>ジュースが出てくるまでに10分かかるとしたら、悠長に待つバカはさすがにいないでしょう。<br><br>現時点において、「利便性」を最優先に考えるなら、<span data-modal='anno-01'>ビットコイン</span>は間違いなく不便。<br>しかし、このことを理由に「<span data-modal='anno-01'>ビットコイン</span>は無価値(無意味)だ」と非難するのだとしたら、<br>それもまたバカと言っていいでしょう。<br><br>まったくもって<span data-modal='anno-01'>ビットコイン</span>の本質を捉えていない、極めて的はずれな主張です。<br><br><span data-modal='anno-01'>ビットコイン</span>不要論者たちの主張はこうです。<br><ul class="list-disc list-inside pl-6"><li><span data-modal='anno-01'>ビットコイン</span>は遅い(実務に使えない)</li><li><span data-modal='anno-01'>ビットコイン</span>は<span data-modal='anno-02'>ボラティリティ</span>が大きい(取引通貨として不安定過ぎる)</li><li><span data-modal='anno-01'>ビットコイン</span>には裏付け資産がない(そんなものをどうやって信用しろと!?)</li></ul><br>言いたいことはわかります。<br>しかし、これらの主張はいずれも<span data-modal='anno-01'>ビットコイン</span>の本質に迫るものではありません。<br><br><span class="hightlight">では、<span data-modal='anno-01'>ビットコイン</span>の本質とは何か。<br><br>資産としては「価値の保存」<br>決済手段としては「確実性」<br><br>この2点が高度なレベルで実現していることにあります。<br><br></span>いずれもわかりにくい概念であるため、かみ砕いて説明しましょう。<br><br><span data-modal='anno-01'>ビットコイン</span>は、その希少性や安全性から「<span data-modal='anno-03'>デジタルゴールド</span>」と呼ばれています。<br>実物の金(ゴールド)、例えば金塊や金の延べ棒をイメージしてみてください。<br><br>金塊や金の延べ棒は、果たして日常の買い物に使えるでしょうか?<br>企業間の取引に使うことがあるでしょうか?<br><br>現代を生きる私たちは、金の塊で決済を行うことはありません。<br><br>私たちが金を保有する理由は<br>自身の資産を「安定した状態」で保管することにあります。<br><br>つまり「保管」や「保存」こそが金のメジャーな使い道であり、これは<span data-modal='anno-01'>ビットコイン</span>も同様。<br><br>すなわち、<br><span class="hightlight"><span data-modal='anno-01'>ビットコイン</span>の本質は、<br>「価値を安定的に保存できるデジタル資産」<br>という点にあります。<br></span><br>ところが、世界には<span data-modal='anno-01'>ビットコイン</span>を決済に用いている国や地域が日々増えています。<br><span data-modal='anno-01'>ビットコイン</span>の本質が「価値の保存」にあるとすれば、<br>これを決済手段として用いるのは筋が悪いように見えるかもしれません。<br>しかし、ここで論点になるのが<span data-modal='anno-01'>ビットコイン</span>の本質の2つめ、<br>決済における「確実性」の問題です。<br><br>そもそも、日本人の多くが<span data-modal='anno-01'>ビットコイン</span>の本質を理解できないのは、<br>日本の<span data-modal='anno-04'>法定通貨</span>である円が"ある程度の信用力"をいまだ保持しているからです。<br><br>私たちは<br>「円で決済ができない」<br>「円で日常の買い物ができない」<br>などということは、夢にも思わないでしょう。<br><br>ゆえに、ほとんどの日本人が<br>「<span data-modal='anno-01'>ビットコイン</span>など私たちには必要ない」<br>という発想に行きつくのも、無理のないことなのかもしれません。<br><br>一方、世界にはまったく事情が異なる国があります。<br>たとえば、トルコの通貨「リラ」は、<br>過去10年で「1リラ=約50円」から「1リラ=5円未満」に急落しています。<br><br>これはトルコ人にとって、自国通貨の価値が10分の1以下に弱まったことを意味します。<br>アルゼンチンの「ペソ」に至っては、10年前の「1ペソ=約12円」から「1ペソ=0.2円未満」になっており、<br>通貨の価値はもはや100分の1。<br><br>現在のアルゼンチンは想像を絶する<span data-modal='anno-05'>インフレ</span>に見舞われています。<br><br>このように、<br>自国通貨の価値が不安定化し、<br>決済に「確実に」使える保証がなくなってしまった国は何を求めるようになったか。<br><br><span data-modal='anno-01'>ビットコイン</span>です。<br><span class="hightlight"><span data-modal='anno-01'>ビットコイン</span>は、決済手段として「確実に」機能します。<br>特定の国の政府(通貨発行体)に依存することなく、価値を保つことができます。<br>ゆえに、世界中どこでも通貨として利用できる「確実性」が、<span data-modal='anno-01'>ビットコイン</span>にはあります。<br></span><br>このように「価値の保存」と「決済における確実性」を実現できる<span data-modal='anno-01'>ビットコイン</span>にとって、<br><ul class="list-decimal list-inside pl-6"><li><span data-modal='anno-01'>ビットコイン</span>は遅い</li><li><span data-modal='anno-01'>ビットコイン</span>は<span data-modal='anno-02'>ボラティリティ</span>が大きい</li><li><span data-modal='anno-01'>ビットコイン</span>には裏付け資産がない</li></ul><br>このような批判は、本質を外した主張に過ぎないのです。<br><br>さらに補足をすると、<br>上記の批判は<span data-modal='anno-01'>ビットコイン</span>の弱みどころか、<br>むしろ強みを強調する論点にさえなります。<br><br>実際は、次の3つが真実です。<br><ul class="list-decimal list-inside pl-6"><li><span data-modal='anno-01'>ビットコイン</span>は速い</li><li><span data-modal='anno-01'>ビットコイン</span>の<span data-modal='anno-02'>ボラティリティ</span>は小さい</li><li><span data-modal='anno-01'>ビットコイン</span>の価値を裏付けられる資産がそもそも存在しない</li></ul><br>これが、<span data-modal='anno-01'>ビットコイン</span>の真実です。<br><br><div class="border border-black dark:border-white p-5"><strong>《1.<span data-modal='anno-01'>ビットコイン</span>は速い》</strong><br />「<span data-modal='anno-01'>ビットコイン</span>が遅い」という批判は、「あなたが持つ日本円を今すぐベトナムの銀行に送金できるのか」という問いで論破できます。<br />日本国内の取引に限れば、既存の金融システムの方がたしかにスピーディかもしれません。<br />しかし、<span data-modal='anno-14'>国際送金</span>となれば話はまったく違ってきます。<br />日本円を現地通貨に<span data-modal='anno-15'>両替</span>し、2つの国をまたいで送金するには数日かかる場合もあります。<br />一方、<span data-modal='anno-01'>ビットコイン</span>は、世界中どこの国へ送ろうとも、誰が送ろうとも、おおむね数十分で<span data-modal='anno-16'>着金</span>します。どちらが「速い」のかは明らかです。</div><br /><div class="border border-black dark:border-white p-5"><strong>《2.<span data-modal='anno-01'>ビットコイン</span>の<span data-modal='anno-02'>ボラティリティ</span>は小さい》</strong><br />「<span data-modal='anno-01'>ビットコイン</span>は<span data-modal='anno-02'>ボラティリティ</span>が大きい」という説も、誕生からわずか10数年しか経っていない<span data-modal='anno-01'>ビットコイン</span>の歴史を踏まえれば、浅はかな考えです。<br /><span data-modal='anno-01'>ビットコイン</span>は2024年1月にようやく米国で<span data-modal='anno-07'>ETF</span>が承認されたばかり。<br />つまり、まだまだ適正な評価がされていないのです。<br />今後、<span data-modal='anno-01'>ビットコイン</span>の価値がより認められるようになれば価格はさらに安定します。<br />そもそも、他の暗号資産に比べればすでに<span data-modal='anno-02'>ボラティリティ</span>は圧倒的に小さいとさえ言えます。<br />最後に「裏付け資産がない」との批判については、そもそも<span data-modal='anno-01'>ビットコイン</span>の価値を裏付けられる資産がないんです。</div><br /><div class="border border-black dark:border-white p-5"><strong>《3.<span data-modal='anno-01'>ビットコイン</span>の価値を裏付けられる資産がそもそも存在しない》</strong><br />「<span data-modal='anno-01'>ビットコイン</span>の価値の裏付け」という役割が、無限に発行可能な「円」や「ドル」に務まるでしょうか?<br />発行上限がない(=いくらでも価値が下がる可能性がある)通貨で<span data-modal='anno-01'>ビットコイン</span>の価値を裏付けようものなら、逆に<span data-modal='anno-01'>ビットコイン</span>の価値が「下げられて」しまいます。<br /><span data-modal='anno-17'>採掘量</span>が少なく、ゆえに希少性が高いとされるゴールドでさえも、実際は「人類が採掘できる量」が限られているだけであり、「<span data-modal='anno-18'>埋蔵量</span>」自体は人類の想像を遥かに超える量が存在するかもしれません。<br />「存在する量が有限である」ということ自体が、他の資産では裏付けられない<span data-modal='anno-01'>ビットコイン</span>固有の価値なのです。</div><br />これでもなお、<span data-modal='anno-01'>ビットコイン</span>に懐疑的な人に問いたいです。<br /><br />ユーロもドルも下がっているこの時代に、<br />そもそも未来の価値を裏付けのある確かな通貨はあるのでしょうか?<br /><br />投資商品としての批判をする人もいますが、<br />株式投資は安全で暗号資産は危険という考えもよくわかりません。<br /><br />2024年3月時点の<span data-modal='anno-08'>時価総額</span>は次のようになっています。<br />世界の株式市場:約111兆ドル<br />ゴールド(金):約14兆ドル<br />暗号資産全体:約2.8兆ドル<br />出典:<a href='https://toyokeizai.net/articles/-/742954?display=b' class="underline" target='_blank' rel='noopener noreferrer'>東洋経済|株価、金、<span data-modal='anno-01'>ビットコイン</span>が驚くほど高騰する事情</a> <br> <br>また、金相場の歴史を辿ってみると50年ほど前は<br>現在の暗号資産と同等の<span data-modal='anno-08'>時価総額</span>だったと考えられます(<a href='https://kinkaimasu.jp/gold/column/50_years_of_gold_market_history/' class="underline" target='_blank' rel='noopener noreferrer'>リファスタ|金相場の50年史</a>より)。<br><br>さらに100年前まで辿れば、<br>そもそもの株式市場は金よりも<span data-modal='anno-08'>時価総額</span>は低いものでした。<br><br>暗号資産同様物理的に存在しない株式は<br>たった1世紀でものすごい価値に膨れ上がっています。<br><br>これらを考えてみても、<br><span class="hightlight">暗号資産に信用がないとはもはや言い切れないでしょう。</span><br><br>もう少し私の持論をお伝えすると、<br><span data-modal='anno-01'>ビットコイン</span>はもはや暗号資産ですらないと思っています。<br>価格が「上がった・下がった」と常に気にかけるような投資対象でもありません<br><br><span class="hightlight"><span data-modal='anno-01'>ビットコイン</span>はすでに、<br>実物のゴールドと同等です。<br></span><br>つまり、<br><span data-modal='anno-10'>分散暗号化</span>によって<span data-modal='anno-11'>有限性</span>と<span data-modal='anno-12'>検証性</span>、<span data-modal='anno-13'>匿名性</span>が確保されています。<br><span data-modal='anno-01'>ビットコイン</span>の価格が下がっている（もしくは上がっている）のではなく、<br>"他の通貨"が<span data-modal='anno-01'>ビットコイン</span>に対して上下しているのです。<br><br>そう考えると、実は<span data-modal='anno-01'>ビットコイン</span>の裏付け資産は「世界中の紙幣」だとも言えます。<br><br>どこかの国が紙幣を刷れば刷るほど、<br>相対的に<span data-modal='anno-01'>ビットコイン</span>に対する紙幣の価値は下落します。<br><span class="hightlight">通貨のシェアに着目した場合も、</span><br><span class="hightlight">ビットコインの優位性は揺るぎません。</span><br><br>「世界中で<span data-modal='anno-01'>ビットコイン</span>（暗号資産）が使われるようになるのはいつですか？」<br><br>この問いに対する回答は、<br>「もうすでに使われています」<br><br>そして、逆に私はこう尋ねたい。<br>「では、<span data-modal='anno-09'>基軸通貨</span>とされるドルが世界中で使われるのはいつですか？（実際は"世界中"で利用するのは不可能）」<br><br>つまり、<span data-modal='anno-01'>ビットコイン</span>が利用できる国の数はすでにドルよりも多く、<br>今後は「<span data-modal='anno-01'>ビットコイン</span>はいつ世界中で使われるようになるのか？」ではなく、<br><span class="hightlight">「<span data-modal='anno-01'>ビットコイン</span>が世界の<span data-modal='anno-19'>通貨シェア</span>を取るのはいつか？」<br>という論点に移り変わっていくべきだと考えています。<br></span><br>そして、ここからが重要なポイントです。<br><br>世の<span data-modal='anno-01'>ビットコイン</span>不要論者は、<br><span data-modal='anno-01'>ビットコイン</span>の「表面的な不便さ」だけを理由に<br><span data-modal='anno-01'>ビットコイン</span>の存在価値（および、暗号資産の存在価値）を不当に下げようとします。<br><br>「<span data-modal='anno-01'>ビットコイン</span>なんて役に立たないよ！<br>そんなものより、もっと速くて便利なサービスを作ったから、<br>ぜひこれを使ってうちにお金を支払ってよ！」<br><br>と言い、自社の商品やサービスを売り込もうとします。<br>それは、自分たちだけに都合のよい<span data-modal='anno-20'>詭弁</span>です。<br>ごまかしの理論に過ぎません。<br><br>すでに述べた通り、米国では<span data-modal='anno-01'>ビットコイン</span><span data-modal='anno-07'>ETF</span>が承認されています。<br><br>エルサルバドルや中央アフリカ共和国は、<br>自国の<span data-modal='anno-04'>法定通貨</span>として<span data-modal='anno-01'>ビットコイン</span>を採用しています。<br><br>通貨としての<span data-modal='anno-01'>ビットコイン</span>の価値は、<br>不要論者の主張に反して確実に高まっているのです。<br><br><span class="hightlight">私は、<span data-modal='anno-01'>ビットコイン</span>を含め、<br>それぞれの暗号資産の「本質的な価値」を正しく理解しています。<br></span><br><span data-modal='anno-01'>ビットコイン</span>、暗号資産、伝統的な金融、そして、これらを活用した事業作り。<br><br>そのすべてを熟知しているからこそ、<br>あなたのビジネスに最適な暗号資産を選択し、<br>それをベースとしたサービスを生み出すことができます。<br><br>ここまで記事を読んで暗号資産の本質的な価値が理解できた方は、<br>暗号資産のビジネス活用について今すぐ我々に連絡をください。`,
        annotations: [
          {
            modal: "anno-01",
            term: "ビットコイン",
            definition:
              "世界初の暗号資産。中央管理者なしで取引できるデジタル通貨。送金や決済に利用可能。",
          },
          {
            modal: "anno-02",
            term: "ボラティリティ",
            definition:
              "価格の変動の激しさを表す指標。値動きが大きいほどボラティリティが高い。",
          },
          {
            modal: "anno-03",
            term: "デジタルゴールド",
            definition:
              "ビットコインの別名。金のように希少性があり価値を保存できるデジタル資産という意味。",
          },
          {
            modal: "anno-04",
            term: "法定通貨",
            definition:
              "国が発行し法的に通貨として認めたお金。日本円や米ドルなどが代表例。",
          },
          {
            modal: "anno-05",
            term: "インフレ",
            definition:
              "物価が継続的に上昇し、通貨の価値が相対的に下落する経済現象。",
          },
          {
            modal: "anno-06",
            term: "暗号資産（仮想通貨）",
            definition:
              "ブロックチェーン技術を使ったデジタル通貨の総称。ビットコインが代表例。",
          },
          {
            modal: "anno-07",
            term: "ETF",
            definition:
              "証券取引所で売買できる投資信託。様々な資産に分散投資できる金融商品。",
          },
          {
            modal: "anno-08",
            term: "時価総額",
            definition:
              "企業や資産の市場での総価値。株価×発行株数、または通貨価格×発行量で算出。",
          },
          {
            modal: "anno-09",
            term: "基軸通貨",
            definition:
              "国際取引で中心的に使われる通貨。現在は米ドルが世界の基軸通貨。",
          },
          {
            modal: "anno-10",
            term: "分散暗号化",
            definition:
              "データを複数の場所に分けて暗号化し保存する技術。安全性と透明性を高める。",
          },
          {
            modal: "anno-11",
            term: "有限性",
            definition:
              "発行量に上限があること。ビットコインは2100万枚が発行上限に設定されている。",
          },
          {
            modal: "anno-12",
            term: "検証性",
            definition:
              "取引の正当性を第三者が確認できること。ブロックチェーンの重要な特徴の一つ。",
          },
          {
            modal: "anno-13",
            term: "匿名性",
            definition:
              "個人の身元を特定されずに取引できる性質。プライバシー保護の機能。",
          },
          {
            modal: "anno-14",
            term: "国際送金",
            definition:
              "国境を越えてお金を送ること。従来は銀行を通じて数日かかることが多い。",
          },
          {
            modal: "anno-15",
            term: "両替",
            definition:
              "ある通貨を別の通貨に交換すること。海外旅行時によく利用される。",
          },
          {
            modal: "anno-16",
            term: "着金",
            definition:
              "送金されたお金が受取人の口座に到着すること。入金完了の状態。",
          },
          {
            modal: "anno-17",
            term: "採掘量",
            definition:
              "実際に地中から掘り出された資源の量。金や石油などの産出実績を表す。",
          },
          {
            modal: "anno-18",
            term: "埋蔵量",
            definition:
              "地中に存在すると推定される資源の総量。まだ採掘されていない部分も含む。",
          },
          {
            modal: "anno-19",
            term: "通貨シェア",
            definition:
              "世界の通貨取引における各通貨の占有率。市場での影響力を示す指標。",
          },
          {
            modal: "anno-20",
            term: "詭弁",
            definition:
              "一見正しそうに見えるが実際は論理的でない議論。人を騙すための理屈。",
          },
        ],
      },
      en: {
        title:
          "Saying Bitcoin Has No Value Is Like Saying Humans Can't Walk Properly",
        category: "",
        content: `"A baby walks unsteadily, so they probably won't be able to walk properly in the future."<br>No one would say such a thing.<br><br>"<span data-modal='anno-01'>Bitcoin</span> has slow transaction speeds and is an unstable currency, so it probably won't be practically usable in the future."<br>There are countless people who say this.<br><br><span class="hightlight">Even now, there are still a certain number of people who view <span data-modal='anno-01'>Bitcoin</span> skeptically,<br>which is extremely foolish.<br></span><br><span data-modal='anno-01'>Bitcoin</span> transactions and payments do indeed take time.<br><br>If you used <span data-modal='anno-01'>Bitcoin</span> to pay at a vending machine,<br>and it took 10 minutes for the juice to come out, surely no one would be foolish enough to wait patiently.<br><br>At present, if we prioritize "convenience" above all else, <span data-modal='anno-01'>Bitcoin</span> is undoubtedly inconvenient.<br>However, if you criticize <span data-modal='anno-01'>Bitcoin</span> as "worthless (meaningless)" for this reason,<br>that would also be foolish.<br><br>This is an extremely misguided argument that completely fails to grasp the essence of <span data-modal='anno-01'>Bitcoin</span>.<br><br><span data-modal='anno-01'>Bitcoin</span> opponents argue as follows:<br><ul class="list-disc list-inside pl-6"><li><span data-modal='anno-01'>Bitcoin</span> is slow (not practical for real use)</li><li><span data-modal='anno-01'>Bitcoin</span> has high <span data-modal='anno-02'>volatility</span> (too unstable as a trading currency)</li><li><span data-modal='anno-01'>Bitcoin</span> has no backing assets (how can we trust such a thing!?)</li></ul><br>I understand what they're trying to say.<br>However, none of these arguments get to the essence of <span data-modal='anno-01'>Bitcoin</span>.<br><br><span class="hightlight">So what is the essence of <span data-modal='anno-01'>Bitcoin</span>?<br><br>As an asset: "store of value"<br>As a payment method: "certainty"<br><br>These two points are realized at a high level.<br><br></span>Both are difficult concepts to understand, so let me explain them in simpler terms.<br><br><span data-modal='anno-01'>Bitcoin</span> is called "<span data-modal='anno-03'>digital gold</span>" due to its scarcity and security.<br>Think of physical gold, such as gold bars or gold ingots.<br><br>Can gold bars or gold ingots be used for daily shopping?<br>Are they used in business transactions?<br><br>We who live in modern times do not make payments with chunks of gold.<br><br>The reason we hold gold is<br>to store our assets in a "stable state."<br><br>In other words, "storage" and "preservation" are the major uses of gold, and the same applies to <span data-modal='anno-01'>Bitcoin</span>.<br><br>That is,<br><span class="hightlight">the essence of <span data-modal='anno-01'>Bitcoin</span> lies in<br>being a "digital asset that can stably store value."<br></span><br>However, there are countries and regions around the world that are increasingly using <span data-modal='anno-01'>Bitcoin</span> for payments.<br><span data-modal='anno-01'>Bitcoin</span>'s essence is "store of value,"<br>so using it as a payment method might seem counterproductive.<br>However, here comes the second essence of <span data-modal='anno-01'>Bitcoin</span>:<br>the issue of "certainty" in payments.<br><br>The reason most Japanese people cannot understand the essence of <span data-modal='anno-01'>Bitcoin</span> is<br>because the Japanese <span data-modal='anno-04'>fiat currency</span>, the yen, still maintains "a certain level of credibility."<br><br>We would never dream of<br>"not being able to pay with yen"<br>or "not being able to do daily shopping with yen."<br><br>Therefore, it's perhaps understandable that most Japanese people<br>arrive at the idea that<br>"we don't need <span data-modal='anno-01'>Bitcoin</span>."<br><br>On the other hand, there are countries with completely different circumstances.<br>For example, Turkey's currency "Lira" has<br>plummeted from "1 Lira = about 50 yen" to "1 Lira = less than 5 yen" over the past 10 years.<br><br>This means that for Turkish people, their national currency's value has weakened to less than one-tenth.<br>Argentina's "Peso" has gone from "1 Peso = about 12 yen" ten years ago to "1 Peso = less than 0.2 yen,"<br>with the currency's value now at one-hundredth.<br><br>Current Argentina is suffering from unimaginable <span data-modal='anno-05'>inflation</span>.<br><br>What do countries seek when<br>their national currency's value becomes unstable<br>and there's no guarantee that it can be used "reliably" for payments?<br><br><span data-modal='anno-01'>Bitcoin</span>.<br><span class="hightlight"><span data-modal='anno-01'>Bitcoin</span> functions "reliably" as a payment method.<br>It can maintain value without depending on any specific country's government (currency issuer).<br>Therefore, <span data-modal='anno-01'>Bitcoin</span> has the "certainty" of being usable as currency anywhere in the world.<br></span><br>For <span data-modal='anno-01'>Bitcoin</span>, which can achieve both "store of value" and "certainty in payments,"<br><ul class="list-decimal list-inside pl-6"><li><span data-modal='anno-01'>Bitcoin</span> is slow</li><li><span data-modal='anno-01'>Bitcoin</span> has high <span data-modal='anno-02'>volatility</span></li><li><span data-modal='anno-01'>Bitcoin</span> has no backing assets</li></ul><br>Such criticisms are merely arguments that miss the essence.<br><br>Furthermore, to add,<br>the above criticisms are not even <span data-modal='anno-01'>Bitcoin</span>'s weaknesses,<br>but rather points that emphasize its strengths.<br><br>In reality, the following three points are true:<br><ul class="list-decimal list-inside pl-6"><li><span data-modal='anno-01'>Bitcoin</span> is fast</li><li><span data-modal='anno-01'>Bitcoin</span>'s <span data-modal='anno-02'>volatility</span> is small</li><li>There is no asset that can back <span data-modal='anno-01'>Bitcoin</span>'s value in the first place</li></ul><br>This is the truth about <span data-modal='anno-01'>Bitcoin</span>.<br><br><div class="border border-black dark:border-white p-5"><strong>《1. <span data-modal='anno-01'>Bitcoin</span> is fast》</strong><br />The criticism that "<span data-modal='anno-01'>Bitcoin</span> is slow" can be refuted with the question "Can you send your Japanese yen to a Vietnamese bank right now?"<br />For domestic transactions in Japan, existing financial systems might indeed be speedier.<br />However, when it comes to <span data-modal='anno-14'>international remittances</span>, the story is completely different.<br />Converting Japanese yen to local currency and sending money across two countries can take several days.<br />On the other hand, <span data-modal='anno-01'>Bitcoin</span> <span data-modal='anno-16'>arrives</span> in roughly tens of minutes, regardless of which country you're sending to or who is sending it. It's clear which is "faster."</div><br /><div class="border border-black dark:border-white p-5"><strong>《2. <span data-modal='anno-01'>Bitcoin</span>'s <span data-modal='anno-02'>volatility</span> is small》</strong><br />The theory that "<span data-modal='anno-01'>Bitcoin</span> has high <span data-modal='anno-02'>volatility</span>" is shallow thinking considering <span data-modal='anno-01'>Bitcoin</span>'s history of barely over 10 years since its birth.<br /><span data-modal='anno-01'>Bitcoin</span> <span data-modal='anno-07'>ETF</span> was only approved in the US in January 2024.<br />In other words, it hasn't been properly evaluated yet.<br />In the future, as <span data-modal='anno-01'>Bitcoin</span>'s value becomes more recognized, its price will become even more stable.<br />In the first place, compared to other cryptocurrencies, its <span data-modal='anno-02'>volatility</span> can already be said to be overwhelmingly small.<br />Regarding the criticism of "no backing assets," there simply is no asset that can back <span data-modal='anno-01'>Bitcoin</span>'s value.</div><br /><div class="border border-black dark:border-white p-5"><strong>《3. There is no asset that can back <span data-modal='anno-01'>Bitcoin</span>'s value in the first place》</strong><br />Could "yen" or "dollars," which can be issued infinitely, serve the role of "backing <span data-modal='anno-01'>Bitcoin</span>'s value"?<br />If we tried to back <span data-modal='anno-01'>Bitcoin</span>'s value with currencies that have no issuance limit (= could decrease in value indefinitely), <span data-modal='anno-01'>Bitcoin</span>'s value would conversely be "lowered."<br /><span data-modal='anno-17'>Mining output</span> is low and therefore considered highly scarce, but even gold is actually limited only in terms of "the amount humanity can mine," and the actual "<span data-modal='anno-18'>reserves</span>" might exist in quantities far beyond human imagination.<br />The fact that "the existing quantity is finite" is <span data-modal='anno-01'>Bitcoin</span>'s unique value that cannot be backed by other assets.</div><br />Even so, I want to ask those who are still skeptical of <span data-modal='anno-01'>Bitcoin</span>.<br /><br />In this era when both the Euro and Dollar are declining,<br />is there any reliable currency with backing that can guarantee future value?<br /><br />Some people criticize it as an investment product,<br />but I don't understand the thinking that stock investment is safe while cryptocurrency is dangerous.<br /><br />The <span data-modal='anno-08'>market capitalization</span> as of March 2024 is as follows:<br />Global stock market: approximately $111 trillion<br />Gold: approximately $14 trillion<br />Total cryptocurrency: approximately $2.8 trillion<br />Source: <a href='https://toyokeizai.net/articles/-/742954?display=b' class="underline" target='_blank' rel='noopener noreferrer'>Toyo Keizai | The Surprising Surge in Stock Prices, Gold, and <span data-modal='anno-01'>Bitcoin</span></a> <br> <br>Also, tracing the history of gold prices, about 50 years ago<br>it's thought to have had a <span data-modal='anno-08'>market capitalization</span> equivalent to current cryptocurrency (<a href='https://kinkaimasu.jp/gold/column/50_years_of_gold_market_history/' class="underline" target='_blank' rel='noopener noreferrer'>Refasta | 50-Year History of Gold Market</a>).<br><br>Going back 100 years,<br>the stock market itself had a lower <span data-modal='anno-08'>market capitalization</span> than gold.<br><br>Stocks, which like cryptocurrency don't physically exist,<br>have grown to tremendous value in just one century.<br><br>Considering all this,<br><span class="hightlight">we can no longer definitively say that cryptocurrency lacks credibility.</span><br><br>To share a bit more of my personal theory,<br><span data-modal='anno-01'>Bitcoin</span> is no longer even a cryptocurrency.<br>It's not an investment target where you constantly worry about prices "going up or down"<br><br><span class="hightlight"><span data-modal='anno-01'>Bitcoin</span> is already<br>equivalent to physical gold.<br></span><br>That is,<br>through <span data-modal='anno-10'>distributed encryption</span>, <span data-modal='anno-11'>finiteness</span>, <span data-modal='anno-12'>verifiability</span>, and <span data-modal='anno-13'>anonymity</span> are secured.<br><span data-modal='anno-01'>Bitcoin</span>'s price isn't falling (or rising),<br>rather "other currencies" are fluctuating up and down against <span data-modal='anno-01'>Bitcoin</span>.<br><br>Thinking this way, <span data-modal='anno-01'>Bitcoin</span>'s backing asset could actually be said to be "paper money from around the world."<br><br>The more any country prints paper money,<br>the more that paper money's value relatively declines against <span data-modal='anno-01'>Bitcoin</span>.<br><span class="hightlight">Even focusing on currency share,</span><br><span class="hightlight">Bitcoin's dominance is unshakeable.</span><br><br>"When will <span data-modal='anno-01'>Bitcoin</span> (cryptocurrency) be used worldwide?"<br><br>The answer to this question is:<br>"It's already being used."<br><br>And conversely, I want to ask:<br>"When will the dollar, considered the <span data-modal='anno-09'>reserve currency</span>, be used worldwide? (In reality, it's impossible to use it 'worldwide')"<br><br>In other words, the number of countries where <span data-modal='anno-01'>Bitcoin</span> can be used is already greater than the dollar,<br>and from now on, instead of "When will <span data-modal='anno-01'>Bitcoin</span> be used worldwide?"<br><span class="hightlight">we should shift to the question "When will <span data-modal='anno-01'>Bitcoin</span> capture the world's <span data-modal='anno-19'>currency share</span>?"<br></span><br>And here's the important point.<br><br><span data-modal='anno-01'>Bitcoin</span> opponents in the world<br>try to unfairly diminish the value of <span data-modal='anno-01'>Bitcoin</span> (and cryptocurrency in general)<br>based solely on <span data-modal='anno-01'>Bitcoin</span>'s "superficial inconvenience."<br><br>"<span data-modal='anno-01'>Bitcoin</span> is useless!<br>Instead of that, we've created a faster and more convenient service,<br>so please use this and pay us money!"<br><br>They try to promote their own products and services.<br>That's <span data-modal='anno-20'>sophistry</span> that's only convenient for themselves.<br>It's nothing but deceptive reasoning.<br><br>As already mentioned, <span data-modal='anno-01'>Bitcoin</span> <span data-modal='anno-07'>ETF</span> has been approved in the United States.<br><br>El Salvador and the Central African Republic have<br>adopted <span data-modal='anno-01'>Bitcoin</span> as their national <span data-modal='anno-04'>fiat currency</span>.<br><br><span data-modal='anno-01'>Bitcoin</span>'s value as a currency<br>is definitely increasing, contrary to what opponents claim.<br><br><span class="hightlight">I correctly understand<br>the "essential value" of each cryptocurrency, including <span data-modal='anno-01'>Bitcoin</span>.<br></span><br><span data-modal='anno-01'>Bitcoin</span>, cryptocurrency, traditional finance, and business creation using these.<br><br>Because I'm thoroughly familiar with all of these,<br>I can select the optimal cryptocurrency for your business<br>and create services based on it.<br><br>If you've read this far and understand the essential value of cryptocurrency,<br>please contact us immediately about business applications of cryptocurrency.`,
        annotations: [
          {
            modal: "anno-01",
            term: "Bitcoin",
            definition:
              "The world's first cryptocurrency. A digital currency that can be traded without a central administrator. Used for remittances and payments.",
          },
          {
            modal: "anno-02",
            term: "Volatility",
            definition:
              "An indicator of the intensity of price fluctuations. The greater the price movement, the higher the volatility.",
          },
          {
            modal: "anno-03",
            term: "Digital Gold",
            definition:
              "Another name for Bitcoin. Refers to a digital asset that has scarcity like gold and can store value.",
          },
          {
            modal: "anno-04",
            term: "Fiat Currency",
            definition:
              "Money issued by a country and legally recognized as currency. Japanese yen and US dollar are representative examples.",
          },
          {
            modal: "anno-05",
            term: "Inflation",
            definition:
              "An economic phenomenon where prices rise continuously and the value of currency relatively declines.",
          },
          {
            modal: "anno-06",
            term: "Cryptocurrency (Virtual Currency)",
            definition:
              "General term for digital currencies using blockchain technology. Bitcoin is a representative example.",
          },
          {
            modal: "anno-07",
            term: "ETF",
            definition:
              "Investment fund that can be bought and sold on stock exchanges. A financial product that allows diversified investment in various assets.",
          },
          {
            modal: "anno-08",
            term: "Market Capitalization",
            definition:
              "The total market value of a company or asset. Calculated by stock price × number of shares issued, or currency price × supply.",
          },
          {
            modal: "anno-09",
            term: "Reserve Currency",
            definition:
              "A currency that is centrally used in international transactions. Currently, the US dollar is the world's reserve currency.",
          },
          {
            modal: "anno-10",
            term: "Distributed Encryption",
            definition:
              "Technology that encrypts and stores data distributed across multiple locations. Enhances security and transparency.",
          },
          {
            modal: "anno-11",
            term: "Scarcity",
            definition:
              "Having a limit on the amount issued. Bitcoin has a set issuance limit of 21 million coins.",
          },
          {
            modal: "anno-12",
            term: "Verifiability",
            definition:
              "The ability for third parties to verify the legitimacy of transactions. One of the important features of blockchain.",
          },
          {
            modal: "anno-13",
            term: "Anonymity",
            definition:
              "The property of being able to transact without being identified personally. A privacy protection feature.",
          },
          {
            modal: "anno-14",
            term: "International Remittance",
            definition:
              "Sending money across borders. Traditionally takes several days through banks.",
          },
          {
            modal: "anno-15",
            term: "Currency Exchange",
            definition:
              "Converting one currency to another currency. Commonly used when traveling abroad.",
          },
          {
            modal: "anno-16",
            term: "Funds Received",
            definition:
              "The money sent arrives in the recipient's account. The state of completed deposit.",
          },
          {
            modal: "anno-17",
            term: "Mining Output",
            definition:
              "The amount of resources actually extracted from underground. Represents production results of gold, oil, etc.",
          },
          {
            modal: "anno-18",
            term: "Reserves",
            definition:
              "The total amount of resources estimated to exist underground. Includes parts not yet mined.",
          },
          {
            modal: "anno-19",
            term: "Currency Share",
            definition:
              "The market share of each currency in global currency trading. An indicator of market influence.",
          },
          {
            modal: "anno-20",
            term: "Sophistry",
            definition:
              "Arguments that appear correct but are actually illogical. Reasoning used to deceive people.",
          },
        ],
      },
      zh: {
        title: "说比特币没有价值，就像在说人类无法正常行走",
        category: "",
        content: `"婴儿走路摇摇摆摆不稳定，所以将来可能无法好好走路"<br>没有人会说这样的话。<br><br>"<span data-modal='anno-01'>比特币</span>转账速度慢，是不稳定的货币，所以将来也无法实际使用"<br>说这种话的人却有很多。<br><br><span class="hightlight">至今仍有一定数量的人对<span data-modal='anno-01'>比特币</span>持怀疑态度，<br>这是极其愚蠢的。<br></span><br><span data-modal='anno-01'>比特币</span>的转账和支付确实需要时间。<br><br>如果用<span data-modal='anno-01'>比特币</span>在自动售货机付款，<br>结果要等10分钟才能出来饮料，那确实没有人会那么悠闲地等待。<br><br>目前来说，如果最优先考虑"便利性"，<span data-modal='anno-01'>比特币</span>确实不方便。<br>但是，如果因此而批评"<span data-modal='anno-01'>比特币</span>是无价值的（无意义的）"，<br>那也同样是愚蠢的。<br><br>这是完全没有抓住<span data-modal='anno-01'>比特币</span>本质的、极其偏离要点的主张。<br><br><span data-modal='anno-01'>比特币</span>不必要论者的主张如下：<br><ul class="list-disc list-inside pl-6"><li><span data-modal='anno-01'>比特币</span>很慢（实际无法使用）</li><li><span data-modal='anno-01'>比特币</span>的<span data-modal='anno-02'>波动性</span>很大（作为交易货币过于不稳定）</li><li><span data-modal='anno-01'>比特币</span>没有支撑资产（这样的东西怎么能信任！？）</li></ul><br>我理解他们想说什么。<br>但是，这些主张都没有涉及<span data-modal='anno-01'>比特币</span>的本质。<br><br><span class="hightlight">那么，<span data-modal='anno-01'>比特币</span>的本质是什么？<br><br>作为资产：「价值储存」<br>作为支付手段：「确实性」<br><br>这两点在高水平上得到了实现。<br><br></span>两者都是难以理解的概念，让我详细说明一下。<br><br><span data-modal='anno-01'>比特币</span>由于其稀缺性和安全性被称为"<span data-modal='anno-03'>数字黄金</span>"。<br>请想象一下实物黄金，比如金条或金块。<br><br>金条或金块能用于日常购物吗？<br>会用于企业间的交易吗？<br><br>生活在现代的我们，不会用黄金块来进行支付。<br><br>我们持有黄金的理由是<br>为了将自己的资产以"稳定状态"保管。<br><br>也就是说，「保管」和「保存」才是黄金的主要用途，<span data-modal='anno-01'>比特币</span>也是如此。<br><br>即：<br><span class="hightlight"><span data-modal='anno-01'>比特币</span>的本质在于<br>「能够稳定保存价值的数字资产」<br>这一点。<br></span><br>然而，世界上日益增加的国家和地区正在使用<span data-modal='anno-01'>比特币</span>进行支付。<br><span data-modal='anno-01'>比特币</span>的本质是「价值储存」，<br>将其用作支付手段可能看起来适得其反。<br>但是，这里涉及到<span data-modal='anno-01'>比特币</span>本质的第二点：<br>支付中的「确实性」问题。<br><br>大多数日本人无法理解<span data-modal='anno-01'>比特币</span>本质的原因是<br>因为日本的<span data-modal='anno-04'>法定货币</span>日元仍保持着"一定程度的信用力"。<br><br>我们从未想过<br>「无法用日元支付」<br>「无法用日元进行日常购物」<br>等情况。<br><br>因此，大多数日本人<br>得出<br>「我们不需要<span data-modal='anno-01'>比特币</span>」<br>这样的想法也许是无可厚非的。<br><br>另一方面，世界上有完全不同情况的国家。<br>比如，土耳其的货币「里拉」在<br>过去10年中从「1里拉=约50日元」跌至「1里拉=不到5日元」。<br><br>这意味着对土耳其人来说，自国货币的价值减弱到了不到十分之一。<br>阿根廷的「比索」从10年前的「1比索=约12日元」变成了「1比索=不到0.2日元」，<br>货币价值现在是百分之一。<br><br>目前的阿根廷正遭受着难以想象的<span data-modal='anno-05'>通胀</span>。<br><br>这样，<br>当自国货币价值变得不稳定，<br>无法保证能够「确实地」用于支付时，这些国家寻求什么？<br><br><span data-modal='anno-01'>比特币</span>。<br><span class="hightlight"><span data-modal='anno-01'>比特币</span>作为支付手段「确实地」发挥作用。<br>不依赖于特定国家的政府（货币发行机构），能够保持价值。<br>因此，<span data-modal='anno-01'>比特币</span>具有在世界任何地方都能作为货币使用的「确实性」。<br></span><br>对于能够实现「价值储存」和「支付确实性」的<span data-modal='anno-01'>比特币</span>来说，<br><ul class="list-decimal list-inside pl-6"><li><span data-modal='anno-01'>比特币</span>很慢</li><li><span data-modal='anno-01'>比特币</span>的<span data-modal='anno-02'>波动性</span>很大</li><li><span data-modal='anno-01'>比特币</span>没有支撑资产</li></ul><br>这样的批评只是偏离本质的主张。<br><br>进一步补充，<br>上述批评不仅不是<span data-modal='anno-01'>比特币</span>的弱点，<br>反而是强调其优势的论点。<br><br>实际上，以下三点是真实的：<br><ul class="list-decimal list-inside pl-6"><li><span data-modal='anno-01'>比特币</span>很快</li><li><span data-modal='anno-01'>比特币</span>的<span data-modal='anno-02'>波动性</span>很小</li><li>本来就不存在能够支撑<span data-modal='anno-01'>比特币</span>价值的资产</li></ul><br>这就是<span data-modal='anno-01'>比特币</span>的真相。<br><br><div class="border border-black dark:border-white p-5"><strong>《1.<span data-modal='anno-01'>比特币</span>很快》</strong><br />「<span data-modal='anno-01'>比特币</span>很慢」这一批评可以用「你能现在立即将你持有的日元汇到越南的银行吗」这个问题来反驳。<br />限于日本国内交易，现有金融系统确实可能更快。<br />但是，涉及<span data-modal='anno-14'>国际汇款</span>时，情况就完全不同了。<br />将日元<span data-modal='anno-15'>兑换</span>成当地货币，跨越两个国家进行汇款有时需要几天时间。<br />另一方面，<span data-modal='anno-01'>比特币</span>无论汇到世界哪个国家，无论谁汇款，大约几十分钟就能<span data-modal='anno-16'>到账</span>。哪个更「快」是显而易见的。</div><br /><div class="border border-black dark:border-white p-5"><strong>《2.<span data-modal='anno-01'>比特币</span>的<span data-modal='anno-02'>波动性</span>很小》</strong><br />「<span data-modal='anno-01'>比特币</span>的<span data-modal='anno-02'>波动性</span>很大」这一说法，考虑到<span data-modal='anno-01'>比特币</span>诞生仅仅10多年的历史，是浅薄的想法。<br /><span data-modal='anno-01'>比特币</span>在2024年1月才刚刚在美国获得<span data-modal='anno-07'>ETF</span>批准。<br />也就是说，还没有得到适当的评价。<br />今后，随着<span data-modal='anno-01'>比特币</span>的价值被更多认可，价格将更加稳定。<br />首先，与其他加密资产相比，其<span data-modal='anno-02'>波动性</span>已经可以说是压倒性地小了。<br />关于「没有支撑资产」的批评，本来就不存在能够支撑<span data-modal='anno-01'>比特币</span>价值的资产。</div><br /><div class="border border-black dark:border-white p-5"><strong>《3.本来就不存在能够支撑<span data-modal='anno-01'>比特币</span>价值的资产》</strong><br />能够无限发行的「日元」或「美元」能够担任「支撑<span data-modal='anno-01'>比特币</span>价值」的角色吗？<br />如果用没有发行上限的货币（=随时可能价值下跌）来支撑<span data-modal='anno-01'>比特币</span>的价值，反而会让<span data-modal='anno-01'>比特币</span>的价值被「拉低」。<br /><span data-modal='anno-17'>开采量</span>少，因此被认为稀缺性很高的黄金，实际上也只是「人类能够开采的量」有限，「<span data-modal='anno-18'>埋藏量</span>」本身可能存在远超人类想象的数量。<br />「存在量是有限的」这一点本身，是其他资产无法支撑的<span data-modal='anno-01'>比特币</span>固有的价值。</div><br />即使如此，我想问那些仍对<span data-modal='anno-01'>比特币</span>持怀疑态度的人。<br /><br />在欧元和美元都在下跌的这个时代，<br />本来就存在有支撑、能够保证未来价值的可靠货币吗？<br /><br />也有人作为投资商品来批评，<br />但股票投资安全而加密资产危险这种想法我也不理解。<br /><br />2024年3月时点的<span data-modal='anno-08'>市值</span>如下：<br />全球股票市场：约111万亿美元<br />黄金：约14万亿美元<br />加密资产整体：约2.8万亿美元<br />出处：<a href='https://toyokeizai.net/articles/-/742954?display=b' class="underline" target='_blank' rel='noopener noreferrer'>东洋经济|股价、黄金、<span data-modal='anno-01'>比特币</span>惊人上涨的内情</a> <br> <br>另外，追溯黄金价格的历史，大约50年前<br>被认为具有与现在加密资产相当的<span data-modal='anno-08'>市值</span>（<a href='https://kinkaimasu.jp/gold/column/50_years_of_gold_market_history/' class="underline" target='_blank' rel='noopener noreferrer'>Refasta|黄金市场50年史</a>）。<br><br>进一步追溯到100年前，<br>股票市场本身的<span data-modal='anno-08'>市值</span>比黄金还要低。<br><br>与加密资产一样物理上不存在的股票<br>在短短一个世纪内膨胀到了惊人的价值。<br><br>考虑到这些，<br><span class="hightlight">已经不能断言加密资产没有信用了。</span><br><br>再分享一点我的持论，<br><span data-modal='anno-01'>比特币</span>我认为已经不再是加密资产了。<br>也不是总是关心价格「上涨・下跌」的投资对象<br><br><span class="hightlight"><span data-modal='anno-01'>比特币</span>已经<br>与实物黄金等同。<br></span><br>也就是说，<br>通过<span data-modal='anno-10'>分散加密</span>确保了<span data-modal='anno-11'>有限性</span>、<span data-modal='anno-12'>验证性</span>、<span data-modal='anno-13'>匿名性</span>。<br><span data-modal='anno-01'>比特币</span>的价格不是在下跌（或上涨），<br>而是"其他货币"相对于<span data-modal='anno-01'>比特币</span>在上下波动。<br><br>这样想的话，实际上<span data-modal='anno-01'>比特币</span>的支撑资产可以说是「世界各国的纸币」。<br><br>某个国家印刷纸币越多，<br>相对于<span data-modal='anno-01'>比特币</span>，该纸币的价值就越下跌。<br><span class="hightlight">关注货币份额的话，</span><br><span class="hightlight">比特币的优势地位不可动摇。</span><br><br>「世界各地使用<span data-modal='anno-01'>比特币</span>（加密资产）是什么时候？」<br><br>对这个问题的回答是：<br>「已经在使用了」<br><br>而且，反过来我想问：<br>「那么，被视为<span data-modal='anno-09'>基轴货币</span>的美元在全世界使用是什么时候？（实际上在"全世界"使用是不可能的）」<br><br>也就是说，能够使用<span data-modal='anno-01'>比特币</span>的国家数量已经比美元多，<br>今后不应该是「<span data-modal='anno-01'>比特币</span>什么时候在全世界使用？」，<br><span class="hightlight">而应该转向「<span data-modal='anno-01'>比特币</span>什么时候占据世界<span data-modal='anno-19'>货币份额</span>？」<br>这样的论点。<br></span><br>从这里开始是重要的要点。<br><br>世界上的<span data-modal='anno-01'>比特币</span>不必要论者，<br>仅仅以<span data-modal='anno-01'>比特币</span>的「表面不便」为理由<br>试图不当地贬低<span data-modal='anno-01'>比特币</span>的存在价值（以及加密资产的存在价值）。<br><br>「<span data-modal='anno-01'>比特币</span>根本没用！<br>比起那个，我们制作了更快更便利的服务，<br>请使用这个向我们付款！」<br><br>这样说着，试图推销自己公司的商品和服务。<br>那是只对他们自己方便的<span data-modal='anno-20'>诡辩</span>。<br>不过是欺骗性的理论。<br><br>如前所述，美国已经批准了<span data-modal='anno-01'>比特币</span><span data-modal='anno-07'>ETF</span>。<br><br>萨尔瓦多和中非共和国<br>采用<span data-modal='anno-01'>比特币</span>作为自国的<span data-modal='anno-04'>法定货币</span>。<br><br>作为货币的<span data-modal='anno-01'>比特币</span>价值，<br>与不必要论者的主张相反，正在确实提高。<br><br><span class="hightlight">我正确理解<br>包括<span data-modal='anno-01'>比特币</span>在内的各种加密资产的「本质价值」。<br></span><br><span data-modal='anno-01'>比特币</span>、加密资产、传统金融，以及利用这些的事业创造。<br><br>正因为熟知所有这些，<br>才能选择最适合您业务的加密资产，<br>并创造基于此的服务。<br><br>读到这里理解了加密资产本质价值的人，<br>请立即就加密资产的业务活用联系我们。`,
        annotations: [
          {
            modal: "anno-01",
            term: "比特币",
            definition:
              "世界上第一个加密货币。无需中央管理者即可进行交易的数字货币。可用于汇款和支付。",
          },
          {
            modal: "anno-02",
            term: "波动性",
            definition:
              "表示价格变动剧烈程度的指标。价格波动越大，波动性越高。",
          },
          {
            modal: "anno-03",
            term: "数字黄金",
            definition:
              "比特币的别名。指像黄金一样具有稀缺性并能储存价值的数字资产。",
          },
          {
            modal: "anno-04",
            term: "法定货币",
            definition:
              "由国家发行并在法律上承认为货币的钱。日元和美元等是代表例子。",
          },
          {
            modal: "anno-05",
            term: "通胀",
            definition: "物价持续上涨，货币价值相对下降的经济现象。",
          },
          {
            modal: "anno-06",
            term: "加密资产（虚拟货币）",
            definition: "使用区块链技术的数字货币总称。比特币是代表例子。",
          },
          {
            modal: "anno-07",
            term: "ETF",
            definition:
              "可在证券交易所买卖的投资基金。能够分散投资各种资产的金融产品。",
          },
          {
            modal: "anno-08",
            term: "市值",
            definition:
              "企业或资产在市场上的总价值。通过股价×发行股数，或货币价格×发行量计算。",
          },
          {
            modal: "anno-09",
            term: "基准货币",
            definition:
              "在国际交易中作为中心使用的货币。目前美元是世界的基准货币。",
          },
          {
            modal: "anno-10",
            term: "分布式加密",
            definition:
              "将数据分散到多个地方进行加密存储的技术。提高安全性和透明度。",
          },
          {
            modal: "anno-11",
            term: "有限性",
            definition: "发行量有上限。比特币设定了2100万枚的发行上限。",
          },
          {
            modal: "anno-12",
            term: "可验证性",
            definition: "第三方能够确认交易合法性。区块链的重要特征之一。",
          },
          {
            modal: "anno-13",
            term: "匿名性",
            definition:
              "能够在不被识别个人身份的情况下进行交易的性质。隐私保护功能。",
          },
          {
            modal: "anno-14",
            term: "国际汇款",
            definition: "跨国境汇款。传统上通过银行需要数天时间。",
          },
          {
            modal: "anno-15",
            term: "兑换",
            definition: "将一种货币换成另一种货币。海外旅行时经常使用。",
          },
          {
            modal: "anno-16",
            term: "到账",
            definition: "汇款的钱到达收款人账户。入账完成的状态。",
          },
          {
            modal: "anno-17",
            term: "开采量",
            definition:
              "实际从地下开采出的资源量。表示黄金和石油等的产出实绩。",
          },
          {
            modal: "anno-18",
            term: "储量",
            definition: "推测存在于地下的资源总量。包括尚未开采的部分。",
          },
          {
            modal: "anno-19",
            term: "货币份额",
            definition:
              "各货币在世界货币交易中的占有率。显示市场影响力的指标。",
          },
          {
            modal: "anno-20",
            term: "诡辩",
            definition: "看似正确但实际上不符合逻辑的论述。用来欺骗人的理论。",
          },
        ],
      },
    },
  },
];

export const dataWebSite: ArticleType[] = [
  {
    id: "01",
    link: "/website/01",
    translations: {
      ja: {
        title:
          "時代遅れの「ホームページ」論を唱えるデジタル鎖国で犬死を待つ人たちへ",
        category: "",
        content: `<span class="hightlight">Q.100万円を一回払えば24時間文句を言わずに<br>一生働き続ける優秀な営業マンを雇えるとし ます。<br>あなたは雇いますか?<br></span><br><br>Noと答えた方は馬鹿です。<br><br>では、質問を変えます。<br><br><span class="hightlight">Q.あなたは<span data-modal='anno-01'>ホームページ</span>を持っていますか?<br></span><br><span class="hightlight">Noと答えたあなたは大馬鹿です。<br></span><br><span data-modal='anno-02'>SNS</span>があるから十分<br>自前の<span data-modal='anno-01'>ホームページ</span>なんて時代遅れ<br>今は仕事があるから必要性は感じない<br><br>こんな言い分を腐るほど聞いてきました。<br><br>企業の経営者でも、飲食店の店長でも、<br><span data-modal='anno-01'>ホームページ</span>不要論者は増えているようです。<br><br>あなたが利益を1円もあげたくない無欲の聖人であれば、<br>私のブログを読む必要はありません。<br><br>(ですがあなたが利益を1円もあげたくない無欲の聖人であってもしょうが、<br>それでもホーム ページを使うべきです。)<br><br><span class="hightlight">ただ、もし利益を生み出そうとしているのに、<br><span data-modal='anno-01'>ホームページ</span>が不要だと思っているのであれば、<br>今すぐ姿勢を正してこの記事を読むべきです。<br></span><br>たしかに<span data-modal='anno-01'>ホームページ</span>がなくても、<br><span data-modal='anno-03'>口コミサイト</span>に会社やお店の情報を載せておけば、<br>お客さんはネット上からあなたの情報へ<span data-modal='anno-27'>アクセス</span>できるかもしれません。<br><br>飲食店なら<span data-modal='anno-04'>食べログ</span>。<br>美容室なら<span data-modal='anno-05'>ホットペッパービューティー</span>。<br>宿泊予約なら<span data-modal='anno-06'>じゃらん</span>。<br>XやInstagramでうまく<span data-modal='anno-18'>集客</span>をしている例も星の数ほどあります。<br><br>「<span data-modal='anno-02'>SNS</span>時代に自前の<span data-modal='anno-01'>ホームページ</span>なんて時代遅れ」<br>日本では当たり前のように語られるこの言葉。<br><br>しかし、この感覚こそが実は時代遅れです。<br><br><span class="hightlight"><span data-modal='anno-07'>DM</span>がいくらでも送れるこの時代に、<br>チラシがなくならない理由はなぜでしょうか?<br><br>チラシを配っているからといって、<br>人々がポスターを貼り続けるのはなぜでしょうか?<br></span><br>費用対効果が見込めるならば、賢い経営者はすべてを行います。<br><br>それと同様に、<span data-modal='anno-03'>口コミサイト</span>や<span data-modal='anno-02'>SNS</span>に広告を出していることは、<br><span data-modal='anno-01'>ホームページ</span>を公開しなくてもいい理由にはなりません。<br><br>インターネット上での宣伝も窓口は多い方がいいに決まっています。<br>まして、広告費用が発生しないのであればコスパは最高です。<br><br><span class="hightlight"><span data-modal='anno-01'>ホームページ</span>は24時間働き続けてくれる営業マンなのですから。<br></span><br>そして、すでにそれに気づいている一部の人たち(特にホテル業界に多いですね)は、<br>自社のサイトで「<span data-modal='anno-08'>ベストレート</span>」を謳い、顧客に直接アプローチをするようになっています。<br><br>「顧客に直接アプローチする」といった自由度の高い運用は、<br><span data-modal='anno-02'>SNS</span>で実現することは困難です。<br><br><span data-modal='anno-02'>SNS</span>は<span data-modal='anno-09'>掲載フォーマット</span>が媒体に依存していて、自由度がありません。<br>見込み客や既存のお客様に伝えたいこと、<br>知ってほしいことを伝えるには、<br><span data-modal='anno-01'>ホームページ</span>が最適です。<br><br>例えば：<a href='https://hoshinoresorts.com/jp/' class="underline" target='_blank' rel='noopener noreferrer'>星野リゾート。</a><br><br>星野リゾートは<span data-modal='anno-10'>公式サイト</span>に力を入れており、<br>提供可能な体験の発見や、宿泊に留まらない旅の提案を<br>サイト訪問者に伝えることに注力しています。<br><br>これは<span data-modal='anno-02'>SNS</span>の運用だけではできないことです。<br>さらに、<span data-modal='anno-10'>公式サイト</span>の情報を部分的に切り取り、<br><span data-modal='anno-02'>SNS</span>で拡散すれば相乗効果を得ることもできます。<br><br>ところが、<br>その<span data-modal='anno-01'>ホームページ</span>の制作手法についても、日本は遅れをとっています。<br>さて、ここまで安心して読んでいた方に質問です。<br><br><span class="hightlight">Q.<span data-modal='anno-12'>Jamstack</span>を使った<span data-modal='anno-01'>ホームページ</span>を持っていますか？<br><br>Noと答えたあなたは、<br>鉄砲伝来した戦国の世で弓矢に固執して<br>犬死にを待つようなものだと認識してください。<br></span><br>日本企業の多くはいまだに<span data-modal='anno-13'>HTML</span>や<span data-modal='anno-14'>PHP</span>でサイトを作っています。<br><br>一方、<br><span class="hightlight">AppleやGoogle、その他海外の名だたる企業はみな、<br><span data-modal='anno-12'>Jamstack</span>（ジャムスタック）という手法で作られた<br><span data-modal='anno-30'>Webサイト</span>を持っています。もちろん、LPで すらも。<br></span><br>予算は大して変わらないのに、<br>なぜこんなにも違うのでしょう？<br><br>日本の<span data-modal='anno-15'>プログラマー</span>を見ていると、これまでに積み上げた<br>「自分が自信を持っているプログラム」に慣れきってしまっているのかな と思います。<br><br>また、経営者も「たかがプログラム」と捉え、<br>そこに使われる技術に価値を見出していないからなのかなと。<br><br>とはいえ、真実は私にもわかりません。<br><br>彼らの論理性が欠如しているのか？<br>それとも「鎖国」しているのか？<br>知っている人がいればぜひ教えてください。<br><br>話を戻して、まずは、<br><span data-modal='anno-12'>Jamstack</span>を用いて作られている<span data-modal='anno-30'>Webサイト</span>と、<br>従来のサイトを見比べてみましょう。<br>なお、<span data-modal='anno-12'>Jamstack</span>を導入している日本企業も一部では見られます。<br><br>【<span data-modal='anno-12'>Jamstack</span>で作られたサイト】<br><a href='https://www.apple.com/jp/iphone-15/' class="underline" target='_blank' rel='noopener noreferrer'>Apple（iPhone15のランディングページ）</a><br><a href='https://www.audible.com/about' class="underline" target='_blank' rel='noopener noreferrer'>Audible(Amazonが運営する音声<span data-modal='anno-16'>サブスクリプション</span>)</a><br><a href='https://www.starbucksreserve.com/' class="underline" target='_blank' rel='noopener noreferrer'>Starbacks Reserve(スターバックスが運営する高級コーヒーを提供するブランド)丸亀製麺</a><br><a href='https://www.bandainamco-ol.co.jp/ja/' class="underline" target='_blank' rel='noopener noreferrer'>バンダイナムコオンライン</a><br><a href='https://crowdworks.co.jp/' class="underline" target='_blank' rel='noopener noreferrer'>クラウドワークス</a><br><br>【従来の作り方のサイト】<br><a href='https://www.nissay.co.jp/' class="underline" target='_blank' rel='noopener noreferrer'>日本生命保険</a><br><a href='https://panasonic.jp/' class="underline" target='_blank' rel='noopener noreferrer'>パナソニック</a><br><a href='https://panasonic.jp/' class="underline" target='_blank' rel='noopener noreferrer'>三菱商事</a><br><br>これらを比べると、<br>デザインや画面遷移の構造、クリックボタンを押させる導線に至るまで、<br>何もかも違うことがわかるはずです。<br><br><span class="hightlight"><span data-modal='anno-12'>Jamstack</span>は、今やWeb制作の<span data-modal='anno-17'>グローバルスタンダード</span>。<br>一方、日本では<span data-modal='anno-12'>Jamstack</span>で<span data-modal='anno-30'>Webサイト</span>を作成している企業はほとんどありません。<br></span><br><span data-modal='anno-02'>SNS</span>や<span data-modal='anno-03'>口コミサイト</span>でも一定の成果を挙げられる点は、<br>日本も海外もさほど変わりはない。<br>それにもかかわらず、<br><br>なぜ、海外の企業だけが<span data-modal='anno-12'>Jamstack</span>で作られた<br><span data-modal='anno-30'>Webサイト</span>"も"持っているのでしょうか？<br><br><span class="hightlight"><span data-modal='anno-12'>Jamstack</span>で作られた<span data-modal='anno-30'>Webサイト</span>が、<br>「<span data-modal='anno-18'>集客</span>」において絶大な力を発揮することを、<br>海外の企業は知っているからです。<br></span><br><span class="hightlight">次世代のWeb開発手法とされる<span data-modal='anno-12'>Jamstack</span>で作られたサイトは、<br>以下のような特徴を持ってい ます。<br></span><ul class="list-disc list-inside pl-6"><li><span class="hightlight">異次元に速いページ読み込み速度</span></li><li><span class="hightlight">サーバー障害への圧倒的耐性</span></li><li><span class="hightlight">高度なセキュリティ</span></li></ul><br><span class="hightlight"><span data-modal='anno-12'>Jamstack</span>は従来のWeb制作方法と異なり、<br>サイト運営において<span data-modal='anno-19'>サーバー</span>への依存度が小さくなっています。<br></span><br><span data-modal='anno-12'>Jamstack</span>で作られたサイトは、<br>ページを遷移する度に<span data-modal='anno-19'>サーバー</span>から情報を呼び出す必要がありません。<br>そのため、ページの読み込み速度が段違いに向上します。<br><br><span data-modal='anno-19'>サーバー</span>から情報を呼び出さないということは、<br>仮に<span data-modal='anno-19'>サーバー</span>がダウンしても<span data-modal='anno-30'>Webサイト</span>自体は落ちないことを意味します。<br>障害への圧倒的な耐性の高さを有しているということです。<br><br>また、<span data-modal='anno-12'>Jamstack</span>で作られたサイトは<span data-modal='anno-19'>サーバー</span>に「<span data-modal='anno-24'>常時接続</span>」をしていないため、<br>攻撃者が<span data-modal='anno-19'>サーバー</span>を攻撃すること自体がそもそも困難です。<br><br>ゆえに、従来のWeb制作手法よりも遥かに<span data-modal='anno-22'>セキュリティ</span>が高いサイトを作れます。<br>そしてGoogleは、これらの特徴を持っているサイトを<span data-modal='anno-25'>SEO</span>の観点から優遇しています。<br><br>つまり、<br><ul class="list-disc list-inside pl-6"><li><span class="hightlight">速いサイト</span></li><li><span class="hightlight">障害に強いサイト</span></li><li><span class="hightlight">セキュリティが堅牢なサイト</span></li></ul>こういったサイトは「<span data-modal='anno-26'>上位表示</span>されやすい」という事実があります。<br><br>「<span data-modal='anno-01'>ホームページ</span>がなくても、<span data-modal='anno-02'>SNS</span>で<span data-modal='anno-18'>集客</span>はできるから」<br>この発想は、従来の手法で作られた<span data-modal='anno-01'>ホームページ</span>、<br><br>つまり<span data-modal='anno-25'>SEO</span>的に弱いサイトの作り方しか知らない日本人の間では、<br>常識とされるのかもしれません。<br><br><span class="hightlight">一方、<span data-modal='anno-12'>Jamstack</span>で作られたサイトは、<br></span><ul class="list-disc list-inside pl-6"><li><span class="hightlight">速い</span></li><li><span class="hightlight">ゆえに、上位表示されやすい</span></li><li><span class="hightlight">ゆえに、アクセスが増えて利益につながる</span></li></ul>という、誰の目にも明らかなメリットがあります。<br><br>圧倒的に<span data-modal='anno-25'>SEO</span>に強い<span data-modal='anno-12'>Jamstack</span>という仕組みを知っている海外企業から見れば、<br>自前の<span data-modal='anno-30'>Webサイト</span>を持たないことは非常に愚かな行為なのです。<br><br>私たちは、インターネットの新しい技術を駆使し、<br><span data-modal='anno-18'>集客</span>に成功している欧米の大企業から「愚か」と思われるような仕事はしません。<br><br>たかが1枚の<span data-modal='anno-01'>ホームページ</span>でも、私たちはグローバル基準で<br>良いもの・新しいもの・効果があるものを作ります。<br><br>あなたは、新しいものを避けこのまま凋落する道を進むのか。<br>それとも、真に効果があるものを導入して競合他社から一歩抜きん出るのか。<br><br>どちらを選びますか？<br><br>日本国内でも、<span data-modal='anno-12'>Jamstack</span>の導入が成果につながった事例はすでにあります。<br><a href='https://tsunaweb.book.mynavi.jp/tsunaweb/tsuna/detail/id=4374' class="underline" target='_blank' rel='noopener noreferrer'><span data-modal='anno-12'>Jamstack</span>の導入事例(川崎重工業×トルク)</a><br><br>「<span data-modal='anno-01'>ホームページ</span>なんて古臭いから」<br>「無料の<span data-modal='anno-02'>SNS</span>もあることだし」<br>「同じお金を払うなら、みんなが知っている<span data-modal='anno-03'>口コミサイト</span>でいいかな」<br><br>こういった、あなたの同業他社と似たような<br>貧相な発想をまず捨てましょう。<br><br>ここまで語ってきた数々のメリットに目をつむり、<br>誰でもできる無料の量産型<span data-modal='anno-02'>SNS</span>をやろう<br>という発想は愚の骨頂。<br><br><span class="hightlight">あなたはいつまで、<br>デジタル鎖国でいつ敗北するかもわからない<br>弓矢を使う武将であり続けますか?<br><br><span data-modal='anno-12'>Jamstack</span>のメリットを理解できたならば、<br>1秒でも早く導入すべきです。<br></span><br>ちなみに、あなたが読んでいるこのブログも<br><span data-modal='anno-12'>Jamstack</span>を活用して<span data-modal='anno-29'>モダン開発</span>されています。<br><br>様々なブログの表示スピードと比較してみてください。<br>きっとその凄さがわかるはず。<br>あなたが導入をためらった分だけ、<br><br>あなたの会社の<span data-modal='anno-30'>Webサイト</span>を見てくれたはずのお客様を取り逃がすことになります。<br>ここまでお伝えした情報を他の企業が知る前に、<br>今すぐ我々に問い合わせてください。<br>`,
        annotations: [
          {
            modal: "anno-01",
            term: "ホームページ",
            definition:
              "インターネット上の企業や個人の情報発信サイト。会社案内や商品紹介などを掲載。",
          },
          {
            modal: "anno-02",
            term: "SNS",
            definition:
              "ソーシャルネットワーキングサービス。TwitterやInstagramなど人とつながる交流サイト。",
          },
          {
            modal: "anno-03",
            term: "口コミサイト",
            definition:
              "利用者が商品やサービスの評価・感想を投稿できるウェブサイト。",
          },
          {
            modal: "anno-04",
            term: "食べログ",
            definition:
              "飲食店の情報や口コミを掲載する日本最大級のグルメサイト。",
          },
          {
            modal: "anno-05",
            term: "ホットペッパービューティー",
            definition:
              "美容室やエステサロンの予約ができる美容関連の情報サイト。",
          },
          {
            modal: "anno-06",
            term: "じゃらん",
            definition:
              "ホテルや旅館の宿泊予約ができる旅行予約サイト。リクルートが運営。",
          },
          {
            modal: "anno-07",
            term: "DM",
            definition:
              "ダイレクトメッセージ。SNSで個人間に直接送るメッセージ機能。",
          },
          {
            modal: "anno-08",
            term: "ベストレート",
            definition:
              "最安値保証のこと。公式サイトが最も安い料金であることを約束する制度。",
          },
          {
            modal: "anno-09",
            term: "掲載フォーマット",
            definition:
              "情報を掲載する際の決められた形式や枠組み。レイアウトの規則。",
          },
          {
            modal: "anno-10",
            term: "公式サイト",
            definition:
              "企業や団体が正式に運営するウェブサイト。最も信頼性の高い情報源。",
          },
          {
            modal: "anno-11",
            term: "LP（ランディングページ）",
            definition:
              "特定の商品やサービスを紹介し、購入や申し込みを促す専用ページ。",
          },
          {
            modal: "anno-12",
            term: "Jamstack",
            definition:
              "高速で安全なウェブサイトを作る最新の開発手法。海外企業で主流の技術。",
          },
          {
            modal: "anno-13",
            term: "HTML",
            definition:
              "ウェブページの構造を作るプログラミング言語。従来のサイト制作で使用。",
          },
          {
            modal: "anno-14",
            term: "PHP",
            definition:
              "動的なウェブサイトを作るプログラミング言語。データベースと連携可能。",
          },
          {
            modal: "anno-15",
            term: "プログラマー",
            definition:
              "コンピューターのプログラムを作成する専門技術者。ソフトウェア開発者。",
          },
          {
            modal: "anno-16",
            term: "サブスクリプション",
            definition:
              "月額料金を支払って継続的にサービスを利用する契約形態。定額制。",
          },
          {
            modal: "anno-17",
            term: "グローバルスタンダード",
            definition:
              "世界標準。国際的に広く採用されている技術や手法のこと。",
          },
          {
            modal: "anno-18",
            term: "集客",
            definition:
              "顧客を呼び込むこと。マーケティング活動によりお客様を獲得する取り組み。",
          },
          {
            modal: "anno-19",
            term: "サーバー",
            definition:
              "ウェブサイトのデータを保存し、利用者にページを配信するコンピューター。",
          },
          {
            modal: "anno-20",
            term: "ページ読み込み速度",
            definition:
              "ウェブページが表示されるまでの時間。速いほど利用者の満足度が高い。",
          },
          {
            modal: "anno-21",
            term: "サーバー障害",
            definition:
              "サーバーの故障や不具合によりウェブサイトが利用できなくなる状態。",
          },
          {
            modal: "anno-22",
            term: "セキュリティ",
            definition: "情報やシステムを不正アクセスや攻撃から守る安全対策。",
          },
          {
            modal: "anno-23",
            term: "サーバーダウン",
            definition:
              "サーバーが故障や過負荷により停止し、ウェブサイトが閲覧できない状態。",
          },
          {
            modal: "anno-24",
            term: "常時接続",
            definition:
              "インターネットに24時間つながり続けている状態。常にオンライン。",
          },
          {
            modal: "anno-25",
            term: "SEO",
            definition:
              "検索エンジン最適化。Googleなどの検索結果で上位表示されやすくする技術。",
          },
          {
            modal: "anno-26",
            term: "上位表示",
            definition:
              "検索結果の上の方に表示されること。多くの人に見てもらいやすくなる。",
          },
          {
            modal: "anno-27",
            term: "アクセス",
            definition:
              "ウェブサイトを訪問すること。サイトへの訪問者数や回数を指すことも多い。",
          },
          {
            modal: "anno-28",
            term: "堅牢",
            definition:
              "システムが丈夫で壊れにくいこと。セキュリティが強固で安全な状態。",
          },
          {
            modal: "anno-29",
            term: "モダン開発",
            definition:
              "最新の技術や手法を使った現代的なシステム開発。従来手法より効率的。",
          },
          {
            modal: "anno-30",
            term: "Webサイト",
            definition:
              "インターネット上で公開されている情報のまとまり。ホームページと同義。",
          },
        ],
      },
      en: {
        title:
          'To Those Waiting for Their Downfall in Digital Isolationism While Preaching Outdated "Website" Theories',
        category: "",
        content: `<span class="hightlight">Q. If you could hire an excellent salesperson who would work diligently for life 24 hours a day without complaints for a one-time payment of 1 million yen,<br>would you hire them?<br></span><br><br>Those who answered No are idiots.<br><br>Now, let me change the question.<br><br><span class="hightlight">Q. Do you have a <span data-modal='anno-01'>website</span>?<br></span><br><span class="hightlight">If you answered No, you are a complete idiot.<br></span><br><span data-modal='anno-02'>SNS</span> is sufficient<br>Having your own <span data-modal='anno-01'>website</span> is outdated<br>I don't feel the need right now since I have work<br><br>I've heard these kinds of excuses countless times.<br><br>Whether it's corporate executives or restaurant managers,<br>there seem to be increasing numbers of <span data-modal='anno-01'>website</span> opponents.<br><br>If you are a selfless saint who doesn't want to make a single yen in profit,<br>you don't need to read my blog.<br><br>(But even if you are a selfless saint who doesn't want to make a single yen in profit,<br>you should still use a website.)<br><br><span class="hightlight">However, if you're trying to generate profit<br>but think a <span data-modal='anno-01'>website</span> is unnecessary,<br>you should straighten up and read this article immediately.<br></span><br>It's true that even without a <span data-modal='anno-01'>website</span>,<br>if you list your company or store information on <span data-modal='anno-03'>review sites</span>,<br>customers might be able to <span data-modal='anno-27'>access</span> your information online.<br><br>For restaurants, <span data-modal='anno-04'>Tabelog</span>.<br>For beauty salons, <span data-modal='anno-05'>Hot Pepper Beauty</span>.<br>For accommodation bookings, <span data-modal='anno-06'>Jalan</span>.<br>There are countless examples of successful <span data-modal='anno-18'>customer acquisition</span> on X and Instagram.<br><br>"Having your own <span data-modal='anno-01'>website</span> in the <span data-modal='anno-02'>SNS</span> era is outdated"<br>This phrase is spoken as common sense in Japan.<br><br>However, this very mindset is actually outdated.<br><br><span class="hightlight">In this era when you can send unlimited <span data-modal='anno-07'>DMs</span>,<br>why don't flyers disappear?<br><br>Just because flyers are being distributed,<br>why do people continue putting up posters?<br></span><br>If cost-effectiveness can be expected, smart managers do everything.<br><br>Similarly, advertising on <span data-modal='anno-03'>review sites</span> and <span data-modal='anno-02'>SNS</span><br>is not a reason to avoid publishing a <span data-modal='anno-01'>website</span>.<br><br>It's obviously better to have more channels for online promotion.<br>Moreover, if no advertising costs are involved, the cost-performance is excellent.<br><br><span class="hightlight">A <span data-modal='anno-01'>website</span> is a salesperson that works 24 hours a day.<br></span><br>And some people who have already realized this (especially many in the hotel industry)<br>are starting to promote "<span data-modal='anno-08'>best rates</span>" on their own sites and approach customers directly.<br><br>High-flexibility operations like "direct customer approach"<br>are difficult to achieve with <span data-modal='anno-02'>SNS</span>.<br><br><span data-modal='anno-02'>SNS</span> has <span data-modal='anno-09'>posting formats</span> that depend on the platform and lack flexibility.<br>To convey what you want to tell prospective and existing customers,<br>what you want them to know,<br>a <span data-modal='anno-01'>website</span> is optimal.<br><br>For example: <a href='https://hoshinoresorts.com/jp/' class="underline" target='_blank' rel='noopener noreferrer'>Hoshino Resorts.</a><br><br>Hoshino Resorts focuses on their <span data-modal='anno-10'>official website</span>,<br>concentrating on conveying the discovery of experiences they can provide<br>and travel proposals that go beyond just accommodation to site visitors.<br><br>This cannot be done through <span data-modal='anno-02'>SNS</span> management alone.<br>Furthermore, by extracting parts of <span data-modal='anno-10'>official website</span> information<br>and spreading it on <span data-modal='anno-02'>SNS</span>, synergistic effects can be achieved.<br><br>However,<br>Japan is also falling behind in <span data-modal='anno-01'>website</span> creation methods.<br>Now, here's a question for those who have been reading comfortably so far.<br><br><span class="hightlight">Q. Do you have a <span data-modal='anno-01'>website</span> built using <span data-modal='anno-12'>Jamstack</span>?<br><br>If you answered No,<br>recognize that you're like a warrior in the Warring States period who stubbornly clings to bows and arrows after firearms were introduced, waiting for a pointless death.<br></span><br>Most Japanese companies still create sites using <span data-modal='anno-13'>HTML</span> and <span data-modal='anno-14'>PHP</span>.<br><br>Meanwhile,<br><span class="hightlight">Apple, Google, and other renowned overseas companies all have<br><span data-modal='anno-30'>websites</span> built using a method called <span data-modal='anno-12'>Jamstack</span>. Even their landing pages.<br></span><br>The budget isn't that different,<br>so why is there such a huge difference?<br><br>Looking at Japanese <span data-modal='anno-15'>programmers</span>, I think they've become too accustomed to<br>"programs they're confident in" that they've built up over time.<br><br>Also, perhaps executives view it as "just programming"<br>and don't see value in the technology used there.<br><br>However, I don't know the truth either.<br><br>Do they lack logical thinking?<br>Or are they in "isolation"?<br>If anyone knows, please tell me.<br><br>Getting back to the topic, first,<br>let's compare <span data-modal='anno-30'>websites</span> built using <span data-modal='anno-12'>Jamstack</span><br>with conventional sites.<br>Note that some Japanese companies have also adopted <span data-modal='anno-12'>Jamstack</span>.<br><br>【Sites built with <span data-modal='anno-12'>Jamstack</span>】<br><a href='https://www.apple.com/jp/iphone-15/' class="underline" target='_blank' rel='noopener noreferrer'>Apple (iPhone 15 landing page)</a><br><a href='https://www.audible.com/about' class="underline" target='_blank' rel='noopener noreferrer'>Audible (Amazon's audio <span data-modal='anno-16'>subscription</span> service)</a><br><a href='https://www.starbucksreserve.com/' class="underline" target='_blank' rel='noopener noreferrer'>Starbucks Reserve (Starbucks' premium coffee brand)</a><br><a href='https://www.bandainamco-ol.co.jp/ja/' class="underline" target='_blank' rel='noopener noreferrer'>Bandai Namco Online</a><br><a href='https://crowdworks.co.jp/' class="underline" target='_blank' rel='noopener noreferrer'>CrowdWorks</a><br><br>【Conventionally built sites】<br><a href='https://www.nissay.co.jp/' class="underline" target='_blank' rel='noopener noreferrer'>Nippon Life Insurance</a><br><a href='https://panasonic.jp/' class="underline" target='_blank' rel='noopener noreferrer'>Panasonic</a><br><a href='https://panasonic.jp/' class="underline" target='_blank' rel='noopener noreferrer'>Mitsubishi Corporation</a><br><br>Comparing these,<br>you should see that everything is different, from design and page transition structure to the flow that leads users to click buttons.<br><br><span class="hightlight"><span data-modal='anno-12'>Jamstack</span> is now the <span data-modal='anno-17'>global standard</span> for web development.<br>Meanwhile, in Japan, there are almost no companies creating <span data-modal='anno-30'>websites</span> with <span data-modal='anno-12'>Jamstack</span>.<br></span><br>The point that certain results can be achieved through <span data-modal='anno-02'>SNS</span> and <span data-modal='anno-03'>review sites</span><br>doesn't differ much between Japan and overseas.<br>Nevertheless,<br><br>why do only overseas companies "also" have<br><span data-modal='anno-30'>websites</span> built with <span data-modal='anno-12'>Jamstack</span>?<br><br><span class="hightlight">Because overseas companies know that<br><span data-modal='anno-30'>websites</span> built with <span data-modal='anno-12'>Jamstack</span><br>demonstrate tremendous power in "<span data-modal='anno-18'>customer acquisition</span>."<br></span><br><span class="hightlight">Sites built with <span data-modal='anno-12'>Jamstack</span>, considered the next-generation web development method,<br>have the following characteristics:<br></span><ul class="list-disc list-inside pl-6"><li><span class="hightlight">Incredibly fast page loading speeds</span></li><li><span class="hightlight">Overwhelming resistance to server failures</span></li><li><span class="hightlight">Advanced security</span></li></ul><br><span class="hightlight">Unlike conventional web development methods, <span data-modal='anno-12'>Jamstack</span><br>reduces dependency on <span data-modal='anno-19'>servers</span> in site operations.<br></span><br>Sites built with <span data-modal='anno-12'>Jamstack</span><br>don't need to call information from <span data-modal='anno-19'>servers</span> every time pages transition.<br>Therefore, page loading speeds improve dramatically.<br><br>Not calling information from <span data-modal='anno-19'>servers</span> means<br>that even if <span data-modal='anno-19'>servers</span> go down, the <span data-modal='anno-30'>website</span> itself won't crash.<br>This means having overwhelming resistance to failures.<br><br>Also, sites built with <span data-modal='anno-12'>Jamstack</span> are not "<span data-modal='anno-24'>constantly connected</span>" to <span data-modal='anno-19'>servers</span>,<br>making it fundamentally difficult for attackers to attack <span data-modal='anno-19'>servers</span>.<br><br>Therefore, you can create sites with much higher <span data-modal='anno-22'>security</span> than conventional web development methods.<br>And Google favors sites with these characteristics from an <span data-modal='anno-25'>SEO</span> perspective.<br><br>In other words,<br><ul class="list-disc list-inside pl-6"><li><span class="hightlight">Fast sites</span></li><li><span class="hightlight">Failure-resistant sites</span></li><li><span class="hightlight">Security-robust sites</span></li></ul>Such sites have the fact that they are "easily <span data-modal='anno-26'>ranked higher</span>."<br><br>"Since you can do <span data-modal='anno-18'>customer acquisition</span> with <span data-modal='anno-02'>SNS</span> even without a <span data-modal='anno-01'>website</span>"<br>This thinking is about <span data-modal='anno-01'>websites</span> built with conventional methods,<br><br>that is, among Japanese people who only know how to create <span data-modal='anno-25'>SEO</span>-weak sites,<br>this might be considered common sense.<br><br><span class="hightlight">Meanwhile, sites built with <span data-modal='anno-12'>Jamstack</span> have<br></span><ul class="list-disc list-inside pl-6"><li><span class="hightlight">Speed</span></li><li><span class="hightlight">Therefore, easily ranked higher</span></li><li><span class="hightlight">Therefore, increased access leading to profits</span></li></ul>obvious benefits that are clear to everyone.<br><br>From the perspective of overseas companies that know about <span data-modal='anno-12'>Jamstack</span>, a system overwhelmingly strong in <span data-modal='anno-25'>SEO</span>,<br>not having your own <span data-modal='anno-30'>website</span> is an extremely foolish act.<br><br>We don't do work that would be considered "foolish" by major Western companies<br>that succeed in <span data-modal='anno-18'>customer acquisition</span> using new internet technologies.<br><br>Even for just one <span data-modal='anno-01'>website</span> page, we create<br>good, new, and effective things by global standards.<br><br>Will you choose the path of avoiding new things and continuing to decline?<br>Or will you introduce truly effective solutions and stand out from your competitors?<br><br>Which will you choose?<br><br>Even in Japan, there are already cases where <span data-modal='anno-12'>Jamstack</span> implementation has led to results.<br><a href='https://tsunaweb.book.mynavi.jp/tsunaweb/tsuna/detail/id=4374' class="underline" target='_blank' rel='noopener noreferrer'><span data-modal='anno-12'>Jamstack</span> implementation case study (Kawasaki Heavy Industries × Torque)</a><br><br>"<span data-modal='anno-01'>Websites</span> are old-fashioned"<br>"There are free <span data-modal='anno-02'>SNS</span> options available"<br>"If I'm paying the same money, I'll go with well-known <span data-modal='anno-03'>review sites</span>"<br><br>First, abandon such poor thinking<br>similar to your industry competitors.<br><br>Turning a blind eye to the numerous benefits discussed so far<br>and choosing to do free mass-produced <span data-modal='anno-02'>SNS</span> that anyone can do<br>is the height of foolishness.<br><br><span class="hightlight">How long will you remain<br>a general using bows and arrows in digital isolation,<br>never knowing when defeat might come?<br><br>If you can understand the benefits of <span data-modal='anno-12'>Jamstack</span>,<br>you should implement it as soon as possible.<br></span><br>By the way, this blog you're reading<br>is also <span data-modal='anno-29'>modernly developed</span> using <span data-modal='anno-12'>Jamstack</span>.<br><br>Compare it with the display speeds of various other blogs.<br>You'll surely understand its greatness.<br>The more you hesitate to implement it,<br><br>the more you'll miss out on customers who would have visited your company's <span data-modal='anno-30'>website</span>.<br>Before other companies learn the information I've shared,<br>contact us immediately.`,
        annotations: [
          {
            modal: "anno-01",
            term: "Homepage",
            definition:
              "An information dissemination site for companies or individuals on the internet. Displays company information and product introductions.",
          },
          {
            modal: "anno-02",
            term: "SNS",
            definition:
              "Social Networking Service. Communication sites like Twitter or Instagram that connect people.",
          },
          {
            modal: "anno-03",
            term: "Review Site",
            definition:
              "A website where users can post reviews and impressions of products or services.",
          },
          {
            modal: "anno-04",
            term: "Tabelog",
            definition:
              "Japan's largest gourmet site that publishes restaurant information and reviews.",
          },
          {
            modal: "anno-05",
            term: "Hot Pepper Beauty",
            definition:
              "A beauty-related information site where you can book hair salons and beauty salons.",
          },
          {
            modal: "anno-06",
            term: "Jalan",
            definition:
              "A travel booking site where you can book hotels and inns. Operated by Recruit.",
          },
          {
            modal: "anno-07",
            term: "DM",
            definition:
              "Direct Message. A messaging feature for sending messages directly between individuals on SNS.",
          },
          {
            modal: "anno-08",
            term: "Best Rate",
            definition:
              "Lowest price guarantee. A system where official sites promise to offer the lowest rates.",
          },
          {
            modal: "anno-09",
            term: "Listing Format",
            definition:
              "Predetermined format or framework for posting information. Layout rules.",
          },
          {
            modal: "anno-10",
            term: "Official Site",
            definition:
              "A website officially operated by a company or organization. The most reliable source of information.",
          },
          {
            modal: "anno-11",
            term: "LP (Landing Page)",
            definition:
              "A dedicated page that introduces specific products or services and encourages purchases or applications.",
          },
          {
            modal: "anno-12",
            term: "Jamstack",
            definition:
              "The latest development method for creating fast and secure websites. Mainstream technology in overseas companies.",
          },
          {
            modal: "anno-13",
            term: "HTML",
            definition:
              "A programming language for creating web page structure. Used in traditional site creation.",
          },
          {
            modal: "anno-14",
            term: "PHP",
            definition:
              "A programming language for creating dynamic websites. Can connect with databases.",
          },
          {
            modal: "anno-15",
            term: "Programmer",
            definition:
              "A specialized technician who creates computer programs. Software developer.",
          },
          {
            modal: "anno-16",
            term: "Subscription",
            definition:
              "A contract form where monthly fees are paid to continuously use services. Fixed-rate system.",
          },
          {
            modal: "anno-17",
            term: "Global Standard",
            definition:
              "World standard. Technology or methods widely adopted internationally.",
          },
          {
            modal: "anno-18",
            term: "Customer Acquisition",
            definition:
              "Attracting customers. Efforts to acquire customers through marketing activities.",
          },
          {
            modal: "anno-19",
            term: "Server",
            definition:
              "A computer that stores website data and delivers pages to users.",
          },
          {
            modal: "anno-20",
            term: "Page Loading Speed",
            definition:
              "The time it takes for a web page to display. The faster it is, the higher user satisfaction.",
          },
          {
            modal: "anno-21",
            term: "Server Failure",
            definition:
              "A state where websites become unavailable due to server malfunction or defects.",
          },
          {
            modal: "anno-22",
            term: "Security",
            definition:
              "Safety measures to protect information and systems from unauthorized access and attacks.",
          },
          {
            modal: "anno-23",
            term: "Server Down",
            definition:
              "A state where the server stops due to failure or overload and websites cannot be viewed.",
          },
          {
            modal: "anno-24",
            term: "Always-On Connection",
            definition:
              "A state of being connected to the internet 24 hours. Always online.",
          },
          {
            modal: "anno-25",
            term: "SEO",
            definition:
              "Search Engine Optimization. Technology to make it easier to display high in search results like Google.",
          },
          {
            modal: "anno-26",
            term: "Top Ranking",
            definition:
              "Being displayed at the top of search results. Makes it easier for many people to see.",
          },
          {
            modal: "anno-27",
            term: "Access",
            definition:
              "Visiting a website. Often refers to the number of visitors or visits to a site.",
          },
          {
            modal: "anno-28",
            term: "Robust",
            definition:
              "Systems being sturdy and hard to break. A secure state with strong security.",
          },
          {
            modal: "anno-29",
            term: "Modern Development",
            definition:
              "Contemporary system development using the latest technologies and methods. More efficient than traditional methods.",
          },
          {
            modal: "anno-30",
            term: "Website",
            definition:
              "A collection of information published on the internet. Synonymous with homepage.",
          },
        ],
      },
      zh: {
        title: '致那些在数字锁国中宣扬过时"网站"理论，等待无谓牺牲的人们',
        category: "",
        content: `<span class="hightlight">Q. 如果你只需一次性支付100万日元，就能雇用一个24小时不抱怨、<br>一生持续工作的优秀营业员，<br>你会雇用吗？<br></span><br><br>回答No的人是傻瓜。<br><br>那么，我换个问题。<br><br><span class="hightlight">Q. 你有<span data-modal='anno-01'>网站</span>吗？<br></span><br><span class="hightlight">回答No的你是大傻瓜。<br></span><br>有<span data-modal='anno-02'>SNS</span>就够了<br>自己的<span data-modal='anno-01'>网站</span>已经过时了<br>现在有工作所以不觉得有必要<br><br>这样的说辞我听过无数次。<br><br>无论是企业经营者还是餐厅店长，<br><span data-modal='anno-01'>网站</span>不必要论者似乎在增加。<br><br>如果你是一个不想赚一分钱利润的无欲圣人，<br>就没必要阅读我的博客。<br><br>（但即使你是一个不想赚一分钱利润的无欲圣人，<br>也应该使用网站。）<br><br><span class="hightlight">但是，如果你想要产生利润<br>却认为<span data-modal='anno-01'>网站</span>不必要，<br>应该立即端正姿态阅读这篇文章。<br></span><br>确实即使没有<span data-modal='anno-01'>网站</span>，<br>在<span data-modal='anno-03'>口碑网站</span>上刊登公司或店铺信息，<br>客户可能也能从网上<span data-modal='anno-27'>访问</span>你的信息。<br><br>餐厅有<span data-modal='anno-04'>食べログ</span>。<br>美容院有<span data-modal='anno-05'>Hot Pepper Beauty</span>。<br>住宿预约有<span data-modal='anno-06'>じゃらん</span>。<br>在X和Instagram上成功<span data-modal='anno-18'>获客</span>的例子也多如繁星。<br><br>「<span data-modal='anno-02'>SNS</span>时代自己的<span data-modal='anno-01'>网站</span>已经过时了」<br>在日本这句话被当作常识来说。<br><br>但是，这种感觉本身其实是过时的。<br><br><span class="hightlight">在这个可以无限发送<span data-modal='anno-07'>DM</span>的时代，<br>传单为什么不会消失？<br><br>即使在发传单，<br>人们为什么还要继续贴海报？<br></span><br>如果能预期成本效益，聪明的经营者会全部去做。<br><br>同样，在<span data-modal='anno-03'>口碑网站</span>和<span data-modal='anno-02'>SNS</span>上做广告，<br>不是不公开<span data-modal='anno-01'>网站</span>的理由。<br><br>网上宣传的窗口肯定是越多越好。<br>何况，如果不产生广告费用，性价比是最高的。<br><br><span class="hightlight"><span data-modal='anno-01'>网站</span>是24小时持续工作的营业员。<br></span><br>而且，已经意识到这一点的一部分人（特别是酒店业界很多），<br>在自家网站上宣传「<span data-modal='anno-08'>最优价格</span>」，开始直接向顾客营销。<br><br>「直接向顾客营销」这样高自由度的运营，<br>用<span data-modal='anno-02'>SNS</span>很难实现。<br><br><span data-modal='anno-02'>SNS</span>的<span data-modal='anno-09'>刊登格式</span>依赖于媒体，没有自由度。<br>要向潜在客户和既有客户传达想要传达的事情，<br>想让他们知道的事情，<br><span data-modal='anno-01'>网站</span>是最佳选择。<br><br>例如：<a href='https://hoshinoresorts.com/jp/' class="underline" target='_blank' rel='noopener noreferrer'>星野度假村。</a><br><br>星野度假村重视<span data-modal='anno-10'>官方网站</span>，<br>专注于向网站访问者传达可提供的体验发现，<br>以及不仅限于住宿的旅行提案。<br><br>这是仅靠<span data-modal='anno-02'>SNS</span>运营无法做到的事情。<br>而且，部分截取<span data-modal='anno-10'>官方网站</span>的信息，<br>在<span data-modal='anno-02'>SNS</span>上传播也能获得相乘效果。<br><br>然而，<br>在<span data-modal='anno-01'>网站</span>的制作手法方面，日本也落后了。<br>那么，到这里一直安心阅读的各位，我有个问题。<br><br><span class="hightlight">Q. 你有使用<span data-modal='anno-12'>Jamstack</span>制作的<span data-modal='anno-01'>网站</span>吗？<br><br>回答No的你，<br>请认识到这就像在铁炮传来的战国时代还固执于弓箭、<br>等待无谓战死的武将一样。<br></span><br>日本企业的大多数至今仍在用<span data-modal='anno-13'>HTML</span>和<span data-modal='anno-14'>PHP</span>制作网站。<br><br>另一方面，<br><span class="hightlight">Apple、Google及其他海外知名企业都拥有<br>用称为<span data-modal='anno-12'>Jamstack</span>（ジャムスタック）手法制作的<br><span data-modal='anno-30'>网站</span>。当然，连LP都是。<br></span><br>预算相差不大，<br>为什么会有这么大的差异呢？<br><br>看日本的<span data-modal='anno-15'>程序员</span>，我觉得他们过于习惯了<br>至今积累的「自己有信心的程序」。<br><br>另外，经营者也将其视为「不过是程序」，<br>没有看出其中使用技术的价值。<br><br>不过，真相我也不知道。<br><br>是他们缺乏逻辑性？<br>还是在「锁国」？<br>如果有知道的人请一定告诉我。<br><br>回到话题，首先，<br>我们来比较一下使用<span data-modal='anno-12'>Jamstack</span>制作的<span data-modal='anno-30'>网站</span><br>和传统网站。<br>顺便提一下，导入<span data-modal='anno-12'>Jamstack</span>的日本企业也有一部分。<br><br>【用<span data-modal='anno-12'>Jamstack</span>制作的网站】<br><a href='https://www.apple.com/jp/iphone-15/' class="underline" target='_blank' rel='noopener noreferrer'>Apple（iPhone15的着陆页）</a><br><a href='https://www.audible.com/about' class="underline" target='_blank' rel='noopener noreferrer'>Audible（Amazon运营的音频<span data-modal='anno-16'>订阅</span>服务）</a><br><a href='https://www.starbucksreserve.com/' class="underline" target='_blank' rel='noopener noreferrer'>Starbucks Reserve（星巴克运营的提供高级咖啡的品牌）</a><br><a href='https://www.bandainamco-ol.co.jp/ja/' class="underline" target='_blank' rel='noopener noreferrer'>万代南梦宫在线</a><br><a href='https://crowdworks.co.jp/' class="underline" target='_blank' rel='noopener noreferrer'>CrowdWorks</a><br><br>【传统制作方式的网站】<br><a href='https://www.nissay.co.jp/' class="underline" target='_blank' rel='noopener noreferrer'>日本生命保险</a><br><a href='https://panasonic.jp/' class="underline" target='_blank' rel='noopener noreferrer'>松下电器</a><br><a href='https://panasonic.jp/' class="underline" target='_blank' rel='noopener noreferrer'>三菱商事</a><br><br>比较这些，<br>从设计、画面转换结构，到点击按钮的导向，<br>应该能看出一切都不同。<br><br><span class="hightlight"><span data-modal='anno-12'>Jamstack</span>现在是Web制作的<span data-modal='anno-17'>全球标准</span>。<br>另一方面，在日本用<span data-modal='anno-12'>Jamstack</span>制作<span data-modal='anno-30'>网站</span>的企业几乎没有。<br></span><br>通过<span data-modal='anno-02'>SNS</span>和<span data-modal='anno-03'>口碑网站</span>也能取得一定成果这一点，<br>日本和海外没有太大差别。<br>尽管如此，<br><br>为什么只有海外企业「也」拥有<br>用<span data-modal='anno-12'>Jamstack</span>制作的<span data-modal='anno-30'>网站</span>呢？<br><br><span class="hightlight">因为海外企业知道<br>用<span data-modal='anno-12'>Jamstack</span>制作的<span data-modal='anno-30'>网站</span><br>在「<span data-modal='anno-18'>获客</span>」方面发挥巨大力量。<br></span><br><span class="hightlight">被称为下一代Web开发手法的<span data-modal='anno-12'>Jamstack</span>制作的网站，<br>具有以下特征：<br></span><ul class="list-disc list-inside pl-6"><li><span class="hightlight">异次元快速的页面加载速度</span></li><li><span class="hightlight">对服务器故障的压倒性耐性</span></li><li><span class="hightlight">高级安全性</span></li></ul><br><span class="hightlight"><span data-modal='anno-12'>Jamstack</span>与传统Web制作方法不同，<br>在网站运营中对<span data-modal='anno-19'>服务器</span>的依赖度较小。<br></span><br>用<span data-modal='anno-12'>Jamstack</span>制作的网站，<br>每次页面转换时不需要从<span data-modal='anno-19'>服务器</span>调用信息。<br>因此，页面加载速度大幅提升。<br><br>不从<span data-modal='anno-19'>服务器</span>调用信息意味着<br>即使<span data-modal='anno-19'>服务器</span>宕机，<span data-modal='anno-30'>网站</span>本身也不会崩溃。<br>具有对故障的压倒性耐性。<br><br>另外，用<span data-modal='anno-12'>Jamstack</span>制作的网站不会「<span data-modal='anno-24'>常时连接</span>」<span data-modal='anno-19'>服务器</span>，<br>攻击者攻击<span data-modal='anno-19'>服务器</span>本身就很困难。<br><br>因此，能制作出比传统Web制作手法安全性高得多的网站。<br>而且Google从<span data-modal='anno-25'>SEO</span>角度优待具有这些特征的网站。<br><br>也就是说，<br><ul class="list-disc list-inside pl-6"><li><span class="hightlight">快速的网站</span></li><li><span class="hightlight">抗故障的网站</span></li><li><span class="hightlight">安全性坚固的网站</span></li></ul>这样的网站有「容易<span data-modal='anno-26'>获得高排名</span>」的事实。<br><br>「即使没有<span data-modal='anno-01'>网站</span>，也能用<span data-modal='anno-02'>SNS</span><span data-modal='anno-18'>获客</span>」<br>这种想法，是关于用传统手法制作的<span data-modal='anno-01'>网站</span>，<br><br>也就是在只知道<span data-modal='anno-25'>SEO</span>弱网站制作方法的日本人中间，<br>可能被视为常识。<br><br><span class="hightlight">另一方面，用<span data-modal='anno-12'>Jamstack</span>制作的网站，<br></span><ul class="list-disc list-inside pl-6"><li><span class="hightlight">快速</span></li><li><span class="hightlight">因此，容易获得高排名</span></li><li><span class="hightlight">因此，访问增加带来利润</span></li></ul>有着任何人都能看出的明显优势。<br><br>从知道<span data-modal='anno-12'>Jamstack</span>这个在<span data-modal='anno-25'>SEO</span>方面压倒性强大的机制的海外企业来看，<br>不拥有自己的<span data-modal='anno-30'>网站</span>是非常愚蠢的行为。<br><br>我们不做会被运用互联网新技术、<br>在<span data-modal='anno-18'>获客</span>方面取得成功的欧美大企业认为「愚蠢」的工作。<br><br>即使是一张<span data-modal='anno-01'>网站</span>，我们也按照全球标准<br>制作好的、新的、有效果的东西。<br><br>你是要避开新事物继续走向衰落的道路，<br>还是要导入真正有效果的东西从竞争对手中脱颖而出？<br><br>你选择哪个？<br><br>在日本国内，<span data-modal='anno-12'>Jamstack</span>的导入带来成果的事例已经存在。<br><a href='https://tsunaweb.book.mynavi.jp/tsunaweb/tsuna/detail/id=4374' class="underline" target='_blank' rel='noopener noreferrer'><span data-modal='anno-12'>Jamstack</span>的导入事例（川崎重工业×Torque）</a><br><br>「<span data-modal='anno-01'>网站</span>这种东西太老土了」<br>「有免费的<span data-modal='anno-02'>SNS</span>」<br>「如果要花同样的钱，还是选择大家都知道的<span data-modal='anno-03'>口碑网站</span>比较好」<br><br>首先摒弃这种与你的同行竞争对手类似的<br>贫乏想法。<br><br>对至今为止所说的众多优势视而不见，<br>想要做任何人都能做的免费量产型<span data-modal='anno-02'>SNS</span><br>这种想法是愚蠢至极。<br><br><span class="hightlight">你要到什么时候，<br>还继续做数字锁国中不知何时会败北的<br>使用弓箭的武将？<br><br>如果能理解<span data-modal='anno-12'>Jamstack</span>的优势，<br>应该1秒都不要耽搁立即导入。<br></span><br>顺便说一下，你正在阅读的这个博客<br>也是利用<span data-modal='anno-12'>Jamstack</span>进行<span data-modal='anno-29'>现代开发</span>的。<br><br>请与各种博客的显示速度比较一下。<br>一定能明白其厉害之处。<br>你犹豫导入的时间越长，<br><br>就越会错失本来会浏览你公司<span data-modal='anno-30'>网站</span>的客户。<br>在其他企业了解到这里传达的信息之前，<br>请立即联系我们。
`,
        annotations: [
          {
            modal: "anno-01",
            term: "网站",
            definition:
              "企业或个人在互联网上的信息发布网站。刊载公司介绍或商品介绍等。",
          },
          {
            modal: "anno-02",
            term: "社交媒体",
            definition:
              "社交网络服务。Twitter或Instagram等连接人与人的交流网站。",
          },
          {
            modal: "anno-03",
            term: "点评网站",
            definition: "用户可以发布商品或服务评价和感想的网站。",
          },
          {
            modal: "anno-04",
            term: "食べログ",
            definition: "刊载餐厅信息和口碑的日本最大级美食网站。",
          },
          {
            modal: "anno-05",
            term: "Hot Pepper Beauty",
            definition: "可以预约美容院和美容沙龙的美容相关信息网站。",
          },
          {
            modal: "anno-06",
            term: "じゃらん",
            definition: "可以预订酒店和旅馆住宿的旅行预订网站。由Recruit运营。",
          },
          {
            modal: "anno-07",
            term: "私信",
            definition: "直接消息。在社交媒体上个人之间直接发送的消息功能。",
          },
          {
            modal: "anno-08",
            term: "最优价格",
            definition: "最低价保证。官方网站承诺提供最低价格的制度。",
          },
          {
            modal: "anno-09",
            term: "发布格式",
            definition: "发布信息时的规定格式或框架。版面的规则。",
          },
          {
            modal: "anno-10",
            term: "官方网站",
            definition: "企业或团体正式运营的网站。最可靠的信息来源。",
          },
          {
            modal: "anno-11",
            term: "着陆页",
            definition: "介绍特定商品或服务，促进购买或申请的专用页面。",
          },
          {
            modal: "anno-12",
            term: "Jamstack",
            definition: "创建高速安全网站的最新开发方法。海外企业的主流技术。",
          },
          {
            modal: "anno-13",
            term: "HTML",
            definition: "创建网页结构的编程语言。传统网站制作中使用。",
          },
          {
            modal: "anno-14",
            term: "PHP",
            definition: "创建动态网站的编程语言。可与数据库连接。",
          },
          {
            modal: "anno-15",
            term: "程序员",
            definition: "创建计算机程序的专业技术人员。软件开发者。",
          },
          {
            modal: "anno-16",
            term: "订阅制",
            definition: "支付月费持续使用服务的合同形态。定额制。",
          },
          {
            modal: "anno-17",
            term: "全球标准",
            definition: "世界标准。国际上广泛采用的技术或方法。",
          },
          {
            modal: "anno-18",
            term: "获客",
            definition: "吸引顾客。通过营销活动获得客户的举措。",
          },
          {
            modal: "anno-19",
            term: "服务器",
            definition: "保存网站数据并向用户分发页面的计算机。",
          },
          {
            modal: "anno-20",
            term: "页面加载速度",
            definition: "网页显示所需的时间。越快用户满意度越高。",
          },
          {
            modal: "anno-21",
            term: "服务器故障",
            definition: "服务器故障或缺陷导致网站无法使用的状态。",
          },
          {
            modal: "anno-22",
            term: "安全性",
            definition: "保护信息和系统免受非法访问或攻击的安全对策。",
          },
          {
            modal: "anno-23",
            term: "服务器宕机",
            definition: "服务器因故障或过载停止，网站无法浏览的状态。",
          },
          {
            modal: "anno-24",
            term: "常时连接",
            definition: "24小时持续连接互联网的状态。始终在线。",
          },
          {
            modal: "anno-25",
            term: "SEO",
            definition:
              "搜索引擎优化。使Google等搜索结果中容易显示在前面的技术。",
          },
          {
            modal: "anno-26",
            term: "前位显示",
            definition: "在搜索结果的前面显示。容易被更多人看到。",
          },
          {
            modal: "anno-27",
            term: "访问",
            definition: "访问网站。也经常指网站的访问者数或次数。",
          },
          {
            modal: "anno-28",
            term: "坚固",
            definition: "系统坚固不易损坏。安全性强固的安全状态。",
          },
          {
            modal: "anno-29",
            term: "现代开发",
            definition:
              "使用最新技术和方法的现代化系统开发。比传统方法更高效。",
          },
          {
            modal: "anno-30",
            term: "网站",
            definition: "在互联网上公开的信息集合。与网站同义。",
          },
        ],
      },
    },
  },
];

export const dataAD: ArticleType[] = [
  {
    id: "01",
    link: "/ad/01",
    translations: {
      ja: {
        title:
          "広告代理店の見極め方〜失敗の責任を負いたくなければ「大手」に群がれ!成功したければ規模に目を向けるな!〜",
        category: "",
        content: `<span class="hightlight">大手企業のメリットとはたった1つ</span>です。<br><br>「大手である」ということ。<br><br>「何を言ってるんだコイツは?」<br>と思われたかもしれません。<br><br>わかりやすい言葉を使うのであれば、<br><span class="hightlight">「権威性」だけがメリット</span>ということです。<br><br>私は以前、とある広告案件の<span data-modal='anno-03'>コンペ</span>に参加したことがあります。<br>大手から零細までさまざまな<span data-modal='anno-01'>広告代理店</span>が参加する大規模な<span data-modal='anno-03'>コンペ</span>です。<br><br>正直、「大手」<span data-modal='anno-01'>広告代理店</span>のエリートが話す<span data-modal='anno-11'>プレゼン</span>が<br>どのような内容か楽しみにしていました。<br>しかし、内容は<span data-modal='anno-04'>広告運用</span>の「本質」とはかけ離れたものでした。<br><br>彼らのアピールポイントは、<br>"いかに自分たちが大きな代理店であるか"<br>その他大手以外の代理店も、<br>相対的に自分たちの「大きさと実績」を伝えていました。<br><br>中身がすっからかんの自慢大会同然。<br>まだ、素人たちが歌うのど自慢大会の方が楽しいくらいです。<br><br>広告のように<span data-modal='anno-06'>流動的</span>なビジネスでは、<br>実績よりももっとシンプルに時代に合わせて、<br>どのように<span data-modal='anno-05'>マーケティング</span>をとらえて、<br>それを真面目にやるか、この発想こそが重要です。<br><br>大企業がたくさんの案件を受ければ、<br>その中から失敗を隠して成功談のみを実績とすることが出来るからです。<br>さらに、その成功談が本当かどうかを確認するすべもありません。<br><br>ここで、ひとつ断言させてください。<br><span class="hightlight">"<span data-modal='anno-04'>広告運用</span>の成否に会社の規模は関係ありません"<br></span><br>重要なのは、<br>(大きさも含めて)その会社が何者かではなく、<br>その会社がどんな<span data-modal='anno-04'>広告運用</span>をしてくれるかということです。<br><br>男子なら皆知っている、<br>「エアジョーダン」誕生の秘話を少しお話ししましょう。<br><br>エアジョーダンが誕生するまでNIKEはまだ企業としては弱小の部類でした。<br>バスケ界に新星マイケル・ジョーダンが<span data-modal='anno-07'>NBA</span>に進出 するころ、<br>各スニーカーメーカーはこぞって彼の<span data-modal='anno-08'>スポンサー</span>になりたがっていました。<br><br>NIKEも名乗りをあげた一社でしたが、<span data-modal='anno-09'>ブランド力</span>も<span data-modal='anno-10'>財力</span>もありません。<br>そもそもマイケル・ジョーダンはNIKEをそこまで好きではなかったので、<br>社内では当然諦めムードでした。<br><br>しかし、たった一人のNIKEの社員がそれを覆したのです！<br><br>アディダスやコンバースといった名だたるメーカーが、<br>彼に<span data-modal='anno-11'>プレゼン</span>した内容は一様にして次のようなものでした。<br><br>"我が社の靴は言うまでもなく高品質で、<br>歴代の名だたる選手が履いている。<br>君のような将来有望な選手には相応しい！"<br><br>一方、NIKEのとある社員は次のようなことを言いました。<br><br>"靴はただの靴だ。<br><br>誰かが履いた時に意味が生まれる。<br><br>その靴にみんな憧れるようになる。<br><br>だからあなたが主役(<span data-modal='anno-12'>アイコン</span>)になる新しい靴を作ろう"<br><br><br>そして結果として、<br><span class="hightlight">ジョーダンは、自社の権威を売りにした企業を一蹴し、<br>自分の<span data-modal='anno-02'>権威性</span>を引き出してくれる企業を選んだのです。<br></span><br>さらにNIKEはマイケル・ジョーダンのわがままを聞き、<br><span data-modal='anno-07'>NBA</span>の規定をやぶることになるデザインをつくりました(当然他社はそのような提案はせず)。<br><br>結果として罰金は払いましたが、その金額が霞むくらいの莫大な利益、<br>そして存在感を生み出すまでになったのは言うまでもありません。<br><br>大手はいつも危ない橋を渡らず、楽な武器を使い、<br>最小限のパワーで最大の利益を生むための<br>小手先ばかりのテクニックを使いがちです。<br>それは決して悪いことではありません。<br><br><span class="hightlight">ただ、本当に顧客のために仕事をしているのかを見極める必要があります。<br></span><br>一度、冷静に考えてみてください。<br>大手だけがすごいのであれば、<br>なぜ、それ以外の会社は事業としてやっていけているのか?<br><br>大手代理店を辞めた<span data-modal='anno-14'>トップマーケター</span>が、<br><span data-modal='anno-13'>零細ベンチャー</span>を起業したらどうなるのだろうか?<br><br>規模だけが重要なのであれば、<br>こういった会社はうまくいかないはずでしょう。<br><br>でも実際は、大手以外の<span data-modal='anno-15'>中堅・零細代理店</span>でもビジネスが成立している。<br><br>なぜなのか?<br>その答えは「Google」にあります。<br>もしくは、Googleも含めた「<span data-modal='anno-16'>GAFAM</span>」のような存在がカギを握っています。<br><br>彼らの前では、<br><span data-modal='anno-01'>広告代理店</span>の規模が大きかろうが小さかろうが、<br>まったく意味をなしません。<br><br>どの<span data-modal='anno-01'>広告代理店</span>に依頼をしても、行き着く先はGoogleだからです。<br><br>もし、あなたが大手至上主義であるならば、<br><span data-modal='anno-17'>Google広告</span>の<span data-modal='anno-18'>AI</span>が提案する答えをを鵜呑みにしまくればいいのです。<br>Googleこそが「世界の最大手」ですから。<br><br>さて、ここまで読めば、<br>あなたが真に押さえるべきポイントが見えてきたでしょう。<br><br><span class="hightlight"><span data-modal='anno-04'>広告運用</span>で重要なのは、<br>代理店がどのような<span data-modal='anno-04'>広告運用</span>をし、どのようにGoogleに依頼をするか。<br>会社の規模はまったく関係ありません。<br></span><br>とはいえ、大手<span data-modal='anno-01'>広告代理店</span>も悪いことばかりではありません。<br>そう、「<span data-modal='anno-02'>権威性</span>」があるから。<br><br>長いものには巻かれろ、<br>勝てば官軍、<br>強きを助け弱きをくじく・・・<br><br>歴史やルールはそうやって作られてきたのですから、<br>圧倒的な権威には皆、頭が上がりません。<br><br>だからもし、あなたがどうしても、<br>「失敗の責任」を負いたくなければ、<br>ぜひ電通や博報堂を選んでください。<br><br>仮に失敗しても、<br>「絶対的な権威に依頼してもうまくいかなかったんだから仕方がない」<br>と上司は納得してくれるはず。<br><br>自分が失敗の責任を負いたくない<br>上司に<span data-modal='anno-19'>稟議</span>を通す材料や<span data-modal='anno-20'>決裁者</span>を納得させる材料がほしい<br>"大手に頼んだのに"上手くいかなかったんだという言い訳の材料がほしい<br><br><span class="hightlight">思考を停止して<span data-modal='anno-21'>保身</span>に走るでのあれば、<br>大手<span data-modal='anno-01'>広告代理店</span>に依頼することはベストな選択だと言えます。 <br></span><br>大手に依頼することが完全に「悪」なのではありません。<br>あなたの役割や目的に応じて、大手<span data-modal='anno-01'>広告代理店</span>を活用すれば良いのです。<br>そして、我々はこのような皮肉さえも正しく理解できる方とだけ仕事をしています。<br><br><span class="hightlight">上司への建前や自身の<span data-modal='anno-21'>保身</span>のためではなく、<br>「ビジネスとしての成果」<br>を本気で追い求める方であれば、<br>我々は喜んで力をお貸しします。<br></span>`,
        annotations: [
          {
            modal: "anno-01",
            term: "広告代理店",
            definition:
              "企業の代わりに広告の企画・制作・掲載を行う会社。クライアントと媒体の仲介役。",
          },
          {
            modal: "anno-02",
            term: "権威性",
            definition:
              "社会的地位や実績により、信頼や影響力を持つこと。大企業が持つブランド力。",
          },
          {
            modal: "anno-03",
            term: "コンペ",
            definition:
              "複数の企業が同じ案件に対して提案を競う競争入札。コンペティションの略。",
          },
          {
            modal: "anno-04",
            term: "広告運用",
            definition:
              "広告の配信設定や予算管理、効果測定などを継続的に行うマーケティング業務。",
          },
          {
            modal: "anno-05",
            term: "マーケティング",
            definition:
              "商品やサービスを効果的に販売するための市場調査や宣伝活動の総称。",
          },
          {
            modal: "anno-06",
            term: "流動的",
            definition:
              "状況が絶えず変化し、固定されていない状態。柔軟な対応が求められる性質。",
          },
          {
            modal: "anno-07",
            term: "NBA",
            definition:
              "北米プロバスケットボールリーグ。世界最高峰のバスケットボール競技組織。",
          },
          {
            modal: "anno-08",
            term: "スポンサー",
            definition:
              "イベントや選手に資金提供し、宣伝効果を得る企業。広告主とも呼ばれる。",
          },
          {
            modal: "anno-09",
            term: "ブランド力",
            definition:
              "企業や商品が持つ知名度や信頼性、イメージの強さ。市場での影響力を表す。",
          },
          {
            modal: "anno-10",
            term: "財力",
            definition:
              "企業や個人が持つ資金力。経済的な実力や投資能力を指す。",
          },
          {
            modal: "anno-11",
            term: "プレゼン",
            definition:
              "企画や提案を相手に説明すること。プレゼンテーションの略語。",
          },
          {
            modal: "anno-12",
            term: "アイコン",
            definition:
              "象徴的存在。その分野を代表する人物や物事を指すマーケティング用語。",
          },
          {
            modal: "anno-13",
            term: "零細ベンチャー",
            definition:
              "規模が小さく従業員数も少ない新興企業。大企業に対する小規模な会社。",
          },
          {
            modal: "anno-14",
            term: "トップマーケター",
            definition:
              "マーケティング分野で高い実績と専門知識を持つ優秀な専門家。",
          },
          {
            modal: "anno-15",
            term: "中堅・零細代理店",
            definition:
              "大手ではない中小規模の広告代理店。従業員数や売上が比較的少ない会社。",
          },
          {
            modal: "anno-16",
            term: "GAFAM",
            definition:
              "Google、Apple、Facebook、Amazon、Microsoftの5大IT企業の総称。",
          },
          {
            modal: "anno-17",
            term: "Google広告",
            definition:
              "Googleが提供するインターネット広告配信サービス。検索結果などに広告表示。",
          },
          {
            modal: "anno-18",
            term: "AI",
            definition:
              "人工知能。コンピューターが人間のような判断や学習を行う技術。",
          },
          {
            modal: "anno-19",
            term: "稟議",
            definition:
              "組織内で提案や企画を上司に承認してもらうための手続きや書類。",
          },
          {
            modal: "anno-20",
            term: "決裁者",
            definition:
              "企業で最終的な意思決定を行う権限を持つ役職者。承認権限を持つ人。",
          },
          {
            modal: "anno-21",
            term: "保身",
            definition:
              "自分の地位や立場を守ろうとする行為。失敗を避けて安全な選択をすること。",
          },
        ],
      },
      en: {
        title:
          "How to Choose an Advertising Agency ~ If You Don't Want to Take Responsibility for Failure, Flock to \"Large Companies\"! If You Want Success, Don't Focus on Size! ~",
        category: "",
        content: `<span class="hightlight">There is only one advantage of large corporations</span>.<br><br>"Being a large corporation".<br><br>"What is this guy talking about?" you might think.<br><br>To put it in simpler terms, <span class="hightlight">"authority" is the only advantage</span>.<br><br>I once participated in a <span data-modal='anno-03'>competition</span> for an advertising project. It was a large-scale <span data-modal='anno-03'>competition</span> with various <span data-modal='anno-01'>advertising agencies</span> participating, from major to small companies.<br><br>Honestly, I was looking forward to hearing what kind of <span data-modal='anno-11'>presentation</span> the elites from "major" <span data-modal='anno-01'>advertising agencies</span> would give. However, the content was far from the "essence" of <span data-modal='anno-04'>advertising operations</span>.<br><br>Their selling point was "how big an agency they are", and other non-major agencies also relatively conveyed their "size and track record".<br><br>It was like a bragging contest with empty content. Even an amateur singing contest would be more entertaining.<br><br>In <span data-modal='anno-06'>fluid</span> businesses like advertising, rather than track records, it's more important to simply adapt to the times and seriously consider how to approach <span data-modal='anno-05'>marketing</span>.<br><br>When large corporations take on many projects, they can hide failures and use only success stories as their track record. Furthermore, there's no way to verify whether those success stories are true.<br><br>Let me make one assertion here: <span class="hightlight">"Company size has nothing to do with the success or failure of <span data-modal='anno-04'>advertising operations</span>"</span><br><br>What's important is not what kind of company it is (including its size), but what kind of <span data-modal='anno-04'>advertising operations</span> that company will provide.<br><br>Let me tell you a little about the birth story of "Air Jordan" that all men know.<br><br>Before Air Jordan was born, NIKE was still a small company. When the new basketball star Michael Jordan was entering the <span data-modal='anno-07'>NBA</span>, various sneaker manufacturers were competing to become his <span data-modal='anno-08'>sponsor</span>.<br><br>NIKE was one of the companies that stepped up, but they had neither <span data-modal='anno-09'>brand power</span> nor <span data-modal='anno-10'>financial strength</span>. Since Michael Jordan didn't particularly like NIKE, there was naturally a mood of giving up within the company.<br><br>However, just one NIKE employee overturned that!<br><br>The content that famous manufacturers like Adidas and Converse <span data-modal='anno-11'>presented</span> to him was uniformly as follows: "Our company's shoes are naturally high quality, worn by famous players throughout history. They're suitable for a promising player like you!"<br><br>On the other hand, a certain NIKE employee said something like this: "Shoes are just shoes. They gain meaning when someone wears them. Everyone will aspire to those shoes. So let's create new shoes where you become the main character (<span data-modal='anno-12'>icon</span>)"<br><br>As a result, <span class="hightlight">Jordan dismissed companies that sold their corporate authority and chose a company that would bring out his own <span data-modal='anno-02'>authority</span></span>.<br><br>Furthermore, NIKE listened to Michael Jordan's demands and created a design that would break <span data-modal='anno-07'>NBA</span> regulations (naturally, other companies made no such proposals).<br><br>As a result, they paid fines, but it goes without saying that they generated enormous profits and presence that dwarfed those amounts.<br><br>Major companies tend to avoid risky moves, use easy weapons, and employ minor techniques to generate maximum profit with minimum power. That's not necessarily a bad thing.<br><br><span class="hightlight">However, it's necessary to determine whether they're truly working for their customers</span>.<br><br>Think about it calmly. If only major companies were great, why can other companies survive as businesses?<br><br>What would happen if a <span data-modal='anno-14'>top marketer</span> who quit a major agency started a <span data-modal='anno-13'>small venture</span>?<br><br>If only scale mattered, such companies shouldn't succeed.<br><br>But in reality, <span data-modal='anno-15'>medium and small agencies</span> other than major ones can also establish viable businesses.<br><br>Why? The answer lies in "Google" or key players like "<span data-modal='anno-16'>GAFAM</span>" including Google.<br><br>In front of them, whether an <span data-modal='anno-01'>advertising agency</span> is large or small makes absolutely no difference.<br><br>No matter which <span data-modal='anno-01'>advertising agency</span> you request, the destination is Google.<br><br>If you're a major company supremacist, you should just blindly accept the answers proposed by <span data-modal='anno-17'>Google Ads</span> <span data-modal='anno-18'>AI</span>. After all, Google is the "world's largest company".<br><br>Now, having read this far, you should see the points you truly need to grasp.<br><br><span class="hightlight">What's important in <span data-modal='anno-04'>advertising operations</span> is what kind of <span data-modal='anno-04'>advertising operations</span> the agency performs and how they make requests to Google. Company size is completely irrelevant</span>.<br><br>That said, major <span data-modal='anno-01'>advertising agencies</span> aren't all bad. Yes, because they have "<span data-modal='anno-02'>authority</span>".<br><br>Go with the flow, might makes right, help the strong and oppress the weak... History and rules have been made this way, so everyone bows to overwhelming authority.<br><br>So if you absolutely don't want to bear the "responsibility for failure", please choose Dentsu or Hakuhodo.<br><br>Even if you fail, your boss should understand: "It couldn't be helped since we requested absolute authority and it still didn't work out."<br><br>You don't want to bear responsibility for failure, you want material to get <span data-modal='anno-19'>approval</span> from your boss or convince <span data-modal='anno-20'>decision makers</span>, you want excuse material saying "we requested a major company but" it didn't work out.<br><br><span class="hightlight">If you're going to stop thinking and focus on <span data-modal='anno-21'>self-preservation</span>, requesting a major <span data-modal='anno-01'>advertising agency</span> can be said to be the best choice</span>.<br><br>Requesting major companies isn't completely "evil". You should utilize major <span data-modal='anno-01'>advertising agencies</span> according to your role and purpose. And we only work with those who can correctly understand even this irony.<br><br><span class="hightlight">If you're not seeking excuses for your boss or your own <span data-modal='anno-21'>self-preservation</span>, but seriously pursuing "business results", we'll be happy to lend our assistance</span>.`,
        annotations: [
          {
            modal: "anno-01",
            term: "Advertising Agency",
            definition:
              "A company that plans, creates, and places advertisements on behalf of businesses. Acts as an intermediary between clients and media.",
          },
          {
            modal: "anno-02",
            term: "Authority",
            definition:
              "Having trust and influence through social position or achievements. The brand power that large companies possess.",
          },
          {
            modal: "anno-03",
            term: "Competition",
            definition:
              "Competitive bidding where multiple companies compete with proposals for the same project. Short for competition.",
          },
          {
            modal: "anno-04",
            term: "Ad Operations",
            definition:
              "Marketing work that continuously handles ad delivery settings, budget management, and performance measurement.",
          },
          {
            modal: "anno-05",
            term: "Marketing",
            definition:
              "General term for market research and promotional activities to effectively sell products or services.",
          },
          {
            modal: "anno-06",
            term: "Fluid",
            definition:
              "A state where situations constantly change and are not fixed. A nature that requires flexible response.",
          },
          {
            modal: "anno-07",
            term: "NBA",
            definition:
              "North American professional basketball league. The world's highest-level basketball organization.",
          },
          {
            modal: "anno-08",
            term: "Sponsor",
            definition:
              "A company that provides funding to events or athletes and gains promotional effects. Also called an advertiser.",
          },
          {
            modal: "anno-09",
            term: "Brand Power",
            definition:
              "The strength of recognition, credibility, and image that companies or products possess. Represents market influence.",
          },
          {
            modal: "anno-10",
            term: "Financial Power",
            definition:
              "The funding capability that companies or individuals possess. Refers to economic strength or investment ability.",
          },
          {
            modal: "anno-11",
            term: "Presentation",
            definition:
              "Explaining plans or proposals to others. Abbreviation of presentation.",
          },
          {
            modal: "anno-12",
            term: "Icon",
            definition:
              "Symbolic existence. A marketing term referring to people or things that represent a field.",
          },
          {
            modal: "anno-13",
            term: "Small Venture",
            definition:
              "Small-scale startup companies with few employees. Small companies compared to large enterprises.",
          },
          {
            modal: "anno-14",
            term: "Top Marketer",
            definition:
              "Excellent specialists with high achievements and expertise in the marketing field.",
          },
          {
            modal: "anno-15",
            term: "Mid-tier & Small Agencies",
            definition:
              "Medium to small-scale advertising agencies that are not major players. Companies with relatively few employees and revenue.",
          },
          {
            modal: "anno-16",
            term: "GAFAM",
            definition:
              "Collective term for the five major IT companies: Google, Apple, Facebook, Amazon, Microsoft.",
          },
          {
            modal: "anno-17",
            term: "Google Ads",
            definition:
              "Internet advertising delivery service provided by Google. Displays ads in search results and other locations.",
          },
          {
            modal: "anno-18",
            term: "AI",
            definition:
              "Artificial Intelligence. Technology that enables computers to make human-like judgments and learning.",
          },
          {
            modal: "anno-19",
            term: "Approval Process",
            definition:
              "Procedures or documents for getting proposals or plans approved by superiors within an organization.",
          },
          {
            modal: "anno-20",
            term: "Decision Maker",
            definition:
              "A position holder with authority to make final decisions in a company. Person with approval authority.",
          },
          {
            modal: "anno-21",
            term: "Self-Preservation",
            definition:
              "Actions to protect one's position or standing. Making safe choices to avoid failure.",
          },
        ],
      },
      zh: {
        title:
          '如何选择广告代理商～如果不想为失败负责，就投靠"大公司"！如果想要成功，就不要关注规模！～',
        category: "",
        content: `<span class="hightlight">大企业的优势只有一个</span>。<br><br>"就是大企业"这一点。<br><br>"这家伙在说什么？"您可能会这样想。<br><br>用更通俗的话来说，<span class="hightlight">"权威性"就是唯一的优势</span>。<br><br>我曾经参加过某个广告项目的<span data-modal='anno-03'>竞标</span>。这是一个大规模的<span data-modal='anno-03'>竞标</span>，从大型到小型的各种<span data-modal='anno-01'>广告代理商</span>都参与其中。<br><br>说实话，我很期待听到"大型"<span data-modal='anno-01'>广告代理商</span>精英们会进行什么样的<span data-modal='anno-11'>演示</span>。然而，内容却与<span data-modal='anno-04'>广告运营</span>的"本质"相去甚远。<br><br>他们的卖点是"自己是多么大的代理商"，其他非大型代理商也相对传达了自己的"规模和业绩"。<br><br>这就像一场内容空洞的吹嘘大会。业余歌唱比赛都会更有趣一些。<br><br>在像广告这样<span data-modal='anno-06'>流动性</span>强的业务中，比起业绩，更重要的是简单地适应时代，认真考虑如何处理<span data-modal='anno-05'>营销</span>。<br><br>大企业接下很多项目时，可以隐藏失败，只将成功案例作为业绩。而且，也没有办法确认这些成功案例是否属实。<br><br>在这里，让我断言一点：<span class="hightlight">"<span data-modal='anno-04'>广告运营</span>的成败与公司规模无关"</span><br><br>重要的不是这家公司是什么样的（包括规模），而是这家公司会提供什么样的<span data-modal='anno-04'>广告运营</span>。<br><br>让我稍微讲一下男士们都知道的"Air Jordan"诞生秘话。<br><br>在Air Jordan诞生之前，NIKE还是一家弱小的公司。当篮球界新星迈克尔·乔丹进入<span data-modal='anno-07'>NBA</span>时，各大运动鞋制造商都争相想成为他的<span data-modal='anno-08'>赞助商</span>。<br><br>NIKE也是其中一家，但既没有<span data-modal='anno-09'>品牌力</span>也没有<span data-modal='anno-10'>财力</span>。而且迈克尔·乔丹本来就不太喜欢NIKE，所以公司内部自然有放弃的氛围。<br><br>然而，NIKE的一名员工推翻了这种局面！<br><br>阿迪达斯和匡威等知名制造商向他<span data-modal='anno-11'>展示</span>的内容一律如下："我们公司的鞋子不用说质量很高，历代著名选手都在穿。适合您这样有前途的选手！"<br><br>另一方面，NIKE的某位员工说了这样的话："鞋子只是鞋子。当有人穿上时才有意义。大家都会憧憬那双鞋。所以让我们制作您成为主角（<span data-modal='anno-12'>偶像</span>）的新鞋子吧"<br><br>结果，<span class="hightlight">乔丹一脚踢开了那些以自己公司权威为卖点的企业，选择了能够引出自己<span data-modal='anno-02'>权威性</span>的企业</span>。<br><br>而且NIKE还听取了迈克尔·乔丹的任性要求，制作了会违反<span data-modal='anno-07'>NBA</span>规定的设计（当然其他公司没有这样的提案）。<br><br>结果虽然支付了罚款，但不用说，产生了让这个金额相形见绌的巨大利润和存在感。<br><br>大企业总是不愿冒险，使用简单的武器，倾向于使用小技巧以最小的力量产生最大的利润。这并不一定是坏事。<br><br><span class="hightlight">只是，需要判断是否真的在为客户工作</span>。<br><br>请冷静地思考一下。如果只有大企业才厉害，为什么其他公司能够作为事业存续下去？<br><br>如果辞去大型代理商的<span data-modal='anno-14'>顶级营销人员</span>创办<span data-modal='anno-13'>小型风险企业</span>会怎样？<br><br>如果只有规模重要，这样的公司应该不会成功。<br><br>但实际上，除了大企业之外的<span data-modal='anno-15'>中小型代理商</span>也能成立业务。<br><br>为什么？答案在于"Google"，或者包括Google在内的"<span data-modal='anno-16'>GAFAM</span>"这样的存在是关键。<br><br>在他们面前，<span data-modal='anno-01'>广告代理商</span>的规模大小完全没有意义。<br><br>无论委托哪个<span data-modal='anno-01'>广告代理商</span>，最终目的地都是Google。<br><br>如果您是大企业至上主义者，那就盲目接受<span data-modal='anno-17'>Google广告</span>的<span data-modal='anno-18'>AI</span>提出的答案就好了。毕竟Google是"世界最大企业"。<br><br>现在，读到这里，您应该能看到真正需要掌握的要点了。<br><br><span class="hightlight"><span data-modal='anno-04'>广告运营</span>的重要之处在于代理商进行什么样的<span data-modal='anno-04'>广告运营</span>，如何向Google提出要求。公司规模完全无关</span>。<br><br>话虽如此，大型<span data-modal='anno-01'>广告代理商</span>也不全是坏事。是的，因为有"<span data-modal='anno-02'>权威性</span>"。<br><br>随大流，成者为王败者为寇，欺软怕硬...历史和规则就是这样制定的，所以大家都对压倒性的权威低头。<br><br>所以如果您绝对不想承担"失败责任"，请选择电通或博报堂。<br><br>即使失败了，上司也会理解："委托了绝对权威都没有成功，那也没办法"。<br><br>不想承担失败责任，想要向上司通过<span data-modal='anno-19'>审批</span>的材料或说服<span data-modal='anno-20'>决策者</span>的材料，想要"委托了大企业但是"没有成功的借口材料。<br><br><span class="hightlight">如果要停止思考专注于<span data-modal='anno-21'>自保</span>，委托大型<span data-modal='anno-01'>广告代理商</span>可以说是最佳选择</span>。<br><br>委托大企业并不完全是"恶"。您应该根据自己的角色和目的来利用大型<span data-modal='anno-01'>广告代理商</span>。而且，我们只与能够正确理解这种讽刺的人合作。<br><br><span class="hightlight">如果不是为了向上司找借口或自己的<span data-modal='anno-21'>自保</span>，而是真心追求"业务成果"，我们很乐意提供帮助</span>。`,
        annotations: [
          {
            modal: "anno-01",
            term: "广告代理公司",
            definition:
              "代替企业进行广告策划、制作、投放的公司。是客户与媒体的中介角色。",
          },
          {
            modal: "anno-02",
            term: "权威性",
            definition:
              "凭借社会地位或实绩拥有信任和影响力。大企业拥有的品牌力。",
          },
          {
            modal: "anno-03",
            term: "竞标",
            definition:
              "多家企业针对同一项目进行提案竞争的竞争投标。竞争的简称。",
          },
          {
            modal: "anno-04",
            term: "广告运营",
            definition:
              "持续进行广告投放设定、预算管理、效果测定等的营销业务。",
          },
          {
            modal: "anno-05",
            term: "营销",
            definition:
              "为有效销售商品或服务而进行的市场调研和宣传活动的总称。",
          },
          {
            modal: "anno-06",
            term: "流动性",
            definition: "情况不断变化，未固定的状态。需要灵活应对的性质。",
          },
          {
            modal: "anno-07",
            term: "NBA",
            definition: "北美职业篮球联盟。世界最高水平的篮球竞技组织。",
          },
          {
            modal: "anno-08",
            term: "赞助商",
            definition:
              "向活动或选手提供资金并获得宣传效果的企业。也称为广告主。",
          },
          {
            modal: "anno-09",
            term: "品牌力",
            definition:
              "企业或商品拥有的知名度、可信度、形象的强度。表示市场影响力。",
          },
          {
            modal: "anno-10",
            term: "财力",
            definition: "企业或个人拥有的资金实力。指经济实力或投资能力。",
          },
          {
            modal: "anno-11",
            term: "演示",
            definition: "向对方说明企划或提案。演示文稿的简称。",
          },
          {
            modal: "anno-12",
            term: "标志性存在",
            definition: "象征性存在。指代表该领域的人物或事物的营销术语。",
          },
          {
            modal: "anno-13",
            term: "小型创业公司",
            definition:
              "规模小、员工数少的新兴企业。相对于大企业的小规模公司。",
          },
          {
            modal: "anno-14",
            term: "顶级营销专家",
            definition: "在营销领域拥有高实绩和专业知识的优秀专家。",
          },
          {
            modal: "anno-15",
            term: "中小型代理商",
            definition:
              "非大型的中小规模广告代理公司。员工数和营业额相对较少的公司。",
          },
          {
            modal: "anno-16",
            term: "GAFAM",
            definition:
              "Google、Apple、Facebook、Amazon、Microsoft五大IT企业的总称。",
          },
          {
            modal: "anno-17",
            term: "Google广告",
            definition:
              "Google提供的互联网广告投放服务。在搜索结果等位置显示广告。",
          },
          {
            modal: "anno-18",
            term: "AI",
            definition: "人工智能。计算机进行类似人类判断和学习的技术。",
          },
          {
            modal: "anno-19",
            term: "申请审批",
            definition:
              "在组织内为获得上级对提案或企划的批准而进行的手续或文件。",
          },
          {
            modal: "anno-20",
            term: "决策者",
            definition:
              "在企业中拥有最终决策权限的职位人员。拥有批准权限的人。",
          },
          {
            modal: "anno-21",
            term: "自保",
            definition: "试图保护自己地位或立场的行为。避免失败选择安全选项。",
          },
        ],
      },
    },
  },
  {
    id: "02",
    link: "/ad/02",
    translations: {
      ja: {
        title: "Googleのお膝元でSEO教を信奉する哀れな信者たちのお話し",
        category: "",
        content: `少し昔、2024年の3月から5月にかけてのこと。<br><span data-modal='anno-02'>Google</span>という神様がやらかしました。<br><br>それと同時に、<br>「俺たちのやっていたことは間違っていなかった!」<br><br>そんな声がある業界で飛び交いました。<br>そう、<span data-modal='anno-01'>SEO</span>を中心とする<span data-modal='anno-05'>マーケティング業界</span>です。<br><br><span data-modal='anno-02'>Google</span>の<span data-modal='anno-03'>アルゴリズム</span>が漏洩したことは業界を大きく騒がせました。<br><br><div class="border border-black dark:border-white p-5">流出についての詳細が書かれた記事を要約: <br><span data-modal='anno-02'>Google</span>の検索<span data-modal='anno-03'>アルゴリズム</span>に関する内部文書がリークされ、14,000以上のランキングの特徴が 明らかに。これにより、<span data-modal='anno-02'>Google</span>が長年否定してきた<span data-modal='anno-06'>ドメインオーソリティ</span>の存在や<span data-modal='anno-07'>クリック数</span>の利用 など、多くの事実が確認されました。<span data-modal='anno-08'>Pandaアルゴリズム</span>の仕組みや、<span data-modal='anno-09'>著者情報</span>、<span data-modal='anno-10'>リンク</span>の価値評 価方法なども明確になりました。この情報は、<span data-modal='anno-11'>SEO戦略</span>の見直しにつながる可能性があり、良質な <span data-modal='anno-12'>コンテンツ</span>作成と<span data-modal='anno-13'>プロモーション</span>の重要性を再確認させるものとなっています。また、この漏洩によ り、多くの<span data-modal='anno-14'>SEO専門家</span>の主張が正しかったことが証明されました。<br>出典:<a href='https://ipullrank.com/google-algo-leak' class="underline" target='_blank' rel='noopener noreferrer'>The <span data-modal='anno-02'>Google</span> Algo Leak: Actionable Insights, Best New Practices, and Killer Tactics</a><br>補足:<span data-modal='anno-02'>Google</span>側も正式に流出を認める結果となりました(<a href='https://www.itmedia.co.jp/news/articles/2405/31/news133.html' class="underline" target='_blank' rel='noopener noreferrer'>参考記事</a>)。</div><br>これまで<span data-modal='anno-02'>Google</span>という神様がつくった暗黙のルールは<span data-modal='anno-17'>ブラックボックス</span>に包まれており、<br>あくまでプロと名乗る人々の「<span data-modal='anno-18'>憶測</span>」で<span data-modal='anno-15'>検索エンジン</span>の上位を狙っていたのです。<br>それが、<span data-modal='anno-03'>アルゴリズム</span>の流出によって「<span data-modal='anno-18'>憶測</span>」が一部「真実」であることが明らかになりました。<br><br><span data-modal='anno-19'>SEO業者</span>は<span data-modal='anno-20'>クライアント</span>に「やっぱりこの理論が正しかったんです」と豪語。<br><span data-modal='anno-21'>SEO対策</span>をしている人たちも「この業者に頼んでいて正解だった」と安心。<br><br>私はこの状況を見て思いました。<br><span data-modal='anno-22'>リーマンショック</span>のときと同じだと。<br><br>銀行に<span data-modal='anno-23'>投資</span>して、<span data-modal='anno-24'>資産</span>が増加すれば、功績は銀行の担当者です。<br>一方で、<span data-modal='anno-24'>資産</span>が減少すれば、<span data-modal='anno-22'>リーマンショック</span>のせい。<br><br>つまり、<br>銀行の担当者は責任を負わない無敵の立場であり、<br>責任を負えないほど不透明世界ということです。<br><br>今回の<span data-modal='anno-03'>アルゴリズム</span>の流出でわかったことは所詮一部の方針だけです。<br>例えるのであれば、<br>日本のどこかには徳川の埋蔵金があります!<br>とわかったようなもの。<br><br>事実がわかったところで、場所がわからなければ掘り起こすことはできません。<br><br><span data-modal='anno-01'>SEO</span>が<span data-modal='anno-05'>マーケティング業界</span>の中でも奇異なのは、<br><span data-modal='anno-29'>広告</span>や<span data-modal='anno-28'>ダイレクトマーケティング</span>と違って、<br>回答がなさすぎるという点です。<br><br><span data-modal='anno-21'>SEO対策</span>にお金をつぎ込む企業は<br>そもそも<span data-modal='anno-01'>SEO</span>の本質はわかっていません。<br>だから専門業者に頼みます。<br><br>安い業者だと成果がでなかったからといって、<br>"実績がある"と謳う高い業者へシフトしていきます。<br>そうしてどんどんお金を投下。<br><br>「<span data-modal='anno-23'>投資</span>」だと思っているのでしょうが、実はこれ、「<span data-modal='anno-25'>投機</span>」と変わりません。<br>理論もなく、1000倍の<span data-modal='anno-26'>レバレッジ</span>をかけて<span data-modal='anno-27'>FX取引</span>しているようなものです。<br><br>"専門"業者だから当然、<span data-modal='anno-01'>SEO</span>の真髄を理解しているとお思いでしょう。<br><br>でも業者も理解はしていません。<br>というか理解できません。<br>なぜなら、答えがなさすぎる世界だからです。<br><br>戦国時代では、<br>馬に人が乗る前にいななければ「吉」<br>乗った後にいななけば「凶」<br>と判断していたそうです。<br><br>「今日は、乗る前に馬がいなないたから戦に勝てるぞ！」<br>「高いけど実績のある専門企業に依頼すれば検索上位に表示できるぞ！」<br><br>同じくらい根拠のない"いななき"に聞こえます。<br><br>でも、埋蔵金があることがわかったのですから、それはよかったことです。<br><br>専門業者にお金を渡して、<br>「ここ掘れワンワン」と<br>地道に一箇所ずつ掘り起こしていけばよいのではないでしょうか。<br><br>運が良ければ100年以内に砂金の一粒でも見つかるかもしれません<br>が、きっと一生花咲かないじいさんになってしまうでしょう。<br><br>あと、1つ覚えておいてほしいことがあります。<br><span data-modal='anno-02'>Google</span>はルールを司る神様です。<br>変更しないほど愚かなわけがありません。<br><br>また、もし、変更しない場合が万が一あったとしても、<br>ルールが明確なら工夫の余地は少なく、<br>単純な資本の勝負となるでしょう。<br><br>いずれにせよ、<br><span data-modal='anno-01'>SEO</span>にお金を投下し続けることはギャンブルのようにしか思えません。<br><br>企業の目的はなんでしょうか?<br>そもそも検索の上位に自サイトが表示されることではありません。<br><br>利益を得ることです。<br><br>お金儲けをするのではなく、<br><span data-modal='anno-02'>Google</span>様の探索調査をする熱心な研究者であればそれはそれはよいお金の使い道です。<br><br>ぜひ、がんばってください。<br><span data-modal='anno-21'>SEO対策</span>に投下し続けるお金があれば、<br><br>より確かに合理的にお金を増やす方法はごまんとあります。<br>もしあなたが善良なだけの研究者ではなく、<br>企業利益をあげる責任のある探求者であれば我々まで連絡をください。<br>`,
        annotations: [
          {
            modal: "anno-01",
            term: "SEO",
            definition:
              "検索エンジン最適化。GoogleやYahooなどの検索結果で上位表示されやすくする技術。",
          },
          {
            modal: "anno-02",
            term: "Google",
            definition:
              "世界最大の検索エンジンを運営するアメリカのIT企業。インターネット検索の代名詞。",
          },
          {
            modal: "anno-03",
            term: "アルゴリズム",
            definition:
              "検索結果の順位を決める計算方法やルール。Googleが秘密にしている仕組み。",
          },
          {
            modal: "anno-04",
            term: "漏洩（リーク）",
            definition:
              "秘密の情報が外部に流出すること。企業の機密データが意図せず公開される状態。",
          },
          {
            modal: "anno-05",
            term: "マーケティング業界",
            definition:
              "商品やサービスの宣伝・販売促進を行う業界。広告代理店やコンサル会社など。",
          },
          {
            modal: "anno-06",
            term: "ドメインオーソリティ",
            definition:
              "ウェブサイトの権威性や信頼度を表す指標。検索順位に影響するとされる要素。",
          },
          {
            modal: "anno-07",
            term: "クリック数",
            definition:
              "ウェブページやリンクがクリックされた回数。サイトの人気度を測る指標のひとつ。",
          },
          {
            modal: "anno-08",
            term: "Pandaアルゴリズム",
            definition:
              "Googleの検索アルゴリズムのひとつ。低品質なサイトの順位を下げる仕組み。",
          },
          {
            modal: "anno-09",
            term: "著者情報",
            definition:
              "記事やコンテンツを書いた人の詳細情報。信頼性の判断材料として重視される。",
          },
          {
            modal: "anno-10",
            term: "リンク",
            definition:
              "他のウェブページへの接続。多く張られているサイトほど評価が高いとされる。",
          },
          {
            modal: "anno-11",
            term: "SEO戦略",
            definition:
              "検索上位を狙うための計画や手法。キーワード選定やコンテンツ作成の方針。",
          },
          {
            modal: "anno-12",
            term: "コンテンツ",
            definition:
              "ウェブサイトに掲載される文章、画像、動画などの情報や内容。",
          },
          {
            modal: "anno-13",
            term: "プロモーション",
            definition:
              "商品やサービスの宣伝活動。認知度向上や売上増加を目的とした販促活動。",
          },
          {
            modal: "anno-14",
            term: "SEO専門家",
            definition:
              "検索エンジン最適化の知識と技術を持つプロフェッショナル。上位表示の専門家。",
          },
          {
            modal: "anno-15",
            term: "検索エンジン",
            definition:
              "GoogleやYahooなど、インターネット上の情報を検索するシステム。",
          },
          {
            modal: "anno-16",
            term: "上位表示",
            definition:
              "検索結果の上の方に表示されること。多くの人に見てもらいやすくなる。",
          },
          {
            modal: "anno-17",
            term: "ブラックボックス",
            definition:
              "内部の仕組みが外部から見えない状態。中身が秘密にされているシステム。",
          },
          {
            modal: "anno-18",
            term: "憶測",
            definition:
              "確かな根拠がなく推測すること。SEO業界では多くの手法が憶測に基づく。",
          },
          {
            modal: "anno-19",
            term: "SEO業者",
            definition:
              "検索エンジン最適化を専門に行う会社。企業のサイトを上位表示させる業者。",
          },
          {
            modal: "anno-20",
            term: "クライアント",
            definition:
              "サービスを利用する顧客や依頼主。SEO業者にとってのお客様のこと。",
          },
          {
            modal: "anno-21",
            term: "SEO対策",
            definition:
              "検索で上位表示されるための具体的な施策。キーワード調整やサイト改善など。",
          },
          {
            modal: "anno-22",
            term: "リーマンショック",
            definition:
              "2008年に起きた世界的な金融危機。多くの企業や投資家が大損失を被った。",
          },
          {
            modal: "anno-23",
            term: "投資",
            definition:
              "将来の利益を期待してお金を投じること。株式や不動産購入などが代表例。",
          },
          {
            modal: "anno-24",
            term: "資産",
            definition:
              "個人や企業が所有する価値のあるもの。現金、株式、不動産などの財産。",
          },
          {
            modal: "anno-25",
            term: "投機",
            definition:
              "短期的な価格変動で利益を狙うこと。ギャンブル的な要素が強い取引方法。",
          },
          {
            modal: "anno-26",
            term: "レバレッジ",
            definition:
              "少ない資金で大きな取引を行う仕組み。借金をして投資額を増やす手法。",
          },
          {
            modal: "anno-27",
            term: "FX取引",
            definition:
              "外国為替証拠金取引。異なる通貨を売買して為替差益を狙う投資方法。",
          },
          {
            modal: "anno-28",
            term: "ダイレクトマーケティング",
            definition:
              "顧客に直接アプローチする販売手法。メールやDMで個別に宣伝する方法。",
          },
          {
            modal: "anno-29",
            term: "広告",
            definition:
              "商品やサービスを宣伝するための有料の情報発信。テレビCMやネット広告など。",
          },
        ],
      },
      en: {
        title:
          "The Tale of Pitiful Believers Who Worship the SEO Religion in Google's Backyard",
        category: "",
        content: `A little while ago, from March to May 2024. The god called <span data-modal='anno-02'>Google</span> messed up.<br><br>At the same time, voices echoed in a certain industry: "What we were doing wasn't wrong!"<br><br>Yes, this was the <span data-modal='anno-05'>marketing industry</span> centered around <span data-modal='anno-01'>SEO</span>.<br><br>The leak of <span data-modal='anno-02'>Google</span>'s <span data-modal='anno-03'>algorithm</span> caused a major stir in the industry.<br><br><div class="border border-black dark:border-white p-5">Summary of an article detailing the leak: Internal documents about <span data-modal='anno-02'>Google</span>'s search <span data-modal='anno-03'>algorithm</span> were leaked, revealing over 14,000 ranking features. This confirmed many facts that <span data-modal='anno-02'>Google</span> had denied for years, including the existence of <span data-modal='anno-06'>domain authority</span> and the use of <span data-modal='anno-07'>click counts</span>. The mechanisms of the <span data-modal='anno-08'>Panda algorithm</span>, <span data-modal='anno-09'>author information</span>, and methods for evaluating <span data-modal='anno-10'>link</span> value also became clear. This information could lead to a review of <span data-modal='anno-11'>SEO strategies</span> and reinforces the importance of creating quality <span data-modal='anno-12'>content</span> and <span data-modal='anno-13'>promotion</span>. Additionally, this leak proved that many claims by <span data-modal='anno-14'>SEO specialists</span> were correct.<br>Source:<a href='https://ipullrank.com/google-algo-leak' class="underline" target='_blank' rel='noopener noreferrer'>The <span data-modal='anno-02'>Google</span> Algo Leak: Actionable Insights, Best New Practices, and Killer Tactics</a><br>Note: <span data-modal='anno-02'>Google</span> officially acknowledged the leak (<a href='https://www.itmedia.co.jp/news/articles/2405/31/news133.html' class="underline" target='_blank' rel='noopener noreferrer'>reference article</a>).</div><br>Until now, the implicit rules created by the god called <span data-modal='anno-02'>Google</span> were wrapped in a <span data-modal='anno-17'>black box</span>, and people calling themselves professionals were aiming for the top of <span data-modal='anno-15'>search engines</span> based on mere "<span data-modal='anno-18'>speculation</span>". With the <span data-modal='anno-03'>algorithm</span> leak, it became clear that some of the "<span data-modal='anno-18'>speculation</span>" was actually "truth".<br><br><span data-modal='anno-19'>SEO vendors</span> boasted to their <span data-modal='anno-20'>clients</span>: "This theory was correct after all." People doing <span data-modal='anno-21'>SEO optimization</span> also felt relieved: "We made the right choice hiring this vendor."<br><br>Looking at this situation, I thought it was the same as during the <span data-modal='anno-22'>Lehman Shock</span>.<br><br>When you <span data-modal='anno-23'>invest</span> with a bank and your <span data-modal='anno-24'>assets</span> increase, it's the bank representative's achievement. On the other hand, when <span data-modal='anno-24'>assets</span> decrease, it's because of the <span data-modal='anno-22'>Lehman Shock</span>.<br><br>In other words, the bank representative is in an invincible position where they bear no responsibility, and it's such an opaque world that they cannot be held responsible.<br><br>What we learned from this <span data-modal='anno-03'>algorithm</span> leak is just a partial policy. To use an analogy, it's like finding out that "Tokugawa's buried treasure exists somewhere in Japan!"<br><br>Even if you know the fact, you can't dig it up if you don't know the location.<br><br>What makes <span data-modal='anno-01'>SEO</span> peculiar in the <span data-modal='anno-05'>marketing industry</span> is that, unlike <span data-modal='anno-29'>advertising</span> or <span data-modal='anno-28'>direct marketing</span>, there are too few answers.<br><br>Companies that pour money into <span data-modal='anno-21'>SEO optimization</span> don't understand the essence of <span data-modal='anno-01'>SEO</span> in the first place. That's why they rely on specialist vendors.<br><br>When cheap vendors don't produce results, they shift to expensive vendors that claim to have "proven track records". And they keep pouring more money in.<br><br>They think it's "<span data-modal='anno-23'>investment</span>", but this is actually no different from "<span data-modal='anno-25'>speculation</span>". It's like doing <span data-modal='anno-27'>FX trading</span> with 1000x <span data-modal='anno-26'>leverage</span> without any theory.<br><br>You probably think that "specialist" vendors naturally understand the essence of <span data-modal='anno-01'>SEO</span>.<br><br>But vendors don't understand either. Or rather, they can't understand. Because it's a world with too few answers.<br><br>In the Warring States period, they used to judge that if a horse neighed before a person mounted it, it was "good luck", and if it neighed after mounting, it was "bad luck".<br><br>"Today, the horse neighed before I mounted, so we can win the battle!" "If we request an expensive but proven specialist company, we can get top search rankings!"<br><br>They sound like equally groundless "neighing".<br><br>But it's good that we found out the buried treasure exists.<br><br>Why not give money to specialist vendors and have them dig steadily, one place at a time, saying "Dig here, woof woof"?<br><br>With luck, you might find a grain of gold dust within 100 years, but you'll probably end up being an old man whose flowers never bloom.<br><br>Also, there's one thing I want you to remember. <span data-modal='anno-02'>Google</span> is the god that governs the rules. It would be foolish not to change them.<br><br>And even if there's a slim chance they don't change, if the rules are clear, there's little room for innovation, and it becomes a simple battle of capital.<br><br>Either way, continuing to pour money into <span data-modal='anno-01'>SEO</span> seems like nothing more than gambling.<br><br>What is a company's purpose? It's not to have their website displayed at the top of search results in the first place.<br><br>It's to make profit.<br><br>If you're not trying to make money but are an enthusiastic researcher conducting exploration surveys for Google-sama, then that's a very good use of money.<br><br>Please, do your best. If you have money to keep pouring into <span data-modal='anno-21'>SEO optimization</span>, there are countless more reliable and rational ways to increase your money. If you're not just a well-meaning researcher but an explorer responsible for increasing corporate profits, please contact us.`,
        annotations: [
          {
            modal: "anno-01",
            term: "SEO",
            definition:
              "Search Engine Optimization. Technology to make it easier to display high in search results on Google, Yahoo, etc.",
          },
          {
            modal: "anno-02",
            term: "Google",
            definition:
              "American IT company operating the world's largest search engine. Synonymous with internet search.",
          },
          {
            modal: "anno-03",
            term: "Algorithm",
            definition:
              "Calculation methods or rules that determine search result rankings. The mechanism that Google keeps secret.",
          },
          {
            modal: "anno-04",
            term: "Leak",
            definition:
              "Secret information flowing to the outside. A state where corporate confidential data is unintentionally disclosed.",
          },
          {
            modal: "anno-05",
            term: "Marketing Industry",
            definition:
              "Industry that conducts product or service promotion and sales acceleration. Advertising agencies, consulting companies, etc.",
          },
          {
            modal: "anno-06",
            term: "Domain Authority",
            definition:
              "An indicator representing the authority and credibility of a website. A factor considered to affect search rankings.",
          },
          {
            modal: "anno-07",
            term: "Click Count",
            definition:
              "The number of times a webpage or link is clicked. One indicator of measuring site popularity.",
          },
          {
            modal: "anno-08",
            term: "Panda Algorithm",
            definition:
              "One of Google's search algorithms. A mechanism that lowers the rankings of low-quality sites.",
          },
          {
            modal: "anno-09",
            term: "Author Information",
            definition:
              "Detailed information about the person who wrote the article or content. Valued as material for judging credibility.",
          },
          {
            modal: "anno-10",
            term: "Link",
            definition:
              "Connection to other web pages. Sites with more links are considered to have higher evaluation.",
          },
          {
            modal: "anno-11",
            term: "SEO Strategy",
            definition:
              "Plans or methods to aim for high search rankings. Policies for keyword selection and content creation.",
          },
          {
            modal: "anno-12",
            term: "Content",
            definition:
              "Articles, images, videos and other information or content published on websites.",
          },
          {
            modal: "anno-13",
            term: "Promotion",
            definition:
              "Promotional activities for products or services. Sales promotion activities aimed at improving awareness and increasing sales.",
          },
          {
            modal: "anno-14",
            term: "SEO Specialist",
            definition:
              "Professional with knowledge and skills in search engine optimization. Expert in ranking optimization.",
          },
          {
            modal: "anno-15",
            term: "Search Engine",
            definition:
              "Systems like Google and Yahoo that search for information on the internet.",
          },
          {
            modal: "anno-16",
            term: "Top Ranking",
            definition:
              "Being displayed at the top of search results. Makes it easier for many people to see.",
          },
          {
            modal: "anno-17",
            term: "Black Box",
            definition:
              "A state where internal mechanisms cannot be seen from outside. A system whose contents are kept secret.",
          },
          {
            modal: "anno-18",
            term: "Speculation",
            definition:
              "Making assumptions without solid evidence. Many methods in the SEO industry are based on speculation.",
          },
          {
            modal: "anno-19",
            term: "SEO Agency",
            definition:
              "Companies specializing in search engine optimization. Agencies that get corporate websites to rank high.",
          },
          {
            modal: "anno-20",
            term: "Client",
            definition:
              "Customers or clients who use services. Customers for SEO agencies.",
          },
          {
            modal: "anno-21",
            term: "SEO Measures",
            definition:
              "Specific measures to achieve high rankings in search. Keyword adjustments, site improvements, etc.",
          },
          {
            modal: "anno-22",
            term: "Lehman Shock",
            definition:
              "Global financial crisis that occurred in 2008. Many companies and investors suffered major losses.",
          },
          {
            modal: "anno-23",
            term: "Investment",
            definition:
              "Putting money in expecting future profits. Stock and real estate purchases are representative examples.",
          },
          {
            modal: "anno-24",
            term: "Assets",
            definition:
              "Valuable things owned by individuals or companies. Property such as cash, stocks, real estate.",
          },
          {
            modal: "anno-25",
            term: "Speculation",
            definition:
              "Aiming for profits from short-term price fluctuations. Trading method with strong gambling elements.",
          },
          {
            modal: "anno-26",
            term: "Leverage",
            definition:
              "Mechanism for conducting large transactions with small capital. Method of borrowing to increase investment amount.",
          },
          {
            modal: "anno-27",
            term: "FX Trading",
            definition:
              "Foreign exchange margin trading. Investment method of buying and selling different currencies to aim for exchange gains.",
          },
          {
            modal: "anno-28",
            term: "Direct Marketing",
            definition:
              "Sales method that directly approaches customers. Method of individual promotion through email or direct mail.",
          },
          {
            modal: "anno-29",
            term: "Advertising",
            definition:
              "Paid information dissemination to promote products or services. TV commercials, online ads, etc.",
          },
        ],
      },
      zh: {
        title: "在谷歌的后院崇拜SEO宗教的可怜信徒们的故事",
        category: "",
        content: `不久前，2024年3月到5月的事情。名为<span data-modal='anno-02'>Google</span>的神明犯了错。<br><br>与此同时，某个行业中飞舞着这样的声音："我们一直在做的事情没有错！"<br><br>是的，这就是以<span data-modal='anno-01'>SEO</span>为中心的<span data-modal='anno-05'>营销行业</span>。<br><br><span data-modal='anno-02'>Google</span>的<span data-modal='anno-03'>算法</span>泄露在行业中引起了巨大轰动。<br><br><div class="border border-black dark:border-white p-5">详细描述泄露的文章摘要：<span data-modal='anno-02'>Google</span>搜索<span data-modal='anno-03'>算法</span>的内部文档被泄露，揭示了超过14,000个排名特征。这证实了<span data-modal='anno-02'>Google</span>多年来一直否认的许多事实，包括<span data-modal='anno-06'>域名权重</span>的存在和<span data-modal='anno-07'>点击数</span>的使用。<span data-modal='anno-08'>熊猫算法</span>的机制、<span data-modal='anno-09'>作者信息</span>、<span data-modal='anno-10'>链接</span>价值评估方法等也变得明确。这些信息可能导致<span data-modal='anno-11'>SEO策略</span>的重新审视，并重新确认了创建优质<span data-modal='anno-12'>内容</span>和<span data-modal='anno-13'>推广</span>的重要性。此外，这次泄露证明了许多<span data-modal='anno-14'>SEO专家</span>的主张是正确的。<br>来源：<a href='https://ipullrank.com/google-algo-leak' class="underline" target='_blank' rel='noopener noreferrer'>The <span data-modal='anno-02'>Google</span> Algo Leak: Actionable Insights, Best New Practices, and Killer Tactics</a><br>补充：<span data-modal='anno-02'>Google</span>方面也正式承认了泄露（<a href='https://www.itmedia.co.jp/news/articles/2405/31/news133.html' class="underline" target='_blank' rel='noopener noreferrer'>参考文章</a>）。</div><br>到目前为止，名为<span data-modal='anno-02'>Google</span>的神明制定的潜规则被包裹在<span data-modal='anno-17'>黑匣子</span>中，自称专业人士的人们仅凭"<span data-modal='anno-18'>推测</span>"就瞄准<span data-modal='anno-15'>搜索引擎</span>的顶端。随着<span data-modal='anno-03'>算法</span>的泄露，"<span data-modal='anno-18'>推测</span>"的一部分成为"真相"这一点变得明确。<br><br><span data-modal='anno-19'>SEO服务商</span>向<span data-modal='anno-20'>客户</span>夸耀："果然这个理论是正确的。"进行<span data-modal='anno-21'>SEO优化</span>的人们也安心了："委托这个服务商是正确的。"<br><br>我看到这种情况时想到，这和<span data-modal='anno-22'>雷曼危机</span>时一样。<br><br>在银行<span data-modal='anno-23'>投资</span>，<span data-modal='anno-24'>资产</span>增加的话，功劳是银行负责人的。另一方面，<span data-modal='anno-24'>资产</span>减少的话，是<span data-modal='anno-22'>雷曼危机</span>的原因。<br><br>也就是说，银行负责人处于不承担责任的无敌立场，是一个不透明到无法承担责任的世界。<br><br>这次<span data-modal='anno-03'>算法</span>泄露所了解到的，终究只是部分方针。如果比喻的话，就像了解到"德川的埋藏金在日本的某个地方！"一样。<br><br>即使知道了事实，不知道地点的话也无法挖掘出来。<br><br><span data-modal='anno-01'>SEO</span>在<span data-modal='anno-05'>营销行业</span>中特异的是，与<span data-modal='anno-29'>广告</span>或<span data-modal='anno-28'>直销</span>不同，答案太少了。<br><br>向<span data-modal='anno-21'>SEO优化</span>投入资金的企业，本来就不理解<span data-modal='anno-01'>SEO</span>的本质。所以委托专业服务商。<br><br>便宜的服务商没有成果的话，就会转向宣称有"实绩"的昂贵服务商。就这样不断投入资金。<br><br>认为这是"<span data-modal='anno-23'>投资</span>"，但实际上这与"<span data-modal='anno-25'>投机</span>"没有区别。就像没有理论，使用1000倍<span data-modal='anno-26'>杠杆</span>进行<span data-modal='anno-27'>外汇交易</span>一样。<br><br>您可能认为"专业"服务商当然理解<span data-modal='anno-01'>SEO</span>的真谛。<br><br>但是服务商也不理解。或者说无法理解。因为这是一个答案太少的世界。<br><br>在战国时代，据说如果马在人骑上之前嘶叫就是"吉"，骑上之后嘶叫就是"凶"。<br><br>"今天，骑上之前马嘶叫了，所以能在战争中获胜！""委托虽然昂贵但有实绩的专业企业就能在搜索中排名靠前！"<br><br>听起来像是同样没有根据的"嘶叫"。<br><br>但是，知道有埋藏金是好事。<br><br>给专业服务商钱，让他们"在这里挖汪汪"地踏实地一个地方一个地方挖掘不是很好吗。<br><br>运气好的话100年以内可能会找到一粒砂金，但肯定会成为一辈子花不开的老爷爷吧。<br><br>还有，有一件事希望您记住。<span data-modal='anno-02'>Google</span>是掌管规则的神明。不变更的话就太愚蠢了。<br><br>而且，即使万一有不变更的情况，如果规则明确的话，创新的余地就少，会变成单纯的资本竞争吧。<br><br>无论如何，继续向<span data-modal='anno-01'>SEO</span>投入资金，只能认为像赌博一样。<br><br>企业的目的是什么？本来就不是让自己的网站在搜索中排名靠前。<br><br>是获得利润。<br><br>如果不是为了赚钱，而是进行<span data-modal='anno-02'>Google</span>大人探索调查的热心研究者的话，那确实是很好的资金使用方法。<br><br>请加油。如果有继续向<span data-modal='anno-21'>SEO优化</span>投入的资金，有无数更可靠更合理地增加资金的方法。如果您不是善良的研究者，而是有责任提高企业利润的探求者的话，请联系我们。`,
        annotations: [
          {
            modal: "anno-01",
            term: "SEO",
            definition:
              "搜索引擎优化。使在Google和Yahoo等搜索结果中容易显示在前面的技术。",
          },
          {
            modal: "anno-02",
            term: "Google",
            definition:
              "运营世界最大搜索引擎的美国IT企业。互联网搜索的代名词。",
          },
          {
            modal: "anno-03",
            term: "算法",
            definition: "决定搜索结果排名的计算方法或规则。Google保密的机制。",
          },
          {
            modal: "anno-04",
            term: "泄露",
            definition: "秘密信息流向外部。企业机密数据意外公开的状态。",
          },
          {
            modal: "anno-05",
            term: "营销行业",
            definition:
              "进行商品或服务宣传、销售促进的行业。广告代理公司和咨询公司等。",
          },
          {
            modal: "anno-06",
            term: "域名权威度",
            definition:
              "表示网站权威性和可信度的指标。被认为影响搜索排名的要素。",
          },
          {
            modal: "anno-07",
            term: "点击数",
            definition:
              "网页或链接被点击的次数。测量网站受欢迎程度的指标之一。",
          },
          {
            modal: "anno-08",
            term: "熊猫算法",
            definition: "Google搜索算法之一。降低低质量网站排名的机制。",
          },
          {
            modal: "anno-09",
            term: "作者信息",
            definition:
              "撰写文章或内容的人的详细信息。作为可信度判断材料受到重视。",
          },
          {
            modal: "anno-10",
            term: "链接",
            definition: "连接到其他网页。链接越多的网站评价越高。",
          },
          {
            modal: "anno-11",
            term: "SEO策略",
            definition:
              "为争取搜索排名靠前的计划或方法。关键词选择和内容创作的方针。",
          },
          {
            modal: "anno-12",
            term: "内容",
            definition: "网站刊载的文章、图像、视频等信息或内容。",
          },
          {
            modal: "anno-13",
            term: "推广",
            definition:
              "商品或服务的宣传活动。以提高知名度和增加销售为目的的促销活动。",
          },
          {
            modal: "anno-14",
            term: "SEO专家",
            definition:
              "拥有搜索引擎优化知识和技术的专业人士。排名优化的专家。",
          },
          {
            modal: "anno-15",
            term: "搜索引擎",
            definition: "Google和Yahoo等在互联网上搜索信息的系统。",
          },
          {
            modal: "anno-16",
            term: "前位显示",
            definition: "在搜索结果的前面显示。容易被更多人看到。",
          },
          {
            modal: "anno-17",
            term: "黑盒",
            definition: "内部机制从外部看不见的状态。内容被保密的系统。",
          },
          {
            modal: "anno-18",
            term: "推测",
            definition: "没有确切根据进行推测。SEO行业中很多方法都基于推测。",
          },
          {
            modal: "anno-19",
            term: "SEO服务商",
            definition:
              "专门进行搜索引擎优化的公司。使企业网站排名靠前的服务商。",
          },
          {
            modal: "anno-20",
            term: "客户",
            definition: "使用服务的顾客或委托方。对SEO服务商来说的客户。",
          },
          {
            modal: "anno-21",
            term: "SEO对策",
            definition:
              "为在搜索中获得前位显示的具体措施。关键词调整和网站改善等。",
          },
          {
            modal: "anno-22",
            term: "雷曼危机",
            definition:
              "2008年发生的全球金融危机。许多企业和投资者遭受重大损失。",
          },
          {
            modal: "anno-23",
            term: "投资",
            definition:
              "期待未来收益而投入资金。股票和房地产购买等是代表例子。",
          },
          {
            modal: "anno-24",
            term: "资产",
            definition:
              "个人或企业拥有的有价值的东西。现金、股票、房地产等财产。",
          },
          {
            modal: "anno-25",
            term: "投机",
            definition: "以短期价格变动获利为目标。具有赌博性质的交易方法。",
          },
          {
            modal: "anno-26",
            term: "杠杆",
            definition: "用少量资金进行大额交易的机制。借债增加投资额的方法。",
          },
          {
            modal: "anno-27",
            term: "外汇交易",
            definition:
              "外汇保证金交易。买卖不同货币以获取汇差收益的投资方法。",
          },
          {
            modal: "anno-28",
            term: "直销",
            definition:
              "直接接触顾客的销售方法。通过邮件或DM进行个别宣传的方法。",
          },
          {
            modal: "anno-29",
            term: "广告",
            definition:
              "为宣传商品或服务的付费信息发布。电视广告和网络广告等。",
          },
        ],
      },
    },
  },
];

export const dataMarketing: ArticleType[] = [
  {
    id: "01",
    link: "/marketing/01",
    translations: {
      ja: {
        title:
          "板書を書き写すバカな優等生に知ってほしいローカライズ活用のススメ",
        category: "",
        content: `昔、受験勉強をしていたころ、<br><br>毎時間、<br>毎授業、<br><br><span class="hightlight">必死に先生の板書をノートに書き写しているバカがいました。</span><br><br>彼の熱心な学習の姿勢は先生からは褒められ、<br>周りの友人たちからも「あいつは真面目ですごい奴だ」<br>と評価されていました。<br><br>でも、正直に言うと私はこう思いました。<br>「こいつ、なんでこんなバカなことをやっているんだろう?」<br><br>なぜなら、その先生は<span data-modal='anno-01'>板書</span>と同じ内容を解説した<br>プリントをちゃんと配ってくれていたから。<br><br>授業はそのプリントをもとに行われ、<br>先生が口頭で説明していたのはあくまで補足的な事項だけだったんです。<br><br><span class="hightlight">私はノートなんて一切取りませんでした。</span><br><br>代わりに先生からもらったプリントを事前に読み込み、<br>授業中は先生が口頭でしゃべってくれた内容のうち、<br>プリントに書かれていない内容だけをメモしていました。<br><br>自分が取ったノートなど、所詮は先生が作ってくれたプリントの<span data-modal='anno-08'>劣化版</span>です。<br><br>なのに、<br><span class="hightlight">どうしてまったく同じ内容をイチから自分で再現する必要があるのでしょうか?</span><br><br>そして今、ビジネスの世界でもこれと同じ出来事をよく見かけます。<br><br><span class="hightlight">いま、世界中には無料で公開されている優れた<span data-modal='anno-03'>オープンソース</span>であふれています。<br>それなのに、多くの企業は頑なに、イチから開発をしたがります。<br>正直理解できません。</span><br><br>例えば、メールでの問い合わせフォーム。<br><span data-modal='anno-04'>Googleフォーム</span>を使えばよくないですか?<br><br>入力をする画面もわかりやすいし、入力結果の集計時の仕様も極めて使いやすい。<br>世界最高の頭脳集団であるGoogleが作ったフォームのお値段はなんと・・・<br>0円。<br><br>一方、<span data-modal='anno-05'>プログラム</span>的に劣化していくあなたが作った独自のフォームは・・・<br>15,000円。<br><br>あなたには申し訳ないですが、私は当然<span data-modal='anno-04'>Googleフォーム</span>を使います。<br>あなたの友人や家族でさえも、きっと同じことを言うのではないでしょうか。<br><br>私が言いたいことはひとつ。<br><span class="hightlight">イチから無駄な開発(しかも劣る可能性大)をして、<br>お金も時間もかけて、それってバカらしくない?</span><br><br>ということ。<br><br>でも、自社のオリジナルじゃないと他社とは<span data-modal='anno-07'>差別化</span>できないのでは・・・?<br>なんて考えてませんよね?<br><br><span class="hightlight">差別化は、製品の工程ではなく、質やコンテンツであるべきです。</span><br><br><span data-modal='anno-06'>自社開発</span>したところで所詮、何かの<span data-modal='anno-08'>劣化版</span>やコピー品にすぎません。<br><br>私は良くバーに行きますが、<br>1から<span data-modal='anno-10'>カクテル</span>開発している人たちはすごいと思います。<br><br>大会に出て、認められて、世界に認知されるお酒を作る人たちがいます。<br>日本でも雪国、バンブー、ミリオンダラーといった独自の<span data-modal='anno-10'>カクテル</span>が生まれました。<br>新しい独自の秀でた<span data-modal='anno-10'>カクテル</span>で店を有名にする店舗は確かにあります。<br>ほんのわずかですが。<br><br><span data-modal='anno-10'>カクテル</span>も<span data-modal='anno-03'>オープンソース</span>と同じで、<span data-modal='anno-11'>レシピ</span>が公開されています。<br>だから、新たに1から作るよりも、<br>誰かが生み出した美味しい<span data-modal='anno-10'>カクテル</span>を自分で再現するほうが、<br>商売としては圧倒的に<span data-modal='anno-09'>コスパ</span>が良いです。<br><br><span class="hightlight">評価されるかもわからない、<br>時間も費用もがかかる<br>オリジナルを生み出す理由はなんでしょうか?</span><br><br>あなたが最強の職人としての名誉を得たいのであればわかります。<br>職人を目指すのであればぜひ応援したい。<br><br>でも、ビジネスをしたいのであれば、やはり理解はできません。<br>考えれば考えるほど、金と時間を無駄づかいをする天才なのかと<br>褒めたくなってきました。<br><br>あなたが作る美しくデザインで覆われた<span data-modal='anno-05'>プログラム</span>は、<br>プリント内容を綺麗に模写して<br>ちょっとラインマーカーを引いたノートと変わりありません。<br><br>隣の席の友だちに褒められるという小さな小さな勲章はもらえるでしょう。<br>でも、それ以外に何が?<br><br>写経が好き。<br>塗り絵が好き。<br>1から<span data-modal='anno-12'>ソースコード</span>を作るのが好き。<br><br>趣味であれば一生そうしていればいいでしょう。<br>もし、<span data-modal='anno-13'>OpenAI</span>を超える<span data-modal='anno-14'>大規模言語モデル</span>の<span data-modal='anno-15'>AI</span>を作れるなら、<br>それは作るべきです。<br>Amazonを超える<span data-modal='anno-16'>ECサイト</span>を作れるなら、<br>それも作るべきです。<br><br>ですが、そんなことができる人間はこの世にほとんどいません。<br>若き日のビル・ゲイツかスティーブ・ジョブズくらいでしょうか。<br>サム・アルトマンやイーロン・マスクでもいいでしょう。<br>あなたやあなたの周りにいる人が同様の人材であるならば・・・<br><br>別に天才じゃないからと言ってめげる必要はありません。<br><br><span class="hightlight">自分で作れないなら借りてきたり、買ってくれば良いんです。<br>ありがたいことに、世界から見た日本市場は超ブルーオーシャンです。</span><br>日本語という言語の壁が高すぎるから。<br><br>海外の良質な<span data-modal='anno-18'>プロダクト</span>の多くは、<br>日本に入ってきていない。<br>入ってこれない。<br><br>であれば、その<span data-modal='anno-18'>プロダクト</span>の開発元にお金を払って、<br>成果を借り、<br><span class="hightlight">日本で展開すれば余裕で勝てます。</span><br>しかも、開発にかかる時間もお金も半分で済みます。<br><br>この世界の誰かが開発している<span data-modal='anno-18'>プロダクト</span>の中で、<br>あなたが目を付けているものがあれば私に教えてください。<br><br>私は天才ではないですが、<br>あなたにとって無駄なフォームを設置することはありません。`,
        annotations: [
          {
            modal: "anno-01",
            term: "板書",
            definition:
              "先生が授業中に黒板やホワイトボードに書く内容。学生がノートに写す対象。",
          },
          {
            modal: "anno-02",
            term: "ローカライズ",
            definition:
              "海外で作られた製品やサービスを日本の市場や文化に合わせて調整すること。",
          },
          {
            modal: "anno-03",
            term: "オープンソース",
            definition:
              "プログラムの設計図が無料で公開され、誰でも自由に使用・改良できるソフトウェア。",
          },
          {
            modal: "anno-04",
            term: "Googleフォーム",
            definition:
              "Googleが無料で提供するアンケートや問い合わせ用のフォーム作成ツール。",
          },
          {
            modal: "anno-05",
            term: "プログラム",
            definition:
              "コンピューターに指示を出すための命令文の集合。ソフトウェアの基礎となる。",
          },
          {
            modal: "anno-06",
            term: "自社開発",
            definition:
              "外部に委託せず、自分の会社内でシステムや製品を一から作ること。",
          },
          {
            modal: "anno-07",
            term: "差別化",
            definition:
              "競合他社との違いを明確にし、自社の優位性をアピールすること。",
          },
          {
            modal: "anno-08",
            term: "劣化版",
            definition:
              "元となる製品よりも品質や機能が劣っているバージョンや模倣品。",
          },
          {
            modal: "anno-09",
            term: "コスパ",
            definition:
              "コストパフォーマンスの略。かけた費用に対する効果や成果の割合。",
          },
          {
            modal: "anno-10",
            term: "カクテル",
            definition:
              "複数のお酒や材料を混ぜ合わせて作るアルコール飲料。バーの定番メニュー。",
          },
          {
            modal: "anno-11",
            term: "レシピ",
            definition:
              "料理や飲み物の材料と作り方を記した手順書。調理の設計図のようなもの。",
          },
          {
            modal: "anno-12",
            term: "ソースコード",
            definition:
              "プログラムの元となる人間が読める形式の文字列。プログラムの設計図。",
          },
          {
            modal: "anno-13",
            term: "OpenAI",
            definition:
              "ChatGPTを開発したアメリカのAI研究企業。人工知能分野のリーディングカンパニー。",
          },
          {
            modal: "anno-14",
            term: "大規模言語モデル",
            definition:
              "膨大な文章データで学習し、人間のような文章を生成できる高度なAI技術。",
          },
          {
            modal: "anno-15",
            term: "AI",
            definition:
              "人工知能。コンピューターが人間のような思考や判断を行う技術の総称。",
          },
          {
            modal: "anno-16",
            term: "ECサイト",
            definition:
              "インターネット上で商品を販売するウェブサイト。オンライン通販サイト。",
          },
          {
            modal: "anno-17",
            term: "ブルーオーシャン",
            definition:
              "競合が少なく、未開拓の市場領域。競争が激しい市場の対義語。",
          },
          {
            modal: "anno-18",
            term: "プロダクト",
            definition:
              "企業が開発・販売する製品やサービス。商品の総称として使われるビジネス用語。",
          },
        ],
      },
      en: {
        title:
          "A Recommendation on Utilizing Localization for Honor Students Who Stupidly Copy Everything from the Blackboard",
        category: "",
        content: `Long ago, when I was studying for exams,<br><br>every hour, every class,<br><br><span class="hightlight">there was an idiot desperately copying the teacher's blackboard writing into his notebook.</span><br><br>His earnest learning attitude was praised by the teacher, and friends around him evaluated him as "that guy is serious and amazing."<br><br>But honestly, I thought: "Why is this guy doing such a stupid thing?"<br><br>Because the teacher properly distributed handouts that explained the same content as the <span data-modal='anno-01'>blackboard writing</span>.<br><br>Classes were conducted based on those handouts, and what the teacher explained orally was merely supplementary information.<br><br><span class="hightlight">I never took notes at all.</span><br><br>Instead, I read through the handouts the teacher gave us in advance, and during class, I only took notes on content that the teacher spoke about orally that wasn't written in the handouts.<br><br>The notes I took were just a <span data-modal='anno-08'>degraded version</span> of the handouts the teacher made for us.<br><br>So, <span class="hightlight">why would there be any need to reproduce exactly the same content from scratch by myself?</span><br><br>And now, I often see the same thing happening in the business world.<br><br><span class="hightlight">Now, the world is overflowing with excellent <span data-modal='anno-03'>open source</span> that is freely available. Yet many companies stubbornly want to develop from scratch. I honestly don't understand it.</span><br><br>For example, email inquiry forms. Wouldn't it be good to use <span data-modal='anno-04'>Google Forms</span>?<br><br>The input screen is easy to understand, and the specifications for aggregating input results are extremely user-friendly. The price of forms made by Google, the world's top brain trust, is... 0 yen.<br><br>On the other hand, your original form that will <span data-modal='anno-05'>programmatically</span> degrade over time costs... 15,000 yen.<br><br>I'm sorry to you, but I would naturally use <span data-modal='anno-04'>Google Forms</span>. Even your friends and family would probably say the same thing.<br><br>What I want to say is one thing: <span class="hightlight">Developing wastefully from scratch (with a high possibility of being inferior), spending money and time - isn't that foolish?</span><br><br>But you're not thinking that you can't <span data-modal='anno-07'>differentiate</span> from other companies unless it's your company's original, are you?<br><br><span class="hightlight">Differentiation should be in quality and content, not in the production process.</span><br><br>Even with <span data-modal='anno-06'>in-house development</span>, it's just a <span data-modal='anno-08'>degraded version</span> or copy of something else.<br><br>I often go to bars, and I think people who develop <span data-modal='anno-10'>cocktails</span> from scratch are amazing.<br><br>There are people who enter competitions, get recognized, and create drinks that gain worldwide recognition. In Japan too, original <span data-modal='anno-10'>cocktails</span> like Yukiguni, Bamboo, and Million Dollar were born. There are indeed establishments that make their stores famous with new, original, excellent <span data-modal='anno-10'>cocktails</span>. Just a tiny few though.<br><br><span data-modal='anno-10'>Cocktails</span> are like <span data-modal='anno-03'>open source</span> - their <span data-modal='anno-11'>recipes</span> are publicly available. So rather than creating something new from scratch, reproducing delicious <span data-modal='anno-10'>cocktails</span> that someone else created is overwhelmingly better <span data-modal='anno-09'>cost-performance</span> for business.<br><br><span class="hightlight">What's the reason for creating originals that may not even be appreciated, that cost time and money?</span><br><br>I understand if you want to gain honor as the ultimate craftsman. If you're aiming to be a craftsman, I'd definitely want to support you.<br><br>But if you want to do business, I still don't understand. The more I think about it, the more I want to praise you as a genius at wasting money and time.<br><br>Your beautifully designed <span data-modal='anno-05'>program</span> covered in design is no different from a notebook that neatly copies handout content with a few highlighter marks.<br><br>You might get a tiny little medal of praise from your desk neighbor. But what else?<br><br>You like copying sutras. You like coloring books. You like creating <span data-modal='anno-12'>source code</span> from scratch.<br><br>If it's a hobby, you should do it for life. If you can create an <span data-modal='anno-15'>AI</span> with a <span data-modal='anno-14'>large language model</span> that surpasses <span data-modal='anno-13'>OpenAI</span>, you should create it. If you can create an <span data-modal='anno-16'>e-commerce site</span> that surpasses Amazon, you should create that too.<br><br>But there are hardly any humans in this world who can do such things. Perhaps young Bill Gates or Steve Jobs. Sam Altman or Elon Musk would be fine too. If you or people around you are similar talents...<br><br>There's no need to be discouraged just because you're not a genius.<br><br><span class="hightlight">If you can't make it yourself, you can borrow it or buy it. Thankfully, the Japanese market is a super blue ocean from a global perspective.</span> Because the language barrier of Japanese is too high.<br><br>Many high-quality overseas <span data-modal='anno-18'>products</span> haven't entered Japan. They can't enter.<br><br>So if you pay money to the developers of those <span data-modal='anno-18'>products</span>, borrow their results, and <span class="hightlight">deploy them in Japan, you can easily win.</span> Moreover, the time and money required for development will be cut in half.<br><br>Among the <span data-modal='anno-18'>products</span> that someone in this world is developing, if there's something you have your eye on, please tell me.<br><br>I'm not a genius, but I won't set up useless forms for you.`,
        annotations: [
          {
            modal: "anno-01",
            term: "Blackboard Writing",
            definition:
              "Content that teachers write on blackboards or whiteboards during class. What students copy into their notebooks.",
          },
          {
            modal: "anno-02",
            term: "Localization",
            definition:
              "Adjusting products or services made overseas to fit Japanese markets and culture.",
          },
          {
            modal: "anno-03",
            term: "Open Source",
            definition:
              "Software whose program blueprints are freely published and can be used and improved by anyone.",
          },
          {
            modal: "anno-04",
            term: "Google Forms",
            definition:
              "A free form creation tool provided by Google for surveys and inquiries.",
          },
          {
            modal: "anno-05",
            term: "Program",
            definition:
              "A collection of command statements for giving instructions to computers. The foundation of software.",
          },
          {
            modal: "anno-06",
            term: "In-house Development",
            definition:
              "Creating systems or products from scratch within one's own company without outsourcing.",
          },
          {
            modal: "anno-07",
            term: "Differentiation",
            definition:
              "Clarifying differences from competitors and promoting one's company's advantages.",
          },
          {
            modal: "anno-08",
            term: "Inferior Version",
            definition:
              "A version or imitation with lower quality or functionality than the original product.",
          },
          {
            modal: "anno-09",
            term: "Cost Performance",
            definition:
              "Abbreviation of cost performance. The ratio of effects or results to invested costs.",
          },
          {
            modal: "anno-10",
            term: "Cocktail",
            definition:
              "Alcoholic beverages made by mixing multiple liquors or ingredients. A staple menu item at bars.",
          },
          {
            modal: "anno-11",
            term: "Recipe",
            definition:
              "An instruction manual recording ingredients and preparation methods for dishes or drinks. Like a blueprint for cooking.",
          },
          {
            modal: "anno-12",
            term: "Source Code",
            definition:
              "Human-readable format strings that form the basis of programs. The blueprint of programs.",
          },
          {
            modal: "anno-13",
            term: "OpenAI",
            definition:
              "American AI research company that developed ChatGPT. A leading company in the artificial intelligence field.",
          },
          {
            modal: "anno-14",
            term: "Large Language Model",
            definition:
              "Advanced AI technology that learns from vast text data and can generate human-like text.",
          },
          {
            modal: "anno-15",
            term: "AI",
            definition:
              "Artificial Intelligence. General term for technologies that enable computers to think and judge like humans.",
          },
          {
            modal: "anno-16",
            term: "E-commerce Site",
            definition:
              "Websites that sell products on the internet. Online shopping sites.",
          },
          {
            modal: "anno-17",
            term: "Blue Ocean",
            definition:
              "Market areas with little competition and unexplored territory. Antonym of highly competitive markets.",
          },
          {
            modal: "anno-18",
            term: "Product",
            definition:
              "Goods or services developed and sold by companies. Business term used as a general term for merchandise.",
          },
        ],
      },
      zh: {
        title: "给愚蠢地抄写黑板内容的优等生们的本地化应用建议",
        category: "",
        content: `以前，在准备考试的时候，<br><br>每小时，每节课，<br><br><span class="hightlight">都有一个笨蛋拼命地把老师的板书抄到笔记本上。</span><br><br>他认真的学习态度受到老师的表扬，周围的朋友们也评价他说"那家伙认真又厉害"。<br><br>但是，说实话我是这样想的："这家伙为什么要做这么愚蠢的事情？"<br><br>因为那位老师正确地分发了与<span data-modal='anno-01'>板书</span>相同内容的讲义。<br><br>课程是基于那个讲义进行的，老师口头说明的只是补充性的事项。<br><br><span class="hightlight">我完全不做笔记。</span><br><br>而是事先阅读老师给的讲义，在上课时，只记录老师口头讲述的内容中讲义上没有写的内容。<br><br>我做的笔记，终归只是老师制作的讲义的<span data-modal='anno-08'>劣化版</span>。<br><br>那么，<span class="hightlight">为什么需要从头开始自己重现完全相同的内容呢？</span><br><br>现在，在商业世界中我也经常看到同样的事情。<br><br><span class="hightlight">现在，世界上充满了免费公开的优秀<span data-modal='anno-03'>开源</span>软件。然而，许多企业顽固地想要从头开发。说实话无法理解。</span><br><br>比如，邮件咨询表单。使用<span data-modal='anno-04'>Google表单</span>不好吗？<br><br>输入画面也很容易理解，输入结果汇总时的规格也极其好用。世界最高智囊团Google制作的表单价格竟然是...0日元。<br><br>另一方面，在<span data-modal='anno-05'>程序</span>上会劣化的你制作的独特表单...15,000日元。<br><br>对你很抱歉，但我当然会使用<span data-modal='anno-04'>Google表单</span>。即使是你的朋友和家人，肯定也会说同样的话吧。<br><br>我想说的就一件事：<span class="hightlight">从头进行无用的开发（而且很可能劣质），花费金钱和时间，这不是很愚蠢吗？</span><br><br>但是，你不会认为如果不是自己公司的原创就无法与其他公司<span data-modal='anno-07'>差异化</span>吧？<br><br><span class="hightlight">差异化应该体现在质量和内容上，而不是制作过程。</span><br><br>即使<span data-modal='anno-06'>自主开发</span>，终归只是某种东西的<span data-modal='anno-08'>劣化版</span>或复制品。<br><br>我经常去酒吧，我认为从头开发<span data-modal='anno-10'>鸡尾酒</span>的人很厉害。<br><br>有人参加比赛，得到认可，制作出世界认知的酒。在日本也诞生了雪国、竹子、百万美元等独特的<span data-modal='anno-10'>鸡尾酒</span>。确实有用新的独特优秀<span data-modal='anno-10'>鸡尾酒</span>让店铺出名的店铺。只是很少而已。<br><br><span data-modal='anno-10'>鸡尾酒</span>也和<span data-modal='anno-03'>开源</span>一样，<span data-modal='anno-11'>配方</span>是公开的。所以，比起重新从头制作，自己重现别人创造的美味<span data-modal='anno-10'>鸡尾酒</span>，作为生意<span data-modal='anno-09'>性价比</span>压倒性地更好。<br><br><span class="hightlight">创造不知道是否会被评价、需要时间和费用的原创的理由是什么？</span><br><br>如果你想获得作为最强工匠的荣誉，我能理解。如果要成为工匠，我一定想支持。<br><br>但是，如果想做生意，还是无法理解。越想越想夸奖你是浪费金钱和时间的天才。<br><br>你制作的被美丽设计覆盖的<span data-modal='anno-05'>程序</span>，与漂亮地模仿讲义内容并画了一点荧光笔的笔记本没有区别。<br><br>邻座朋友的夸奖这个小小的小小的勋章是能得到的吧。但是，除此之外还有什么？<br><br>喜欢抄经。喜欢涂色。喜欢从头制作<span data-modal='anno-12'>源代码</span>。<br><br>如果是爱好的话，一辈子这样做就好了。如果能制作超越<span data-modal='anno-13'>OpenAI</span>的<span data-modal='anno-14'>大规模语言模型</span>的<span data-modal='anno-15'>AI</span>，那就应该制作。如果能制作超越Amazon的<span data-modal='anno-16'>电商网站</span>，那也应该制作。<br><br>但是，能做这种事的人类在这个世界上几乎没有。大概只有年轻时的比尔·盖茨或史蒂夫·乔布斯吧。萨姆·奥特曼或埃隆·马斯克也可以。如果你或你周围的人是同样的人才的话...<br><br>不是天才也没必要沮丧。<br><br><span class="hightlight">如果自己做不了就借来或买来就好了。值得庆幸的是，从世界来看日本市场是超级蓝海。</span>因为日语这个语言壁垒太高了。<br><br>海外的许多优质<span data-modal='anno-18'>产品</span>，没有进入日本。进不来。<br><br>那么，向那个<span data-modal='anno-18'>产品</span>的开发方付钱，借用成果，<span class="hightlight">在日本展开的话就能轻松获胜。</span>而且，开发所需的时间和金钱也能减半。<br><br>在这个世界上某人正在开发的<span data-modal='anno-18'>产品</span>中，如果有你看中的东西，请告诉我。<br><br>我不是天才，但不会为你设置无用的表单。`,
        annotations: [
          {
            modal: "anno-01",
            term: "板书",
            definition:
              "老师在授课中在黑板或白板上书写的内容。学生抄写到笔记本的对象。",
          },
          {
            modal: "anno-02",
            term: "本土化",
            definition: "将海外制作的产品或服务调整以适应日本市场和文化。",
          },
          {
            modal: "anno-03",
            term: "开源",
            definition:
              "程序设计图免费公开，任何人都可以自由使用、改良的软件。",
          },
          {
            modal: "anno-04",
            term: "Google表单",
            definition: "Google免费提供的问卷调查和询问用的表单制作工具。",
          },
          {
            modal: "anno-05",
            term: "程序",
            definition: "向计算机发出指示的命令文集合。成为软件的基础。",
          },
          {
            modal: "anno-06",
            term: "自主开发",
            definition: "不委托外部，在自己公司内部从零开始制作系统或产品。",
          },
          {
            modal: "anno-07",
            term: "差异化",
            definition: "明确与竞争对手的不同，宣传自己公司的优势。",
          },
          {
            modal: "anno-08",
            term: "劣化版",
            definition: "比原产品质量或功能更差的版本或仿制品。",
          },
          {
            modal: "anno-09",
            term: "性价比",
            definition: "性价比的简称。投入费用相对的效果或成果比例。",
          },
          {
            modal: "anno-10",
            term: "鸡尾酒",
            definition: "将多种酒类或材料混合制作的酒精饮料。酒吧的经典菜单。",
          },
          {
            modal: "anno-11",
            term: "食谱",
            definition:
              "记录料理或饮品材料和制作方法的步骤书。类似烹饪的设计图。",
          },
          {
            modal: "anno-12",
            term: "源代码",
            definition: "程序基础的人类可读格式字符串。程序的设计图。",
          },
          {
            modal: "anno-13",
            term: "OpenAI",
            definition: "开发ChatGPT的美国AI研究企业。人工智能领域的领先公司。",
          },
          {
            modal: "anno-14",
            term: "大规模语言模型",
            definition: "用庞大文章数据学习，能生成类似人类文章的高级AI技术。",
          },
          {
            modal: "anno-15",
            term: "AI",
            definition: "人工智能。计算机进行类似人类思考和判断的技术总称。",
          },
          {
            modal: "anno-16",
            term: "电商网站",
            definition: "在互联网上销售商品的网站。在线购物网站。",
          },
          {
            modal: "anno-17",
            term: "蓝海",
            definition: "竞争少，未开拓的市场领域。竞争激烈市场的反义词。",
          },
          {
            modal: "anno-18",
            term: "产品",
            definition:
              "企业开发、销售的制品或服务。作为商品总称使用的商业用语。",
          },
        ],
      },
    },
  },
  {
    id: "02",
    link: "/marketing/02",
    translations: {
      ja: {
        title:
          "「いいね」ウィルスを撒き散らすインフルエンサーに踊らされるバカなカラスになるな",
        category: "",
        content: `町を歩けば、税金の無駄遣いで行われている耳障りな工事現場。<br><span data-modal='anno-02'>SNS</span>を見れば、収入と影響力を売りにする目障りな<span data-modal='anno-01'>インフルエンサー</span>。<br>私が嫌いな2つのことです。<br><br>「一に投稿、二に投稿、三、四がなくて五に投稿」<br><br>これが、<span data-modal='anno-02'>SNS</span>で成功するための黄金律だと言われています。<br>毎日コツコツ投稿していれば、いつかは大きな影響力を持つ<span data-modal='anno-01'>インフルエンサー</span>になれる！<br>そう盲信している人も多いでしょう。<br><br>でも、私はこれには異論があります。<br><br>「一に実績、二に実績、三、四がなくて五に投稿」<br>じゃないかと。<br><br>どんなに投稿しても中身のない情報ばかり発信していれば、<br>そりゃあ<span data-modal='anno-03'>フォロワー</span>は増えません。<br><br>逆に本当に価値のある情報を発信していれば、<br>投稿頻度が少なくても人は集まってくる。<br><br>これは<span data-modal='anno-02'>SNS</span>だけでなく、ビジネスの世界でも同じこと。<br>特に今は、<span data-modal='anno-04'>Instagram</span>や<span data-modal='anno-05'>TikTok</span>を使えば、<br>誰でも簡単に「<span data-modal='anno-01'>インフルエンサー</span>」を名乗れる時代です。<br><br>美容、グルメ、投資、<span data-modal='anno-17'>プログラミング</span>......。<br>どんな分野でも、「<span data-modal='anno-01'>インフルエンサー</span>」と呼ばれる人たちが、<br>自らの<span data-modal='anno-06'>ノウハウ</span>を惜しみなく公開しています。<br><br>彼らの投稿に「いいね」を押し、彼らの<span data-modal='anno-07'>教材</span>を買えば、<br>きっとあなたも「<span data-modal='anno-01'>インフルエンサー</span>」への近道を歩めるはず。<br><br>...と、ここまで聞けば、話は簡単に思えるかもしれません。<br>でも、ちょっと待ってください。<br><br>その「<span data-modal='anno-01'>インフルエンサー</span>」と呼ばれる人たち、<br>本当に「自分の専門分野」で名をあげた人なのでしょうか?<br><br>そういった9割以上の人の"<span data-modal='anno-13'>本業</span>"は<br>「影響力を高める<span data-modal='anno-06'>ノウハウ</span>」<br>を<span data-modal='anno-02'>SNS</span>で売ることだと思っています。<br><br>19世紀アメリカの<span data-modal='anno-09'>ゴールドラッシュ</span>で一番儲けたのは誰か?<br>金を掘り当てた人ではありません。<br>ツルハシや作業服を売った人です。<br><br>これと同じことが、<br><span data-modal='anno-08'>インフルエンサーマーケティング</span>の世界でも起きています。<br><br>「<span data-modal='anno-03'>フォロワー</span>10万人達成!<span data-modal='anno-14'>副業</span>で月収100万円！」<br>「たった3ヶ月で人気<span data-modal='anno-01'>インフルエンサー</span>に！」<br><br>こんな触れ込みで、高額な<span data-modal='anno-10'>オンラインサロン</span>や<span data-modal='anno-11'>セミナー</span>、<span data-modal='anno-07'>教材</span>を売りつける<br>"なんちゃって<span data-modal='anno-01'>インフルエンサー</span>" が、<span data-modal='anno-02'>SNS</span>上にあちこち。<br><br>彼らは本当に宣伝文句通りの成功を収めたのでしょうか?<br>それとも「成功者」を演じることが彼らの商売なのでしょうか?<br><br>言ってしまえば彼らの "<span data-modal='anno-13'>本業</span>" は、<br>あなたのように<span data-modal='anno-01'>インフルエンサー</span>になりたい人から<br>お金を巻き上げることなのかもしれません。<br><br>彼らが本当に金を掘り当てたとも限りません。<br>私たちが外から見てわかるのは、金を掘る道具でビジネスをしているということだけ。<br>だから、実際にはもう金は採掘されつくしてないかもしれない。<br><br>金を掘る道具だけで商売をするのであれば、それはもうネズミ溝と何も変わりません。<br>それはもうインフルエンザウィルスを撒き散らすよりもタチが悪い。<br><br>もし本当に<span data-modal='anno-01'>インフルエンサー</span>になるのであれば、せっかく高いお金を払うのであれば、<br>金を現役で掘り当てられる本物の<span data-modal='anno-01'>インフルエンサー</span>から学ぶべきでしょう。<br><br>自ら成功を掴み取った人だから伝えられる、"真の<span data-modal='anno-06'>ノウハウ</span>" を学ぶべきでしょう。<br>そう思いませんか?<br><br>でも、その見極め方は難しい。<br>パッと見ただけでは本物の<span data-modal='anno-01'>インフルエンサー</span>も偽物の<span data-modal='anno-01'>インフルエンサー</span>も、区別がつきません。<br><br>むしろ偽物の<span data-modal='anno-01'>インフルエンサー</span>の方が、もっともらしいことを言って<br>人を惹きつけるのがうまかったりする。<br>そう、まるで童話に出てくる「カラスと狐」のように。<br><br>狐が愛想笑いを浮かべてカラスにこう話しかけるのです。<br><br>「おや、そちらはカラスさんですね！<br>あなたは実に姿が良くて美しい。きっと、歌声も綺麗なんでしょうね。<br>ぜひ一度、その歌声を聞かせていただけませんか?」<br><br>するとカラスはとても嬉しくなって「カーカー」と鳴いてみせました。<br>ところが次の瞬間、くちばしに咥えていたチーズを落としてしまったのです。<br><br>狐は飛びつくようにしてチーズを受け取り、こう言ったのでした。<br><br>「ありがとう、カラスさん。あなたの歌声はとても美しかったですよ」<br>カラスは、騙されたことにも気づかず、有頂天になってその場を立ち去ったとか。<br><br>この狡猾な狐のように、巧みな話術でもって人を丸め込む<br> "バカにとっての<span data-modal='anno-01'>インフルエンサー</span>たち"。<br><br>彼らの罠に嵌らないためには、どうすればいいのか。<br>1つは、「バカなカラスにならない」こと。<br><br>欲に目がくらんで、うまい話に飛びつくのは愚者。<br>いつも冷静で、批判的な目を持つこと。<br><br>もう1つは、「狐の尻尾(本性)を見抜く」こと。<br>その<span data-modal='anno-01'>インフルエンサー</span>が、<br>本当に自分の "<span data-modal='anno-13'>本業</span>" で成功した人物なのかを、徹底的に調べるのです。<br><br>言うは易し、行うは難し、かもしれません。<br>でも、あなたの貴重な時間とお金を投資する対象は、本物を選ぶべき。<br>そこを見極めるための労力は、惜しんではいけません。<br><br>本物の<span data-modal='anno-01'>インフルエンサー</span>から学び始めたとき、<br>きっとあなたの人生は思いもよらない方向に広がり、<br>ビジネスは予想外の速度と規模で成長を遂げるはずです。<br><br>さぁ、あなたはどうしますか?<br>偽物の<span data-modal='anno-01'>インフルエンサー</span>にチーズを奪われるバカなカラスになりますか?<br>それとも、狡猾な狐の尻尾を見抜く賢いカラスになりますか?<br><br>バカは風邪を引かないと言います。<br><br>カラスになれば何も得られませんが、もしかしたら<span data-modal='anno-01'>インフルエンサー</span>の<br>「いいね」ウィルスに感染したとも気づかずに、元気で幸せに暮らし続けられるのかもしれません。<br><br>まぁ、そう考えると悪いことばかりではないかもしれません笑<br>ただ、もし本物の「<span data-modal='anno-01'>インフルエンサー</span>」としての成功を目指したいのであれば、<br>"真に実績のある人物" を見極める目を養う方法を我々が教えます。<br><br>本物から学び、自分の価値を磨き上げることで、<br>きっとあなたは単なる<span data-modal='anno-03'>フォロワー</span>ではなく、<br>真の影響力を持つ存在へと成長できるはずです。<br>`,
        annotations: [
          {
            modal: "anno-01",
            term: "インフルエンサー",
            definition:
              "SNSで多くの人に影響を与える力を持つ人。フォロワーが多く発信力がある。",
          },
          {
            modal: "anno-02",
            term: "SNS",
            definition:
              "ソーシャルネットワーキングサービス。人同士がつながり交流するインターネットサービス。",
          },
          {
            modal: "anno-03",
            term: "フォロワー",
            definition:
              "SNSで特定のアカウントを継続的に見ている人。その人の投稿を定期的にチェックする人。",
          },
          {
            modal: "anno-04",
            term: "Instagram",
            definition:
              "写真や動画を投稿して共有するSNS。世界中で人気の画像中心のソーシャルメディア。",
          },
          {
            modal: "anno-05",
            term: "TikTok",
            definition:
              "短い動画を作成・共有するSNS。音楽に合わせたダンスなどが人気のアプリ。",
          },
          {
            modal: "anno-06",
            term: "ノウハウ",
            definition:
              "特定の分野で成功するための知識や技術。専門的な方法論やコツ。",
          },
          {
            modal: "anno-07",
            term: "教材",
            definition:
              "学習や技術習得のために作られた資料。本、動画、オンライン講座などの形で提供。",
          },
          {
            modal: "anno-08",
            term: "インフルエンサーマーケティング",
            definition:
              "影響力のある人に商品やサービスを宣伝してもらうマーケティング手法。",
          },
          {
            modal: "anno-09",
            term: "ゴールドラッシュ",
            definition:
              "19世紀アメリカで起きた金採掘ブーム。多くの人が一攫千金を夢見て金を探した。",
          },
          {
            modal: "anno-10",
            term: "オンラインサロン",
            definition:
              "インターネット上の有料会員制コミュニティ。専門知識や交流の場を提供。",
          },
          {
            modal: "anno-11",
            term: "セミナー",
            definition:
              "特定のテーマについて専門家が講義する勉強会。参加者が知識を学ぶ場。",
          },
          {
            modal: "anno-12",
            term: "ネズミ講",
            definition:
              "後から参加する人のお金で先に参加した人が利益を得る違法な仕組み。",
          },
          {
            modal: "anno-13",
            term: "本業",
            definition:
              "その人のメインとなる仕事や専門分野。主要な収入源となる職業。",
          },
          {
            modal: "anno-14",
            term: "副業",
            definition:
              "本業以外に行う仕事。追加収入を得るためのサブの職業活動。",
          },
          {
            modal: "anno-15",
            term: "批判的思考",
            definition:
              "情報を鵜呑みにせず、客観的に分析・判断する思考方法。クリティカルシンキング。",
          },
          {
            modal: "anno-16",
            term: "マーケティング",
            definition:
              "商品やサービスを効果的に売るための市場調査や宣伝活動の総称。",
          },
          {
            modal: "anno-17",
            term: "プログラミング",
            definition:
              "コンピューターに指示を出すためのプログラムを作成する技術や作業。",
          },
        ],
      },
      en: {
        title:
          'Don\'t Be a Foolish Crow Dancing to the Tune of Influencers Spreading the "Like" Virus',
        category: "",
        content: `Walking through town, there are annoying construction sites carried out with wasteful tax spending.<br>Looking at <span data-modal='anno-02'>SNS</span>, there are unsightly <span data-modal='anno-01'>influencers</span> selling their income and influence.<br>These are two things I hate.<br><br>"First posting, second posting, nothing for third and fourth, fifth posting"<br><br>This is said to be the golden rule for success on <span data-modal='anno-02'>SNS</span>. If you post diligently every day, someday you'll become a <span data-modal='anno-01'>influencer</span> with great influence! Many people probably blindly believe this.<br><br>But I disagree with this.<br><br>"First results, second results, nothing for third and fourth, fifth posting" is what I think it should be.<br><br>No matter how much you post, if you only share content with no substance, of course your <span data-modal='anno-03'>followers</span> won't increase.<br><br>Conversely, if you're truly sharing valuable information, people will gather even if your posting frequency is low.<br><br>This is the same not only for <span data-modal='anno-02'>SNS</span> but also in the business world. Especially now, it's an era where anyone can easily call themselves an "<span data-modal='anno-01'>influencer</span>" using <span data-modal='anno-04'>Instagram</span> or <span data-modal='anno-05'>TikTok</span>.<br><br>Beauty, gourmet, investment, <span data-modal='anno-17'>programming</span>... In any field, people called "<span data-modal='anno-01'>influencers</span>" generously share their <span data-modal='anno-06'>know-how</span>.<br><br>If you "like" their posts and buy their <span data-modal='anno-07'>educational materials</span>, surely you too can walk the shortcut to becoming an "<span data-modal='anno-01'>influencer</span>".<br><br>...Up to this point, it might sound simple. But wait a minute.<br><br>Are those people called "<span data-modal='anno-01'>influencers</span>" really people who made their name in "their field of expertise"?<br><br>I believe that the "<span data-modal='anno-13'>main business</span>" of over 90% of such people is selling "<span data-modal='anno-06'>know-how</span> for increasing influence" on <span data-modal='anno-02'>SNS</span>.<br><br>Who made the most money during the 19th-century American <span data-modal='anno-09'>Gold Rush</span>? It wasn't those who struck gold. It was those who sold pickaxes and work clothes.<br><br>The same thing is happening in the world of <span data-modal='anno-08'>influencer marketing</span>.<br><br>"Reached 100,000 <span data-modal='anno-03'>followers</span>! Monthly income of 1 million yen from <span data-modal='anno-14'>side business</span>!" "Became a popular <span data-modal='anno-01'>influencer</span> in just 3 months!"<br><br>With such catchphrases, fake <span data-modal='anno-01'>influencers</span> are everywhere on <span data-modal='anno-02'>SNS</span>, selling expensive <span data-modal='anno-10'>online salons</span>, <span data-modal='anno-11'>seminars</span>, and <span data-modal='anno-07'>educational materials</span>.<br><br>Did they really achieve the success their advertising claims? Or is playing "successful people" their business?<br><br>In other words, their "<span data-modal='anno-13'>main business</span>" might be taking money from people like you who want to become <span data-modal='anno-01'>influencers</span>.<br><br>They may not have actually struck gold. What we can see from the outside is only that they're doing business with gold-digging tools. So in reality, the gold might already be completely mined out.<br><br>If you're only doing business with gold-digging tools, that's no different from a rat race. That's worse than spreading influenza virus.<br><br>If you really want to become an <span data-modal='anno-01'>influencer</span>, if you're going to pay high money anyway, you should learn from real <span data-modal='anno-01'>influencers</span> who can actively strike gold.<br><br>You should learn "true <span data-modal='anno-06'>know-how</span>" that can only be conveyed by people who have grasped success themselves. Don't you think so?<br><br>But distinguishing them is difficult. At first glance, you can't tell the difference between real <span data-modal='anno-01'>influencers</span> and fake <span data-modal='anno-01'>influencers</span>.<br><br>Rather, fake <span data-modal='anno-01'>influencers</span> are often better at saying plausible things and attracting people. Yes, just like "The Crow and the Fox" from fairy tales.<br><br>The fox puts on a friendly smile and speaks to the crow like this:<br><br>"Oh, you're a crow! You have such a good figure and are beautiful. I'm sure your singing voice is also lovely. Could you please let me hear that singing voice just once?"<br><br>The crow became very happy and tried singing "Caw caw." But the next moment, it dropped the cheese it was holding in its beak.<br><br>The fox jumped to catch the cheese and said:<br><br>"Thank you, crow. Your singing voice was very beautiful." The crow, not even realizing it had been deceived, left the place in high spirits.<br><br>Like this cunning fox, there are "<span data-modal='anno-01'>influencers</span> for fools" who skillfully manipulate people with clever rhetoric.<br><br>How can we avoid falling into their trap? One way is to "not become a foolish crow."<br><br>Those blinded by greed who jump at good-sounding stories are fools. Always stay calm and maintain a critical eye.<br><br>Another way is to "see through the fox's tail (true nature)." Thoroughly investigate whether that <span data-modal='anno-01'>influencer</span> is truly someone who succeeded in their "<span data-modal='anno-13'>main business</span>".<br><br>It might be easier said than done. But the target of your precious time and money investment should be the real thing. You shouldn't spare effort to discern that.<br><br>When you start learning from real <span data-modal='anno-01'>influencers</span>, surely your life will expand in unexpected directions, and your business will achieve growth at unexpected speed and scale.<br><br>So, what will you do? Will you become a foolish crow whose cheese is stolen by fake <span data-modal='anno-01'>influencers</span>? Or will you become a wise crow who sees through the cunning fox's tail?<br><br>They say fools don't catch colds.<br><br>If you become a crow, you won't gain anything, but perhaps you might continue living happily and healthily without even realizing you've been infected with the <span data-modal='anno-01'>influencer</span> "like" virus.<br><br>Well, thinking about it that way, it might not be all bad lol. However, if you want to aim for success as a real "<span data-modal='anno-01'>influencer</span>," we'll teach you how to develop the eye to discern "truly accomplished people."<br><br>By learning from the real thing and polishing your own value, surely you can grow from being a mere <span data-modal='anno-03'>follower</span> to an existence with true influence.`,
        annotations: [
          {
            modal: "anno-01",
            term: "Influencer",
            definition:
              "A person who has the power to influence many people on social media. Has many followers and strong communication power.",
          },
          {
            modal: "anno-02",
            term: "SNS",
            definition:
              "Social Networking Service. Internet services where people connect and interact with each other.",
          },
          {
            modal: "anno-03",
            term: "Follower",
            definition:
              "A person who continuously follows a specific account on social media. Someone who regularly checks that person's posts.",
          },
          {
            modal: "anno-04",
            term: "Instagram",
            definition:
              "A social media platform for posting and sharing photos and videos. A globally popular image-centered social media.",
          },
          {
            modal: "anno-05",
            term: "TikTok",
            definition:
              "A social media platform for creating and sharing short videos. An app popular for dancing to music and similar content.",
          },
          {
            modal: "anno-06",
            term: "Know-how",
            definition:
              "Knowledge or skills for succeeding in a specific field. Professional methodology or techniques.",
          },
          {
            modal: "anno-07",
            term: "Educational Materials",
            definition:
              "Materials created for learning or skill acquisition. Provided in forms such as books, videos, online courses.",
          },
          {
            modal: "anno-08",
            term: "Influencer Marketing",
            definition:
              "A marketing method where influential people promote products or services.",
          },
          {
            modal: "anno-09",
            term: "Gold Rush",
            definition:
              "The gold mining boom that occurred in 19th century America. Many people searched for gold dreaming of striking it rich.",
          },
          {
            modal: "anno-10",
            term: "Online Salon",
            definition:
              "A paid membership community on the internet. Provides specialized knowledge and networking opportunities.",
          },
          {
            modal: "anno-11",
            term: "Seminar",
            definition:
              "A study session where experts lecture on specific topics. A place for participants to learn knowledge.",
          },
          {
            modal: "anno-12",
            term: "Pyramid Scheme",
            definition:
              "An illegal system where people who join later provide money for those who joined earlier to profit.",
          },
          {
            modal: "anno-13",
            term: "Main Job",
            definition:
              "A person's primary work or professional field. The occupation that serves as the main source of income.",
          },
          {
            modal: "anno-14",
            term: "Side Job",
            definition:
              "Work done in addition to the main job. Secondary professional activities for earning additional income.",
          },
          {
            modal: "anno-15",
            term: "Critical Thinking",
            definition:
              "A thinking method that doesn't accept information blindly but analyzes and judges objectively. Critical thinking.",
          },
          {
            modal: "anno-16",
            term: "Marketing",
            definition:
              "General term for market research and promotional activities to effectively sell products or services.",
          },
          {
            modal: "anno-17",
            term: "Programming",
            definition:
              "The technology or work of creating programs that give instructions to computers.",
          },
        ],
      },
      zh: {
        title: '不要成为被散播"点赞"病毒的网红操控的愚蠢乌鸦',
        category: "",
        content: `走在街上，有用税金浪费进行的刺耳工地。<br>看<span data-modal='anno-02'>SNS</span>，有以收入和影响力为卖点的碍眼<span data-modal='anno-01'>网红</span>。<br>这是我讨厌的两件事。<br><br>"一发帖，二发帖，三四没有，五发帖"<br><br>这被说是在<span data-modal='anno-02'>SNS</span>上成功的黄金法则。如果每天坚持发帖，总有一天能成为有巨大影响力的<span data-modal='anno-01'>网红</span>！大概有很多人盲信这个吧。<br><br>但是，我对此有异议。<br><br>"一实绩，二实绩，三四没有，五发帖"不是吗。<br><br>无论多么发帖，如果只发布没有内容的信息，那当然<span data-modal='anno-03'>粉丝</span>不会增加。<br><br>相反，如果真的发布有价值的信息，即使发帖频率少，人们也会聚集过来。<br><br>这不仅是<span data-modal='anno-02'>SNS</span>，在商业世界也是一样的。特别是现在，使用<span data-modal='anno-04'>Instagram</span>或<span data-modal='anno-05'>TikTok</span>，任何人都能简单地自称"<span data-modal='anno-01'>网红</span>"的时代。<br><br>美容、美食、投资、<span data-modal='anno-17'>编程</span>......在任何领域，被称为"<span data-modal='anno-01'>网红</span>"的人们都毫不吝惜地公开自己的<span data-modal='anno-06'>诀窍</span>。<br><br>对他们的帖子点"赞"，买他们的<span data-modal='anno-07'>教材</span>，你肯定也能走向成为"<span data-modal='anno-01'>网红</span>"的捷径。<br><br>...听到这里，话题可能听起来很简单。但是，请等一下。<br><br>那些被称为"<span data-modal='anno-01'>网红</span>"的人，真的是在"自己的专业领域"成名的人吗？<br><br>我认为这样的人90%以上的"<span data-modal='anno-13'>本业</span>"是在<span data-modal='anno-02'>SNS</span>上销售"提高影响力的<span data-modal='anno-06'>诀窍</span>"。<br><br>19世纪美国<span data-modal='anno-09'>淘金热</span>中最赚钱的是谁？不是挖到金子的人。是卖镐头和工作服的人。<br><br>同样的事情在<span data-modal='anno-08'>网红营销</span>的世界也在发生。<br><br>"<span data-modal='anno-03'>粉丝</span>10万人达成！<span data-modal='anno-14'>副业</span>月收入100万日元！""仅仅3个月就成为人气<span data-modal='anno-01'>网红</span>！"<br><br>用这样的宣传语，高价销售<span data-modal='anno-10'>在线沙龙</span>、<span data-modal='anno-11'>讲座</span>、<span data-modal='anno-07'>教材</span>的"伪<span data-modal='anno-01'>网红</span>"在<span data-modal='anno-02'>SNS</span>上到处都是。<br><br>他们真的取得了宣传语所说的成功吗？还是扮演"成功者"是他们的生意？<br><br>说起来他们的"<span data-modal='anno-13'>本业</span>"可能就是从像你这样想成为<span data-modal='anno-01'>网红</span>的人那里卷走金钱。<br><br>他们也不一定真的挖到了金子。我们从外面能看到的，只是他们在用挖金子的工具做生意。所以，实际上金子可能已经被挖光了。<br><br>如果只用挖金子的工具做生意，那就和老鼠赛跑没有区别了。那比散布流感病毒还要恶劣。<br><br>如果真的要成为<span data-modal='anno-01'>网红</span>，既然要付高价，就应该向能现役挖到金子的真正<span data-modal='anno-01'>网红</span>学习。<br><br>应该学习因为自己抓住了成功才能传授的"真正<span data-modal='anno-06'>诀窍</span>"。你不这样认为吗？<br><br>但是，那个分辨方法很难。乍一看，真正的<span data-modal='anno-01'>网红</span>和假的<span data-modal='anno-01'>网红</span>都无法区别。<br><br>反而假的<span data-modal='anno-01'>网红</span>更擅长说看似有道理的话来吸引人。是的，就像童话中出现的"乌鸦和狐狸"一样。<br><br>狐狸露出亲切的笑容对乌鸦这样说话：<br><br>"哎呀，您是乌鸦先生呢！您的身姿真好真美丽。肯定歌声也很动听吧。能不能请您让我听一次那个歌声？"<br><br>于是乌鸦变得非常高兴，"嘎嘎"地叫给它看。但是下一瞬间，咬在嘴里的奶酪掉了。<br><br>狐狸跳起来接住奶酪，这样说：<br><br>"谢谢，乌鸦先生。您的歌声非常美丽。"乌鸦甚至没有意识到被骗了，得意洋洋地离开了那个地方。<br><br>像这个狡猾的狐狸一样，用巧妙的话术哄骗人的"对笨蛋来说的<span data-modal='anno-01'>网红</span>们"。<br><br>为了不掉入他们的陷阱，应该怎么办？一个是"不要成为笨蛋乌鸦"。<br><br>被欲望蒙蔽双眼，跳向好听话的是愚者。总是冷静，拥有批判的眼光。<br><br>另一个是"看穿狐狸的尾巴（本性）"。彻底调查那个<span data-modal='anno-01'>网红</span>是否真的是在自己的"<span data-modal='anno-13'>本业</span>"中成功的人物。<br><br>说起来容易做起来难，可能是这样。但是，你宝贵的时间和金钱的投资对象，应该选择真品。为了分辨那个的努力，不应该吝惜。<br><br>当开始向真正的<span data-modal='anno-01'>网红</span>学习时，你的人生肯定会向意想不到的方向扩展，商业会以预想外的速度和规模实现成长。<br><br>那么，你会怎么做？会成为被假<span data-modal='anno-01'>网红</span>夺走奶酪的笨蛋乌鸦吗？还是会成为看穿狡猾狐狸尾巴的聪明乌鸦？<br><br>据说笨蛋不会感冒。<br><br>如果成为乌鸦虽然什么都得不到，但说不定不会意识到感染了<span data-modal='anno-01'>网红</span>的"点赞"病毒，能够元气满满幸福地继续生活。<br><br>嗯，这样想的话可能不全是坏事笑。但是，如果想以真正的"<span data-modal='anno-01'>网红</span>"的成功为目标，我们会教你培养分辨"真正有实绩的人物"的眼光的方法。<br><br>通过向真品学习，磨练自己的价值，你肯定能从单纯的<span data-modal='anno-03'>粉丝</span>成长为拥有真正影响力的存在。`,
        annotations: [
          {
            modal: "anno-01",
            term: "网红",
            definition: "在社交媒体上对很多人有影响力的人。粉丝多且有传播力。",
          },
          {
            modal: "anno-02",
            term: "社交媒体",
            definition: "社交网络服务。人与人之间连接交流的互联网服务。",
          },
          {
            modal: "anno-03",
            term: "粉丝",
            definition:
              "在社交媒体上持续关注特定账户的人。定期查看该人发布内容的人。",
          },
          {
            modal: "anno-04",
            term: "Instagram",
            definition:
              "发布和分享照片和视频的社交媒体。全球流行的以图像为中心的社交媒体。",
          },
          {
            modal: "anno-05",
            term: "TikTok",
            definition:
              "制作、分享短视频的社交媒体。配合音乐跳舞等内容很受欢迎的应用。",
          },
          {
            modal: "anno-06",
            term: "诀窍",
            definition: "在特定领域成功的知识或技术。专业的方法论或技巧。",
          },
          {
            modal: "anno-07",
            term: "教材",
            definition:
              "为学习或技术掌握而制作的资料。以书籍、视频、在线课程等形式提供。",
          },
          {
            modal: "anno-08",
            term: "网红营销",
            definition: "让有影响力的人宣传商品或服务的营销手法。",
          },
          {
            modal: "anno-09",
            term: "淘金热",
            definition:
              "19世纪美国发生的淘金热潮。许多人怀着一夜暴富的梦想寻找黄金。",
          },
          {
            modal: "anno-10",
            term: "在线社群",
            definition: "互联网上的付费会员制社区。提供专业知识和交流场所。",
          },
          {
            modal: "anno-11",
            term: "研讨会",
            definition:
              "专家就特定主题进行讲座的学习会。参与者学习知识的场所。",
          },
          {
            modal: "anno-12",
            term: "传销",
            definition: "后参加的人的钱让先参加的人获利的违法机制。",
          },
          {
            modal: "anno-13",
            term: "主业",
            definition: "该人的主要工作或专业领域。成为主要收入来源的职业。",
          },
          {
            modal: "anno-14",
            term: "副业",
            definition: "除主业外进行的工作。为获得额外收入的副职业活动。",
          },
          {
            modal: "anno-15",
            term: "批判性思维",
            definition: "不盲信信息，客观分析判断的思考方法。批判性思考。",
          },
          {
            modal: "anno-16",
            term: "营销",
            definition: "为有效销售商品或服务的市场调研和宣传活动总称。",
          },
          {
            modal: "anno-17",
            term: "编程",
            definition: "制作向计算机发出指示的程序的技术或作业。",
          },
        ],
      },
    },
  },
  {
    id: "03",
    link: "/marketing/03",
    translations: {
      ja: {
        title:
          "誤解だらけの「おもてなし」:日本企業の海外戦略に足りないものとは?",
        category: "",
        content: `ニューヨークの一等地にオープンした高級和食レストラン。<br><br>着物姿の店員が深々とお辞儀をし、<br>「いらっしゃいませ」と日本語で迎えます。<br><br>「<span data-modal='anno-02'>おもてなし</span>の精神」に溢れた、<br>まさに日本人だからこそ出来るハイクオリティなサービス。<br><br>......と、多くの日本人は思っているでしょう。<br><br>ところが、この「日本風<span data-modal='anno-02'>おもてなし</span>」が<br><span data-modal='anno-01'>海外マーケティング</span>における落とし穴であることに、<br>ほとんどの日本企業は気づいていません。<br><br>実は、世界中どこに行っても、いお金を払えば「<span data-modal='anno-02'>おもてなし</span>」はされます。<br>それは日本に限ったことではありません。<br><br>でも、それって本当の意味での「<span data-modal='anno-02'>おもてなし</span>」なんでしょうか?<br><br>あなたが海外のレストランで高額な食事をしたとします。<br>ウェイターは丁寧で、サービスは完璧。<br>でも、それって単なる「<span data-modal='anno-03'>サービスの対価</span>」じゃありませんか?<br><br>一方日本では、なんとお金を払わなくても「<span data-modal='anno-02'>おもてなし</span>」してくれることがあります。<br><br>例えば暑い日に店に入ったら「暑いでしょう?お茶をどうぞ」と無料でお茶を出してくれる。<br>あるいはこの店が海外に出店し、現地のルールに合わせて「お茶の提供は一杯まで！」と決めたとします。<br><br>それでも日本人スタッフであれば<br>「ごめんなさいねー、熱いから飲ましてあげたいんだけど。<br>お茶は一杯までだから、代わりにお水持ってきますね」<br>と言うでしょう。<br><br>しかも、代金も<span data-modal='anno-04'>チップ</span>も払っていないにもかかわらず、です。<br>これこそが、本当の<span data-modal='anno-02'>おもてなし</span>なんです。<br><br>多くの日本企業は、形式的な「<span data-modal='anno-02'>おもてなし</span>」を輸出しようとしています。<br>着物を着て、深々とお辞儀をして......。<br><br>でも、外国人が本当に感動するのは、そんな形式的なものではありません。<br>彼らが感動するのは、日本人の自然な気遣いや心遣いなんです。<br><br>それは、お金を払ったからといって受けられるサービスではありません。<br>むしろ<span data-modal='anno-15'>属人的</span>で、計算されていない親切さなのです。<br><br>ある日本の電機メーカーが、<br>日本と同じ厳格な<span data-modal='anno-05'>品質管理基準</span>をアメリカでも適用したそうです。<br>その結果、製品コストが高騰し、<span data-modal='anno-06'>市場シェア</span>を大きく落としました。<br>何が問題だったのでしょうか?<br><br>アメリカ市場では、日本のような厳格さは求められていませんでした。<br>むしろ「適度な品質」と「手頃な価格」のバランスを重視していたんです。<br>日本式のこだわりが、かえって<span data-modal='anno-07'>競争力</span>を失わせる結果になりました。<br><br>言ってみれば、一流の寿司職人がハンバーガーを握ろうとしているようなもの。<br>日本人の技術はたしかに素晴らしい。<br><br>ところが、海外のお客さんが求めているものからはズレている。<br>そういったことがよくあります。<br><br>「でも、日本の細やかな精神と<span data-modal='anno-02'>おもてなし</span>、そして技術は、世界に誇れるものじゃないか！」<br>そう思っている方、残念ながらそれは違います。<br><br>世界の人々が求めているのは、「形式的な<span data-modal='anno-02'>おもてなし</span>」ではありません。<br>彼らが求めているのは、日本人なら自然と出てくる、<span data-modal='anno-13'>ホスピタリティ</span>に溢れた<span data-modal='anno-02'>おもてなし</span>なんです。<br><br>見た目の「日本らしさ」にこだわるあまり、現地の人々の<span data-modal='anno-08'>ニーズ</span>を無視してはいけません。<br>あなたの会社はどうですか?<br><br>まだ「形だけの日本式」にこだわり続けてないですか?<br>もしかしたら、あなたの会社の<span data-modal='anno-09'>海外戦略</span>も、世界中の人々に笑いものにされているかもしれません。<br><br>「ああ、また日本人が来たよ。今度は何を押し付けてくれるんだろう?」<br>なんて陰で囁かれているかも......。<br><br>ですが、心配はご無用。<br>本当の<span data-modal='anno-02'>おもてなし</span>の精神さえ理解していれば、それを海外で活かす方法はあります。<br><br>ただし、それには適切な<span data-modal='anno-10'>アプローチ</span>が必要です。<br><br>まず、海外の労働者と日本の労働者の思考は、まったく異なることを理解すること。<br>日本的な「<span data-modal='anno-02'>おもてなし</span>」の心を持ちつつ、それを現地の文化に合わせて表現する必要があるのです。<br><br>「空気を読め」なんて言葉、向こうじゃ通用しません。<br>むしろ「日本人はAirが見えるのか!?」なんて真顔で聞かれます(笑)<br><br>だからこそ、適切な<span data-modal='anno-11'>ディレクション</span>が重要なんです。<br><br>「現地の人間の特性を知り、彼らを通じて<span data-modal='anno-02'>おもてなし</span>の心を伝える方法を見つける」<br>これが、<span data-modal='anno-12'>グローバル戦略</span>の鍵になります。<br><br>アメリカ人に「頑張ってください」なんて言っても、<br>「何を?いつまでに?どれくらい?」と質問攻めにあうだけ。<br><br>彼らには具体的な指示が必要なんです。<br>日本人のように「なんとなく」や「よしなに」などは通用しません。<br><br>ただし、日本的な気遣いの心は忘れずに。<br><br>アメリカ人とて、口では「Yes」と言っても、本当はやりたくないのかもしれません。<br>その気持ちを察する力こそが、日本人の強みなのです。<br><br>古の日本にインスパイアされてしまった<br>「形だけ日本風」の<span data-modal='anno-02'>おもてなし</span>の強要は、もう終わりにしませんか?<br><br>形だけの日本風<span data-modal='anno-02'>おもてなし</span>は、<br>慣れない外国人に無理やり箸で寿司を食べさせようとするようなもの。<br>確かに日本的ですが、口に運ぶ前に寿司はボロボロでしょう。<br>そうではなく、現代の日本人も自然と持ち合わせている<br>「本質的な<span data-modal='anno-02'>おもてなし</span>精神」こそが、<span data-modal='anno-09'>海外戦略</span>を成功させる鍵なのです。<br>`,
        annotations: [
          {
            modal: "anno-01",
            term: "海外マーケティング",
            definition:
              "自国以外の市場で商品やサービスを宣伝・販売する活動。国際的な販促戦略。",
          },
          {
            modal: "anno-02",
            term: "おもてなし",
            definition:
              "日本独特の心のこもったサービス精神。相手を思いやる気持ちで接客すること。",
          },
          {
            modal: "anno-03",
            term: "サービスの対価",
            definition:
              "提供されたサービスに対して支払う料金や報酬。サービス料金のこと。",
          },
          {
            modal: "anno-04",
            term: "チップ",
            definition:
              "サービスへの感謝として追加で渡すお金。主に欧米のサービス業で一般的。",
          },
          {
            modal: "anno-05",
            term: "品質管理基準",
            definition:
              "製品やサービスの品質を一定水準に保つための規則や基準。QC基準。",
          },
          {
            modal: "anno-06",
            term: "市場シェア",
            definition:
              "特定の市場における企業の売上占有率。業界内での地位を示す指標。",
          },
          {
            modal: "anno-07",
            term: "競争力",
            definition:
              "他社に対する優位性。価格、品質、サービスなどで勝る能力。",
          },
          {
            modal: "anno-08",
            term: "ニーズ",
            definition:
              "顧客が求めている要求や必要性。市場調査で把握すべき重要な要素。",
          },
          {
            modal: "anno-09",
            term: "海外戦略",
            definition:
              "外国市場での事業展開を成功させるための計画や方針。国際事業戦略。",
          },
          {
            modal: "anno-10",
            term: "アプローチ",
            definition:
              "目標達成のための方法や手段。問題解決や営業活動の進め方。",
          },
          {
            modal: "anno-11",
            term: "ディレクション",
            definition: "方向性を示すこと。部下や現場スタッフへの指示や指導。",
          },
          {
            modal: "anno-12",
            term: "グローバル戦略",
            definition:
              "世界規模での事業展開を目指す企業戦略。国境を越えた経営方針。",
          },
          {
            modal: "anno-13",
            term: "ホスピタリティ",
            definition:
              "心からのもてなしや歓待の精神。サービス業における基本的な心構え。",
          },
          {
            modal: "anno-14",
            term: "現地化",
            definition:
              "海外進出時に、その国の文化や習慣に合わせてサービスを調整すること。",
          },
          {
            modal: "anno-15",
            term: "属人的",
            definition:
              "個人の性格や能力に依存すること。システム化されていない個人技。",
          },
        ],
      },
      en: {
        title:
          "Omotenashi Misunderstood: What's Missing in Japanese Companies' Overseas Strategy?",
        category: "",
        content: `A high-end Japanese restaurant opened in a prime location in New York.<br><br>Staff in kimono bow deeply and greet customers with "irasshaimase" in Japanese.<br><br>High-quality service overflowing with the spirit of "<span data-modal='anno-02'>omotenashi</span>" that only Japanese people can provide.<br><br>...Many Japanese people probably think this way.<br><br>However, most Japanese companies don't realize that this "Japanese-style <span data-modal='anno-02'>omotenashi</span>" is a pitfall in <span data-modal='anno-01'>overseas marketing</span>.<br><br>Actually, anywhere in the world, if you pay money, you'll receive "<span data-modal='anno-02'>omotenashi</span>". It's not limited to Japan.<br><br>But is that really "<span data-modal='anno-02'>omotenashi</span>" in the true sense?<br><br>Suppose you have an expensive meal at an overseas restaurant. The waiter is polite and the service is perfect. But isn't that just "<span data-modal='anno-03'>compensation for service</span>"?<br><br>On the other hand, in Japan, they sometimes provide "<span data-modal='anno-02'>omotenashi</span>" even without payment.<br><br>For example, if you enter a store on a hot day, they'll offer free tea saying "It's hot, isn't it? Please have some tea." Or suppose this store expands overseas and decides according to local rules "Tea service is limited to one cup!"<br><br>Even so, Japanese staff would say: "I'm sorry, I'd like to let you drink more because it's hot. Tea is limited to one cup, so I'll bring you water instead."<br><br>Moreover, this is despite not paying any fee or <span data-modal='anno-04'>tip</span>. This is true <span data-modal='anno-02'>omotenashi</span>.<br><br>Many Japanese companies try to export formal "<span data-modal='anno-02'>omotenashi</span>". Wearing kimono, bowing deeply...<br><br>But what truly moves foreigners isn't such formality. What moves them is the natural consideration and thoughtfulness of Japanese people.<br><br>It's not a service you can receive just because you paid money. Rather, it's <span data-modal='anno-15'>personal</span> and uncalculated kindness.<br><br>A Japanese electronics manufacturer apparently applied the same strict <span data-modal='anno-05'>quality control standards</span> in America as in Japan. As a result, product costs soared and they lost significant <span data-modal='anno-06'>market share</span>. What was the problem?<br><br>The American market didn't demand Japanese-level strictness. Rather, they valued the balance of "appropriate quality" and "reasonable prices." Japanese-style obsession ended up losing <span data-modal='anno-07'>competitiveness</span>.<br><br>It's like a first-class sushi chef trying to make hamburgers. Japanese skills are certainly wonderful.<br><br>However, they're often off from what overseas customers are seeking.<br><br>"But Japan's meticulous spirit, <span data-modal='anno-02'>omotenashi</span>, and technology are things we can be proud of worldwide!" If you think this way, unfortunately, you're wrong.<br><br>What people around the world seek isn't "formal <span data-modal='anno-02'>omotenashi</span>". What they seek is <span data-modal='anno-02'>omotenashi</span> overflowing with <span data-modal='anno-13'>hospitality</span> that comes naturally from Japanese people.<br><br>You shouldn't ignore local people's <span data-modal='anno-08'>needs</span> by obsessing too much with the appearance of "Japaneseness." How about your company?<br><br>Are you still obsessing with "superficial Japanese-style" approaches? Perhaps your company's <span data-modal='anno-09'>overseas strategy</span> is being laughed at by people worldwide.<br><br>"Oh, here come the Japanese again. What are they going to force on us this time?" They might be whispering behind your back...<br><br>But don't worry. If you understand the true spirit of <span data-modal='anno-02'>omotenashi</span>, there are ways to utilize it overseas.<br><br>However, this requires the right <span data-modal='anno-10'>approach</span>.<br><br>First, understand that overseas workers and Japanese workers think completely differently. While maintaining the Japanese heart of "<span data-modal='anno-02'>omotenashi</span>," you need to express it adapted to local culture.<br><br>Phrases like "read the air" don't work over there. Rather, they'll ask with a straight face, "Can Japanese people see Air?!" (laugh)<br><br>That's why proper <span data-modal='anno-11'>direction</span> is important.<br><br>"Know the characteristics of local people and find ways to convey the heart of <span data-modal='anno-02'>omotenashi</span> through them." This becomes the key to <span data-modal='anno-12'>global strategy</span>.<br><br>If you tell Americans "please do your best," you'll just be bombarded with questions: "Do what? By when? How much?"<br><br>They need specific instructions. Vague Japanese expressions like "somehow" or "appropriately" don't work.<br><br>However, don't forget the Japanese heart of consideration.<br><br>Even Americans, though they say "Yes" verbally, might not really want to do it. The ability to sense those feelings is the strength of Japanese people.<br><br>Shouldn't we stop forcing "superficial Japanese-style" <span data-modal='anno-02'>omotenashi</span> inspired by ancient Japan?<br><br>Superficial Japanese-style <span data-modal='anno-02'>omotenashi</span> is like forcing unfamiliar foreigners to eat sushi with chopsticks. It's certainly Japanese, but the sushi will fall apart before reaching their mouth. Instead, the "essential <span data-modal='anno-02'>omotenashi</span> spirit" that modern Japanese people naturally possess is the key to successful <span data-modal='anno-09'>overseas strategy</span>.`,
        annotations: [
          {
            modal: "anno-01",
            term: "International Marketing",
            definition:
              "Activities to promote and sell products or services in markets outside one's own country. International promotional strategy.",
          },
          {
            modal: "anno-02",
            term: "Omotenashi",
            definition:
              "Japan's unique spirit of heartfelt service. Serving customers with a caring mindset.",
          },
          {
            modal: "anno-03",
            term: "Service Fee",
            definition:
              "Payment or compensation for services provided. Service charges.",
          },
          {
            modal: "anno-04",
            term: "Tip",
            definition:
              "Additional money given as appreciation for service. Common primarily in Western service industries.",
          },
          {
            modal: "anno-05",
            term: "Quality Control Standards",
            definition:
              "Rules or standards to maintain product or service quality at a certain level. QC standards.",
          },
          {
            modal: "anno-06",
            term: "Market Share",
            definition:
              "A company's sales share in a specific market. An indicator showing position within the industry.",
          },
          {
            modal: "anno-07",
            term: "Competitiveness",
            definition:
              "Advantages over other companies. The ability to excel in price, quality, service, etc.",
          },
          {
            modal: "anno-08",
            term: "Needs",
            definition:
              "Requirements or necessities that customers seek. Important elements to understand in market research.",
          },
          {
            modal: "anno-09",
            term: "International Strategy",
            definition:
              "Plans or policies to succeed in business development in foreign markets. International business strategy.",
          },
          {
            modal: "anno-10",
            term: "Approach",
            definition:
              "Methods or means to achieve goals. Ways to proceed with problem-solving or sales activities.",
          },
          {
            modal: "anno-11",
            term: "Direction",
            definition:
              "Indicating direction. Instructions or guidance to subordinates or field staff.",
          },
          {
            modal: "anno-12",
            term: "Global Strategy",
            definition:
              "Corporate strategy aimed at worldwide business development. Management policies that transcend borders.",
          },
          {
            modal: "anno-13",
            term: "Hospitality",
            definition:
              "The spirit of genuine hospitality and welcome. Basic mindset in the service industry.",
          },
          {
            modal: "anno-14",
            term: "Localization",
            definition:
              "Adjusting services to match the culture and customs of a country when expanding overseas.",
          },
          {
            modal: "anno-15",
            term: "Person-dependent",
            definition:
              "Depending on individual personality or abilities. Individual skills that are not systematized.",
          },
        ],
      },
      zh: {
        title: '被误解的"款待之道"：日本企业海外战略缺少的是什么？',
        category: "",
        content: `在纽约黄金地段开业的高级日式料理店。<br><br>穿着和服的店员深深鞠躬，用日语说"欢迎光临"迎接客人。<br><br>充满"<span data-modal='anno-02'>待客之道</span>"精神的，正是只有日本人才能做到的高质量服务。<br><br>......很多日本人大概是这样认为的吧。<br><br>然而，大部分日本企业都没有意识到这种"日式<span data-modal='anno-02'>待客之道</span>"在<span data-modal='anno-01'>海外营销</span>中是一个陷阱。<br><br>实际上，世界上任何地方，只要付钱就会得到"<span data-modal='anno-02'>待客之道</span>"。这不仅限于日本。<br><br>但是，那真的是真正意义上的"<span data-modal='anno-02'>待客之道</span>"吗？<br><br>假设你在海外餐厅吃了高价餐食。服务员很礼貌，服务很完美。但是，那不就是单纯的"<span data-modal='anno-03'>服务对价</span>"吗？<br><br>另一方面，在日本，即使不付钱也会有"<span data-modal='anno-02'>待客之道</span>"。<br><br>比如热天进店的话会说"很热吧？请喝茶"免费提供茶水。或者这家店在海外开店，按照当地规则决定"茶水提供只限一杯！"<br><br>即使如此，如果是日本员工的话会说："不好意思呢，因为热想让您多喝点。茶水只限一杯，我给您拿水来。"<br><br>而且，这是在没有付费用也没有付<span data-modal='anno-04'>小费</span>的情况下。这才是真正的<span data-modal='anno-02'>待客之道</span>。<br><br>很多日本企业试图出口形式上的"<span data-modal='anno-02'>待客之道</span>"。穿着和服，深深鞠躬......<br><br>但是，外国人真正感动的不是那种形式上的东西。他们感动的是日本人自然的关怀和体贴。<br><br>那不是因为付了钱就能得到的服务。而是<span data-modal='anno-15'>属人性</span>的、没有计算的亲切。<br><br>某日本电机制造商，据说在美国也适用了与日本相同的严格<span data-modal='anno-05'>质量管理标准</span>。结果，产品成本高涨，<span data-modal='anno-06'>市场份额</span>大幅下降。问题出在哪里？<br><br>美国市场不需要日本那样的严格性。反而重视"适度质量"和"合理价格"的平衡。日式坚持反而导致失去<span data-modal='anno-07'>竞争力</span>的结果。<br><br>说起来，就像一流寿司师傅试图握汉堡包一样。日本人的技术确实很出色。<br><br>但是，经常与海外客人求的东西有偏差。<br><br>"但是，日本细致的精神和<span data-modal='anno-02'>待客之道</span>，还有技术，不是世界可以自豪的东西吗！"这样想的人，遗憾的是那是错误的。<br><br>世界人民求的不是"形式上的<span data-modal='anno-02'>待客之道</span>"。他们求的是日本人自然流露出来的，充满<span data-modal='anno-13'>好客精神</span>的<span data-modal='anno-02'>待客之道</span>。<br><br>不要因为过分拘泥于外表的"日本风"而忽视当地人的<span data-modal='anno-08'>需求</span>。你的公司怎么样？<br><br>还在继续拘泥于"只有形式的日式"吗？说不定你公司的<span data-modal='anno-09'>海外战略</span>也被世界各地的人们嘲笑。<br><br>"啊，日本人又来了。这次要强加给我们什么呢？"可能在背后这样窃窃私语......<br><br>但是，不用担心。只要理解真正的<span data-modal='anno-02'>待客之道</span>精神，就有在海外发挥的方法。<br><br>但是，那需要适当的<span data-modal='anno-10'>方法</span>。<br><br>首先，要理解海外劳动者和日本劳动者的思考完全不同。在拥有日式"<span data-modal='anno-02'>待客之道</span>"的心的同时，需要根据当地文化来表达。<br><br>"察言观色"这样的话语，在那边不通用。反而会被正脸问"日本人能看见空气吗！？"（笑）<br><br>正因如此，适当的<span data-modal='anno-11'>指导</span>很重要。<br><br>"了解当地人的特性，通过他们找到传达<span data-modal='anno-02'>待客之道</span>之心的方法"这成为<span data-modal='anno-12'>全球战略</span>的关键。<br><br>对美国人说"请加油"的话，只会被质问"做什么？到什么时候？做多少？"<br><br>他们需要具体的指示。日本人的"大概"或"酌情"等不通用。<br><br>但是，不要忘记日式体贴的心。<br><br>美国人即使嘴上说"Yes"，真的可能不想做。察觉那种心情的能力正是日本人的强项。<br><br>受古代日本启发的"只有形式的日式"<span data-modal='anno-02'>待客之道</span>的强制，不要结束了吗？<br><br>只有形式的日式<span data-modal='anno-02'>待客之道</span>，就像强迫不习惯的外国人用筷子吃寿司一样。确实很日式，但寿司在送到嘴里之前就会散架吧。不是这样，而是现代日本人也自然具备的"本质性<span data-modal='anno-02'>待客之道</span>精神"才是<span data-modal='anno-09'>海外战略</span>成功的关键。`,
        annotations: [
          {
            modal: "anno-01",
            term: "海外营销",
            definition:
              "在本国以外的市场宣传、销售商品或服务的活动。国际促销策略。",
          },
          {
            modal: "anno-02",
            term: "待客之道",
            definition: "日本独特的用心服务精神。以体贴对方的心情进行接待。",
          },
          {
            modal: "anno-03",
            term: "服务费用",
            definition: "对提供的服务支付的费用或报酬。服务收费。",
          },
          {
            modal: "anno-04",
            term: "小费",
            definition:
              "作为对服务感谢而额外给予的钱。主要在欧美服务业中普遍存在。",
          },
          {
            modal: "anno-05",
            term: "质量管理标准",
            definition: "为保持产品或服务质量在一定水准的规则或标准。QC标准。",
          },
          {
            modal: "anno-06",
            term: "市场份额",
            definition:
              "企业在特定市场中的销售占有率。显示在行业内地位的指标。",
          },
          {
            modal: "anno-07",
            term: "竞争力",
            definition:
              "相对于其他公司的优势。在价格、质量、服务等方面胜出的能力。",
          },
          {
            modal: "anno-08",
            term: "需求",
            definition:
              "顾客所寻求的要求或必要性。市场调研中应把握的重要要素。",
          },
          {
            modal: "anno-09",
            term: "海外战略",
            definition: "在外国市场事业发展成功的计划或方针。国际事业战略。",
          },
          {
            modal: "anno-10",
            term: "方法",
            definition: "达成目标的方法或手段。问题解决或营销活动的推进方式。",
          },
          {
            modal: "anno-11",
            term: "指导",
            definition: "指示方向性。对下属或现场工作人员的指示或指导。",
          },
          {
            modal: "anno-12",
            term: "全球战略",
            definition:
              "以世界规模事业发展为目标的企业战略。跨越国境的经营方针。",
          },
          {
            modal: "anno-13",
            term: "款待精神",
            definition: "发自内心的款待和欢迎精神。服务业中的基本心态。",
          },
          {
            modal: "anno-14",
            term: "本土化",
            definition: "海外进军时，配合该国文化和习俗调整服务。",
          },
          {
            modal: "anno-15",
            term: "依赖个人",
            definition: "依存于个人性格或能力。未系统化的个人技能。",
          },
        ],
      },
    },
  },
];

export const dataFx: ArticleType[] = [
  {
    id: "01",
    link: "/fx/01",
    translations: {
      ja: {
        title:
          "「月利50%」を生む錬金術?投資の神様 vs 怪しいFX業者、あなたはどちらを信じますか",
        category: "",
        content: `こんな魅力的な言葉を耳にしたことはありませんか?<br><br>「<span data-modal='anno-02'>FX</span>で毎月50%の利益を出せる投資術！」<br>驚異的な<span data-modal='anno-03'>利回り</span>ですよね！まるで<span data-modal='anno-04'>錬金術</span>のようです。<br><br>では、ちょっと現実的な計算をしてみましょう。<br>1万円を元手に<span data-modal='anno-01'>月利</span>50%の<span data-modal='anno-02'>FX</span>で1年間<span data-modal='anno-05'>運用</span>したら、いくらになると思いますか?<br><br>なんと、約130万円です!<br>まさに夢のような数字ですね!<br><br>「うわっ、すげぇ!この投資法は億万長者への特急列車だ!」<br><br>......と思って業者に飛びつく前に、まず一度、冷静になりましょう。<br><br><span class="hightlight">「メダリオン・ファンド」を知っていますか?<br>かなり伝説的な<span data-modal='anno-06'>ヘッジファンド</span>です。<br></span><br>数学者のジム・シモンズ率いる、まさに現代の賢者たちがつくり上げました。<br>残念ながら、ジム・シモンズは2024年に亡くなってしまいましたが。<br><br><span class="hightlight">そんなメダリオン・ファンドの過去30年間の平均<span data-modal='anno-07'>リターン</span>、何%だと思いますか?<br>答えは、約62%です。<br></span><br>小さな頃から一流の教育を受け、一流の<span data-modal='anno-08'>ビジネススクール</span>を出て、<br><span data-modal='anno-09'>知能指数</span>も、努力の量も他を圧倒する彼らが生み出す年平均<span data-modal='anno-07'>リターン</span>が、<br><br><span data-modal='anno-10'>年利</span>62%なんです。<br><br>「<span data-modal='anno-10'>年利</span>で62%?さっきの投資法は<span data-modal='anno-01'>月利</span>50%だから、<span data-modal='anno-10'>年利</span>換算したら激ヤバなのでは?」<br>いや、ちょっと待ってください。<br><br>この<span data-modal='anno-10'>年利</span>62%という数字、実は神がかり的な数字なんです。<br><br><span class="hightlight">世界最高の<span data-modal='anno-11'>投資家</span>と呼ばれるウォーレン・バフェットでさえ、この数字には及びません。<br></span><br>さあ、ここで考えてみましょう。<br><span class="hightlight">世界最高の頭脳集団が「<span data-modal='anno-10'>年利</span>62%」<br>あなたが見つけた<span data-modal='anno-02'>FX</span>業者が「<span data-modal='anno-01'>月利</span>50%」<br>どちらが本物だと思いますか?<br></span><br><span data-modal='anno-01'>月利</span>50%ということは、単純計算(12倍)でも<span data-modal='anno-10'>年利</span>600%。<br>つまりメダリオン・ファンドの約10倍です。<br>小学生でも計算できます。<br><br>そして小学生でも、おかしいということに気づくはずです。<br>この違和感に気づけた人は、より正確に計算してみてください。<br><div class="border border-black dark:border-white p-5"><strong>《<span data-modal='anno-12'>複利</span>を考慮した計算式》</strong><br />元手の1万円を1.5倍(50%増)すると1万5,000円。<br>次に、1万5,000円をさらに1.5倍(50%増)すると2万2,500円。<br>これを12回繰り返すと、1年で1万円が約130万円になります。<br>つまり、<span data-modal='anno-01'>月利</span>50%を<span data-modal='anno-10'>年利</span>に換算すると、なんと1万3,000%。<br>結論:メダリオン・ファンドの200倍以上の<span data-modal='anno-07'>リターン</span>ということになります</div><br><span class="hightlight">私のブログを読んでいる人には、<br>こういった違和感にぜひ「秒で」反応してほしいんです。<br></span><br>本当に<span data-modal='anno-01'>月利</span>50%を出せる<span data-modal='anno-02'>FX</span>の天才がいたとしたら、<br>その人は今頃ノーベル賞を総なめにしているはずです。<br><br>いや、もはやノーベル賞どころか、<br>世界の<span data-modal='anno-13'>為替市場</span>を牛耳っているかもしれません。<br>でも、現実はどうでしょう?<br><br>その<span data-modal='anno-02'>FX</span>の「天才」は、<br>あなたのようなただの凡人からお金を集めようとしていませんか?<br><br><span data-modal='anno-04'>錬金術</span>師が錬金の材料費を庶民から集めているようなものです。<br>確かに、<span data-modal='anno-14'>リスク</span>を取らなければ大きな利益は得られません。<br>ですが、その<span class="hightlight">リスクは「計算されたもの」でなければなりません。</span><br><br>私なら迷わず、メダリオン・ファンドに全額を突っ込みます！<br>どう考えても合理的で論理的だからです。<br><br>仮に詐欺に遭うにしてもどうせなら自分の目利き力にプライドを持って、<br>堂々と騙されにいきます(笑)。<br>せめて一流の詐欺師に騙されたいものです。<br><br><span class="hightlight">「<span data-modal='anno-01'>月利</span>50%」という幻想ではなく、<br>着実に成長する本物のビジネスにこそ、<br>あなたの大切な資金を使う価値があるのです。<br></span><br>まやかしの数字を追いかけるより、<br>自分の手で築き上げる方が確実です。<br>さあ、あなたはどうしますか?<br><br><span class="hightlight"><span data-modal='anno-02'>FX</span>業者が語る非現実的な数字に惑わされますか?<br>それとも、自分の手で本物のビジネスを始めますか?<br></span><br>このブログをここまで読んでも、<br>まだ<br>「<span data-modal='anno-01'>月利</span>50%がもし本当だったら......。やっぱりその可能性を捨てきれない!」<br>と考えている人がいるなら、今すぐ連絡してください。<br><br>3分あれば十分です。<br><br>あなたが「わざわざ騙されるための選択」をしようとしていることを、<br>3分で気づかせます。<br><br>この世界の現実をちゃんと直視してもらった上で、<br><span data-modal='anno-01'>月利</span>50%という幻想の世界から抜け出して成功を掴むために、<br>一緒に「本物のビジネス」を作っていきましょう。<br>`,
        annotations: [
          {
            modal: "anno-01",
            term: "月利",
            definition:
              "1ヶ月あたりの利益率。投資した金額に対して月単位で得られる利益の割合。",
          },
          {
            modal: "anno-02",
            term: "FX",
            definition:
              "外国為替証拠金取引。異なる通貨を売買して為替差益を狙う投資方法。",
          },
          {
            modal: "anno-03",
            term: "利回り",
            definition:
              "投資した金額に対する利益の割合。年率で表示されることが多い投資効率の指標。",
          },
          {
            modal: "anno-04",
            term: "錬金術",
            definition:
              "安い金属を金に変える古代の技術。現代では非現実的な金儲け手法の比喩。",
          },
          {
            modal: "anno-05",
            term: "運用",
            definition:
              "資金を投資して利益を得ようとすること。株式や債券などで資産を増やす活動。",
          },
          {
            modal: "anno-06",
            term: "ヘッジファンド",
            definition:
              "富裕層や機関投資家向けの投資ファンド。高度な運用技術で高収益を狙う。",
          },
          {
            modal: "anno-07",
            term: "リターン",
            definition:
              "投資によって得られる利益や収益。投資元本に対する利益の割合を指すことも。",
          },
          {
            modal: "anno-08",
            term: "ビジネススクール",
            definition:
              "経営学を専門に教える大学院。MBA取得を目指す社会人が多く通う教育機関。",
          },
          {
            modal: "anno-09",
            term: "知能指数",
            definition:
              "IQとも呼ばれる。人の知的能力を数値化した指標。平均は100とされる。",
          },
          {
            modal: "anno-10",
            term: "年利",
            definition:
              "1年あたりの利益率。投資や預金などで年単位で得られる利益の割合。",
          },
          {
            modal: "anno-11",
            term: "投資家",
            definition:
              "株式や債券などに資金を投じて利益を得ようとする人。プロと個人投資家がいる。",
          },
          {
            modal: "anno-12",
            term: "複利",
            definition:
              "得られた利益を元本に加えて再投資すること。利益が利益を生む効果。",
          },
          {
            modal: "anno-13",
            term: "為替市場",
            definition:
              "世界各国の通貨が売買される市場。24時間取引が行われる国際的な金融市場。",
          },
          {
            modal: "anno-14",
            term: "リスク",
            definition:
              "投資において損失が発生する可能性。収益性が高いほどリスクも大きくなる傾向。",
          },
        ],
      },
      en: {
        title:
          'Alchemy That Yields "50% Monthly Returns"? Investment Guru vs. Suspicious FX Broker, Which One Would You Believe?',
        category: "",
        content: `Have you ever heard such an attractive phrase?<br><br>"<span data-modal='anno-02'>FX</span> investment technique that can generate 50% profit every month!" Amazing <span data-modal='anno-03'>yield</span>, right! It's like <span data-modal='anno-04'>alchemy</span>.<br><br>Well, let's do some realistic calculations. If you start with 10,000 yen and <span data-modal='anno-05'>operate</span> <span data-modal='anno-02'>FX</span> with 50% <span data-modal='anno-01'>monthly return</span> for one year, how much do you think it would become?<br><br>Amazingly, about 1.3 million yen! Truly dream-like numbers!<br><br>"Wow, amazing! This investment method is an express train to becoming a millionaire!"<br><br>...Before thinking this and jumping to the broker, let's calm down first.<br><br><span class="hightlight">Do you know "Medallion Fund"? It's quite a legendary <span data-modal='anno-06'>hedge fund</span>.</span><br><br>Created by mathematician Jim Simons leading modern sages. Unfortunately, Jim Simons passed away in 2024.<br><br><span class="hightlight">What do you think the average <span data-modal='anno-07'>return</span> of Medallion Fund over the past 30 years is? The answer is about 62%.</span><br><br>Receiving first-class education from childhood, graduating from first-class <span data-modal='anno-08'>business schools</span>, with <span data-modal='anno-09'>IQ</span> and effort overwhelming others, their annual average <span data-modal='anno-07'>return</span> is 62% <span data-modal='anno-10'>annual return</span>.<br><br>"62% <span data-modal='anno-10'>annual return</span>? The investment method earlier was 50% <span data-modal='anno-01'>monthly return</span>, so if converted to annual return, wouldn't it be insanely amazing?" No, wait a minute.<br><br>This 62% <span data-modal='anno-10'>annual return</span> is actually a godlike number.<br><br><span class="hightlight">Even Warren Buffett, called the world's greatest <span data-modal='anno-11'>investor</span>, doesn't reach this number.</span><br><br>Now, let's think about this. <span class="hightlight">The world's top brain trust: "62% <span data-modal='anno-10'>annual return</span>" The <span data-modal='anno-02'>FX</span> broker you found: "50% <span data-modal='anno-01'>monthly return</span>" Which do you think is real?</span><br><br>50% <span data-modal='anno-01'>monthly return</span> means, even with simple calculation (12 times), 600% <span data-modal='anno-10'>annual return</span>. That's about 10 times Medallion Fund. Even elementary school students can calculate this.<br><br>And even elementary school students should notice something's wrong. People who noticed this discomfort, please calculate more accurately.<br><div class="border border-black dark:border-white p-5"><strong>《Calculation formula considering <span data-modal='anno-12'>compound interest</span>》</strong><br />Multiplying the initial 10,000 yen by 1.5 (50% increase) gives 15,000 yen.<br>Next, multiplying 15,000 yen by another 1.5 (50% increase) gives 22,500 yen.<br>Repeating this 12 times, 10,000 yen becomes about 1.3 million yen in one year.<br>In other words, converting 50% <span data-modal='anno-01'>monthly return</span> to <span data-modal='anno-10'>annual return</span> gives an amazing 13,000%.<br>Conclusion: This would be over 200 times the <span data-modal='anno-07'>return</span> of Medallion Fund</div><br><span class="hightlight">I want people reading my blog to react to such discomfort "instantly".</span><br><br>If there really was an <span data-modal='anno-02'>FX</span> genius who could generate 50% <span data-modal='anno-01'>monthly return</span>, that person should be sweeping Nobel Prizes by now.<br><br>No, beyond Nobel Prizes, they might be controlling the world's <span data-modal='anno-13'>foreign exchange markets</span>. But what's reality?<br><br>Isn't that <span data-modal='anno-02'>FX</span> "genius" trying to collect money from ordinary people like you?<br><br>It's like an <span data-modal='anno-04'>alchemist</span> collecting material costs for alchemy from commoners. Certainly, you can't get big profits without taking <span data-modal='anno-14'>risks</span>. But that <span class="hightlight">risk must be "calculated".</span><br><br>I would definitely put all my money into Medallion Fund! Because it's logical and rational no matter how you think about it.<br><br>Even if I get scammed, I'd rather go get deceived with pride in my discernment (laugh). At least I want to be deceived by a first-class scammer.<br><br><span class="hightlight">Rather than the illusion of "50% <span data-modal='anno-01'>monthly return</span>," it's worth using your precious funds for real business that grows steadily.</span><br><br>Rather than chasing false numbers, building with your own hands is more certain. So, what will you do?<br><br><span class="hightlight">Will you be misled by unrealistic numbers that <span data-modal='anno-02'>FX</span> brokers tell? Or will you start real business with your own hands?</span><br><br>If there's anyone reading this blog to this point who still thinks "If 50% <span data-modal='anno-01'>monthly return</span> were really true... I still can't give up that possibility!" please contact me immediately.<br><br>3 minutes is enough.<br><br>I'll make you realize in 3 minutes that you're about to make "a choice to deliberately get deceived."<br><br>After properly facing the reality of this world, let's escape from the fantasy world of 50% <span data-modal='anno-01'>monthly return</span> and create "real business" together to achieve success.`,
        annotations: [
          {
            modal: "anno-01",
            term: "Monthly Yield",
            definition:
              "Profit rate per month. The ratio of profit gained monthly relative to the invested amount.",
          },
          {
            modal: "anno-02",
            term: "FX",
            definition:
              "Foreign Exchange Margin Trading. An investment method of buying and selling different currencies to profit from exchange rate differences.",
          },
          {
            modal: "anno-03",
            term: "Yield",
            definition:
              "The ratio of profit to invested amount. An indicator of investment efficiency often expressed as annual rate.",
          },
          {
            modal: "anno-04",
            term: "Alchemy",
            definition:
              "Ancient technique of turning cheap metals into gold. In modern times, a metaphor for unrealistic money-making methods.",
          },
          {
            modal: "anno-05",
            term: "Asset Management",
            definition:
              "Investing funds to try to gain profits. Activities to increase assets through stocks, bonds, etc.",
          },
          {
            modal: "anno-06",
            term: "Hedge Fund",
            definition:
              "Investment fund for wealthy individuals and institutional investors. Aims for high returns using advanced management techniques.",
          },
          {
            modal: "anno-07",
            term: "Return",
            definition:
              "Profit or income obtained through investment. Also refers to the profit ratio relative to the initial investment.",
          },
          {
            modal: "anno-08",
            term: "Business School",
            definition:
              "Graduate school specializing in business administration. Educational institution attended by many working professionals aiming for MBA.",
          },
          {
            modal: "anno-09",
            term: "IQ",
            definition:
              "Also called Intelligence Quotient. An indicator that quantifies human intellectual ability. Average is considered to be 100.",
          },
          {
            modal: "anno-10",
            term: "Annual Yield",
            definition:
              "Profit rate per year. The ratio of profit gained annually from investments or deposits.",
          },
          {
            modal: "anno-11",
            term: "Investor",
            definition:
              "A person who invests money in stocks, bonds, etc. to gain profits. Includes professional and individual investors.",
          },
          {
            modal: "anno-12",
            term: "Compound Interest",
            definition:
              "Reinvesting the profits gained by adding them to the principal. The effect of profits generating profits.",
          },
          {
            modal: "anno-13",
            term: "Foreign Exchange Market",
            definition:
              "Market where currencies of various countries are traded. International financial market operating 24 hours.",
          },
          {
            modal: "anno-14",
            term: "Risk",
            definition:
              "The possibility of losses occurring in investment. Higher profitability tends to come with greater risk.",
          },
        ],
      },
      zh: {
        title:
          '产生"月利50%"的炼金术？投资之神 vs 可疑的外汇交易商，您会相信哪一个？',
        category: "",
        content: `你有没有听过这样有魅力的话？<br><br>"用<span data-modal='anno-02'>外汇</span>每月能产生50%利润的投资术！"惊人的<span data-modal='anno-03'>收益率</span>呢！简直像<span data-modal='anno-04'>炼金术</span>一样。<br><br>那么，让我们做一些现实的计算。用1万日元本金，用50%<span data-modal='anno-01'>月利</span>的<span data-modal='anno-02'>外汇</span><span data-modal='anno-05'>运营</span>1年的话，你觉得会变成多少？<br><br>竟然约130万日元！真是梦幻般的数字！<br><br>"哇，太厉害了！这个投资法是通往亿万富翁的特快列车！"<br><br>......在这样想着扑向业者之前，先冷静一下吧。<br><br><span class="hightlight">你知道"大奖章基金"吗？这是相当传奇的<span data-modal='anno-06'>对冲基金</span>。</span><br><br>由数学家吉姆·西蒙斯率领的，正是现代贤者们创造的。遗憾的是，吉姆·西蒙斯在2024年去世了。<br><br><span class="hightlight">这样的大奖章基金过去30年间的平均<span data-modal='anno-07'>回报</span>，你觉得是多少%？答案是约62%。</span><br><br>从小接受一流教育，毕业于一流<span data-modal='anno-08'>商学院</span>，<span data-modal='anno-09'>智商</span>和努力量都压倒他人的他们产生的年平均<span data-modal='anno-07'>回报</span>是<span data-modal='anno-10'>年利</span>62%。<br><br>"<span data-modal='anno-10'>年利</span>62%？刚才的投资法是<span data-modal='anno-01'>月利</span>50%，如果换算成<span data-modal='anno-10'>年利</span>的话不是超级厉害吗？"不，等一下。<br><br>这个<span data-modal='anno-10'>年利</span>62%的数字，实际上是神奇般的数字。<br><br><span class="hightlight">即使是被称为世界最高<span data-modal='anno-11'>投资家</span>的沃伦·巴菲特也达不到这个数字。</span><br><br>现在，让我们想想。<span class="hightlight">世界最高的智囊团是"<span data-modal='anno-10'>年利</span>62%"，你找到的<span data-modal='anno-02'>外汇</span>业者是"<span data-modal='anno-01'>月利</span>50%"，你觉得哪个是真的？</span><br><br><span data-modal='anno-01'>月利</span>50%的话，简单计算（12倍）也是<span data-modal='anno-10'>年利</span>600%。也就是大奖章基金的约10倍。小学生都能计算。<br><br>而且小学生也应该会注意到奇怪的地方。注意到这种违和感的人，请更准确地计算一下。<br><div class="border border-black dark:border-white p-5"><strong>《考虑<span data-modal='anno-12'>复利</span>的计算公式》</strong><br />本金1万日元1.5倍（50%增加）就是1万5千日元。<br>接下来，1万5千日元再1.5倍（50%增加）就是2万2千5百日元。<br>重复12次的话，1年里1万日元变成约130万日元。<br>也就是说，<span data-modal='anno-01'>月利</span>50%换算成<span data-modal='anno-10'>年利</span>的话，竟然是1万3千%。<br>结论：会成为大奖章基金200倍以上的<span data-modal='anno-07'>回报</span></div><br><span class="hightlight">我希望读我博客的人，对这样的违和感能够"秒"反应。</span><br><br>如果真的有能产生<span data-modal='anno-01'>月利</span>50%的<span data-modal='anno-02'>外汇</span>天才的话，那个人现在应该把诺贝尔奖全拿了。<br><br>不，已经不是诺贝尔奖的程度了，可能在操纵世界的<span data-modal='anno-13'>外汇市场</span>。但是，现实如何？<br><br>那个<span data-modal='anno-02'>外汇</span>"天才"不是在试图从你这样的普通人那里收集钱吗？<br><br>就像<span data-modal='anno-04'>炼金术</span>师从庶民那里收集炼金材料费一样。确实，不承担<span data-modal='anno-14'>风险</span>就得不到大利润。但是，那个<span class="hightlight">风险必须是"计算过的"。</span><br><br>我会毫不犹豫地把全额投入大奖章基金！因为无论怎么想都是合理和逻辑的。<br><br>即使遭遇诈骗，反正也要带着对自己眼光的自豪堂堂正正地去被骗（笑）。至少想被一流的骗子骗。<br><br><span class="hightlight">与其追求"<span data-modal='anno-01'>月利</span>50%"的幻想，不如把你宝贵的资金用在踏实成长的真正事业上更有价值。</span><br><br>比起追逐虚假的数字，用自己的手建立更确实。那么，你会怎么做？<br><br><span class="hightlight">会被<span data-modal='anno-02'>外汇</span>业者说的非现实数字迷惑吗？还是用自己的手开始真正的事业？</span><br><br>如果读这个博客到这里，还有人在想"如果<span data-modal='anno-01'>月利</span>50%是真的话......果然无法放弃那个可能性！"的话，请立即联系。<br><br>3分钟就足够了。<br><br>我会在3分钟内让你意识到你正试图做出"故意被骗的选择"。<br><br>在正确直视这个世界的现实之后，从<span data-modal='anno-01'>月利</span>50%这个幻想世界中走出来获得成功，让我们一起制作"真正的事业"吧。`,
        annotations: [
          {
            modal: "anno-01",
            term: "月利率",
            definition: "每月的收益率。相对于投资金额每月单位获得的利润比例。",
          },
          {
            modal: "anno-02",
            term: "外汇交易",
            definition:
              "外汇保证金交易。买卖不同货币以获取汇差收益的投资方法。",
          },
          {
            modal: "anno-03",
            term: "收益率",
            definition:
              "相对于投资金额的利润比例。多以年率表示的投资效率指标。",
          },
          {
            modal: "anno-04",
            term: "炼金术",
            definition:
              "将廉价金属变成黄金的古代技术。现代用作非现实赚钱手法的比喻。",
          },
          {
            modal: "anno-05",
            term: "资产运作",
            definition:
              "投资资金试图获得利润。通过股票或债券等增加资产的活动。",
          },
          {
            modal: "anno-06",
            term: "对冲基金",
            definition:
              "面向富裕层和机构投资者的投资基金。运用高度运营技术追求高收益。",
          },
          {
            modal: "anno-07",
            term: "回报",
            definition:
              "通过投资获得的利润或收益。也指相对于投资本金的利润比例。",
          },
          {
            modal: "anno-08",
            term: "商学院",
            definition:
              "专门教授经营学的研究生院。很多以获得MBA为目标的社会人士就读的教育机构。",
          },
          {
            modal: "anno-09",
            term: "智商",
            definition: "也称为IQ。将人的智力能力数值化的指标。平均值为100。",
          },
          {
            modal: "anno-10",
            term: "年利率",
            definition: "每年的收益率。投资或存款等每年单位获得的利润比例。",
          },
          {
            modal: "anno-11",
            term: "投资者",
            definition:
              "向股票或债券等投入资金试图获得利润的人。有专业投资者和个人投资者。",
          },
          {
            modal: "anno-12",
            term: "复利",
            definition: "将获得的利润加入本金进行再投资。利润产生利润的效果。",
          },
          {
            modal: "anno-13",
            term: "外汇市场",
            definition:
              "买卖世界各国货币的市场。进行24小时交易的国际金融市场。",
          },
          {
            modal: "anno-14",
            term: "风险",
            definition: "投资中发生损失的可能性。收益性越高风险也趋向越大。",
          },
        ],
      },
    },
  },
  {
    id: "02",
    link: "/fx/02",
    translations: {
      ja: {
        title:
          '"プロ" FXトレーダーの正体:あなたの財布から魔法のように消える資金の謎',
        category: "",
        content: `「<span data-modal='anno-02'>MAM</span>で複数<span data-modal='anno-05'>口座</span>を同時に<span data-modal='anno-06'>運用</span>し、<span data-modal='anno-08'>リスク</span>を抑えているので安心です！」<br>「<span data-modal='anno-03'>LAMM</span>と<span data-modal='anno-04'>PAMM</span>を駆使して、<span data-modal='anno-07'>月利</span>50%を実現しています！」<br><br>一般人には頭が痛くなりそうな略語のオンパレード。<br>でも心配しないでください。<br><br>あなたが理解できないのは、あなたが愚かだからではありません。<br>理解できないように作られているからです。<br><br>さて、ここで<span data-modal='anno-09'>FX</span>クイズです。<br><br><span class="hightlight">Q.<span data-modal='anno-02'>MAM</span>、<span data-modal='anno-03'>LAMM</span>、<span data-modal='anno-04'>PAMM</span>の違いは何でしょう?これらはすべて<span data-modal='anno-09'>FX</span>に関する言葉です。<br></span><br>答えられませんか?<br><br><span class="hightlight">大丈夫です。<br>多くの "プロ" <span data-modal='anno-10'>トレーダー</span>も答えられません。<br>なぜなら、<br>これらは「お金を巻き上げるための呪文」のようなものだからです。<br></span><br>カッコよく聞こえる言葉ですが、<br>その呪文の効果は「知らぬ間にあなたの財布の中身を消し去る」<br>という恐ろしいもの。<br><br>では、これらの"魔法"の正体を暴いてみましょう。<br><br><span class="hightlight"><span data-modal='anno-02'>MAM</span>は「マルチ・アカウント・マネージャー」の略。<br>つまり、複数の<span data-modal='anno-05'>口座</span>を同時に管理するということです。<br></span><br>次の2つはどうでしょう?<br>あるサイトの説明を合わせて見てみましょう。<br><table class="border-collapse border-px [&_td]:border [&_td]:p-5 [&_td]:border-black [&_td]:dark:border-white"><tr><td><span data-modal='anno-04'>PAMM</span>(パーセンテージ・アロ ケーション・マネージメント・モ ジュール)</td><td><span data-modal='anno-10'>トレーダー</span>は複数の<span data-modal='anno-11'>投資家</span>からの出資で<span data-modal='anno-05'>口座</span>を管理し ます。利益と損失は<span data-modal='anno-11'>投資家</span>の割合に応じて分配されます。</td></tr><tr><td><span data-modal='anno-03'>LAMM</span>(ロット・アロケーション・マ ネージメント・モジュール)</td><td>パーセンテージではなく取引の<span data-modal='anno-12'>ロットサイズ</span>に基づいて 利益と損失を割り当てます。<span data-modal='anno-11'>投資家</span>は好みの<span data-modal='anno-12'>ロットサイズ</span>を選択できます。</td></tr></table><br>......眠くなってきましたか?<br>まさにそれが狙いなんです。<br>理解しようとするのを諦めさせるのが......<br><br>要するに、これらは<br>「あなたのお金を効率的に"<span data-modal='anno-06'>運用</span>"する方法」<br>というわけです。<br><br>「<span data-modal='anno-06'>運用</span>」を「消失」に置き換えれば、より正確かもしれませんが・・・<br><br>「そんな小難しい内容を理解するよりも、<br>私の担当<span data-modal='anno-10'>トレーダー</span>は本当に<span data-modal='anno-13'>プロフェッショナル</span>ですよ！<span data-modal='anno-14'>実績</span>をみてください！」<br><br>そうですか。<br><span class="hightlight">では、その<span data-modal='anno-13'>プロフェッショナル</span>に聞いてみてください。<br>「なぜ<span data-modal='anno-02'>MAM</span>だけMが一つ少ないんですか?」<br></span><br>答えられなかったら、<br>この質問にきちんと答えられない<span data-modal='anno-15'>業者</span>は、<br>まずその時点でアウト。<br><br>そして、もしこれらの質問に相手が正しく答えることができたなら、<br>今度は新たな疑問が湧いてくるはずです。<br>「これって、ただの仕組みじゃん?」って。<br><br>こっちのレストランではフォークでご飯を食べ、<br>また別のレストランでは箸で食べる。<br><br>フォークも箸もご飯を食べるための手段(仕組み)なだけであって、<br>「フォークで食った飯の方がうまい!」なんてことはないですよね?<br><br><span class="hightlight"><span data-modal='anno-09'>FX</span><span data-modal='anno-15'>業者</span>が口にする<span data-modal='anno-02'>MAM</span>や<span data-modal='anno-03'>LAMM</span>といったワードも実はただの仕組みに過ぎず、<br>「それを使ったから儲かる」という類のものではありません。<br></span><br>和食屋か洋食屋かというような違いであって、<br>「どっちが美味い」とか「どっちが儲かる」<br>みたいな話じゃないんです。<br><br><span data-modal='anno-02'>MAM</span>に至っては「<span data-modal='anno-02'>MAM</span>=マルチ・アカウント・マネージメント」、<br>つまり「和食屋と洋食屋を両方同時(=マルチ)にやったら儲かるんじゃね?」<br>という発想となんら変わりありません。<br>そして実際は、両方やったからといって儲かるわけでもありません。<br><br>そもそも、<br>あなたの話し相手である「プロ<span data-modal='anno-10'>トレーダー</span>」とは、一体何者なのでしょうか?<br><br>本当に「プロ」だと言うのなら、<br>あれこれ小難しい話をあなたに説明したうえで、<br><span data-modal='anno-16'>コピートレード</span>をさせる必要なんてないと思いませんか?<br><br><span class="hightlight">本当のプロ<span data-modal='anno-10'>トレーダー</span>なら、顧客のお金を預かって<span data-modal='anno-06'>運用</span>するはずです。<br><br>でも、彼らはそうしません。<br>なぜでしょう?<br><br>そう、違法だからです。<br>人のお金を預かって<span data-modal='anno-06'>運用</span>するには、<span data-modal='anno-17'>ライセンス</span>が必要なんです。<br></span><br>「プロ」の<span data-modal='anno-17'>ライセンス</span>は、<br>残念ながら100円ショップでは売っていません。<br><br>もし、あなたがまだ「この人は信用できる!」と思っているなら、<br>その「プロ」<span data-modal='anno-10'>トレーダー</span>に<br>「<span data-modal='anno-07'>月利</span>50%を出せる<span data-modal='anno-18'>エビデンス</span>」<br>を見せてもらってください。<br><br><span class="hightlight">本物なら、私も喜んで投資します。<br></span>そして、その利益で月へ旅行にでも行きましょう。<br>残念ながら、月にたどり着く前にあなたの資金は地上に舞い落ちていくでしょうが......。<br><br><span class="hightlight">結局のところ、<span data-modal='anno-09'>FX</span>の世界で「プロ」と呼ばれる人の多くは、<br>投資の才能ではなく、あなたのような人から<br>金を巻き上げる才能に長けているだけなのです。<br></span><br>でも、心配しないでください。<br>この記事を読んでもなお、彼らを信じたいのなら・・・まあ、仕方ありません。<br><br><span class="hightlight">人間誰しも、恋と金儲けには盲目になるものです。<br>ただし、その前に私に相談してください。<br></span><br>せめて、騙される準備くらいはしっかりしましょう!<br>人生には「失敗」と「大失敗」があります。<br><span data-modal='anno-09'>FX</span>は後者になる可能性が高いです。<br><br>前者で済ませたいなら、<br>その資金で本物のビジネスを始めることをオススメします。<br><br>魔法使いのような"プロ"<span data-modal='anno-10'>トレーダー</span>を信じるのか?<br>地に足のついたビジネスを始めるのか?<br><br>選択はあなた次第です。<br>ただし、選んだ後の結果もあなた次第です。<br>月に旅行する際はお気をつけて。<br>`,
        annotations: [
          {
            modal: "anno-01",
            term: "FXトレーダー",
            definition:
              "外国為替取引を職業とする人。通貨の売買で利益を得ることを専門とする投資家。",
          },
          {
            modal: "anno-02",
            term: "MAM",
            definition:
              "マルチ・アカウント・マネージャーの略。複数の投資口座を同時に管理する仕組み。",
          },
          {
            modal: "anno-03",
            term: "LAMM",
            definition:
              "ロット・アロケーション・マネージメント・モジュールの略。取引量に基づく資金管理手法。",
          },
          {
            modal: "anno-04",
            term: "PAMM",
            definition:
              "パーセンテージ・アロケーション・マネージメント・モジュールの略。投資比率による運用方式。",
          },
          {
            modal: "anno-05",
            term: "口座",
            definition:
              "金融機関で資金を管理するアカウント。FXでは取引専用の口座を開設する。",
          },
          {
            modal: "anno-06",
            term: "運用",
            definition:
              "資金を投資して利益を得ようとすること。株式やFXなどで資産を増やす活動。",
          },
          {
            modal: "anno-07",
            term: "月利",
            definition:
              "1ヶ月あたりの利益率。投資した金額に対して月単位で得られる利益の割合。",
          },
          {
            modal: "anno-08",
            term: "リスク",
            definition:
              "投資において損失が発生する可能性。収益性が高いほどリスクも大きくなる傾向。",
          },
          {
            modal: "anno-09",
            term: "FX",
            definition:
              "外国為替証拠金取引。異なる通貨を売買して為替差益を狙う投資方法。",
          },
          {
            modal: "anno-10",
            term: "トレーダー",
            definition:
              "株式やFXなどの金融商品を売買して利益を得ることを職業とする人。",
          },
          {
            modal: "anno-11",
            term: "投資家",
            definition:
              "株式や債券などに資金を投じて利益を得ようとする人。プロと個人投資家がいる。",
          },
          {
            modal: "anno-12",
            term: "ロットサイズ",
            definition:
              "FX取引における取引単位。1ロットは通常10万通貨単位を指すことが多い。",
          },
          {
            modal: "anno-13",
            term: "プロフェッショナル",
            definition:
              "特定分野の専門知識と技術を持つ職業人。プロとも呼ばれる専門家。",
          },
          {
            modal: "anno-14",
            term: "実績",
            definition:
              "過去に成し遂げた成果や業績。投資の世界では運用成績を指すことが多い。",
          },
          {
            modal: "anno-15",
            term: "業者",
            definition:
              "特定のサービスを提供する事業者。FX業者は外国為替取引サービスを提供する会社。",
          },
          {
            modal: "anno-16",
            term: "コピートレード",
            definition:
              "他の投資家の取引を自動的に模倣する投資手法。プロの取引をコピーする仕組み。",
          },
          {
            modal: "anno-17",
            term: "ライセンス",
            definition:
              "特定の業務を行うために必要な公的な許可証や資格。金融業には必須の認可。",
          },
          {
            modal: "anno-18",
            term: "エビデンス",
            definition:
              "証拠や根拠となる資料。投資実績を証明するための客観的なデータや記録。",
          },
        ],
      },
      en: {
        title:
          'The True Identity of "Professional" FX Traders: The Mystery of Funds that Disappear Magically from Your Wallet',
        category: "",
        content: `"With <span data-modal='anno-02'>MAM</span>, we simultaneously <span data-modal='anno-06'>operate</span> multiple <span data-modal='anno-05'>accounts</span> and control <span data-modal='anno-08'>risk</span>, so it's safe!" "Using <span data-modal='anno-03'>LAMM</span> and <span data-modal='anno-04'>PAMM</span> skillfully, we're achieving 50% <span data-modal='anno-07'>monthly profit</span>!"<br><br>A parade of abbreviations that would give ordinary people headaches. But don't worry.<br><br>You can't understand this not because you're stupid. It's because it's designed to be incomprehensible.<br><br>Now, here's an <span data-modal='anno-09'>FX</span> quiz.<br><br><span class="hightlight">Q. What's the difference between <span data-modal='anno-02'>MAM</span>, <span data-modal='anno-03'>LAMM</span>, and <span data-modal='anno-04'>PAMM</span>? These are all <span data-modal='anno-09'>FX</span>-related terms.</span><br><br>Can't answer?<br><br><span class="hightlight">That's fine. Most "professional" <span data-modal='anno-10'>traders</span> can't answer either. Because these are like "spells for taking your money".</span><br><br>They sound cool, but the effect of these spells is the terrifying ability to "make the contents of your wallet disappear without you knowing."<br><br>So let's expose the true nature of these "magic" spells.<br><br><span class="hightlight"><span data-modal='anno-02'>MAM</span> stands for "Multi-Account Manager." In other words, it means managing multiple <span data-modal='anno-05'>accounts</span> simultaneously.</span><br><br>What about the next two? Let's look at explanations from a certain website.<br><table class="border-collapse border-px [&_td]:border [&_td]:p-5 [&_td]:border-black [&_td]:dark:border-white"><tr><td><span data-modal='anno-04'>PAMM</span> (Percentage Allocation Management Module)</td><td><span data-modal='anno-10'>Traders</span> manage <span data-modal='anno-05'>accounts</span> with investments from multiple <span data-modal='anno-11'>investors</span>. Profits and losses are distributed according to <span data-modal='anno-11'>investors</span>' proportions.</td></tr><tr><td><span data-modal='anno-03'>LAMM</span> (Lot Allocation Management Module)</td><td>Allocates profits and losses based on trade <span data-modal='anno-12'>lot sizes</span> rather than percentages. <span data-modal='anno-11'>Investors</span> can choose their preferred <span data-modal='anno-12'>lot sizes</span>.</td></tr></table><br>...Getting sleepy? That's exactly the point. To make you give up trying to understand...<br><br>In short, these are "methods to efficiently '<span data-modal='anno-06'>operate</span>' your money."<br><br>If we replace "<span data-modal='anno-06'>operate</span>" with "lose," it might be more accurate...<br><br>"Rather than understanding such complicated content, my assigned <span data-modal='anno-10'>trader</span> is truly <span data-modal='anno-13'>professional</span>! Look at the <span data-modal='anno-14'>track record</span>!"<br><br>I see. <span class="hightlight">Then ask that <span data-modal='anno-13'>professional</span>: "Why does <span data-modal='anno-02'>MAM</span> have one less 'M' than the others?"</span><br><br>If they can't answer, any <span data-modal='anno-15'>broker</span> who can't properly answer this question is out at that point.<br><br>And if they can correctly answer these questions, a new doubt should arise: "This is just a system, isn't it?"<br><br>In one restaurant you eat rice with a fork, in another restaurant you eat with chopsticks.<br><br>Both forks and chopsticks are just means (systems) for eating rice, and it's not like "rice eaten with a fork tastes better!" right?<br><br><span class="hightlight">The words like <span data-modal='anno-02'>MAM</span> and <span data-modal='anno-03'>LAMM</span> that <span data-modal='anno-09'>FX</span> <span data-modal='anno-15'>brokers</span> mention are actually just systems, not something that "makes you profit because you use it".</span><br><br>It's like the difference between a Japanese restaurant and a Western restaurant, not a matter of "which tastes better" or "which is more profitable."<br><br><span data-modal='anno-02'>MAM</span> is literally "<span data-modal='anno-02'>MAM</span> = Multi-Account Management," which is no different from the idea "Wouldn't it be profitable to run both Japanese and Western restaurants simultaneously (=multi)?" And in reality, running both doesn't necessarily make you more profitable.<br><br>In the first place, who exactly is this "professional <span data-modal='anno-10'>trader</span>" you're talking to?<br><br>If they're truly "professional," don't you think they wouldn't need to explain all these complicated things to you and then have you do <span data-modal='anno-16'>copy trading</span>?<br><br><span class="hightlight">Real professional <span data-modal='anno-10'>traders</span> should take customers' money and <span data-modal='anno-06'>operate</span> it. But they don't do that. Why? Because it's illegal. You need a <span data-modal='anno-17'>license</span> to take people's money and <span data-modal='anno-06'>operate</span> it.</span><br><br>"Professional" <span data-modal='anno-17'>licenses</span> are unfortunately not sold at 100-yen shops.<br><br>If you still think "this person is trustworthy!" ask that "professional" <span data-modal='anno-10'>trader</span> to show you "<span data-modal='anno-18'>evidence</span> of achieving 50% <span data-modal='anno-07'>monthly profit</span>."<br><br><span class="hightlight">If it's real, I'll happily invest too.</span> And let's go on a trip to the moon with those profits. Unfortunately, your funds will probably fall back to earth before reaching the moon...<br><br><span class="hightlight">In the end, most people called "professionals" in the <span data-modal='anno-09'>FX</span> world are not talented at investing, but skilled at taking money from people like you.</span><br><br>But don't worry. If you still want to believe them after reading this article... well, that can't be helped.<br><br><span class="hightlight">Everyone becomes blind when it comes to love and making money. However, please consult with me before that.</span><br><br>At least let's prepare properly for getting deceived! Life has "failures" and "major failures." <span data-modal='anno-09'>FX</span> is likely to be the latter.<br><br>If you want to settle for the former, I recommend starting a real business with those funds.<br><br>Will you believe wizard-like "professional" <span data-modal='anno-10'>traders</span>? Or will you start a grounded business?<br><br>The choice is yours. However, the consequences of your choice are also yours. Please be careful when traveling to the moon.`,
        annotations: [
          {
            modal: "anno-01",
            term: "FX Trader",
            definition:
              "A person who makes foreign exchange trading their profession. An investor specializing in making profits through currency trading.",
          },
          {
            modal: "anno-02",
            term: "MAM",
            definition:
              "Abbreviation for Multi-Account Manager. A system for managing multiple investment accounts simultaneously.",
          },
          {
            modal: "anno-03",
            term: "LAMM",
            definition:
              "Abbreviation for Lot Allocation Management Module. A fund management method based on trading volume.",
          },
          {
            modal: "anno-04",
            term: "PAMM",
            definition:
              "Abbreviation for Percentage Allocation Management Module. An operation method based on investment ratios.",
          },
          {
            modal: "anno-05",
            term: "Account",
            definition:
              "An account for managing funds at financial institutions. In FX, specialized trading accounts are opened.",
          },
          {
            modal: "anno-06",
            term: "Asset Management",
            definition:
              "Investing funds to try to gain profits. Activities to increase assets through stocks, FX, etc.",
          },
          {
            modal: "anno-07",
            term: "Monthly Yield",
            definition:
              "Profit rate per month. The ratio of profit gained monthly relative to the invested amount.",
          },
          {
            modal: "anno-08",
            term: "Risk",
            definition:
              "The possibility of losses occurring in investment. Higher profitability tends to come with greater risk.",
          },
          {
            modal: "anno-09",
            term: "FX",
            definition:
              "Foreign Exchange Margin Trading. An investment method of buying and selling different currencies to profit from exchange rate differences.",
          },
          {
            modal: "anno-10",
            term: "Trader",
            definition:
              "A person who makes a living by buying and selling financial products like stocks or FX to gain profits.",
          },
          {
            modal: "anno-11",
            term: "Investor",
            definition:
              "A person who invests money in stocks, bonds, etc. to gain profits. Includes professional and individual investors.",
          },
          {
            modal: "anno-12",
            term: "Lot Size",
            definition:
              "Trading unit in FX trading. One lot usually refers to 100,000 currency units.",
          },
          {
            modal: "anno-13",
            term: "Professional",
            definition:
              "A professional with specialized knowledge and skills in a specific field. Also called an expert.",
          },
          {
            modal: "anno-14",
            term: "Track Record",
            definition:
              "Results or achievements accomplished in the past. In the investment world, often refers to management performance.",
          },
          {
            modal: "anno-15",
            term: "Broker",
            definition:
              "A business operator providing specific services. FX brokers are companies providing foreign exchange trading services.",
          },
          {
            modal: "anno-16",
            term: "Copy Trading",
            definition:
              "An investment method that automatically mimics other investors' trades. A system for copying professional trades.",
          },
          {
            modal: "anno-17",
            term: "License",
            definition:
              "Official permits or qualifications required to conduct specific business. Essential authorization for financial businesses.",
          },
          {
            modal: "anno-18",
            term: "Evidence",
            definition:
              "Materials serving as proof or basis. Objective data and records for proving investment performance.",
          },
        ],
      },
      zh: {
        title: '"专业"外汇交易员的真面目：从您钱包中神奇消失的资金之谜',
        category: "",
        content: `"用<span data-modal='anno-02'>MAM</span>同时<span data-modal='anno-06'>运营</span>多个<span data-modal='anno-05'>账户</span>，抑制<span data-modal='anno-08'>风险</span>所以很安心！""运用<span data-modal='anno-03'>LAMM</span>和<span data-modal='anno-04'>PAMM</span>，实现<span data-modal='anno-07'>月利</span>50%！"<br><br>让普通人头痛的缩略语大游行。但请不要担心。<br><br>你无法理解不是因为你愚蠢。而是因为被设计得让人无法理解。<br><br>现在，这里有个<span data-modal='anno-09'>外汇</span>问答。<br><br><span class="hightlight">Q.<span data-modal='anno-02'>MAM</span>、<span data-modal='anno-03'>LAMM</span>、<span data-modal='anno-04'>PAMM</span>的区别是什么？这些都是与<span data-modal='anno-09'>外汇</span>相关的词语。</span><br><br>回答不出来吗？<br><br><span class="hightlight">没关系。很多"专业"<span data-modal='anno-10'>交易员</span>也回答不出来。因为这些就像是"卷走金钱的咒语"。</span><br><br>听起来很酷，但这些咒语的效果是"在你不知不觉中让你钱包里的东西消失"这种可怕的东西。<br><br>那么，让我们揭露这些"魔法"的真面目吧。<br><br><span class="hightlight"><span data-modal='anno-02'>MAM</span>是"多账户管理器"的缩写。也就是说，同时管理多个<span data-modal='anno-05'>账户</span>。</span><br><br>接下来的两个怎么样？让我们结合某个网站的说明来看看。<br><table class="border-collapse border-px [&_td]:border [&_td]:p-5 [&_td]:border-black [&_td]:dark:border-white"><tr><td><span data-modal='anno-04'>PAMM</span>（百分比分配管理模块）</td><td><span data-modal='anno-10'>交易员</span>用多个<span data-modal='anno-11'>投资者</span>的出资管理<span data-modal='anno-05'>账户</span>。利润和损失按<span data-modal='anno-11'>投资者</span>的比例分配。</td></tr><tr><td><span data-modal='anno-03'>LAMM</span>（手数分配管理模块）</td><td>不是按百分比而是基于交易的<span data-modal='anno-12'>手数大小</span>分配利润和损失。<span data-modal='anno-11'>投资者</span>可以选择喜欢的<span data-modal='anno-12'>手数大小</span>。</td></tr></table><br>......困了吗？这正是目的。让你放弃理解...<br><br>总之，这些是"高效'<span data-modal='anno-06'>运营</span>'你的钱的方法"。<br><br>如果把"<span data-modal='anno-06'>运营</span>"替换成"消失"可能更准确...<br><br>"与其理解这么复杂的内容，我的负责<span data-modal='anno-10'>交易员</span>真的很<span data-modal='anno-13'>专业</span>！请看<span data-modal='anno-14'>实绩</span>！"<br><br>是吗。<span class="hightlight">那么，请向那个<span data-modal='anno-13'>专业人士</span>询问："为什么<span data-modal='anno-02'>MAM</span>比其他的少一个M？"</span><br><br>如果回答不出来，无法正确回答这个问题的<span data-modal='anno-15'>业者</span>，在那个时候就出局了。<br><br>而且，如果对方能正确回答这些问题的话，这次应该会产生新的疑问："这不就是单纯的机制吗？"<br><br>在这家餐厅用叉子吃饭，在另一家餐厅用筷子吃饭。<br><br>叉子和筷子都只是吃饭的手段（机制），不会有"用叉子吃的饭更好吃！"这种事情吧？<br><br><span class="hightlight"><span data-modal='anno-09'>外汇</span><span data-modal='anno-15'>业者</span>说的<span data-modal='anno-02'>MAM</span>和<span data-modal='anno-03'>LAMM</span>等词语实际上只是机制，不是"因为使用了就能赚钱"的东西。</span><br><br>就像和食店还是洋食店的区别，不是"哪个更好吃"或"哪个更赚钱"的问题。<br><br><span data-modal='anno-02'>MAM</span>说到底是"<span data-modal='anno-02'>MAM</span>=多账户管理"，也就是"同时（=多重）经营和食店和洋食店不就赚钱了吗？"这种想法没有任何区别。而实际上，两个都做并不一定赚钱。<br><br>首先，与你对话的"专业<span data-modal='anno-10'>交易员</span>"到底是什么人？<br><br>如果真的是"专业"的话，不觉得没必要向你说明这些复杂的话，然后让你进行<span data-modal='anno-16'>跟单交易</span>吗？<br><br><span class="hightlight">真正的专业<span data-modal='anno-10'>交易员</span>应该接受客户的钱进行<span data-modal='anno-06'>运营</span>。但是，他们不这样做。为什么？因为那是违法的。接受别人的钱进行<span data-modal='anno-06'>运营</span>需要<span data-modal='anno-17'>执照</span>。</span><br><br>"专业"的<span data-modal='anno-17'>执照</span>，遗憾的是在百元店不卖。<br><br>如果你还认为"这个人值得信赖！"的话，请让那个"专业"<span data-modal='anno-10'>交易员</span>展示"能产生<span data-modal='anno-07'>月利</span>50%的<span data-modal='anno-18'>证据</span>"。<br><br><span class="hightlight">如果是真的，我也会高兴地投资。</span>然后，用那个利润去月球旅行吧。遗憾的是，在到达月球之前你的资金就会飘落到地面...<br><br><span class="hightlight">归根结底，在<span data-modal='anno-09'>外汇</span>世界被称为"专业"的人大多数不是有投资才能，而是擅长从你这样的人那里卷走金钱的才能。</span><br><br>但是，不用担心。如果读了这篇文章还想相信他们的话...嗯，没办法。<br><br><span class="hightlight">人类在恋爱和赚钱方面都会盲目。但是，在那之前请先咨询我。</span><br><br>至少，好好准备被骗吧！人生有"失败"和"大失败"。<span data-modal='anno-09'>外汇</span>很可能是后者。<br><br>如果想以前者了结的话，建议用那个资金开始真正的事业。<br><br>相信像魔法师一样的"专业"<span data-modal='anno-10'>交易员</span>？还是开始脚踏实地的事业？<br><br>选择权在你。但是，选择后的结果也在你。月球旅行时请小心。`,
        annotations: [
          {
            modal: "anno-01",
            term: "外汇交易员",
            definition:
              "以外汇交易为职业的人。专门通过货币买卖获得利润的投资者。",
          },
          {
            modal: "anno-02",
            term: "MAM",
            definition: "多账户管理器的简称。同时管理多个投资账户的机制。",
          },
          {
            modal: "anno-03",
            term: "LAMM",
            definition: "手数分配管理模块的简称。基于交易量的资金管理方法。",
          },
          {
            modal: "anno-04",
            term: "PAMM",
            definition: "百分比分配管理模块的简称。按投资比例进行的运营方式。",
          },
          {
            modal: "anno-05",
            term: "账户",
            definition:
              "在金融机构管理资金的账户。在外汇交易中需要开设专用交易账户。",
          },
          {
            modal: "anno-06",
            term: "资产运作",
            definition:
              "投资资金试图获得利润。通过股票或外汇等增加资产的活动。",
          },
          {
            modal: "anno-07",
            term: "月利率",
            definition: "每月的收益率。相对于投资金额每月单位获得的利润比例。",
          },
          {
            modal: "anno-08",
            term: "风险",
            definition: "投资中发生损失的可能性。收益性越高风险也趋向越大。",
          },
          {
            modal: "anno-09",
            term: "外汇交易",
            definition:
              "外汇保证金交易。买卖不同货币以获取汇差收益的投资方法。",
          },
          {
            modal: "anno-10",
            term: "交易员",
            definition: "以买卖股票或外汇等金融产品获得利润为职业的人。",
          },
          {
            modal: "anno-11",
            term: "投资者",
            definition:
              "向股票或债券等投入资金试图获得利润的人。有专业投资者和个人投资者。",
          },
          {
            modal: "anno-12",
            term: "手数大小",
            definition: "外汇交易中的交易单位。1手通常指10万货币单位。",
          },
          {
            modal: "anno-13",
            term: "专业人士",
            definition:
              "拥有特定领域专业知识和技术的职业人员。也称为专家的专业人士。",
          },
          {
            modal: "anno-14",
            term: "业绩",
            definition: "过去取得的成果或成绩。在投资界多指运营成绩。",
          },
          {
            modal: "anno-15",
            term: "服务商",
            definition:
              "提供特定服务的事业者。外汇服务商是提供外汇交易服务的公司。",
          },
          {
            modal: "anno-16",
            term: "跟单交易",
            definition:
              "自动模仿其他投资者交易的投资方法。复制专业人士交易的机制。",
          },
          {
            modal: "anno-17",
            term: "许可证",
            definition:
              "进行特定业务所需的公开许可证或资格。金融业必需的认可。",
          },
          {
            modal: "anno-18",
            term: "证据",
            definition: "作为证据或根据的资料。证明投资业绩的客观数据和记录。",
          },
        ],
      },
    },
  },
];

export const RankData: ArticleType[] = [
  {
    id: "01",
    link: "/ai/01",
    translations: {
      ja: {
        title:
          "AI開発とプロンプト開発をわからず騙される顧客の実態〜カニかまとカニだと信じてしまうようなアホなあなたへ〜",
        category: "",
        content: `
        `,
        annotations: [],
      },
      en: {
        title:
          "The reality of customers who are deceived because they don't understand AI development and prompt development - For those of you who are so stupid that you believe it's a crab stick and a crab -",
        category: "",
        content: ``,
        annotations: [],
      },
      zh: {
        title:
          "因为不懂AI开发和提示开发而被欺骗的客户的现实——对于那些愚蠢到相信这是蟹棒和螃蟹的人——",
        category: "",
        content: ``,
        annotations: [],
      },
    },
  },
];
