"use client"
export default function Company() {
  return (
    <main>
      <div className="h-[240px] bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)] flex justify-center pt-[124px] md:w-[550px] -mt-[100vh]">
        <p className="md:text-[36px] text-[24px] text-white font-semibold">会社概要</p>
      </div>
      <div className="pt-10 px-4 md:pb-[200px] pb-[100px]">
            <div>
                <p className="h-[60px] flex items-center justify-center bg-[#FF7DD3] text-white md;text-[20px] text-[18px]">会社名</p>
                <p className="text-center p-5 md:p-[30px] md:text-[20px] text-[18px] font-light">
                    株式会社 Good Fellows
                </p>
            </div>
            <div>
                <p className="h-[60px] flex items-center justify-center bg-[#FF7DD3] text-white md;text-[20px] text-[18px]">設立年月日</p>
                <p className="text-center p-5 md:p-[30px] md:text-[20px] text-[18px] font-light">
                    2011年8月9日
                </p>
            </div>
            <div>
                <p className="h-[60px] flex items-center justify-center bg-[#FF7DD3] text-white md;text-[20px] text-[18px]">資本金</p>
                <p className="text-center p-5 md:p-[30px] md:text-[20px] text-[18px] font-light">
                500万円
                </p>
            </div>
            <div>
                <p className="h-[60px] flex items-center justify-center bg-[#FF7DD3] text-white md;text-[20px] text-[18px]">所在地</p>
                <p className="p-5 md:p-[30px] md:text-[20px] text-[18px] font-light leading-[1.3]">
                    <span className="md:text-[15px] text-[14px]">〒150-0001</span> <br />
                    東京都渋谷区神宮前6丁目23-4 桑野ビル2階<br />
                    (弊社はリモートワーク推進企業の為、レンタルオフィスを利用しております。)
                </p>
            </div>
            <div>
                <p className="h-[60px] flex items-center justify-center bg-[#FF7DD3] text-white md;text-[20px] text-[18px]">電話番号</p>
                <p className="text-center p-5 md:p-[30px] md:text-[20px] text-[18px] font-light">
                03-6824-8280
                </p>
            </div>
            <div>
                <p className="h-[60px] flex items-center justify-center bg-[#FF7DD3] text-white md;text-[20px] text-[18px]">社員数</p>
                <p className="text-center p-5 md:p-[30px] md:text-[20px] text-[18px] font-light">
                10名
                </p>
            </div>
            <div>
                <p className="h-[60px] flex items-center justify-center bg-[#FF7DD3] text-white md;text-[20px] text-[18px]">所属タレント数</p>
                <p className="text-center p-5 md:p-[30px] md:text-[20px] text-[18px] font-light">
                累計3000名以上
                </p>
            </div>
            <div>
                <p className="h-[60px] flex items-center justify-center bg-[#FF7DD3] text-white md;text-[20px] text-[18px]">会社の目的</p>
                <ul className="p-5 md:p-[30px] md:text-[20px] text-[18px] font-light list-disc">
                    <li>ライブストリーミングにおける配信者（ライバー）の育成ならびにマネジメント</li>
                    <li>広告宣伝の代理業務</li>
                    <li>インターネット等を利用した通信販売業務ならびに各種情報提供サービス</li>
                    <li>音楽、映画、演劇、演芸、講演の制作およびその請負と興行ならびにその施設の運営、請負</li>
                    <li>ラジオ、テレビ放送番組、コマーシャルフィルム、コマーシャルソングの企画、制作、請負ならびに版権事業</li>
                    <li>音声、映像のソフトウェア（ディスク、テープ、フィルム）の企画、制作、製造、販売、貸与ならびに版権事業 キャラクター商品（個性的な名称や特徴を有している人物、動物等の肖像、署名、愛称等を使用したもの）の企画、販売ならびに使用せしめる権利の管理</li>
                    <li>書籍、楽譜等の印刷物の出版、販売</li>
                    <li>企業および個人向けのイベント、研修会、講習会などの各種教育事業に関する企画、立案、制作、運営ならびにコンサルティング業務</li>
                    <li>アパレル製品及び雑貨の企画、デザイン、製造、卸し、販売、輸出入並びにアパレル事業に関するコンサルティング</li>
                </ul>
            </div>
      </div>
    </main>
  );
}
