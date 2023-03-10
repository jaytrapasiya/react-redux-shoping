import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/Action/Cartaction";

const ProductComponent = () => {
  
  const dispatch = useDispatch();
 
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;


    const productAddToCart = (id, image, title, price) => {
      const qty = 1
      const total = price
      dispatch(addToCart({ id, image, title, price, qty, total }))
      alert("Add to Cart Successfully")

  }

    return (
      
            <div className=" col-lg-3 col-sm-6 mt-5 four wide column" key={id}>

                <div className="ui link cards">
                    <div className="card">
                    <div className="image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="content">
                        <div className="header ms-3">{title}</div>
                        <div className="meta price ms-3">Rs {price}</div>
                        <div className="meta ms-3">{category}</div>
                        <button className="btn btn-danger btn-sm m-3"
                          onClick={() => productAddToCart(id, image, title, price)}>Add To Cart
                        </button>
                    </div>
                    </div>
                </div>
            </div>
     
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
