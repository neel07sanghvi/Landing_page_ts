import React from "react";
import styles from "../styles/contactus.module.css";

const Contactus = () => {
  return (
    <div
      id="contactus"
      className="w-full lg:h-screen md:h-auto flex flex-col justify-center items-center"
    >
      <div
        className="
      lg:w-full lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center
      md:hidden
      hidden
      "
      >
        <div className="h-[10vh] w-full "></div>
        <div className="h-[25vh] w-full flex flex-col justify-end items-center">
          <div className={styles.contactus_text1}>
            Your curiosity worth a coffee,
          </div>
          <div className={styles.contactus_text2}>lets catch up!</div>
        </div>
        <div className="h-[65vh]  w-full flex flex-col justify-center items-center">
          <div className="flex justify-center items-center h-[400px] w-[600px] relative">
            <div className={styles.contactus_box}>
              <div className="w-full h-[20%] flex justify-end items-center">
                <img
                  src="/assets/sheet.png"
                  alt="logo"
                  className="h-[50px]"
                />
              </div>
              <div className={styles.contactus_innerbox}>
                <div className=" h-[40%] w-full flex justify-center items-center ">
                  <div className="h-[50%] w-[15%] flex justify-center items-center">
                    <img
                      className="h-[70%]"
                      src="/assets/contactus/innermail.png"
                      alt="mail"
                    />
                  </div>
                  <div className="h-[100%] w-[85%] flex flex-col justify-center items-start  ">
                    <div>You can drop a mail at,</div>
                    <div>jaydeepdedaniya@gmail.com</div>
                  </div>
                </div>
                <div className=" h-[40%] w-full flex justify-center items-center ">
                  <div className="h-[50%] w-[15%] flex justify-center items-center">
                    <img
                      className="h-[70%]"
                      src="/assets/contactus/innerphone.png"
                      alt="mail"
                    />
                  </div>
                  <div className="h-[100%] w-[85%] flex flex-col justify-center items-start ">
                    <div>For the fox who loves informal Networking!</div>
                    <div>+91 7359345474</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/assets/contactus/mail.png"
              className={styles.contactus_mail}
              alt="mail"
            />
            <img
              src="/assets/contactus/phone.png"
              className={styles.contactus_phone}
              alt="phone"
            />
            <img
              src="/assets/contactus/sms.png"
              className={styles.contactus_sms}
              alt="sms"
            />
            <img
              src="/assets/contactus/coffee.png"
              className={styles.contactus_coffee}
              alt="coffee"
            />
          </div>
        </div>
      </div>
      <div
        className="
      lg:hidden
      md:w-full md:h-[auto] md:flex md:flex-col md:justify-center md:items-center md:mt-10
      hidden
      "
      >
        <div className="h-[auto] w-full flex flex-col justify-end items-center">
          <div className={styles.contactus_text1}>
            Your curiosity worth a coffee,
          </div>
          <div className={styles.contactus_text2}>lets catch up!</div>
        </div>
        <div className="h-[auto]  w-full flex flex-col justify-center items-center mt-10">
          <div className="flex justify-center items-center h-[400px] w-[600px] relative">
            <div className={styles.contactus_box}>
              <div className="w-full h-[20%] flex justify-end items-center">
                <img
                  src="/assets/sheet.png"
                  alt="logo"
                  className="h-[50px]"
                />
              </div>
              <div className={styles.contactus_innerbox}>
                <div className=" h-[40%] w-full flex justify-center items-center ">
                  <div className="h-[50%] w-[15%] flex justify-center items-center">
                    <img
                      className="h-[70%]"
                      src="/assets/contactus/innermail.png"
                      alt="mail"
                    />
                  </div>
                  <div className="h-[100%] w-[85%] flex flex-col justify-center items-start  ">
                    <div>You can drop a mail at,</div>
                    <div>jaydeepdedaniya@gmail.com</div>
                  </div>
                </div>
                <div className=" h-[40%] w-full flex justify-center items-center ">
                  <div className="h-[50%] w-[15%] flex justify-center items-center">
                    <img
                      className="h-[70%]"
                      src="/assets/contactus/innerphone.png"
                      alt="mail"
                    />
                  </div>
                  <div className="h-[100%] w-[85%] flex flex-col justify-center items-start ">
                    <div>For the fox who loves informal Networking!</div>
                    <div>+91 7359345474</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/assets/contactus/mail.png"
              className={styles.contactus_mail}
              alt="mail"
            />
            <img
              src="/assets/contactus/phone.png"
              className={styles.contactus_phone}
              alt="phone"
            />
            <img
              src="/assets/contactus/sms.png"
              className={styles.contactus_sms}
              alt="sms"
            />
            <img
              src="/assets/contactus/coffee.png"
              className={styles.contactus_coffee}
              alt="coffee"
            />
          </div>
        </div>
      </div>

      <div
        className="
      lg:hidden
      md:hidden
      w-full h-screen flex flex-col justify-center items-center relative
      "
      >
        <div className="h-[10vh] w-full "></div>
        <div className="h-[30vh] w-full flex flex-col justify-end items-center">
          <div className={styles.contactus_text1_mob}>Your curiosity</div>
          <div className={styles.contactus_text1_mob}>worth a coffee,</div>
          <div className={styles.contactus_text2_mob}>lets catch up!</div>
        </div>
        <div className="h-[50vh]  w-full flex flex-col justify-center items-center">
          <div className="flex justify-center items-center h-[300px] w-[280px] relative">
            <div className={styles.contactus_box_mob}>
              <div className="w-full h-[20%] flex justify-end items-center">
                <img
                  src="/assets/sheet.png"
                  alt="logo"
                  className="h-[40px]"
                />
              </div>
              <div className={styles.contactus_innerbox_mob}>
                <div className=" h-[40%] w-full flex justify-center items-center ">
                  <div className="h-[50%] w-[15%] flex justify-center items-center">
                    <img
                      className="h-[70%]"
                      src="/assets/contactus/innermail.png"
                      alt="mail"
                    />
                  </div>
                  <div className="h-[100%] w-[85%] flex flex-col justify-center items-start  ">
                    <div>You can drop a mail at,</div>
                    <div>jaydeepdedaniya@gmail.com</div>
                  </div>
                </div>
                <div className=" h-[40%] w-full flex justify-center items-center ">
                  <div className="h-[50%] w-[15%] flex justify-center items-center">
                    <img
                      className="h-[70%]"
                      src="/assets/contactus/innerphone.png"
                      alt="mail"
                    />
                  </div>
                  <div className="h-[100%] w-[85%] flex flex-col justify-center items-start ">
                    <div>For the fox who loves informal Networking!</div>
                    <div>+91 7359345474</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/assets/contactus/mail.png"
              className={styles.contactus_mail_mob}
              alt="mail"
            />
            <img
              src="/assets/contactus/phone.png"
              className={styles.contactus_phone_mob}
              alt="phone"
            />
            <img
              src="/assets/contactus/sms.png"
              className={styles.contactus_sms_mob}
              alt="sms"
            />
            <img
              src="/assets/contactus/coffee.png"
              className={styles.contactus_coffee_mob}
              alt="coffee"
            />
          </div>
        </div>
        <a className="absolute bottom-[30px]"  href="/#">
          <img className="py-6" src="/assets/uparrow.png" alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Contactus;
