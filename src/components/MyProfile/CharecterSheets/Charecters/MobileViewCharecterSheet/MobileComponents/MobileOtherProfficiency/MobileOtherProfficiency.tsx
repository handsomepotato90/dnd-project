import React from "react";
import PassiveSenses from "../../../Stats/PassiveSenses/PassiveSenses";
import OtherProficiencies from "../../../Stats/OtherProficiencies/OtherProficiencies";
import Resistance from "../../../Stats/InitiativeAcResistance/Resistance";

interface MobileOtherProfficiencyProps {
  // Define the props for your component here
}

const MobileOtherProfficiency: React.FC<MobileOtherProfficiencyProps> = () => {
  return (
    <div>
      <PassiveSenses />
      <OtherProficiencies />
      <Resistance />
    </div>
  );
};

export default MobileOtherProfficiency;
