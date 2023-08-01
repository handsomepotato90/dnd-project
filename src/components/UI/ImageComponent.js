import "./ImageComponent.css";

// classNames for image size
// image__small width 20%
// image__large Width 100%

export default function ImageComponent(props) {
  return (
    <img
      className={`${props.size}`}
      src={props.src}
      alt={props.alt}
    ></img>
  );
}
