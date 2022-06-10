
const PrimaryButton = ({ className, onClick, value }) => {
    return (
        <button className={`btn btn-primary hover bg-1 signup-btn pointer ${className}`} onClick={onClick}>{value}</button>
    )
}

export default PrimaryButton