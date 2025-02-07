import { FrappeGantt } from "frappe-gantt-react";
import { useState } from "react";

const Overview = ({ project, tasks, setTasks, isLoading, setIsLoading }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 w-full m-10">
      <div className="w-[80vw]">
        {isLoading ? (
          <div>loading ...</div>
        ) : tasks.length <= 0 ? (
          <>we are awaiting for your search</>
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
      {isLoading ? (
        <></>
      ) : tasks.length <=0 ? <></> :(
        <>
          <div className="flex justify-between p-2 w-full">
            <img
              className="max-w-[15rem]"
              src="/images/overview/Group 8.svg"
              alt="stat"
            />
            <img
              className="max-w-[15rem]"
              src="/images/overview/Group 9.svg"
              alt="stat"
            />
            <img
              className="max-w-[15rem]"
              src="/images/overview/Group 10.svg"
              alt="stat"
            />
            <img
              className="max-w-[15rem]"
              src="/images/overview/Group 11.svg"
              alt="stat"
            />
          </div>
          <img
            className="self-start max-w-[30rem]"
            src="/images/overview/Frame 1.svg"
            alt="stats"
          />
        </>
      )}
    </div>
  );
};

export default Overview;
