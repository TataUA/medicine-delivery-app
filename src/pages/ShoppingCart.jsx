//import { Loader } from "components/Loader/Loader";
import {
  ContentWrapper,
  UserWrapper,
  BasketWrapper,
  BasketList,
  BasketItem,
  InputWrapper,
  ButtonUp,
  ButtonDown,
  FinalWrapper,
} from "./ShoppingCart.styled";

const ShoppingCart = () => {
  return (
    <div>
      {/* <Loader /> */}
      <ContentWrapper>
        <UserWrapper>
          <label htmlFor="name">
            Name:
            <input></input>
          </label>
          <label htmlFor="name">
            Email:
            <input></input>
          </label>
          <label htmlFor="name">
            Phone:
            <input></input>
          </label>
          <label htmlFor="name">
            Address:
            <input></input>
          </label>
        </UserWrapper>
        <BasketWrapper>
          <BasketList>
            <BasketItem>
              <img width={180} height={90} alt="" />
              <div>
                <h2>Panadol</h2>
                <p>Price: 100</p>
                <InputWrapper>
                  <input></input>
                  <ButtonUp>&#x1F781;</ButtonUp>
                  <ButtonDown>&#x1F783;</ButtonDown>
                </InputWrapper>
              </div>
            </BasketItem>
            <BasketItem>
              <img width={180} height={90} alt="" />
              <div>
                <h2>Panadol</h2>
                <p>Price: 100</p>
                <InputWrapper>
                  <input></input>
                  <ButtonUp>&#x1F781;</ButtonUp>
                  <ButtonDown>&#x1F783;</ButtonDown>
                </InputWrapper>
              </div>
            </BasketItem>
            <BasketItem>
              <img width={180} height={90} alt="" />
              <div>
                <h2>Panadol</h2>
                <p>Price: 100</p>
                <InputWrapper>
                  <input></input>
                  <ButtonUp>&#x1F781;</ButtonUp>
                  <ButtonDown>&#x1F783;</ButtonDown>
                </InputWrapper>
              </div>
            </BasketItem>
            <BasketItem>
              <img width={180} height={90} alt="" />
              <div>
                <h2>Panadol</h2>
                <p>Price: 100</p>
                <InputWrapper>
                  <input></input>
                  <ButtonUp>&#x1F781;</ButtonUp>
                  <ButtonDown>&#x1F783;</ButtonDown>
                </InputWrapper>
              </div>
            </BasketItem>
            <BasketItem>
              <img width={180} height={90} alt="" />
              <div>
                <h2>Panadol</h2>
                <p>Price: 100</p>
                <InputWrapper>
                  <input></input>
                  <ButtonUp>&#x1F781;</ButtonUp>
                  <ButtonDown>&#x1F783;</ButtonDown>
                </InputWrapper>
              </div>
            </BasketItem>
          </BasketList>
        </BasketWrapper>
      </ContentWrapper>
      <FinalWrapper>
        <p>Total price: </p>
        <button type="submit">Submit</button>
      </FinalWrapper>
    </div>
  );
};

export default ShoppingCart;
