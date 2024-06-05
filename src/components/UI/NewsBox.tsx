import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewsBox.css";

interface NewsBoxProps {
  className?:string,
  image?: string,
  url?: string,
  text?: string,
  children: React.ReactNode
}

const NewsBox: React.FC<NewsBoxProps> = ({className, image, url, text, children}) => {
  const cNames = "news_box_bcc__color news_box_size " + className;
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();

  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const redirectToDesiredPage = () => {
    if (image && url) {
      navigate(url);
    }
  
  };
  return (
    <div
      className={cNames}
      style={style}
      onClick={redirectToDesiredPage}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {children}
      {isShown && text && <p>{text}</p>}
    </div>
  );
}
export default NewsBox;