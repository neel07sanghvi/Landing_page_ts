import React, { useEffect, useState } from "react";
import styles from "../styles/services.module.css";

const Service = () => {
  const [navbar_active, setnavbar_active] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY <= screen.height) {
        setnavbar_active(true);
        console.log("working")
      }
      else{
        console.log("not")
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      id="services"
      className="w-full h-[auto] flex justify-center items-center"
    >
      {/* web view */}
      <div
        className="
      lg:w-full lg:h-screen lg:flex lg:justify-center lg:items-center
      md:hidden
      hidden"
      >
        <div className="flex flex-col justify-center items-start h-full w-[50%]">
          <div className={styles.services_font}>
            <div className={styles.services_font1}>Let&apos;s</div>
            <div className={styles.services_font1}>Put Technology </div>
            <div className={styles.services_font1}>At Work!</div>
          </div>
          <div className="flex w-full p-16 py-12 justify-start  items-center  ">
            <div className="flex justify-center items-center px-2">
              <img
                className="h-[25px]"
                src="/assets/services/upload.png"
                alt="upload"
              />
              <div className="px-3">Upload</div>
            </div>
            <div className="flex justify-center items-center px-4">
              <img
                className="h-[25px]"
                src="/assets/services/click.png"
                alt="click"
              />
              <div className="px-3">Click</div>
            </div>
            <div className="flex justify-center items-center px-4">
              <img
                className="h-[25px]"
                src="/assets/services/explore.png"
                alt="explore"
              />
              <div className="px-3">Explore</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full w-[50%] ">
          <div className="h-[600px] w-[500px] relative flex justify-start  items-center">
            <a href="/authentication" target="_blank" className={styles.services_box}>
              <div className="h-[15%] w-[100%] flex flex-col justify-center items-start z-101">
                <img
                  className="h-[70%]"
                  src="/assets/services/sheeticon.png"
                  alt="sheet"
                />
              </div>
              <div className="h-[85%] w-full flex flex-col relative justify-end items-center z-101 ">
                <div className={styles.animation_box}>
                  <div className={styles.darwinsheet}>
                    <div className="font-bold text-xl py-[10px]">
                      Darwin Sheet
                    </div>
                    <img
                      className="h-[45px] p-[15px] font-bold"
                      src="/assets/services/arrow.png"
                      alt="arrow"
                    />
                  </div>
                  <div className={styles.sheet_text}>
                    With Darwin sheet you can create data apps, explore the data
                    inferences and evolve your business. Without any
                    pre-requisit of coding languages.
                  </div>
                </div>
              </div>
            </a>
            <img
              src="/assets/services/boximg1.png"
              className={styles.boximg1}
              alt="box"
            />
            <img
              src="/assets/services/boximg2.png"
              className={styles.boximg2}
              alt="box"
            />
            <img
              src="/assets/services/boximg3.png"
              className={styles.boximg3}
              alt="box"
            />
            <img
              src="/assets/services/boximg4.png"
              className={styles.boximg4}
              alt="box"
            />
          </div>
        </div>
      </div>

      {/* tab view */}
      <div
        className="
      md:w-full md:h-[auto] md:flex md:justify-center md:items-center
      lg:hidden
      hidden"
      >
        <div className="flex flex-col justify-center items-start h-full w-[50%]">
          <div className={styles.services_font_tab}>
            <div className={styles.services_font1_tab}>Let&apos;s</div>
            <div className={styles.services_font1_tab}>Put Technology </div>
            <div className={styles.services_font1_tab}>At Work!</div>
          </div>
          <div className="flex w-full p-16 py-12 justify-start  items-center  ">
            <div className="flex justify-center items-center px-2 text-sm">
              <img
                className="h-[20px]"
                src="/assets/services/upload.png"
                alt="upload"
              />
              <div className="px-3">Upload</div>
            </div>
            <div className="flex justify-center items-center px-2 text-sm">
              <img
                className="h-[20px]"
                src="/assets/services/click.png"
                alt="click"
              />
              <div className="px-3">Click</div>
            </div>
            <div className="flex justify-center items-center px-2 text-sm">
              <img
                className="h-[20px]"
                src="/assets/services/explore.png"
                alt="explore"
              />
              <div className="px-3">Explore</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full w-[50%] ">
          <div className="h-[600px] w-[370px] relative flex justify-start  items-center">
            <div className={styles.services_box_tab}>
              <div className="h-[15%] w-[100%] flex flex-col justify-center items-start z-101">
                <img
                  className="h-[70%]"
                  src="/assets/services/sheeticon.png"
                  alt="sheet"
                />
              </div>
              <div className="h-[85%] w-full flex flex-col relative justify-end items-center z-101 ">
                <div className={styles.animation_box_tab}>
                  <div className={styles.darwinsheet_tab}>
                    <div className="font-bold text-xl py-[10px]">
                      Darwin Sheet
                    </div>
                    <img
                      className="h-[45px] p-[15px] font-bold"
                      src="/assets/services/arrow.png"
                      alt="arrow"
                    />
                  </div>
                  <div className={styles.sheet_text_tab}>
                    With Darwin sheet you can create data apps, explore the data
                    inferences and evolve your business. Without any
                    pre-requisit of coding languages.
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/assets/services/boximg1.png"
              className={styles.boximg1_tab}
              alt="box"
            />
            <img
              src="/assets/services/boximg2.png"
              className={styles.boximg2_tab}
              alt="box"
            />
            <img
              src="/assets/services/boximg3.png"
              className={styles.boximg3_tab}
              alt="box"
            />
            <img
              src="/assets/services/boximg4.png"
              className={styles.boximg4_tab}
              alt="box"
            />
          </div>
        </div>
      </div>

      {/* mob view */}
      <div
        className="
      w-full h-screen flex flex-col justify-start items-center relative
      lg:hidden
      md:hidden"
      >
        <div className="h-[10%] w-full"></div>
        <div className="flex flex-col justify-between items-center h-[30%] w-full">
          <div className={styles.services_font_mob}>
            <div className={styles.services_font1_mob}>Let&apos;s</div>
            <div className={styles.services_font1_mob}>Put Technology </div>
            <div className={styles.services_font1_mob}>At Work!</div>
          </div>
          <div className="flex w-full p-10 justify-center  items-center  ">
            <div className="flex justify-center items-center px-4">
              <img
                className="h-[20px]"
                src="/assets/services/upload.png"
                alt="upload"
              />
              <div className="px-3  text-sm">Upload</div>
            </div>
            <div className="flex justify-center items-center px-4">
              <img
                className="h-[20px]"
                src="/assets/services/click.png"
                alt="click"
              />
              <div className="px-3 text-sm">Click</div>
            </div>
            <div className="flex justify-center items-center px-4">
              <img
                className="h-[20px]"
                src="/assets/services/explore.png"
                alt="explore"
              />
              <div className="px-3  text-sm">Explore</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-[55%] w-full">
          <div className="h-[600px] w-[280px] relative flex justify-center  items-center">
            <div className={styles.services_box_mob}>
              <div className="h-[15%] w-[100%] flex flex-col justify-center items-start z-101">
                <img
                  className="h-[70%]"
                  src="/assets/services/sheeticon.png"
                  alt="sheet"
                />
              </div>

              <div className="h-[85%] w-full flex flex-col relative justify-end items-center z-101 ">
                <div className={styles.animation_box_mob}>
                  <div
                    className={
                      navbar_active
                        ? styles.darwinsheet_mob_ani
                        : styles.darwinsheet_mob
                    }
                  >
                    <div className="font-bold text-[15px]">
                      Darwin Sheet
                    </div>
                  </div>
                  <div
                    className={
                      navbar_active
                        ? styles.sheet_text_mob_ani
                        : styles.sheet_text_mob
                    }
                  >
                    <div className="text-[9px]">
                      With Darwin sheet you can create data apps, explore the
                      data inferences and evolve your business. Without any
                      pre-requisit of coding languages.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              src="/assets/services/boximg1.png"
              className={styles.boximg1_mob}
              alt="box"
            />
            <img
              src="/assets/services/boximg2.png"
              className={styles.boximg2_mob}
              alt="box"
            />
            <img
              src="/assets/services/boximg3.png"
              className={styles.boximg3_mob}
              alt="box"
            />
            <img
              src="/assets/services/boximg4.png"
              className={styles.boximg4_mob}
              alt="box"
            />
          </div>
        </div>
        <a className="absolute bottom-[50px]"  href="/#aboutus">
          <img className="py-6" src="/assets/downarrow.png" alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Service;
