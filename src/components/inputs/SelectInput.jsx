

const SelectInput = ({label, id, value, onChange, options}) => {
  return (
    <div className="mb-4">
          <label htmlFor={id} className="block font-semibold">
            {label}
          </label>
          <select
            id={id}
            className="w-full rounded-lg border p-2"
            value={value}
            onChange={onChange}
            options={options}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label }
              </option>
            ))}
          </select>
        </div>
  )
}

export default SelectInput