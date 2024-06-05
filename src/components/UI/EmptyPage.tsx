import React from "react";  
import "./EmptyPage.css";

interface Message{
  message:string
}

const EmptyPage: React.FC<Message> = ({message}) => {
  return <div className="empty_encounter_box__style">{message}</div>;
}
export default EmptyPage;