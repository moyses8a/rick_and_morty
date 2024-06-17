import './icon-button.css'

function IconButton({clickHandler, children}) {
    
    return <button onClick={() => clickHandler()} className='button'>
        {  children }
    </button>
}

export default IconButton;