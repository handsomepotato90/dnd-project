import React from "react";
import imageOne from "../../icons/dnd1.jpg";
import imageTwo from "../../icons/dnd2.jpg";
import imageThree from "../../icons/dnd3.jpg";
import imageFour from "../../icons/dnd4.jpg";
import NewsBox from "../UI/NewsBox";

import "./Home.css";

export default function Home() {
  const NewsFiller = [
    {
      url: imageOne,
      text: "Vote on new",
      redirect: '/voting',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      url: imageTwo,
      text: "Create new Homebrew",
      redirect: '/submit_homebrew',
      description: "something for describing",
    },
    {
      url: imageThree,
      text: "Encounter Creator",
      redirect: '/build_encounter',
      description: "something for describing",
    },
    {
      url: imageFour,
      text: "Coming soon...",
      redirect: '/',
      description: "something for describing",
    },
  ];
  

  return (
    <div className="center_element">
      <div className="box_grid">
        {NewsFiller.map((news, i) => (
          <NewsBox
              key={i}
              className="place_holder_bcc"
              text={news.description}
              image={news.url}
              url={news.redirect}
            >
              {" "}
              <h1>{news.text}</h1>
              </NewsBox>

        ))}
      </div>
    </div>
  );
}
