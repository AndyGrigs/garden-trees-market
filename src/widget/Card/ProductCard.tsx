import { Tree } from "../../types/types";
import { Ruler, Droplets } from "lucide-react";

interface TreeCardProps {
  tree: Tree;
  onAddToCart: (tree: Tree) => void;
}
export const ProductCard = ({ tree, onAddToCart }: TreeCardProps) => {
  console.log(tree);

  return (
    <div  className="bg-white  py-2 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img className="w-full h-48 object-cover" src={tree.image} alt={tree.name} />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{tree.name}</h3>
        <p className="mb-4">{tree.description}</p>
        <div className="flex items-center mb-4 text-grey-600 gap-4">
          <div className="flex items-center ">
            <Ruler className="h-4 w-4 mr-" />
            <span>{tree.height}</span>
          </div>
          <div className="flex  items-center">
            <Droplets className="h-4 w-4 mr-1" />
            <span>{tree.maintenance}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-emerald-600">
            ${tree.price}
          </span>

          <button
            onClick={() => onAddToCart(tree)}
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
