import { Spinner } from "@material-tailwind/react";
import React from "react";

interface PropsLoading {
  loading: boolean;
}

const Loading: React.FC<PropsLoading> = ({ loading }) => {
  if (loading)
    return (
      <div className="absolute z-40 w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
        <Spinner color="orange" width={50} height={50} />
      </div>
    );
};

export default Loading;
