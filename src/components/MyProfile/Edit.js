import { Link } from "react-router-dom";
import styles from './MyProfile.module.css'
export default function Edit(props) {
  return (
    <Link className={`${styles.edit_link__style}`}
    to={`/myProfile/Edit/${props.id}`}>
      <button className={`${styles.edit_button__style} button`}>Edit</button>
    </Link>
  );
}
