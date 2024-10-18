import { Dispatch, FC, SetStateAction } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

import BasketBallCourtImage from "@/assets/basketball-court.jpg";

type Props = {
  player: number;
  setPlayer: Dispatch<SetStateAction<number>>;
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
  time: string;
  setTime: Dispatch<SetStateAction<string>>;
  disabledDays: Date[];
  availableTimes: string[];
  disabledTimes: string[];
  setActiveStep: Dispatch<SetStateAction<number>>;
  court: string;
  setCourt: Dispatch<SetStateAction<string>>;
};

export const SelectStep: FC<Props> = ({
  player,
  setPlayer,
  date,
  setDate,
  time,
  setTime,
  disabledDays,
  availableTimes,
  setActiveStep,
  court,
  setCourt,
}) => {
  const handleSubmit = () => {
    setActiveStep(2);
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-2 gap-10 w-full max-w-screen-xl">
        {/* left section  */}
        <div className="relative">
          <img
            className="w-full"
            src={BasketBallCourtImage}
            alt="Basketball Court Image"
          />
          <Select value={court} onValueChange={(value) => setCourt(value)}>
            <SelectTrigger className="w-fit bg-transparent focus:ring-0 text-white border-none ring-offset-transparent absolute left-[calc(50%-120px)] shadow-none text-2xl font-extrabold top-8">
              <SelectValue placeholder="Baseball Court" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Baseball Court">Baseball Court</SelectItem>
              <SelectItem value="Cricket Court">Cricket Court</SelectItem>
            </SelectContent>
          </Select>

          {/* Players  */}
          <div className="absolute bottom-8 left-20">
            <p className="text-lg uppercase tracking-widest font-semibold text-white">
              Players
            </p>
            <div className="flex gap-5">
              <p className="text-7xl text-white font-black">{player}</p>
              <div className="flex flex-col justify-between pb-1 pt-4">
                <button
                  onClick={() => setPlayer((prevPlayer) => prevPlayer + 1)}
                >
                  <PlusIcon className="text-white size-6" />
                </button>
                <button
                  onClick={() =>
                    setPlayer((prevPlayer) =>
                      prevPlayer - 1 > 1 ? prevPlayer - 1 : 1
                    )
                  }
                >
                  <MinusIcon className="text-white size-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Color meaning  */}
          <div className="flex flex-col gap-4 text-white absolute bottom-8 right-20">
            <div className="flex gap-2 items-center">
              <div className="size-4 bg-blue-300"></div>
              <p className="text-white font-medium">Current Day</p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="size-4 bg-brand-secondary"></div>
              <p className="text-white font-medium">Selected Day</p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="size-4 bg-gray-600 rounded-full"></div>
              <p className="text-white font-medium">Not Available</p>
            </div>
          </div>
        </div>

        {/* right section  */}
        <div className="bg-brand-primary flex justify-center items-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="text-white"
            classNames={{
              head_cell: "w-20",
              cell: "w-20 h-11 flex justify-center items-center p-0 m-0 hover:bg-brand-primary",
              day_selected:
                "bg-brand-secondary text-white hover:bg-brand-secondary hover:text-white",
              day_today: "bg-blue-300",
              caption_label: "font-bold text-2xl",
              day_disabled:
                "rounded-full bg-gray-600 disabled:opacity-100 disabled:rounded-full",
            }}
            disabled={disabledDays}
            showOutsideDays={true}
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Time :</h3>
        <div className="grid grid-cols-4 gap-4">
          {availableTimes.map((item) => (
            <Button
              key={item}
              variant={item === time ? "default" : "outline"}
              className={
                item === time ? "bg-brand-primary hover:bg-brand-primary" : ""
              }
              onClick={() => setTime(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          onClick={handleSubmit}
          size={"lg"}
          className="bg-brand-secondary hover:bg-brand-secondary"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};
