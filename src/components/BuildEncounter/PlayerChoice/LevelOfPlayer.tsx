import { useState } from "react";
import Select from "react-select";
import styles from "./LevelOfPlayer.module.css";

interface Option {
    value: number,
    label: string 
}

interface LevelOfPlayerProps{
  onChange: Function;
}

const options = [
  { value: 1, label: "Level: 1" },
  { value: 2, label: "Level: 2" },
  { value: 3, label: "Level: 3" },
  { value: 4, label: "Level: 4" },
  { value: 5, label: "Level: 5" },
  { value: 6, label: "Level: 6" },
  { value: 7, label: "Level: 7" },
  { value: 8, label: "Level: 8" },
  { value: 9, label: "Level: 9" },
  { value: 10, label: "Level: 10" },
  { value: 11, label: "Level: 11" },
  { value: 12, label: "Level: 12" },
  { value: 13, label: "Level: 13" },
  { value: 14, label: "Level: 14" },
  { value: 15, label: "Level: 15" },
  { value: 16, label: "Level: 16" },
  { value: 17, label: "Level: 17" },
  { value: 18, label: "Level: 18" },
  { value: 19, label: "Level: 19" },
  { value: 20, label: "Level: 20" },
];

const encounterXpTable = [
  { easy: 0, medium: 0, hard: 0, deadly: 0 },
  { easy: 25, medium: 50, hard: 75, deadly: 100 },
  { easy: 50, medium: 100, hard: 150, deadly: 200 },
  { easy: 75, medium: 150, hard: 225, deadly: 400 },
  { easy: 125, medium: 250, hard: 375, deadly: 500 },
  { easy: 250, medium: 500, hard: 750, deadly: 1100 },
  { easy: 300, medium: 600, hard: 900, deadly: 1400 },
  { easy: 350, medium: 750, hard: 1100, deadly: 1700 },
  { easy: 450, medium: 900, hard: 1400, deadly: 2100 },
  { easy: 550, medium: 1100, hard: 1600, deadly: 2400 },
  { easy: 600, medium: 1200, hard: 1900, deadly: 2800 },
  { easy: 800, medium: 1600, hard: 2400, deadly: 3600 },
  { easy: 1000, medium: 2000, hard: 3000, deadly: 4500 },
  { easy: 1100, medium: 2200, hard: 3400, deadly: 5100 },
  { easy: 1250, medium: 2500, hard: 3800, deadly: 5700 },
  { easy: 1400, medium: 2800, hard: 4300, deadly: 6400 },
  { easy: 1600, medium: 3200, hard: 4800, deadly: 7200 },
  { easy: 2000, medium: 3900, hard: 5900, deadly: 8800 },
  { easy: 2100, medium: 4200, hard: 6300, deadly: 9500 },
  { easy: 2400, medium: 4900, hard: 7300, deadly: 10900 },
  { easy: 2800, medium: 5700, hard: 8500, deadly: 12700 },
];

const LevelOfPlayer: React.FC<LevelOfPlayerProps> = ({onChange}) => {
  let [currValue, changeValue] = useState<number>(0);

  const handleChange = (event: Option | null) => {
    if(event){
      changeValue(event.value);
    }
  };
  const ThisPlayerToAdd = () => {
    if (currValue === 0) {
      return;
    }
    const player = { player: currValue, ...encounterXpTable[currValue] };
    onChange(player);
  };

  return (
    <div className={styles.center_elements}>
      <Select
        className={styles.select__style}
        onChange={handleChange}
        isSearchable={false}
        options={options}
      />
      <button
        className={`${styles.add_player_btn__style} button green `}
        onClick={ThisPlayerToAdd}
      >
        Add Player
      </button>
    </div>
  );
};
export default LevelOfPlayer;
