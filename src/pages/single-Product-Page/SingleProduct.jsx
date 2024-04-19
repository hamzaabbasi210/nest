import { Button, Rating } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import compare from "../../assets/icon-compare.svg";
import heart from "../../assets/icon-heart.svg";
import ri from "../../assets/author-2.png";
import "./SingleProduct.css";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Sidebar from "../../componants/sidebar/Sidebar";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import Slider from "react-slick";
import { useProductContext } from "../../context/productContext";
import axios from "axios";
import { useCartContext } from "../../context/cartContext";
import QuantityBox from "../../componants/quantityBox/QuantityBox";

const Api = "http://localhost:3000/productData";
function SingleProduct() {
  const { getSingleProduct, singleProduct } = useProductContext();
  const { addToCart, increment, decrement } = useCartContext();
  const { id } = useParams();

  const [curProduct, setCurProduct] = useState({});
  const [inpVal, setInpVal] = useState(0);
  const [first, setfirst] = useState(curProduct.brand);
  const [showImage, setShowImage] = useState([]);
  const [showInfo, setShowInfo] = useState(0);
  const [rating, setRating] = useState(0, 0);
  const [reviewArr, setReviewArr] = useState([]);
  const [reviewField, setReviewField] = useState({
    review: "",
    userName: "",
    rating: 0.0,
    productId: id,
    date: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    singleProduct.map((val) => {
      return val.items.map((val) => {
        return val.products.map((val) => {
          if (parseInt(val.id) === parseInt(id)) {
            setCurProduct(val);
            setShowImage(val.productImages[0]);
          }
        });
      });
    });
  }, [id]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  // const helo = (det) => {
  //   if (det && det.target && det.target.src) {
  //     setShowImage(det.target.src);
  //   } else {
  //     console.error("Invalid event or target in helo function:", det);
  //   }
  // };

  const helo = (det) => {
    if (det && det.target && det.target.src) {
      const newImageSrc = det.target.src;
      const imageElement = document.querySelector(".img img");
      if (imageElement) {
        // Apply a fade-out effect
        imageElement.style.opacity = "0";
        imageElement.style.transition = ".4s ease";
        setTimeout(() => {
          // Change the image source after the fade-out effect
          setShowImage(newImageSrc);
          // Apply a fade-in effect
          imageElement.style.opacity = "1";
        }, 300); // Adjust the duration of the fade-out effect (in milliseconds)
      }
    } else {
      console.error("Invalid event or target in helo function:", det);
    }
  };

  const submitReview = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/productReview",
        reviewField
      );
    } catch (error) {
      console.log(error.message);
    }
    showReview();
    setReviewField(() => ({
      review: "",
      userName: "",
      rating: 0.0,
      productId: id,
      date: new Date(),
    }));
  };
  useEffect(() => {
    showReview();
  }, []);

  const review_Arr = [];
  const showReview = async () => {
    try {
      const response = await axios.get("http://localhost:3000/productReview");
      response.data.map((val) => {
        if (parseInt(val.productId) === parseInt(id)) {
          review_Arr.push(val);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
    setReviewArr(review_Arr);
  };
  const handleOnChange = (name, value) => {
    if (name === "rating") {
      setRating(value);
    }
    setReviewField(() => ({
      ...reviewField,
      [name]: value,
      date: new Date().toLocaleString(),
    }));
  };
  const addTooCart = (product) => {
    product.quantity += 1;
    addToCart(product);
  };
  console.log(curProduct);
  return (
    <>
      <div className="single-product-container  mb-12">
        <div className="container-fluid">
          <div className="bread-crums border-b-2 mt-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item text-[#3BB77D]">
                  <Link href="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="#">Vegetables & Tubers{curProduct.brand} </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  {curProduct.productName}{" "}
                </li>
              </ol>
            </nav>
          </div>
          <div className="container-fluid mt-12">
            <div className="row  singleProductContent">
              <div className="col-4">
                <div className="img shadow-xl w-full h-[%] rounded-lg p-4  transition-opacity duration-300">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={0.8}
                    src={showImage}
                    width={1000}
                    height={100}
                    className="transition-opacity duration-300"
                  />
                </div>

                <div className="img-slider bg-re-400 " onClick={helo}>
                  <Slider {...settings}>
                    {curProduct.productImages &&
                      curProduct.productImages.map((imageUrl, index) => (
                        <img
                          src={imageUrl}
                          key={index}
                          style={{
                            width: "100px",
                            height: "100px",
                            margin: "0px",
                          }}
                        />
                      ))}
                  </Slider>
                </div>
              </div>

              <div className="col-8  px-12">
                <div className="product-info ">
                  <h1 className="h text-5xl font-semibold">
                    {curProduct.productName}
                  </h1>
                  <div className="ratting my-4 text-sm flex items-center gap-2">
                    <Rating
                      defaultValue={curProduct.rating}
                      precision={0.5}
                      style={{ fontSize: "1rem" }}
                    />
                    <span className="text-[#ccc]">(32 reviews){first}</span>
                  </div>
                  <div className="product-price flex items-center  gap-2">
                    <div className="sale-price text-[48px] font-semibold text-[#3BB77E]">
                      ${curProduct.price}
                    </div>
                    <div className="reg-price text-[px] text-[#ccc] font-bold">
                      <p className="text-[#FAAF00] text-[14px]">
                        {" "}
                        {curProduct.discount}% off
                      </p>
                      <p className="line-through text-[21px]">
                        ${curProduct.oldPrice}
                      </p>
                    </div>
                  </div>
                  <p className="py-4">{curProduct.description}</p>
                  <div className="size-weight flex my-4">
                    <p>size/weight</p>
                    <ul className="flex ml-2 gap- ">
                      {/* {curProduct.weight.map((val) => {
                            return (
                              <li>
                                <Button>{val}</Button>
                              </li>
                            );
                          })} */}
                      <li>
                        <Button>70g</Button>{" "}
                      </li>
                      <li>
                        <Button>90g</Button>{" "}
                      </li>
                      <li>
                        <Button>120g</Button>{" "}
                      </li>
                      <li>
                        <Button>150g</Button>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="add-to-cart flex items-center gap-4">
                    <div className="quantity w-[6rem] flex border rounded">
                      <QuantityBox
                        quantitty={curProduct.quantity}
                        setIncrese={() => increment(curProduct.id)}
                        setDecrese={() => decrement(curProduct.id)}
                        // quantitty={curProduct.quantity}
                        // setIncrese={() => increment(curProduct.id)}
                        // setDecrese={() => decrement(curProduct.id)}
                      />

                      <div className="arrows flex flex-col items-center justify-center">
                        {/* <QuantityBox
                          quantitty={curProduct.quantity}
                          setIncrese={() => increment(curProduct.id)}
                          setDecrese={() => decrement(curProduct.id)}
                        /> */}
                      </div>
                    </div>
                    <div className="add-to-cart-btn">
                      <NavLink to="/cart">
                        <Button onClick={() => addTooCart(curProduct)}>
                          add to cart
                        </Button>
                      </NavLink>
                    </div>
                    <div className="boxess flex gap-2">
                      <Button>
                        {" "}
                        <img src={compare} alt="" />
                      </Button>
                      <Button>
                        <img src={heart} alt="" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row w-full  border mt-12 py-12">
              <div className="col">
                <div className="info-tabs flex flex-wrap gap-8 mb-12">
                  <div className="discription" onClick={() => setShowInfo(0)}>
                    <Button>description</Button>
                  </div>
                  <div
                    className="additionl-description"
                    onClick={() => setShowInfo(1)}
                  >
                    <Button>additional info</Button>
                  </div>
                  <div className="vendor" onClick={() => setShowInfo(2)}>
                    <Button>vendor</Button>
                  </div>
                  <div className="vendor" onClick={() => setShowInfo(3)}>
                    <Button>reviews</Button>
                  </div>
                </div>
                {showInfo === 0 && (
                  <div className="discription-tab mt-4">
                    <p>{curProduct.description}</p>
                  </div>
                )}
                {showInfo === 1 && (
                  <div className="additional-description">
                    <div class="tab-pane fade active show" id="Additional-info">
                      <table class="font-md">
                        <tbody>
                          <tr class="stand-up">
                            <th>Stand Up</th>
                            <td>
                              <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                            </td>
                          </tr>
                          <tr class="folded-wo-wheels">
                            <th>Folded (w/o wheels)</th>
                            <td>
                              <p>32.5″L x 18.5″W x 16.5″H</p>
                            </td>
                          </tr>
                          <tr class="folded-w-wheels">
                            <th>Folded (w/ wheels)</th>
                            <td>
                              <p>32.5″L x 24″W x 18.5″H</p>
                            </td>
                          </tr>
                          <tr class="door-pass-through">
                            <th>Door Pass Through</th>
                            <td>
                              <p>24</p>
                            </td>
                          </tr>
                          <tr class="frame">
                            <th>Frame</th>
                            <td>
                              <p>Aluminum</p>
                            </td>
                          </tr>
                          <tr class="weight-wo-wheels">
                            <th>Weight (w/o wheels)</th>
                            <td>
                              <p>20 LBS</p>
                            </td>
                          </tr>
                          <tr class="weight-capacity">
                            <th>Weight Capacity</th>
                            <td>
                              <p>60 LBS</p>
                            </td>
                          </tr>
                          <tr class="width">
                            <th>Width</th>
                            <td>
                              <p>24″</p>
                            </td>
                          </tr>
                          <tr class="handle-height-ground-to-handle">
                            <th>Handle height (ground to handle)</th>
                            <td>
                              <p>37-45″</p>
                            </td>
                          </tr>
                          <tr class="wheels">
                            <th>Wheels</th>
                            <td>
                              <p>12″ air / wide track slick tread</p>
                            </td>
                          </tr>
                          <tr class="seat-back-height">
                            <th>Seat back height</th>
                            <td>
                              <p>21.5″</p>
                            </td>
                          </tr>
                          <tr class="head-room-inside-canopy">
                            <th>Head room (inside canopy)</th>
                            <td>
                              <p>25″</p>
                            </td>
                          </tr>
                          <tr class="pa_color">
                            <th>Color</th>
                            <td>
                              <p>Black, Blue, Red, White</p>
                            </td>
                          </tr>
                          <tr class="pa_size">
                            <th>Size</th>
                            <td>
                              <p>M, S</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {showInfo === 2 && (
                  <div className="vendor">
                    <div class="tab-pane fade active show" id="Vendor-info">
                      <div class="vendor-logo d-flex mb-30">
                        <img src="src\assets\vendor-18.svg" alt="" />
                        <div class="vendor-name ml-5">
                          <h6>
                            <a href="vendor-details-2.html" className="ml-5">
                              Noodles Co.
                            </a>
                          </h6>
                          <div class="product-rate-cover text-end">
                            <div class="product-rate d-inline-block">
                              <div
                                class="product-rating flex ml-5"
                                style={{ width: "90%" }}
                              >
                                <Rating
                                  style={{ fontSize: "1rem" }}
                                  defaultValue={3}
                                  readOnly
                                />
                              </div>
                            </div>
                            <span class="font-small  text-muted ">
                              (32 reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                      <ul class="contact-infor my-16">
                        <li className="flex gap-3">
                          <img src="src\assets\icon-location.svg" alt="" />
                          <strong>Address: </strong>{" "}
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <img src="src\assets\icon-contact.svg" alt="" />
                          <strong>Contact Seller:</strong>
                          <span>(+91) - 540-025-553</span>
                        </li>
                      </ul>
                      <div class="d-flex mb-55">
                        <div class="mr-30">
                          <p class="text-brand font-xs">Rating</p>
                          <h4 class="mb-0">92%</h4>
                        </div>
                        <div class="mr-30">
                          <p class="text-brand font-xs">Ship on time</p>
                          <h4 class="mb-0">100%</h4>
                        </div>
                        <div>
                          <p class="text-brand font-xs">Chat response</p>
                          <h4 class="mb-0">89%</h4>
                        </div>
                      </div>
                      <p className="m-0">
                        Noodles &amp; Company is an American fast-casual
                        restaurant that offers international and American noodle
                        dishes and pasta in addition to soups and salads.
                        Noodles &amp; Company was founded in 1995 by Aaron
                        Kennedy and is headquartered in Broomfield, Colorado.
                        The company went public in 2013 and recorded a $457
                        million revenue in 2017.In late 2018, there were 460
                        Noodles &amp; Company locations across 29 states and
                        Washington, D.C.
                      </p>
                    </div>
                  </div>
                )}
                {showInfo === 3 && (
                  <>
                    <div className="review-tab">
                      <h2 className="font-bold">
                        Customer questions & answers
                      </h2>
                      {reviewArr.length !== 0 &&
                        reviewArr.map((val) => {
                          return (
                            <div className="review-card w-[100%] shadow-xl mt-4 border-t-4 flex py-4 items-cente px-4 gap-8">
                              <div className="cus-img text-center">
                                <img src={ri} alt="" className="w" />
                                <h1 className="mt-4 text-[#3BB77E] font-bold">
                                  {val.userName}
                                </h1>
                              </div>
                              <div className="rv ">
                                <div className="top flex justify-between gap-12 ">
                                  <div className="date text-[#3BB77E]">
                                    {val.date}
                                  </div>
                                  <div className="ratting ml-auto">
                                    <Rating value={val.rating} />
                                  </div>
                                </div>
                                <p className="mt-4">{val.review}</p>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div className="form-section w-[100%] shadow-xl mt-8">
                      <h2 className="font-bold">add a review</h2>
                      <form className="p-4" onSubmit={submitReview}>
                        <textarea
                          name="review"
                          id=""
                          cols="30"
                          rows="10"
                          className="w-full outline-none border"
                          placeholder="write a review"
                          value={reviewField.review}
                          onChange={(e) =>
                            handleOnChange(e.target.name, e.target.value)
                          }
                        ></textarea>
                        <div className="flex justify-between">
                          <input
                            type="text"
                            name="userName"
                            className="border w-[50%] py-2 px-2 outline-none my-4"
                            placeholder="enter your name"
                            value={reviewField.userName}
                            onChange={(e) =>
                              handleOnChange(e.target.name, e.target.value)
                            }
                          />
                          <Rating
                            name="rating"
                            precision={0.5}
                            value={rating}
                            onChange={(e) =>
                              handleOnChange(e.target.name, e.target.value)
                            }
                          />
                        </div>
                        <button
                          type="submit"
                          className=" bg-[#3BB77E] px-4 py-2 mt- text-white font-bold rounded-md"
                        >
                          submit review
                        </button>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* <div className="col-3">
                <Sidebar filterByPrice={false} />
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
