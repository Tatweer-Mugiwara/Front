import { useState } from "react";
import Map from "../../Map";
import { toast } from "react-toastify";
import { X, Plus } from "lucide-react";

const InputComponent = ({
  data,
  setData,
  onCitiesChange,
  selectedSize,
  setSelectedSize,
}) => {
  const [newItem, setNewItem] = useState({ name: "", value: "" });
  const [selectedCities, setSelectedCities] = useState([]);

  const handleAddItem = () => {
    if (!newItem.name || !newItem.value) {
      return toast.error("Please fill all the fields");
    }
    setData([...data, newItem]);
    setNewItem({ name: "", value: "" });
  };

  const handleCitiesChange = (cities) => {
    setSelectedCities(cities);
    onCitiesChange(cities);
  };

  const handleSelectItem = (item) => {
    // Toggle selection
    if (
      selectedSize?.name === item.name &&
      selectedSize?.value === item.value
    ) {
      setSelectedSize(null); // Déselectionner si déjà sélectionné
    } else {
      setSelectedSize(item);
    }
  };

  return (
    <div className="w-full flex flex-col gap-10">
      <div>
        <p className="text-mainColor text-2xl font-semibold mb-5">
          Please select all the destinations on the map:
        </p>
        <div className="flex h-[70vh] w-full">
          <Map onSelectCity={handleCitiesChange} />
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-semibold text-mainColor mb-8">
          Please select the size of the collected data
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {/* Existing Items */}
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelectItem(item)}
              className={`
              relative group 
              rounded-xl border-2 p-6
              transition-all duration-300 ease-in-out
              hover:shadow-xl hover:-translate-y-1
              cursor-pointer
              ${
                selectedSize?.name === item.name &&
                selectedSize?.value === item.value
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-white hover:border-blue-200"
              }
            `}
            >
              {/* Delete Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setData(data.filter((_, i) => i !== index));
                }}
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 
                         transition-opacity duration-200 hover:scale-110"
              >
                <X className="text-red-500 h-6 w-6" />
              </button>

              <div className="flex flex-col items-center justify-center h-full gap-4">
                <h3 className="text-xl font-semibold text-mainColor">
                  {item.name}
                </h3>
                <p className="text-3xl font-bold text-blue-600">{item.value}</p>
              </div>
            </div>
          ))}

          <div
            className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 
                      p-6 flex flex-col items-center justify-center gap-4
                      transition-all duration-300 hover:border-blue-300 hover:bg-blue-50"
          >
            <div className="space-y-4 w-full max-w-xs">
              <input
                type="text"
                placeholder="Name"
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-300 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         transition-all duration-200"
              />
              <input
                type="number"
                placeholder="Value"
                value={newItem.value}
                onChange={(e) =>
                  setNewItem({ ...newItem, value: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-300 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         transition-all duration-200"
              />
              <button
                onClick={handleAddItem}
                className="w-full flex items-center justify-center gap-2 
                         bg-blue-600 text-white py-2 px-4 rounded-lg
                         hover:bg-blue-700 transition-colors duration-200"
              >
                <Plus className="h-5 w-5" />
                <span>Add Item</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
