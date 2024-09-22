import Modal from "react-modal";
Modal.setAppElement("#root");
import style from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  photoUrl: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  photoUrl,
}) => {
  return (  
    <Modal
      className={style.modal}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      isOpen={isOpen}
    >
      {photoUrl && <img className={style.photo} src={photoUrl} alt="Large View" />}
    </Modal>
  );
};

export default ImageModal;
