import { useContext } from "react";
import { CartContext } from "components/App";
import { MedicineItem } from "./ProductItem.styled";

export const ProductItem = ({ product }) => {
  const { _id, name, price, image } = product;
  const { addedProducts, setAddedProducts } = useContext(CartContext);

  function handlerAddProduct() {
    const productIndex = addedProducts.findIndex((item) => item._id === _id);
    if (productIndex >= 0) {
      const updatedProducts = addedProducts.map((item, i) => {
        if (i === productIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setAddedProducts(updatedProducts);
    } else {
      setAddedProducts(addedProducts.concat({ ...product, quantity: 1 }));
    }
  }

  return (
    <MedicineItem>
      <img src={image} width={280} height={140} alt={name}  />
      <h2>{name}</h2>
      <p>Price: {price} ₴</p>
      <button onClick={handlerAddProduct}>add to Cart</button>
    </MedicineItem>
  );
};
