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
  activeStep: number;
};

export const ProgressTabs: FC<Props> = ({ activeStep }) => {
  return (
    <div className="flex justify-center gap-20">
      {availableTabs.map((item, index) => {
        return (
          <div key={item.step} className={`flex gap-4 items-center`}>
            <p
              className={`size-8 min-w-8 max-w-8 flex justify-center items-center text-lg rounded-full text-white ${index < activeStep ? "bg-brand-secondary" : " bg-gray-300"}`}
            >
              {item.step}
            </p>

            <p
              className={`uppercase tracking-widest font-medium ${index < activeStep ? " text-gray-700 font-semibold" : " text-gray-400"}`}
            >
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};
