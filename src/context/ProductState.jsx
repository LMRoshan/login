/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useReducer, useState } from "react";
import productContext from "./ProductContext";
import { cartReducer } from "./Reducer";

const ProductState = (props) => {
  // let p1 = {
  //     name: 'Product 1',
  //     price: 100,
  // }

  // let update = () => {
  //     setTimeout(() => {
  //         setProduct({
  //             name: 'Updated Product',
  //             price: 200,
  //         })
  //     }, 1000);
  // }

  let products = [
    {
      id: 1,
      title: "apple",
      desc: "apple aus deutschland",
      price: 100,
      stock: 10,
    },
    {
      id: 2,
      title: "mango",
      desc: "mango aus australien",
      price: 150,
      stock: 15,
    },
    {
      id: 3,
      title: "kiwi",
      desc: "kiwi aus neu zealand",
      price: 350,
      stock: 15,
    },
    {
      id: 4,
      title: "orange",
      desc: "kiwi aus ostereich",
      price: 150,
      stock: 7,
    },
  ];

  // const [articles, setArticles] = useState([])

  const [product, setProduct] = useState(products);


  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const allProduct = async () => {
    const response = await fetch('', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
      }
    })
    let data = await response.json()
    console.log(data);
    setProduct(data)
  }

  
  
  return (
    <productContext.Provider value={{ product, allProduct, state, dispatch }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;



    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(
    //       'https://newsapi.org/v2/top-headlines?country=us&apiKey=d125d26fbc6d49728775e0b977bddc5a'
    //     );
    //     if (!response.ok) {
    //       throw new Error(response.status);
    //     }
    //     const data = await response.json();
    //     setArticles(data.articles); // Store only the articles array
    //     console.log('Fetched data:', data.articles);
    //   } catch (error) {
    //     console.error('Fetching error:', error);
    //   }
    // };
