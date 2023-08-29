import "./FullscreenableImage.styles.scss";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

type FullscreenableImageProps = {
  className: string;
  src: string;
  alt: string;
  openable: boolean;
};

const FullscreenableImage = ({ className, src, alt, openable }: FullscreenableImageProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img className={className} src={src} alt={alt} {...(!open && openable && { onClick: () => setOpen(true) })} />
      {createPortal(
        <div className={`overlay ${open ? "active" : ""}`}>
          <div className="full-image">
            <span className="close-overlay" {...(open && { onClick: () => setOpen(false) })}>
              <FontAwesomeIcon icon={faCircleXmark} size="xl" />
            </span>
            <img src={src} alt={alt} />
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default FullscreenableImage;
