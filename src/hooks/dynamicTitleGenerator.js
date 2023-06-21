import { createContext, useContext, useEffect, useState } from 'react';

// Create a context for the title
const TitleContext = createContext();

// Custom hook to access the title context
function useTitle() {
  return useContext(TitleContext);
}

// Title component that manages the title state
function Title({ initialTitle, children }) {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <TitleContext.Provider value={setTitle}>
      {children}
    </TitleContext.Provider>
  );
}

export { Title, useTitle };
