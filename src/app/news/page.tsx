"use client"
import Pagination from "@/components/common/Pagination";
import { Title } from "@/components/common/Title";
import { NewItem } from "@/components/news/NewItem";
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function News() {

    const ref = useScrollAnimations()

    return (
        <main ref={ref}>
            <section className="my-20 px-5">
                <div className="w-full max-w-[1320px] mx-auto">
                    <div className="flex justify-end">
                        <div className="">
                            <div className="md:max-w-[438px] w-full max-w-[353px] md:flex-1 relative flex rounded-[30px] overflow-hidden border-2 border-[#3E7976]">
                                <input type="text" className="h-[45px] flex-1 md:text-[24px] text-[18px] font-bold px-5" placeholder="フリーワード検索" />
                                <button className="h-[45px] w-[86px] flex items-center justify-center bg-[#3E7976]">
                                    <img src="/assets/images/ic-btn-search.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-20 mt-10 md:mb-10 mb-5">
                        <Title title="お知らせ一覧" icon={<><img className="max-md:w-[29px]" src="/assets/images/ic-announce.svg" alt="" /></>} />
                    </div>
                    <div className="border-y border-[#666] divide-y divide-[#666]">
                        {[
                            {
                                id: '1',
                                link: '/',
                                date: '2025/06/20',
                                title: 'タイトルが入ります。タイトルが入ります。タイトルが入ります。'
                            },
                            {
                                id: '2',
                                link: '/',
                                date: '2025/06/20',
                                title: 'タイトルが入ります。タイトルが入ります。タイトルが入ります。'
                            },
                            {
                                id: '3',
                                link: '/',
                                date: '2025/06/20',
                                title: 'タイトルが入ります。タイトルが入ります。タイトルが入ります。'
                            },
                        ].map((item) => (
                            <NewItem link={item.link} date={item.date} title={item.title} key={item.id} />
                        ))}
                    </div>
                    <div className="flex justify-center items-center md:mt-[50px] mt-5">
                        <Pagination
                            totalPages={10}
                            onPageChange={(page) => console.log("Page:", page)}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
