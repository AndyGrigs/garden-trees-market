import { LogOut, Menu, ShoppingCart, Trees } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { useState } from "react";

interface HeaderProps {
  onCartClick: () => void;
  cartItemsCount: number;
}

export const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="bg-emerald-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trees className="h-8 w-8" />
            <h1 className="text-2xl">Kovaci Trees</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <LanguageSwitcher /> */}
            <button
              onClick={onCartClick}
              className="flex items-center space-x-2 bg-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-800 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="font-semibold">{cartItemsCount}</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-800 transition-colors"
            >
              <LogOut className="h-6 w-6" />
              <span className="font-semibold">Logout</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-emerald-700 rounded-lg"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
