import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai'

// import img_01 from '../../assets/popular1.png'
// import img_02 from '../../assets/popular2.png'
// import img_03 from '../../assets/popular3.png'
// import img_04 from '../../assets/popular4.png'

const Cart = (props) => {
    console.log(props);
    return (
        <>
                <div className="row-one">
                    <img src={props.imgsrc} alt="slider" />
                    <h4>{props.title}</h4>
                    <h5>{props.price}</h5>
                    <div className="top">
                        <p>{props.desc}</p>
                    </div>
                    <div className="heart">
                        <AiOutlineHeart className="heart-size" />
                    </div>

                    <div className="btn">
                        <a href="/#">{props.btn}</a>
                    </div>
                </div>
      
        </>
    )
}
export default Cart;