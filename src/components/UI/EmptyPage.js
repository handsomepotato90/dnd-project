import "./EmptyPage.css"

export default function EmptyPage(props) {
  return (
    <div className="empty_encounter_box__style">{props.message}</div>
  );
}
