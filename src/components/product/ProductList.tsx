import { dataProducts } from "@/data";
import { useState } from "react";
import { ProductItem } from "./ProductItem";

const ProductList = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const isAllSelected = selectedItems.size === dataProducts.length && dataProducts.length > 0;
  

  const toggleItem = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const toggleAll = () => {
    if (isAllSelected) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(dataProducts.map(p => p.id)));
    }
  };

  return (
    <div className="px-5">
    <div className="w-full max-w-[1320px] mx-auto">
        <div className="flex items-center justify-end gap-4">
          <p className="md:text-[40px] text-[18px] font-bold">一括選択</p>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={isAllSelected}
                onChange={toggleAll}
              />
              <div className="size-[34px] md:size-[50px] border border-[#666] flex items-center justify-center transition-colors duration-200 bg-white">
                {isAllSelected && <img className="max-md:w-5" src="/assets/images/ic-check.svg" />}
              </div>
            </label>
          </div>
        </div>

      <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 md:gap-10 justify-center xl:gap-x-20 xl:gap-y-14 mt-6 md:mt-4">
        {dataProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            isSelected={selectedItems.has(product.id)}
            onToggle={toggleItem}
            showCheckbox={true}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductList;