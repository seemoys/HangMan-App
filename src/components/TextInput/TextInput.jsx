
function TextInput({ type = 'text', label, placeHolder = 'Enter a word!!!', onChangeHandler }) {

  return (
    <div className="flex flex-col w-full max-w-md mb-4">
      {label && <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type} placeholder={placeHolder} onChange={onChangeHandler}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
      />
    </div>
  );
}

export default TextInput;
