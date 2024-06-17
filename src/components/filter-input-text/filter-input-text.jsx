import './filter-input-text.css'

function FilterInputText({ label, inputChange, value }) {

    const handleChange = function (evt) {
        inputChange(evt.target.value)
    }

    return (
        <div className="control">
            <label htmlFor="input" className="control__label--text">{ label }</label>
            <input type="text" onChange={handleChange} className="control__input--text" value={value}/>
        </div>
    )
}

export default FilterInputText;