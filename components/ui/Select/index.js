const Select = ({ handleChange, value, name, options, title }) => {
    return (
        <select
            name={name}
            value={value}
            onChange={handleChange}
            className="m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option value="">{title}</option>
            {options.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
    )
}
export default Select
