import { Links } from "../Navigation/Navigation";
import NavigatorBack from "../Navigation/NavigatorBack";

export default function ProfileNavigation() {
  return (
    <NavigatorBack className={"grey nav_flexbox"}>
      <Links to="/myProfile">
        <li>My Profile</li>
      </Links>
      <Links to="/myProfile/MyUploads">
        <li>My Uploads</li>
      </Links>
      <Links to="/myProfile/Friends">
        <li>Friends</li>
      </Links>
      <Links to="/myProfile/Sessions">
        <li>Sessions</li>
      </Links>
    </NavigatorBack>
  );
}
