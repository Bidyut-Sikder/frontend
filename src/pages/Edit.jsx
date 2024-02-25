


import React, { useRef, useState } from "react";
import { useEffect } from "react";

import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createProduct, getProductByID, updateProductByID } from "../apiRequest/ApiRequest";

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams()

    const [form, setForm] = useState({
        name: "",
        brand: "",
        category: "",
        image: "",
        description: "",
        price: "",
        stock: "",
        product_code: ""

    });


    const handleChange = (key, value) => {

        setForm((formValues) => ({
            ...formValues,
            [key]: value,
        }));
    };

    const handleSubmit = async () => {
       // console.log(form);
        const res = await updateProductByID(id,form);
        if (res) {
            toast.success("Created successfully.");
             navigate("/products");
        } else {
            toast.error("fail to Create.");
        }
    };

    useEffect(() => {
        (async () => {
            const product = await getProductByID(id)
       if(product){
        setForm(product)
       }else{
        toast.error('something went wrong.')
       }
        })()
    }, [])



    return (
        <>
            <Toaster />
            <div className="container">
                <h1 className="p-2 " style={{ textAlign: "center" }}>
                    Add  Product Details
                </h1>
                <div className="row">
                    <div className="col-md-6 mt-2">
                        <label htmlFor="name">Name</label>
                        <input
                        value={form.name}
                            type="text"
                            className="form-control"
                            onChange={(e) => handleChange("name", e.target.value)}
                        />
                    </div>

                    <div className="col-md-6 mt-2">
                        <label htmlFor="merchandise">Price</label>
                        <input
                        value={form.price}
                            type="text"
                            className="form-control"
                            onChange={(e) => handleChange("price", e.target.value)}
                        />
                    </div>

                    <div className="col-md-6 mt-2">
                        <label htmlFor="Phone">Brand</label>
                        <input
                        value={form.brand}
                            type="text"
                            className="form-control"
                            onChange={(e) => handleChange("brand", e.target.value)}
                        />
                    </div>

                    <div className="col-md-6 mt-2">
                        <label htmlFor="father's Name">Category</label>
                        <input
                          value={form.category}
                            type="text"
                            className="form-control"
                            onChange={(e) => handleChange("category", e.target.value)}
                        />
                    </div>

                    <div className="col-md-6 mt-2">
                        <label htmlFor="gffdf">Description</label>
                        <input
                          value={form.description}
                            type="text"
                            className="form-control"
                            onChange={(e) => handleChange("description", e.target.value)}
                        />
                    </div>

                    <div className="col-md-6 mt-2">
                        <label htmlFor="merchandise">Image URL</label>
                        <input
                          value={form.image}
                            type="text"
                            className="form-control"
                            onChange={(e) => handleChange("image", e.target.value)}
                        />
                    </div>


                    <div className="col-md-6 mt-2">
                        <label htmlFor="merchandise">Stock</label>
                        <input
                          value={form.stock}
                            type="text"
                            className="form-control"
                            onChange={(e) => handleChange("stock", e.target.value)}
                        />
                    </div>

                    <div className="col-md-6 mt-2">
                        <label htmlFor="merchandise">Product Code</label>
                        <input
                          value={form.product_code}
                            type="text"
                            className="form-control"
                            onChange={(e) => handleChange("product_code", e.target.value)}
                        />
                    </div>



                    <div className="col-md-6 mt-2">
                        <div className="btn-groupd">
                            <button
                                onClick={() => handleSubmit()}
                                type="button"
                                className="btn btn-outline-secondary m-2 btn-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;