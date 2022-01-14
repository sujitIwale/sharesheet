import React from 'react'
import './Form.css'

const Form = ({title,children}) => {
    return (
      <div className="content">
        <header>
          <h1>{title}</h1>
        </header>
        <section>
          {children}
        </section>
      </div>
    )
}

export default Form
