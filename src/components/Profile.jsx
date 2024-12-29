/* eslint-disable no-undef */
// news ko api
// /* eslint-disable no-unused-vars */
// import React, { useContext, useEffect, useState } from "react";
// import productContext from "../context/ProductContext";
// import "../App.css";

// const Profile = () => {
//   const context = useContext(productContext);
//   const { product, product, fetchData } = context;
//   console.log("this is my product", product);

//   useEffect(() => {
//     fetchData()
//   }, []);

//   return (
//     <div className="container mt-4">
//       {/* <p>name of my product is {product.name} and price is {product.price}</p> */}
//       <h5 className="text-center"> This is my News</h5>
//       <div className="row">
//         {product && product.length > 0 ? (
//           product.map((item, index) => {
//             return (
//               <div key={index} className="col-md-3 mb-4">
//                 <div className="card">
//                   <img
//                     src={item.urlToImage}
//                     alt="news image"
//                     className="card-img-top"
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{item.title.slice(0,80)}</h5>
//                     <p className="card-text">{item.description}</p>
//                     <a
//                       href={item.url}
//                       target="_blank"
//                       className="btn btn-primary"
//                     >
//                       Read News
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <p>LOading...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// products ko
{
  /* {product.map((saman) => {
  return (
  
    <div key={saman.id} className="card">
      <h3>Name of product: {saman.title}</h3>
      <p>{saman.desc}</p>
      <h6>Price per kg: {saman.price}</h6>
      <h6>Remaining stock in kg: {saman.stock}</h6>
    </div>
  );
})} */
}

/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import productContext from "../context/ProductContext";
import "../App.css";
import Apple from "../assets/apple.png";
import { BsThreeDots } from "react-icons/bs";
import EditProductModal from "./EditProductModal";

const Profile = () => {
  const context = useContext(productContext);
  const {
    product,
    state: { cart },
    dispatch,
    allProduct
  } = context;
  console.log("this is my product", product);
  // console.log("this is my state", state) ;

  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleMenu = (id) => {
    setMenuVisible((prvState) => ({
      ...prvState,
      [id]: !prvState[id],
    }));
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeEditModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };
  const saveEdit = (updateData) => {
    editProduct(selectedProduct.id, updateData);
  };

  const handleDelete = async (id) => {
    console.log("deleting product");

    // await deleteProduct(id)
  };

  useEffect(() => {
    // fetchData();
    allProduct()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mt-4">
      {/* <p>name of my product is {product.name} and price is {product.price}</p> */}
      <h5 className="text-center"> This is my Product</h5>
      <div className="row">
        {product.map((item, index) => {
          return (
            <div key={index} className="col-md-3 mb-4">
              <div className="card">
                <img
                  src={Apple}
                  alt="news image"
                  className="card-img-top"
                  style={{ borderRadius: "30px" }}
                />
                <div className="card-body">
                  <div className="three-dots">
                    <h5 className="card-title">{item.title}</h5>
                    <BsThreeDots onClick={() => toggleMenu(item.id)} />
                    {menuVisible[item.id] && (
                      <div className="menu-option">
                        <button onClick={() => openEditModal(item)}>
                          Edit
                        </button>
                        <button onClick={() => handleDelete(item.id)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="card-text">{item.desc}</p>
                  <p className="card-text">{item.price}</p>
                  {cart && cart.some((p) => p.id === item.id) ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        });
                      }}
                    >
                      Remove From Cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: item,
                        });
                      }}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
              {modalVisible &&
                selectedProduct &&
                selectedProduct.id === item.id && (
                  <EditProductModal
                    product={selectedProduct}
                    onClose={closeEditModal}
                    onSave={saveEdit}
                  />
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
