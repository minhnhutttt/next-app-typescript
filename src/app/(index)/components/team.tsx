const Team = () => {
    return (
      <section className="relative md:pt-[180px] px-5 pt-[100px] md:pb-[300px] pb-[150px]">
        <div className="w-full max-w-[1350px] mx-auto text-white">
            <h4 data-scroll className="fade-up text-center md:text-[64px] text-[32px] font-black leaidng-none">Team composition</h4>
            <div data-scroll className="fade-up md:text-[16px] text-[14px] font-medium leading-[1.8] w-full max-w-[857px] mx-auto text-center mt-6 md:mt-12">
                The RIDE project is driven by a diverse team of professionals from various fields, including blockchain technology, the mobility industry, and financial engineering. <br />
                <br />
                Members include experts with project experience at global companies and practitioners with experience in launching new businesses, and have the knowledge and track record necessary to realize innovative services. Masu.
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 md:mt-[80px] mt-8 md:gap-[30px] gap-2.5">
                <div data-scroll className="fade-up ani-group"><img src="/assets/images/team-01.png" alt="" /></div>
                <div data-scroll className="fade-up ani-group"><img src="/assets/images/team-02.png" alt="" /></div>
                <div data-scroll className="fade-up ani-group"><img src="/assets/images/team-03.png" alt="" /></div>
                <div data-scroll className="fade-up ani-group"><img src="/assets/images/team-04.png" alt="" /></div>
            </div>
        </div>
      </section>
    );
  };
  
  export default Team;
  