
const ShareButton = ({ onClick }) => {
    return (
        <button className='btn btn-primary bg-green' style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center' }} onClick={onClick}>
            Share
            <i class="fa-solid fa-users"></i>
        </button>
    )
}

export default ShareButton