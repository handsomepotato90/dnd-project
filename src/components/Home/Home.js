import React, { useState } from "react";
import imageOne from "../../icons/picone.jpeg";
import imageTwo from "../../icons/pictwo.jpg";
import imageThree from "../../icons/picthree.jpg";
import imageFour from "../../icons/picfour.jpg";

import "./Home.css";

export default function Home() {
  const NewsFiller = [
    {
      url: imageOne,
      text: "Vote on new",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      url: imageTwo,
      text: "Create new Homebrew",
      description: "something for describing",
    },
    {
      url: imageThree,
      text: "Encounter Creator",
      description: "something for describing",
    },
    {
      url: imageFour,
      text: "Coming soon...",
      description: "something for describing",
    },
  ];
  const [isShown, setIsShown] = useState(false);
  //
  return (
    <div className="center_element">
      <div className="box_grid">
        {NewsFiller.map((news, i) => (
          <div 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            style={{ backgroundImage: `url(${news.url})` }}
            className="news_box_bcc__color news_box_size place_holder_bcc"
            key={i}
          >
            <h1 >{news.text}</h1>
            {isShown && <p>{news.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
