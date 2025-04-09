type Input = {
  type: "text" | "checkbox" | "color";
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ type, inputValue, setInputValue }: Input) => {
  return (
    <div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type={type}
        placeholder="Enter a new task"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
    </div>
  );
};

export default Input;
