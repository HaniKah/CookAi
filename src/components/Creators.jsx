import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { NavLink } from "react-router-dom";
import LogoTxt from "./LogoTxt";
import LogoAlien from "./LogoAlien";
import Typewriter from "typewriter-effect";

export default function Creators() {
  const { creators } = useContext(DataContext);

  return (
    <div className="creators">
      <div className="creators_title">
        <h5>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(65)
                .typeString("i wish to present my creators")
                .start();
            }}
          />
        </h5>
        <div>
          <LogoTxt />
          <LogoAlien />
        </div>
      </div>
      <div className="creators_container">
        <div className="creators_links">
          {creators?.map((creator) => (
            <NavLink
              to={`/creators/${creator.id}`}
              key={creator.id}
              className="creators_link"
            >
              <div
                style={{
                  backgroundImage: `url(${creator.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: " center",
                  width: "340px",
                  height: "350px",
                  position: "relative",
                  boxShadow: "2px 2px 8px var(--shadow)",
                  borderRadius: "0 30px 30px 30px",
                  transform: "translateX(-10px)",
                }}
                className="creators_img"
              >
                <div className="creators_name">{creator.name}</div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      {console.log(creators)}
    </div>
  );
}
