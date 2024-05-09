import { useState } from 'react';

interface SearchHistory {
  history: string[];
}

export const useSearchHistory = () => {
  const [searchInfo, setSearchInfo] = useState<SearchHistory>({
    history: [],
  });

  const setSearchTerm = (searchTerm: string) =>
    setSearchInfo({ history: [searchTerm, ...searchInfo.history] });

  return {
    history: searchInfo.history,
    setSearchTerm,
  };
};
