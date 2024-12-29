// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const AddProduct = () => {

    const {product, setProduct} = useState({
        title: '',
        description: '',
        price: 0,
        instock: 0
    })

    const handleChnage = (e) => {
        setProduct({...product, [e.target.name]: e.target.value })
    }

  return (
    <div className="container">
      <h4>Add your Product here</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="email"
            name="title"
            value={product.title}
            onChange={handleChnage}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
