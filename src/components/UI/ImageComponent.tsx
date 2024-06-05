import "./ImageComponent.css";

// classNames for image size
// image__small width 20%
// image__large Width 100%
interface ImageComponentProps {
  src: string | undefined;
  alt: string;
  size?: string; 
}

const ImageComponent: React.FC<ImageComponentProps> = ({src, alt, size}) => {
  return (
    <img
      className={`${size}`}
      src={src}
      alt={alt}
    ></img>
  );
}
export default ImageComponent;