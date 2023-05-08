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
  const creator = creators[params.name];
  const dateData = formatDate(creator.fields.birth);
  const navigate = useNavigate();
  function formatDate(dateString) {
    const date = moment(dateString).format("DD MMM YYYY");
    return date;
  }

  console.log("my param", typeof params.name);
  console.log("my creator", creator);
  console.log("my sate", dateData);

  return (
    <div className="creator">
      <div className="creator_container">
        <div
          style={{
            backgroundImage: `url(${creator.fields.profile.fields.file.url})`,
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
            {creators.map((link, index) => {
              return (
                <NavLink
                  to={`/creators/${index}`}
                  key={index}
                  className={
                    index === Number(params.name)
                      ? "hide"
                      : "creator_navigation_row"
                  }
                >
                  <div
                    style={{
                      backgroundImage: `url(${link.fields.profile.fields.file.url})`,
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
                    <span>{link.fields.name}</span>
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
            <span>{dateData}</span>
          </div>
          <div className="creator_info_row">
            <h3>Email</h3>
            <span>{creator.fields.email}</span>
          </div>
          <div className="creator_info_row_full">
            <h3>Bio</h3>
            <p>{creator.fields.bio}</p>
          </div>
          <div className="creator_info_row_full">
            <h3>Hobbies</h3>
            <div className="creator_info_hobbies_tag">
              {creator.fields.hobbies.map((label, index) => {
                return <span key={index}>{label}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="creator_title">
        <h1>
          {
            creator.fields.name /*
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
