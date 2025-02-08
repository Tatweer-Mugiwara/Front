import { useState } from "react";
import Map from "../../Map";
import { toast } from "react-toastify";
import { X } from "lucide-react";

const InputComponent = ({
  data,
  setData
}) => {
  const [newItem, setNewItem] = useState({ name: "", value: "" });
  const handleAddItem = () => {
    if (!newItem.name || !newItem.value) {
      return toast.error("Please fill all the fields");
    };
    setData([...data, newItem]);
    setNewItem({ name: "", value: "" });
  };

  return (
    <div className="w-full flex flex-col gap-10">
      <div>
        <p className="text-mainColor text-2xl font-semibold mb-5">Please select all the destinations on the map:</p>
        <div className="flex h-[70vh] w-full">
          <Map />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-mainColor text-2xl font-semibold mb-5">Please select the size of the collected data:</p>
        <div className="flex flex-wrap gap-5 mt-10">
          {
            data.map((item, index) => (
              <div key={index} className="min-w-[300px] cursor-pointer flex items-center text-center justify-center flex-col gap-4 border-2 border-black py-8 px-16 bg-white shadow-lg relative">
                <button className="absolute top-5 right-5" onClick={() => setData(data.filter((_, i) => i !== index))}>
                  <X className="text-red-500" size={40} />
                </button>
                <h5 className="text-2xl text-mainColor font-unbounded font-semibold">{item.name}</h5>
                <p className="text-3xl font-unbounded font-medium">{item.value}</p>
              </div>
            ))
          }
          <div className="cursor-pointer flex items-center text-center justify-center flex-col gap-4 border-2 border-black py-10 px-16 bg-white shadow-lg">
            <input 
              type="text" 
              className="w-[180px] border-mainColor border py-2 px-4 outline-none text-2xl text-mainColor font-unbounded font-semibold" 
              placeholder="Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <input 
              type="number" 
              className="w-[180px] border-mainColor border py-2 px-4 outline-none text-3xl font-unbounded font-medium" 
              placeholder="Value"
              value={newItem.value}
              onChange={(e) => setNewItem({ ...newItem, value: e.target.value })}
            />
            <button 
              className="mt-4 py-2 px-6 bg-mainColor text-white text-xl font-semibold rounded"
              onClick={handleAddItem}
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
