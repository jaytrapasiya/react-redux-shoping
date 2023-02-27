import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
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
                        <button className="btn btn-danger btn-sm m-3">Add To Card</button>
                    </div>
                    </div>
                </div>
            </div>
     
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
