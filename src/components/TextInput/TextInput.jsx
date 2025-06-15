
function TextInput({ type = 'text', label, placeHolder = 'Enter a word!!!', onChangeHandler }) {

  return (
    <div className="flex flex-col w-full max-w-md mb-4">
      {label && <label className="m-1 text-sm  font-light  bg-sky-100 text-gray-700 text-center rounded-md">{label}</label>}
      <input
        type={type} placeholder={placeHolder} onChange={onChangeHandler}
        autoComplete={type === 'password' ? 'new-password' : 'off'}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
      />
    </div>
  );
}

export default TextInput;
