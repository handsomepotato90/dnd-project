import React from "react";
import textData from "./text.json";
import HomeBrewSave from "./HomeBrewSave";

const SubmitHomeBrew: React.FC = () => {
  const { reqFields, fields, textZone } = textData;

  return (
    <>
      <HomeBrewSave valid={false} required={reqFields} notReq={fields} text={textZone} type="POST" url="/submit_homebrew"></HomeBrewSave>
    </>
  );
}
export default SubmitHomeBrew;