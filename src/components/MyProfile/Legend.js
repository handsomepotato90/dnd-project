export default function Legend(props) {
  return (
    <>
      <div id={props.id} className={props.className}></div>
      <label>{props.text}</label>
    </>
  );
}
