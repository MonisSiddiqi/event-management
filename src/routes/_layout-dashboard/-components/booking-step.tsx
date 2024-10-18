import { Dispatch, FC, SetStateAction } from "react";

import BasketBallCourtImage from "@/assets/basketball-court.jpg";
import { BookingFormData } from "..";
import { BookingForm } from "./payment-form";

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

export const BookingStep: FC<Props> = ({
  player,
  date,
  time,
  setActiveStep,
  court,
  bookingFormData,
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
            <div className=" text-white p-4 mt-auto flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  {" "}
                  <span className="text-lg font-semibold">PLAYERS : </span>{" "}
                  {player}
                </div>
                <div className="text-right">
                  {" "}
                  <span className="text-lg font-semibold">TIME : </span> {time}
                </div>
                <div>
                  {" "}
                  <span className="text-lg font-semibold">DATE : </span>
                  {selectedDate ? selectedDate : ""}
                </div>
              </div>
              {bookingFormData && (
                <div className="grid grid-cols-2 gap-4 border-t pt-5 border-gray-300">
                  <div>
                    <span className="text-lg font-semibold">NAME : </span>
                    {bookingFormData.name}
                  </div>
                  <div className="text-right">
                    <span className="font-semibold">SURNAME : </span>{" "}
                    {bookingFormData.surname}
                  </div>
                  <div>
                    <span className="font-semibold">EMAIL : </span>{" "}
                    {bookingFormData.email}
                  </div>
                  <div className="text-right">
                    <span className=" font-semibold">PHONE : </span>{" "}
                    {bookingFormData.phone}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* right section  */}
        <div className=" border border-gray-300 p-5">
          <BookingForm setActiveStep={setActiveStep} />
        </div>
      </div>
    </div>
  );
};
