import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import ItemList from "./components/ItemList";
import { type ItemType } from "./types/Utils";

const App = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setItems((prev) => [
      ...prev,
      { title: inputValue, id: Date.now().toString() },
    ]);
    setInputValue("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center p-6 transition-all">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 mt-12 animate-fade-in">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center tracking-tight">
          📝 ToDo List
        </h1>

        <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
          <Input
            type="text"
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-xl transition duration-300">
            Add
          </Button>
        </form>

        <div className="max-h-64 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
          <ItemList items={items} setItems={setItems} />
        </div>
      </div>
    </div>
  );
};

export default App;
