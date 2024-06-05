import { Links } from "../Navigation/Navigation";
import NavigatorBack from "../Navigation/NavigatorBack";
import "./MyProfile.css"
export default function ProfileNavigation() {
  return (
    <NavigatorBack className={"grey nav_flexbox"}>
      <Links to="/myProfile">
        <li className='list_style'>My Profile</li>
      </Links>
      <Links to="/myProfile/CharecterSheets">
        <li className='list_style'>Character Sheets</li>
      </Links>
      <Links to="/myProfile/MyUploads">
        <li className='list_style'>My Uploads</li>
      </Links>
      <Links to="/myProfile/Friends">
        <li className='list_style'>Friends</li>
      </Links>
      <Links to="/myProfile/Sessions">
        <li className='list_style'>Sessions</li>
      </Links>
      <Links to="/myProfile/Sessions/AllSessions">
        <li className='list_style'>All Sessions</li>
      </Links>
    </NavigatorBack>
  );
}
