import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tabs = ({
    title,
    headers = [],
    content = [],
    customContent = [],
    tabValue
}) => {
  const [selectedTab, setSelectedTab] = useState(headers[0]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    setSelectedTab(tabValue || headers[0]);
  }, [tabValue]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-[80%] flex flex-row justify-between mt-8 mb-4 items-center">
        <h1 className="text-3xl font-bold text-mainColor">
        {title}:
        </h1>
        <Link to='/' className="px-8 py-3 bg-mainColor text-white font-unbounded font-bold">Back</Link>
      </div>
      <div className="w-[80%] flex flex-row space-x-4 ml-16 mt-10 pointer-events-none">
        {
            headers.map((header, index) => (
                <button
                    key={index}
                    className={`px-8 py-2 ${
                        (selectedTab === header) && "!bg-mainColor !text-white"}
                        bg-transparent border border-mainColor border-b-transparent bg-white text-mainColor capitalize font-unbounded font-bold`}
                    onClick={() => handleTabChange(header)}
                >
                    {header}
                </button>
            ))
        }
      </div>

      <div
        className={`w-[80%] p-10 flex flex-col items-center  border border-mainColor bg-white mb-20 transition-all duration-300`}
      >
        {
            content.map((item, index) => (
                <div className="contents" key={index}>
                    {(selectedTab == item.header) && item.component}
                </div>
            ))
        }
        {
            !!customContent.length &&
            customContent.map((item, index) => (
                <div className="contents" key={index}>
                    {(selectedTab == item.header) && item.component}
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Tabs;
