const VideoReel = () => {
    return (
        <section className="bg-white relative max-md:pt-[20vw] pb-[30vw] md:pb-[20vw]">
            <div className="md:px-[2vw] px-[4vw]">
                <video
                className="size-full object-cover "
                data-lazy-video=""
                data-lazy=""
                data-autoplay="true"
                preload="none"
                loop
                muted
                autoPlay
                src="/assets/images/186784f4.mp4"
                playsInline
                data-loaded="true"
              ></video>
              <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-y-5 md:gap-5 py-[1vw]">
                <div className="col-span-6 md:col-span-12">
                    <p className="js-split">(Speaking reel)</p>
                </div>
                <div className="col-span-6 md:col-span-12 text-right">
                    <p className="js-split">(1:00)</p>
                </div>
            </div>
            </div>
        </section>
    );
};

export default VideoReel;