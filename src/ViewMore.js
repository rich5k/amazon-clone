import React from 'react'
import "./ViewMore.css"
import {useStateValue} from "./StateProvider";
import StarIcon from "@material-ui/icons/Star";
function ViewMore({id,title,image,price,rating}) {
    const[{basket}, dispatch]= useStateValue();
   
    const addToBasket=()=>{
        //dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className="viewMore">
            <img src={image} />
            <div className='product__info'>
                <p>{title}</p>
            </div>
            <div className='product__rating'>
                {Array(rating).fill().map((_, i)=>(
                    <p><StarIcon /></p>

                ))}
            </div>
            <div className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </div>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default ViewMore
