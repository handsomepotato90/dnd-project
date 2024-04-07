// import React, { useContext } from "react";
// import FacebookLoginComponent from "react-facebook-login/dist/facebook-login-render-props";
// import { useHttpClient } from "../hooks/http-hook";
// import { LoginContext } from "../store/login-context";

// import styles from "./Login.module.css";

// export default function FacebookLogin(props) {
//   const { sendRequest } = useHttpClient();
//   const auth = useContext(LoginContext);

//     const responseFacebook = async (response) => {
//         try {
//           const resData = await sendRequest(
//             process.env.REACT_APP_BACKEND_URL + "/facebook",
//             "POST",
//             JSON.stringify({
//               name: response.name,
//               email: response.email,
//               password: response.userID,
//               graphDomain: response.graphDomain,
//               remember: true,
//             }),
//             {
//               "Content-Type": "application/json",
//             }
//           );
//           auth.login(resData.user.id, resData.token);
//         } catch (err) {}
//       };

//   return (
//     <FacebookLoginComponent
//             appId="1099793780705999"
//             render={(renderProps) => (
//               <button
//                 className={`button__style ${styles.facebook__style} `}
//                 onClick={renderProps.onClick}
//               >
//                 <img
//                   alt="Facebook logo"
//                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/64px-Facebook_f_logo_%282019%29.svg.png"
//                 ></img>
//                 <span>{`${props.buttonText} WITH FACEBOOK`}</span>
//               </button>
//             )}
//             size="small"
//             callback={responseFacebook}
//             fields="name,email"
//           />
//   );
// }
