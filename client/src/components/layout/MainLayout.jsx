import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './Layout.css'

const MainLayout = ({ children }) => {
    return (
        <div className='app customized-scrollbar'>
            <Header />
            <main className="main-section customized-scrollbar">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout