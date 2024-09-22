import axios from "axios";

const accessKey = 'yb9J4A3XeLl7OhS8gdl4DUUZSxU7LjL8oYexarq8mmk';

export interface PhotoResponse {
  results: {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
  }[];
}

export const requestPhotosBySearchValue = async (
  searchValue: string,
  page = 1,
  perPage = 10
): Promise<PhotoResponse> => {
  const { data } = await axios.get<PhotoResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query: searchValue,
        page: page,
        per_page: perPage,
        client_id: accessKey,
      },
    }
  );
  return data;
};
