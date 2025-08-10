import { CardItem } from "./CardItem";
import { Product } from "@/types";

interface CardListProps {
  products: Product[];
  showCheckbox?: boolean;
  selectedItems?: Set<string>;
  onToggleItem?: (id: string) => void;
}

const CardList = ({ 
  products, 
  showCheckbox = false, 
  selectedItems = new Set(), 
  onToggleItem 
}: CardListProps) => {
  return (
      <div className="w-full md:max-w-[1320px] max-w-[352px] mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 md:gap-7 justify-center xl:gap-x-9 xl:gap-y-[60px] mt-6 md:mt-4">
          {products.map((product) => (
            <CardItem
              key={product.id}
              product={product}
              isSelected={selectedItems.has(product.id)}
              onToggle={onToggleItem}
              showCheckbox={showCheckbox}
            />
          ))}
        </div>
      </div>
  );
};

export default CardList;