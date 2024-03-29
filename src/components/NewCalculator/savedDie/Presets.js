import { useState, useEffect, useContext } from "react";
import CalculatorContext from "../../store/calculator-context";
import { SvgComponent } from "../../Navigation/Navigation";
import pencil from "../../../icons/pencil.svg";
import trashcan from "../../../icons/trashcan.svg";
import saveIcon from "../../../icons/save.svg";
import { useHttpClient } from "../../hooks/http-hook";

import styles from "./Options.module.css";
import HoverFormula from "./HoverFormula";

export default function Presets(props) {
  const { sendRequest } = useHttpClient();
  const calc = useContext(CalculatorContext);
  const [editPresetName, setEditPresetName] = useState(false);
  const [NameOfPreset, setNewNameOfPreset] = useState("");
  const [openHoverWindow, setOpenHoverWindow] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  const rollPreset = () => {
    calc.PresetsCalculator(props.formula);
  };
  const newNameOfPreset = (event) => {
    setNewNameOfPreset(event.target.value);
  };
  const editName = () => {
    setEditPresetName((current) => !current);
  };
  const deleteThisPreset = async () => {
    try {
      const getRes = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/calculator_options/delete",
        "Delete",
        JSON.stringify({
          uId: props.id,
          id: props.presetId,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      calc.setCalculations([...getRes.presets]);
    } catch (err) {}
  };
  const renamePreset = async () => {
    try {
      setEditPresetName(false);

      const getRes = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/calculator_options/rename",
        "PATCH",
        JSON.stringify({
          uId: props.id,
          newName: NameOfPreset,
          id: props.presetId,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      calc.setCalculations([...getRes.presets]);
    } catch (err) {}
  };

  const popUpFormula = () => {
    setOpenHoverWindow(true);
  };
  const closePopUpFormula = () => {
    setOpenHoverWindow(false);
  };

  return (
    <>
      <div className={styles.preset__general_style}>
        <div
          className={`overflowing ${styles.preset_name}`}
          onMouseEnter={popUpFormula}
          onMouseLeave={closePopUpFormula}
          onClick={rollPreset}
        >
          {!editPresetName && <span>{props.title}</span>}
          {editPresetName && (
            <input onChange={newNameOfPreset} value={NameOfPreset}></input>
          )}
        </div>

        <div className={styles.edit_block_style}>
          <div onClick={editName}>
            <SvgComponent
              Image={pencil}
              height="15"
              color="white"
              width="15"
            ></SvgComponent>
          </div>
          {!editPresetName && (
            <div onClick={deleteThisPreset}>
              <SvgComponent
                Image={trashcan}
                height="15"
                color="red"
                width="15"
              ></SvgComponent>
            </div>
          )}
          {editPresetName && (
            <div onClick={renamePreset}>
              <SvgComponent
                Image={saveIcon}
                height="15"
                color="white"
                width="15"
              ></SvgComponent>
            </div>
          )}
        </div>
      </div>
      {openHoverWindow && (
        <HoverFormula coords={coords} formula={props.formula}></HoverFormula>
      )}
    </>
  );
}
