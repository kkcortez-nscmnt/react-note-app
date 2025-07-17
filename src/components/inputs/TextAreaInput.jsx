const TextAreaInput = ({ label, id, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-semibold">
        {label}
      </label>
      <textarea
        id={id}
        className="w-full rounded-lg border p-2"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextAreaInput;
