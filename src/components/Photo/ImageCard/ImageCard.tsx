import style from "./ImageCard.module.css";

interface ImageCardProps {
  photoSmall: string;
  photoRegular: string;
  openModal: (photoUrl: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  photoSmall,
  photoRegular,
  openModal,
}) => {
  return (
    <div onClick={() => openModal(photoRegular)} className={style.imageContainer}>
      <img className={style.image} src={photoSmall} alt="" />
    </div>
  );
};

export default ImageCard;
