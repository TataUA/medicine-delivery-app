//import { Loader } from "components/Loader/Loader";
import {
  ContentWrapper,
  MedicineWrapper,
  ShopsWrapper,
  Title,
  ShopsList,
  MedicineList,
  MedicineItem,
} from "./Shops.styled";

const Shops = () => {
  return (
    <div>
      {/* <Loader /> */}
      <ContentWrapper>
        <ShopsWrapper>
          <Title>Shops:</Title>
          <ShopsList>
            <li>Drags24</li>
            <li>Pharmacy</li>
          </ShopsList>
        </ShopsWrapper>
        <MedicineWrapper>
          <MedicineList>
            <MedicineItem>
              <img width={280} height={140} alt="" />
              <h2>Panadol</h2>
              <button>add to Cart</button>
            </MedicineItem>
            <MedicineItem>
              <img width={280} height={140} alt="" />
              <h2>Panadol</h2>
              <button>add to Cart</button>
            </MedicineItem>
            <MedicineItem>
              <img width={280} height={140} alt="" />
              <h2>Panadol</h2>
              <button>add to Cart</button>
            </MedicineItem>
            <MedicineItem>
              <img width={280} height={140} alt="" />
              <h2>Panadol</h2>
              <button>add to Cart</button>
            </MedicineItem>
            <MedicineItem>
              <img width={280} height={140} alt="" />
              <h2>Panadol</h2>
              <button>add to Cart</button>
            </MedicineItem>
            <MedicineItem>
              <img width={280} height={140} alt="" />
              <h2>Panadol</h2>
              <button>add to Cart</button>
            </MedicineItem>
          </MedicineList>
        </MedicineWrapper>
      </ContentWrapper>
    </div>
  );
};

export default Shops;
