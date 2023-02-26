import React, {useState, useEffect} from 'react'
import './shop.css'
import {popularskirtswatch, fastjumpsuitswatch, womanwatch} from '../Data/Data'
import Cart from '../Data/Cart'

// const WatcherInfo = (Values) => {
//     return (
//         <>
//             <Cart
//                 imgsrc={Values.imgsrc}
//                 title={Values.title}
//                 price={Values.price}
//                 desc={Values.desc}
//                 btn={Values.btn}
//             />
//         </> 
//     )
// } 
const Shop = () => {
    const [filter, setFilter] = useState('Skirts')
    const [Data,setData] = useState(popularskirtswatch)
    useEffect(()=>{
        if (filter === 'Skirts'){
            setData(popularskirtswatch)
        }
        if (filter === 'Jumpsuits'){
            setData(fastjumpsuitswatch)
        }
        if (filter === 'Woman'){
            setData(womanwatch)
        }
    },[filter])
    return (
        <section id="shop">
            <div className="center-text">
                <h4>360° COLLECTION</h4>
                <h2><span>FEATURED </span>PRODUCTS</h2>
            </div>
            <div className="filter">
                    <button className="btns active_btns" onClick={()=> setFilter('Skirts')}>Skirts</button>
                    <button className="btns"  onClick={()=> setFilter('Jumpsuits')}>Jumpsuits</button>
                    <button className="btns"  onClick={()=> setFilter('Woman')}>Woman</button>
                </div>
            <div className="new-content" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
                {Data.map((Values) => {
                    return (
                        <div key={Values.id}>
                            <Cart
                                imgsrc={Values.imgsrc}
                                title={Values.title}
                                price={Values.price}
                                desc={Values.desc}
                                btn={Values.btn}
                            />
                        </div>
                    )
                }


                )}
            </div>

        </section>
    )
}

export default Shop
