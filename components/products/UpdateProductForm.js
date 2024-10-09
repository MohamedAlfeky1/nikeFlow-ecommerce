import { useState } from "react";

import Card from "../ui/Card";
import classes from "./NewProductForm.module.css";

function updateProductForm(props) {
  const [name, setName] = useState(props.productData.name || "");
  const [image, setImage] = useState(props.productData.image || "");
  const [price, setPrice] = useState(props.productData.price || "");
  const [description, setDescription] = useState(props.productData.desc || "");
  console.log(props.productData);

  // const handleChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const handleChangeImage = (e) => {
  //   setImage(e.target.value);
  // };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  // const handleChangeDescription = (e) => {
  //   setDescription(e.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    const updatedProduct = {
      name: name,
      image: image,
      price: price,
      desc: description,
    };

    props.onUpdateProduct(updatedProduct);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <h5 className={classes.alert}>
          Please note: You can only change the product price. Other product
          details cannot be modified.
        </h5>
        <div className={classes.control}>
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            required
            id="name"
            value={name}
            readOnly
            // onChange={handleChangeName}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Product Image</label>
          <input
            type="url"
            required
            id="image"
            value={image}
            readOnly
            // onChange={handleChangeImage}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            value={description}
            // onChange={handleChangeDescription}
            readOnly
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            required
            id="price"
            value={price}
            onChange={handleChangePrice}
            min={60}
            max={200}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Product</button>
        </div>
      </form>
    </Card>
  );
}

export default updateProductForm;
