import React, { useState } from 'react'
import './navbar.css'
import { BsCartPlus } from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'


const newlink = [
    {
        path: '#',
        display: 'Home'
    },
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#shop',
        display: 'Shop'
    },
    {
        path: '#services',
        display: 'Services'
    },
    {
        path: '#contacts',
        display: 'Contacts'
    },
]


const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }

    const [transparent, setTransparent] = useState('header')
    const addBg = () => {
        if (window.scrollY >= 100) {
            setTransparent('header sticky')
        } else {
            setTransparent('header')
        }
    }
    window.addEventListener('scroll', addBg)
    return (
        <header className={transparent}>
            <a href='/#' className="logo">W<span>A</span>TCHES</a>
            <ul className={click ? "navbar active" : "navbar"}>
<<<<<<< HEAD
                {
                    newlink.map((item)=> {
                       
                        return (
                      
            
                        <li onClick={handleClick}><a href={item.path}>{item.display}</a></li>


                        )
                    }
                    
                
                )}


=======
                <li onClick={handleClick}><a href='/#'>Home</a></li>
                <li onClick={handleClick}><a href='/react-demo-watch-website/#'>About</a></li>
                <li onClick={handleClick}><a href='/#shop'>Shop</a></li>
                <li onClick={handleClick}><a href='/#services'>Services</a></li>
                <li onClick={handleClick}><a href='/#contacts'>Contacts</a></li>
         
>>>>>>> d50633e86df1fc84287df3de4aefa7b6da4e4bb2
            </ul>
            <div className="nav-list">
                <div className="btn">Register now</div>
                <a href='/#'><BsCartPlus className='cart' /></a>

                <div className="menu-list" onClick={handleClick}>

                    {
                        click ? (<FaTimes className="menu" />) : (<FaBars className="menu" />)
                    }

                </div>
            </div>
        </header>
    )
}

export default Navbar
