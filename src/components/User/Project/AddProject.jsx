import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import API from "../../../utils/api-client";
import { toast } from "react-toastify";

const Input = ({
  type,
  placeholder,
  width,
  onChange,
  name,
  value,
  disabled,
  max,
  min
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="relative flex flex-col gap-3 mx-auto"
      style={{ width: width }}
    >
      <input
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        className="w-[100%] h-[7vh] rounded-[24px] px-10 border-Gray66 border-2"
        required
        min={min}
        max={max}
      />
    </div>
  );
};

const AddProject = ({ setAddProject, setProjects, projects }) => {
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    plan: "basic",
    localisation: {
      lat: "",
      lng: "",
    },
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the name refers to a nested property by looking for a dot, which represents a property path
    if (name.includes(".")) {
      const [key, nestedKey] = name.split(".");
      setFormData((prevFormData) => ({
        ...prevFormData,
        [key]: {
          ...prevFormData[key],
          [nestedKey]: value,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await API.post("projects/", {
        ...formData,
      });
      projects.push(response.data.project)
      setAddProject(false)

      toast.success("Project created successfully", {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      })
    } catch (error) {
      toast.error(error?.response?.message ?? "Error", {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <section className="fixed z-[99] top-0 left-0 right-0 bottom-0 overlay flex items-center justify-center ">
      <div className="w-[70%] py-10 bg-white shadow-md drop-shadow-md flex flex-col gap-5 p-7 rounded-[48px]">
        {created && (
          <div className="bg-white drop-shadow-md shadow-md gap-2 py-4 px-10 flex items-center justify-center">
            <FaCheckCircle className="text-mainColor " />
            <h4 className="text-mainColor font-bold text-sm">
              project has been created successfully
            </h4>
          </div>
        )}
        <div className="flex items-center justify-between">
          <h2 className="text-[2.2rem] capitalize font-bold text-Gray100">
            Add Project
          </h2>
          <IoMdClose
            className="text-2xl text-mainColor cursor-pointer"
            onClick={() => setAddProject(false)}
          />
        </div>
        <form
          className="flex flex-col gap-2 text-Gray100"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-[12px] flex-col w-[100%]">
            <p className="font-medium text-Typo">Project name</p>
            <Input
              label="text"
              placeholder="Project Title"
              name="title"
              value={formData.name}
              onChange={handleChange}
              width="100%"
              display={"none"}
              disabled={loading}
            />
          </div>

          <div className="flex gap-[12px] flex-col w-[100%]">
            <p className="font-medium text-Typo">Project Description</p>
            <Input
              label="text"
              placeholder="Project description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              width="100%"
              display={"none"}
              disabled={loading}
            />
          </div>

          <select
            name="plan"
            className="p-2 border-2 border-mainColor rounded-md mt-5 mb-5"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, plan: e.target.value }))
            }
          >
            <option value="basic">basic</option>
            <option value="professional">professional</option>
            <option value="entreprise">entreprise</option>
          </select>
          <div className="flex gap-[12px] flex-col w-[100%]">
            <p className="font-medium text-Typo">latitude</p>
            <Input
              label="text"
              placeholder=""
              name="localisation.lat"
              min={0}
              max={90}
              value={formData.localisation.lat}
              onChange={handleChange}
              width="100%"
              display={"none"}
              disabled={loading}
            />
          </div>
          <div className="flex gap-[12px] flex-col w-[100%]">
            <p className="font-medium text-Typo">longitude</p>
            <Input
              label="text"
              placeholder=""
              name="localisation.lng"
              min={0}
              max={180}
              value={formData.localisation.lng}
              onChange={handleChange}
              width="100%"
              display={"none"}
              disabled={loading}
            />
          </div>
          <div className="w-full">
            <button className=" w-[100%] mx-auto h-[7vh] bg-mainColor rounded-[24px] text-white font-bold flex justify-center text-[1.5rem] items-center">
              {loading ? <div className="spinner "></div> : "Create"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProject;
