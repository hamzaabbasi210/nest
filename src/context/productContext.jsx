import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/ProductReducer";
import { useParams } from "react-router";
const AppContext = createContext();

const Api = "http://localhost:3000/productData";
const initialState = {
  isLoading: false,
  isError: false,
  Products: [],
  featureProducts: [],
  topSelling: [],
  trending: [],
  recentlyAdded: [],
  topRated: [],
  dailyBestDeals: [],
  isSingleError: false,
  isSingleLoading: false,
  singleProduct: [],
  dalsAndPulses: [],
  gheeAndOils: [],
  attaAndFLoors: [],
  masalasAndSpices: [],
  riceAndRiceProducts: [],
  mobilesAndTablets: [],
  TVAndSpeaker: [],
  menWesternWear: [],
  woMenWesternWear: [],
};
// console.log(dalsAndPulses)
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { id } = useParams;

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await axios.get(url);
      const products = await res.data;
      // console.log(products);
      dispatch({ type: "SET_FEATURE_API_DATA", payload: products });
      dispatch({ type: "SET_TOPSELLING_API_DATA", payload: products });
      dispatch({ type: "SET_TRENDING_API_DATA", payload: products });
      dispatch({ type: "SET_RECENTLYADDED_API_DATA", payload: products });
      dispatch({ type: "SET_TOPRATED_API_DATA", payload: products });
      dispatch({ type: "SET_DAILYBESTDEALS_API_DATA", payload: products });
      dispatch({ type: "DALS_AND_PULSES", payload: products });
      dispatch({ type: "GHEE_AND_OILS", payload: products });
      dispatch({ type: "ATTA_AND_FLOOR", payload: products });
      dispatch({ type: "MASALAS_AND_SPICES", payload: products });
      dispatch({ type: "RICE_AND_RICE_PRODUCTS", payload: products });
      dispatch({ type: "MOBILE_AND_TABLETS", payload: products });
      dispatch({ type: "TV_AND_SPEAKER", payload: products });
      dispatch({ type: "MEN_WESTERB_WEAR", payload: products });
      dispatch({ type: "WOMEN_WESTERB_WEAR", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      // console.log(singleProduct);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getSingleProduct(Api);
    getProducts(Api);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };
