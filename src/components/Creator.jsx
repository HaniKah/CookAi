import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import LogoTxt from "./LogoTxt";
import LogoAlien from "./LogoAlien";
import moment from "moment/moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";

export default function Creator() {
  const { creators } = useContext(DataContext);
  const params = useParams();
  const creator = creators?.find((creator) => creator.id === Number(params.id));
  const hobbiesArr = creator?.hobbies.split(",");
  const navigate = useNavigate();

  console.log("my param", params.id);
  console.log("my creator", creator);
  console.log("hobbiies", hobbiesArr);

  return (
    <div className="creator">
      <div className="creator_container">
        <div
          style={{
            backgroundImage: `url(${creator?.img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: " center",
            height: "620px",
            position: "relative",
            boxShadow: "2px 2px 8px var(--shadow)",
            borderRadius: "0 0 0 30px",
          }}
          className="creator_img"
        >
          <div className="creator_navigation">
            {creators?.map((link) => {
              return (
                <NavLink
                  to={`/creators/${link.id}`}
                  key={link.id}
                  className={
                    link.id === Number(params.id)
                      ? "hide"
                      : "creator_navigation_row"
                  }
                >
                  <div
                    style={{
                      backgroundImage: `url(${link.img})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: " center",
                      width: "70px",
                      height: "75px",
                      position: "relative",
                      boxShadow: "2px 2px 8px var(--shadow)",
                      borderRadius: "30px 0 30px 0",
                      zIndex: 5,
                      cursor: "pointer",
                    }}
                  ></div>
                  <div className="creator_navigation_txt">
                    <span>{link.name}</span>
                  </div>
                </NavLink>
              );
            })}
          </div>
          <div className="creator_nav_back">
            <div
              onClick={() => navigate("/creators")}
              className="creator_nav_back_row"
            >
              <div className="creator_nav_back_icon">
                <FontAwesomeIcon className="creator_icon" icon={faArrowLeft} />
              </div>
              <div className="creator_navigation_txt">
                <span>go back</span>
              </div>
            </div>
            <div
              onClick={() => navigate("/contact")}
              className="creator_nav_back_row"
            >
              <div className="creator_nav_back_icon">
                <FontAwesomeIcon className="creator_icon" icon={faEnvelope} />
              </div>
              <div className="creator_navigation_txt">
                <span>send message</span>
              </div>
            </div>
          </div>
        </div>
        <div className="creator_info">
          <div className="creator_info_row">
            <h3>Day of birth</h3>
            <span>{creator?.date}</span>
          </div>
          <div className="creator_info_row">
            <h3>Email</h3>
            <span>{creator?.email}</span>
          </div>
          <div className="creator_info_row_full">
            <h3>Bio</h3>
            <p>{creator?.bio}</p>
          </div>
          <div className="creator_info_row_full">
            <h3>Hobbies</h3>
            <div className="creator_info_hobbies_tag">
              {hobbiesArr?.map((label, index) => {
                return <span key={index}>{label}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="creator_title">
        <h1>
          {
            creator?.name /*
          useEffect(() => {
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(65)
                  .typeString(creator.fields.name)
                  .start();
              }
          }
          />; }, [params.name])*/
          }
        </h1>
        <div>
          <LogoTxt />
          <LogoAlien />
        </div>
      </div>
    </div>
  );
}
