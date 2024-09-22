// App.tsx
import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/Photo/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { requestPhotosBySearchValue } from './services/api';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import toast, { Toaster } from 'react-hot-toast';
import { Photo } from './types';

const App: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPhotoUrl, setSelectedPhotoUrl] = useState<string | null>(null);
  useEffect(() => {
    if (searchValue === null) return;

    const getPhotosBySearchValue = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await requestPhotosBySearchValue(searchValue, page);

        const mappedPhotos: Photo[] = data.results.map((photo: any) => ({
          id: photo.id,
          urls: photo.urls,
          alt_description: photo.alt_description || 'No description available',
        }));

        setPhotos((prevPhotos) => [...prevPhotos, ...mappedPhotos]);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getPhotosBySearchValue();
  }, [searchValue, page]);

  const onSubmit = (searchTerm: string) => {
    if (searchTerm !== searchValue) {
      setSearchValue(searchTerm);
      setPhotos([]); 
      setPage(1);
    } else {
      setPage(1);
    }
  };

  const loadMorePhotos = () => {
    setPage((prevPage) => prevPage + 1);
  };

  function openModal(photoUrl: string) {
    setSelectedPhotoUrl(photoUrl);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedPhotoUrl(null);
  }

  const notify = () => toast('Enter a search word...');

  return (
    <>
      <SearchBar notify={notify} onSubmit={onSubmit} />
      <div className="home">
        <div className="container">
          {photos.length > 0 && <ImageGallery openModal={openModal} photos={photos} />}
          {loading && <Loader />}
          {error && <ErrorMessage error={error} />}
          {photos.length > 0 && !loading && <LoadMoreBtn loadMorePhotos={loadMorePhotos} />}
        </div>
      </div>
      <ImageModal onRequestClose={closeModal} isOpen={modalIsOpen} photoUrl={selectedPhotoUrl} />
      <Toaster position="top-right" />
    </>
  );
};

export default App;
