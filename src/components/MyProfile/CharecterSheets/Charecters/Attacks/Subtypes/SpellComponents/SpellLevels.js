export default function SpellLevels(props) {
  const returnClickedLevel = () => {
    props.onClick(props.lvl);
  };
  return (
    <div>
      <button onClick={returnClickedLevel}>{props.lvl}</button>
    </div>
  );
}
