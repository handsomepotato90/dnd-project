
import "./DifficultyBar.css";

interface DifficultyBarProps {
  className:string
}

 const DifficultyBar: React.FC<DifficultyBarProps> = ({className}) => {
 const cName = "diff__style " + className;
  return (
    <div className="diff_bar__style">
      <div className={cName}></div>
    </div>
  );
}
export default DifficultyBar;