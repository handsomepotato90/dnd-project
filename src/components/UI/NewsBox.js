import React, {useState} from "react";
import { useNavigate} from 'react-router-dom';
import "./NewsBox.css";

export default function NewsBox(props) {
  const cNames = "news_box_bcc__color news_box_size " + props.className;
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  const style = {
    backgroundImage:`url(${props.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }

  const redirectToDesiredPage = () =>{
    navigate(props.url)
  }
  return (
    <div className={cNames} style={style} onClick={redirectToDesiredPage} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      {props.children}
      {isShown && props.text && <p>{props.text}</p>}
      
    </div>
  );
}
