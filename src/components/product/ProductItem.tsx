import { Product } from "@/types";
import { StarRating } from "../common/StarRating";

interface ProductItemProps {
  product: Product;
  isSelected?: boolean;
  onToggle?: (id: string) => void;
  showCheckbox?: boolean;
}

export const ProductItem = ({ 
  product, 
  isSelected, 
  onToggle, 
  showCheckbox = false 
}: ProductItemProps) => {
  
  return (
    <div className="fade-up relative hover:!opacity-70 duration-300">
      {showCheckbox && onToggle && (
        <div className="absolute -top-1 md:-top-4 -left-1 md:-left-2 z-20">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isSelected}
              onChange={() => onToggle(product.id)}
            />
            <div className="size-[21px] md:size-[50px] border border-[#666] flex items-center justify-center transition-colors duration-200 bg-white">
              {isSelected && <img className="max-md:w-[16px]" src="/assets/images/ic-check.svg" />}
            </div>
          </label>
        </div>
      )}
      
      <div className="rounded-[20px] overflow-hidden relative">
        <img src={product.image} alt="" />
        <div className="absolute inset-0 flex items-end p-2 md:p-5">
          <p className="md:text-[24px] text-[18px] text-white font-bold">{product.name}</p>
        </div>
      </div>
      
      <div className="md:py-3 py-2">
        <div className="flex items-center gap-5 md:mb-3 mb-2">
          <StarRating rating={product.rating} />
          <span className="md:text-[24px] text-[18px] font-bold">{product.rating}</span>
        </div>

        <p className="md:text-[24px] text-[18px] max-md:line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
};