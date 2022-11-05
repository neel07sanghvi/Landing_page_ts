import React from "react";
import styles from "../styles/aboutus.module.css";

const Aboutus = () => {
  return (
    <div
      id="aboutus"
      className="w-full lg:h-screen md:h-[auto] flex flex-col justify-center items-center"
    >

      {/* web view */}
      <div className="
      lg:w-full lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center
      md:hidden
      hidden
      " >
        <div className="h-[600px] w-[1000px] relative flex justify-center items-center">
          <div className={styles.mainbox}>
            Evolution is ultimate, and we are committed to empowering people to
            adapt the changing technology landscapes. We help people and
            businesses to Evolve in the Data era.
          </div>
          <div className={styles.subbox}>
            <div className="flex justify-center items-center flex-col ">
              <div>
                &quot;it not the stronger or the most intelligent who will
                survive but those who can best manage change&quot;
              </div>
              <div className="w-full flex justify-end items-center">
                <div>-Charles Darwin</div>
              </div>
            </div>
          </div>
          <img
            className={styles.boximg1}
            src="/assets/aboutus/boximg1.png"
            alt="img"
          />
          <img
            className={styles.boximg2}
            src="/assets/aboutus/boximg2.png"
            alt="img"
          />
          <img
            className={styles.comma}
            src="/assets/aboutus/comma.png"
            alt="img"
          />
        </div>
      </div>

      {/* tab view */}
       <div className="
      md:w-full md:h-[auto] md:flex md:flex-col md:justify-center md:items-center
      lg:hidden
      hidden
      " > 
        <div className="h-[500px] w-[767px] relative flex justify-center items-center">
          <div className={styles.mainbox_md}>
            Evolution is ultimate, and we are committed to empowering people to
            adapt the changing technology landscapes. We help people and
            businesses to Evolve in the Data era.
          </div>
          <div className={styles.subbox_md}>
            <div className="flex justify-center items-center flex-col ">
              <div>
                &quot;it not the stronger or the most intelligent who will
                survive but those who can best manage change&quot;
              </div>
              <div className="w-full flex justify-end items-center">
                <div>-Charles Darwin</div>
              </div>
            </div>
          </div>
          <img
            className={styles.boximg1_md}
            src="/assets/aboutus/boximg1.png"
            alt="img"
          />
          <img
            className={styles.boximg2_md}
            src="/assets/aboutus/boximg2.png"
            alt="img"
          />
          <img
            className={styles.comma_md}
            src="/assets/aboutus/comma.png"
            alt="img"
          />
        </div>
      </div>
      
      {/* mob view */}
      <div className="
      w-full h-screen flex flex-col justify-center items-center relative
      lg:hidden
      md:hidden
      " >
        <div className="h-[650px]  w-full min-w-[280px] relative flex justify-center items-center">
          <div className={styles.mainbox_mob}>
            Evolution is ultimate, and we are committed to empowering people to
            adapt the changing technology landscapes. We help people and
            businesses to Evolve in the Data era.
          </div>
          <div className={styles.subbox_mob}>
            <div className="flex justify-center items-center flex-col ">
              <div>
                &quot;it not the stronger or the most intelligent who will
                survive but those who can best manage change&quot;
              </div>
              <div className="w-full flex justify-end items-center">
                <div>-Charles Darwin</div>
              </div>
            </div>
          </div>
          <img
            className={styles.boximg1_mob}
            src="/assets/aboutus/boximg1.png"
            alt="img"
          />
          <img
            className={styles.boximg2_mob}
            src="/assets/aboutus/boximg2.png"
            alt="img"
          />
          <img
            className={styles.comma_mob}
            src="/assets/aboutus/comma.png"
            alt="img"
          />
          
        </div>
        <a className="absolute bottom-[50px]" href="/#contactus" >
            <img className="py-6" src="/assets/downarrow.png" alt="arrow" />
          </a>
      </div>
      
    </div>
  );
};

export default Aboutus;
