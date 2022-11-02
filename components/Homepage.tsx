import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/homepage.module.css";

const Homepage = () => {
  const [radioclick, setradioclick] = useState(1);

  const [state, setState] = React.useState(0);
  const counter = React.useRef(0);

  React.useEffect(() => {
    if (true) {
      counter.current += 1;
      const timer = setTimeout(() => {
        setradioclick(radioclick + 1);
        console.log(radioclick);
        if (radioclick === 3) {
          setradioclick(1);
        }
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [radioclick]);

  function check1() {
    setradioclick(1);
  }
  function check2() {
    setradioclick(2);
  }
  function check3() {
    setradioclick(3);
  }

  function jump_service() {}

  return (
    <div
      id="home"
      className="w-screen h-screen lg:h-screen md:h-[auto] flex justify-center items-center"
    >
      {/* web view */}
      <div
        className="
      lg:w-screen lg:h-screen lg:flex lg:justify-center lg:items-center
      md:hidden
      hidden
      "
      >
        <div className="h-[screen] w-[50%] flex flex-col justify-center items-start pl-16 relative">
          <div className="relative h-[75px] w-full flex ">
            <div
              className={
                radioclick === 1
                  ? styles.explore
                  : "opacity-0 absolute top-[0px]"
              }
            >
              Explore
            </div>
            <div
              className={
                radioclick === 2
                  ? styles.explore
                  : "opacity-0 absolute top-[0px]"
              }
            >
              Analyse
            </div>
            <div
              className={
                radioclick === 3
                  ? styles.explore
                  : "opacity-0 absolute top-[0px]"
              }
            >
              Model
            </div>
          </div>
          <div className={styles.thedata}>The data</div>
          <div className={styles.browser_text}>At your Browser!</div>
          <div className={styles.content}>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;
          </div>
          <div className={styles.explorediv}>
            <a href="/#services">
              <div className={styles.explore_btn}>
                <span>Explore</span>
                <img
                  className="h-[15px]"
                  src="/assets/homepage/arrow.png"
                  alt="arrow"
                />
              </div>
            </a>
          </div>
        </div>

        <div className="h-screen w-[50%] flex flex-col ">
          <div className=" h-[100vh] w-full  flex justify-center items-center relative">
            <div
              className={radioclick === 1 ? styles.slider : styles.slider_hide}
            >
              <img
                className="h-[70%]"
                src="/assets/homepage/DataAnalytics.png"
                alt="img"
              />
            </div>

            <div
              className={radioclick === 2 ? styles.slider : styles.slider_hide}
            >
              <img
                className="h-[70%]"
                src="/assets/homepage/DataProcessing.png"
                alt="img"
              />
            </div>

            <div
              className={
                radioclick === 3 || radioclick === 4
                  ? styles.slider
                  : styles.slider_hide
              }
            >
              <img
                className="h-[70%]"
                src="/assets/homepage/DataModelling.png"
                alt="img"
              />
            </div>

            <div className="absolute flex justify-center items-center bottom-[10%]">
              <div className={styles.buttondiv}>
                <button
                  onClick={check1}
                  className={radioclick == 1 ? styles.button_ : styles.button}
                ></button>
              </div>
              <div className={styles.buttondiv}>
                <button
                  onClick={check2}
                  className={radioclick == 2 ? styles.button_ : styles.button}
                ></button>
              </div>
              <div className={styles.buttondiv}>
                <button
                  onClick={check3}
                  className={
                    radioclick === 3 || radioclick === 4
                      ? styles.button_
                      : styles.button
                  }
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tab view  */}
      <div
        className="
      md:w-screen md:h-[auto] md:flex md:justify-center md:items-center md:mt-32
      lg:hidden
      hidden
      "
      >
        <div className="h-[auto] w-[50%] flex flex-col justify-center items-start pl-16 relative">
          <div className="relative h-[75px] w-full flex ">
            <div
              className={
                radioclick === 1
                  ? styles.explore_tab
                  : "opacity-0 absolute top-[0px]"
              }
            >
              Explore
            </div>
            <div
              className={
                radioclick === 2
                  ? styles.explore_tab
                  : "opacity-0 absolute top-[0px]"
              }
            >
              Analyse
            </div>
            <div
              className={
                radioclick === 3
                  ? styles.explore_tab
                  : "opacity-0 absolute top-[0px]"
              }
            >
              Model
            </div>
          </div>
          <div className={styles.thedata_tab}>The data</div>
          <div className={styles.browser_text_tab}>At your Browser!</div>
          <div className={styles.content_tab}>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;
          </div>
          <div className={styles.explorediv_tab}>
            <a href="/#services">
              <div className={styles.explore_btn_tab}>
                <span>Explore</span>
                <img
                  className="h-[15px]"
                  src="/assets/homepage/arrow.png"
                  alt="arrow"
                />
              </div>
            </a>
          </div>
        </div>

        <div className="h-[auto] w-[50%] flex flex-col ">
          <div className=" h-[auto] w-full  flex justify-center items-center relative">
            <div
              className={radioclick === 1 ? styles.slider : styles.slider_hide}
            >
              <img
                className="w-[100%]"
                src="/assets/homepage/DataAnalytics.png"
                alt="img"
              />
            </div>

            <div
              className={radioclick === 2 ? styles.slider : styles.slider_hide}
            >
              <img
                className="w-[100%]"
                src="/assets/homepage/DataProcessing.png"
                alt="img"
              />
            </div>

            <div
              className={
                radioclick === 3 || radioclick === 4
                  ? styles.slider
                  : styles.slider_hide
              }
            >
              <img
                className="w-[100%]"
                src="/assets/homepage/DataModelling.png"
                alt="img"
              />
            </div>

            <div className="absolute flex justify-center items-center bottom-[10%]">
              <div className={styles.buttondiv}>
                <button
                  onClick={check1}
                  className={radioclick == 1 ? styles.button_ : styles.button}
                ></button>
              </div>
              <div className={styles.buttondiv}>
                <button
                  onClick={check2}
                  className={radioclick == 2 ? styles.button_ : styles.button}
                ></button>
              </div>
              <div className={styles.buttondiv}>
                <button
                  onClick={check3}
                  className={
                    radioclick === 3 || radioclick === 4
                      ? styles.button_
                      : styles.button
                  }
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* mob view */}
      <div className="
      w-screen h-screen flex flex-col justify-center items-center
      md:hidden
      lg:hideen
      ">
        <div className="h-[10%] w-full" ></div>
        <div className="h-[50%] w-full flex flex-col">
          <div className=" h-[50vh] w-full  flex justify-center items-center relative">
            <div
              className={radioclick === 1 ? styles.slider : styles.slider_hide}
            >
              <img
                className="h-[40%]"
                src="/assets/homepage/DataAnalytics.png"
                alt="img"
              />
            </div>

            <div
              className={radioclick === 2 ? styles.slider : styles.slider_hide}
            >
              <img
                className="h-[40%]"
                src="/assets/homepage/DataProcessing.png"
                alt="img"
              />
            </div>

            <div
              className={
                radioclick === 3 || radioclick === 4
                  ? styles.slider
                  : styles.slider_hide
              }
            >
              <img
                className="h-[40%]"
                src="/assets/homepage/DataModelling.png"
                alt="img"
              />
            </div>

            <div className="absolute flex justify-center items-center bottom-[-10px]">
              <div className={styles.buttondiv}>
                <button
                  onClick={check1}
                  className={radioclick == 1 ? styles.button_ : styles.button}
                ></button>
              </div>
              <div className={styles.buttondiv}>
                <button
                  onClick={check2}
                  className={radioclick == 2 ? styles.button_ : styles.button}
                ></button>
              </div>
              <div className={styles.buttondiv}>
                <button
                  onClick={check3}
                  className={
                    radioclick === 3 || radioclick === 4
                      ? styles.button_
                      : styles.button
                  }
                ></button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[40%] w-full flex flex-col justify-center items-center  relative">
          <div className="relative flex justify-center items-center h-[75px] w-full flex ">
            <div
              className={
                radioclick === 1
                  ? styles.explore_mob
                  : "opacity-0 absolute top-[0px]"
              }
            >
              Explore
            </div>
            <div
              className={
                radioclick === 2
                  ? styles.explore_mob
                  : "opacity-0 absolute top-[0px]"
              }
            >
              Analyse
            </div>
            <div
              className={
                radioclick === 3
                  ? styles.explore_mob
                  : "opacity-0 absolute top-[0px]"
              }
            >
              Model
            </div>
          </div>
          <div className={styles.thedata_mob}>The data</div>
          <div className={styles.browser_text_mob}>At your Browser!</div>
          <div className={styles.content_mob}>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;
          </div>
          <div className={styles.explorediv_mob}>
            <a href="/#services">
              <div className={styles.explore_btn_mob}>
                <span>Explore</span>
                <img
                  className="h-[15px]"
                  src="/assets/homepage/arrow.png"
                  alt="arrow"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
