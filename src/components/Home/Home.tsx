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
      text: "Vote on new HomeBrew",
      redirect: "/voting",
      description:
        "Vote for the monsters you think deserve to be part of the Monster library.",
    },
    {
      url: imageTwo,
      text: "Create new HomeBrew",
      redirect: "/submit_homebrew",
      description:
        "Create your unique monster and let it be judged by the other users",
    },
    {
      url: imageThree,
      text: "Encounter Creator",
      redirect: "/build_encounter",
      description: "Build your encounters and ballance them to the party.",
    },
    {
      url: imageFour,
      text: "Organise a Session.",
      redirect: "/myProfile/Sessions",
      description:
        "Organise a session. Invite your Friends and vote on the day for your upcoming session.",
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
