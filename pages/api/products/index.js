import { dbConnect } from "../../../util/mongo";
import Product from "../../../models/Product";
import { checkPassword } from "@/middleware/auth";

export default async function handler(req, res) {
  const { method } = req;
  dbConnect();
  if (method === "PUT") {
    try {
      const { id } = req.query;
      const { name, image, desc, price } = req.body;
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        {
          name,
          desc,
          image,
          price,
        },
        { new: true }
      );
      if (!updatedProduct) {
        return res
          .status(404)
          .json({ success: false, message: "Item not found" });
      }
      res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
  if (method === "POST") {
    try {
      await Product.create(req.body);
      res.status(201).json({ success: true, message: "Product Created!" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  checkPassword(req, res, async () => {
    if (method === "GET") {
      try {
        const products = await Product.find();
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(500).json({ message: error });
      }
    }
    if (method === "DELETE") {
      try {
        const { id } = req.query;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
          return res
            .status(404)
            .json({ success: false, message: "Item not found" });
        }
        res
          .status(200)
          .json({ success: true, message: "Product deleted successfully" });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
    }
  });
}
