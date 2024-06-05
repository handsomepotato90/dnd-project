import React, { useState, useEffect, useContext } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import CalculatorContext from "../../store/calculator-context";
import { SvgComponent } from "../../Navigation/Navigation";
import pencil from "../../../icons/pencil.svg";
import trashcan from "../../../icons/trashcan.svg";
import saveIcon from "../../../icons/save.svg";
import { useHttpClient } from "../../hooks/http-hook";

import styles from "./Options.module.css";
import HoverFormula from "./HoverFormula";

interface PresetsProps {
  formula: string[],
  id: string,
  presetId: string,
  title: string,
}

const Presets: React.FC<PresetsProps> = ({ formula, id, presetId, title }) => {
  const { sendRequest } = useHttpClient();
  const calc = useContext(CalculatorContext);
  const [editPresetName, setEditPresetName] = useState(false);
  const [NameOfPreset, setNewNameOfPreset] = useState("");
  const [openHoverWindow, setOpenHoverWindow] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) => {
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
    calc.PresetsCalculator(formula);
  };
  const newNameOfPreset = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          uId: id,
          id: presetId,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      calc.setCalculations([...getRes.presets]);
    } catch (err) { }
  };
  const renamePreset = async () => {
    try {
      setEditPresetName(false);

      const getRes = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/calculator_options/rename",
        "PATCH",
        JSON.stringify({
          uId: id,
          newName: NameOfPreset,
          id: presetId,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      calc.setCalculations([...getRes.presets]);
    } catch (err) { }
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
          {!editPresetName && <span>{title}</span>}
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
        <HoverFormula coords={coords} formula={formula}></HoverFormula>
      )}
    </>
  );
}

Presets.propTypes = {
  formula: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  id: PropTypes.string.isRequired,
  presetId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Presets;
