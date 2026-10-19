import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

// Track if initial load has already finished in this session
let hasInitiallyLoaded = false;

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(() => {
    // Skip loading on mobile or if already loaded once
    if (window.innerWidth <= 768 || hasInitiallyLoaded) return false;
    return true;
  });
  const [loading, setLoading] = useState(0);

  const handleSetIsLoading = (state: boolean) => {
    if (!state) {
      hasInitiallyLoaded = true;
    }
    setIsLoading(state);
  };

  const value = {
    isLoading,
    setIsLoading: handleSetIsLoading,
    setLoading,
  };
  useEffect(() => {
    // Auto-start animations if already loaded once or on mobile
    if (hasInitiallyLoaded || window.innerWidth <= 768) {
      import("../components/utils/initialFX").then((module) => {
        if (module.initialFX) {
          setTimeout(() => {
            module.initialFX();
          }, 100);
        }
      });
    }
  }, []);

  useEffect(() => {}, [loading]);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
