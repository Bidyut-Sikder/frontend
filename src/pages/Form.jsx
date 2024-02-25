


import React, { useRef, useState } from "react";
import { useEffect } from "react";

import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { createProduct } from "../apiRequest/ApiRequest";

const Form = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    brand: "",
    category: "",
    image: "",
    description: "",
    price: "",
    stock: "",
    product_code:""

  });


  const handleChange = (key, value) => {

    setForm((formValues) => ({
      ...formValues,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
   // console.log(form);
    const res = await createProduct(form);
    if (res) {
      toast.success("Created successfully.");
       navigate("/products");
    } else {
      toast.error("fail to Create.");
    }
  };

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
              type="text"
              className="form-control"
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="merchandise">Price</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange("price", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="Phone">Brand</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange("brand", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="father's Name">Category</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange("category", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="gffdf">Description</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="merchandise">Image URL</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange("image", e.target.value)}
            />
          </div>


          <div className="col-md-6 mt-2">
            <label htmlFor="merchandise">Stock</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange("stock", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="merchandise">Product Code</label>
            <input
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
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

















































































// import React, { useRef, useState } from "react";
// import { useEffect } from "react";

// import toast, { Toaster } from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import { createProduct } from "../apiRequest/ApiRequest";

// const Form = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     brand: "",
//     category: "",
//     image: "",
//     description: "",
//     price: "",
//     stock: "",
//     product_code:""

//   });


//   const handleChange = (key, value) => {

//     setForm((formValues) => ({
//       ...formValues,
//       [key]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     console.log(form);
//     const res = await createProduct(form);
//     if (res) {
//       toast.success("Created successfully.");
//       // navigate("/");
//     } else {
//       toast.error("fail to Create.");
//     }
//   };

//   return (
//     <>
//       <Toaster />
//       <div className="container">
//         <h1 className="p-2 " style={{ textAlign: "center" }}>
//           Add  Product Details
//         </h1>
//         <div className="row">
//           <div className="col-md-6 mt-2">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               onChange={(e) => handleChange("name", e.target.value)}
//             />
//           </div>

//           <div className="col-md-6 mt-2">
//             <label htmlFor="merchandise">Price</label>
//             <input
//               type="text"
//               className="form-control"
//               onChange={(e) => handleChange("price", e.target.value)}
//             />
//           </div>

//           <div className="col-md-6 mt-2">
//             <label htmlFor="Phone">Brand</label>
//             <input
//               type="text"
//               className="form-control"
//               onChange={(e) => handleChange("brand", e.target.value)}
//             />
//           </div>

//           <div className="col-md-6 mt-2">
//             <label htmlFor="father's Name">Category</label>
//             <input
//               type="text"
//               className="form-control"
//               onChange={(e) => handleChange("category", e.target.value)}
//             />
//           </div>

//           <div className="col-md-6 mt-2">
//             <label htmlFor="gffdf">Description</label>
//             <input
//               type="text"
//               className="form-control"
//               onChange={(e) => handleChange("description", e.target.value)}
//             />
//           </div>

//           <div className="col-md-6 mt-2">
//             <label htmlFor="merchandise">Image URL</label>
//             <input
//               type="text"
//               className="form-control"
//               onChange={(e) => handleChange("image", e.target.value)}
//             />
//           </div>


//           <div className="col-md-6 mt-2">
//             <label htmlFor="merchandise">Stock</label>
//             <input
//               type="text"
//               className="form-control"
//               onChange={(e) => handleChange("stock", e.target.value)}
//             />
//           </div>

//           <div className="col-md-6 mt-2">
//             <label htmlFor="merchandise">Product Code</label>
//             <input
//               type="text"
//               className="form-control"
//               onChange={(e) => handleChange("product_code", e.target.value)}
//             />
//           </div>



//           <div className="col-md-6 mt-2">
//             <div className="btn-groupd">
//               <button
//                 onClick={() => handleSubmit()}
//                 type="button"
//                 className="btn btn-outline-secondary m-2 btn-lg"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Form;