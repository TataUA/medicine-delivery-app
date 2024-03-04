import { useCallback, useEffect, useState } from "react";
import axios from "../utils/axios";
import { Loader } from "components/Loader/Loader";
import { ProductItem } from "components/ProductItem/ProductItem";
import {
  ContentWrapper,
  MedicineWrapper,
  ShopsWrapper,
  Title,
  ShopsList,
  MedicineList,
} from "./Shops.styled";

const Shops = () => {
  const [shops, setShops] = useState([]);
  const [currentShop, setCurrentShop] = useState(null);
  const [products, setProducts] = useState([]);

  async function getShops() {
    try {
      const { data } = await axios.get("api/shops");
      setShops(data);
      return data;
    } catch (error) {
      throw new Error("Shops not found");
    }
  }

  const fetchData = useCallback(async () => {
    try {
      const shopsList = await getShops();
      setShops(shopsList);
      setCurrentShop(shopsList[0]._id);
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }, []);

  async function getProducts(ownerId) {
    try {
      const { data } = await axios.get(`api/products/${ownerId}`);
      setProducts(data);
      return data;
    } catch (error) {
      throw new Error("Products not found");
    }
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (currentShop) {
      getProducts(currentShop);
    }
  }, [currentShop]);

  return (
    <div>
      {shops.length === 0 && <Loader />}
      <ContentWrapper>
        <ShopsWrapper>
          <Title>Shops:</Title>
          <ShopsList>
            {shops.length > 0 &&
              shops.map((shop) => {
                const { _id, name } = shop;
                return (
                  <li key={_id}>
                    <button
                      className={currentShop === _id ? "active" : ""}
                      onClick={() => {
                        setCurrentShop(_id);
                      }}
                    >
                      {name}
                    </button>
                  </li>
                );
              })}
          </ShopsList>
        </ShopsWrapper>
        <MedicineWrapper>
          <MedicineList>
            {products.length > 0 &&
              products.map((product) => (
                <ProductItem key={product._id} product={product} />
              ))}
          </MedicineList>
        </MedicineWrapper>
      </ContentWrapper>
    </div>
  );
};

export default Shops;
