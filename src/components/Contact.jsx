import { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const { creators } = useContext(DataContext);
  const { show, toggleHandler, setShow, darkMode } = useContext(ThemeContext);
  const [singleCreator, setSingleCreator] = useState();

  const nameChange = function (event) {
    setSingleCreator(
      creators.find((creator) => creator.name === event.target.innerText)
    );
    setShow(!show);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (show && !event.target.closest(".contact_info")) {
        setShow(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [show]);

  console.log(show);
  return (
    <div className="contact">
      <div className="contact_container">
        {darkMode ? (
          <img
            className="logo_txt_svg"
            src="../img/logo_txt_light.svg"
            alt="CookAi text logo"
          />
        ) : (
          <img
            className="logo_txt_svg"
            src="../img/logo_txt_dark.svg"
            alt="CookAi text logo"
          />
        )}

        <form className="contact_form" action="">
          <div className="contact_info">
            <img
              className="contact_aside_img"
              src={
                !singleCreator
                  ? darkMode
                    ? "./img/cookai.jpg"
                    : "./img/cookai_dark.jpg"
                  : singleCreator?.img
              }
              alt="cookAi profile image"
            />
            <aside className="contact_aside_info">
              <div className="custom-select">
                <FontAwesomeIcon
                  className={`custom-arrow ${
                    show ? "rotate" : "rotatereverse"
                  } `}
                  icon={faCircleChevronDown}
                />
                <p onClick={toggleHandler} name="" id="">
                  select your creater
                </p>
                <div
                  onClick={nameChange}
                  className={show ? "creatorSelect" : "creatorSelect_hide"}
                >
                  {creators?.map((creator, index) => (
                    <>
                      <h6
                        className="creatorOption"
                        key={index}
                        value={creator.name}
                      >
                        {creator.name}
                      </h6>
                      <hr className="hr" />
                    </>
                  ))}
                </div>
              </div>

              <input placeholder="write your full name here" type="text" />
              <input placeholder="write your Email here" type="email" />
            </aside>
          </div>
          <textarea
            className="contact_area"
            placeholder="write your message here"
          ></textarea>

          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
