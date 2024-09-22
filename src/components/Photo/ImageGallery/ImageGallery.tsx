import style from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageGalleryProps {
  photos: Photo[];
  openModal: (photoUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, openModal }) => {
  return (
    <ul className={style.list}>
      {Array.isArray(photos) &&
        photos.map((photo) => (
          <li className={style.item} key={photo.id}>
            <ImageCard
              openModal={openModal}
              photoSmall={photo.urls.small}
              photoRegular={photo.urls.regular}
            />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
