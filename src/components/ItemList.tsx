import { ItemListProps } from "../types/Utils";
import Button from "./Button";

const ItemList = ({ items, setItems }: ItemListProps) => {
  const deleteValue = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-3">
      {items.map((data) => (
        <div
          key={data.id}
          className="flex justify-between items-center bg-indigo-50 px-4 py-3 border border-indigo-200 rounded-xl shadow-md transition-all duration-200 hover:scale-[1.01] hover:shadow-lg"
        >
          <p className="text-gray-800 font-medium break-words flex-1">
            {data.title}
          </p>
          <Button
            onClick={() => deleteValue(data.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg ml-3 transition"
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
