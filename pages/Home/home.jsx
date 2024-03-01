import React from "react";
import Banner from "../../assets/coverpage1.webp";
import prod1 from "../../assets/airpods.jpg"
import prod2 from '../../assets/Iphone.jpg'
import prod3 from '../../assets/headset1.jpg'
import prod4 from '../../assets/watch2.webp'
import prod5 from '../../assets/speaker2.jpg'
import prod6 from '../../assets/headset2.jpg'
import prod7 from '../../assets/mouse.jpg'
import prod8 from '../../assets/pc.webp'
import prod9 from '../../assets/laptop.jpg'
import "./home.css";

export const Home = () => {
  return (
    <div className="body">
      <div className="section1">
        <img src={Banner} alt="" />
      </div>


      <div className="sections">
        <p className="header"> Categories </p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>Button</button>
        <div className="normalImages">
          <div className="imageBox">
            <img src={prod1} alt="" />
            <div className="imageDesc">
              <p> Airpods pro </p>
              <p> Price: $135 </p>
            </div>
          </div>
          <div className="imageBox">
            <img src={prod2} alt="" />
            <div className="imageDesc">
              <p> Iphone pro max </p>
              <p> Price: $999 </p>
            </div>
          </div>
          <div className="imageBox">
            <img src={prod3} alt="" />
            <div className="imageDesc">
              <p> Headsets </p>
              <p> Price:$235 </p>
            </div>
          </div>
        </div>
      </div>


      <div className="sections">
        <p className="header"> Our latest arrivals </p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>Button</button>
        <div className="distortedImages">
          <img src={prod4} alt=""/>
          <img className='middleImage' src={prod5} alt=""/>
          <img src={prod6} alt=""/>
        </div>
      </div>

      <div className="sections">
        <p className="header"> Our Products </p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>Button</button>
        <div className="normalImages">
          <img src={prod7} alt=""/>
          <img src={prod8} alt=""/>
          <img src={prod9} alt=""/>
        </div>
      </div>
      <hr class="horizontal-line"/>
      <div className="gap"></div>
    </div>
  );
};
