import NewProductForm from "@/components/products/NewProductForm";
import { dbConnect } from "../../util/mongo";
import Product from "@/models/Product";
import ProductDetails from "@/components/products/ProductDetails";
import mongoose from "mongoose";
import UpdateProductForm from "../../components/products/UpdateProductForm";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

function UpdateProduct(props) {
  const router = useRouter();
  const { id } = router.query;

  const handleUpdateProduct = async (updatedProduct) => {
    const response = await axios.put(
      `${process.env.APP_DEV || process.env.APP_PROD}/api/products`,
      updatedProduct, // Send the data as the request body
      {
        params: { id: id }, // Send the ID as a query parameter
      }
    );
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Update Product</title>
        <meta
          name="description"
          content="Update your product and build great e-commerce app"
        />
      </Head>
      <UpdateProductForm
        productData={props.productData}
        onUpdateProduct={handleUpdateProduct}
      />
    </>
  );
}

export default UpdateProduct;

export async function getStaticPaths() {
  dbConnect();
  const products = await Product.find({}, { _id: 1 });
  return {
    fallback: false,
    paths: products.map((product) => ({
      params: { id: product._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const productId = context.params.id;

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
