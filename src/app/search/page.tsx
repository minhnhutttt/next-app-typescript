"use client"
import { Button } from "@/components/common/Button";
import ProductList from "@/components/product/ProductList";
import { dataProducts } from "@/data";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useState } from "react";
export default function Search() {

    const ref = useScrollAnimations()

    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
    
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
            <section className="bg-[#DAE9E9] py-6 md:mt-[120px] mt-[70px]">
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
                    <div className="md:mt-[52px] mt-8">
                        <div className="px-3 md:px-5 py-7 md:py-[35px] md:border-4 border-2 border-[#ccc] md:rounded-[60px] rounded-[30px] relative">
                            <img className="absolute bottom-full left-10 md:left-44 max-md:max-w-6" src="/assets/images/ic-bubble.png" alt="" />
                            <p className="md:text-[24px] text-[18px] leading-snug w-full max-w-[1160px] mx-auto">
                                説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[500px] md:max-w-[1020px] mx-auto flex items-center gap-5 md:gap-10 mt-5 md:mt-10 max-md:flex-col">
                    <div className="flex-1 max-md:w-full">
                        <input type="text" className="w-full border-2 border-[#3E7976] rounded-[20px] h-[72px] p-5 md:text-[24px] text-[18px] font-bold" placeholder="条件を入力" />
                    </div>
                    <div className=""><Button type={0}>探してもらう</Button></div>
                </div>
            </section>

            <section className="md:mt-[180px] mt-20">
                <ProductList 
                    products={dataProducts} 
                    showCheckbox={true}
                    selectedItems={selectedItems}
                    onToggleItem={handleToggleItem}
                    />
            </section>
        </main>
    );
}
