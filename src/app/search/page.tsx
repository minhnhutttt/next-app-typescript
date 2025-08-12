"use client"
import CardList from "@/components/card/CardList";
import { Button } from "@/components/common/Button";
import { ButtonItem } from "@/components/common/ButtonItem";
import RangeSlider from "@/components/common/RangeSlider";
import { Title } from "@/components/common/Title";
import ToggleButton from "@/components/common/ToggleButton";
import ProductList from "@/components/product/ProductList";
import { dataProducts } from "@/data";
import { dataItems } from "@/data/Items";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useState } from "react";
export default function Search() {

    const ref = useScrollAnimations()

    const [selectedProduct, setSelectedProduct] = useState<Set<string>>(new Set());
    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

    const [isOpen, setIsOpen] = useState(false);
    const [enabledPBOEM, setEnabledPBOEM] = useState(false);
    const [enabledExport, setEnabledExport] = useState(false);

    const [minValue, setMinValue] = useState(1000);
    const [maxValue, setMaxValue] = useState(7000);

    const handleToggleProduct = (id: string) => {
        const newSelected = new Set(selectedProduct);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedProduct(newSelected);
    };

    const handleToggleItem = (id: string) => {
        const newSelected = new Set(selectedItems);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedItems(newSelected);
    };
    return (
        <main ref={ref}>
            <section className="bg-[#DAE9E9] py-6 md:mt-[120px] mt-[70px] px-5">
                <ProductList
                    products={dataProducts.slice(0, 3)}
                />
            </section>

            <section className="px-5 md:pt-[100px] pt-10">
                <div className="w-full max-w-[500px] md:max-w-[1320px] mx-auto">
                    <div className="w-full flex items-center gap-10 md:gap-20 md:px-[90px]">
                        <span className="fade-up"><img className="max-md:w-[82px]" src="/assets/images/girl.png" alt="" /></span>
                        <div className="fade-up flex-1">
                            <div className="flex items-center">
                                <p className="md:text-[40px] text-[24px] font-bold leading-none max-md:text-center">おすすめの商品はこちら！</p>
                            </div>
                        </div>
                    </div>
                    <div className="fade-up md:mt-[52px] mt-8">
                        <div className="px-3 md:px-5 py-7 md:py-[35px] md:border-4 border-2 border-[#ccc] md:rounded-[60px] rounded-[30px] relative">
                            <img className="absolute bottom-full left-10 md:left-44 max-md:max-w-6" src="/assets/images/ic-bubble.png" alt="" />
                            <p className="md:text-[24px] text-[18px] leading-snug w-full max-w-[1160px] mx-auto">
                                説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="fade-up w-full max-w-[500px] md:max-w-[1020px] mx-auto flex items-center gap-5 md:gap-10 mt-5 md:mt-10 max-md:flex-col">
                    <div className="flex-1 max-md:w-full">
                        <input type="text" className="w-full border-2 border-[#3E7976] rounded-[20px] h-[72px] p-5 md:text-[24px] text-[18px] font-bold" placeholder="条件を入力" />
                    </div>
                    <div className=""><Button type={0}>探してもらう</Button></div>
                </div>
            </section>

            <section className="md:mt-[180px] mt-20 px-5">
                <ProductList
                    products={dataProducts}
                    showCheckbox={true}
                    selectedItems={selectedProduct}
                    onToggleItem={handleToggleProduct}
                />
            </section>

            <div className="md:mt-[180px] mt-20 px-5">
                <div className="w-full max-w-[1320px] mx-auto">
                    <Title title="詳細検索" icon={<><img className="max-md:w-[24px]" src="/assets/images/ic-search.svg" alt="" /></>} />
                    <div className="fade-up flex justify-center items-center flex-wrap gap-8 md:gap-10 mt-8 md:mt-10 max-md:flex-col">
                        <p className="md:text-[24px] text-[18px] font-bold max-md:text-center">話し言葉でも大丈夫！<br className="md:hidden" />AIコンシェルジュがサポート</p>
                        <div className="md:max-w-[438px] max-w-[353px] flex-1 relative flex rounded-[30px] overflow-hidden border-2 border-[#3E7976]">
                            <input type="text" className="h-[45px] flex-1 md:text-[24px] text-[18px] font-bold px-5" placeholder="フリーワード検索" />
                            <button className="h-[45px] w-[86px] flex items-center justify-center bg-[#3E7976]">
                                <img src="/assets/images/ic-btn-search.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap md:gap-5 gap-3 md:my-10 my-8 max-md:max-w-[312px] mx-auto">
                        {["商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ",].map((tag, index) => (
                            <label  key={index}
                                className="cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    name="tags"
                                    value={tag}
                                    className="peer hidden"
                                />
                                <span className="flex items-center justify-center w-[96px] h-8 md:w-[184px] md:h-[56px] rounded-full text-center text-[16px] font-bold bg-[#EBEBEB] peer-checked:bg-[#3E7976] duration-300 hover:opacity-70 peer-checked:text-white
                            ">
                                    {tag}
                                </span>
                            </label>
                        ))}
                    </div>
                    <div className="flex justify-center gap-5 md:gap-10">
                        <div className="fade-up relative w-[150px] md:w-[308px]">
                            <select
                                name=""
                                id=""
                                className="w-full h-[49px] md:h-[62px] rounded-[10px] border-2 border-[#3E7976] px-[15px] md:px-[30px] md:text-[24px] text-[18px] font-bold appearance-none pr-10"
                            >
                                <option value="販売温度帯">販売温度帯</option>
                                <option value="販売温度帯">販売温度帯</option>
                            </select>
                            <img
                                src="/assets/images/select-arrow.svg"
                                alt="Arrow"
                                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-[15px] md:w-6"
                            />
                        </div>
                        <div className="fade-up relative w-[150px] md:w-[308px]">
                            <select
                                name=""
                                id=""
                                className="w-full h-[49px] md:h-[62px] rounded-[10px] border-2 border-[#3E7976] px-[15px] md:px-[30px] md:text-[24px] text-[18px] font-bold appearance-none pr-10"
                            >
                                <option value="生産地">生産地</option>
                                <option value="生産地">生産地</option>
                            </select>
                            <img
                                src="/assets/images/select-arrow.svg"
                                alt="Arrow"
                                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-[15px] md:w-6"
                            />
                        </div>
                    </div>
                    <div className="md:mt-10 mt-8 max-md:max-w-[320px] max-md:mx-auto">
                        <div className="fade-up flex justify-center items-center">
                            <button className="text-[#3E7976] md:text-[24px] text-[18px] flex items-center justify-center gap-3" onClick={() => setIsOpen(!isOpen)}>
                                検索条件を追加する
                                <span className={`group relative size-5 flex items-center justify-center ${isOpen && 'active'}`}>
                                    <span className="w-full h-0.5 rounded-full bg-[#3E7976]"></span>
                                    <span className="absolute top-0 w-0.5 h-full rounded-full bg-[#3E7976] group-[.active]:rotate-90 duration-300"></span>
                                </span>
                            </button>
                        </div>
                        <div className={`overflow-hidden duration-300 ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                            <div className="flex justify-center items-center flex-wrap md:gap-x-20 md:gap-y-10 md:my-[60px] my-7 gap-5">
                                <ToggleButton
                                    title="PB・OEM対応"
                                    enabled={enabledPBOEM}
                                    setEnabled={setEnabledPBOEM}
                                />
                                <ToggleButton
                                    title="輸出対応"
                                    enabled={enabledExport}
                                    setEnabled={setEnabledExport}
                                />
                            </div>
                            <div className="">
                                <p className="md:text-center md:text-[24px] text-[18px] font-bold">希望小売価格</p>
                                <div className="mt-5">
                                    <RangeSlider
                                        minValue={minValue}
                                        maxValue={maxValue}
                                        setMinValue={setMinValue}
                                        setMaxValue={setMaxValue}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="md:mt-[100px] mt-10">
                        <CardList products={dataItems} showCheckbox={true} selectedItems={selectedItems} onToggleItem={handleToggleItem} />
                    </div>
                </div>
                
            <div className="flex justify-center md:my-[180px] my-20 sticky bottom-10">
                <Button disable={selectedItems.size === 0} type={1}>選択した商品を一括問い合わせする</Button>
            </div>
            </div>
            
        </main>
    );
}
