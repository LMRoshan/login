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
              console.log(item.stock);

              return (
                <li key={item.id} className="list-group-item">
                  <div
                    className="row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      height: "150px",
                    }}
                  >
                    <div className="col-md-2">
                      <img
                        src={Apple}
                        height={50}
                        width={50}
                        alt="product"
                        className="img-fluid"
                        style={{
                          width: "750px",
                          height: "130px",
                          borderRadius: "30px",
                        }}
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
                        // name="stock"
                        style={{ appearance: "auto" }}
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
                        {[...Array(item.qty).keys()].map((x) => {
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>;
                        })}
                      </select>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      <div
        className="filter-summary"
        style={{
          borderRadius: "20px",
          padding: "20px",
          margin: "7px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "between",
        }}
      >
        <div className="title">Total cart items : {cart.length}</div>
        <h4>Total : {Total}</h4>
        <button
          className="btn btn-primayt"
          style={{
            color: "white",
            border: "1px solid white",
            backgroundColor: "teal",
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItems;
