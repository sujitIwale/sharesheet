import React from 'react'
import AuthLoader from './AuthLoader'

const SubmitButton = ({ Submitted }) => {
    return (
        <button className={`btn btn-primary bg-1 flex row center ${Submitted ? 'pd-0 primary-light text-dark' : ''}`} type='submit' disabled={Submitted}>
            Sign In
            {
                Submitted && <AuthLoader />
            }
        </button>
    )
}

export default SubmitButton