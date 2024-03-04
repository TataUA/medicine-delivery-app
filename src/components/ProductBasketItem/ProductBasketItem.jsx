import { useContext } from "react";
import { CartContext } from "components/App";
import {
  BasketItem,
  InputWrapper,
  ButtonUp,
  ButtonDown,
  ButtonClose,
} from "./ProductBasketItem.styled";

export const ProductBasketItem = ({ product }) => {
  const { _id, name, price, image, quantity } = product;
  const { addedProducts, setAddedProducts } = useContext(CartContext);

  const handleIncreaseQuantity = (productId) => {
    const updatedProducts = addedProducts.map((product) => {
      if (product._id === productId) {
        const newQuantity = Math.min(10, product.quantity + 1);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setAddedProducts(updatedProducts);
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedProducts = addedProducts.map((product) => {
      if (product._id === productId) {
        const newQuantity = Math.max(1, product.quantity - 1);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setAddedProducts(updatedProducts);
  };

  const handleRemoveProduct = (productId) => {
    const updatedProducts = addedProducts.filter(
      (product) => product._id !== productId
    );
    setAddedProducts(updatedProducts);
  };

  return (
    <BasketItem key={_id}>
      <img src={image} width={180} height={90} alt="" />
      <div>
        <h2>{name}</h2>
        <p>Price: {price} ₴</p>
        <InputWrapper>
          <input value={quantity} readOnly></input>
          <ButtonUp onClick={() => handleIncreaseQuantity(_id)}>
            &#x1F781;
          </ButtonUp>
          <ButtonDown onClick={() => handleDecreaseQuantity(_id)}>
            &#x1F783;
          </ButtonDown>
        </InputWrapper>
        <ButtonClose onClick={() => handleRemoveProduct(_id)}>X</ButtonClose>
      </div>
    </BasketItem>
  );
};
