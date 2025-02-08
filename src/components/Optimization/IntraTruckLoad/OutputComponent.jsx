import { JSONModel } from 'react-3d-viewer'

const OutputComponent = () => {
  const url = "/assets/kapool.json";

  return (
    <div className="w-full mt-4">
      <p className="text-mainColor text-2xl font-semibold">
        Showing the optimized load
      </p>
      <div className="flex justify-center">
      <div className="h-[50vh] flex items-center justify-center w-full">
        <JSONModel src={url} className="w-full" />
      </div>
      </div>
    </div>
    );
};

export default OutputComponent;
