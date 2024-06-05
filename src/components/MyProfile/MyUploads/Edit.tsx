import React from "react";
import { Link } from "react-router-dom";
import styles from "./MyUploads.module.css";

interface EditProps {
  id: string;
}

const Edit: React.FC<EditProps> = (props) => {
  return (
    <Link
      className={`${styles.edit_link__style}`}
      to={`/myProfile/MyUploads/Edit/${props.id}`}
    >
      <button className={`${styles.edit_button__style} button`}>Edit</button>
    </Link>
  );
}

export default Edit;
