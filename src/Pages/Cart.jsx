
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { qtyIncrementProduct, qtyDecrementProduct,removeCartProduct } from "../redux/Action/Cartaction";


const Cart = () =>{
    const cartItem = useSelector((state) => state.allCartItems)
    const dispatch = useDispatch();
    let subtotal = 0

    
    return(
        <div className='container'>
            <div className="col-lg-12">
                    <h1>Cart is : {cartItem.cartItems.length}</h1>
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th>Item Id</th>
                                <th>Name</th>
                                <th>price</th>
                                <th>photo</th>
                                <th width="20%">Action</th>
                                <th>Total</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(cartItem.cartItems).map((index) => {
                                    { subtotal = Math.round(subtotal + cartItem.cartItems[index].total) }
                                    return(
                                        <tr key={index}>
                                            <td><p>{cartItem.cartItems[index].id}</p></td>
                                            <td>{cartItem.cartItems[index].title}</td>
                                            <td><p>{cartItem.cartItems[index].price}</p></td>
                                            <td><img src={cartItem.cartItems[index].image} alt="Images" className="bag_product" width="30px"/></td>
                                            <td>
                                            
                                                <div className="input-group">
                                                    <button className="input-group-text btn btn-primary"
                                                    onClick={() => dispatch(qtyIncrementProduct(cartItem.cartItems[index].id))}
                                                    >+</button>

                                                    <input type="text" className="form-control" value={cartItem.cartItems[index].qty}/>

                                                    <button className="input-group-text btn btn-warning"
                                                     onClick={() => dispatch(qtyDecrementProduct(cartItem.cartItems[index].id))}
                                                    >-</button>
                                                </div>
                                            </td>
                                            <td><p>{cartItem.cartItems[index].total}</p></td>
                                            <td> <button className="btn btn-danger btn-sm"
                                             onClick={() => dispatch(removeCartProduct(cartItem.cartItems[index].id))}
                                            >Delete</button></td>
                                        </tr>
                                        
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="subtotal_div">
                    <p className="subtotal">Total <span>{subtotal}</span></p>
                </div>
                </div>


        </div>
    )
}

export default Cart