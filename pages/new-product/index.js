import axios from "axios";
import NewProductForm from "../../components/products/NewProductForm";
import Head from "next/head";
import { useRouter } from "next/router";

function NewProductPage() {
  const router = useRouter();
  const addProductHandler = (enterdData) => {
    axios.post(`/api/products`, enterdData, {
      headers: { "Content-Type": "application/json" },
    });
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add a New Product</title>
        <meta
          name="description"
          content="Add your product and build great e-commerce app"
        />
      </Head>
      <NewProductForm onAddProduct={addProductHandler} />
    </>
  );
}

export default NewProductPage;
