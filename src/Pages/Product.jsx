import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/Action/Productactiontype";
import ProductComponent from "../component/Productcomponent";

const MyProducts = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("products :", products);
    return (
        <>
            <div className="ui grid container">
                <h1>ProductList</h1>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <ProductComponent/>
                </div>
            </div>
        </>
    )
}

export default MyProducts;