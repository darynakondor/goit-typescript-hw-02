import style from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  loadMorePhotos: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMorePhotos }) => {
  return (
    <div className={style.btnContainer}>
      <button className={style.btn} onClick={loadMorePhotos}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
