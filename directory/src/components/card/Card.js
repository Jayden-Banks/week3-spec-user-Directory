import "./Card.css";
import { CardNav } from "./cardNav/CardNav";
import { useEffect, useState } from "react";
import data from "./data";

export function Card() {
  const [dataCopy, setDataCopy] = useState(data);
  const [index, setIndex] = useState(1);
  const [profile, setProfile] = useState(dataCopy[0]);

  const { id, name, city, country, employer, title, favoriteMovies } = profile;

  const ProfileSetter = () => {
    try {
      const card = dataCopy.filter((element) => {
        if (element.id === index) {
          return element;
        }
      });
      setProfile(card[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const IndexSetter = (value) => {
    setIndex(value);
  };

  const MovieDisplay = () => {
    const display = favoriteMovies.map((element, index) => {
      return (
        <h4 key={index} className="h4-card-movie">
          {index + 1}. {element}
        </h4>
      );
    });
    return display;
  };
  useEffect(() => {
    ProfileSetter();
  });

  const DataSetter = (identity, updatedCard = false) => {
    identity -= 1; // This accounts for the data starting at 1 and not 0
    let newData = [...dataCopy];
    if (!updatedCard) {
      newData.splice(identity, 1);
      newData = newData.map((element) => {
        if (element.id > identity + 1) {
          element.id -= 1;
        }
        return element
      });
      console.log(newData)
      return setDataCopy(newData);
    } else {
      let isNew = true;
      newData.filter((element) => {
        if (element.id === identity + 1) {
          isNew = false;
        }
      });
      if (isNew) {
        newData.push(updatedCard);
      } else {
        newData[identity] = updatedCard;
      }
      setDataCopy(newData);
    }
  };

  const dataCopyLength = () => {
    return dataCopy.length;
  };

  if (dataCopy.length === 0) {
    return (
      <div id="div-KABOOM">YOU DELETED EVERYTHING REFRESH TO START AGAIN</div>
    )
  } else if(dataCopy.length < index) {
    IndexSetter(index - 1)
  }
  return (
    <div id="div-card">
      <div id="div-contain-cardnav">
        <div id="div-card-rect">
          <div id="div-card-number">
            <h3 id="h3-card-number">
              {id}/{dataCopy.length}
            </h3>
          </div>
          <div id="div-card-text">
            <h2 id="h2-card-name">
              {name.first} {name.last}
            </h2>
            <div id="div-card-h3">
              <h3 className="h3-card-bio">
                <b>From:</b> {city}, {country}
              </h3>
              <h3 className="h3-card-bio">
                <b>Job Title:</b> {title}
              </h3>
              <h3 className="h3-card-bio">
                <b>Employer:</b> {employer}
              </h3>
            </div>
            <h3 className="h3-card-bio" id="h3-card-favorite">
              <b>Favorite Movies:</b>
            </h3>
            {MovieDisplay()}
          </div>
        </div>
        <CardNav
          IndexSetter={IndexSetter}
          index={index}
          DataSetter={DataSetter}
          dataCopy={dataCopy}
          dataCopyLength={dataCopyLength}
        />
      </div>
    </div>
  );
}
