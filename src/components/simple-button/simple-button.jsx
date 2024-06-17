import './simple-button.css'

function SimpleButton ({ children, click = () => {}, disabled = false }) {
    return <button className='simple-button' onClick={() => click()} disabled={disabled}>
        { children }
    </button>
}

export default SimpleButton;