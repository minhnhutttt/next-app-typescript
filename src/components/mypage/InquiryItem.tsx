import { Product } from "@/types";
import Modal from "../common/Modal";
import { useState } from "react";

interface InquiryItemProps {
    product: Product;
    type?: 'inquiry' | 'responses' | 'completion'
}

export const InquiryItem = ({ product, type }: InquiryItemProps) => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <>
        <div className="md:py-[60px] py-10 md:gap-20 gap-8 flex items-center max-md:flex-col justify-between">
            <span className="md:max-w-[50%]"><img className="rounded-[20px] max-w-[222px]" src={product.image} alt="" /></span>
            <div className="flex-1 flex flex-wrap justify-between items-center gap-8 max-md:flex-col">
                <div className="md:space-y-8 space-y-6 max-md:text-center">
                    <p className="md:text-[40px] text-[24px] font-bold">{product.name}</p>
                    <p className="md:text-[24px] text-[18px]">{product.companyName}</p>
                </div>
                <div className="flex md:w-[300px]">
                    {type === 'inquiry' && <button className="max-md:w-[172px] h-[56px] md:px-16 md:h-[78px] flex items-center justify-center md:text-[24px] text-[18px] font-bold rounded-full border border-[#3E7976] text-[#3E7976] hover:opacity-75 duration-300">問い合わせ中</button>}
                    {type === 'responses' && <button onClick={() => setModalOpen(true)} className="max-md:w-[172px] h-[56px] md:px-16 md:h-[78px] flex items-center justify-center md:text-[24px] text-[18px] font-bold rounded-full border border-[#D43A3A] bg-[#D43A3A] text-white hover:opacity-75 duration-300">アンケート回答</button>}
                    {type === 'completion' && <button onClick={() => setModalOpen(true)} className="max-md:w-[172px] h-[56px] md:px-16 md:h-[78px] flex items-center justify-center md:text-[24px] text-[18px] font-bold rounded-full border border-[#666] text-[#666] hover:opacity-75 duration-300">完了</button>}
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            >
                <p className="md:text-[24px] text-[18px] md:mt-3 mt-2 md:mb-[50px] mb-10 text-center">
                    ※進捗状況に合わせた内容が入ります
                </p>
            </Modal>
        </div>
        </>
    );
};