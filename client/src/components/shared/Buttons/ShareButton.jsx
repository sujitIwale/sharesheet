
const ShareButton = ({ onClick }) => {
    return (
        <button className='btn btn-primary bg-green' style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center' }} onClick={onClick}>
            Share
            <i className="fa-solid fa-users"></i>
        </button>
    )
}

export default ShareButton