export interface ArticleTranslation {
  title: string;
  content: string;
  category: string;
  annotations: {
    term: string;
    definition: string;
  }[];
}

export interface ArticleType {
  id: string;
  date: string;
  link: string;
  translations: {
    [langCode: string]: ArticleTranslation;
  };
}

export interface ArticleContent {
  id: string;
  date: string;
  title: string;
  category: string;
  link: string;
  content: string;
  annotations: {
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
    date: article.date,
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
      date: article.date,
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
    date: "2024.4.18",
    link: "/ai/01",
    translations: {
      ja: {
        title:
          "AI開発とプロンプト開発をわからず騙される顧客の実態〜カニかまとカニだと信じてしまうようなアホなあなたへ〜",
        category: "",
        content: `「プロンプト」って何のことか説明できますか? <br />
          ChatGPTなどの生成AIが注目されはじめてから1年以上がたちます。<br />
          ですが、いまだに、<br />
          「プロンプト」って何なのか、<br />
          よくわからない人は多いでしょう。<br />
          <span class="hightlight">
            もし、あなたが、<br />
            AI開発とプロンプト開発を同じだと思っているのであれば、<br />
            ろうそくと電球と同じものだと思って生活し、<br />
            カニかまをカニだと思って食べ続け、<br />
            野球ゲームで高得点を取れる人を野球選手と呼ぶくらい、<br />
            アホな勘違いをしていると思ってください。<br />
          </span>
          AIの必要性に気づいた経営者の方から<br />
          「AIを使ったサービスを作りたい」<br />
          という依頼を受けることも増えてきました。<br />
          会社としてAI活用を推進するのは、<br />
          時代の流れを踏まえれば当然のこと。<br />
          ですが、実際にヒアリングをすると、<br />
          どうやらAI開発という名の裏にある<br />
          「言葉遊び」<br />
          に気づいてない人が多いようです。<br />
          2024年現在、<br />
          <span class="hightlight">
            AI開発を謳っている企業の多くは、<br />
            正確にはAI開発をしていません。<br />
          </span>
          彼らがAI開発と呼んでいる開発の多くは、<br />
          実は「プロンプト開発」です。<br />
          ここで言うプロンプト開発とは、<br />
          生成AIにタスクを実行させるために、<br />
          プログラムではなく、<br />
          人間の言葉によって指示の出し方を工夫し、<br />
          最適化することを指します。<br />
          この与えられたプロンプトに基づいて、<br />
          AIはテキスト・画像・音楽などを生成するため、<br />
          与えるプロンプト次第でアウトプットの質は大きく左右されます。<br />
          コーヒーづくりで例えるなら、次のような感じです。<br />
          <br />
          <div class="border border-black dark:border-white p-5">
            <strong>▼プロンプト開発</strong><br />
            >役割<br />
            最適なコーヒーを淹れる方法を見つける<br />
            >主な作業<br />
            <ul class="list-disc list-inside pl-6">
              <li>
                既存のコーヒーメーカーを使用して、最高のコーヒーを淹れるための設定や手順を調整
              </li>
              <li>異なる条件や好みに応じた最適なレシピや手順を開発</li>
              <li>
                ユーザーが最適な結果を得られるように、具体的な指示やガイドラインを提供
              </li>
            </ul>
          </div>
          <br />
          <div class="border border-black dark:border-white p-5">
            <strong>▼AI開発</strong><br />
            >役割<br />
            最適なコーヒーの淹れ方をもとに、最適なコーヒーメーカーを設計・構築する<br />
            >主な作業<br />
            <ul class="list-disc list-inside pl-6">
              <li>
                最適なコーヒーを淹れるための条件や手順を理解し、その情報をもとに新しいコーヒー
                メーカーの機能や構造を設計
              </li>
              <li>コーヒー抽出プロセスを効率化するための技術やアルゴリズムを開発</li>
              <li>
                製品が一貫して最高のコーヒーを淹れられるように、機械のテストと改良を繰り返す
              </li>
            </ul>
          </div>
          <br />
          確かに広義では、プロンプト開発もAI開発といえるかもしれません。<br />
          より厳密には、<br />
          プロンプトにシステムが付随する場合は<br />
          「AI開発=システム開発」となります。<br />
          この「システム」が抜け落ちてしまった結果、<br />
          プロンプト開発という言葉だけが先行しているのでしょう。<br />
          そのような会社は、LPに<br />
          「AI開発できます!」<br />
          とデカデカと掲げるのは控えるべきです。<br />
          もし、あなたがAI開発を外部に委託する場合、<br />
          その企業が<br />
          大規模言語モデルや機械学習を得意とするのか<br />
          ディープラーニングを開発しているのか<br />
          プロンプトを開発しているのか<br />
          この点を見極めなければいけません。<br />
          これに付随して、<br />
          <br />
          「エンジニア」という言葉にも騙されないようにしてください。<br />
          生成AIの誕生と共に、<br />
          「プロンプトエンジニア」という職業がこの世に生まれました。<br />

          <span class="hightlight">
            プロンプトエンジニアの仕事は、<br />
            AIに対する指示や質問(つまり、プロンプト)を設計し、最適化すること。<br />
          </span>
          AIが生成するコンテンツの質や精度を高めるうえで、<br />
          プロンプトエンジニアは間違いなく重要な存在となります。<br />
          しかし、<br />
          あなたが仕事を依頼する委託先の口から<br />
          「うちのエンジニアが・・・」<br />
          という言葉が出てきたときは要注意。<br />
          相手が「プロンプト」のことを単に「AI」と呼んだり、<br />
          「プロンプトエンジニア」のことを「エンジニア」と呼ぶのには、<br />
          以下の3パターンの理由があると考えられます。<br />
          <br />
          <div class="border border-black dark:border-white p-5">
            《パターン1:×》<br />
            ブランディングとして戦略的・営業的にそういった表現を使っている場合。<br />
            この場合、あなたが話している相手は技術者ではなく営業マンの可能性があります。<br />
            相手がAIの技術的なことを理解しているのかどうか、手元のChatGPTで裏を取りながら確認しま
            しょう。
          </div>
          <br />
          <div class="border border-black dark:border-white p-5">
            《パターン2:×》<br />
            単に思考停止で「AI」「エンジニア」という言葉を使っている場合。<br />
            このケースは、特に実害もありませんがメリットもないです。このような相手はスルーで。
          </div>
          <br />
          <div class="border border-black dark:border-white p-5">
            《パターン3:◎》<br />
            お客様、つまりあなたが理解しやすいように、あえて馴染みのある言葉を使っている場合。<br />
            このような相手は、「プロンプト」「AI」「エンジニア」が指す内容について、きちんと開示してくれるは
            ず。<br />
            付き合うべきパートナーです。
          </div>
          <br />
          私が言いたいのは、「言葉は正しく使うべき」ということ。<br />
          扱うのがプロンプトならば、<br />
          AI開発ではなく<br />
          「プロンプト開発」<br />
          「プロンプト実装」<br />
          と呼ぶべきです。<br />
          エンジニアという曖昧な言葉で濁すのではなく、<br />
          「プロンプトエンジニア」<br />
          「プロンプトディレクター」<br />
          という適切な呼び名を使えということなんです。<br />
          決してプロンプト開発を下に見ているわけではありません。<br />
          <span class="hightlight">
            重要なのは、<br />
            「委託先が謳うAI開発は、蓋を開けたら実はプロンプト開発だった」<br />
            という可能性があることを、まずは知ること。<br />
          </span>
          これに気づかないのは、<br />
          まさにコーヒーメーカーをコーヒーレシピだと思っているのに等しいわけです。<br />
          カニカマをカニだと思って食べている理由もわかったでしょう。<br />
          <br />
          葱を背負っている鴨に成り下りたくなければ、<br />
          しっかりと理解してください。<br />
          別にカニカマが悪いわけではありません。<br />
          でも、<br />
          奥さんに「カニを買ってきて」と言われたのに、<br />
          カニカマを持って帰ってきたら<br />
          「なんてバカな旦那なんだろうか」<br />
          と思われることはわかるでしょう。<br />
          プロンプト開発を頼みたいなら、<br />
          委託先に対して明確にプロンプト開発を依頼すべき。<br />
          一方、AI開発を頼みたいのに、<br />
          実は委託先が「プロンプト開発企業」だったと気づいたならば、<br />
          正しくAI開発ができる企業に依頼すべきです。<br />
          <span class="hightlight">
            最も悲劇なのは、<br />
            今回解説したような真実を知らぬままに、<br />
            プロンプト開発しかできない企業にAI開発の仕事を発注してしまうことです。<br />
          </span>

          おそらくその委託先は、<br />
          あなたが望むアウトプットを出してくれません。<br />
          これに対して私は、<br />
          かつてのSEOのような匂いを感じています。<br />
          システムと違い、<br />
          AIもSEOも答えが明確ではなくコロコロ変わる。<br />
          <br />
          その意味ではプロンプト開発は<br />
          「終わりなき開発、ゴールなき開発」<br />
          であるにもかかわらず、<br />
          言葉の曖昧さでうまく濁されてしまっている。<br />
          その「言葉の曖昧さ」をわかった上で、<br />
          意図して「AI開発」と謳っている企業を見ると、<br />
          あまり良い気分がしません。<br />
          この記事を読み、<br />
          AI開発という言葉の裏にひそむ「言葉遊び」について理解できたならば、<br />
          もう騙されることはないはずです。<br />
          <span class="hightlight">
            私たちは仕事の依頼を受ける時、最初に「AI開発」と「プロンプト開発」の違いを明確に説明していま
            す。<br />
          </span>
          あなたがもし望むのであれば、<br />
          AI開発でもプロンプト開発でもよいので、<br />
          相談に乗りますよ。

        `,
        annotations: [],
      },
      en: {
        title:
          "The reality of customers who are deceived because they don't understand AI development and prompt development - For those of you who are so stupid that you believe it's a crab stick and a crab -",
        category: "",
        content: `Can you explain what "prompt" means? <br />
It's been over a year since generative AI like ChatGPT started gaining attention.<br />
However, there are still<br />
many people who don't really understand<br />
what a "prompt" is.<br />
<span class="hightlight">
If you think<br />
AI development and prompt development are the same thing,<br />
it's as foolish as thinking a candle and a light bulb are the same thing,<br />
continuing to eat imitation crab thinking it's real crab,<br />
or calling someone who scores high in a baseball video game a baseball player.<br />
</span>
I've been receiving more requests from business executives who have recognized the necessity of AI saying<br />
"We want to create a service using AI."<br />
Promoting AI utilization as a company is<br />
natural considering the current trends.<br />
However, when I actually interview them,<br />
it seems many people haven't noticed<br />
the "word play"<br />
behind the name of AI development.<br />
As of 2024,<br />
<span class="hightlight">
most companies claiming to do AI development<br />
are not actually developing AI.<br />
</span>
What they call AI development is<br />
actually "prompt development" in most cases.<br />
Prompt development, as referred to here,<br />
means optimizing how instructions are given to generative AI<br />
not through programming,<br />
but by using human language.<br />
Based on these given prompts,<br />
AI generates text, images, music, etc., so<br />
the quality of the output largely depends on the prompts provided.<br />
To explain using coffee-making as an example:<br />
<br />
<div class="border border-black dark:border-white p-5">
  <strong>▼Prompt Development</strong><br />
  >Role<br />
  Finding the optimal method to brew coffee<br />
  >Main tasks<br />
  <ul class="list-disc list-inside pl-6">
    <li>
      Adjusting settings and procedures to brew the best coffee using existing coffee makers
    </li>
    <li>Developing optimal recipes and procedures for different conditions and preferences</li>
    <li>
      Providing specific instructions and guidelines so users can achieve optimal results
    </li>
  </ul>
</div>
<br />
<div class="border border-black dark:border-white p-5">
  <strong>▼AI Development</strong><br />
  >Role<br />
  Designing and building the optimal coffee maker based on the optimal brewing method<br />
  >Main tasks<br />
  <ul class="list-disc list-inside pl-6">
    <li>
      Understanding the conditions and procedures for brewing optimal coffee, and using that information to design the features and structure of a new coffee maker
    </li>
    <li>Developing technologies and algorithms to optimize the coffee extraction process</li>
    <li>
      Repeatedly testing and improving the machine to ensure it consistently brews the best coffee
    </li>
  </ul>
</div>
<br />
Certainly, in a broad sense, prompt development could be considered AI development.<br />
More precisely,<br />
when a system accompanies prompts,<br />
"AI development = System development."<br />
As a result of this "system" being dropped,<br />
the term prompt development has likely taken precedence.<br />
Such companies should refrain from<br />
prominently advertising<br />
"We can do AI development!"<br />
on their landing pages.<br />
If you're outsourcing AI development,<br />
you must determine whether<br />
the company specializes in large language models and machine learning,<br />
is developing deep learning,<br />
or is developing prompts.<br />
Additionally,<br />
<br />
Don't be deceived by the word "engineer" either.<br />
With the birth of generative AI,<br />
the profession of "prompt engineer" has emerged in this world.<br />
<span class="hightlight">
  The job of a prompt engineer is<br />
  designing and optimizing instructions or questions for AI (that is, prompts).<br />
</span>
In improving the quality and accuracy of AI-generated content,<br />
prompt engineers undoubtedly become important figures.<br />
However,<br />
when you hear the words<br />
"Our engineers..."<br />
from the contractor you're considering hiring, be cautious.<br />
There are three possible reasons why they might simply call "prompts" as "AI" or<br />
refer to "prompt engineers" as "engineers":<br />
<br />
<div class="border border-black dark:border-white p-5">
  《Pattern 1: ×》<br />
  They're strategically using such expressions for branding or sales purposes.<br />
  In this case, the person you're talking to might be a salesperson, not a technician.<br />
  Check whether they actually understand the technical aspects of AI by verifying with ChatGPT at hand.
</div>
<br />
<div class="border border-black dark:border-white p-5">
  《Pattern 2: ×》<br />
  They're thoughtlessly using the terms "AI" and "engineer."<br />
  In this case, there's no particular harm, but no benefit either. Best to ignore such people.
</div>
<br />
<div class="border border-black dark:border-white p-5">
  《Pattern 3: ◎》<br />
  They're deliberately using familiar terms so that you, the customer, can understand more easily.<br />
  Such partners will properly disclose what they mean by "prompt," "AI," and "engineer."<br />
  These are the partners worth working with.
</div>
<br />
What I'm saying is, "words should be used correctly."<br />
If you're dealing with prompts,<br />
you should call it<br />
"prompt development" or<br />
"prompt implementation,"<br />
not AI development.<br />
Instead of being vague with the ambiguous term "engineer,"<br />
use appropriate titles like<br />
"prompt engineer" or<br />
"prompt director."<br />
I'm not looking down on prompt development at all.<br />
<span class="hightlight">
  What's important is<br />
  first recognizing the possibility that<br />
  "the AI development advertised by contractors might actually turn out to be prompt development."<br />
</span>
Not realizing this is<br />
equivalent to thinking a coffee maker is a coffee recipe.<br />
Now you understand why people think imitation crab is real crab.<br />
<br />
If you don't want to be like a duck carrying a green onion on its back (Japanese idiom for being deceived),<br />
understand this clearly.<br />
There's nothing wrong with imitation crab.<br />
But,<br />
if your wife asks you to "buy some crab,"<br />
and you come home with imitation crab,<br />
you understand she'll think<br />
"What a foolish husband."<br />
If you want prompt development,<br />
you should clearly request prompt development from your contractor.<br />
On the other hand, if you want AI development<br />
but realize that your contractor is actually a "prompt development company,"<br />
you should engage a company that can properly develop AI.<br />
<span class="hightlight">
  The most tragic situation is<br />
  unknowingly commissioning AI development work<br />
  to a company that can only do prompt development.<br />
</span>
That contractor will likely<br />
not deliver the output you desire.<br />
Regarding this, I sense<br />
something similar to what happened with SEO in the past.<br />
Unlike systems,<br />
both AI and SEO lack clear answers and keep changing.<br />
<br />
In that sense, prompt development is<br />
"endless development, development without a goal,"<br />
yet it's being conveniently obscured by ambiguous terminology.<br />
Looking at companies that intentionally advertise "AI development"<br />
with this understanding of the "ambiguity of terms"<br />
doesn't leave a good impression.<br />
If you've read this article and<br />
understood the "word play" lurking behind the term AI development,<br />
you shouldn't be deceived anymore.<br />
<span class="hightlight">
When we receive work requests, we first clearly explain the difference between "AI development" and "prompt development."<br />
</span>
If you wish,<br />
we're happy to consult with you on<br />
either AI development or prompt development.`,
        annotations: [],
      },
      zh: {
        title:
          "因为不懂AI开发和提示开发而被欺骗的客户的现实——对于那些愚蠢到相信这是蟹棒和螃蟹的人——",
        category: "",
        content: `您能解释一下什么是"提示词"吗？ <br />
自从ChatGPT等生成式AI开始受到关注以来，已经过去了一年多。<br />
然而，仍然有很多人<br />
不太理解<br />
什么是"提示词"。<br />
<span class="hightlight">
如果你认为<br />
AI开发和提示词开发是一回事，<br />
那就像认为蜡烛和电灯是一样的，<br />
继续以为蟹肉棒就是真正的螃蟹而食用，<br />
或者称呼在棒球游戏中得高分的人为棒球选手一样，<br />
是一种愚蠢的误解。<br />
</span>
我收到越来越多来自认识到AI必要性的企业管理者的请求，说<br />
"我们想创建一个使用AI的服务。"<br />
作为公司推广AI应用<br />
考虑到当前趋势是很自然的事情。<br />
但是，当我实际进行访谈时，<br />
似乎很多人还没有注意到<br />
AI开发名称背后的<br />
"文字游戏"。<br />
截至2024年，<br />
<span class="hightlight">
大多数声称在做AI开发的公司<br />
实际上并没有在开发AI。<br />
</span>
他们所谓的AI开发在大多数情况下<br />
实际上是"提示词开发"。<br />
这里所指的提示词开发，<br />
是指通过人类语言而非编程，<br />
优化对生成式AI的指令给予方式。<br />
基于这些给定的提示词，<br />
AI生成文本、图像、音乐等，因此<br />
输出的质量在很大程度上取决于提供的提示词。<br />
用制作咖啡作为例子来解释：<br />
<br />
<div class="border border-black dark:border-white p-5">
  <strong>▼提示词开发</strong><br />
  >角色<br />
  寻找冲泡咖啡的最佳方法<br />
  >主要任务<br />
  <ul class="list-disc list-inside pl-6">
    <li>
      使用现有咖啡机，调整设置和程序以冲泡最好的咖啡
    </li>
    <li>为不同条件和偏好开发最佳配方和程序</li>
    <li>
      提供具体的指导和准则，使用户能够获得最佳效果
    </li>
  </ul>
</div>
<br />
<div class="border border-black dark:border-white p-5">
  <strong>▼AI开发</strong><br />
  >角色<br />
  基于最佳冲泡方法设计和构建最佳咖啡机<br />
  >主要任务<br />
  <ul class="list-disc list-inside pl-6">
    <li>
      理解冲泡最佳咖啡的条件和程序，并利用这些信息设计新咖啡机的功能和结构
    </li>
    <li>开发技术和算法以优化咖啡提取过程</li>
    <li>
      反复测试和改进机器，确保它始终能冲泡出最好的咖啡
    </li>
  </ul>
</div>
<br />
当然，从广义上讲，提示词开发可以被视为AI开发。<br />
更准确地说，<br />
当系统伴随提示词时，<br />
"AI开发=系统开发"。<br />
由于这个"系统"被省略，<br />
提示词开发这个术语可能已经优先使用。<br />
这类公司应该避免<br />
在其登陆页上<br />
大力宣传"我们能做AI开发！"<br />
如果您要外包AI开发，<br />
必须确定<br />
该公司是专注于大型语言模型和机器学习，<br />
正在开发深度学习，<br />
还是在开发提示词。<br />
此外，<br />
<br />
也不要被"工程师"这个词所欺骗。<br />
随着生成式AI的诞生，<br />
"提示词工程师"这个职业已经在这个世界上出现。<br />
<span class="hightlight">
  提示词工程师的工作是<br />
  设计和优化对AI的指令或问题（即提示词）。<br />
</span>
在提高AI生成内容的质量和准确性方面，<br />
提示词工程师无疑成为重要人物。<br />
然而，<br />
当你听到你考虑聘请的承包商说<br />
"我们的工程师..."<br />
时，要小心。<br />
他们可能简单地将"提示词"称为"AI"或<br />
将"提示词工程师"称为"工程师"，原因有三种可能：<br />
<br />
<div class="border border-black dark:border-white p-5">
  《模式1：×》<br />
  他们出于品牌或销售目的策略性地使用这些表达。<br />
  在这种情况下，与你交谈的人可能是销售人员，而不是技术人员。<br />
  通过手边的ChatGPT验证，检查他们是否真正理解AI的技术方面。
</div>
<br />
<div class="border border-black dark:border-white p-5">
  《模式2：×》<br />
  他们不假思索地使用"AI"和"工程师"等术语。<br />
  在这种情况下，没有特别的危害，但也没有好处。最好忽略这类人。
</div>
<br />
<div class="border border-black dark:border-white p-5">
  《模式3：◎》<br />
  他们故意使用熟悉的术语，以便您作为客户能更容易理解。<br />
  这样的合作伙伴会正确地披露他们所说的"提示词"、"AI"和"工程师"是什么意思。<br />
  这些是值得合作的伙伴。
</div>
<br />
我想说的是，"词语应该正确使用。"<br />
如果你处理的是提示词，<br />
应该称之为<br />
"提示词开发"或<br />
"提示词实施"，<br />
而不是AI开发。<br />
不要用模糊的"工程师"这个词含糊其辞，<br />
而应使用恰当的头衔，如<br />
"提示词工程师"或<br />
"提示词总监"。<br />
我完全不是看不起提示词开发。<br />
<span class="hightlight">
  重要的是<br />
  首先要认识到<br />
  "承包商宣传的AI开发实际上可能是提示词开发"这种可能性。<br />
</span>
没有意识到这一点<br />
相当于认为咖啡机是咖啡配方。<br />
现在你明白为什么人们认为蟹肉棒是真正的螃蟹了。<br />
<br />
如果你不想像背着葱的鸭子一样被欺骗（日语成语，意为被欺骗），<br />
请清楚地理解这一点。<br />
蟹肉棒本身没有什么错。<br />
但是，<br />
如果你的妻子让你"买些螃蟹"，<br />
而你带回家的是蟹肉棒，<br />
你明白她会认为<br />
"多么愚蠢的丈夫啊。"<br />
如果你想要提示词开发，<br />
你应该明确地向承包商请求提示词开发。<br />
另一方面，如果你想要AI开发<br />
但意识到你的承包商实际上是一家"提示词开发公司"，<br />
你应该聘请一家能够适当开发AI的公司。<br />
<span class="hightlight">
  最悲惨的情况是<br />
  在不知情的情况下，将AI开发工作<br />
  委托给一家只能做提示词开发的公司。<br />
</span>
那个承包商可能<br />
不会提供你期望的输出。<br />
关于这一点，我感觉到<br />
与过去SEO的情况类似。<br />
与系统不同，<br />
AI和SEO都没有明确的答案，而且不断变化。<br />
<br />
从这个意义上说，提示词开发是<br />
"无止境的开发，没有目标的开发"，<br />
但它却被模糊的术语巧妙地掩盖了。<br />
理解了"术语的模糊性"后，<br />
看那些有意宣传"AI开发"的公司<br />
不会给人留下好印象。<br />
如果你已阅读本文并<br />
理解了AI开发术语背后潜藏的"文字游戏"，<br />
你应该不会再被欺骗了。<br />
<span class="hightlight">
当我们收到工作请求时，我们首先清楚地解释"AI开发"和"提示词开发"之间的区别。<br />
</span>
如果您愿意，<br />
我们很乐意就<br />
AI开发或提示词开发为您提供咨询。`,
        annotations: [],
      },
    },
  },
  {
    id: "02",
    date: "2024.4.18",
    link: "/ai/02",
    translations: {
      ja: {
        title:
          '令和版『桃太郎』AIを使う鬼との戦い 〜AIの"中身"が企業の明暗を分ける時代〜',
        category: "",
        content: `<span class="hightlight">
  「桃太郎」が令和の時代にいたら、<br />
  鬼退治はどうなるでしょうか?<br />
</span>
おじいさんは桃太郎に、<br />
「村から金品を巻き上げた鬼を退治してくれ」<br />
「これがあれば、楽に鬼退治ができるはずだ」<br />
そう言って、<br />
きびだんごではなく、AIツールを授けました。<br />
このAIツールを使えば、<br />
鬼の居場所を瞬時に把握できるし、<br />
戦略も立てやすい。<br />
犬・猿・キジという仲間を連れずに、<br />
鬼ヶ島にも行かず、遠隔操作で、<br />
コスパよく鬼退治ができました。<br />
しかし、めでたくお話は終わりません。<br />
桃太郎の功績を知った、力も頭脳もない村の商売人たちは、こう考えました。<br />
「そんな簡単なら俺たちでも同じことができるんじゃないか?」<br />
そして、「AI搭載」という"旗印"を掲げ始めます。<br />
「当店の武器はAIを搭載しています!」<br />
「AIの力で楽々あなたも英雄に!」<br />
一見すると本当にAIを搭載したかのようなハイテクに身を包んでいますが、<br />
その実態は犬・猿・キジを共にして戦う旧式スタイルと変わりません。<br />
<br />
"AIを看板に掲げるだけ"の村の商売人は、<br />
「AIブーム」に便乗して<br />
自分より弱い立場の人間を探しては、<br />
鬼のように金儲けを試みるだけでした。<br />
こうして村人の心に鬼は宿ってしまったのでした。<br />
<br />
実際、世界はこの1年で、<br />
「AI = なんかすごい= なんかすごいサービス =売れる 」<br />
といった最強(短絡的)方程式を完成させました。<br />
そんな方程式を見つけた企業は、<br />
一目散に「AI搭載してます」ポーズを取り始めます。<br />
言ってしまえば、<br />
<span class="hightlight">
  「AIの皮を被っただけ」のニセモノが乱立している<br />
</span>
というわけです。<br />
だから、AIの中身は「カラッポ」なのです。<br />
しかし、本当の勝負はこれからです。<br />
「搭載するAIの"中身"」こそが、企業の優劣を決める時代がやってきます。<br />
<span class="hightlight">
  表面的に「AI搭載」と言うだけでは、もう意味がありません。<br />
</span>
「どれだけ"高度な"AIを搭載しているか」<br />
「AIをどれだけ"戦略的に"活用しているか」<br />
そうしたAIの「中身」が問われるようになるはずです。<br />
そして、その「中身」こそが、これからのビジネスの勝敗を分けることになる。<br />
私はそう確信しています。<br />
とはいえ、「AIの皮を被る」だけでも、今のうちは十分に売上は立つかもしれません。<br />
<span class="hightlight">
  でも、見せかけに頼っていては、いずれ時代に淘汰されるのは目に見えています。<br />
</span>
そのような企業とは一線を画すべく、<span class="hightlight"
  >私たちは「AIの中身」にこだわり抜きます。<br /></span
>
<span class="hightlight">
  クライアントのビジネスを、真に成功に導くためのAIソリューションを提供する。<br />
  世の中を本質的なサービスで満たしていく。<br /> </span
><br />
それが、私たちのミッションです。<br />
<br />
あなたが善良なビジネスマンであれば、<br />
ともに人の心に宿った鬼退治をしましょう。<br />
「本物でAIを活用したい!」と思ったなら、<br />
ぜひ我々に問い合わせをしましょう。<br />
きびだんごはあげられませんが、<br />
本物のAIビジネス体験をさせてあげましょう。
        `,
        annotations: [],
      },
      en: {
        title:
          'Reiwa version of "Momotaro": Fighting against demons using AI ~The era in which the "contents" of AI determine the success or failure of a company~',
        category: "",
        content: `<span class="hightlight">
  If "Momotaro" existed in the Reiwa era,<br />
  what would his oni (demon) slaying look like?<br />
</span>
The old man said to Momotaro,<br />
"Please defeat the oni who have extorted money and valuables from our village"<br />
"With this, you should be able to defeat the oni easily"<br />
Saying this,<br />
he gave Momotaro not kibi dango (millet dumplings), but an AI tool.<br />
Using this AI tool,<br />
Momotaro could instantly locate the oni,<br />
and easily develop a strategy.<br />
Without taking along companions like the dog, monkey, and pheasant,<br />
without going to Onigashima (Demon Island), through remote operation,<br />
he defeated the oni cost-effectively.<br />
However, the story doesn't end happily here.<br />
The village merchants, who had neither strength nor brains, learned of Momotaro's achievements and thought:<br />
"If it's that easy, couldn't we do the same thing?"<br />
And so, they began to raise the banner of "AI-equipped."<br />
"Our weapons are equipped with AI!"<br />
"Become a hero effortlessly with the power of AI!"<br />
At first glance, they appeared to be wrapped in high-tech as if they truly incorporated AI,<br />
but in reality, their approach was no different from the old style of fighting alongside dogs, monkeys, and pheasants.<br />
<br />
The village merchants who "merely displayed AI as a signboard"<br />
jumped on the "AI boom"<br />
seeking out those weaker than themselves,<br />
and like demons, merely attempted to make money.<br />
Thus, demons came to dwell in the hearts of the villagers.<br />
<br />
Indeed, over the past year, the world has completed<br />
the ultimate (simplistic) equation: "AI = something amazing = amazing service = profitable."<br />
Companies that discovered this equation<br />
rushed to adopt the "We're equipped with AI" pose.<br />
In other words,<br />
<span class="hightlight">
  "Fake products that merely wear the skin of AI are proliferating"<br />
</span>
That's why the content of AI is "empty."<br />
However, the real competition is just beginning.<br />
An era is coming where the "content of the AI" being implemented will determine corporate superiority.<br />
<span class="hightlight">
  Merely saying "AI-equipped" superficially no longer has meaning.<br />
</span>
"How 'advanced' is the AI being implemented?"<br />
"How 'strategically' is AI being utilized?"<br />
Such "content" of AI will be questioned.<br />
And it's this "content" that will determine business success going forward.<br />
I am convinced of this.<br />
That said, "wearing the skin of AI" might be enough to generate sales for now.<br />
<span class="hightlight">
  But relying on appearances will obviously lead to elimination by the times eventually.<br />
</span>
To distinguish ourselves from such companies, <span class="hightlight">we are thoroughly committed to "the content of AI."<br /></span>
<span class="hightlight">
  Providing AI solutions that truly lead clients' businesses to success.<br />
  Filling the world with essential services.<br /></span>
<br />
That is our mission.<br />
<br />
If you are a good-hearted businessperson,<br />
let's work together to defeat the demons dwelling in people's hearts.<br />
If you think, "I want to utilize genuine AI!"<br />
please contact us.<br />
We can't offer you kibi dango,<br />
but we can provide you with a genuine AI business experience.`,
        annotations: [],
      },
      zh: {
        title: "令和版《桃太郎》：用AI对抗恶魔～AI的“内容”将决定企业的成败～",
        category: "",
        content: `<span class="hightlight">
  如果"桃太郎"生活在令和时代，<br />
  他的退治鬼怪会是什么样子？<br />
</span>
老爷爷对桃太郎说，<br />
"请消灭那些从村子里敲诈钱财的鬼怪"<br />
"有了这个，你应该能轻松地消灭鬼怪"<br />
这样说着，<br />
老爷爷给了桃太郎的不是黍团子，而是一种AI工具。<br />
使用这种AI工具，<br />
桃太郎可以立即掌握鬼怪的位置，<br />
也更容易制定战略。<br />
不需要带上狗、猴子、雉鸡这样的伙伴，<br />
不需要去鬼岛，而是通过远程操作，<br />
他以高成本效益消灭了鬼怪。<br />
然而，故事并没有就此圆满结束。<br />
得知桃太郎功绩的村里商人们，既没有力量也没有头脑，他们这样想：<br />
"如果这么简单，我们难道不能做同样的事情吗？"<br />
于是，他们开始打出"搭载AI"的旗号。<br />
"我们的武器搭载了AI！"<br />
"使用AI的力量，你也能轻松成为英雄！"<br />
乍看之下，他们好像真的装备了高科技AI，<br />
但实际上，他们的做法与带着狗、猴子、雉鸡一起战斗的旧式风格没有什么不同。<br />
<br />
那些"只是挂着AI招牌"的村里商人<br />
搭上了"AI热潮"的便车<br />
寻找比自己弱势的人，<br />
像鬼怪一样只是试图赚钱。<br />
就这样，鬼怪住进了村民们的心中。<br />
<br />
实际上，世界在过去一年里，<br />
完成了"AI = 很厉害 = 很厉害的服务 = 能卖钱"<br />
这样的最强（简单化）方程式。<br />
发现了这种方程式的企业，<br />
迅速摆出"我们搭载了AI"的姿态。<br />
也就是说，<br />
<span class="hightlight">
  "只是披着AI外皮的伪产品正在泛滥"<br />
</span>
这就是为什么AI的内容是"空洞的"。<br />
但是，真正的竞争才刚刚开始。<br />
一个"搭载的AI'内容'"决定企业优劣的时代即将来临。<br />
<span class="hightlight">
  仅仅表面上说"搭载AI"已经没有意义了。<br />
</span>
"搭载了多么'高级'的AI"<br />
"多么'战略性'地利用AI"<br />
这样AI的"内容"将受到质疑。<br />
而正是这种"内容"，将决定未来业务的成败。<br />
我坚信这一点。<br />
话虽如此，"披着AI的外皮"目前或许足以创造销售额。<br />
<span class="hightlight">
  但依赖表面功夫，显然最终将被时代淘汰。<br />
</span>
为了与这样的公司区分开来，<span class="hightlight">我们彻底专注于"AI的内容"。<br /></span>
<span class="hightlight">
  提供真正引领客户业务成功的AI解决方案。<br />
  用本质性的服务填满世界。<br /></span>
<br />
这就是我们的使命。<br />
<br />
如果你是一位善良的商人，<br />
让我们一起消灭栖息在人们心中的鬼怪。<br />
如果你想"真正利用真正的AI！"，<br />
请联系我们。<br />
我们不能给你黍团子，<br />
但我们可以提供真正的AI商业体验。`,
        annotations: [],
      },
    },
  },
];

export const dataBlockChain: ArticleType[] = [
  {
    id: "01",
    date: "2024.4.18",
    link: "/blockchain/01",
    translations: {
      ja: {
        title:
          "99%の企業は未だにアンフェアな”みかじめ料”を払っていることに気づいているのか",
        category: "",
        content: `関所: <br />
昔の商売人は、主要な町を通過するたびに、通行料を払っていました。<br />
当然、今はありません。<br />
みかじめ料:<br />
暴力団に力があった頃、飲食店や小売店は用心棒代として半ば強制的に金銭を徴収されて<br />
いました。<br />
まだ文化としては残っていますが、ほとんどなくなっています。<br />
時代が経るにつれて理不尽な徴収は少なくなり、<br />
商売がしやすくなっているようにも思えます。<br />
しかし、それはあくまで目に見える世界での話です。<br />
<span class="hightlight">
  今、経営者たちは、<br />
  常に上納をし続けています。<br />
</span>
目には見えない<span class="hightlight">”電子決済手数料”</span>を。<br />
当然、そんなことは意識はして商売をしていることでしょう。<br />
大手ペイ払いサービスでも約3パーセント。<br />
クレカ決済ではそれ以上の手数料がかかることも。<br />
手数料が3パーセントの場合、<br />
売上10億円の企業の「上納」金額は、<br />
<br />
少なくとも3,000万円となります。<br />
取引手数料、固定手数料、返金処理や不正利用などイレギュラーな手数料・・・<br />
諸々含めると、<br />
売上の1割も手数料支払いで消えることも。<br />
クレカやペイ払いで、たしかに顧客の利便性は向上します。<br />
現金払いに比べて売上を取りっぱぐれるリスクが減るため、<br />
一概にデメリットばかりとは言えません。<br />
このようなメリットを受ける対価としてコスト(手数料)を支払う事自体は、<br />
何の問題もありません。<br />
資本主義の自然構造です。<br />
<span class="hightlight">
  しかし、問題なのは、<br />
  カード会社やペイ払い運営会社は自分たちだけが、<br />
  儲かる仕組みを独占的に構築していることです。<br />
</span>
彼らは、<br />
<span class="hightlight">
  よりコストを抑えながら利便性を維持できる"手段"を知っているのに、<br />
  それをひた隠しにしています。<br />
  その"手段"とは、<br />
  <br />
  ブロックチェーンです。<br />
</span>
暗号資産(仮想通貨)やNFTの文脈で語られることが多いブロックチェーン。<br />
<br />
しかしその本質は、<br />
投資や投機の範疇に留まりません。<br />
ブロックチェーンをビジネスに導入することで、<br />
決済システム企業への手数料上納を回避できます。<br />
なぜブロックチェーンが、手数料の上納を回避することにつながるのか。<br />
この点を理解するために、<br />
そもそもあなたようカード利用事業者が「手数料の上納」も含め、<br />
どのような不利益を被っているのかを2つの観点から説明します。<br />
<br />
<div class="border border-black dark:border-white p-5">
  <strong>《1.カード会社に支払う手数料負担》</strong><br /><br />
  現金を用いない電子決済では、カード会社のような「中間管理者」が、カード利用事業者と
  ユーザーの間に必ず入り込んできます。<br /><br />
  現金決済であれば、事業者はユーザーからダイレクトに売上を受け取ることができます。<br /><br />
  中間の管理会社が入り込む余地はありません。<br /><br />
  一方、カード決済を導入している場合、カード利用事業者は売上の数パーセントをカード会
  社に必ず納めなければなりません。<br />
</div>
<br />
<div class="border border-black dark:border-white p-5">
  <strong>《2.売掛金の着金の遅れ》</strong><br /><br />
  現金決済ならば、売上が発生した瞬間に、事業者は売上の全額をユーザーから直接受け
  取れます。<br /><br />
  常に「リアルタイムでダイレクトな着金」であり、売掛という概念すら存在しません。<br /><br />
  しかし、間にカード会社が入る場合はそうはいきません。<br /><br />
  ユーザーがカードで支払いをした場合、その売上はまずカード会社に計上されます。<br /><br />
  その後、手数料を差し引いた上で残りの売上がカード利用事業者に着金します。
  しかも、1〜2ヶ月遅れで。
</div>
<br />
なぜ、自社の売上がカード会社という「第三者」に一旦計上されなければならないのか?<br />
なぜ、売上の着金が1〜2ヶ月遅れになるというリスクをカード利用事業者側が背負う必要が
あるのか?<br />
たしかに、これらのデメリットは利便性とのトレードオフになっています。<br />
利便性のためにデメリットも同時に受け入れろと言われたらそれまでです。<br />
ところが、<br />
この仕組みを根底から変えうる技術があります。<br />
それがブロックチェーンなのです。<br />
<span class="hightlight">
  ブロックチェーンで実現できることを一言で表すらなら、<br />
  「インターネット上におけるダイレクトな電子商取引の実現」<br />
</span>
ブロックチェーンを用いたインターネット上のやりとりには、<br />
ピア・ツー・ピア(Peer to Peer:P2P)という特徴があります。<br />
ここで言うPeerとは「対価の支払い・受け取り」に直接関わる主体、<br />
つまり、<br />
・支払いを受ける事業者<br />
・支払いを行うエンドユーザー<br />
を指します。<br />
<br />
ブロックチェーンが提供するP2Pの仕組みにおいては、<br />
Peer(エンドユーザー)からPeer(事業者)に対して、<br />
カード会社のような中間管理者を介さないダイレクトな支払いが可能なのです。<br />
<span class="hightlight">
  管理者を介さないことで取引の透明性やセキュリティが担保され、<br />
  手数料も安く済むことから、<br />
  ブロックチェーンを活用した決済方法を好むユーザーも増えてきています。<br />
</span>
さらに、<br />
企業にとっても、それまで接点がなかった新たなユーザーの呼び込みにつながるなどのメリッ
トがあります。<br />
クレジットカード払いやペイ払いは、<br />
現時点での利便性はたしかにブロックチェーンよりも優れているかもしれません。<br />
しかし、その利便性はあなたの会社がカード会社に “上納”
する手数料によって成り立ってい ます。<br />
もっと便利なブロックチェーンという仕組みが世の中にはあるにもかかわらず。<br />
<span class="hightlight">
  この中世の農奴制と変わらない仕組みを理解しつつもまだ、<br />
  貢ぎ物やらみかじめ料を上納し続けたいでしょうか?<br />
  上に搾取される前提で、<br />
  手数料を上乗せしてあなたも顧客から無駄に搾取し続けるのですか?<br />
  そこに、健全な競争原理はあるんでしょうか?<br />
  搾取の連鎖が続くだけではないでしょうか?<br /> </span
><br />
私たちは、そのことをよく理解しています。<br />
<br />
だから、私たちは搾取できません。<br />
嘘もつけません。<br />
もう、搾取も嘘も疲れませんか?<br />
あなたがもし、<br />
健全で安全、かつ便利な決済サービスの導入を考えているならば、<br />
すぐに我々に問い合わせてください。<br />
`,
        annotations: [
          
        ],
      },
      en: {
        title:
          "Are 99% of Companies Aware They're Still Paying Unfair \"Protection Money\"?",
        category: "",
        content: `Checkpoints: <br />
In the past, merchants paid tolls every time they passed through major towns.<br />
Of course, these don't exist today.<br />
Protection Money:<br />
When yakuza groups were powerful, restaurants and retail stores were semi-forcibly charged money as payment for protection.<br />
Although it still remains as a cultural concept, it has mostly disappeared.<br />
As time passes, unreasonable collections decrease,<br />
and it seems that doing business has become easier.<br />
However, that's only true in the visible world.<br />
<span class="hightlight">
Today, business owners<br />
are constantly paying tributes.<br />
</span>
The invisible <span class="hightlight">"electronic payment fees"</span>.<br />
Of course, you're probably conscious of this as you conduct business.<br />
Even with major payment services, it's about 3 percent.<br />
Credit card payments can incur even higher fees.<br />
In the case of a 3 percent fee,<br />
for a company with sales of 100 million yen, the "tribute" amount is<br />
<br />
at least 3 million yen.<br />
Transaction fees, fixed fees, irregular fees for refund processing and fraudulent use...<br />
When all is included,<br />
up to 10% of sales can disappear in fee payments.<br />
With credit cards and payment services, customer convenience certainly improves.<br />
Compared to cash payments, the risk of losing sales decreases,<br />
so it's not entirely disadvantageous.<br />
Paying costs (fees) in exchange for these benefits<br />
is not a problem in itself.<br />
It's the natural structure of capitalism.<br />
<span class="hightlight">
However, the problem is that<br />
card companies and payment service operators<br />
have exclusively built a system where only they profit.<br />
</span>
They<br />
<span class="hightlight">
know of "methods" that can maintain convenience while reducing costs,<br />
but they're keeping it secret.<br />
That "method" is<br />
<br />
blockchain.<br />
</span>
Blockchain is often discussed in the context of cryptocurrency and NFTs.<br />
<br />
But its essence<br />
extends beyond investment and speculation.<br />
By implementing blockchain in business,<br />
you can avoid paying fees to payment system companies.<br />
Why does blockchain lead to avoiding fee payments?<br />
To understand this point,<br />
I'll explain from two perspectives what disadvantages card-using businesses like yours suffer, including "fee tributes."<br />
<br />
<div class="border border-black dark:border-white p-5">
  <strong>《1. The Burden of Fees Paid to Card Companies》</strong><br /><br />
  In electronic payments without cash, "intermediaries" like card companies always insert themselves between the card-using business and the user.<br /><br />
  With cash payments, businesses can receive sales directly from users.<br /><br />
  There's no room for intermediary management companies.<br /><br />
  On the other hand, when using card payments, card-using businesses must always pay several percent of their sales to the card company.<br />
</div>
<br />
<div class="border border-black dark:border-white p-5">
  <strong>《2. Delayed Receipt of Accounts Receivable》</strong><br /><br />
  With cash payments, businesses can receive the full amount of sales directly from users the moment a sale occurs.<br /><br />
  It's always "real-time direct receipt," and the concept of accounts receivable doesn't even exist.<br /><br />
  However, that's not the case when card companies are involved.<br /><br />
  When users pay by card, the sale is first recorded by the card company.<br /><br />
  Afterward, the remaining sales amount, after deducting fees, is received by the card-using business.
  And even then, with a 1-2 month delay.
</div>
<br />
Why must your company's sales first be recorded by a "third party" like a card company?<br />
Why must card-using businesses bear the risk of a 1-2 month delay in receiving their sales?<br />
Certainly, these disadvantages are a trade-off for convenience.<br />
If we're told to accept the disadvantages along with the convenience, that's that.<br />
However,<br />
there is a technology that can fundamentally change this system.<br />
That's blockchain.<br />
<span class="hightlight">
  If I were to express what blockchain can achieve in one phrase,<br />
  it would be "the realization of direct electronic commerce on the internet."<br />
</span>
Interactions on the internet using blockchain<br />
have a feature called peer-to-peer (P2P).<br />
The "peers" referred to here are the parties directly involved in "paying and receiving compensation,"<br />
namely,<br />
- Businesses receiving payments<br />
- End users making payments<br />
<br />
In the P2P mechanism provided by blockchain,<br />
Peer (end user) to Peer (business)<br />
direct payments are possible without intermediaries like card companies.<br />
<span class="hightlight">
  By eliminating intermediaries, transaction transparency and security are guaranteed,<br />
  and with lower fees,<br />
  more users are starting to prefer payment methods utilizing blockchain.<br />
</span>
Furthermore,<br />
for businesses, there are benefits such as attracting new users with whom they previously had no contact.<br />
Credit card payments and payment services<br />
might currently be more convenient than blockchain.<br />
However, that convenience is sustained by the fees your company "pays tribute" to card companies.<br />
Despite the fact that there's a more convenient mechanism called blockchain in the world.<br />
<span class="hightlight">
  Understanding this system that's no different from medieval serfdom,<br />
  do you still want to continue paying tributes and protection money?<br />
  With the premise of being exploited from above,<br />
  will you continue to unnecessarily exploit your customers by adding fees?<br />
  Is there a healthy competitive principle there?<br />
  Won't it just perpetuate a chain of exploitation?<br />
</span><br />
We understand this well.<br />
<br />
That's why we can't exploit.<br />
We can't lie either.<br />
Aren't you tired of exploitation and lies?<br />
If you're considering<br />
implementing a sound, safe, and convenient payment service,<br />
contact us immediately.<br />`,
        annotations: [
        ],
      },
      zh: {
        title: "99%的企业是否意识到他们仍在支付不公平的\"保护费\"？",
        category: "",
        content: `关卡： <br />
在过去，商人每次经过主要城镇时都要支付通行费。<br />
当然，现在已经没有了。<br />
保护费：<br />
在黑社会组织强大的时候，餐馆和零售店被半强制性地收取保护费。<br />
虽然这种文化仍然存在，但已经基本消失了。<br />
随着时间的推移，不合理的收费减少了，<br />
做生意似乎变得更容易了。<br />
然而，这只是在可见世界中的情况。<br />
<span class="hightlight">
如今，企业主们<br />
不断地在支付贡品。<br />
</span>
那就是看不见的<span class="hightlight">"电子支付手续费"</span>。<br />
当然，你在经营业务时可能已经意识到了这一点。<br />
即使是大型支付服务，也约为3%。<br />
信用卡支付甚至可能产生更高的费用。<br />
如果手续费是3%，<br />
对于一家销售额为1亿日元的公司，"贡品"金额是<br />
<br />
至少300万日元。<br />
交易费、固定费用、退款处理和欺诈使用等异常费用...<br />
算上所有这些，<br />
高达10%的销售额可能因费用支付而消失。<br />
使用信用卡和支付服务确实提高了客户便利性。<br />
与现金支付相比，丢失销售额的风险降低，<br />
所以不能说完全是劣势。<br />
为这些好处支付成本（费用）本身<br />
没有任何问题。<br />
这是资本主义的自然结构。<br />
<span class="hightlight">
然而，问题在于<br />
卡公司和支付服务运营商<br />
独占建立了一个只有他们获利的系统。<br />
</span>
他们<br />
<span class="hightlight">
知道既能降低成本又能保持便利性的"方法"，<br />
但他们一直在隐瞒。<br />
那个"方法"就是<br />
<br />
区块链。<br />
</span>
区块链常在加密货币和NFT的背景下被讨论。<br />
<br />
但其本质<br />
不仅限于投资和投机。<br />
通过在业务中实施区块链，<br />
你可以避免向支付系统公司支付费用。<br />
为什么区块链能避免费用支付？<br />
为了理解这一点，<br />
我将从两个角度解释像您这样使用卡的企业遭受的不利，包括"费用贡品"。<br />
<br />
<div class="border border-black dark:border-white p-5">
  <strong>《1. 支付给卡公司的费用负担》</strong><br /><br />
  在不使用现金的电子支付中，像卡公司这样的"中间管理者"总是插入到使用卡的企业和用户之间。<br /><br />
  使用现金支付时，企业可以直接从用户处接收销售额。<br /><br />
  中间管理公司没有插入的空间。<br /><br />
  另一方面，当使用卡支付时，使用卡的企业必须向卡公司支付销售额的几个百分点。<br />
</div>
<br />
<div class="border border-black dark:border-white p-5">
  <strong>《2. 应收账款到账延迟》</strong><br /><br />
  使用现金支付，企业可以在销售发生的瞬间直接从用户处收到全部销售额。<br /><br />
  这总是"实时直接到账"，甚至不存在应收账款的概念。<br /><br />
  然而，当卡公司参与其中时，情况就不同了。<br /><br />
  当用户使用卡支付时，销售额首先记录在卡公司。<br /><br />
  之后，扣除费用后的剩余销售额才到达使用卡的企业。
  而且，还有1-2个月的延迟。
</div>
<br />
为什么你公司的销售额必须先由卡公司这样的"第三方"记录？<br />
为什么使用卡的企业必须承担销售额1-2个月延迟到账的风险？<br />
当然，这些缺点是便利性的代价。<br />
如果我们被告知要接受这些缺点以换取便利性，那就这样吧。<br />
然而，<br />
有一种技术可以从根本上改变这个系统。<br />
那就是区块链。<br />
<span class="hightlight">
  如果要用一句话表达区块链能实现什么，<br />
  那就是"实现互联网上的直接电子商务交易"。<br />
</span>
使用区块链的互联网交互<br />
具有点对点（Peer to Peer：P2P）的特性。<br />
这里所说的"Peer"是指直接参与"支付和接收对价"的主体，<br />
即，<br />
- 接收支付的企业<br />
- 进行支付的终端用户<br />
<br />
在区块链提供的P2P机制中，<br />
可以实现从Peer（终端用户）到Peer（企业）<br />
无需卡公司等中间管理者的直接支付。<br />
<span class="hightlight">
  通过消除中间管理者，交易透明度和安全性得到保证，<br />
  而且费用更低，<br />
  越来越多的用户开始喜欢使用区块链的支付方式。<br />
</span>
此外，<br />
对企业来说，也有吸引以前没有接触过的新用户等好处。<br />
信用卡支付和支付服务<br />
目前可能比区块链更便捷。<br />
然而，这种便利性是由你的公司向卡公司"上缴"的费用维持的。<br />
尽管世界上有一种更便捷的机制叫做区块链。<br />
<span class="hightlight">
  理解了这个与中世纪农奴制没有什么不同的系统后，<br />
  你还想继续支付贡品和保护费吗？<br />
  在被上层剥削的前提下，<br />
  你会继续通过加收费用不必要地剥削你的客户吗？<br />
  那里有健康的竞争原则吗？<br />
  难道不会只是延续剥削的链条吗？<br />
</span><br />
我们很好地理解这一点。<br />
<br />
所以，我们不能剥削。<br />
我们也不能撒谎。<br />
你难道不厌倦剥削和谎言了吗？<br />
如果你正在考虑<br />
实施健全、安全且便捷的支付服务，<br />
请立即联系我们。<br />`,
        annotations: [
        ],
      },
    },
  },
  {
    id: "02",
    date: "2024.4.18",
    link: "/blockchain/02",
    translations: {
      ja: {
        title:
          "ビットコインに価値がないと言うのなら、人類は皆まともに歩けないと言っているようなものにすぎない",
        category: "",
        content: `「赤ちゃんはよちよち歩きで不安定だから、将来はちゃんと歩けないだろう」<br>
こんなことを言う人はいないでしょう。<br>
「ビットコインは送金速度が遅いし不安定な通貨だから、将来も実務的に使えないだろう」<br>
こんなことを言う人は山ほどいます。<br>
<span class="hightlight">
  いまだ、ビットコインに対して懐疑的に見る人が今なお一定数いるようですが、<br>
非常に愚かです。<br>
</span>
ビットコインの送金や決済には、たしかに時間がかかります。<br>
自動販売機での支払いにビットコインを使った結果、<br>
ジュースが出てくるまでに10分かかるとしたら、悠長に待つバカはさすがにいないでしょう。<br>
現時点において、「利便性」を最優先に考えるなら、ビットコインは間違いなく不便。<br>
しかし、このことを理由に「ビットコインは無価値(無意味)だ」と非難するのだとしたら、<br>
それもまたバカと言っていいでしょう。<br>
まったくもってビットコインの本質を捉えていない、極めて的はずれな主張です。<br>
ビットコイン不要論者たちの主張はこうです。<br>
<ul class="list-disc list-inside pl-6">
  <li>
    ビットコインは遅い(実務に使えない)
  </li>
  <li>ビットコインはボラティリティが大きい(取引通貨として不安定過ぎる)</li>
  <li>
    ビットコインには裏付け資産がない(そんなものをどうやって信用しろと!?)
  </li>
</ul>
言いたいことはわかります。<br>
しかし、これらの主張はいずれもビットコインの本質に迫るものではありません。<br>
<span class="hightlight">
  では、ビットコインの本質とは何か。<br>
そ資産としては「価値の保存」<br>
決済手段としては「確実性」<br>
この2点が高度なレベルで実現していることにあります。<br>
</span>
いずれもわかりにくい概念であるため、かみ砕いて説明しましょう。<br>
ビットコインは、その希少性や安全性から「デジタルゴールド」と呼ばれています。<br>
実物の金(ゴールド)、例えば金塊や金の延べ棒をイメージしてみてください。<br>
金塊や金の延べ棒は、果たして日常の買い物に使えるでしょうか?<br>
企業間の取引に使うことがあるでしょうか?<br>
現代を生きる私たちは、金の塊で決済を行うことはありません。<br>
私たちが金を保有する理由は、自身の資産を「安定した状態」で保管することにあります。<br>
つまり「保管」や「保存」こそが金のメジャーな使い道であり、これはビットコインも同様。<br>
すなわち、<br>
<span class="hightlight">
  ビットコインの本質は、<br>
「価値を安定的に保存できるデジタル資産」<br>
という点にあります。<br>
</span>
ところが、世界にはビットコインを決済に用いている国や地域が日々増えています。<br>
ビットコインの本質が「価値の保存」にあるとすれば、<br>
これを決済手段として用いるのは筋が悪いように見えるかもしれません。<br>
しかし、ここで論点になるのがビットコインの本質の2つめ、<br>
決済における「確実性」の問題です。<br>
<br>
そもそも、日本人の多くがビットコインの本質を理解できないのは、<br>
日本の法定通貨である円が”ある程度の信用力”をいまだ保持しているからです。<br>
私たちは<br>
「円で決済ができない」<br>
「円で日常の買い物ができない」<br>
などということは、夢にも思わないでしょう。<br>
ゆえに、ほとんどの日本人が<br>
「ビットコインなど私たちには必要ない」<br>
という発想に行きつくのも、無理のないことなのかもしれません。<br>
一方、世界にはまったく事情が異なる国があります。<br>
たとえば、トルコの通貨「リラ」は、<br>
過去10年で「1リラ=約50円」から「1リラ=5円未満」に急落しています。<br>
これはトルコ人にとって、自国通貨の価値が10分の1以下に弱まったことを意味します。<br>
アルゼンチンの「ペソ」に至っては<br>
、10年前の「1ペソ=約12円」から「1ペソ=0.2円未満」になっており、<br>
通貨の価値はもはや100分の1。<br>
現在のアルゼンチンは想像を絶するインフレに見舞われています。<br>
このように、<br>
自国通貨の価値が不安定化し、<br>
決済に「確実に」使える保証がなくなってしまった国は何を求めるようになったか。<br>
<br>
ビットコインです。<br>
<span class="hightlight">
  ビットコインは、決済手段として「確実に」機能します。<br>
特定の国の政府(通貨発行体)に依存することなく、価値を保つことができます。<br>
ゆえに、世界中どこでも通貨として利用できる「確実性」が、ビットコインにはあります。<br>
</span>
このように「価値の保存」と「決済における確実性」を実現できるビットコインにとって、<br>
<ul class="list-decimal list-inside pl-6">
  <li>
    ビットコインは遅い
  </li>
  <li>ビットコインはボラティリティが大きい</li>
  <li>
    ビットコインには裏付け資産がない
  </li>
</ul>
このような批判は、本質を外した主張に過ぎないのです。<br>
さらに補足をすると、<br>
上記の批判はビットコインの弱みどころか、<br>
むしろ強みを強調する論点にさえなります。<br>
実際は、次の3つが真実です。<br>
<ul class="list-decimal list-inside pl-6">
  <li>
    ビットコインは速い
  </li>
  <li>ビットコインのボラティリティは小さい</li>
  <li>
    ビットコインの価値を裏付けられる資産がそもそも存在しない
  </li>
</ul>
これが、ビットコインの真実です。<br>
<br>
<div class="border border-black dark:border-white p-5">
  <strong>《1.ビットコインは速い》</strong><br />
  「ビットコインが遅い」という批判は、「あなたが持つ日本円を今すぐベトナムの銀行に送金で
きるのか」という問いで論破できます。<br />
日本国内の取引に限れば、既存の金融システムの方がたしかにスピーディかもしれませ
ん。<br />
しかし、国際送金となれば話はまったく違ってきます。<br />
日本円を現地通貨に両替し、2つの国をまたいで送金するには数日かかる場合もあります。<br />
一方、ビットコインは、世界中どこの国へ送ろうとも、誰が送ろうとも、おおむね数十分で着金
します。どちらが「速い」のかは明らかです。
</div>
<br />
<div class="border border-black dark:border-white p-5">
  <strong>《2.ビットコインのボラティリティは小さい》</strong><br />
  「ビットコインはボラティリティが大きい」という説も、誕生からわずか10数年しか経っていな
いビットコインの歴史を踏まえれば、浅はかな考えです。<br />
ビットコインは2024年1月にようやく米国でETFが承認されたばかり。<br />
つまり、まだまだ適正な評価がされていないのです。<br />
今後、ビットコインの価値がより認められるようになれば価格はさらに安定します。<br />
そもそも、他の暗号資産に比べればすでにボラティリティは圧倒的に小さいとさえ言えます。<br />
最後に「裏付け資産がない」との批判については、そもそもビットコインの価値を裏付けられ
る資産がないんです。
</div>
<br />
<div class="border border-black dark:border-white p-5">
  <strong>《3.ビットコインの価値を裏付けられる資産がそもそも存在しない》</strong><br />
  「ビットコインの価値の裏付け」という役割が、無限に発行可能な「円」や「ドル」に務まるで
しょうか?<br />
発行上限がない(=いくらでも価値が下がる可能性がある)通貨でビットコインの価値を裏付
けようものなら、逆にビットコインの価値が「下げられて」しまいます。<br />
採掘量が少なく、ゆえに希少性が高いとされるゴールドでさえも、実際は「人類が採掘できる
量」が限られているだけであり、「埋蔵量」自体は人類の想像を遥かに超える量が存在する
かもしれません。<br />
「存在する量が有限である」ということ自体が、他の資産では裏付けられないビットコイン固
有の価値なのです。
</div>
<br />
これでもなお、ビットコインに懐疑的な人に問いたいです。<br />
ユーロもドルも下がっているこの時代に、<br />
そもそも未来の価値を裏付けのある確かな通貨はあるのでしょうか?<br />
投資商品としての批判をする人もいますが、<br />
株式投資は安全で暗号資産は危険という考えもよくわかりません。<br />
2024年3月時点の時価総額は次のようになっています。<br />
世界の株式市場:約111兆ドル<br />
ゴールド(金):約14兆ドル<br />
暗号資産全体:約2.8兆ドル<br />
出典:<a href='https://toyokeizai.net/articles/-/742954?display=b' class="underline" target='_blank' rel='noopener noreferrer'>東洋経済|株価、金、ビットコインが驚くほど高騰する事情</a> <br>
また、金相場の歴史を辿ってみると50年ほど前は現在の暗号資産と同等の時価総額だったと
考えられます(<a href='https://kinkaimasu.jp/gold/column/50_years_of_gold_market_history/' class="underline" target='_blank' rel='noopener noreferrer'>リファスタ|金相場の50年史</a>より)。<br>
さらに100年前まで辿れば、<br>
そもそもの株式市場は金よりも時価総額は低いものでした。<br>
暗号資産同様物理的に存在しない株式はたった1世紀でものすごい価値に膨れ上がっていま
す。<br>
これらを考えてみても、<br>
<span class="hightlight">
  暗号資産に信用がないとはもはや言い切れないでしょう。
</span><br>
もう少し私の持論をお伝えすると、<br>
ビットコインはもはや暗号資産ですらないと思っています。<br>
価格が「上がった・下がった」と常に気にかけるような投資対象でもありません<br>
<span class="hightlight">
  ビットコインはすでに、<br>
実物のゴールドと同等です。<br>
</span>
つまり、<br>
分散暗号化によって有限性と検証性、匿名性が確保されています。<br>
ビットコインの価格が下がっている（もしくは上がっている）のではなく、<br>
“他の通貨”がビットコインに対して上下しているのです。<br>
そう考えると、実はビットコインの裏付け資産は「世界中の紙幣」だとも言えます。<br>
どこかの国が紙幣を刷れば刷るほど、<br>
相対的にビットコインに対する紙幣の価値は下落します。<br>
また、<span class="hightlight">通貨のシェアに着目した場合も、</span><br>
<span class="hightlight">ビットコインの優位性は揺るぎません。</span><br>
「世界中でビットコイン（暗号資産）が使われるようになるのはいつですか？」<br>
この問いに対する回答は、<br>
「もうすでに使われています」<br>
そして、逆に私はこう尋ねたい。<br>
「では、基軸通貨とされるドルが世界中で使われるのはいつですか？（実際は“世界中”で利用
するのは不可能）」<br>
つまり、ビットコインが利用できる国の数はすでにドルよりも多く、<br>
今後は「ビットコインはいつ世界中で使われるようになるのか？」ではなく、<br>
<span class="hightlight">
  「ビットコインが世界の通貨シェアを取るのはいつか？」<br>
という論点に移り変わっていくべきだと考えています。<br>
</span>
そして、ここからが重要なポイントです。<br>
世のビットコイン不要論者は、<br>
ビットコインの「表面的な不便さ」だけを理由にビットコインの存在価値（および、暗号資産の存
在価値）を不当に下げようとします。<br>
「ビットコインなんて役に立たないよ！そんなものより、もっと速くて便利なサービスを作ったか
ら、ぜひこれを使ってうちにお金を支払ってよ！」と言い、<br>
自社の商品やサービスを売り込もうとします。<br>
それは、自分たちだけに都合のよい詭弁です。ごまかしの理論に過ぎません。<br>
すでに述べた通り、米国ではビットコインETFが承認されています。<br>
エルサルバドルや中央アフリカ共和国は、<br>
自国の法定通貨としてビットコインを採用しています。<br>
通貨としてのビットコインの価値は、<br>
不要論者の主張に反して確実に高まっているのです。<br>
<span class="hightlight">
  私は、ビットコインを含め、<br>
それぞれの暗号資産の「本質的な価値」を正しく理解しています。<br>
</span>
ビットコイン、暗号資産、伝統的な金融、そして、これらを活用した事業作り。<br>
そのすべてを熟知しているからこそ、<br>
あなたのビジネスに最適な暗号資産を選択し、<br>
それをベースとしたサービスを生み出すことができます。<br>
ここまで記事を読んで暗号資産の本質的な価値が理解できた方は、<br>
暗号資産のビジネス活用について今すぐ我々に連絡をください。
`,
        annotations: [
          
        ],
      },
      en: {
        title:
          "Saying Bitcoin Has No Value Is Like Saying Humans Can't Walk Properly",
        category: "",
        content: `"Babies toddle unsteadily, so they probably won't be able to walk properly in the future"<br>
No one would say something like this.<br>
"Bitcoin is slow and unstable, so it probably won't be practically usable in the future"<br>
Countless people say this.<br>
<span class="hightlight">
There still seems to be a certain number of people who remain skeptical about Bitcoin,<br>
which is extremely foolish.<br>
</span>
It's true that Bitcoin transfers and payments take time.<br>
If you use Bitcoin to pay at a vending machine,<br>
and it takes 10 minutes for the drink to come out, probably no one would be patient enough to wait.<br>
At present, if "convenience" is your top priority, Bitcoin is undoubtedly inconvenient.<br>
However, if someone criticizes Bitcoin as "worthless (meaningless)" for this reason,<br>
they could also be called foolish.<br>
It's an extremely misguided argument that completely fails to capture the essence of Bitcoin.<br>
The arguments of Bitcoin skeptics are as follows:<br>
<ul class="list-disc list-inside pl-6">
  <li>
    Bitcoin is slow (not practical for business use)
  </li>
  <li>Bitcoin has high volatility (too unstable as a transaction currency)</li>
  <li>
    Bitcoin has no backing assets (how can anyone trust such a thing!?)
  </li>
</ul>
I understand what they want to say.<br>
However, none of these arguments capture the essence of Bitcoin.<br>
<span class="hightlight">
  So what is the essence of Bitcoin?<br>
  As an asset, it's "store of value"<br>
  As a payment method, it's "certainty"<br>
  The essence lies in achieving these two points at a high level.<br>
</span>
Since both concepts are difficult to understand, let me explain them in simpler terms.<br>
Bitcoin is called "digital gold" because of its scarcity and security.<br>
Imagine physical gold, such as gold bullion or gold bars.<br>
Can gold bullion or gold bars be used for everyday shopping?<br>
Are they used in transactions between companies?<br>
We living in modern times do not make payments with chunks of gold.<br>
The reason we hold gold is to store our assets in a "stable state."<br>
That is, "storage" or "preservation" is gold's major use, and the same is true for Bitcoin.<br>
In other words,<br>
<span class="hightlight">
  The essence of Bitcoin is<br>
  that it is a "digital asset that can stably store value."<br>
</span>
However, the number of countries and regions using Bitcoin for payments is increasing daily.<br>
If the essence of Bitcoin lies in the "storage of value,"<br>
using it as a payment method might seem counterintuitive.<br>
But this brings us to the second essential aspect of Bitcoin,<br>
the issue of "certainty" in payments.<br>
<br>
To begin with, many Japanese people cannot understand the essence of Bitcoin because<br>
the Japanese legal currency, the yen, still retains "a certain level of credibility."<br>
We would never dream of<br>
"not being able to settle with yen"<br>
"not being able to shop daily with yen."<br>
Therefore, it may be understandable that most Japanese people<br>
arrive at the idea that "we don't need Bitcoin."<br>
On the other hand, there are countries in the world with completely different circumstances.<br>
For example, Turkey's currency, the "lira,"<br>
has plummeted from "1 lira = about 50 yen" to "1 lira = less than 5 yen" over the past 10 years.<br>
This means that for Turkish people, the value of their national currency has weakened to less than one-tenth.<br>
As for Argentina's "peso,"<br>
it has gone from "1 peso = about 12 yen" 10 years ago to "1 peso = less than 0.2 yen,"<br>
making the currency's value now less than one-hundredth.<br>
Argentina is currently facing unimaginable inflation.<br>
In this way,<br>
what do countries seek when their national currency's value becomes unstable<br>
and there's no guarantee it can be "reliably" used for payment?<br>
<br>
Bitcoin.<br>
<span class="hightlight">
  Bitcoin functions "reliably" as a payment method.<br>
  It can maintain its value without depending on any specific country's government (currency issuer).<br>
  Therefore, Bitcoin has the "certainty" of being usable as a currency anywhere in the world.<br>
</span>
For Bitcoin, which can achieve both "storage of value" and "certainty in payment,"<br>
<ul class="list-decimal list-inside pl-6">
  <li>
    Bitcoin is slow
  </li>
  <li>Bitcoin has high volatility</li>
  <li>
    Bitcoin has no backing assets
  </li>
</ul>
Such criticisms are merely arguments that miss the essence.<br>
To elaborate further,<br>
the above criticisms are not even weaknesses of Bitcoin,<br>
but rather emphasize its strengths.<br>
In reality, the following three statements are true:<br>
<ul class="list-decimal list-inside pl-6">
  <li>
    Bitcoin is fast
  </li>
  <li>Bitcoin has low volatility</li>
  <li>
    There are no assets that can back Bitcoin's value in the first place
  </li>
</ul>
This is the truth about Bitcoin.<br>
<br>
<div class="border border-black dark:border-white p-5">
  <strong>《1. Bitcoin is fast》</strong><br />
  The criticism that "Bitcoin is slow" can be refuted by asking, "Can you immediately send your Japanese yen to a bank in Vietnam?"<br />
  Limited to domestic transactions in Japan, the existing financial system might indeed be faster.<br />
  However, when it comes to international remittances, the story is completely different.<br />
  Converting Japanese yen to local currency and sending it across two countries can take several days.<br />
  On the other hand, Bitcoin arrives in roughly tens of minutes, regardless of which country in the world it's sent to or who sends it. It's clear which is "faster."
</div>
<br />
<div class="border border-black dark:border-white p-5">
  <strong>《2. Bitcoin has low volatility》</strong><br />
  The theory that "Bitcoin has high volatility" is a shallow view considering Bitcoin's history of just over a decade since its inception.<br />
  Bitcoin's ETF was only just approved in the United States in January 2024.<br />
  This means it's still not being properly evaluated.<br />
  As Bitcoin's value becomes more recognized in the future, its price will stabilize further.<br />
  In fact, compared to other cryptocurrencies, it could already be said that its volatility is overwhelmingly lower.<br />
  Finally, regarding the criticism that "it has no backing assets," there simply are no assets that can back Bitcoin's value.
</div>
<br />
<div class="border border-black dark:border-white p-5">
  <strong>《3. There are no assets that can back Bitcoin's value in the first place》</strong><br />
  Can currencies like the "yen" or "dollar," which can be issued infinitely, fulfill the role of "backing Bitcoin's value"?<br />
  If Bitcoin's value were to be backed by a currency with no issuance limit (= a currency that could potentially decrease in value indefinitely), it would actually "devalue" Bitcoin.<br />
  Even gold, which is considered highly scarce due to its limited mining quantity, might actually have "deposits" far beyond human imagination, though "the amount humans can mine" is limited.<br />
  The fact that "the amount of existence is finite" is Bitcoin's unique value that cannot be backed by other assets.
</div>
<br />
Even after all this, I want to ask those who are still skeptical about Bitcoin:<br />
In this era where both the euro and dollar are declining,<br />
is there any reliable currency with backing that guarantees future value?<br />
Some criticize it as an investment product,<br />
but I don't understand the idea that stock investments are safe while cryptocurrencies are dangerous either.<br />
As of March 2024, the market capitalizations are as follows:<br />
Global stock market: about $111 trillion<br />
Gold: about $14 trillion<br />
All cryptocurrencies: about $2.8 trillion<br />
Source: <a href='https://toyokeizai.net/articles/-/742954?display=b' class="underline" target='_blank' rel='noopener noreferrer'>Toyo Keizai | The Surprising Reasons Behind the Surge in Stock Prices, Gold, and Bitcoin</a> <br>
Also, tracing the history of the gold market, it's believed that about 50 years ago, its market cap was equivalent to current cryptocurrencies (<a href='https://kinkaimasu.jp/gold/column/50_years_of_gold_market_history/' class="underline" target='_blank' rel='noopener noreferrer'>Refasta | 50-Year History of the Gold Market</a>).<br>
Going back 100 years,<br>
the stock market itself had a lower market cap than gold.<br>
Stocks, which like cryptocurrencies don't physically exist, have inflated to an enormous value in just one century.<br>
Considering all this,<br>
<span class="hightlight">
  it can no longer be asserted that cryptocurrencies lack credibility.<br>
</span>
To share a bit more of my personal theory,<br>
I believe Bitcoin is no longer just a cryptocurrency.<br>
It's not an investment target where you constantly worry about the price "going up or down"<br>
<span class="hightlight">
  Bitcoin is already<br>
  equivalent to physical gold.<br>
</span>
In other words,<br>
finite nature, verifiability, and anonymity are secured through decentralized encryption.<br>
It's not that Bitcoin's price is falling (or rising),<br>
but that "other currencies" are fluctuating against Bitcoin.<br>
From this perspective, one could argue that Bitcoin's backing assets are actually "paper currencies worldwide."<br>
The more a country prints its paper currency,<br>
the more the value of that paper currency falls relative to Bitcoin.<br>
Also, <span class="hightlight">when focusing on currency share,</span><br>
<span class="hightlight">Bitcoin's superiority is unshakable.</span><br>
"When will Bitcoin (cryptocurrency) be used worldwide?"<br>
The answer to this question is,<br>
"It's already being used."<br>
And conversely, I'd like to ask:<br>
"When will the dollar, considered the key currency, be used worldwide? (In reality, it's impossible to use it 'worldwide')"<br>
In other words, the number of countries where Bitcoin can be used already exceeds that of the dollar,<br>
and in the future, instead of asking "When will Bitcoin be used worldwide?"<br>
<span class="hightlight">
  I believe the discussion should shift to<br>
  "When will Bitcoin take global currency share?"<br>
</span>
And here's the important point.<br>
Bitcoin skeptics<br>
try to unjustly devalue Bitcoin's existence (and the existence of cryptocurrencies) solely based on its "superficial inconvenience."<br>
They say, "Bitcoin is useless! We've created something faster and more convenient, so please use this to pay us!"<br>
trying to sell their own products or services.<br>
This is sophistry that only benefits them. It's just a deceptive theory.<br>
As already mentioned, Bitcoin ETFs have been approved in the United States.<br>
El Salvador and the Central African Republic<br>
have adopted Bitcoin as their legal currency.<br>
The value of Bitcoin as a currency<br>
is definitely increasing, contrary to skeptics' claims.<br>
<span class="hightlight">
  I, including Bitcoin,<br>
  correctly understand the "essential value" of each cryptocurrency.<br>
</span>
Bitcoin, cryptocurrencies, traditional finance, and building businesses utilizing these.<br>
Because I am well-versed in all of these,<br>
I can select the optimal cryptocurrency for your business<br>
and create services based on it.<br>
If you've read this far and understand the essential value of cryptocurrencies,<br>
contact us immediately about business applications for cryptocurrencies.`,
        annotations: [
        ],
      },
      zh: {
        title: "说比特币没有价值，就像在说人类无法正常行走",
        category: "",
        content: `"婴儿摇摇晃晃地走路不稳，所以将来可能无法正常行走"<br>
没有人会这样说。<br>
"比特币传输速度慢且是不稳定的货币，所以将来可能在实务中无法使用"<br>
说这种话的人却多如牛毛。<br>
<span class="hightlight">
似乎至今仍有一定数量的人对比特币持怀疑态度，<br>
这是非常愚蠢的。<br>
</span>
比特币的转账和支付确实需要时间。<br>
如果用比特币在自动售货机上支付，<br>
结果要等10分钟才能拿到饮料，确实没有傻子会悠闲地等待。<br>
目前来看，如果"便利性"是首要考虑因素，比特币无疑是不便利的。<br>
但是，如果因此批评"比特币毫无价值（无意义）"，<br>
那也可以说是愚蠢的。<br>
这完全没有抓住比特币的本质，是极其不准确的主张。<br>
比特币怀疑论者的主张如下：<br>
<ul class="list-disc list-inside pl-6">
  <li>
    比特币很慢（不能用于实务）
  </li>
  <li>比特币波动性大（作为交易货币太不稳定）</li>
  <li>
    比特币没有背书资产（这种东西怎么能信任！？）
  </li>
</ul>
我理解他们想说什么。<br>
然而，这些主张都没有触及比特币的本质。<br>
<span class="hightlight">
  那么，比特币的本质是什么呢？<br>
  作为资产是"价值存储"<br>
  作为支付手段是"确定性"<br>
  比特币的本质在于高水平地实现了这两点。<br>
</span>
由于这两个概念都很难理解，让我详细解释一下。<br>
比特币因其稀缺性和安全性被称为"数字黄金"。<br>
想象一下实物黄金，例如金块或金条。<br>
金块或金条能用于日常购物吗？<br>
企业间交易会使用它们吗？<br>
现代生活中的我们不会用金块进行支付。<br>
我们持有黄金的原因是为了将资产以"稳定状态"保存。<br>
也就是说，"保管"或"保存"是黄金的主要用途，比特币也是如此。<br>
换句话说，<br>
<span class="hightlight">
  比特币的本质在于，<br>
  它是一种"能够稳定保存价值的数字资产"。<br>
</span>
然而，世界上使用比特币进行支付的国家和地区正在日益增加。<br>
如果比特币的本质在于"价值存储"，<br>
将其用作支付手段可能看起来不合理。<br>
但是，这里涉及到比特币本质的第二个方面，<br>
即支付中的"确定性"问题。<br>
<br>
首先，许多日本人无法理解比特币的本质，因为<br>
日本的法定货币日元仍然保持着"一定程度的信誉"。<br>
我们从未梦想过<br>
"无法用日元结算"<br>
"无法用日元进行日常购物"。<br>
因此，大多数日本人<br>
得出"我们不需要比特币"的想法是可以理解的。<br>
另一方面，世界上有些国家的情况完全不同。<br>
例如，土耳其的货币"里拉"<br>
在过去10年里从"1里拉=约50日元"暴跌至"1里拉=不到5日元"。<br>
这意味着对土耳其人来说，他们国家货币的价值已经减弱到不到十分之一。<br>
至于阿根廷的"比索"，<br>
已经从10年前的"1比索=约12日元"变成了"1比索=不到0.2日元"，<br>
货币价值甚至不到百分之一。<br>
当前的阿根廷正经历着难以想象的通货膨胀。<br>
这样，<br>
当一个国家的本国货币价值不稳定，<br>
无法保证"确实"用于支付时，他们会寻求什么？<br>
<br>
比特币。<br>
<span class="hightlight">
  比特币作为支付方式"确实"有效。<br>
  它可以在不依赖任何特定国家政府（货币发行方）的情况下保持价值。<br>
  因此，比特币具有在世界任何地方都可以作为货币使用的"确定性"。<br>
</span>
对于能够实现"价值存储"和"支付确定性"的比特币来说，<br>
<ul class="list-decimal list-inside pl-6">
  <li>
    比特币很慢
  </li>
  <li>比特币波动性大</li>
  <li>
    比特币没有背书资产
  </li>
</ul>
这样的批评只是忽略本质的论点。<br>
更进一步说，<br>
上述批评不仅不是比特币的弱点，<br>
反而强调了它的优势。<br>
实际上，以下三点才是真相：<br>
<ul class="list-decimal list-inside pl-6">
  <li>
    比特币很快
  </li>
  <li>比特币波动性小</li>
  <li>
    本来就不存在能够背书比特币价值的资产
  </li>
</ul>
这就是关于比特币的真相。<br>
<br>
<div class="border border-black dark:border-white p-5">
  <strong>《1.比特币很快》</strong><br />
  "比特币很慢"的批评可以用"你能立即将手中的日元转到越南的银行吗？"这个问题来反驳。<br />
  限于日本国内交易，现有金融系统确实可能更快。<br />
  但是，涉及国际汇款时，情况完全不同。<br />
  将日元兑换成当地货币，跨两个国家汇款可能需要数天时间。<br />
  而比特币，无论发送到世界上哪个国家，无论由谁发送，大约几十分钟就能到账。哪个更"快"是显而易见的。
</div>
<br />
<div class="border border-black dark:border-white p-5">
  <strong>《2.比特币波动性小》</strong><br />
  "比特币波动性大"的说法，考虑到比特币从诞生至今仅有十几年的历史，是浅薄的想法。<br />
  比特币2024年1月才刚在美国获得ETF批准。<br />
  这意味着它还没有得到适当的评估。<br />
  今后，随着比特币价值被更多认可，价格将进一步稳定。<br />
  事实上，与其他加密资产相比，已经可以说其波动性明显更小。<br />
  最后，关于"没有背书资产"的批评，本来就不存在能够背书比特币价值的资产。
</div>
<br />
<div class="border border-black dark:border-white p-5">
  <strong>《3.本来就不存在能够背书比特币价值的资产》</strong><br />
  可以无限发行的"日元"或"美元"能够担当"比特币价值背书"的角色吗？<br />
  如果用没有发行上限（=可能无限贬值）的货币来背书比特币的价值，反而会"拉低"比特币的价值。<br />
  即使是开采量少因此被认为稀缺性高的黄金，实际上也只是"人类可开采量"有限，而"储量"本身可能远超人类想象。<br />
  "存在量有限"这一事实本身就是比特币特有的、其他资产无法背书的价值。
</div>
<br />
即使如此，我还是想问那些仍对比特币持怀疑态度的人：<br />
在欧元和美元都在贬值的时代，<br />
有任何具备背书的确定货币能保证未来价值吗？<br />
有人批评它是投资产品，<br />
但我也不理解股票投资安全而加密资产危险的观点。<br />
截至2024年3月，市值如下：<br />
全球股票市场：约111万亿美元<br />
黄金：约14万亿美元<br />
加密资产总体：约2.8万亿美元<br />
来源：<a href='https://toyokeizai.net/articles/-/742954?display=b' class="underline" target='_blank' rel='noopener noreferrer'>东洋经济|股价、黄金、比特币惊人上涨的情况</a> <br>
此外，追溯黄金市场历史，可以认为约50年前其市值与当前加密资产相当（根据<a href='https://kinkaimasu.jp/gold/column/50_years_of_gold_market_history/' class="underline" target='_blank' rel='noopener noreferrer'>Refasta|黄金市场50年史</a>）。<br>
追溯到100年前，<br>
股票市场本身的市值比黄金还低。<br>
与加密资产一样不存在物理形态的股票在短短一个世纪内膨胀到了惊人的价值。<br>
考虑到这些，<br>
<span class="hightlight">
  已经不能断言加密资产没有信用了。<br>
</span>
再分享一点我的个人理论，<br>
我认为比特币已经不仅仅是加密资产。<br>
它不是那种需要你不断关注价格"上涨·下跌"的投资对象<br>
<span class="hightlight">
  比特币已经相当于<br>
  实物黄金。<br>
</span>
也就是说，<br>
通过分散加密确保了有限性、可验证性和匿名性。<br>
不是比特币的价格在下降（或上升），<br>
而是"其他货币"相对于比特币在上下波动。<br>
从这个角度看，实际上可以说比特币的背书资产是"全球纸币"。<br>
某国印制的纸币越多，<br>
相对于比特币，该纸币的价值就越下降。<br>
此外，<span class="hightlight">关注货币份额时，</span><br>
<span class="hightlight">比特币的优势不可动摇。</span><br>
"什么时候比特币（加密资产）会在全球范围内使用？"<br>
对这个问题的回答是，<br>
"它已经在被使用了。"<br>
而反过来，我想问：<br>
"那么，作为基础货币的美元什么时候会在全球范围内使用？（实际上在'全球范围内'使用是不可能的）"<br>
也就是说，可以使用比特币的国家数量已经超过了美元，<br>
今后不是"比特币什么时候会在全球范围内使用？"，<br>
<span class="hightlight">
  而是应该转变为<br>
  "比特币什么时候会占据全球货币份额？"<br>
  这样的论点。<br>
</span>
这里是重要的一点。<br>
世上的比特币怀疑论者<br>
仅仅因为比特币的"表面不便"就试图不公正地降低比特币（以及加密资产）的存在价值。<br>
他们说："比特币毫无用处！我们创造了更快更方便的服务，请用这个向我们付款！"<br>
试图推销自己的产品或服务。<br>
这只是对他们有利的诡辩，只是欺骗性的理论。<br>
如前所述，美国已批准比特币ETF。<br>
萨尔瓦多和中非共和国<br>
已将比特币作为其法定货币。<br>
作为货币的比特币价值<br>
与怀疑论者的主张相反，正在确实提高。<br>
<span class="hightlight">
  我包括比特币在内，<br>
  正确理解每种加密资产的"本质价值"。<br>
</span>
比特币、加密资产、传统金融，以及利用这些创建业务。<br>
正因为精通这一切，<br>
才能为您的业务选择最佳加密资产，<br>
并基于此创造服务。<br>
阅读到这里并理解了加密资产本质价值的人，<br>
请立即联系我们了解加密资产的商业应用。`,
        annotations: [
        ],
      },
    },
  },
];

export const dataWebSite: ArticleType[] = [
  {
    id: "01",
    date: "2024.4.18",
    link: "/website/01",
    translations: {
      ja: {
        title:
          "時代遅れの「ホームページ」論を唱えるデジタル鎖国で犬死を待つ人たちへ",
        category: "",
        content: `<span class="hightlight">
  Q.100万円を一回払えば24時間文句を言わずに一生働き続ける優秀な営業マンを雇えるとし
ます。あなたは雇いますか?
</span> <br>
Noと答えた方は馬鹿です。<br>
では、質問を変えます。<br>
<br>
<span class="hightlight">
  Q.あなたはホームページを持っていますか?<br>
Noと答えたあなたは大馬鹿です。
</span>
<ul class="list-disc list-inside pl-6">
  <li>
    SNSがあるから十分
  </li>
  <li>自前のホームページなんて時代遅れ</li>
  <li>
    今は仕事があるから必要性は感じない
  </li>
</ul>
こんな言い分を腐るほど聞いてきました。<br>
企業の経営者でも、飲食店の店長でも、<br>
ホームページ不要論者は増えているようです。<br>
あなたが利益を1円もあげたくない無欲の聖人であれば、<br>
私のブログを読む必要はありません。<br>
(ですがあなたが利益を1円もあげたくない無欲の聖人であってもしょうが、それでもホーム
ページを使うべきです。)<br>
<br>
<span class="hightlight">
  ただ、もし利益を生み出そうとしているのに、<br>
ホームページが不要だと思っているのであれば、<br>
今すぐ姿勢を正してこの記事を読むべきです。<br>
</span>
たしかにホームページがなくても、<br>
口コミサイトに会社やお店の情報を載せておけば、<br>
お客さんはネット上からあなたの情報へアクセスできるかもしれません。<br>
飲食店なら食べログ。<br>
美容室ならホットペッパービューティー。<br>
宿泊予約ならじゃらん。<br>
XやInstagramでうまく集客をしている例も星の数ほどあります。<br>
「SNS時代に自前のホームページなんて時代遅れ」<br>
日本では当たり前のように語られるこの言葉。<br>
しかし、この感覚こそが実は時代遅れです。<br>
<br>
<span class="hightlight">
  <strong>DM</strong>がいくらでも遅れるこの時代に、チラシがなくならない理由はなぜでしょうか?<br>
チラシを配っているからといって、人々がポスターを貼り続けるのはなぜでしょうか?<br>
</span>
費用対効果が見込めるならば、賢い経営者はすべてを行います。<br>
それと同様に、<br>
口コミサイトやSNSに広告を出していることは、ホームページを公開しなくてもいい理由にはな
りません。<br>
インターネット上での宣伝も窓口は多い方がいいに決まっています。<br>
まして、広告費用が発生しないのであればコスパは最高です。<br>
<span class="hightlight">
  ホームページは24時間働き続けてくれる営業マンなのですから。<br>
</span>
そして、すでにそれに気づいている一部の人たち(特にホテル業界に多いですね)は、<br>
自社のサイトで「ベストレート」を謳い、顧客に直接アプローチをするようになっています。<br>
「顧客に直接アプローチする」といった自由度の高い運用は、<br>
<br>
SNSで実現することは困難です。<br>
SNSは掲載フォーマットが媒体に依存していて、自由度がありません。<br>
見込み客や既存のお客様に伝えたいこと、<br>
知ってほしいことを伝えるには、<br>
ホームページが最適です。<br>
<br>
例えば：<a href='https://hoshinoresorts.com/jp/' class="underline" target='_blank' rel='noopener noreferrer'>星野リゾート。</a><br>
星野リゾートは公式サイトに力を入れており、<br>
提供可能な体験の発見や、宿泊に留まらない旅の提案をサイト訪問者に伝えることに注力し
ています。<br>
これはSNSの運用だけではできないことです。<br>
さらに、公式サイトの情報を部分的に切り取り、<br>
SNSで拡散すれば相乗効果を得ることもできます。<br>
ところが、<br>
そのホームページの制作手法についても、日本は遅れをとっています。<br>
さて、ここまで安心して読んでいた方に質問です。<br>
<span class="hightlight">
  <strong>Q.Jamstack</strong>を使ったホームページを持っていますか？<br>
  <strong>No</strong>と答えたあなたは、<br>
鉄砲伝来した戦国の世で弓矢に固執して犬死にを待つようなものだと認識してください。<br>
</span>
日本企業の多くは、いまだにHTMLやPHPでサイトを作っています。<br>
一方、<br>
<span class="hightlight">
  AppleやGoogle、その他海外の名だたる企業はみな、<br>
Jamstack（ジャムスタック）という手法で作られたWebサイトを持っています。もちろん、LPで
すらも。<br>
</span>
予算は大して変わらないのに、<br>
なぜこんなにも違うのでしょう？<br>
日本のプログラマーを見ていると、<br>
これまでに積み上げた「自分が自信を持っているプログラム」に慣れきってしまっているのかな
と思います。<br>
また、経営者も「たかがプログラム」と捉え、<br>
そこに使われる技術に価値を見出していないからなのかなと。<br>
とはいえ、真実は私にもわかりません。<br>
彼らの論理性が欠如しているのか？<br>
それとも「鎖国」しているのか？<br>
知っている人がいればぜひ教えてください。<br>
話を戻して、まずは、<br>
Jamstackを用いて作られているWebサイトと、<br>
従来のサイトを見比べてみましょう。<br>
なお、Jamstackを導入している日本企業も一部では見られます。<br><br>
【Jamstackで作られたサイト】<br>
<a href='https://www.apple.com/jp/iphone-15/' class="underline" target='_blank' rel='noopener noreferrer'>Apple（iPhone15のランディングページ）
</a><br>
<a href='https://www.audible.com/about' class="underline" target='_blank' rel='noopener noreferrer'>Audible(Amazonが運営する音声サブスクリプション)
</a><br>
<a href='https://www.starbucksreserve.com/' class="underline" target='_blank' rel='noopener noreferrer'>Starbacks Reserve(スターバックスが運営する高級コーヒーを提供するブランド)
  丸亀製麺
</a><br>
<a href='https://www.bandainamco-ol.co.jp/ja/' class="underline" target='_blank' rel='noopener noreferrer'>バンダイナムコオンライン
</a><br>
<a href='https://crowdworks.co.jp/' class="underline" target='_blank' rel='noopener noreferrer'>クラウドワークス
</a><br>
【従来の作り方のサイト】<br>
<a href='https://www.nissay.co.jp/' class="underline" target='_blank' rel='noopener noreferrer'>日本生命保険
</a><br>
<a href='https://panasonic.jp/' class="underline" target='_blank' rel='noopener noreferrer'>パナソニック
</a><br>
<a href='https://panasonic.jp/' class="underline" target='_blank' rel='noopener noreferrer'>三菱商事
</a><br>
これらを比べると、<br>
デザインや画面遷移の構造、クリックボタンを押させる導線に至るまで、<br>
何もかも違うことがわかるはずです。<br>
<span class="hightlight">
  <strong>Jamstack</strong>は、今や<strong>Web</strong>制作のグローバルスタンダード。<br>
一方、日本では<strong>Jamstack</strong>で<strong>Web</strong>サイトを作成している企業はほとんどありません。<br>
</span>
SNSや口コミサイトでも一定の成果を挙げられる点は、<br>
日本も海外もさほど変わりはない。<br>
それにもかかわらず、<br>
なぜ、<br>
海外の企業だけがJamstackで作られたWebサイト"も"持っているのでしょうか？<br>
<br>
<span class="hightlight">
  <strong>Jamstack</strong>で作られた<strong>Web</strong>サイトが、<br>
「集客」において絶大な力を発揮することを、海外の企業は知っているからです。<br>
次世代の<strong>Web</strong>開発手法とされる<strong>Jamstack</strong>で作られたサイトは、以下のような特徴を持ってい
ます。</span>
<ul class="list-disc list-inside pl-6">
  <li>
    <span class="hightlight">異次元に速いページ読み込み速度</span>
  </li>
  <li><span class="hightlight">サーバー障害への圧倒的耐性</span></li>
  <li>
    <span class="hightlight">高度なセキュリティ</span>
  </li>
</ul>
<span class="hightlight">
<strong>Jamstack</strong>は従来の<strong>Web</strong>制作方法と異なり、<br>
サイト運営においてサーバーへの依存度が小さくなっています。<br>
</span>
Jamstackで作られたサイトは、<br>
ページを遷移する度にサーバーから情報を呼び出す必要がありません。<br>
そのため、ページの読み込み速度が段違いに向上します。<br>
サーバーから情報を呼び出さないということは、<br>
仮にサーバーがダウンしてもWebサイト自体は落ちないことを意味します。<br>
障害への圧倒的な耐性の高さを有しているということです。<br>
また、Jamstackで作られたサイトはサーバーに「常時接続」をしていないため、<br>
攻撃者がサーバーを攻撃すること自体がそもそも困難です。<br>
ゆえに、従来のWeb制作手法よりも遥かにセキュリティが高いサイトを作れます。<br>
そしてGoogleは、<br>
これらの特徴を持っているサイトをSEOの観点から優遇しています。<br>
つまり、<br>
<ul class="list-disc list-inside pl-6">
  <li>
    <span class="hightlight">速いサイト</span>
  </li>
  <li><span class="hightlight">障害に強いサイト</span></li>
  <li>
    <span class="hightlight">セキュリティが堅牢なサイト</span>
  </li>
</ul>
こういったサイトは「上位表示されやすい」という事実があります。<br>
「ホームページがなくても、SNSで集客はできるから」<br>
この発想は、従来の手法で作られたホームページ、<br>
つまりSEO的に弱いサイトの作り方しか知らない日本人の間では、<br>
常識とされるのかもしれません。<br>
<span class="hightlight">
  一方、<strong>Jamstack</strong>で作られたサイトは、</span>
  <ul class="list-disc list-inside pl-6">
    <li>
      <span class="hightlight">速い</span>
    </li>
    <li><span class="hightlight">ゆえに、上位表示されやすい</span></li>
    <li>
      <span class="hightlight">ゆえに、アクセスが増えて利益につながる</span>
    </li>
  </ul>

という、誰の目にも明らかなメリットがあります。<br>
圧倒的にSEOに強いJamstackという仕組みを知っている海外企業から見れば、<br>
自前のWebサイトを持たないことは非常に愚かな行為なのです。<br>
私たちは、<br>
インターネットの新しい技術を駆使し、<br>
集客に成功している欧米の大企業から<br>
「愚か」と思われるような仕事はしません。<br>
たかが1枚のホームページでも、<br>
私たちはグローバル基準で<br>
良いもの・新しいもの・効果があるもの<br>
を作ります。<br>
あなたは、<br>
新しいものを避け、<br>
このまま凋落する道を進むのか。<br>
それとも、<br>
真に効果があるものを導入して、<br>
競合他社から一歩抜きん出るのか。<br>
どちらを選びますか？<br>
日本国内でも、Jamstackの導入が成果につながった事例はすでにあります。<br>
<a href='https://tsunaweb.book.mynavi.jp/tsunaweb/tsuna/detail/id=4374' class="underline" target='_blank' rel='noopener noreferrer'>Jamstackの導入事例(川崎重工業×トルク)</a><br>
「ホームページなんて古臭いから」<br>
「無料のSNSもあることだし」<br>
「同じお金を払うなら、みんなが知っている口コミサイトでいいかな」<br>
こういった、あなたの同業他社と似たような<br>
貧相な発想をまず捨てましょう。<br>
ここまで語ってきた数々のメリットに目をつむり、<br>
誰でもできる無料の量産型SNSをやろう<br>
という発想は愚の骨頂。<br>
<span class="hightlight">
  あなたはいつまで、<br>
デジタル鎖国でいつ敗北するかもわからない<br>
弓矢を使う武将であり続けますか?<br>
Jamstackのメリットを理解できたならば、<br>
1秒でも早く導入すべきです。<br>
</span>
ちなみに、<br>
あなたが読んでいるこのブログも<br>
Jamstackを活用してモダン開発されています。<br>
様々なブログの表示スピードと比較してみてください。<br>
きっとその凄さがわかるはず。<br>
あなたが導入をためらった分だけ、<br>
<br>
あなたの会社のWebサイトを見てくれたはずのお客様を取り逃がすことになります。<br>
ここまでお伝えした情報を他の企業が知る前に、<br>
今すぐ我々に問い合わせてください。`,
        annotations: [
        ],
      },
      en: {
        title:
          "To Those Waiting for Their Downfall in Digital Isolationism While Preaching Outdated \"Website\" Theories",
        category: "",
        content: `<span class="hightlight">
  Q. Suppose you could hire an excellent salesperson who would work 24 hours a day without complaint for life by paying just 1 million yen once. Would you hire them?
</span> <br>
If you answered No, you're a fool.<br>
Now, let me change the question.<br>
<br>
<span class="hightlight">
  Q. Do you have a website?<br>
  If you answered No, you're a complete fool.
</span>
<ul class="list-disc list-inside pl-6">
  <li>
    Social media is enough
  </li>
  <li>Having your own website is outdated</li>
  <li>
    I don't feel the need right now because I have enough business
  </li>
</ul>
I've heard these excuses countless times.<br>
Whether company executives or restaurant managers,<br>
people who argue websites are unnecessary seem to be increasing.<br>
If you're a selfless saint who doesn't want to make even a single yen in profit,<br>
you don't need to read my blog.<br>
(Though even if you are a selfless saint who doesn't want to make a single yen in profit, you should still use a website.)<br>
<br>
<span class="hightlight">
  However, if you're trying to generate profit<br>
  but think websites are unnecessary,<br>
  you should sit up straight and read this article immediately.<br>
</span>
Certainly, even without a website,<br>
if you list your company or store information on review sites,<br>
customers might be able to access your information online.<br>
For restaurants, there's Tabelog.<br>
For beauty salons, there's Hot Pepper Beauty.<br>
For lodging reservations, there's Jalan.<br>
There are countless examples of successful customer acquisition through X or Instagram.<br>
"Having your own website is outdated in the social media era"<br>
This phrase is commonly stated in Japan.<br>
However, this mindset itself is actually outdated.<br>
<br>
<span class="hightlight">
  Why don't flyers disappear in this age when <strong>DMs</strong> can be sent indefinitely?<br>
  Why do people continue to put up posters even when they're distributing flyers?<br>
</span>
If cost-effectiveness is expected, smart managers will do everything.<br>
Similarly,<br>
advertising on review sites or social media is not a reason to avoid publishing a website.<br>
It's obvious that having more entry points for online promotion is better.<br>
Especially if there are no advertising costs, the cost-performance is excellent.<br>
<span class="hightlight">
  After all, a website is like a salesperson who works 24 hours a day.<br>
</span>
And some people who have already realized this (especially common in the hotel industry)<br>
are promoting "best rates" on their own sites and approaching customers directly.<br>
Such high-flexibility operations like "approaching customers directly"<br>
<br>
are difficult to achieve with social media.<br>
Social media's posting format depends on the platform and lacks flexibility.<br>
To communicate what you want to tell prospective or existing customers,<br>
what you want them to know,<br>
a website is optimal.<br>
<br>
For example: <a href='https://hoshinoresorts.com/jp/' class="underline" target='_blank' rel='noopener noreferrer'>Hoshino Resorts.</a><br>
Hoshino Resorts focuses on their official website,<br>
emphasizing the discovery of available experiences and proposing journeys beyond just accommodation to site visitors.<br>
This cannot be achieved through social media operation alone.<br>
Furthermore, by partially extracting information from the official site<br>
and spreading it on social media, synergistic effects can be obtained.<br>
However,<br>
Japan is falling behind in website creation methods as well.<br>
Now, a question for those who have been reading comfortably so far.<br>
<span class="hightlight">
  <strong>Q. Do you have a website built with Jamstack?</strong><br>
  If you answered <strong>No</strong>,<br>
  recognize that you're like someone stubbornly clinging to bows and arrows in the warring states era after the introduction of guns, just waiting for a meaningless death.<br>
</span>
Many Japanese companies still create sites with HTML or PHP.<br>
Meanwhile,<br>
<span class="hightlight">
  Apple, Google, and other notable overseas companies all<br>
  have websites built with the Jamstack method. Even their landing pages.<br>
</span>
The budget isn't that different,<br>
so why such a difference?<br>
Looking at Japanese programmers,<br>
I think they've become too accustomed to the "programming they feel confident in" that they've built up over time.<br>
Also, executives might view it as "just programming,"<br>
not recognizing the value in the technology used.<br>
Nevertheless, I don't know the truth.<br>
Is it a lack of logical thinking?<br>
Or are they practicing "isolationism"?<br>
If anyone knows, please tell me.<br>
Getting back to the point,<br>
let's first compare websites built with Jamstack<br>
and traditional sites.<br>
Note that some Japanese companies have also adopted Jamstack.<br><br>
【Sites built with Jamstack】<br>
<a href='https://www.apple.com/jp/iphone-15/' class="underline" target='_blank' rel='noopener noreferrer'>Apple (iPhone 15 landing page)
</a><br>
<a href='https://www.audible.com/about' class="underline" target='_blank' rel='noopener noreferrer'>Audible (audio subscription operated by Amazon)
</a><br>
<a href='https://www.starbucksreserve.com/' class="underline" target='_blank' rel='noopener noreferrer'>Starbucks Reserve (a brand offering premium coffee operated by Starbucks)
  Marugame Seimen
</a><br>
<a href='https://www.bandainamco-ol.co.jp/ja/' class="underline" target='_blank' rel='noopener noreferrer'>Bandai Namco Online
</a><br>
<a href='https://crowdworks.co.jp/' class="underline" target='_blank' rel='noopener noreferrer'>CrowdWorks
</a><br>
【Sites built with traditional methods】<br>
<a href='https://www.nissay.co.jp/' class="underline" target='_blank' rel='noopener noreferrer'>Nippon Life Insurance
</a><br>
<a href='https://panasonic.jp/' class="underline" target='_blank' rel='noopener noreferrer'>Panasonic
</a><br>
<a href='https://panasonic.jp/' class="underline" target='_blank' rel='noopener noreferrer'>Mitsubishi Corporation
</a><br>
When comparing these,<br>
from design to screen transition structure to click button guidance,<br>
everything is different.<br>
<span class="hightlight">
  <strong>Jamstack</strong> is now the global standard for <strong>Web</strong> development.<br>
  Meanwhile, there are hardly any companies in Japan creating <strong>Web</strong> sites with <strong>Jamstack</strong>.<br>
</span>
The ability to achieve certain results with social media and review sites<br>
doesn't differ much between Japan and overseas.<br>
Despite this,<br>
why<br>
do only overseas companies "also" have websites made with Jamstack?<br>
<br>
<span class="hightlight">
  Because overseas companies know that websites built with <strong>Jamstack</strong><br>
  exert tremendous power in "customer acquisition."<br>
  Sites built with <strong>Jamstack</strong>, considered the next-generation <strong>Web</strong> development method, have the following characteristics:</span>
<ul class="list-disc list-inside pl-6">
  <li>
    <span class="hightlight">Otherworldly fast page loading speed</span>
  </li>
  <li><span class="hightlight">Overwhelming resistance to server failures</span></li>
  <li>
    <span class="hightlight">Advanced security</span>
  </li>
</ul>
<span class="hightlight">
Unlike traditional <strong>Web</strong> development methods, <strong>Jamstack</strong><br>
has less dependence on servers in site operation.<br>
</span>
Sites built with Jamstack<br>
don't need to retrieve information from the server each time you navigate to a new page.<br>
As a result, page loading speed is significantly improved.<br>
Not retrieving information from the server means<br>
that even if the server goes down, the website itself won't collapse.<br>
It has overwhelming resistance to failures.<br>
Also, sites built with Jamstack aren't "constantly connected" to the server,<br>
making it inherently difficult for attackers to attack the server.<br>
Therefore, you can create sites with much higher security than traditional web development methods.<br>
And Google<br>
favors sites with these characteristics from an SEO perspective.<br>
In other words,<br>
<ul class="list-disc list-inside pl-6">
  <li>
    <span class="hightlight">Fast sites</span>
  </li>
  <li><span class="hightlight">Sites resistant to failures</span></li>
  <li>
    <span class="hightlight">Sites with robust security</span>
  </li>
</ul>
There's a fact that such sites "tend to be displayed higher in search results."<br>
"I don't need a website because I can acquire customers through social media"<br>
This idea might be considered common sense among Japanese who only know<br>
how to create websites with traditional methods,<br>
which are weak in terms of SEO.<br>
<span class="hightlight">
  On the other hand, sites built with <strong>Jamstack</strong></span>
  <ul class="list-disc list-inside pl-6">
    <li>
      <span class="hightlight">Are fast</span>
    </li>
    <li><span class="hightlight">Therefore, tend to be displayed higher in search results</span></li>
    <li>
      <span class="hightlight">Therefore, increase access and lead to profit</span>
    </li>
  </ul>
These are obvious benefits to anyone.<br>
From the perspective of overseas companies that know about Jamstack, which is overwhelmingly strong in SEO,<br>
not having your own website is an extremely foolish act.<br>
We<br>
don't do work that would be considered "foolish"<br>
by Western large corporations that are successful in customer acquisition<br>
using the latest internet technologies.<br>
Even for just a single webpage,<br>
we create according to global standards<br>
something good, new, and effective.<br>
Will you<br>
avoid new things<br>
and continue down the path of decline?<br>
Or<br>
will you implement truly effective solutions<br>
and stand out from your competitors?<br>
Which will you choose?<br>
Even within Japan, there are already cases where the introduction of Jamstack has led to success.<br>
<a href='https://tsunaweb.book.mynavi.jp/tsunaweb/tsuna/detail/id=4374' class="underline" target='_blank' rel='noopener noreferrer'>Jamstack implementation case (Kawasaki Heavy Industries × Torque)</a><br>
"Websites are old-fashioned"<br>
"There's free social media too"<br>
"If I'm paying the same amount, I might as well go with a well-known review site"<br>
First, let's abandon such poor thinking<br>
that's similar to your industry peers.<br>
Turning a blind eye to the numerous benefits discussed so far<br>
and opting for free, mass-produced social media that anyone can do<br>
is the height of foolishness.<br>
<span class="hightlight">
How long will you<br>
remain a warlord using bows and arrows,<br>
not knowing when you'll be defeated in digital isolationism?<br>
If you understand the benefits of Jamstack,<br>
you should implement it as quickly as possible.<br>
</span>
By the way,<br>
this blog you're reading<br>
is also developed using modern techniques with Jamstack.<br>
Try comparing the display speed with various other blogs.<br>
You'll surely understand its impressiveness.<br>
The longer you hesitate to implement it,<br>
<br>
the more potential customers who would have viewed your company's website you'll lose.<br>
Before other companies learn about the information I've shared so far,<br>
contact us immediately.`,
        annotations: [
        ],
      },
      zh: {
        title: "致那些在数字锁国中宣扬过时\"网站\"理论，等待无谓牺牲的人们",
        category: "",
        content: `<span class="hightlight">
  问：假设你只需一次性支付100万日元，就能雇佣一位24小时不抱怨且终身工作的优秀销售人员。你会雇佣吗？
</span> <br>
如果你回答"不"，那你就是个傻瓜。<br>
现在，我换个问题。<br>
<br>
<span class="hightlight">
  问：你有网站吗？<br>
  如果你回答"不"，那你就是个大傻瓜。
</span>
<ul class="list-disc list-inside pl-6">
  <li>
    有社交媒体就足够了
  </li>
  <li>自己的网站已经过时了</li>
  <li>
    现在有工作，所以感觉不需要
  </li>
</ul>
我已经听过无数这样的借口。<br>
无论是企业经营者还是餐厅经理，<br>
认为网站不必要的人似乎越来越多。<br>
如果你是一个不想赚取一分钱利润的无欲圣人，<br>
你不需要阅读我的博客。<br>
（但即使你是一个不想赚取一分钱利润的无欲圣人，你也应该使用网站。）<br>
<br>
<span class="hightlight">
  然而，如果你正试图创造利润，<br>
  却认为网站不必要，<br>
  你应该立即端正姿态阅读这篇文章。<br>
</span>
确实，即使没有网站，<br>
如果你在点评网站上列出公司或店铺信息，<br>
客户可能也能在网上访问你的信息。<br>
餐厅有食べログ。<br>
美容院有Hot Pepper Beauty。<br>
住宿预订有じゃらん。<br>
通过X或Instagram成功获客的例子也数不胜数。<br>
"在社交媒体时代，拥有自己的网站已经过时了"<br>
这在日本是常见的说法。<br>
然而，恰恰是这种观念已经过时了。<br>
<br>
<span class="hightlight">
  在这个<strong>DM</strong>可以无限发送的时代，为什么传单没有消失？<br>
  为什么人们在分发传单的同时仍然继续张贴海报？<br>
</span>
如果能预期成本效益，聪明的经营者会做一切事情。<br>
同样，<br>
在点评网站或社交媒体上做广告并不是避免发布网站的理由。<br>
很明显，拥有更多的在线推广入口是更好的。<br>
特别是如果没有广告费用，成本效益就更高了。<br>
<span class="hightlight">
  毕竟，网站就像一个24小时不停工作的销售人员。<br>
</span>
而那些已经意识到这一点的人（特别是在酒店业很常见）<br>
正在自己的网站上宣传"最优惠价格"并直接接触客户。<br>
像"直接接触客户"这样的高灵活性运营<br>
<br>
通过社交媒体很难实现。<br>
社交媒体的发布格式依赖于平台，缺乏灵活性。<br>
要向潜在客户或现有客户传达你想告诉他们的内容，<br>
你希望他们了解的信息，<br>
网站是最佳选择。<br>
<br>
例如：<a href='https://hoshinoresorts.com/jp/' class="underline" target='_blank' rel='noopener noreferrer'>星野度假村。</a><br>
星野度假村注重其官方网站，<br>
强调向网站访问者展示可提供的体验发现和超越住宿的旅行建议。<br>
这是仅通过社交媒体运营无法实现的。<br>
此外，通过部分提取官方网站的信息<br>
并在社交媒体上传播，可以获得协同效应。<br>
然而，<br>
日本在网站制作方法上也落后了。<br>
现在，向那些一直安心阅读到此的人提问。<br>
<span class="hightlight">
  <strong>问：你拥有用Jamstack构建的网站吗？</strong><br>
  如果你回答<strong>否</strong>，<br>
  请认识到这就像是枪炮传入战国时代后仍固执使用弓箭等待无谓牺牲的武将一样。<br>
</span>
许多日本企业仍在使用HTML或PHP创建网站。<br>
而另一方面，<br>
<span class="hightlight">
  苹果、谷歌和其他知名海外企业都<br>
  拥有使用Jamstack方法构建的网站。甚至他们的着陆页也是如此。<br>
</span>
预算并没有太大差异，<br>
为什么会如此不同？<br>
看着日本的程序员，<br>
我认为他们可能过于习惯于他们长期积累的"自己有信心的编程方式"。<br>
此外，经营者可能将其视为"仅仅是编程"，<br>
没有意识到其中使用技术的价值。<br>
尽管如此，我也不知道真相。<br>
是他们缺乏逻辑思维吗？<br>
还是他们在实行"锁国政策"？<br>
如果有谁知道，请告诉我。<br>
回到主题，首先，<br>
让我们比较使用Jamstack构建的网站<br>
和传统网站。<br>
请注意，一些日本企业也已采用Jamstack。<br><br>
【使用Jamstack构建的网站】<br>
<a href='https://www.apple.com/jp/iphone-15/' class="underline" target='_blank' rel='noopener noreferrer'>苹果（iPhone 15着陆页）
</a><br>
<a href='https://www.audible.com/about' class="underline" target='_blank' rel='noopener noreferrer'>Audible（亚马逊运营的音频订阅服务）
</a><br>
<a href='https://www.starbucksreserve.com/' class="underline" target='_blank' rel='noopener noreferrer'>星巴克臻选（星巴克运营的提供高级咖啡的品牌）
  丸龟制面
</a><br>
<a href='https://www.bandainamco-ol.co.jp/ja/' class="underline" target='_blank' rel='noopener noreferrer'>万代南梦宫在线
</a><br>
<a href='https://crowdworks.co.jp/' class="underline" target='_blank' rel='noopener noreferrer'>CrowdWorks
</a><br>
【使用传统方法构建的网站】<br>
<a href='https://www.nissay.co.jp/' class="underline" target='_blank' rel='noopener noreferrer'>日本生命保险
</a><br>
<a href='https://panasonic.jp/' class="underline" target='_blank' rel='noopener noreferrer'>松下电器
</a><br>
<a href='https://panasonic.jp/' class="underline" target='_blank' rel='noopener noreferrer'>三菱商事
</a><br>
比较这些网站，<br>
从设计到页面切换结构再到点击按钮的引导线，<br>
一切都不同。<br>
<span class="hightlight">
  <strong>Jamstack</strong>现在是<strong>Web</strong>开发的全球标准。<br>
  而在日本，几乎没有公司使用<strong>Jamstack</strong>创建<strong>Web</strong>网站。<br>
</span>
通过社交媒体和点评网站取得一定成果的能力<br>
在日本和海外之间没有太大区别。<br>
尽管如此，<br>
为什么<br>
只有海外企业"也"拥有用Jamstack制作的网站呢？<br>
<br>
<span class="hightlight">
  因为海外企业知道使用<strong>Jamstack</strong>构建的网站<br>
  在"获客"方面发挥巨大作用。<br>
  被视为下一代<strong>Web</strong>开发方法的<strong>Jamstack</strong>构建的网站具有以下特点：</span>
<ul class="list-disc list-inside pl-6">
  <li>
    <span class="hightlight">异次元级的页面加载速度</span>
  </li>
  <li><span class="hightlight">对服务器故障的压倒性抵抗力</span></li>
  <li>
    <span class="hightlight">高级安全性</span>
  </li>
</ul>
<span class="hightlight">
与传统的<strong>Web</strong>制作方法不同，<strong>Jamstack</strong><br>
在网站运营中对服务器的依赖度较小。<br>
</span>
使用Jamstack构建的网站<br>
在每次页面跳转时不需要从服务器调用信息。<br>
因此，页面加载速度大幅提升。<br>
不从服务器调用信息意味着<br>
即使服务器宕机，网站本身也不会崩溃。<br>
它对故障具有压倒性的抵抗力。<br>
此外，使用Jamstack构建的网站不与服务器"常时连接"，<br>
这使得攻击者难以攻击服务器。<br>
因此，可以创建比传统Web开发方法安全性高得多的网站。<br>
而谷歌<br>
从SEO角度优先考虑具有这些特点的网站。<br>
也就是说，<br>
<ul class="list-disc list-inside pl-6">
  <li>
    <span class="hightlight">快速的网站</span>
  </li>
  <li><span class="hightlight">抗故障的网站</span></li>
  <li>
    <span class="hightlight">安全性强大的网站</span>
  </li>
</ul>
有一个事实是这样的网站"更容易获得更高的搜索排名"。<br>
"不需要网站，因为可以通过社交媒体获客"<br>
这种想法在只知道传统网站制作方法的日本人中间<br>
可能被视为常识，<br>
而这种网站在SEO方面很弱。<br>
<span class="hightlight">
  另一方面，使用<strong>Jamstack</strong>构建的网站</span>
  <ul class="list-disc list-inside pl-6">
    <li>
      <span class="hightlight">速度快</span>
    </li>
    <li><span class="hightlight">因此，更容易获得更高的搜索排名</span></li>
    <li>
      <span class="hightlight">因此，增加访问量并带来利润</span>
    </li>
  </ul>
这些是任何人都能看到的明显好处。<br>
从了解Jamstack的海外企业角度来看，在SEO方面它具有压倒性优势，<br>
不拥有自己的网站是极其愚蠢的行为。<br>
我们<br>
不做被<br>
利用最新互联网技术<br>
成功获客的欧美大企业认为"愚蠢"的工作。<br>
即使只是一个网页，<br>
我们也按照全球标准<br>
创造好的、新的、有效的东西。<br>
你是<br>
要避开新事物，<br>
继续走下坡路？<br>
还是<br>
要引入真正有效的东西，<br>
从竞争对手中脱颖而出？<br>
你会选择哪一个？<br>
即使在日本国内，Jamstack的引入已经带来成功的案例。<br>
<a href='https://tsunaweb.book.mynavi.jp/tsunaweb/tsuna/detail/id=4374' class="underline" target='_blank' rel='noopener noreferrer'>Jamstack导入案例（川崎重工业×Torque）</a><br>
"网站太老套了"<br>
"还有免费的社交媒体"<br>
"花同样的钱，不如用大家都知道的点评网站"<br>
首先，让我们抛弃这种与你同行业其他公司类似的<br>
贫乏思维。<br>
对我们到目前为止讨论的众多好处视而不见，<br>
选择任何人都能做的免费量产型社交媒体<br>
是愚蠢至极的。<br>
<span class="hightlight">
你要到什么时候<br>
才能不再做那个在数字锁国中使用弓箭、<br>
不知何时会被打败的武将？<br>
如果你理解了Jamstack的好处，<br>
应该尽快导入。<br>
</span>
顺便说一下，<br>
你正在阅读的这个博客<br>
也是使用Jamstack进行现代开发的。<br>
试着与各种其他博客的显示速度进行比较。<br>
你一定会明白它的厉害之处。<br>
你犹豫导入的时间越长，<br>
<br>
本应查看你公司网站的潜在客户就会流失越多。<br>
在其他公司了解我到目前为止分享的信息之前，<br>
立即联系我们。`,
        annotations: [
        ],
      },
    },
  },
];

export const dataAD: ArticleType[] = [
  {
    id: "01",
    date: "2024.4.18",
    link: "/ad/01",
    translations: {
      ja: {
        title:
          "広告代理店の見極め方〜失敗の責任を負いたくなければ「大手」に群がれ!成功したければ規模に目を向けるな!〜",
        category: "",
        content: `<span class="hightlight">大手企業のメリットとはたった1つ</span>です。<br>
「大手である」ということ。<br>
「何を言ってるんだコイツは?」<br>
と思われたかもしれません。<br>
わかりやすい言葉を使うのであれば、<br>
<span class="hightlight">「権威性」だけがメリット</span>ということです。<br>
私は以前、とある広告案件のコンペに参加したことがあります。<br>
大手から零細までさまざまな広告代理店が参加する大規模なコンペです。<br>
正直、「大手」広告代理店のエリートが話すプレゼンがどのような内容か楽しみにしていました。<br>
しかし、内容は広告運用の「本質」とはかけ離れたものでした。<br>
彼らのアピールポイントは、<br>
“いかに自分たちが大きな代理店であるか”<br>
その他大手以外の代理店も、<br>
相対的に自分たちの「大きさと実績」を伝えていました。<br>
中身がすっからかんの自慢大会同然。<br>
まだ、素人たちが歌うのど自慢大会の方が楽しいくらいです。<br>
広告のように流動的なビジネスでは、<br>
実績よりももっとシンプルに<br>
時代に合わせて、<br>
どのようにマーケティングをとらえて、<br>
それを真面目にやるか<br>
<br>
この発想こそが重要です。<br>
大企業がたくさんの案件を受ければ、<br>
その中から失敗を隠して成功談のみを実績とすることが出来るからです。<br>
さらに、<br>
その成功談が本当かどうかを確認するすべもありません。<br>
ここで、ひとつ断言させてください。<br>
“広告運用の成否に会社の規模は関係ありません”<br>
<span class="hightlight">“広告運用の成否に会社の規模は関係ありません”</span><br>
重要なのは、<br>
(大きさも含めて)その会社が何者か<br>
ではなく、<br>
その会社がどんな広告運用をしてくれるか<br>
ということです。<br>
<br>
男子なら皆知っている、<br>
「エアジョーダン」誕生の秘話を少しお話ししましょう。<br>
エアジョーダンが誕生するまでNIKEはまだ。<br>
企業としては弱小の部類でした。<br>
バスケ界に新星マイケル・ジョーダンがNBAに進出 するころ、<br>
各スニーカーメーカーはこぞって彼のスポンサーになりたがっていました。<br>
NIKEも名乗りをあげた一社でしたが、<br>
ブランド力も財力もありません。<br>
そもそもマイケル・ジョーダンはNIKEをそこまで好きではなかったので、<br>
社内では当然諦めムードでした。<br>
<br>
しかし、<br>
たった一人のNIKEの社員が、<br>
それを覆したのです!<br>
アディダスやコンバースといった名だたるメーカーが、<br>
彼にプレゼンした内容は一様にして次のようなものでした。<br>
"我が社の靴は言うまでもなく高品質で、<br>
歴代の名だたる選手が履いている。<br>
君のような将来有望な選手には相応しい!"<br>
一方、NIKEのとある社員は次のようなことを言いました。<br>
"靴はただの靴だ。<br>
誰かが履いた時に意味が生まれる。<br>
その靴にみんな憧れるようになる。<br>
だからあなたが主役(アイコン)になる新しい靴を作ろう"<br>
そして結果として、<br>
ジョーダンは、<br>
<span class="hightlight">
  ジョーダンは、<br>
  自社の権威を売りにした企業を一蹴し、<br>
  自分の権威性を引き出してくれる企業を選んだのです。<br>
</span>
さらにNIKEはマイケル・ジョーダンのわがままを聞き、<br>
NBAの規定をやぶることになるデザインをつくりました(当然他社はそのような提案はせず)。<br>
結果として罰金は払いましたが、<br>
その金額が霞むくらいの莫大な利益、<br>
そして存在感を生み出すまでになったのは<br>
<br>
言うまでもありません。<br>
<br>
大手はいつも危ない橋を渡らず、<br>
楽な武器を使い、<br>
最小限のパワーで最大の利益を生むための<br>
小手先ばかりのテクニックを使いがちです。<br>
それは決して悪いことではありません。<br>
<span class="hightlight">
  ただ、本当に顧客のために仕事をしているのかを見極める必要があります。<br>
</span>
一度、冷静に考えてみてください。<br>
大手だけがすごいのであれば、<br>
なぜ、それ以外の会社は事業としてやっていけているのか?<br>
大手代理店を辞めたトップマーケターが、<br>
零細ベンチャーを起業したらどうなるのだろうか?<br>
規模だけが重要なのであれば、<br>
こういった会社はうまくいかないはずでしょう。<br>
でも実際は、大手以外の中堅・零細代理店でもビジネスが成立している。<br>
なぜなのか?<br>
その答えは「Google」にあります。<br>
もしくは、Googleも含めた「GAFAM」のような存在がカギを握っています。<br>
彼らの前では、<br>
広告代理店の規模が大きかろうが小さかろうが、<br>
まったく意味をなしません。<br>
<br>
どの広告代理店に依頼をしても、行き着く先はGoogleだからです。<br>
もし、あなたが大手至上主義であるならば、<br>
Google広告のAIが提案する答えをを鵜呑みにしまくればいいのです。<br>
Googleこそが「世界の最大手」ですから。<br>
さて、ここまで読めば、<br>
あなたが真に押さえるべきポイントが見えてきたでしょう。<br>
<span class="hightlight">
  広告運用で重要なのは、<br>
代理店がどのような広告運用をし、どのようにGoogleに依頼をするか。<br>
会社の規模はまったく関係ありません。<br>
</span>
とはいえ、<br>
大手広告代理店も悪いことばかりではありません。<br>
そう、「権威性」があるから。<br>
長いものには巻かれろ、<br>
勝てば官軍、<br>
強きを助け弱きをくじく・・・<br>
歴史やルールはそうやって作られてきたのですから、<br>
圧倒的な権威には皆、頭が上がりません。<br>
だからもし、<br>
あなたが、どうしても、<br>
「失敗の責任」<br>
を負いたくなければ、<br>
ぜひ電通や博報堂を選んでください。<br>
仮に失敗しても、<br>
<br>
「絶対的な権威に依頼してもうまくいかなかったんだから仕方がない」<br>
と上司は納得してくれるはず。<br>
<ul class="list-disc list-inside pl-6">
  <li>
    自分が失敗の責任を負いたくない
  </li>
  <li>上司に稟議を通す材料や決裁者を納得させる材料がほしい</li>
  <li>
    “大手に頼んだのに”上手くいかなかったんだという言い訳の材料がほしい
  </li>
</ul>
<span class="hightlight">
  思考を停止して保身に走るでのあれば、<br>
大手広告代理店に依頼することはベストな選択だと言えます。
</span>
大手に依頼することが完全に「悪」なのではありません。<br>
あなたの役割や目的に応じて、大手広告代理店を活用すれば良いのです。<br>
そして、我々はこのような皮肉さえも正しく理解できる方とだけ仕事をしています。<br>
<span class="hightlight">
  上司への建前や自身の保身のためではなく、<br>
「ビジネスとしての成果」<br>
を本気で追い求める方であれば、<br>
我々は喜んで力をお貸しします。
</span>`,
        annotations: [
        ],
      },
      en: {
        title:
          "How to Choose an Advertising Agency ~ If You Don't Want to Take Responsibility for Failure, Flock to \"Large Companies\"! If You Want Success, Don't Focus on Size! ~",
        category: "",
        content: `<span class="hightlight">The advantage of large companies is just one thing</span>.<br>
Being "large."<br>
You might be thinking, "What is this person talking about?"<br>
To put it in simpler terms,<br>
<span class="hightlight">only "authority" is the advantage</span>.<br>
I once participated in a competition for an advertising project.<br>
It was a large-scale competition with various advertising agencies participating, from large to small.<br>
Honestly, I was looking forward to hearing what kind of presentations the "elite" from large advertising agencies would give.<br>
However, the content was far from the "essence" of advertising operations.<br>
Their selling point was,<br>
"how large of an agency they are"<br>
Other non-major agencies also<br>
communicated their relative "size and track record."<br>
It was almost like a boasting contest with no substance.<br>
An amateur singing contest would be more entertaining.<br>
In a fluid business like advertising,<br>
more simply than track records,<br>
adapting to the times,<br>
how you perceive marketing,<br>
and taking it seriously<br>
<br>
This mindset is what's important.<br>
If large companies take on numerous projects,<br>
they can hide failures and only present successes as their track record.<br>
Furthermore,<br>
there's no way to verify if these success stories are true.<br>
Let me make one assertion here.<br>
"The size of a company has nothing to do with the success or failure of advertising operations"<br>
<span class="hightlight">"The size of a company has nothing to do with the success or failure of advertising operations"</span><br>
What's important is not<br>
who the company is (including its size),<br>
but<br>
what kind of advertising operations they will provide.<br>
<br>
Let me share a little about the secret story of the birth of "Air Jordan," which all men know.<br>
Until Air Jordan was born, NIKE was still<br>
in the category of a small company.<br>
When basketball's new star Michael Jordan was entering the NBA,<br>
every sneaker manufacturer wanted to be his sponsor.<br>
NIKE was one of the companies that raised its hand,<br>
but they had neither brand power nor financial strength.<br>
Originally, Michael Jordan didn't like NIKE that much,<br>
so naturally, there was a mood of resignation within the company.<br>
<br>
However,<br>
just one NIKE employee<br>
turned this around!<br>
The presentations made to him by renowned manufacturers like Adidas and Converse<br>
were uniformly like this:<br>
"Needless to say, our shoes are of high quality,<br>
worn by legendary players throughout history.<br>
They're suitable for a promising player like you!"<br>
On the other hand, a certain NIKE employee said something like this:<br>
"Shoes are just shoes.<br>
They only gain meaning when someone wears them.<br>
Everyone will start admiring those shoes.<br>
So let's create a new shoe where you become the protagonist (icon)"<br>
And as a result,<br>
Jordan,<br>
<span class="hightlight">
Jordan<br>
dismissed companies that sold their own authority,<br>
and chose a company that would bring out his authority.<br>
</span>
Moreover, NIKE listened to Michael Jordan's demands<br>
and created a design that would break NBA regulations (of course, other companies did not make such proposals).<br>
As a result, they paid a fine,<br>
but the enormous profit that dwarfed that amount,<br>
and the presence they created<br>
<br>
goes without saying.<br>
<br>
Large companies often avoid risky ventures,<br>
use easy weapons,<br>
and tend to use superficial techniques<br>
to generate maximum profit with minimal power.<br>
This isn't necessarily a bad thing.<br>
<span class="hightlight">
However, you need to determine if they're truly working for the customer.<br>
</span>
Consider calmly for a moment.<br>
If only large companies are great,<br>
why can other companies survive as businesses?<br>
What happens when a top marketer who quit a large agency<br>
starts a small venture?<br>
If size were all that mattered,<br>
these companies shouldn't succeed.<br>
But in reality, medium and small agencies other than the large ones also have viable businesses.<br>
Why is that?<br>
The answer lies in "Google."<br>
Or rather, entities like "GAFAM" (including Google) hold the key.<br>
In front of them,<br>
whether an advertising agency is large or small<br>
makes no difference at all.<br>
<br>
Because no matter which advertising agency you request, you end up at Google.<br>
If you are a large company supremacist,<br>
you should just blindly accept the answers proposed by Google Ads AI.<br>
After all, Google is the "world's largest."<br>
Now, having read this far,<br>
you should see the point you truly need to grasp.<br>
<span class="hightlight">
What's important in advertising operations is<br>
what kind of advertising operations the agency does and how they request from Google.<br>
The size of the company is completely irrelevant.<br>
</span>
That said,<br>
large advertising agencies aren't all bad.<br>
Yes, because they have "authority."<br>
Go with the flow,<br>
winners write history,<br>
help the strong and crush the weak...<br>
History and rules have been made that way,<br>
so everyone bows to overwhelming authority.<br>
So if<br>
you absolutely, without fail,<br>
do not want to bear<br>
"responsibility for failure,"<br>
please choose Dentsu or Hakuhodo.<br>
Even if they fail,<br>
<br>
"We couldn't succeed even after delegating to an absolute authority, so it can't be helped,"<br>
your boss should understand.<br>
<ul class="list-disc list-inside pl-6">
  <li>
    You don't want to take responsibility for failure
  </li>
  <li>You want material to get approval from your boss or convince decision-makers</li>
  <li>
    You want an excuse to say, "It didn't work out even though we hired a major company"
  </li>
</ul>
<span class="hightlight">
  If you're going to stop thinking and focus on self-preservation,<br>
  delegating to a large advertising agency can be considered the best choice.
</span>
Requesting from large companies isn't completely "evil."<br>
You should utilize large advertising agencies according to your role and purpose.<br>
And we only work with those who can correctly understand even this irony.<br>
<span class="hightlight">
  Not for the sake of formality to your boss or self-preservation,<br>
  but if you genuinely seek<br>
  "business results,"<br>
  we are happy to lend our strength.
</span>`,
        annotations: [
        ],
      },
      zh: {
        title: "如何选择广告代理商～如果不想为失败负责，就投靠\"大公司\"！如果想要成功，就不要关注规模！～",
        category: "",
        content: `<span class="hightlight">大公司的优势只有一个</span>。<br>
就是"规模大"。<br>
你可能会想："这家伙在说什么？"<br>
用更简单的话来说，<br>
<span class="hightlight">只有"权威性"是优势</span>。<br>
我曾经参加过一个广告项目的竞标。<br>
这是一个大型竞标，有各种规模的广告代理商参与，从大型到小型的都有。<br>
老实说，我很期待听到"大型"广告代理商的精英们会做什么样的演讲。<br>
然而，内容与广告运营的"本质"相去甚远。<br>
他们的卖点是，<br>
"他们的代理商有多大"<br>
其他非大型代理商也<br>
传达了他们相对的"规模和业绩"。<br>
几乎就像是一场毫无实质内容的自夸比赛。<br>
一场业余歌唱比赛都要更有趣。<br>
在像广告这样流动性的业务中，<br>
比业绩更简单的是<br>
适应时代，<br>
如何看待营销，<br>
以及认真对待它<br>
<br>
这种思维方式才是重要的。<br>
如果大公司承接大量项目，<br>
他们可以隐藏失败，只将成功作为业绩展示。<br>
而且，<br>
没有办法验证这些成功故事是否真实。<br>
在这里让我断言一点。<br>
"公司规模与广告运营的成败无关"<br>
<span class="hightlight">"公司规模与广告运营的成败无关"</span><br>
重要的不是<br>
公司是谁（包括其规模），<br>
而是<br>
这家公司会提供什么样的广告运营。<br>
<br>
让我分享一下所有男生都知道的"Air Jordan"诞生的秘密故事。<br>
在Air Jordan诞生之前，NIKE仍然<br>
属于弱小企业的类别。<br>
当篮球新星迈克尔·乔丹进入NBA时，<br>
各个运动鞋制造商都争相成为他的赞助商。<br>
NIKE是举手的公司之一，<br>
但他们既没有品牌力量也没有财力。<br>
原本，迈克尔·乔丹并不那么喜欢NIKE，<br>
所以公司内部自然有放弃的情绪。<br>
<br>
然而，<br>
仅仅一个NIKE员工<br>
扭转了这一局面！<br>
阿迪达斯和匡威等知名制造商向他做的演讲<br>
一致如下：<br>
"不用说，我们的鞋子品质高，<br>
历代名将都穿着它们。<br>
对你这样有前途的球员来说很合适！"<br>
另一方面，NIKE的一位员工说了这样的话：<br>
"鞋子只是鞋子。<br>
只有当有人穿上它们时才有意义。<br>
每个人都会开始羡慕那些鞋子。<br>
所以让我们创造一款新鞋，让你成为主角（图标）"<br>
结果，<br>
乔丹，<br>
<span class="hightlight">
乔丹<br>
拒绝了那些以自身权威为卖点的公司，<br>
选择了能够发挥他自身权威的公司。<br>
</span>
此外，NIKE听取了迈克尔·乔丹的要求<br>
创造了一个会打破NBA规定的设计（当然，其他公司没有提出这样的建议）。<br>
结果，他们支付了罚款，<br>
但产生的巨额利润使这笔罚款相形见绌，<br>
以及他们创造的存在感<br>
<br>
不言而喻。<br>
<br>
大公司经常避免冒险，<br>
使用简单的武器，<br>
倾向于使用表面的技巧<br>
以最小的力量产生最大的利润。<br>
这并不一定是坏事。<br>
<span class="hightlight">
然而，你需要确定他们是否真的为客户工作。<br>
</span>
冷静地考虑一下。<br>
如果只有大公司才了不起，<br>
为什么其他公司能作为企业生存？<br>
当一个从大型代理商辞职的顶级营销人员<br>
创办一家小型公司会怎样？<br>
如果规模是唯一重要的，<br>
这些公司不应该成功。<br>
但实际上，除大型代理商外，中小型代理商也有可行的业务。<br>
为什么会这样？<br>
答案在于"谷歌"。<br>
或者说，像"GAFAM"（包括谷歌）这样的实体掌握着关键。<br>
在它们面前，<br>
无论广告代理商规模大小<br>
都没有任何差别。<br>
<br>
因为无论你请求哪家广告代理商，最终都会到达谷歌。<br>
如果你是大公司至上主义者，<br>
你应该盲目接受谷歌广告AI提出的答案。<br>
毕竟，谷歌是"世界最大的"。<br>
现在，读到这里，<br>
你应该看到了你真正需要把握的要点。<br>
<span class="hightlight">
广告运营中重要的是<br>
代理商做什么样的广告运营以及如何向谷歌发出请求。<br>
公司规模完全无关。<br>
</span>
话虽如此，<br>
大型广告代理商也不全是坏的。<br>
是的，因为他们有"权威性"。<br>
随大流，<br>
胜者为王，<br>
扶强抑弱……<br>
历史和规则就是这样形成的，<br>
所以每个人都向压倒性的权威低头。<br>
所以如果<br>
你绝对、无论如何<br>
不想承担<br>
"失败的责任"，<br>
请选择电通或博报堂。<br>
即使他们失败了，<br>
<br>
"即使委托给绝对权威也没能成功，所以没办法"，<br>
你的上司应该会理解。<br>
<ul class="list-disc list-inside pl-6">
  <li>
    你不想为失败负责
  </li>
  <li>你想要材料来获得上司的批准或说服决策者</li>
  <li>
    你想要一个借口说"即使雇佣了大公司也没成功"
  </li>
</ul>
<span class="hightlight">
  如果你要停止思考并专注于自我保护，<br>
  委托给大型广告代理商可以被认为是最佳选择。
</span>
向大公司请求并不完全是"邪恶"的。<br>
你应该根据你的角色和目的利用大型广告代理商。<br>
而我们只与那些能正确理解这种讽刺的人合作。<br>
<span class="hightlight">
  不是为了对上司的表面功夫或自我保护，<br>
  而是如果你真心寻求<br>
  "业务成果"，<br>
  我们很乐意提供帮助。
</span>`,
        annotations: [
        ],
      },
    },
  },
  {
    id: "02",
    date: "2024.4.18",
    link: "/ad/02",
    translations: {
      ja: {
        title:
          "Googleのお膝元でSEO教を信奉する哀れな信者たちのお話し",
        category: "",
        content: `少し昔、2024年の3月から5月にかけてのこと。<br>
Googleという神様がやらかしました。<br>
それと同時に、<br>
「俺たちのやっていたことは間違っていなかった!」<br>
そんな声がある業界で飛び交いました。<br>
そう、SEOを中心とするマーケティング業界です。<br>
Googleのアルゴリズムが漏洩したことは業界を大きく騒がせました。<br>
<br>
<div class="border border-black dark:border-white p-5">
  流出についての詳細が書かれた記事を要約: <br>
  Googleの検索アルゴリズムに関する内部文書がリークされ、14,000以上のランキングの特徴が
  明らかに。これにより、Googleが長年否定してきたドメインオーソリティの存在やクリック数の利用
  など、多くの事実が確認されました。Pandaアルゴリズムの仕組みや、著者情報、リンクの価値評
  価方法なども明確になりました。この情報は、SEO戦略の見直しにつながる可能性があり、良質な
  コンテンツ作成とプロモーションの重要性を再確認させるものとなっています。また、この漏洩によ
  り、多くのSEO専門家の主張が正しかったことが証明されました。
  <br>
  出典:<a href='https://ipullrank.com/google-algo-leak' class="underline" target='_blank' rel='noopener noreferrer'>The Google Algo Leak: Actionable Insights, Best New Practices, and Killer Tactics</a><br>
  補足:Google側も正式に流出を認める結果となりました(<a href='https://www.itmedia.co.jp/news/articles/2405/31/news133.html' class="underline" target='_blank' rel='noopener noreferrer'>参考記事</a>)。
</div><br>
これまでGoogleという神様がつくった暗黙のルールはブラックボックスに包まれており、<br>
あくまでプロと名乗る人々の「憶測」で検索エンジンの上位を狙っていたのです。<br>
それが、アルゴリズムの流出によって「憶測」が一部「真実」であることが明らかになりました。<br>
SEO業者はクライアントに「やっぱりこの理論が正しかったんです」と豪語。<br>
SEO対策をしている人たちも「この業者に頼んでいて正解だった」と安心。<br>
<br>
私はこの状況を見て思いました。<br>
リーマンショックのときと同じだと。<br>
銀行に投資して、資産が増加すれば、功績は銀行の担当者です。<br>
一方で、資産が減少すれば、リーマンショックのせい。<br>
つまり、<br>
銀行の担当者は責任を負わない無敵の立場であり、<br>
責任を負えないほど不透明世界ということです。<br>
今回のアルゴリズムの流出でわかったことは所詮一部の方針だけです。<br>
例えるのであれば、<br>
日本のどこかには徳川の埋蔵金があります!<br>
とわかったようなもの。<br>
事実がわかったところで、場所がわからなければ掘り起こすことはできません。<br>
SEOがマーケティング業界の中でも奇異なのは、<br>
広告やダイレクトマーケティングと違って、<br>
回答がなさすぎるという点です。<br>
SEO対策にお金をつぎ込む企業は<br>
そもそもSEOの本質はわかっていません。<br>
だから専門業者に頼みます。<br>
安い業者だと成果がでなかったからといって、<br>
”実績がある”と謳う高い業者へシフトしていきます。<br>
そうしてどんどんお金を投下。<br>
「投資」だと思っているのでしょうが、<br>
<br>
実はこれ、「投機」と変わりません。<br>
理論もなく、1000倍のレバレッジをかけてFX取引しているようなものです。<br>
“専門”業者だから当然、SEOの真髄を理解しているとお思いでしょう。<br>
でも業者も理解はしていません。<br>
というか理解できません。<br>
なぜなら、答えがなさすぎる世界だからです。<br>
戦国時代では、<br>
馬に人が乗る前にいななければ「吉」<br>
乗った後にいななけば「凶」<br>
と判断していたそうです。<br>
「今日は、乗る前に馬がいなないたから戦に勝てるぞ!」<br>
「高いけど実績のある専門企業に依頼すれば検索上位に表示できるぞ!」<br>
同じくらい根拠のない”いななき”に聞こえます。<br>
でも、埋蔵金があることがわかったのですから、それはよかったことです。<br>
専門業者にお金を渡して、<br>
「ここ掘れワンワン」と<br>
地道に一箇所ずつ掘り起こしていけばよいのではないでしょうか。<br>
運が良ければ100年以内に砂金の一粒でも見つかるかもしれません<br>
が、きっと一生花咲かないじいさんになってしまうでしょう。<br>
あと、1つ覚えておいてほしいことがあります。<br>
Googleはルールを司る神様です。<br>
変更しないほど愚かなわけがありません。<br>
<br>
また、もし、変更しない場合が万が一あったとしても、<br>
ルールが明確なら工夫の余地は少なく、<br>
単純な資本の勝負となるでしょう。<br>
いずれにせよ、<br>
SEOにお金を投下し続けることはギャンブルのようにしか思えません。<br>
企業の目的はなんでしょうか?<br>
そもそも検索の上位に自サイトが表示されることではありません。<br>
利益を得ることです。<br>
お金儲けをするのではなく、<br>
Google様の探索調査をする熱心な研究者であればそれはそれはよいお金の使い道です。<br>
ぜひ、がんばってください。<br>
SEO対策に投下し続けるお金があれば、<br>
より確かに合理的にお金を増やす方法はごまんとあります。<br>
もしあなたが善良なだけの研究者ではなく、<br>
企業利益をあげる責任のある探求者であれば我々まで連絡をください。`,
        annotations: [
        ],
      },
      en: {
        title:
          "The Tale of Pitiful Believers Who Worship the SEO Religion in Google's Backyard",
        category: "",
        content: `A little while ago, between March and May 2024.<br>
The god called Google made a blunder.<br>
At the same time,<br>
"What we've been doing wasn't wrong!"<br>
Such voices flew around in a certain industry.<br>
Yes, the marketing industry centered around SEO.<br>
The leak of Google's algorithm caused a huge stir in the industry.<br>
<br>
<div class="border border-black dark:border-white p-5">
  Summary of an article detailing the leak: <br>
  Internal documents regarding Google's search algorithm were leaked, revealing over 14,000 ranking features. This confirmed many facts that Google had denied for years, such as the existence of domain authority and the use of click counts. The workings of the Panda algorithm, author information, and methods for evaluating link value were also clarified. This information could lead to a reconsideration of SEO strategies and reaffirms the importance of creating quality content and promotion. Additionally, this leak proved that many SEO experts' claims were correct.
  <br>
  Source: <a href='https://ipullrank.com/google-algo-leak' class="underline" target='_blank' rel='noopener noreferrer'>The Google Algo Leak: Actionable Insights, Best New Practices, and Killer Tactics</a><br>
  Note: Google officially acknowledged the leak (<a href='https://www.itmedia.co.jp/news/articles/2405/31/news133.html' class="underline" target='_blank' rel='noopener noreferrer'>Reference article</a>).
</div><br>
Until now, the implicit rules created by the god called Google were wrapped in a black box,<br>
and people who call themselves professionals were aiming for the top of search engines based on "speculation."<br>
With the algorithm leak, it became clear that some of those "speculations" were "truth."<br>
SEO companies boasted to their clients, "See, this theory was correct after all."<br>
People who had invested in SEO were reassured, "It was right to rely on this company."<br>
<br>
Looking at this situation, I thought:<br>
It's just like during the Lehman Shock.<br>
If you invest in a bank and your assets increase, the credit goes to the bank representative.<br>
On the other hand, if your assets decrease, it's because of the Lehman Shock.<br>
In other words,<br>
the bank representative is in an invincible position where they don't bear responsibility,<br>
meaning it's an opaque world where responsibility cannot be assigned.<br>
What we learned from this algorithm leak is merely a portion of the guidelines.<br>
To draw an analogy,<br>
it's like finding out that there's buried Tokugawa treasure somewhere in Japan!<br>
Even if you know the fact, if you don't know the location, you can't dig it up.<br>
What makes SEO peculiar in the marketing industry is that,<br>
unlike advertising and direct marketing,<br>
there are too few answers.<br>
Companies that pour money into SEO<br>
don't understand the essence of SEO in the first place.<br>
That's why they rely on specialized companies.<br>
If a cheap company doesn't produce results,<br>
they shift to expensive companies that claim to have "track records."<br>
And so they continue to invest more and more money.<br>
They probably think it's an "investment,"<br>
<br>
but in reality, it's no different from "speculation."<br>
It's like trading FX with 1000x leverage without any theory.<br>
You probably think that "specialized" companies naturally understand the essence of SEO.<br>
But these companies don't understand it either.<br>
Or rather, they can't understand it.<br>
Because it's a world with too few answers.<br>
In the Warring States period,<br>
if a horse neighed before a person mounted it, it was considered "lucky."<br>
If it neighed after the person mounted, it was considered "unlucky."<br>
"Today, the horse neighed before I mounted it, so we'll win the battle!"<br>
"If we hire an expensive company with a track record, we can appear at the top of search results!"<br>
It sounds like a "neigh" with equally baseless reasoning.<br>
But, now that we know there's buried treasure, that's a good thing.<br>
Give money to specialized companies,<br>
tell them "dig here, woof woof,"<br>
and steadily dig one spot at a time.<br>
If you're lucky, you might find a grain of gold within 100 years,<br>
but you'll probably end up like the old man waiting for flowers to bloom for his entire life.<br>
Also, there's one more thing I want you to remember.<br>
Google is the god who dictates the rules.<br>
It would be foolish of them not to change the rules.<br>
<br>
Also, even in the unlikely event that they don't change the rules,<br>
if the rules are clear, there's little room for innovation,<br>
and it would simply become a battle of capital.<br>
Either way,<br>
continuing to invest in SEO feels like nothing more than gambling.<br>
What is the purpose of a company?<br>
It's not about having your site displayed at the top of search results in the first place.<br>
It's about making a profit.<br>
If you're an enthusiastic researcher exploring Google's mysteries rather than making money,<br>
then that's a very good use of your money.<br>
By all means, go for it.<br>
With the money that you'd continue to invest in SEO,<br>
there are countless more reliable and rational ways to increase your money.<br>
If you're not just a well-intentioned researcher,<br>
but a seeker responsible for increasing corporate profits, please contact us.`,
        annotations: [
        ],
      },
      zh: {
        title: "在谷歌的后院崇拜SEO宗教的可怜信徒们的故事",
        category: "",
        content: `不久前，在2024年3月至5月期间。<br>
名为谷歌的神犯了一个错误。<br>
同时，<br>
"我们一直以来所做的并没有错！"<br>
这样的声音在某个行业中传播开来。<br>
是的，就是以SEO为中心的营销行业。<br>
谷歌算法的泄露在行业内引起了巨大轰动。<br>
<br>
<div class="border border-black dark:border-white p-5">
  关于泄露详情的文章摘要：<br>
  谷歌搜索算法的内部文件被泄露，揭示了14,000多个排名特征。这证实了谷歌多年来一直否认的许多事实，如域名权威性的存在和点击数的使用。熊猫算法的工作原理、作者信息以及链接价值评估方法也变得明确。这些信息可能导致SEO策略的重新考虑，并重申了创建优质内容和推广的重要性。此外，这次泄露证明了许多SEO专家的主张是正确的。
  <br>
  来源：<a href='https://ipullrank.com/google-algo-leak' class="underline" target='_blank' rel='noopener noreferrer'>The Google Algo Leak: Actionable Insights, Best New Practices, and Killer Tactics</a><br>
  补充：谷歌方面也正式承认了泄露 (<a href='https://www.itmedia.co.jp/news/articles/2405/31/news133.html' class="underline" target='_blank' rel='noopener noreferrer'>参考文章</a>)。
</div><br>
直到现在，谷歌这个神创造的隐含规则一直被包裹在黑匣子中，<br>
那些自称专业人士的人们一直基于"猜测"来争取搜索引擎的顶部位置。<br>
随着算法泄露，一些"猜测"被证明确实是"真相"。<br>
SEO公司向客户夸耀："看，这个理论果然是正确的。"<br>
投资SEO的人也放心了："依靠这家公司是正确的。"<br>
<br>
看到这种情况，我想：<br>
这就像雷曼危机时一样。<br>
如果你投资银行，资产增加了，功劳归于银行代表。<br>
另一方面，如果资产减少，那是因为雷曼危机。<br>
换句话说，<br>
银行代表处于不承担责任的无敌地位，<br>
意味着这是一个不能分配责任的不透明世界。<br>
从这次算法泄露中我们了解到的只是指导方针的一部分。<br>
打个比方，<br>
这就像知道日本某处有德川的埋藏金！<br>
即使你知道这个事实，如果不知道位置，也无法挖掘出来。<br>
SEO在营销行业中的特殊之处在于，<br>
与广告和直接营销不同，<br>
答案太少了。<br>
将资金投入SEO的企业<br>
从一开始就不理解SEO的本质。<br>
这就是为什么他们依赖专业公司。<br>
如果便宜的公司没有产生结果，<br>
他们就转向自称有"业绩记录"的昂贵公司。<br>
于是他们继续投入越来越多的资金。<br>
他们可能认为这是"投资"，<br>
<br>
但实际上，这与"投机"没有什么不同。<br>
这就像在没有任何理论的情况下以1000倍杠杆进行外汇交易。<br>
你可能认为"专业"公司自然理解SEO的本质。<br>
但这些公司也不理解。<br>
或者说，他们无法理解。<br>
因为这是一个答案太少的世界。<br>
在战国时代，<br>
如果马在人骑上之前嘶鸣，被认为是"吉兆"。<br>
如果在人骑上之后嘶鸣，则被认为是"凶兆"。<br>
"今天，马在我骑上之前嘶鸣了，所以我们会赢得战斗！"<br>
"如果我们聘请有业绩记录的昂贵公司，我们可以出现在搜索结果的顶部！"<br>
这听起来像是同样没有根据的"嘶鸣"。<br>
但是，既然我们知道有埋藏的宝藏，那是件好事。<br>
给专业公司钱，<br>
告诉他们"挖这里，汪汪"，<br>
稳步地一处一处地挖掘。<br>
如果你幸运的话，可能在100年内找到一粒金沙，<br>
但你可能会变成一生等待花开的老人。<br>
另外，还有一件事我希望你记住。<br>
谷歌是制定规则的神。<br>
他们不改变规则才是愚蠢的。<br>
<br>
而且，即使在极不可能的情况下他们不改变规则，<br>
如果规则明确，创新的空间就很小，<br>
它简单地变成了资本的战斗。<br>
无论如何，<br>
继续投资SEO感觉不过是赌博。<br>
公司的目的是什么？<br>
从一开始就不是让你的网站显示在搜索结果的顶部。<br>
而是获取利润。<br>
如果你是一个热心研究谷歌奥秘而不是赚钱的研究者，<br>
那么这确实是很好的资金用途。<br>
请尽管努力。<br>
用你继续投资SEO的钱，<br>
有无数更可靠、更合理的增加资金的方法。<br>
如果你不只是一个善意的研究者，<br>
而是肩负增加企业利润责任的探索者，请联系我们。`,
        annotations: [
        ],
      },
    },
  },
];

export const dataMarketing: ArticleType[] = [
  {
    id: "01",
    date: "2024.4.18",
    link: "/marketing/01",
    translations: {
      ja: {
        title:
          "板書を書き写すバカな優等生に知ってほしいローカライズ活用のススメ",
        category: "",
        content: `昔、受験勉強をしていたころ、<br>
毎時間、<br>
毎授業、<br>
<span class="hightlight">
  必死に先生の板書をノートに書き写しているバカがいました。<br>
</span>
彼の熱心な学習の姿勢は、<br>
先生からは褒められ、<br>
周りの友人たちからも「あいつは真面目ですごい奴だ」と評価されていました。<br>
でも、正直に言うと私はこう思いました。<br>
「こいつ、なんでこんなバカなことをやっているんだろう?」<br>
なぜなら、<br>
その先生は板書と同じ内容を解説したプリントをちゃんと配ってくれていたから。<br>
授業はそのプリントをもとに行われ、<br>
先生が口頭で説明していたのはあくまで補足的な事項だけだったんです。<br>
<span class="hightlight">
  私はノートなんて一切取りませんでした。<br>
</span>
代わりに先生からもらったプリントを事前に読み込み、<br>
授業中は先生が口頭でしゃべってくれた内容のうち、<br>
プリントに書かれていない内容だけをメモしていました。<br>
自分が取ったノートなど、所詮は先生が作ってくれたプリントの劣化版です。<br>
なのに、<br>
<span class="hightlight">
  なぜまったく同じ内容をイチから自分で再現する必要があるのでしょうか?<br>
</span>
そして今、<br>
ビジネスの世界でもこれと同じ出来事をよく見かけます。<br>
<span class="hightlight">
  いま、世界中には無料で公開されている優れたオープンソースであふれています。<br>
それなのに、<br>
多くの企業は頑なに、<br>
イチから開発をしたがります。<br>
正直理解できません。<br>
</span>
例えば、メールでの問い合わせフォーム。<br>
Googleフォームを使えばよくないですか?<br>
入力をする画面もわかりやすいし、<br>
入力結果の集計時の仕様も極めて使いやすい。<br>
世界最高の頭脳集団であるGoogleが作ったフォームのお値段はなんと・・・<br>
0円。<br>
一方、プログラム的に劣化していくあなたが作った独自のフォームは・・・<br>
15,000円。<br>
あなたには申し訳ないですが、<br>
私は当然Googleフォームを使います。<br>
あなたの友人や家族でさえも、きっと同じことを言うのではないでしょうか。<br>
私が言いたいことはひとつ。<br>
<span class="hightlight">
  イチから無駄な開発(しかも劣る可能性大)をして、<br>
お金も時間もかけて、<br>
それってバカらしくない?<br>
</span>
ということ。<br>
でも、自社のオリジナルじゃないと他社とは差別化できないのでは・・・?<br>
なんて考えてませんよね?<br>
<span class="hightlight">
  差別化は、製品の工程ではなく、質やコンテンツであるべきです。<br>
</span>
自社開発したところで所詮、何かの劣化版やコピー品にすぎません。<br>
私は良くバーに行きますが、<br>
1からカクテル開発している人たちはすごいと思います。<br>
大会に出て、認められて、世界に認知されるお酒を作る人たちがいます。<br>
日本でも雪国、バンブー、ミリオンダラーといった独自のカクテルが生まれました。<br>
新しい独自の秀でたカクテルで店を有名にする店舗は確かにあります。<br>
ほんのわずかですが。<br>
カクテルもオープンソースと同じで、レシピが公開されています。<br>
だから、新たに1から作るよりも、<br>
誰かが生み出した美味しいカクテルを自分で再現するほうが、<br>
商売としては圧倒的にコスパが良いです。<br>
<span class="hightlight">
  評価されるかもわからない、<br>
時間も費用もがかかる<br>
オリジナルを生み出す理由はなんでしょうか?<br>
</span>
あなたが最強の職人としての名誉を得たいのであればわかります。<br>
職人を目指すのであればぜひ応援したい。<br>
でも、ビジネスをしたいのであれば、<br>
やはり理解はできません。<br>
考えれば考えるほど、<br>
金と時間を無駄づかいをする天才なのかと褒めたくなってきました。<br>
あなたが作る美しくデザインで覆われたプログラムは、<br>
プリント内容を綺麗に模写してちょっとラインマーカーを引いたノートと変わりありません。<br>
<br>
隣の席の友だちに褒められるという小さな小さな勲章はもらえるでしょう。<br>
でも、それ以外に何が?<br>
写経が好き。<br>
塗り絵が好き。<br>
1からソースコードを作るのが好き。<br>
趣味であれば一生そうしていればいいでしょう。<br>
もし、<br>
OpenAIを超える大規模言語モデルのAIを作れるなら、<br>
それは作るべきです。<br>
Amazonを超えるECサイトを作れるなら、<br>
それも作るべきです。<br>
ですが、<br>
そんなことができる人間は、この世にほとんどいません。<br>
若き日のビル・ゲイツかスティーブ・ジョブズくらいでしょうか。<br>
サム・アルトマンやイーロン・マスクでもいいでしょう。<br>
あなたやあなたの周りにいる人が同様の人材であるならば・・・<br>
別に天才じゃないからと言ってめげる必要はありません。<br>
<span class="hightlight">
  自分で作れないなら借りてきたり、買ってくれば良いんです。<br>
ありがたいことに、世界から見た日本市場は超ブルーオーシャンです。
</span>
日本語という言語の壁が高すぎるから。<br>
海外の良質なプロダクトの多くは、<br>
日本に入ってきていない。<br>
入ってこれない。<br>
であれば、<br>
<br>
そのプロダクトの開発元にお金を払って、<br>
成果を借り、<br>
日本で展開すれば余裕で勝てます。<br>
<span class="hightlight">
  日本で展開すれば余裕で勝てます。<br>
</span>
しかも、<br>
開発にかかる時間もお金も半分で済みます。<br>
この世界の誰かが開発しているプロダクトの中で、<br>
あなたが目を付けているものがあれば私に教えてください。<br>
私は天才ではないですが、<br>
あなたにとって無駄なフォームを設置することはありません。<br>`,
        annotations: [
        ],
      },
      en: {
        title:
          "A Recommendation on Utilizing Localization for Honor Students Who Stupidly Copy Everything from the Blackboard",
        category: "",
        content: `Back when I was studying for entrance exams,<br>
every hour,<br>
every class,<br>
<span class="hightlight">
there was an idiot who desperately copied down everything the teacher wrote on the blackboard into their notebook.<br>
</span>
His enthusiastic study attitude<br>
was praised by the teachers,<br>
and even his friends evaluated him as "that guy is serious and amazing."<br>
But honestly, I thought:<br>
"Why is this guy doing such a stupid thing?"<br>
Because<br>
the teacher had properly distributed handouts with the same content as what was on the blackboard.<br>
The class was conducted based on those handouts,<br>
and what the teacher explained verbally was merely supplementary information.<br>
<span class="hightlight">
I didn't take notes at all.<br>
</span>
Instead, I read the handouts in advance,<br>
and during class, I only jotted down<br>
the verbal content from the teacher that wasn't written in the handouts.<br>
After all, notes taken by yourself are just inferior versions of the handouts prepared by the teacher.<br>
So,<br>
<span class="hightlight">
why is there a need to recreate the exact same content from scratch?<br>
</span>
And now,<br>
I often see the same phenomenon in the business world.<br>
<span class="hightlight">
Currently, the world is overflowing with excellent open-source resources that are freely available.<br>
Despite this,<br>
many companies stubbornly<br>
want to develop from scratch.<br>
I honestly don't understand.<br>
</span>
For example, an email inquiry form.<br>
Wouldn't Google Forms work well?<br>
The input screen is easy to understand,<br>
and the specifications for aggregating input results are extremely user-friendly.<br>
The price of forms created by Google, a collective of the world's greatest minds, is...<br>
0 yen.<br>
On the other hand, your custom-made form, which will deteriorate programmatically over time, costs...<br>
15,000 yen.<br>
I'm sorry to say this,<br>
but I'll naturally choose Google Forms.<br>
Even your friends and family would probably say the same thing, wouldn't they?<br>
What I want to say is simple.<br>
<span class="hightlight">
Isn't it ridiculous to waste money and time<br>
on unnecessary development from scratch (which will likely be inferior)?<br>
</span>
That's my point.<br>
But, you're not thinking that without an original product, you can't differentiate from other companies... are you?<br>
<span class="hightlight">
Differentiation should be in quality or content, not in the production process.<br>
</span>
Even if you develop in-house, it's just an inferior version or copy of something else.<br>
I often go to bars,<br>
and I think people who develop cocktails from scratch are amazing.<br>
There are people who enter competitions, get recognized, and create globally acknowledged drinks.<br>
In Japan too, unique cocktails like Yukiguni, Bamboo, and Million Dollar were born.<br>
There are certainly stores that become famous for their new, unique, excellent cocktails.<br>
But they're just a handful.<br>
Like open-source, cocktail recipes are publicly available.<br>
So, rather than creating from scratch,<br>
it's overwhelmingly more cost-effective as a business<br>
to recreate a delicious cocktail that someone else has already created.<br>
<span class="hightlight">
What's the reason for creating something original<br>
that may not be appreciated,<br>
and costs both time and money?<br>
</span>
If you want to gain honor as a master craftsman, I understand.<br>
If you aim to be a craftsman, I'd certainly want to support you.<br>
But if you want to do business,<br>
I still don't understand.<br>
The more I think about it,<br>
I want to praise you as a genius who wastes money and time.<br>
The beautifully designed program you create<br>
is no different from a notebook that neatly copies the printout content and adds a few highlighted lines.<br>
<br>
You might receive a tiny, tiny medal of being praised by a friend sitting next to you.<br>
But what else?<br>
If you enjoy copying sutras,<br>
enjoy coloring books,<br>
enjoy creating source code from scratch,<br>
then as a hobby, you should continue doing so for the rest of your life.<br>
If<br>
you can create a large language model AI that surpasses OpenAI,<br>
then you should create it.<br>
If you can create an EC site that surpasses Amazon,<br>
you should create that too.<br>
However,<br>
there are very few people in this world who can do such things.<br>
Perhaps only a young Bill Gates or Steve Jobs could.<br>
Sam Altman or Elon Musk would be fine too.<br>
If you or someone around you is such a person...<br>
There's no need to be discouraged just because you're not a genius.<br>
<span class="hightlight">
If you can't create it yourself, you can borrow or buy it.<br>
Thankfully, from a global perspective, the Japanese market is an ultra-blue ocean.
</span>
The barrier of the Japanese language is too high.<br>
Many high-quality products from overseas<br>
haven't entered Japan.<br>
They can't enter.<br>
In that case,<br>
<br>
pay the product developers,<br>
borrow their achievements,<br>
and you can easily win by deploying in Japan.<br>
<span class="hightlight">
You can easily win by deploying in Japan.<br>
</span>
Moreover,<br>
it takes half the time and money that development would require.<br>
If there's something among the products being developed by someone in this world<br>
that you have your eye on, please let me know.<br>
I may not be a genius,<br>
but I won't set up a wasteful form for you.<br>`,
        annotations: [
        ],
      },
      zh: {
        title: "给愚蠢地抄写黑板内容的优等生们的本地化应用建议",
        category: "",
        content: `曾经，在我准备入学考试的时候，<br>
每一个小时，<br>
每一堂课，<br>
<span class="hightlight">
总有一个傻瓜拼命地把老师写在黑板上的内容抄写到笔记本上。<br>
</span>
他那热心学习的态度<br>
受到老师的表扬，<br>
周围的朋友们也评价他："那家伙很认真，很了不起。"<br>
但老实说，我是这么想的：<br>
"这家伙，为什么要做这么愚蠢的事？"<br>
因为，<br>
老师已经分发了与黑板内容相同的讲义。<br>
课堂是基于这些讲义进行的，<br>
老师口头解释的仅仅是补充事项。<br>
<span class="hightlight">
我完全不做笔记。<br>
</span>
相反，我提前阅读老师给的讲义，<br>
在课堂上，我只记下<br>
老师口头讲述的、讲义上没有写的内容。<br>
自己做的笔记，终究只是老师制作的讲义的劣化版。<br>
那么，<br>
<span class="hightlight">
为什么需要从头开始重新创建完全相同的内容呢？<br>
</span>
现在，<br>
我在商业世界中也经常看到同样的现象。<br>
<span class="hightlight">
现在，全世界充满了免费公开的优秀开源资源。<br>
尽管如此，<br>
许多企业还是固执地<br>
希望从头开始开发。<br>
老实说，我无法理解。<br>
</span>
例如，电子邮件咨询表单。<br>
使用谷歌表单不是很好吗？<br>
输入界面清晰易懂，<br>
输入结果的汇总规格也非常易用。<br>
由世界最顶尖智囊团谷歌制作的表单价格是...<br>
0日元。<br>
另一方面，你制作的程序上会逐渐退化的自定义表单价格是...<br>
15,000日元。<br>
对不起，但我必须说，<br>
我当然会选择谷歌表单。<br>
你的朋友和家人恐怕也会说同样的话，不是吗？<br>
我想说的很简单。<br>
<span class="hightlight">
从头开始进行不必要的开发（而且很可能是劣质的），<br>
花费金钱和时间，<br>
这不是很荒谬吗？<br>
</span>
这就是我的观点。<br>
但是，你不会认为没有原创产品就无法与其他公司区分开来吧？<br>
<span class="hightlight">
差异化应该体现在质量或内容上，而不是生产过程中。<br>
</span>
即使是自主开发，也不过是某物的劣化版或复制品。<br>
我经常去酒吧，<br>
我认为那些从头开发鸡尾酒的人很了不起。<br>
有些人参加比赛，获得认可，制作出全球知名的饮品。<br>
在日本，也诞生了雪国、竹子、百万美元等独特的鸡尾酒。<br>
确实有些店铺因为新的、独特的、卓越的鸡尾酒而闻名。<br>
但这只是少数。<br>
与开源一样，鸡尾酒配方是公开的。<br>
所以，与其从头创建，<br>
作为生意，<br>
重现别人已经创造的美味鸡尾酒，成本效益要高得多。<br>
<span class="hightlight">
创造可能不被认可，<br>
又耗费时间和金钱的<br>
原创作品的理由是什么呢？<br>
</span>
如果你想获得作为顶级工匠的荣誉，我能理解。<br>
如果你的目标是成为工匠，我肯定想支持你。<br>
但如果你想做生意，<br>
我仍然不理解。<br>
越想越觉得，<br>
我想称赞你是一个浪费金钱和时间的天才。<br>
你创建的美丽设计的程序<br>
与整洁抄写讲义内容并加上一些荧光标记的笔记没有什么不同。<br>
<br>
你可能会获得一个微小的、微小的奖牌，那就是坐在你旁边的朋友的赞美。<br>
但还有什么呢？<br>
如果你喜欢抄经，<br>
喜欢涂色，<br>
喜欢从头创建源代码，<br>
那么作为爱好，你应该一辈子继续这样做。<br>
如果<br>
你能创建一个超越OpenAI的大型语言模型AI，<br>
那么你应该去创建它。<br>
如果你能创建一个超越亚马逊的电子商务网站，<br>
你也应该去创建它。<br>
然而，<br>
这个世界上能做到这些事的人很少。<br>
也许只有年轻时的比尔·盖茨或史蒂夫·乔布斯能做到。<br>
或者山姆·奥特曼或埃隆·马斯克也可以。<br>
如果你或你周围的人是这样的人才...<br>
不必因为不是天才而气馁。<br>
<span class="hightlight">
如果你不能自己创建，可以借用或购买。<br>
值得庆幸的是，从全球角度来看，日本市场是超级蓝海。
</span>
日语这种语言的障碍太高了。<br>
许多海外的优质产品<br>
没有进入日本。<br>
他们无法进入。<br>
如果是这样，<br>
<br>
向产品开发者支付费用，<br>
借用他们的成果，<br>
在日本推广就能轻松获胜。<br>
<span class="hightlight">
在日本推广就能轻松获胜。<br>
</span>
而且，<br>
所需的时间和金钱只有开发的一半。<br>
如果在这个世界上某人正在开发的产品中，<br>
有你看中的，请告诉我。<br>
我虽然不是天才，<br>
但我不会为你设置无用的表单。<br>`,
        annotations: [
        ],
      },
    },
  },
  {
    id: "02",
    date: "2024.4.18",
    link: "/marketing/02",
    translations: {
      ja: {
        title:
          "「いいね」ウィルスを撒き散らすインフルエンサーに踊らされるバカなカラスになるな",
        category: "",
        content: `町を歩けば、税金の無駄遣いで行われている耳障りな工事現場。<br>
SNSを見れば、収入と影響力を売りにする目障りなインフルエンサー。<br>
私が嫌いな2つのことです。<br>
<br>
「一に投稿、二に投稿、三、四がなくて五に投稿」<br>
これが、SNSで成功するための黄金律だと言われています。<br>
毎日コツコツ投稿していれば、いつかは大きな影響力を持つインフルエンサーになれる!<br>
そう盲信している人も多いでしょう。<br>
でも、私はこれには異論があります。<br>
「一に実績、二に実績、三、四がなくて五に投稿」<br>
じゃないかと。<br>
どんなに投稿しても、中身のない情報ばかり発信していれば、そりゃあフォロワーは増えません。<br>
逆に本当に価値のある情報を発信していれば、<br>
投稿頻度が少なくても人は集まってくる。<br>
これは、SNSだけでなく、ビジネスの世界でも同じこと。<br>
特に今は、InstagramやTikTokを使えば、<br>
誰でも簡単に「インフルエンサー」を名乗れる時代です。<br>
美容、グルメ、投資、プログラミング......。<br>
どんな分野でも、「インフルエンサー」と呼ばれる人たちが、自らのノウハウを惜しみなく公開して<br>
います。<br>
彼らの投稿に「いいね」を押し、<br>
彼らの教材を買えば、<br>
<br>
きっとあなたも「インフルエンサー」への近道を歩めるはず。<br>
...と、ここまで聞けば、話は簡単に思えるかもしれません。<br>
でも、ちょっと待ってください。<br>
その「インフルエンサー」と呼ばれる人たち、<br>
本当に「自分の専門分野」で名をあげた人なのでしょうか?<br>
そういった9割以上の人の"本業"は<br>
「影響力を高めるノウハウ」<br>
をSNSで売ることだと思っています。<br>
19世紀アメリカのゴールドラッシュで一番儲けたのは誰か?<br>
金を掘り当てた人ではありません。<br>
ツルハシや作業服を売った人です。<br>
これと同じことが、インフルエンサーマーケティングの世界でも起きています。<br>
「フォロワー10万人達成!副業で月収100万円!」<br>
「たった3ヶ月で人気インフルエンサーに!」<br>
こんな触れ込みで、高額なオンラインサロンやセミナー、教材を売りつける<br>
"なんちゃってインフルエンサー" が、SNS上にあちこち。<br>
彼らは、本当に宣伝文句通りの成功を収めたのでしょうか?<br>
それとも、「成功者」を演じることが彼らの商売なのでしょうか?<br>
言ってしまえば、彼らの "本業" は、<br>
あなたのようにインフルエンサーになりたい人からお金を巻き上げることなのかもしれません。<br>
彼らが本当に金を掘り当てたとも限りません。<br>
私たちが外から見てわかるのは、<br>
金を掘る道具でビジネスをしているということだけ。<br>
だから、実際にはもう金は採掘されつくしてないかもしれない。<br>
<br>
金を掘る道具だけで商売をするのであれば、<br>
それはもうネズミ溝と何も変わりません。<br>
それはもうインフルエンザウィルスを撒き散らすよりもタチが悪い。<br>
もし本当にインフルエンサーになるのであれば、<br>
せっかく高いお金を払うのであれば、<br>
金を現役で掘り当てられる本物のインフルエンサーから学ぶべきでしょう。<br>
自ら成功を掴み取った人だから伝えられる、<br>
"真のノウハウ" を学ぶべきでしょう。<br>
そう思いませんか?<br>
でも、その見極め方は難しい。<br>
パッと見ただけでは、<br>
本物のインフルエンサーも偽物のインフルエンサーも、区別がつきません。<br>
むしろ、偽物のインフルエンサーの方が、<br>
もっともらしいことを言って人を惹きつけるのがうまかったりする。<br>
そう、まるで童話に出てくる「カラスと狐」のように。<br>
狐が、愛想笑いを浮かべてカラスにこう話しかけるのです。<br>
「おや、そちらはカラスさんですね!あなたは実に姿が良くて美しい。きっと、歌声も綺麗なんで<br>
しょうね。ぜひ一度、その歌声を聞かせていただけませんか?」<br>
するとカラスは、とても嬉しくなって「カーカー」と鳴いてみせました。<br>
ところが次の瞬間、くちばしに咥えていたチーズを落としてしまったのです。<br>
狐は飛びつくようにしてチーズを受け取り、こう言ったのでした。<br>
「ありがとう、カラスさん。あなたの歌声はとても美しかったですよ」<br>
カラスは、騙されたことにも気づかず、有頂天になってその場を立ち去ったとか。<br>
この狡猾な狐のように、巧みな話術でもって人を丸め込む "バカにとってのインフルエンサーたち<br>
"。<br>
<br>
彼らの罠に嵌らないためには、どうすればいいのか。<br>
1つは、「バカなカラスにならない」こと。<br>
欲に目がくらんで、うまい話に飛びつくのは愚者。<br>
いつも冷静で、批判的な目を持つこと。<br>
もう1つは、「狐の尻尾(本性)を見抜く」こと。<br>
そのインフルエンサーが、<br>
本当に自分の "本業" で成功した人物なのかを、<br>
徹底的に調べるのです。<br>
言うは易し、行うは難し、かもしれません。<br>
でも、あなたの貴重な時間とお金を投資する対象は、本物を選ぶべき。<br>
そこを見極めるための労力は、惜しんではいけません。<br>
本物のインフルエンサーから学び始めたとき、<br>
きっとあなたの人生は思いもよらない方向に広がり、<br>
ビジネスは予想外の速度と規模で成長を遂げるはずです。<br>
さぁ、あなたはどうしますか?<br>
偽物のインフルエンサーにチーズを奪われるバカなカラスになりますか?<br>
それとも、狡猾な狐の尻尾を見抜く賢いカラスになりますか?<br>
バカは風邪を引かないと言います。<br>
カラスになれば、何も得られませんが、<br>
もしかしたらインフルエンサーの「いいね」ウィルスに感染したとも気づかずに、<br>
元気で幸せに暮らし続けられるのかもしれません。<br>
まぁ、そう考えると悪いことばかりではないかもしれません笑<br>
ただ、もし本物の「インフルエンサー」としての成功を目指したいのであれば、<br>
"真に実績のある人物" を見極める目を養う方法を我々が教えます。<br>
<br>
本物から学び、自分の価値を磨き上げることで、<br>
きっとあなたは単なるフォロワーではなく、<br>
真の影響力を持つ存在へと成長できるはずです。<br>`,
        annotations: [
        ],
      },
      en: {
        title:
          "Don't Be a Foolish Crow Dancing to the Tune of Influencers Spreading the \"Like\" Virus",
        category: "",
        content: `Walking through town, there are jarring construction sites wasting tax money.<br>
Looking at social media, there are eyesore influencers selling their income and influence.<br>
These are two things I hate.<br>
<br>
"First post, second post, nothing third or fourth, and fifth post"<br>
This is said to be the golden rule for success on social media.<br>
If you post diligently every day, you'll eventually become an influencer with great influence!<br>
Many people blindly believe this.<br>
But, I have a different opinion about this.<br>
Shouldn't it be: "First results, second results, nothing third or fourth, and fifth post"?<br>
No matter how much you post, if you're only sharing content without substance, you won't gain followers.<br>
Conversely, if you share truly valuable information,<br>
people will gather around you even if you post infrequently.<br>
This is true not only for social media but also in the business world.<br>
Especially now, with Instagram and TikTok,<br>
it's an era where anyone can easily call themselves an "influencer."<br>
Beauty, gourmet food, investment, programming...<br>
In any field, people called "influencers" generously share their know-how.<br>
If you press "like" on their posts,<br>
if you buy their educational materials,<br>
<br>
surely you too can walk the shortcut to becoming an "influencer."<br>
...Up to this point, the story might seem simple.<br>
But wait a moment.<br>
These people called "influencers,"<br>
are they really people who have made a name for themselves in "their field of expertise"?<br>
I believe that for more than 90% of such people, their "real job" is<br>
selling "know-how to increase influence"<br>
on social media.<br>
Who made the most money during the 19th century American Gold Rush?<br>
It wasn't the people who struck gold.<br>
It was the people who sold pickaxes and work clothes.<br>
The same thing is happening in the world of influencer marketing.<br>
"Achieved 100,000 followers! Monthly income of 1 million yen through side business!"<br>
"Became a popular influencer in just 3 months!"<br>
"Pseudo-influencers" who sell expensive online salons, seminars, and educational materials with such catchphrases<br>
are all over social media.<br>
Have they truly achieved the success they advertise?<br>
Or is their business to play the role of a "successful person"?<br>
In other words, their "real job" might be<br>
to take money from people like you who want to become influencers.<br>
They might not have actually struck gold themselves.<br>
What we can see from the outside is<br>
only that they're doing business with gold-digging tools.<br>
So, in reality, the gold might have already been mined out.<br>
<br>
If they're just doing business with gold-digging tools,<br>
that's no different from a rat trap.<br>
That's even worse than spreading the influenza virus.<br>
If you truly want to become an influencer,<br>
if you're going to pay a high price anyway,<br>
you should learn from genuine influencers who can currently strike gold.<br>
You should learn the "true know-how"<br>
that can only be conveyed by someone who has achieved success themselves.<br>
Don't you think so?<br>
But, it's difficult to discern.<br>
Just by looking,<br>
you can't distinguish between real influencers and fake ones.<br>
Rather, fake influencers might be<br>
better at saying plausible things to attract people.<br>
Yes, just like in the fable of "The Crow and the Fox."<br>
The fox speaks to the crow with a friendly smile:<br>
"Oh, you're Mr. Crow! You look very handsome and beautiful. I'm sure your singing voice is beautiful too. Could you please let me hear your voice just once?"<br>
The crow, feeling very pleased, cawed "Caw, caw."<br>
But in the next moment, it dropped the cheese it had been holding in its beak.<br>
The fox quickly snatched the cheese and said:<br>
"Thank you, Mr. Crow. Your singing voice was very beautiful."<br>
The crow, not even realizing it had been deceived, left the scene in high spirits.<br>
Like this cunning fox, "influencers for fools" who skillfully manipulate people with their eloquent speech.<br>
<br>
How can we avoid falling into their traps?<br>
One way is to "not be a foolish crow."<br>
It's foolish to be blinded by greed and jump at sweet-sounding stories.<br>
Always stay calm and maintain a critical eye.<br>
Another way is to "see through the fox's tail (true nature)."<br>
Thoroughly investigate<br>
whether that influencer is truly<br>
someone who has succeeded in their "real job."<br>
Easier said than done, perhaps.<br>
But the object of your valuable time and money investment should be the real deal.<br>
You shouldn't spare any effort to discern this.<br>
When you begin learning from genuine influencers,<br>
your life will surely expand in unexpected directions,<br>
and your business will grow at an unexpected speed and scale.<br>
Now, what will you do?<br>
Will you be a foolish crow who gets their cheese stolen by fake influencers?<br>
Or will you be a wise crow who sees through the cunning fox's tail?<br>
They say fools don't catch colds.<br>
If you become a crow, you won't gain anything,<br>
but maybe, without even realizing you've been infected by the influencer's "like" virus,<br>
you can continue to live healthily and happily.<br>
Well, when you think about it that way, it might not be all bad, haha.<br>
However, if you want to aim for success as a genuine "influencer,"<br>
we will teach you how to cultivate an eye for discerning "truly accomplished individuals."<br>
<br>
By learning from the real deal and polishing your own value,<br>
surely you can grow to be not just a mere follower,<br>
but an entity with true influence.<br>`,
        annotations: [
        ],
      },
      zh: {
        title: "不要成为被散播\"点赞\"病毒的网红操控的愚蠢乌鸦",
        category: "",
        content: `走在街上，看到浪费税金进行的刺耳工程现场。<br>
浏览社交媒体，看到以收入和影响力为卖点的刺眼网红。<br>
这是我讨厌的两件事。<br>
<br>
"第一发帖，第二发帖，没有第三第四，第五发帖"<br>
这被称为在社交媒体成功的黄金法则。<br>
如果每天坚持发帖，总有一天会成为拥有巨大影响力的网红！<br>
许多人盲目相信这点。<br>
但我对此有不同意见。<br>
难道不应该是："第一成绩，第二成绩，没有第三第四，第五发帖"吗？<br>
无论发多少帖子，如果只分享没有实质内容的信息，粉丝也不会增加。<br>
相反，如果分享真正有价值的信息，<br>
即使发帖频率低，人们也会聚集过来。<br>
这不仅适用于社交媒体，在商业世界也是如此。<br>
特别是现在，使用Instagram和TikTok，<br>
是一个任何人都能轻易自称"网红"的时代。<br>
美容、美食、投资、编程……<br>
在任何领域，被称为"网红"的人们都慷慨地分享自己的知识。<br>
如果你给他们的帖子点"赞"，<br>
如果你购买他们的教材，<br>
<br>
你肯定也能走上成为"网红"的捷径。<br>
……听到这里，故事可能看起来很简单。<br>
但是，请稍等。<br>
这些被称为"网红"的人，<br>
真的是在"自己的专业领域"中成名的人吗？<br>
我认为超过90%这类人的"本职工作"是<br>
在社交媒体上销售<br>
"提高影响力的诀窍"。<br>
19世纪美国淘金热中谁赚得最多？<br>
不是找到金子的人。<br>
而是卖镐头和工作服的人。<br>
同样的事情也发生在网红营销的世界里。<br>
"粉丝达10万！副业月收入100万日元！"<br>
"仅3个月成为人气网红！"<br>
用这样的宣传语销售昂贵的在线沙龙、研讨会和教材的<br>
"伪网红"遍布社交媒体。<br>
他们真的取得了宣传语中所说的成功吗？<br>
还是说，扮演"成功人士"是他们的生意？<br>
换句话说，他们的"本职工作"可能是<br>
从像你这样想成为网红的人身上骗取金钱。<br>
他们自己可能并没有真正淘到金子。<br>
我们从外部能看到的是，<br>
他们只是用挖金工具做生意。<br>
所以，实际上金子可能已经被开采殆尽了。<br>
<br>
如果他们只是用挖金工具做生意，<br>
那和老鼠陷阱没什么区别。<br>
这比散播流感病毒还要恶劣。<br>
如果你真的想成为网红，<br>
既然要花高价，<br>
就应该向能够当下淘到金子的真正网红学习。<br>
应该学习<br>
只有自己获得成功的人才能传授的"真正诀窍"。<br>
你不这么认为吗？<br>
但是，辨别真伪很难。<br>
仅凭外表，<br>
无法区分真假网红。<br>
反而，假网红可能<br>
更擅长说似是而非的话来吸引人。<br>
是的，就像寓言中的"乌鸦和狐狸"一样。<br>
狐狸面带友善的微笑对乌鸦说：<br>
"哦，你是乌鸦先生！你看起来英俊又美丽。你的歌声一定也很美吧。能让我听一次你的声音吗？"<br>
乌鸦感到非常高兴，"呱呱"地叫了起来。<br>
但下一刻，它丢掉了嘴里叼着的奶酪。<br>
狐狸迅速抢过奶酪，说道：<br>
"谢谢你，乌鸦先生。你的歌声真美。"<br>
乌鸦甚至没意识到被骗，得意洋洋地离开了现场。<br>
像这只狡猾的狐狸一样，"愚人的网红们"以巧妙的言辞操控人们。<br>
<br>
我们如何避免落入他们的陷阱？<br>
一种方法是"不做愚蠢的乌鸦"。<br>
被贪欲蒙蔽双眼，追逐甜言蜜语是愚蠢的。<br>
始终保持冷静，持有批判的眼光。<br>
另一种方法是"看穿狐狸的尾巴（真相）"。<br>
彻底调查<br>
那个网红是否真的是<br>
在"本职工作"中成功的人。<br>
说起来容易做起来难，也许。<br>
但值得你投入宝贵时间和金钱的对象应该是真品。<br>
你不应该吝啬辨别真伪的努力。<br>
当你开始向真正的网红学习时，<br>
你的生活肯定会朝着意想不到的方向扩展，<br>
你的业务将以意想不到的速度和规模增长。<br>
现在，你会怎么做？<br>
你会成为被假网红偷走奶酪的愚蠢乌鸦吗？<br>
还是会成为看穿狡猾狐狸尾巴的聪明乌鸦？<br>
俗话说傻人不会感冒。<br>
如果你成为乌鸦，虽然得不到任何东西，<br>
但也许，甚至没意识到自己已经被网红的"点赞"病毒感染，<br>
你可以继续健康快乐地生活。<br>
嗯，这样想来，也许也不全是坏事，哈哈。<br>
然而，如果你想追求成为真正"网红"的成功，<br>
我们将教你如何培养辨别"真正有成就的人"的眼光。<br>
<br>
通过向真正的成功者学习，提升自己的价值，<br>
你肯定能成长为不仅仅是一个追随者，<br>
而是一个拥有真正影响力的存在。<br>`,
        annotations: [
        ],
      },
    },
  },
  {
    id: "03",
    date: "2024.4.18",
    link: "/marketing/03",
    translations: {
      ja: {
        title:
          "誤解だらけの「おもてなし」:日本企業の海外戦略に足りないものとは?",
        category: "",
        content: `ニューヨークの一等地にオープンした高級和食レストラン。<br>
着物姿の店員が深々とお辞儀をし、「いらっしゃいませ」と日本語で迎えます。<br>
「おもてなしの精神」に溢れた、まさに日本人だからこそ出来るハイクオリティなサービス。<br>
......と、多くの日本人は思っているでしょう。<br>
ところが、この「日本風おもてなし」が海外マーケティングにおける落とし穴であることに、ほとんど<br>
の日本企業は気づいていません。<br>
実は、世界中どこに行っても、高いお金を払えば「おもてなし」はされます。<br>
それは日本に限ったことではありません。<br>
でも、それって本当の意味での「おもてなし」なんでしょうか?<br>
あなたが海外のレストランで高額な食事をしたとします。<br>
ウェイターは丁寧で、サービスは完璧。<br>
でも、それって単なる「サービスの対価」じゃありませんか?<br>
一方、日本では、なんとお金を払わなくても「おもてなし」してくれることがあります。<br>
例えば、暑い日に店に入ったら、「暑いでしょう?お茶をどうぞ」と無料でお茶を出してくれる。<br>
あるいは、この店が海外に出店し、現地のルールに合わせて「お茶の提供は一杯まで!」と決め<br>
たとします。<br>
それでも、日本人スタッフであれば「ごめんなさいねー、熱いから飲ましてあげたいんだけど、お<br>
茶は一杯までだから。代わりにお水持ってきますね」と言うでしょう。<br>
しかも、代金もチップも払っていないにもかかわらず、です。<br>
これこそが、本当のおもてなしなんです。<br>
多くの日本企業は、形式的な「おもてなし」を輸出しようとしています。着物を着て、深々とお辞儀<br>
をして......。<br>
でも、外国人が本当に感動するのは、そんな形式的なものではありません。<br>
<br>
彼らが感動するのは、日本人の自然な気遣いや心遣いなんです。<br>
それは、お金を払ったからといって受けられるサービスではありません。<br>
むしろ属人的で、計算されていない親切さなのです。<br>
ある日本の電機メーカーが、日本と同じ厳格な品質管理基準をアメリカでも適用したそうです。<br>
その結果、製品コストが高騰し、市場シェアを大きく落としました。<br>
何が問題だったのでしょうか?<br>
アメリカ市場では、日本のような厳格さは求められていませんでした。<br>
むしろ「適度な品質」と「手頃な価格」のバランスを重視していたんです。<br>
日本式のこだわりが、かえって競争力を失わせる結果になりました。<br>
言ってみれば、一流の寿司職人がハンバーガーを握ろうとしているようなもの。<br>
日本人の技術はたしかに素晴らしい。<br>
ところが、海外のお客さんが求めているものからはズレている。そういったことがよくあります。<br>
「でも、日本の細やかな精神とおもてなし、そして技術は、世界に誇れるものじゃないか!」<br>
そう思っている方、残念ながらそれは違います。<br>
世界の人々が求めているのは、「形式的なおもてなし」ではありません。<br>
彼らが求めているのは、日本人なら自然と出てくる、ホスピタリティに溢れたおもてなしなんです。<br>
見た目の「日本らしさ」にこだわるあまり、現地の人々のニーズを無視してはいけません。<br>
あなたの会社はどうですか?<br>
まだ「形だけの日本式」にこだわり続けてないですか?<br>
もしかしたら、あなたの会社の海外戦略も、世界中の人々に笑いものにされているかもしれませ<br>
ん。<br>
「ああ、また日本人が来たよ。今度は何を押し付けてくれるんだろう?」なんて陰で囁かれている<br>
かも......。<br>
ですが、心配はご無用。本当のおもてなしの精神さえ理解していれば、それを海外で活かす方法<br>
はあります。<br>
<br>
ただし、それには適切なアプローチが必要です。<br>
まず、海外の労働者と日本の労働者の思考は、まったく異なることを理解すること。<br>
日本的な「おもてなし」の心を持ちつつ、それを現地の文化に合わせて表現する必要があるので<br>
す。<br>
「空気を読め」なんて言葉、向こうじゃ通用しません。むしろ「日本人はAirが見えるのか!?」なん<br>
て真顔で聞かれます(笑)<br>
だからこそ、適切なディレクションが重要なんです。<br>
「現地の人間の特性を知り、彼らを通じておもてなしの心を伝える方法を見つける」<br>
これが、グローバル戦略の鍵になります。<br>
アメリカ人に「頑張ってください」なんて言っても、「何を?いつまでに?どれくらい?」と質問攻め<br>
にあうだけ。<br>
彼らには具体的な指示が必要なんです。日本人のように「なんとなく」や「よしなに」などは通用し<br>
ません。<br>
ただし、日本的な気遣いの心は忘れずに。<br>
アメリカ人とて、口では「Yes」と言っても、本当はやりたくないのかもしれません。その気持ちを察<br>
する力こそが、日本人の強みなのです。<br>
古の日本にインスパイアされてしまった「形だけ日本風」のおもてなしの強要は、もう終わりにしま<br>
せんか?<br>
形だけの日本風おもてなしは、慣れない外国人に無理やり箸で寿司を食べさせようとするような<br>
もの。確かに日本的ですが、口に運ぶ前に寿司はボロボロでしょう。<br>
そうではなく、現代の日本人も自然と持ち合わせている「本質的なおもてなし精神」こそが、海外<br>
戦略を成功させる鍵なのです。<br>`,
        annotations: [
        ],
      },
      en: {
        title:
          "Omotenashi Misunderstood: What's Missing in Japanese Companies' Overseas Strategy?",
        category: "",
        content: `A high-end Japanese restaurant opens in a prime location in New York.<br>
Staff dressed in kimono bow deeply and welcome guests with "Irasshaimase" in Japanese.<br>
A high-quality service overflowing with the "spirit of omotenashi" that only Japanese people can provide.<br>
...or so many Japanese people think.<br>
However, most Japanese companies fail to realize that this "Japanese-style omotenashi" is actually a pitfall in overseas marketing.<br>
In fact, if you pay enough money, you can receive "omotenashi" anywhere in the world.<br>
It's not something limited to Japan.<br>
But is that the true meaning of "omotenashi"?<br>
Let's say you have an expensive meal at a restaurant overseas.<br>
The waiter is polite, and the service is perfect.<br>
But isn't that just "service in exchange for payment"?<br>
In contrast, in Japan, sometimes you receive "omotenashi" even without paying.<br>
For example, when you enter a store on a hot day, they might say, "You must be hot. Please have some tea," and offer you tea for free.<br>
Or let's say that store expands overseas and, following local rules, decides "only one cup of tea per customer!"<br>
Even then, a Japanese staff member would probably say, "I'm sorry, I'd like to offer you more since it's hot, but we're limited to one cup per customer. I'll bring you some water instead."<br>
And this is despite the fact that you haven't paid for the meal or left a tip yet.<br>
This is true omotenashi.<br>
Many Japanese companies try to export formal "omotenashi." Wearing kimono, bowing deeply...<br>
But what truly impresses foreigners isn't such formalities.<br>
<br>
What impresses them is the natural thoughtfulness and consideration of Japanese people.<br>
It's not a service you can receive just because you paid for it.<br>
Rather, it's a personal and uncalculated kindness.<br>
Apparently, a Japanese electronics manufacturer applied the same strict quality control standards in America as in Japan.<br>
As a result, product costs soared, and they lost significant market share.<br>
What was the problem?<br>
In the American market, the same strictness as in Japan wasn't required.<br>
Rather, they valued the balance between "moderate quality" and "affordable price."<br>
The Japanese commitment to excellence actually resulted in a loss of competitiveness.<br>
It's like a first-class sushi chef trying to make hamburgers.<br>
Japanese techniques are certainly wonderful.<br>
However, they often don't align with what overseas customers are looking for.<br>
"But Japanese meticulous spirit, omotenashi, and technology are something to be proud of globally!"<br>
If you think so, unfortunately, that's not correct.<br>
What people around the world are looking for is not "formal omotenashi."<br>
What they seek is the hospitality-filled omotenashi that naturally comes from Japanese people.<br>
Don't ignore the needs of local people by being overly fixated on the "Japanese appearance."<br>
How about your company?<br>
Are you still insisting on a "superficial Japanese style"?<br>
Perhaps your company's overseas strategy is being laughed at by people all over the world.<br>
"Ah, here come the Japanese again. I wonder what they'll impose on us this time?" They might be whispering behind your back...<br>
But, no need to worry. As long as you understand the true spirit of omotenashi, there are ways to utilize it overseas.<br>
<br>
However, it requires the right approach.<br>
First, understand that the thinking of overseas workers and Japanese workers is completely different.<br>
While having the heart of Japanese "omotenashi," you need to express it in a way that fits the local culture.<br>
Phrases like "read the air" don't work over there. Rather, you might be asked with a straight face, "Can Japanese people see Air!?" (laugh)<br>
That's why appropriate direction is important.<br>
"Know the characteristics of local people and find ways to convey the heart of omotenashi through them."<br>
This becomes the key to a global strategy.<br>
If you tell an American "Ganbatte kudasai" (Do your best), you'll just be bombarded with questions like "For what? Until when? How much?"<br>
They need specific instructions. Vague terms like "somehow" or "as appropriate" that work for Japanese don't apply to them.<br>
However, don't forget the heart of Japanese consideration.<br>
Even Americans might say "Yes" verbally while not really wanting to do something. The ability to sense those feelings is the strength of Japanese people.<br>
Shall we put an end to forcing "superficial Japanese-style" omotenashi inspired by ancient Japan?<br>
Superficial Japanese-style omotenashi is like forcing foreigners who aren't accustomed to using chopsticks to eat sushi with them. It might be Japanese, but the sushi will fall apart before it reaches their mouth.<br>
Instead, the "essential spirit of omotenashi" that even modern Japanese people naturally possess is the key to successful overseas strategies.<br>`,
        annotations: [
        ],
      },
      zh: {
        title: "被误解的\"款待之道\"：日本企业海外战略缺少的是什么？",
        category: "",
        content: `在纽约黄金地段开业的高级日本料理餐厅。<br>
身着和服的店员深深鞠躬，用日语迎接客人说"欢迎光临"。<br>
充满"款待之心"的正是只有日本人才能提供的高质量服务。<br>
……很多日本人都这么认为吧。<br>
然而，大多数日本企业没有意识到，这种"日式款待"在海外营销中实际上是个陷阱。<br>
事实上，在世界各地，只要付足够的钱，都能获得"款待"。<br>
这并不是日本特有的。<br>
但这真的是"款待"的真正含义吗？<br>
假设你在海外餐厅享用了一顿昂贵的餐点。<br>
服务员很有礼貌，服务也很完美。<br>
但这不就是"付费换取的服务"吗？<br>
相比之下，在日本，有时甚至不付钱都能得到"款待"。<br>
例如，炎热的日子进入商店，他们可能会说："您一定很热吧？请喝茶"，并免费提供茶水。<br>
或者，假设这家店扩展到海外，按照当地规定决定"每位顾客只提供一杯茶！"<br>
即便如此，日本员工可能会说："对不起，天气热，我很想给您多倒些茶，但规定每位顾客只能一杯。我给您拿些水来吧。"<br>
而且，这是在你还没有支付餐费或小费的情况下。<br>
这才是真正的款待。<br>
许多日本企业试图输出形式上的"款待"。穿和服，深深鞠躬……<br>
但真正打动外国人的并非这些形式。<br>
<br>
打动他们的是日本人自然流露的体贴和关怀。<br>
这不是你付了钱就能得到的服务。<br>
而是一种个人的、不计较的善意。<br>
据说，一家日本电器制造商在美国采用了与日本相同的严格品质管理标准。<br>
结果，产品成本飙升，市场份额大幅下降。<br>
问题出在哪里？<br>
在美国市场，并不要求像日本那样的严格标准。<br>
相反，他们更看重"适度品质"和"合理价格"之间的平衡。<br>
日本式的坚持反而导致了竞争力的丧失。<br>
这就像一流寿司师傅尝试制作汉堡一样。<br>
日本人的技术确实很棒。<br>
然而，它们常常与海外顾客寻求的东西不符。<br>
"但是日本人细腻的精神、款待和技术不是值得全球骄傲的吗！"<br>
如果你这么想，很遗憾，这是不对的。<br>
世界各地的人们寻求的不是"形式上的款待"。<br>
他们寻求的是日本人自然流露的充满热情的款待。<br>
不要因为过分执着于"日本外表"而忽略当地人的需求。<br>
你的公司呢？<br>
是否仍然坚持"表面上的日式风格"？<br>
也许你公司的海外战略正被全世界的人嘲笑。<br>
"啊，日本人又来了。这次他们会强加什么给我们呢？"他们可能在背后窃窃私语……<br>
但是，不用担心。只要理解真正的款待精神，就有办法在海外发挥它的作用。<br>
<br>
然而，这需要正确的方法。<br>
首先，要理解海外员工和日本员工的思维方式完全不同。<br>
在拥有日本"款待"之心的同时，需要以适合当地文化的方式表达。<br>
像"读空气"这样的表达在那边行不通。反而可能会被认真地问："日本人能看见空气吗！？"（笑）<br>
因此，适当的指导非常重要。<br>
"了解当地人的特性，找到通过他们传递款待之心的方法。"<br>
这成为全球战略的关键。<br>
如果你对美国人说"加油"，你只会被一堆问题轰炸："为了什么？到什么时候？多少？"<br>
他们需要具体的指示。日本人可以理解的模糊词语如"某种程度上"或"酌情处理"对他们不适用。<br>
然而，不要忘记日本人体贴的心。<br>
即使是美国人，口头上说"是"，内心可能并不想做。感知这些情感的能力是日本人的优势。<br>
我们是否应该结束强加受古代日本启发的"表面日式"款待？<br>
表面的日式款待就像强迫不习惯使用筷子的外国人用筷子吃寿司。虽然很日本，但寿司在送到嘴边前就会散落。<br>
相反，即使是现代日本人自然拥有的"本质款待精神"才是成功海外战略的关键。<br>`,
        annotations: [
        ],
      },
    },
  },
];

export const dataFx: ArticleType[] = [
  {
    id: "01",
    date: "2024.4.18",
    link: "/fx/01",
    translations: {
      ja: {
        title:
          "「月利50%」を生む錬金術?投資の神様 vs 怪しいFX業者、あなたはどちらを信じますか",
        category: "",
        content: `こんな魅力的な言葉を耳にしたことはありませんか?<br>
「FXで毎月50%の利益を出せる投資術!」<br>
驚異的な利回りですよね!<br>
まるで錬金術のようです。<br>
では、ちょっと現実的な計算をしてみましょう。<br>
1万円を元手に月利50%のFXで1年間運用したら、いくらになると思いますか?<br>
なんと、約130万円です!<br>
まさに夢のような数字ですね!<br>
「うわっ、すげぇ!この投資法は億万長者への特急列車だ!」<br>
......と思って業者に飛びつく前に、<br>
まず一度、冷静になりましょう。<br>
<span class="hightlight">
  「メダリオン・ファンド」を知っていますか?<br>
かなり伝説的なヘッジファンドです。<br>
</span>
数学者のジム・シモンズ率いる、まさに現代の賢者たちがつくり上げました。<br>
残念ながら、ジム・シモンズは2024年に亡くなってしまいましたが。<br>
<span class="hightlight">
  そんなメダリオン・ファンドの過去30年間の平均リターン、何%だと思いますか?<br>
答えは、約<strong>62</strong>%です。<br>
</span>
小さな頃から一流の教育を受け、<br>
一流のビジネススクールを出て、<br>
知能指数も、努力の量も他を圧倒する彼らが生み出す年平均リターンが、<br>
年利62%なんです。<br>
「年利で62%?さっきの投資法は月利50%だから、年利換算したら激ヤバなのでは?」<br>
いや、ちょっと待ってください。<br>
この年利62%という数字、実は神がかり的な数字なんです。<br>
<span class="hightlight">
  世界最高の投資家と呼ばれるウォーレン・バフェットでさえ、この数字には及びません。<br>
</span>
さあ、ここで考えてみましょう。<br>
<span class="hightlight">
  世界最高の頭脳集団が「年利62%」<br>
あなたが見つけたFX業者が「月利50%」<br>
どちらが本物だと思いますか?<br>
</span>
月利50%ということは、単純計算(12倍)でも年利600%。<br>
つまりメダリオン・ファンドの約10倍です。<br>
小学生でも計算できます。<br>
そして小学生でも、おかしいということに気づくはずです。<br>
この違和感に気づけた人は、より正確に計算してみてください。<br>
<br>
<div class="border border-black dark:border-white p-5">
  <strong>《複利を考慮した計算式》</strong><br />
  元手の1万円を1.5倍(50%増)すると1万5,000円。><br />
次に、1万5,000円をさらに1.5倍(50%増)すると2万2,500円。><br />
これを12回繰り返すと、1年で1万円が約130万円になります。><br />
つまり、月利50%を年利に換算すると、なんと1万3,000%。><br />
結論:メダリオン・ファンドの200倍以上のリターンということになります><br />
</div>
<br />
<span class="hightlight">
  私のブログを読んでいる人には、こういった違和感にぜひ「秒で」反応してほしいんです。<br />
</span>
本当に月利50%を出せるFXの天才がいたとしたら、<br>
その人は今頃ノーベル賞を総なめにしているはずです。<br>
いや、もはやノーベル賞どころか、<br>
世界の為替市場を牛耳っているかもしれません。<br>
でも、現実はどうでしょう?<br>
そのFXの「天才」は、<br>
あなたのようなただの凡人からお金を集めようとしていませんか?<br>
錬金術師が錬金の材料費を庶民から集めているようなものです。<br>
確かに、リスクを取らなければ大きな利益は得られません。<br>
ですが、その<span class="hightlight">リスクは「計算されたもの」でなければなりません。</span><br>
私なら迷わず、<br>
メダリオン・ファンドに全額を突っ込みます!<br>
どう考えても合理的で論理的だからです。<br>
仮に詐欺に遭うにしても、<br>
どうせなら自分の目利き力にプライドを持って、<br>
堂々と騙されにいきます(笑)。<br>
せめて一流の詐欺師に騙されたいものです。<br>
<span class="hightlight">
  「月利<strong>50%</strong>」という幻想ではなく、<br>
着実に成長する本物のビジネスにこそ、<br>
あなたの大切な資金を使う価値があるのです。<br>
</span>
まやかしの数字を追いかけるより、<br>
自分の手で築き上げる方が確実です。<br>
さあ、あなたはどうしますか?<br>
<span class="hightlight">
  <strong>FX</strong>業者が語る非現実的な数字に惑わされますか?<br>
それとも、<br>
自分の手で本物のビジネスを始めますか?<br>
</span>
このブログをここまで読んでも、<br>
まだ「月利50%がもし本当だったら......。やっぱりその可能性を捨てきれない!」<br>
と考えている人がいるなら、<br>
今すぐ連絡してください。<br>
3分あれば十分です。<br>
あなたが「わざわざ騙されるための選択」をしようとしていることを、<br>
3分で気づかせます。<br>
この世界の現実をちゃんと直視してもらった上で、<br>
月利50%という幻想の世界から抜け出して成功を掴むために、<br>
一緒に「本物のビジネス」を作っていきましょう。<br>`,
        annotations: [
        ],
      },
      en: {
        title:
          "Alchemy That Yields \"50% Monthly Returns\"? Investment Guru vs. Suspicious FX Broker, Which One Would You Believe?",
        category: "",
        content: `Have you ever heard such an attractive phrase?<br>
"An investment technique that generates 50% profit every month with FX!"<br>
An astonishing return rate, isn't it?<br>
It's like alchemy.<br>
Let's do a realistic calculation.<br>
Starting with 10,000 yen and investing it in FX with a 50% monthly return for one year, how much do you think it would become?<br>
Believe it or not, about 1.3 million yen!<br>
Truly a dream-like figure!<br>
"Wow, amazing! This investment method is an express train to becoming a millionaire!"<br>
...Before you jump at the broker thinking this,<br>
let's calm down for a moment.<br>
<span class="hightlight">
Have you heard of the "Medallion Fund"?<br>
It's quite a legendary hedge fund.<br>
</span>
It was created by mathematician Jim Simons and a team of modern-day sages.<br>
Unfortunately, Jim Simons passed away in 2024.<br>
<span class="hightlight">
What do you think the Medallion Fund's average return has been over the past 30 years?<br>
The answer is about <strong>62</strong>%.<br>
</span>
People who received first-class education from childhood,<br>
graduated from top business schools,<br>
and whose intelligence and effort overwhelm others,<br>
produce an average annual return of 62%.<br>
"62% annual return? The investment method mentioned earlier gives 50% monthly, so wouldn't that be insanely high when converted to annual return?"<br>
Wait a moment.<br>
This 62% annual return is actually a godlike figure.<br>
<span class="hightlight">
Even Warren Buffett, considered the world's greatest investor, doesn't match this figure.<br>
</span>
Now, let's think about this.<br>
<span class="hightlight">
The world's greatest minds achieve "62% annual return"<br>
The FX broker you found promises "50% monthly return"<br>
Which one do you think is genuine?<br>
</span>
A 50% monthly return, by simple calculation (multiplied by 12), is a 600% annual return.<br>
That's about 10 times the Medallion Fund's performance.<br>
Even an elementary school student can calculate this.<br>
And even an elementary school student would notice something's off.<br>
If you've noticed this discrepancy, try calculating more accurately.<br>
<br>
<div class="border border-black dark:border-white p-5">
  <strong>《Calculation considering compound interest》</strong><br />
  Start with 10,000 yen, multiply by 1.5 (50% increase) to get 15,000 yen.<br />
  Next, multiply 15,000 yen by 1.5 (another 50% increase) to get 22,500 yen.<br />
  Repeat this 12 times, and in one year, 10,000 yen becomes about 1.3 million yen.<br />
  So, a 50% monthly return converted to an annual return is a staggering 13,000%.<br />
  Conclusion: This would be more than 200 times the return of the Medallion Fund.<br />
</div>
<br />
<span class="hightlight">
  I want readers of my blog to react to such discrepancies "in seconds."<br />
</span>
If there were truly an FX genius who could generate a 50% monthly return,<br>
that person would have swept all the Nobel Prizes by now.<br>
No, beyond Nobel Prizes,<br>
they might be controlling the world's foreign exchange market.<br>
But what's the reality?<br>
Isn't this FX "genius"<br>
trying to collect money from ordinary people like you?<br>
It's like an alchemist collecting material costs for alchemy from the common people.<br>
Indeed, without taking risks, you can't gain significant profits.<br>
However, that <span class="hightlight">risk must be "calculated."</span><br>
Without hesitation, I would put all my money into the Medallion Fund!<br>
Because it's rational and logical by any standard.<br>
Even if I were to be scammed,<br>
I'd rather be proudly scammed,<br>
going in with my head held high, trusting my judgment (laughs).<br>
I'd at least want to be deceived by a first-class scammer.<br>
<span class="hightlight">
  Instead of the illusion of "<strong>50%</strong> monthly returns,"<br>
  it's worth using your precious funds for<br>
  a genuine business that grows steadily.<br>
</span>
Rather than chasing illusory numbers,<br>
building something with your own hands is more certain.<br>
So, what will you do?<br>
<span class="hightlight">
  Will you be misled by the unrealistic numbers touted by <strong>FX</strong> brokers?<br>
  Or,<br>
  will you start a genuine business with your own hands?<br>
</span>
Even after reading this blog to this point,<br>
if you're still thinking, "What if the 50% monthly return is real... I can't completely dismiss that possibility!"<br>
contact me right away.<br>
Three minutes is enough.<br>
I'll make you realize in 3 minutes<br>
that you're about to "choose to be deceived."<br>
After facing the reality of this world,<br>
let's escape the illusory world of 50% monthly returns and grasp success,<br>
by creating a "genuine business" together.<br>`,
        annotations: [
        ],
      },
      zh: {
        title: "产生\"月利50%\"的炼金术？投资之神 vs 可疑的外汇交易商，您会相信哪一个？",
        category: "",
        content: `您有没有听过这样诱人的话？<br>
"外汇交易每月能产生50%利润的投资技巧！"<br>
惊人的回报率，不是吗？<br>
简直像炼金术。<br>
让我们做一个现实的计算。<br>
用10,000日元作为本金，在月利50%的外汇交易中投资一年，您认为会变成多少钱？<br>
信不信由您，约130万日元！<br>
真是梦幻般的数字！<br>
"哇，太神奇了！这种投资方法是通往百万富翁的特快列车！"<br>
……在您对交易商急不可待之前，<br>
让我们先冷静一下。<br>
<span class="hightlight">
您听说过"奖章基金"吗？<br>
这是一个相当传奇的对冲基金。<br>
</span>
它是由数学家吉姆·西蒙斯领导的现代智者团队创建的。<br>
不幸的是，吉姆·西蒙斯在2024年去世了。<br>
<span class="hightlight">
您认为奖章基金过去30年的平均回报率是多少？<br>
答案是约<strong>62</strong>%。<br>
</span>
从小接受一流教育，<br>
毕业于顶尖商学院，<br>
智力和努力都远超他人的他们，<br>
产生的年平均回报率为62%。<br>
"年利62%？前面提到的投资方法是月利50%，那么换算成年利不是超级高吗？"<br>
等一下。<br>
这62%的年回报率实际上是个神级数字。<br>
<span class="hightlight">
即使是被认为是世界最伟大投资者的沃伦·巴菲特，也达不到这个数字。<br>
</span>
现在，让我们思考一下。<br>
<span class="hightlight">
世界最聪明的头脑达到"年利62%"<br>
您找到的外汇交易商承诺"月利50%"<br>
您认为哪一个是真实的？<br>
</span>
月利50%，通过简单计算（乘以12），是600%的年回报率。<br>
那大约是奖章基金业绩的10倍。<br>
即使是小学生也能计算出来。<br>
而且即使是小学生也会注意到有些不对劲。<br>
如果您注意到这种差异，请尝试更准确地计算。<br>
<br>
<div class="border border-black dark:border-white p-5">
  <strong>《考虑复利的计算》</strong><br />
  从10,000日元开始，乘以1.5（增加50%）得到15,000日元。<br />
  接着，将15,000日元再乘以1.5（再增加50%）得到22,500日元。<br />
  重复这个过程12次，一年内，10,000日元变成约130万日元。<br />
  因此，月利50%换算成年利是惊人的13,000%。<br />
  结论：这将是奖章基金回报率的200多倍。<br />
</div>
<br />
<span class="hightlight">
  我希望我博客的读者能够对这种差异"秒级"反应。<br />
</span>
如果真有能产生50%月回报率的外汇天才，<br>
那个人现在应该已经包揽所有诺贝尔奖了。<br>
不，超越诺贝尔奖，<br>
他们可能已经控制了世界外汇市场。<br>
但现实是什么？<br>
这个外汇"天才"<br>
是不是在试图从像您这样的普通人那里收集钱？<br>
这就像炼金术士从平民那里收集炼金材料费一样。<br>
确实，不冒险就不能获得巨大利润。<br>
但是，那个<span class="hightlight">风险必须是"经过计算的"。</span><br>
毫不犹豫，我会把所有钱都投入奖章基金！<br>
因为按任何标准来看，这都是理性和合逻辑的。<br>
即使我要被骗，<br>
我也宁愿自豪地被骗，<br>
昂首进入，相信自己的判断（笑）。<br>
我至少希望被一流的骗子欺骗。<br>
<span class="hightlight">
  与其相信"月利<strong>50%</strong>"的幻觉，<br>
  不如将您宝贵的资金用于<br>
  稳步增长的真正业务。<br>
</span>
比起追逐虚幻的数字，<br>
用自己的双手建立更为确定。<br>
那么，您会怎么做？<br>
<span class="hightlight">
  您会被<strong>外汇</strong>交易商吹嘘的不现实数字误导吗？<br>
  还是，<br>
  会用自己的双手开始一项真正的业务？<br>
</span>
即使读到博客的这个部分，<br>
如果您仍在想，"如果月利50%是真的……我不能完全排除这种可能性！"<br>
立即联系我。<br>
三分钟就足够了。<br>
我会在3分钟内让您意识到<br>
您正准备"选择被欺骗"。<br>
在面对这个世界的现实后，<br>
让我们逃离月利50%的幻想世界，把握成功，<br>
一起创造一个"真正的业务"。<br>`,
        annotations: [
        ],
      },
    },
  },
  {
    id: "02",
    date: "2024.4.18",
    link: "/fx/02",
    translations: {
      ja: {
        title:
          "\"プロ\" FXトレーダーの正体:あなたの財布から魔法のように消える資金の謎",
        category: "",
        content: `「MAMで複数口座を同時に運用し、リスクを抑えているので安心です!」<br>
「LAMMとPAMMを駆使して、月利50%を実現しています!」<br>
一般人には頭が痛くなりそうな略語のオンパレード。<br>
でも心配しないでください。<br>
あなたが理解できないのは、<br>
あなたが愚かだからではありません。<br>
理解できないように作られているからです。<br>
さて、ここでFXクイズです。<br>
<span class="hightlight">
  <strong>Q.MAM、LAMM、PAMM</strong>の違いは何でしょう?これらはすべて<strong>FX</strong>に関する言葉です。<br>
</span>
答えられませんか?
<span class="hightlight">
  大丈夫です。<br>
多くの "プロ" トレーダーも答えられません。<br>
なぜなら、<br>
これらは「お金を巻き上げるための呪文」のようなものだからです。<br>
</span>
カッコよく聞こえる言葉ですが、<br>
その呪文の効果は<br>
「知らぬ間にあなたの財布の中身を消し去る」<br>
という恐ろしいもの。<br>
では、これらの"魔法"の正体を暴いてみましょう。<br>
<span class="hightlight">
  <strong>MAM</strong>は「マルチ・アカウント・マネージャー」の略。<br>
つまり、複数の口座を同時に管理するということです。<br>
</span>
次の2つはどうでしょう?<br>
あるサイトの説明を合わせて見てみましょう。<br><br>
<table class="border-collapse border-px [&_td]:border [&_td]:p-5 [&_td]:border-black [&_td]:dark:border-white">
  <tr>
    <td>PAMM(パーセンテージ・アロ
      ケーション・マネージメント・モ
      ジュール)</td>
    <td>トレーダーは複数の投資家からの出資で口座を管理し
      ます。利益と損失は投資家の割合に応じて分配されま
      す。</td>
  </tr>
  <tr>
    <td>LAMM(ロット・アロケーション・マ
      ネージメント・モジュール)</td>
    <td>パーセンテージではなく取引のロットサイズに基づいて
      利益と損失を割り当てます。投資家は好みのロットサイ
      ズを選択できます。</td>
  </tr>
</table>
<br>
......眠くなってきましたか?<br>
まさにそれが狙いなんです。<br>
理解しようとするのを諦めさせるのが......<br>
要するに、これらは<br>
「あなたのお金を効率的に"運用"する方法」<br>
というわけです。<br>
「運用」を「消失」に置き換えれば、より正確かもしれませが・・・<br>
「そんな小難しい内容を理解するよりも、私の担当トレーダーは本当にプロフェッショナルです<br>
よ!実績をみてください!」<br>
そうですか。<br>
<span class="hightlight">
  では、そのプロフェッショナルに聞いてみてください。<br>
「なぜ<strong>MAM</strong>だけ<strong>M</strong>が一つ少ないんですか?」<br>
</span>
答えられなかったら、<br>
この質問にきちんと答えられない業者は、<br>
まずその時点でアウト。<br>
そして、もしこれらの質問に相手が正しく答えることができたなら、<br>
今度は新たな疑問が湧いてくるはずです。<br>
「これって、ただの仕組みじゃん?」って。<br>
こっちのレストランではフォークでご飯を食べ、<br>
また別のレストランでは箸で食べる。<br>
フォークも箸もご飯を食べるための手段(仕組み)なだけであって、<br>
「フォークで食った飯の方がうまい!」なんてことはないですよね?<br>
<span class="hightlight">
  <strong>FX</strong>業者が口にする<strong>MAM</strong>や<strong>LAMM</strong>といったワードも実はただの仕組みに過ぎず、<br>
「それを使ったから儲かる」という類のものではありません。<br>
</span>
和食屋か洋食屋かというような違いであって、<br>
「どっちが美味い」とか「どっちが儲かる」<br>
みたいな話じゃないんです。<br>
MAMに至っては「MAM=マルチ・アカウント・マネージメント」、<br>
つまり「和食屋と洋食屋を両方同時(=マルチ)にやったら儲かるんじゃね?」<br>
という発想となんら変わりありません。<br>
そして実際は、両方やったからといって儲かるわけでもありません。<br>
そもそも、<br>
あなたの話し相手である「プロトレーダー」とは、一体何者なのでしょうか?<br>
本当に「プロ」だと言うのなら、<br>
あれこれ小難しい話をあなたに説明したうえで、<br>
コピートレードをさせる必要なんてないと思いませんか?<br>
<span class="hightlight">
  本当のプロトレーダーなら、顧客のお金を預かって運用するはずです。<br>
でも、彼らはそうしません。<br>
なぜでしょう?<br>
そう、違法だからです。<br>
人のお金を預かって運用するには、ライセンスが必要なんです。<br>
</span>
「プロ」のライセンスは、<br>
残念ながら100円ショップでは売っていません。<br>
もし、あなたがまだ「この人は信用できる!」と思っているなら、<br>
その「プロ」トレーダーに<br>
「月利50%を出せるエビデンス」<br>
を見せてもらってください。<br>
<span class="hightlight">
  本物なら、私も喜んで投資します。<br>
</span>
そして、その利益で月へ旅行にでも行きましょう。<br>
残念ながら、月にたどり着く前にあなたの資金は地上に舞い落ちていくでしょうが......。<br>
<span class="hightlight">
  結局のところ、<br>
FXの世界で「プロ」と呼ばれる人の多くは、<br>
投資の才能ではなく、<br>
あなたのような人から<br>
金を巻き上げる才能に長けているだけなのです。<br>
</span>
でも、心配しないでください。<br>
この記事を読んでもなお、彼らを信じたいのなら・・・まあ、仕方ありません。<br>
<span class="hightlight">
  人間誰しも、恋と金儲けには盲目になるものです。<br>
ただし、その前に私に相談してください。<br>
</span>
せめて、騙される準備くらいはしっかりしましょう!<br>
人生には「失敗」と「大失敗」があります。<br>
FXは後者になる可能性が高いです。<br>
前者で済ませたいなら、<br>
その資金で本物のビジネスを始めることをオススメします。<br>
魔法使いのような"プロ"トレーダーを信じるのか?<br>
地に足のついたビジネスを始めるのか?<br>
選択はあなた次第です。<br>
ただし、選んだ後の結果もあなた次第です。<br>
月に旅行する際はお気をつけて。<br>`,
        annotations: [
        ],
      },
      en: {
        title:
          "The True Identity of \"Professional\" FX Traders: The Mystery of Funds that Disappear Magically from Your Wallet",
        category: "",
        content: `"It's safe because I manage multiple accounts simultaneously with MAM and keep risks low!"<br>
"I achieve 50% monthly returns using LAMM and PAMM!"<br>
A parade of acronyms that would give ordinary people a headache.<br>
But don't worry.<br>
You're not failing to understand because<br>
you're stupid.<br>
It's designed to be incomprehensible.<br>
Now, here's an FX quiz.<br>
<span class="hightlight">
<strong>Q. What's the difference between MAM, LAMM, and PAMM</strong>? These are all terms related to <strong>FX</strong>.<br>
</span>
Can't answer?
<span class="hightlight">
That's okay.<br>
Many "professional" traders can't answer either.<br>
Because<br>
these are like "spells to extract money."<br>
</span>
They sound impressive,<br>
but the effect of these spells is<br>
the terrifying ability to "make the contents of your wallet disappear without you noticing."<br>
Let's expose the true identity of these "magic tricks."<br>
<span class="hightlight">
<strong>MAM</strong> stands for "Multi-Account Manager."<br>
In other words, it means managing multiple accounts simultaneously.<br>
</span>
What about the other two?<br>
Let's look at explanations from a website.<br><br>
<table class="border-collapse border-px [&_td]:border [&_td]:p-5 [&_td]:border-black [&_td]:dark:border-white">
  <tr>
    <td>PAMM (Percentage Allocation Management Module)</td>
    <td>Traders manage accounts with funds from multiple investors. Profits and losses are distributed according to the investor's proportion.</td>
  </tr>
  <tr>
    <td>LAMM (Lot Allocation Management Module)</td>
    <td>Profits and losses are allocated based on the lot size of trades rather than percentages. Investors can choose their preferred lot size.</td>
  </tr>
</table>
<br>
...Starting to feel sleepy?<br>
That's exactly the intention.<br>
To make you give up trying to understand...<br>
In essence, these are<br>
"methods to efficiently 'manage' your money."<br>
Perhaps it would be more accurate to replace "manage" with "make disappear"...<br>
"Rather than understanding such complicated content, my account manager is truly a professional! Look at their track record!"<br>
Is that so?<br>
<span class="hightlight">
  Then, ask that professional this question:<br>
  "Why does <strong>MAM</strong> have one fewer <strong>M</strong> than the others?"<br>
</span>
If they can't answer,<br>
any broker who cannot properly answer this question is<br>
immediately out of consideration.<br>
And if they correctly answer these questions,<br>
a new doubt should arise in your mind.<br>
"Isn't this just a mechanism?" you might think.<br>
In one restaurant, you eat rice with a fork,<br>
in another restaurant, you eat with chopsticks.<br>
Both fork and chopsticks are just means (mechanisms) to eat rice,<br>
and it's not like "rice eaten with a fork tastes better," right?<br>
<span class="hightlight">
  Words like <strong>MAM</strong> and <strong>LAMM</strong> that <strong>FX</strong> brokers mention are actually just mechanisms,<br>
  not something that "makes you profit because you use them."<br>
</span>
It's like the difference between a Japanese restaurant and a Western restaurant,<br>
not about "which tastes better" or "which is more profitable."<br>
As for MAM, "MAM = Multi-Account Management,"<br>
which is no different from the idea that "running both a Japanese restaurant and a Western restaurant simultaneously (= multi) might be profitable."<br>
And in reality, doing both doesn't necessarily make you profitable.<br>
To begin with,<br>
who exactly is this "professional trader" you're talking to?<br>
If they're truly "professional,"<br>
don't you think they wouldn't need to explain all these complicated things to you<br>
and then have you do copy trading?<br>
<span class="hightlight">
  A real professional trader would take customers' money and manage it.<br>
  But they don't do that.<br>
  Why?<br>
  Yes, because it's illegal.<br>
  To manage other people's money, you need a license.<br>
</span>
Unfortunately, a "professional" license<br>
isn't sold at 100-yen shops.<br>
If you still think "This person is trustworthy!"<br>
ask that "professional" trader to<br>
show you "evidence of achieving 50% monthly returns."<br>
<span class="hightlight">
  If it's real, I'd gladly invest too.<br>
</span>
And with those profits, let's go on a trip to the moon.<br>
Unfortunately, before reaching the moon, your funds will likely flutter back down to earth...<br>
<span class="hightlight">
  In the end,<br>
  many people called "professionals" in the FX world<br>
  are not talented in investment,<br>
  but rather<br>
  skilled at extracting money from people like you.<br>
</span>
But don't worry.<br>
If you still want to believe them even after reading this article... well, it can't be helped.<br>
<span class="hightlight">
  Everyone is blind when it comes to love and making money.<br>
  But before that, consult with me.<br>
</span>
At least, let's prepare properly to be deceived!<br>
In life, there are "failures" and "major failures."<br>
FX is likely to be the latter.<br>
If you want to settle for the former,<br>
I recommend starting a real business with that funding.<br>
Will you believe in "professional" traders who are like wizards?<br>
Or will you start a grounded business?<br>
The choice is yours.<br>
However, the results after choosing are also up to you.<br>
Take care when traveling to the moon.<br>`,
        annotations: [
        ],
      },
      zh: {
        title: "\"专业\"外汇交易员的真面目：从您钱包中神奇消失的资金之谜",
        category: "",
        content: `"我使用MAM同时管理多个账户，控制风险，所以很安全！"<br>
      "我利用LAMM和PAMM，实现了月收益50%！"<br>
      这些缩略词让普通人头疼不已。<br>
      但别担心。<br>
      您之所以无法理解，<br>
      不是因为您愚笨。<br>
      而是它本来就设计得难以理解。<br>
      现在，这里有个外汇测验。<br>
      <span class="hightlight">
      <strong>问：MAM、LAMM和PAMM</strong>之间有什么区别？这些都是与<strong>外汇</strong>相关的术语。<br>
      </span>
      回答不上来？
      <span class="hightlight">
      没关系。<br>
      许多"专业"交易员也回答不上来。<br>
      因为，<br>
      这些就像是"榨取金钱的咒语"。<br>
      </span>
      它们听起来很酷，<br>
      但这些咒语的效果是<br>
      "在您不知不觉中清空钱包"<br>
      这种可怕的结果。<br>
      那么，让我们揭穿这些"魔法"的真面目。<br>
      <span class="hightlight">
      <strong>MAM</strong>是"多账户管理器"的缩写。<br>
      也就是说，同时管理多个账户。<br>
      </span>
      另外两个呢？<br>
      让我们看看某网站的解释。<br><br>
      <table class="border-collapse border-px [&_td]:border [&_td]:p-5 [&_td]:border-black [&_td]:dark:border-white">
        <tr>
          <td>PAMM（百分比分配管理模块）</td>
          <td>交易员使用多个投资者的资金管理账户。利润和亏损按投资者的比例分配。</td>
        </tr>
        <tr>
          <td>LAMM（手数分配管理模块）</td>
          <td>基于交易手数大小而非百分比分配利润和亏损。投资者可以选择自己喜欢的手数大小。</td>
        </tr>
      </table>
      <br>
      ……开始感到困倦了吗？<br>
      这正是他们的目的。<br>
      让您放弃理解……<br>
      本质上，这些是<br>
      "高效'管理'您的钱的方法。"<br>
      也许把"管理"换成"消失"会更准确……<br>
      "与其理解这些复杂内容，我的账户经理真的很专业！看看他们的业绩！"<br>
      是吗？<br>
      <span class="hightlight">
        那么，问那位专业人士这个问题：<br>
        "为什么<strong>MAM</strong>比其他两个少一个<strong>M</strong>？"<br>
      </span>
      如果他们回答不上来，<br>
      任何不能正确回答这个问题的经纪人<br>
      都应该立即被排除。<br>
      而如果他们能正确回答这些问题，<br>
      您心中应该会产生新的疑问。<br>
      "这不就是个机制吗？"您可能会想。<br>
      在一家餐厅，您用叉子吃饭，<br>
      在另一家餐厅，您用筷子吃饭。<br>
      叉子和筷子都只是吃饭的工具（机制），<br>
      不可能说"用叉子吃的饭更好吃"，对吧？<br>
      <span class="hightlight">
        外汇经纪人提到的<strong>MAM</strong>和<strong>LAMM</strong>等词汇实际上只是机制，<br>
        并不是"因为使用它们就能赚钱"的东西。<br>
      </span>
      这就像日本料理店和西餐厅的区别，<br>
      而不是关于"哪个更好吃"或"哪个更赚钱"。<br>
      至于MAM，"MAM=多账户管理"，<br>
      这与"同时（=多）经营日本料理店和西餐厅就能赚钱"的想法没有任何区别。<br>
      而实际上，两者都做并不一定能赚钱。<br>
      首先，<br>
      您交谈的"专业交易员"到底是什么人？<br>
      如果他们真的"专业"，<br>
      难道您不认为他们不需要向您解释这些复杂的事情，<br>
      然后让您进行跟单交易吗？<br>
      <span class="hightlight">
        真正的专业交易员会接受客户的钱并进行管理。<br>
        但他们不这样做。<br>
        为什么？<br>
        是的，因为这是非法的。<br>
        要管理他人的资金，需要执照。<br>
      </span>
      不幸的是，"专业"执照<br>
      不在100日元商店出售。<br>
      如果您仍然认为"这个人值得信任！"<br>
      请要求那位"专业"交易员<br>
      向您展示"能够实现月收益50%的证据"。<br>
      <span class="hightlight">
        如果是真的，我也很乐意投资。<br>
      </span>
      然后，用这些利润一起去月球旅行吧。<br>
      不幸的是，在到达月球之前，您的资金可能会飘落回地球……<br>
      <span class="hightlight">
        最终，<br>
        外汇世界中被称为"专业人士"的许多人<br>
        并非在投资方面有才华，<br>
        而是<br>
        擅长从像您这样的人那里榨取金钱。<br>
      </span>
      但别担心。<br>
      如果即使读了这篇文章后您仍然想相信他们……好吧，没办法。<br>
      <span class="hightlight">
        人人都在爱情和赚钱面前变得盲目。<br>
        但在此之前，请咨询我。<br>
      </span>
      至少，让我们好好准备被骗吧！<br>
      生活中有"失败"和"重大失败"。<br>
      外汇很可能是后者。<br>
      如果您想止步于前者，<br>
      我建议用那笔资金开始一个真正的业务。<br>
      您会相信像魔法师一样的"专业"交易员吗？<br>
      还是会开始一个脚踏实地的业务？<br>
      选择权在您手中。<br>
      然而，选择后的结果也由您决定。<br>
      去月球旅行时请保重。<br>`,
        annotations: [
        ],
      },
    },
  },
];

export const RankData: ArticleType[] = [
  {
    id: "01",
    date: "2024.4.18",
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
