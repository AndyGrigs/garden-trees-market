import { Tree } from "../../types/types";
import { Ruler, Droplets } from "lucide-react";

interface TreeCardProps {
  tree: Tree;
  onAddToCart: (tree: Tree) => void;
}
export const ProductCard = ({ tree, onAddToCart }: TreeCardProps) => {
  console.log(tree);

  return (
    <div>
      <h3>{tree.name}</h3>
      <p>{tree.description}</p>
      <div>
        <span>{tree.height}</span>
      </div>
      <div  className="flex items-center justify-between">
        <span className="text-xl font-bold text-emerald-600">${tree.price}</span>

        <button
          onClick={() => onAddToCart(tree)}
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
