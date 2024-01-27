import React from 'react'



const Order = (props) => {
    const deleteHandler = (index) => {
      props.deleteHandler(index);
    };
  
    const calculateTotalValue = () => {
      return props.productsData.reduce((total, product) => total + parseFloat(product.price), 0).toFixed(2);
    };
  
    return (
      <>
        <h3>Products</h3>
        {props.productsData.map((data, index) => (
          <li key={index}>
            {data.price} - {data.productName}{' '}
            <button onClick={(e) => { e.preventDefault(); deleteHandler(index); }}>Delete Product</button>
          </li>
        ))}
  
        <h3>Total Value Worth of Products: RS {calculateTotalValue()}</h3>
       
      </>
    );
  };
  
  export default Order;
  
  