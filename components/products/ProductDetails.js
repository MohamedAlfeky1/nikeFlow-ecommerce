import Card from "../ui/Card";
import classes from "./ProductDetail.module.css";
import Image from "next/image";
function ProductDetails(props) {
  return (
    <section className={classes.product}>
      <div className={classes.image}>
        <Image
          src={props.image}
          alt={props.name}
          fill={true}
          priority
          sizes="100%"
        />
      </div>
      <div className={classes.details}>
        <h1 className={classes.title}>{props.name}</h1>
        <p>
          <span className={classes.info}>Price: </span>${props.price}
        </p>
        <p>
          <span className={classes.info}>Description:</span> {props.desc}
        </p>
        <div className={classes.button}>
          <div className={classes.buttonWrapper}>
            <div className={classes.text}>Buy Now</div>
            <span className={classes.icon}>
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetails;
