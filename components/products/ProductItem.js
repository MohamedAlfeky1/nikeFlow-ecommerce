import Card from "../ui/Card";
import classes from "./ProductItem.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function ProductItem(props) {
  const handleDeleteProduct = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    });
    console.log("SweetAlert result:", result);
    if (result.isConfirmed) {
      try {
        await axios.delete(
          `${process.env.APP_DEV || process.env.APP_PROD}/api/products`,
          {
            params: { id: props.id }, // passing the id as a query parameter
          }
        );
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      } catch (error) {
        Swal.fire(
          "Error!",
          "Access denied. Only administrators are allowed to delete products.",
          "error"
        );
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            src={props.image}
            alt={props.name}
            fill={true}
            priority
            sizes="100%"
          />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <span>${props.price}</span>
        </div>
        <Link
          href={`/update-product/${props.id}`}
          className={`${classes.link} ${classes.updateBtn}`}
          aria-label="Edit The Product"
        >
          <FontAwesomeIcon icon={faEdit} />
        </Link>
        <button
          className={classes.deleteBtn}
          onClick={handleDeleteProduct}
          aria-label="Delete The Product"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <Link
          href={`/${props.id}`}
          className={`${classes.link} ${classes.detailsBtn}`}
          aria-label="Details"
        >
          ➤
        </Link>
      </Card>
    </li>
  );
}

export default ProductItem;
