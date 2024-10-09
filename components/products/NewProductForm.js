import { useRef, useState } from "react";

import Card from "../ui/Card";
import classes from "./NewProductForm.module.css";

function NewProductForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const imageUrl = /^https:\/\/images\.pexels\.com\/.+/;
    if (!imageUrl.test(enteredImage)) {
      setErrorMessage("The URL should Start With https://images.pexels.com");
      return;
    }

    const addedProduct = {
      name: enteredName,
      image: enteredImage,
      price: enteredPrice,
      desc: enteredDescription,
    };

    props.onAddProduct(addedProduct);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <h5 className={classes.alert}>
          Please note: Your product is pending approval and will be reviewed
          shortly. Once approved, it will be available in our store.
        </h5>
        <div className={classes.control}>
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            required
            id="name"
            ref={nameInputRef}
            placeholder="Nike Air Force 1"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Pexels Image URL</label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            placeholder="https://images.pexels.com"
          />
          <span className={classes.alert}>{errorMessage}</span>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
            minLength={40}
            maxLength={2000}
            placeholder="Description"
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            required
            id="price"
            ref={priceInputRef}
            min={60}
            max={200}
            placeholder="60 - 200"
          />
        </div>
        <div className={classes.actions}>
          <button>Add Product</button>
        </div>
      </form>
    </Card>
  );
}

export default NewProductForm;
