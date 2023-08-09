import ConteinerBox from "../UI/ConteinerBox";
import ProfileNavigation from "./ProfileNavigation";
import MyProfileGeneral from "./MyProfileGeneral";
import styles from "./MyProfile.module.css";

export default function MyProfile() {
  return (
    <>
      <ProfileNavigation></ProfileNavigation>
      <MyProfileGeneral></MyProfileGeneral>
    </>
  );
}
