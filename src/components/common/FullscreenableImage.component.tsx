import "./FullscreenableImage.styles.scss";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button.component";

type FullscreenableImageProps = {
  className?: string;
  src: string;
  alt: string;
  openable: boolean;
  btnText?: string;
  btnHref?: string;
};

const FullscreenableImage = ({ className = "", src, alt, openable, btnText, btnHref }: FullscreenableImageProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img className={className} src={src} alt={alt} {...(!open && openable && { onClick: () => setOpen(true) })} />
      {openable &&
        createPortal(
          <div className={`full-image-overlay ${open ? "active" : ""}`}>
            <div className="full-image">
              <span className="close-overlay" {...(open && { onClick: () => setOpen(false) })}>
                <FontAwesomeIcon icon={faCircleXmark} size="xl" />
              </span>
              <img src={src} alt={alt} />
              {btnText && btnHref && <Button text={btnText} href={btnHref} />}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default FullscreenableImage;
