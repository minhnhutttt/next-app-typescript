const Message = () => {
    return (
        <section className="bg-white relative pb-[30vw] md:pb-[20vw] md:px-[2vw] px-[4vw]">
            <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-x-5">
                <div className="col-span-12 md:col-span-4 relative mb-10">
                    <div className="sticky top-5">
                        <div className="relative w-full mb-3 rounded-[0.4rem] overflow-hidden">
                            <div className="pt-[126.57%]"></div>
                            <video
                                className="size-full object-cover absolute top-0 left-0 is-playing"
                                data-lazy-video=""
                                data-lazy=""
                                data-autoplay="true"
                                preload="none"
                                loop
                                muted
                                autoPlay
                                src="/assets/images/e170985f.mp4"
                                playsInline
                                data-loaded="true"
                            ></video>
                        </div>
                        <div className="flex justify-between gap-x-2">
                            <a href="/" className="border hover:bg-[#f4f4f4] cursor-pointer transition-colors duration-300 flex items-center justify-center border-grey rounded-[0.4rem] w-full md:h-12">
                                <img className="h-8" src="/assets/images/youtube.webp" alt="" />
                            </a>
                            <a href="/" className="border hover:bg-[#f4f4f4] cursor-pointer transition-colors duration-300 flex items-center justify-center border-grey rounded-[0.4rem] w-full md:h-12">
                                <img className="h-8" src="/assets/images/youtube.webp" alt="" />
                            </a>
                            <a href="/" className="border hover:bg-[#f4f4f4] cursor-pointer transition-colors duration-300 flex items-center justify-center border-grey rounded-[0.4rem] w-full md:h-12">
                                <img className="h-8" src="/assets/images/youtube.webp" alt="" />
                            </a>
                            <a href="/" className="border hover:bg-[#f4f4f4] cursor-pointer transition-colors duration-300 flex items-center justify-center border-grey rounded-[0.4rem] w-full md:h-12">
                                <img className="h-8" src="/assets/images/youtube.webp" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-10 md:col-start-9 flex flex-col">
                    <h2 className="h4 text-black mb-5">Co-Founder / Visionary / Speaker / Author / Advisor</h2>
                    <div className="text-black/50 block mb-8 md:mb-10">
                        <p>Sunny Bonnell is a bestselling author, visionary leadership and brand expert, and Co-Founder and CEO of <a href="httpmd://www.wearemotto.com" target="_blank" rel="noopener" className="underline">Motto®</a>, a world-leading brand transformation agency for companies in the tech and innovation space. She is also the Co-founder of VisionCamp®, a leadership experience that helps executive teams crystallize vision and align their people around it.</p><br />
                        <p>Alongside her partner-in-crime, Co-Founder and COO <a href="httpmd://wearemotto.com/founder/ashleigh-hansberger" target="_blank" rel="noopener" className="underline">Ashleigh Hansberger</a>, Sunny inspires big thinking across every level of the business. Her leadership influences all aspects of Motto’s work—from shaping the firm’s point of view to guiding Motto® through its next era of growth as it enters its 20th year.</p><br />
                        <p>Sunny has been named to the Thinkers50 Radar, Top 30 Global Gurus in Brand, GDUSA’s Top 25 People to Watch, and is a Webby Award winner for “Setting the standard for innovation and creativity.” She was also named on the cover of SWAGGER as a “Visionary Brand Icon.”</p><br />
                        <p>Sunny is the co-author of <a href="httpmd://amzn.to/2Lb6FHV" target="_blank" rel="noopener" className="underline">Rare Breed</a>: A Guide to Success for the Defiant, Dangerous, and Different, which flips the script on business-as-usual and carves a path for unconventional success. The New York Post declared Rare Breed “one of the top 5 career books of all time.” Seth Godin described it as “Brazen” and “A ruckus to make things better.” USA Today called it “An entire windstorm of original thinking.”</p><br />
                        <p>As an internationally acclaimed keynote speaker for organizations like MasterCard, Microsoft, Dale Carnegie, Fast Company Innovation, Inc., and Inspiring Workplaces, her thought leadership has been featured in every major publication, including Fast Company, Inc., Forbes, Entrepreneur, and The Wall Street Journal. She has appeared on Closing Bell on the NY Stock Exchange, The Breakfast Club, and Yahoo Finance. She currently writes a popular and provocative leadership column for Fast Company.</p><br />
                        <p>Clients include Klayvio, Service Titan, Minnesota Vikings, Virgin, Google, Microsoft, NFL, Hershey’s, Legendary Digital, Impel, Aptos, Twentieth Century Fox, Choice Hotels, Bleecker Street Films, NCC (now Ampersand), Andela, Goodnotes, Hello Alice, NIP Group, Brooklyn Brewery, and hundreds more.</p><br />
                        <p><strong>Work with Sunny for:</strong></p><br />
                        <ul className="list-disc pl-6">
                            <li>Speaking Engagements</li>
                            <li>Long-term Advisory Partnership</li>
                            <li>Conferences, Podcasts, Panels</li>
                            <li>Advisory Board Leadership</li>
                            <li>Executive Coaching</li>
                        </ul><br />
                        <p><strong>What we offer at Motto:</strong></p><br />
                        <ul>
                            <li className="list-style-type: none;">
                                <ul className="list-disc pl-6">
                                    <li>Leadership Workshops</li>
                                    <li>Brand Strategy &amp; Positioning</li>
                                    <li>Naming</li>
                                    <li>Verbal Identity</li>
                                    <li>Visual Identity</li>
                                    <li>Creative Execution</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <a href="/contact" className="u-link is-full">Contact Sunny</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Message;
