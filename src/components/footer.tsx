const Footer = () => {

    return (
      <>
          <div className="flex justify-center items-center bg-[#F8F5D8] md:p-7 p-5 gap-6 max-md:flex-col">
              <div className="flex items-center gap-4">
                  <figure>
                      <img className="max-md:w-[100px]" src="/assets/images/product.png" alt="" />
                  </figure>
                  <p className="font-hiragino font-semibold md:text-[26px] text-[16px] w-[151px]">
                    1パック <br />
                    ¥880〜
                  </p>
              </div>
              <div className="">
                  <a href="https://kanmi.ippuku.store/collections/shikounohosiimo" target="_blank" className="bg-[#FF0000] flex items-center justify-center w-[300px] md:w-[368px] h-[60px] md:h-[85px] text-white md:text-[26px] text-[18px] font-hiragino font-semibold">
                      商品一覧はこちら
                  </a>
              </div>
          </div>
          <footer className="bg-[#92855d]">
              <div className="flex justify-center pt-10 md:pt-[80px] md:pb-[55px] pb-[30px]">
                  <a href="/">
                      <img className="max-md:w-[90px]" src="/assets/images/logo-footer.png" alt="" />
                  </a>
              </div>
              <div className="border-y border-white flex justify-center md:text-[16px] text-[13px] font-semibold font-hiragino text-white md:gap-8 gap-6 md:p-4 p-3">
                  <a href="https://kanmi.ippuku.store/pages/%E3%83%97%E3%83%A9%E3%82%A4%E3%83%90%E3%82%B7%E3%83%BC%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC" target="_blank">プライバシーポリシー</a>
                  <a href="https://kanmi.ippuku.store/pages/%E7%89%B9%E5%AE%9A%E5%95%86%E5%93%81%E5%8F%96%E5%BC%95%E6%B3%95%E3%81%AB%E3%82%88%E3%82%8B%E8%A1%A8%E8%A8%98" target="_blank">特定商品取引法による表記</a>
              </div>
              <p className="text-center md:text-[16px] text-[13px] text-white md:p-5 p-3">© 2023 干味専門 一福 .</p>
          </footer>
      </>
    );
  };
  
  export default Footer;
  