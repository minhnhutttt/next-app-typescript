import { Product } from "@/types";
import { StarRating } from "../common/StarRating";

interface ProductItemProps {
  product: Product;
  isSelected?: boolean;
  onToggle?: (id: string) => void;
  showCheckbox?: boolean;
  rank?: number | null,
  sm?: boolean
}

export const CardItem = ({ product, isSelected, onToggle,showCheckbox = true, rank, sm = false }: ProductItemProps) => {
  
  const getRankColor = (rank: number) => {
    const colors = ["#EEC822", "#AAACB9", "#AF7863", "#D9D9D9"];
    if (rank <= 3) {
      return colors[rank - 1];
    }
    return colors[3];
  };
  
  return (
    <a href="/product/detail" className={`fade-up block relative md:max-w-[293px] hover:!opacity-70 duration-300 ${sm ? 'max-w-[146px]' : 'max-w-[166px]'}`}>
      {showCheckbox && onToggle && (
        <div className="absolute -top-1 md:-top-2 -left-1 md:-left-2 z-20">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isSelected}
              onChange={() => onToggle(product.id)}
            />
            <div className="size-[21px] md:size-8 border border-[#666] flex items-center justify-center transition-colors duration-200 bg-white">
              {isSelected && <img className="max-md:w-[16px] w-6" src="/assets/images/ic-check.svg" />}
            </div>
          </label>
        </div>
      )}
      {
        rank && (
            <div 
              className="absolute -top-3 md:-top-4 -left-2 z-20 md:text-[40px] size-[46px] md:size-[100px] text-[14px] rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: getRankColor(rank) }}
            >
                {rank}
            </div>
        )
      }
        <div className="rounded-[10px] overflow-hidden relative">
            <img src={product.image} alt="" />
        </div>
      <div className="md:py-3 py-2">
            <div className="flex items-end pb-3">
              <p className="md:text-[24px] text-[18px] font-bold">{product.name}</p>
            </div>
        <div className="flex items-center gap-5 md:mb-3 mb-2">
          <StarRating rating={product.rating} />
          <span className="md:text-[24px] text-[18px] font-bold">{product.rating}</span>
        </div>

        <p className="md:text-[24px] text-[18px] line-clamp-2">
          {product.description}
        </p>
      </div>
    </a>
  );
};