import { FC } from "react";

const availableTabs = [
  {
    step: 1,
    title: "Select",
  },
  {
    step: 2,
    title: "Details",
  },
  {
    step: 3,
    title: "Confirm",
  },
];

type Props = {
  activeTab: number;
  setActiveTab: (value: number) => void;
};

export const ProgressTabs: FC<Props> = ({ activeTab }) => {
  return (
    <div className="mx-auto max-w-screen-sm w-full mt-20 grid grid-cols-3">
      {availableTabs.map((item) => {
        return (
          <div key={item.step} className={`flex gap-4 items-center`}>
            <p
              className={`size-8 flex justify-center items-center text-lg rounded-full text-white ${activeTab === item.step ? "bg-yellow-500" : " bg-green-700"}`}
            >
              {item.step}
            </p>

            <p className=" uppercase tracking-widest font-medium text-gray-600">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};
