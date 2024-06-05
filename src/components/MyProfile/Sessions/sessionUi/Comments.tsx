import React, { useState, useEffect, useRef } from "react";
import NewsBox from "../../../UI/NewsBox";
import styles from "./sessionUi.module.css";

interface Comment {
  username: string;
  comment: string;
}

interface Props {
  className: string;
  comments: Comment[];
  wscomments: Comment[];
  thisUser: string;
}

const Comments: React.FC<Props> = (props) => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (elementRef.current) {
        elementRef.current.scrollIntoView();
      }
    });

    return <div ref={elementRef} />;
  };

  const [stateComments, setStateComments] = useState<Comment[]>([]);

  useEffect(() => {
    setStateComments([...props.comments, ...props.wscomments]);
  }, [props.comments, props.wscomments]);

  return (
    <NewsBox className={props.className}>
      {stateComments.map((el, i) => (
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
              className={`${styles.username__style} ${styles.general_comment__style}`}
            ></span>
          )}
          <span
            dangerouslySetInnerHTML={{ __html: el.comment }}
            className={`${styles.text__style} ${styles.general_comment__style} ${
              props.thisUser === el.username
                ? styles.sameuser__bcccolor__style
                : styles.diffuser__bcccolor__style
            }`}
          ></span>
        </div>
      ))}
      <AlwaysScrollToBottom />
    </NewsBox>
  );
};

export default Comments;
