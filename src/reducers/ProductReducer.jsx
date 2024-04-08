const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "SET_FEATURE_API_DATA": {
      const featureProductsData = action.payload
        .map((curElem) => {
          // console.log(curElem.items);
          return curElem.items.flatMap((val) => {
            return val.products.filter((val) => {
              return val.feature === true;
            });
          });
        })
        .filter((productsArray) => productsArray.length > 0);
      // console.log(featureProductsData);
      return {
        ...state,
        isLoading: false,
        Products: action.payload,
        featureProducts: featureProductsData,
      };
    }
    case "SET_TOPSELLING_API_DATA": {
      const topSelling = action.payload.map((val) => {
        return val.items.flatMap((val) => {
          return val.products.filter((val) => {
            return val.topSelling === true;
            // console.log(val.feature === true);
          });
        });
      });
      // console.log(topSelling);
      return {
        ...state,
        isLoading: false,
        Products: action.payload,
        topSelling: topSelling,
      };
    }
    case "SET_RECENTLYADDED_API_DATA": {
      const recentlyAddedProducts = action.payload.map((val) => {
        return val.items.flatMap((val) => {
          return val.products.filter((val) => {
            return val.recently === true;
          });
        });
      });
      return {
        ...state,
        isLoading: false,
        Products: action.payload,
        recentlyAdded: recentlyAddedProducts,
      };
      // console.log(recentlyAdded);
    }
    case "SET_TRENDING_API_DATA": {
      const trendingProducts = action.payload.map((val) => {
        // console.log(val.items);
        return val.items.flatMap((val) => {
          return val.products.filter((val) => {
            return val.trending === true;
          });
        });
      });
      // console.log(trendingProducts);
      return {
        ...state,
        isLoading: false,
        Products: action.payload,
        trending: trendingProducts,
      };
    }
    case "SET_TOPRATED_API_DATA": {
      const topRated = action.payload.map((val) => {
        return val.items.flatMap((val) => {
          return val.products.filter((val) => {
            return val.topRated === true;
          });
        });
      });
      // console.log(topRated);
      return {
        ...state,
        isLoading: false,
        Products: action.payload,
        topRated: topRated,
      };
    }
    case "SET_DAILYBESTDEALS_API_DATA": {
      const dailyBestDeals = action.payload.map((val) => {
        return val.items.flatMap((val) => {
          return val.products.filter((val) => {
            return val.dailyBestDeals === true;
          });
        });
      });
      // console.log(dailyBestDeals);
      return {
        ...state,
        isLoading: false,
        Products: action.payload,
        dailyBestDeals: dailyBestDeals,
      };
    }
    case "DALS_AND_PULSES": {
      const dalsAndPulse = action.payload.flatMap((val) => {
        return val.items.filter((val) => {
          return val.cat_name === "dals and pulses";
        });
      });
      // console.log(dalsAndPulse);
      return {
        ...state,
        dalsAndPulses: dalsAndPulse,
      };
    }

    case "GHEE_AND_OILS": {
      const gheeAndOil = action.payload.flatMap((val) => {
        return val.items.filter((val) => {
          return val.cat_name === "Ghee & Oils";
        });
      });
      return {
        ...state,
        gheeAndOils: gheeAndOil,
      };
    }
    case "ATTA_AND_FLOOR": {
      const attaAndFLoor = action.payload.flatMap((val) => {
        return val.items.filter((val) => {
          return val.cat_name === "Atta & Flours";
        });
      });
      // console.log(attaAndFLoor);
      return {
        ...state,
        attaAndFLoors: attaAndFLoor,
      };
    }
    case "MASALAS_AND_SPICES": {
      const masalasAndSpice = action.payload.flatMap((val) => {
        return val.items.filter((val) => {
          return val.cat_name === "masalas spices";
        });
      });
      return {
        ...state,
        masalasAndSpices: masalasAndSpice,
      };
    }
    case "RICE_AND_RICE_PRODUCTS": {
      const riceAndRiceProduct = action.payload.flatMap((val) => {
        return val.items.filter((val) => {
          return val.cat_name === "Rice & Rice Products";
        });
      });
      // console.log(riceAndRiceProduct);
      return {
        ...state,
        riceAndRiceProducts: riceAndRiceProduct,
      };
    }

    case "MOBILE_AND_TABLETS": {
      const mobilesAndTablet = action.payload.flatMap((val) => {
        return val.items.filter((val) => {
          return val.cat_name === "Mobiles & Tablets";
        });
      });
      // console.log(mobilesAndTablet);
      return {
        ...state,
        mobilesAndTablets: mobilesAndTablet,
      };
    }
    case "TV_AND_SPEAKER": {
      const TVAndSpeakers = action.payload.flatMap((val) => {
        return val.items.filter((val) => {
          return val.cat_name === "TV & Speaker";
        });
      });
      // console.log(TVAndSpeakers);
      return {
        ...state,
        TVAndSpeaker: TVAndSpeakers,
      };
    }
    case "MEN_WESTERB_WEAR": {
      const menWesternWears = action.payload.flatMap((val) => {
        return val.items.filter((val) => {
          return val.cat_name === "Men Western Wear";
        });
      });
      // console.log(menWesternWears);
      return {
        ...state,
        menWesternWear: menWesternWears,
      };
    }
    case "WOMEN_WESTERB_WEAR": {
      const woMenWesternWears = action.payload.flatMap((val) => {
        return val.items.filter((val) => {
          return val.cat_name === "Women Western Wear";
        });
      });
      // console.log(woMenWesternWears);
      return {
        ...state,
        woMenWesternWear: woMenWesternWears,
      };
    }
    case "API_ERROR": {
      return {
        ...state,
        isError: true,
      };
    }

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      // const singleProductData = action.payload.map((val) => {
      //   return val.items.map((val) => {
      //     return val;
      //     return val.products.map((val) => {
      //       return val;
      //       console.log(val);
      //     });
      //   });
      // });
      // console.log(singleProductData);
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    // case "SET_SINGLE_LOADING": {
    //   return {
    //     ...state,
    //     isSingleLoading: true,
    //   };
    // }
    // case "SET_SINGLE_PRODUCT_DATA": {
    //   return {
    //     ...state,
    //     isSingleLoading: false,
    //     singleProducts: action.payload,
    //   };
    // }
    // case "SINGLE_API_ERROR": {
    //   return {
    //     ...state,
    //     isSingleLoading: false,
    //     isSingleError: true,
    //   };
    // }
    default:
      return state;
  }
};
export default productReducer;
