"use client";
import Loading from "@/app/components/Loading";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
  useContext,
} from "react";

interface LoadingState {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingState>({
  isLoading: false,
  setIsLoading: () => {},
});

function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <Loading loading={isLoading} />
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => {
  const context = useContext(LoadingContext);

  return context;
};

export default LoadingProvider;
