import { Dispatch, FC, SetStateAction } from "react";

import BasketBallCourtImage from "@/assets/basketball-court.jpg";
import { ContactForm } from "./details-from";
import { BookingFormData } from "..";

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
  bookingFormData: BookingFormData | undefined;
  setBookingFormData: Dispatch<SetStateAction<BookingFormData | undefined>>;
};

export const DetailsStep: FC<Props> = ({
  player,
  date,
  time,
  setActiveStep,
  court,
  bookingFormData,
  setBookingFormData,
}) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const selectedDate = formatDate(date as Date);

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
          <div className="absolute left-[calc(50%-100px)] top-8 text-3xl font-semibold text-white">
            <p>{court}</p>
          </div>

          {/* Selected Details  */}
          <div className="flex flex-col gap-4 text-white py-7 bg-emerald-600">
            <div className=" text-white p-4 mt-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>PLAYERS : {player}</div>
                <div className="text-right">TIME : {time}</div>
                <div>DATE : {selectedDate ? selectedDate : ""}</div>
              </div>
            </div>
          </div>
        </div>

        {/* right section  */}
        <div className=" border border-gray-300 p-5">
          <ContactForm
            setActiveStep={setActiveStep}
            bookingFormData={bookingFormData}
            setBookingFormData={setBookingFormData}
          />
        </div>
      </div>
    </div>
  );
};
