const InputComponent = ({
  data,
  setData,
  truckData,
  setTruckData,
}) => {

  const addRow = () => {
    setData([...data, {
      item: "",
      length: 0,
      width: 0,
      height: 0,
      weight: 0,
      quantity: 0,
      stackable: false,
    }]);
  }

  const filterRow = (index) => {
    setData(data.filter((_, i) => i !== index));
  }

  return (
    <div className="w-full outline-none">
      <div className="overflow-x-auto mt-4 flex flex-col gap-10">
        <div>
          <p className="text-mainColor text-2xl font-semibold capitalize">
            Please add the items with their dimensions:
          </p>
          <table className="min-w-full bg-white border border-mainColor mt-5">
            <thead className="bg-mainColor text-white">
              <tr className="">
                <th className="px-4 py-2">Item</th>
                <th className="px-4 py-2">Length</th>
                <th className="px-4 py-2">Width</th>
                <th className="px-4 py-2">Height</th>
                <th className="px-4 py-2">Weight</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Stackable</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="border border-mainColor px-4 py-2 text-mainColor">
                    <input
                      type="text"
                      value={row.item}
                      placeholder="Item"
                      onChange={(e) => {
                        const newData = [...data];
                        newData[index].item = e.target.value;
                        setData(newData);
                      }}
                      className="w-full outline-none"
                    />
                  </td>
                  <td className="border border-mainColor px-4 py-2 text-mainColor">
                    <input
                      type="number"
                      value={row.length}
                      placeholder="Length"
                      onChange={(e) => {
                        const newData = [...data];
                        newData[index].length = e.target.value;
                        setData(newData);
                      }}
                      className="w-full outline-none"
                    />
                  </td>
                  <td className="border border-mainColor px-4 py-2 text-mainColor">
                    <input
                      type="number"
                      value={row.width}
                      placeholder="Width"
                      onChange={(e) => {
                        const newData = [...data];
                        newData[index].width = e.target.value;
                        setData(newData);
                      }}
                      className="w-full outline-none"
                    />
                  </td>
                  <td className="border border-mainColor px-4 py-2 text-mainColor">
                    <input
                      type="number"
                      value={row.height}
                      placeholder="Height"
                      onChange={(e) => {
                        const newData = [...data];
                        newData[index].height = e.target.value;
                        setData(newData);
                      }}
                      className="w-full outline-none"
                    />
                  </td>
                  <td className="border border-mainColor px-4 py-2 text-mainColor">
                    <input
                      type="number"
                      value={row.weight}
                      placeholder="Weight"
                      onChange={(e) => {
                        const newData = [...data];
                        newData[index].weight = e.target.value;
                        setData(newData);
                      }}
                      className="w-full outline-none"
                    />
                  </td>
                  <td className="border border-mainColor px-4 py-2 text-mainColor">
                    <input
                      type="number"
                      value={row.quantity}
                      placeholder="Quantity"
                      onChange={(e) => {
                        const newData = [...data];
                        newData[index].quantity = e.target.value;
                        setData(newData);
                      }}
                      className="w-full outline-none"
                    />
                  </td>
                  <td className="border border-mainColor px-4 py-2 text-mainColor">
                    <input
                      type="checkbox"
                      checked={row.stackable}
                      onChange={(e) => {
                        const newData = [...data];
                        newData[index].stackable = e.target.checked;
                        setData(newData);
                      }}
                      className="w-full outline-none"
                    />
                  </td>
                  <td onClick={() => {
                    filterRow(index);
                  }} className="border cursor-pointer border-mainColor px-4 py-2 text-mainColor text-4xl">
                    -
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-center mt-8">
            <button onClick={addRow} className="px-8 py-3 bg-mainColor text-white font-unbounded font-bold">ADD NEW LINE</button>
          </div>
        </div>
        <div className="">
          <p className="text-mainColor text-2xl font-semibold capitalize">
            Please add the dimensions of the bin:
          </p>
          <table className="min-w-full bg-white border border-mainColor mt-5">
            <thead className="bg-mainColor text-white">
              <tr className="">
                <th className="px-4 py-2">Item</th>
                <th className="px-4 py-2">Length</th>
                <th className="px-4 py-2">Width</th>
                <th className="px-4 py-2">Height</th>
                <th className="px-4 py-2">Max Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-mainColor px-4 py-2 text-mainColor">
                  <input
                    type="text"
                    value={truckData.item}
                    placeholder="Item"
                    onChange={(e) => {
                      setTruckData({ ...truckData, item: e.target.value });
                    }}
                    className="w-full outline-none"
                  />
                </td>
                <td className="border border-mainColor px-4 py-2 text-mainColor">
                  <input
                    type="number"
                    value={truckData.length}
                    placeholder="Length"
                    onChange={(e) => {
                      setTruckData({ ...truckData, length: e.target.value });
                    }}
                    className="w-full outline-none"
                  />
                </td>
                <td className="border border-mainColor px-4 py-2 text-mainColor">
                  <input
                    type="number"
                    value={truckData.width}
                    placeholder="Width"
                    onChange={(e) => {
                      setTruckData({ ...truckData, width: e.target.value });
                    }}
                    className="w-full outline-none"
                  />
                </td>
                <td className="border border-mainColor px-4 py-2 text-mainColor">
                  <input
                    type="number"
                    value={truckData.height}
                    placeholder="Height"
                    onChange={(e) => {
                      setTruckData({ ...truckData, height: e.target.value });
                    }}
                    className="w-full outline-none"
                  />
                </td>
                <td className="border border-mainColor px-4 py-2 text-mainColor">
                  <input
                    type="number"
                    value={truckData.maxWeight}
                    placeholder="Max Weight"
                    onChange={(e) => {
                      setTruckData({ ...truckData, maxWeight: e.target.value });
                    }}
                    className="w-full outline-none"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
