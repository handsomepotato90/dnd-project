import NewsBox from "../../../UI/NewsBox";
import React, { useEffect, useRef } from "react";

import styles from "./sessionUi.module.css";
export default function Comments(props) {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };
  console.log(props.comments);
  return (
    <NewsBox className={props.className}>
      {props.comments &&
        props.comments.map((el, i) => (
          <div
            key={i}
            className={`${styles.general_style} ${
              props.thisUser === el.username
                ? styles.sameuser__style
                : styles.diffuser__style
            }`}
          >
            {props.thisUser !== el.username && (
              <span
                dangerouslySetInnerHTML={{ __html: el.username }}
                className={`${styles.username__style} ${styles.general_comment__style} `}
              ></span>
            )}
            <span
              dangerouslySetInnerHTML={{ __html: el.comment }}
              className={`${styles.text__style}  ${
                styles.general_comment__style
              } ${
                props.thisUser === el.username
                  ? styles.sameuser__bcccolor__style
                  : styles.diffuser__bcccolor__style
              }`}
            ></span>
          </div>
        ))}
      <AlwaysScrollToBottom></AlwaysScrollToBottom>
    </NewsBox>
  );
}
