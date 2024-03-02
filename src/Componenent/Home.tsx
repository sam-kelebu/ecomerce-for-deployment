import React from "react";
import moduleName from "../pages/Gotocart";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import Shope from "./Shope";
// import Mycart from "./Mycart";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="navbar">
        <div className="heade">
          <h2 className="text-header">BOAZ Fashion</h2>
        </div>
        <div className="btoo">
          <button onClick={() => navigate("/Gotocart")} className="nav-btn">
            Cart
          </button>
        </div>
      </div>

      <div className="emptyheader">
        <img className="empty" src="backg.jpg" alt="" />
      </div>
      <div className="cata">
        <h2 className="text-cata">Catagories</h2>
        <p className="para-cata">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Numquam esse possimus optio quidem obcaecati vitae impedit placeat
          veniam <br />
          laboriosam quisquam praesentium quasi deleniti, illum excepturi id,
          magni commodi atque. Ipsa.
        </p>
        <button className="rectangle-69" onClick={() => navigate("/Shope")}>
          Button
        </button>
      </div>
      <br />

      <div className="grid13">
        <div className="grid131">
          <img className="divq" src="divq.jpg" alt="" />
        </div>
        <div className="grid132">
          <img className="dive" src="emty1.jpg" alt="" />
        </div>
        <div className="grid133">
          <img className="divr" src="divr.jpg" alt="" />
        </div>
      </div>
      <div className="lattest">
        <h2 className="lattesxt">Our lattest arrival</h2>
        <p className="our-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Numquam esse possimus optio quidem obcaecati vitae impedit placeat
          veniam <br />
          laboriosam quisquam praesentium quasi deleniti, illum excepturi id,
          magni commodi atque. Ipsa.
        </p>
        <button className="rectangle-70" onClick={() => navigate("./Shope")}>
          Button
        </button>
      </div>
      <br />
      <br />
      <div className="separate">
        <div className="rectangle20">
          <img className="divw" src="divw.jpg" alt="" />
        </div>
        <div className="rectangle21">
          <img className="shi" src="shif.jpg" alt="" />
        </div>
        <div className="rectangle22">
          <img className="shifo" src="shifff.jpg" alt="" />
        </div>
      </div>
      <div className="ourpr">
        <div className="pro-he">
          <h2 className="pro-tex">Our Product</h2>
        </div>
        <div className="ourppp">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> Repudiandae obcaecati blanditiis quas, .
          </p>
          <button className="pro-btn" onClick={() => navigate("/Shope")}>
            Button{" "}
          </button>
        </div>
        <div className="frame-21">
          <div className="rect121">
            <img className="shon" src="shifffon.jpg" alt="" />
          </div>
          <div className="rect122">
            <img className="shin" src="shif.jpg" alt="" />
          </div>
          <div className="rect123">
            <img className="shino" src="shib.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
