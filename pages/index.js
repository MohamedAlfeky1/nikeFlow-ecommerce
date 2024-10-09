import axios from "axios";
import Layout from "../components/layout/Layout";
import ProductList from "../components/products/Productlist";
import Head from "next/head";
import { dbConnect } from "@/util/mongo";
import Product from "@/models/Product";
import NikeCover from "@/components/products/NikeCover";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>NikeFlow</title>
        <meta name="description" content="Browse a list of new products" />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <NikeCover />
      <ProductList products={props.products} />
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  const products = await Product.find({ approved: true });

  return {
    props: {
      products: products.map((product) => ({
        name: product.name,
        image: product.image,
        desc: product.desc,
        id: product._id.toString(),
        price: product.price,
      })),
    },
  };
}
