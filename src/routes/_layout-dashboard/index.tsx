import { createFileRoute } from "@tanstack/react-router";
import { ProgressTabs } from "./-components/progress-tabs";
import { useState } from "react";

import BasketBallCourtImage from "@/assets/basketball-court.jpg";
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

export const Route = createFileRoute("/_layout-dashboard/")({
  component: Index,
});

const times = [
  "9:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "1:00 pm",
  "2:00 pm",
  "3:00 pm",
  "4:00 pm",
  "5:00 pm",
  "6:00 pm",
  "7:00 pm",
  "8:00 pm",
];

function Index() {
  const [activeTab, setActiveTab] = useState(1);
  const [player, setPlayer] = useState(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState(times[0]);

  return (
    <div className="w-full mx-auto flex flex-col gap-16">
      <ProgressTabs
        activeTab={activeTab}
        setActiveTab={(value) => setActiveTab(value)}
      />

      <div className="grid grid-cols-2 gap-10 w-full max-w-screen-xl">
        {/* left section  */}
        <div className="relative">
          <img
            className="w-full"
            src={BasketBallCourtImage}
            alt="Basketball Court Image"
          />
          <Select>
            <SelectTrigger className="w-fit bg-transparent focus:ring-0 text-white border-none ring-offset-transparent absolute left-[calc(50%-120px)] shadow-none text-2xl font-extrabold top-8">
              <SelectValue placeholder="Basketball Courts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basketball">Basketball Courts</SelectItem>
              <SelectItem value="table-tennis">Table Tennis Courts</SelectItem>
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
              <div className="size-4 bg-brand-primary"></div>
              <p className="text-white font-medium">Selected Day</p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="size-4 bg-brand-secondary"></div>
              <p className="text-white font-medium">Selected Day</p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="size-4 bg-brand-secondary rounded-full"></div>
              <p className="text-white font-medium">Selected Day</p>
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
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Time :</h3>
        <div className="grid grid-cols-4 gap-4">
          {times.map((item) => (
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
    </div>
  );
}
