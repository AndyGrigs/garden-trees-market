import { useState } from "react";
import { useGetTreesQuery } from "../../../store/api/treesApi";
import { Header } from "../../../widget";
import { ProductCard } from "../../../widget/Card/ProductCard";
import { CartItem, Tree } from "../../../types/types";
import { MessageCircle } from "lucide-react";
import { ContactForm } from "../../../widget/Forms/ContactForm";

export const MainPage = () => {
  const { data: trees, isLoading, error } = useGetTreesQuery();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConcactOpen, setIsContactOpen] = useState(true);

  const addToCart = (tree: Tree) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === tree.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === tree.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...tree, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  const handleContactSubmit = (form: IContactForm) => {
    console.log("Contact form submitted:", form);
    alert("Thank you for your message! We will get back to you soon.");
    setIsContactOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Collection</h2>
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-600">
            Failed to load trees. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trees?.map((tree) => (
              <ProductCard key={tree.id} tree={tree} onAddToCart={() => null} />
            ))}
          </div>
        )}
      </main>

      <button
        onClick={() => setIsContactOpen(true)}
        className="fixed bottom-6 right-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-500 transition-colors duration-200 flex items-center justify-center"
        aria-label="Contact Us"
      >
        <MessageCircle />
      </button>

      {isConcactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-in-out transform">
          <div className="bg-white rounded-lg shdow-xl w-fill max-w-xl relative p-4 w-100">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:bg-gray-100 "
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-6">
              <ContactForm onSubmit={handleContactSubmit} />
            </div>
          </div>
        </div>
      )}

      {isCartOpen}
    </div>
  );
};
