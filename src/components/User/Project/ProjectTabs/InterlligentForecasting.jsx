import { useState } from "react";
import API from "../../../../utils/api-client";
import { toast } from "react-toastify";
import { FrappeGantt } from "frappe-gantt-react";

const InterlligentForecasting = ( {tasks, setTasks, isLoading, setIsLoading}) => {
  const [description, setDescription] = useState("");
  const [currentDesc, setCurrentDesc] = useState("...");
//   const [tasks, setTasks] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
  const taskValues = {
    id: "id",
    name: "name",
    start: "start",
    end: "start",
    progress: "progress",
    dependencies: "dependencies",
  };

  const sendDescription = async () => {
    setIsLoading(true);
    try {
      const response = await API.post("gantt/generateTasks", {
        description: description,
      });

      setTasks(response.data.tasks);
      setCurrentDesc(description)
      setDescription("");

      toast.success("Generate gantt", {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } catch (error) {
      toast.error(error?.response?.message ?? "Error", {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="p-10 w-full flex flex-col items-center ">
      <div className="text-center mb-10">
        <img
          className="mr-auto ml-auto mb-5"
          src="/images/User/carbon_bot.svg"
          alt="carbon bot"
        />
        <h2 className="text-[2rem] font-unbounded text-mainColor">
          Choose a conversation mode
        </h2>
      </div>
      <div className="flex gap-4">
        {
          ['Task Scheduling', 'Risk Predictor', 'Ressources Allocator']
          .map((item, index) => (
            <div onClick={() => setActiveIndex(index)} key={index} className={`cursor-pointer p-5 border-2 ${(activeIndex === index) && 'bg-mainColor text-white'}`}>
              {item}
            </div>
          ))
        }
      </div>
      <div className="flex gap-2 mt-10 relative">
        <img
          className="self-start border border-black rounded-full relative -left-4 top-1"
          src="/images/User/profile.svg"
          alt="profile"
        />
        <div className="absolute rotate-45 h-5 w-5 left-12 top-5 bg-gray-400"></div>
        <p className="p-5 bg-gray-400 max-w-[25rem] relative z-10">
          {currentDesc}
        </p>
      </div>

      <div className="w-[80vw] mt-10">
        {isLoading ? (
          <div>loading ...</div>
        ) : tasks.length <= 0 ? (
          <>We are awaitng for your search</>
        ) : (
          <FrappeGantt
            customPopupHTML={() => {
              return <div>test</div>;
            }}
            tasks={tasks}
            viewMode={"Month"}
            onClick={(task) => console.log(task)}
            onTasksChange={(e) => console.log(e)}
          />
        )}
      </div>

      <div className="relative w-full">
        <textarea
          placeholder="Eg: Embark on a comprehensive software development initiative aimed at upgrading our internal CRM system, This project will commence on 2024-05-01 and extend until 2024-09-30..."
          className="h-auto p-5 pr-10 border-2 border-mainColor w-full mt-10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <img
          className="absolute right-4 bottom-8"
          src="/images/User/bi_send.svg"
          alt="bi send"
          onClick={sendDescription}
        />
      </div>
    </div>
  );
};

export default InterlligentForecasting;
