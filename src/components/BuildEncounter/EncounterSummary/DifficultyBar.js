
import "./DifficultyBar.css";

export default function DifficultyBar(props) {
 const cName = "diff__style " + props.className;
  return (
    <div className="diff_bar__style">
      <div className={cName}></div>
    </div>
  );
}
