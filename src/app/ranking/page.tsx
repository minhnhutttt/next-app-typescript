export default function Ranking() {
  return (
    <main>
        <div className="bg-[url('/assets/images/ranking-bg.png')] bg-cover bg-center flex items-center justify-center pt-[120px] h-[80vh] md:h-[70vh] min-h-[120vw] md:min-h-[700px]">
            <div className="w-full max-w-[1266px] mx-auto pb-10 flex justify-center">
                <div className="relative">
                    <img className="max-md:w-[60vw] max-dt:w-[40.764vw]" src="/assets/images/ranking-img.png" alt="" />
                    <div className="absolute left-[70%] md:left-full w-[36vw] md:w-[27.292vw] dt:w-[393px] top-[-30%] md:top-0">
                        <img className="animate-[anim-bounce_1.6s_infinite_ease-in-out]" src="/assets/images/ranking-bubble.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
