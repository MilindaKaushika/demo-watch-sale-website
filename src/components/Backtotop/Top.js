import React, { useState, useEffect } from 'react'
import './top.css'
import { AiOutlineArrowUp } from 'react-icons/ai'
const Top = () => {
    const [isVisible, setIsVisible] = useState(false);
    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {

        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
    }, [])
    return (
        <wrapper>
       {isVisible &&(
              <div className="top-scroll">
              <AiOutlineArrowUp className="btn-design" onClick={goToTop} />
          </div>
        )}
        </wrapper>
    
    );
};

export default Top
