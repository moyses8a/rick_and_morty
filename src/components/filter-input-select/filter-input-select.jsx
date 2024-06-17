import './filter-input-select.css'

function FilterInputSelect({ label, options, inputChange, value: selectedValue }) {

    const handleChange = function (evt) {
        inputChange(evt.target.value)
    }

    return (
        <div className="control">
            <label htmlFor="select" className="control__label--select">{ label }</label>
            <select name="select" className="control__input--select" value={selectedValue} onChange={handleChange}>
                {
                    options.map(({label, value}) => {
                        return <option value={value} key={value}>{label}</option>
                    })
                }
            </select>
        </div>
    )
}

export default FilterInputSelect;