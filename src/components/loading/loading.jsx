import './loading.css'

function Loading() {
    return <div className='loader'>
        <div className='circle-1'>
            <div className='dot' />
        </div>
        <div className='circle-2'>
            <div className='dot' />
        </div>
        <div className='circle-3'>
            <div className='dot' />
        </div>
    </div>
}

export default Loading;