import { LogOut, ShoppingCart, Trees } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-emerald-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trees className="h-8 w-8" />
            <h1 className="text-2xl">Kovaci Trees</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-800 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span>Sh</span>
            </button>

            <button className="flex items-center space-x-2 bg-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-800 transition-colors">
              <LogOut className="h-6 w-6" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
