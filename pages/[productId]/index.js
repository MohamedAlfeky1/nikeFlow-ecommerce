// domainName/productId
import ProductDetails from "@/components/products/ProductDetails";
import { dbConnect } from "../../util/mongo";
import Product from "@/models/Product";
import axios from "axios";
import mongoose from "mongoose";
import Head from "next/head";

function ProductDetailsPage(props) {
  return (
    <>
      <Head>
        <title>Product Details</title>
        <meta name="description" content="Browse Product Details" />
      </Head>
      <ProductDetails
        image={props.productData.image}
        name={props.productData.name}
        price={props.productData.price}
        desc={props.productData.desc}
      />
    </>
  );
}

export default ProductDetailsPage;

export async function getStaticPaths() {
  dbConnect();
  const products = await Product.find({}, { _id: 1 });
  return {
    fallback: "blocking",
    paths: products.map((product) => ({
      params: { productId: product._id.toString() },
    })),
    revalidate: 10,
  };
}

export async function getStaticProps(context) {
  const productId = context.params.productId;

  // get the specific data from productId (image, price, desc, etc)
  const selectedProduct = await Product.findById({
    _id: new mongoose.Types.ObjectId(productId),
  });

  return {
    props: {
      productData: {
        image: selectedProduct.image,
        name: selectedProduct.name,
        price: selectedProduct.price,
        desc: selectedProduct.desc,
        id: selectedProduct._id.toString(),
      },
    },
  };
}
