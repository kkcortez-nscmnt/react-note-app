const TextInput = ({ label, id, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-semibold">
        {label}
      </label>
      <input
        id={id}
        type="text"
        className="w-full p-2 rounded-lg border"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
