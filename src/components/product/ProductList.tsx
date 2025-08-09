import { ProductItem } from "./ProductItem";
import { Product } from "@/types";

interface ProductListProps {
  products: Product[];
  showCheckbox?: boolean;
  selectedItems?: Set<string>;
  onToggleItem?: (id: string) => void;
}

const ProductList = ({ 
  products, 
  showCheckbox = false, 
  selectedItems = new Set(), 
  onToggleItem 
}: ProductListProps) => {
  return (
    <div className="px-5">
      <div className="w-full max-w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 md:gap-10 justify-center xl:gap-x-20 xl:gap-y-14 mt-6 md:mt-4">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              isSelected={selectedItems.has(product.id)}
              onToggle={onToggleItem}
              showCheckbox={showCheckbox}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;