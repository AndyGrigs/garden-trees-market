import { X, Minus, Plus } from "lucide-react";
import { CartItem } from "../../types/types";

interface CartProps {
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const ProductCart = ({
  items,
  onClose,
  onUpdateQuantity,
  onCheckout,
  onRemoveItem,
}: CartProps) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div>
        <div>
          <h2></h2>
          <button>
            <X />
          </button>
        </div>

        <div>
          {items.map((item) => (
            <div>
              <img src="" alt="" />
              <div>
                <h3></h3>
                <p></p>
                <div>
                  <button>
                    <Minus />
                  </button>
                  <span></span>
                  <button>
                    <Plus/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
            <div>
                <span></span><span></span>
            </div>
            <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};
