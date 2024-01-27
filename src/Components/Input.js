import React, { useState} from 'react';
import Order from './Order';



const Input = () => {
  const [id, setId] = useState('');
  const [price, setPrice] = useState('');
  const [productName, setProductName] = useState('');

  const [productsData, setProductsData] = useState(() => {
    const storedData = localStorage.getItem('productsData');
    return storedData ? JSON.parse(storedData) : [];
  });

  const changeIdHandler = (e) => {
    setId(e.target.value);
  };

  const changePriceHandler = (e) => {
    setPrice(e.target.value);
  };

  const changeProductHandler = (e) => {
    setProductName(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newData = {
      id,
      price,
      productName,
    };

    setProductsData((prevData) => [...prevData, newData]);

    localStorage.setItem('productsData', JSON.stringify([...productsData, newData]));

    setId('');
    setPrice('');
    setProductName('');
  };

  
  const deleteHandler = (index) => {
    const newProductsData = [...productsData];
    newProductsData.splice(index, 1);

    setProductsData(newProductsData);

    localStorage.setItem('productsData', JSON.stringify(newProductsData));
  };

  return (
    <>
      <form>
        <label htmlFor='id'>Product ID:</label>
        <input type='number' id='id' name='id' value={id} onChange={changeIdHandler} />

        <label htmlFor='price'>Selling Price:</label>
        <input type='number' id='price' name='price' value={price} onChange={changePriceHandler} />

        <label htmlFor='product'>Product Name:</label>
        <input type='text' id='product' name='product' value={productName} onChange={changeProductHandler} />

        <button onClick={submitHandler}>Add Product</button>
      </form>

      <Order productsData={productsData} deleteHandler={deleteHandler} />
    </>
  );
};

export default Input;
