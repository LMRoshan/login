// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import productContext from "../context/ProductContext";
import Apple from "../assets/apple.png";

const CartItems = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
  } = context;

  const Total = cart.reduce((acc, item) => acc + item.price * item.stock, 0);

  return (
    <div className="container cart-page mt-4">
      <div className="productContainers-cart">
        <ul className="list-group">
          {cart &&
            cart.map((item) => {
              return (
                <li key={item.id} className="list-group-item">
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        src={Apple}
                        height={50}
                        width={50}
                        alt="product"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-2">
                      <h4>{item.title}</h4>
                    </div>
                    <div className="col-md-2">
                      <h4>{item.price}</h4>
                    </div>
                    <div className="col-md-2">
                      <select
                        value={item.stock}
                        onChange={(e) => {
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: item.id,
                              qty: e.target.value,
                            },
                          });
                        }}
                        className="form-control"
                      >
                        {[...Array(item.stock).keys()].map((x) => {
                          <option key={x + 1}>{x + 1}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="filter-summary">
        <div className="title">Total cart items:{cart.length}</div>
        <h4>Total: {Total}</h4>
        <button className="btn btn-primayt">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartItems;
