import { useState } from "react";
import { useGetTreesQuery } from "../../../store/api/treesApi";
import { Header } from "../../../widget";
import { ProductCard } from "../../../widget/Card/ProductCard";

export const MainPage = () => {
  const { data: trees, isLoading, error } = useGetTreesQuery();
  const [cartItem, setCartItem] = useState();
  const [isCartOpen, setIsCartOpen] = useState();
  const [isConcactOpen, setisConcactOpen] = useState();
  console.log(trees)
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Collection</h2>
        { isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            </div>
        ) : error ? (
          <div className="text-center text-red-600">
              Failed to load trees. Please try again later.
            </div>
        ): (
          <div>
            <ProductCard tree={trees[0]} onAddToCart={()=>null}/>
          </div>
        )}
      </main>
    </div>
  );
};
