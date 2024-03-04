import { useContext, useState } from "react";
import axios from "../utils/axios";
import { CartContext } from "components/App";
import {
  ContentWrapper,
  UserWrapper,
  BasketWrapper,
  BasketList,
  FinalWrapper,
} from "./ShoppingCart.styled";
import { ProductBasketItem } from "components/ProductBasketItem/ProductBasketItem";

const ShoppingCart = () => {
  const { addedProducts, setAddedProducts } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = addedProducts.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  async function addOrder(newOrder) {
    try {
      const { data } = await axios.post("api/orders", newOrder);
      return data;
    } catch (error) {
      throw new Error("Order didn`t add");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (addedProducts.length === 0) {
      alert("You need to add product...");
    }
    const userData = {
      username: name,
      email,
      phone,
      address,
      products: addedProducts,
    };

    try {
      const response = await addOrder(userData);
      console.log(response);
      setName("");
      setPhone("");
      setEmail("");
      setAddress("");
      setAddedProducts([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ContentWrapper>
          <UserWrapper>
            <label htmlFor="name">
              Name:
              <input
                type="text"
                value={name}
                placeholder="Type your name..."
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </label>
            <label htmlFor="name">
              Email:
              <input
                type="email"
                value={email}
                placeholder="example@gmail.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </label>
            <label htmlFor="name">
              Phone:
              <input
                type="tel"
                value={phone}
                placeholder="+380001234567"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                pattern="^\+380\d{9}$"
                required
              />
            </label>
            <label htmlFor="name">
              Address:
              <input
                type="text"
                value={address}
                placeholder="Type your delivery address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              />
            </label>
          </UserWrapper>
          <BasketWrapper>
            <BasketList>
              {addedProducts &&
                addedProducts.map((product) => (
                  <ProductBasketItem key={product._id} product={product} />
                ))}
            </BasketList>
          </BasketWrapper>
        </ContentWrapper>
        <FinalWrapper>
          <p>Total price: {total} ₴</p>
          <button type="submit">Submit</button>
        </FinalWrapper>
      </form>
    </div>
  );
};

export default ShoppingCart;
