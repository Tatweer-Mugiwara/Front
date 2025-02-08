import BinPacking3DVis from './Threejs';

const OutputComponent = () => {
  return (
    <div className="w-full mt-4">
      <p className="text-mainColor text-2xl font-semibold">
        Showing the optimized load
      </p>
      <div className="flex justify-center">
      <div className="h-[50vh] flex items-center justify-center w-full">
        <BinPacking3DVis />
      </div>
      </div>
    </div>
    );
};

export default OutputComponent;
