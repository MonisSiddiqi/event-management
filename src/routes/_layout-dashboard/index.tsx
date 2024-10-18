import { createFileRoute } from "@tanstack/react-router";
import { ProgressTabs } from "./-components/progress-tabs";
import { useState } from "react";
import { SelectStep } from "./-components/select-step";
import { DetailsStep } from "./-components/details-step";
import { BookingStep } from "./-components/booking-step";

export const Route = createFileRoute("/_layout-dashboard/")({
  component: Index,
});

const availableTimes = [
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

const disabledTimes: string[] = [];

const disabledDays = [
  new Date(2024, 9, 29), // Month is zero-based, so 9 represents October
];

export type BookingFormData = {
  message: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  terms: boolean;
};

function Index() {
  const [activeStep, setActiveStep] = useState(1);
  const [player, setPlayer] = useState<number>(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState(availableTimes[0]);
  const [court, setCourt] = useState("Baseball Court");
  const [bookingFormData, setBookingFormData] = useState<
    BookingFormData | undefined
  >();

  return (
    <div className="w-full mx-auto flex flex-col gap-12 my-12">
      <ProgressTabs activeStep={activeStep} />

      {activeStep === 1 && (
        <SelectStep
          date={date}
          setDate={setDate}
          player={player}
          setPlayer={setPlayer}
          time={time}
          setTime={setTime}
          disabledDays={disabledDays}
          availableTimes={availableTimes}
          disabledTimes={disabledTimes}
          setActiveStep={setActiveStep}
          court={court}
          setCourt={setCourt}
        />
      )}

      {activeStep === 2 && (
        <DetailsStep
          date={date}
          setDate={setDate}
          player={player}
          setPlayer={setPlayer}
          time={time}
          setTime={setTime}
          disabledDays={disabledDays}
          availableTimes={availableTimes}
          disabledTimes={disabledTimes}
          setActiveStep={setActiveStep}
          court={court}
          setCourt={setCourt}
          bookingFormData={bookingFormData}
          setBookingFormData={setBookingFormData}
        />
      )}

      {activeStep === 3 && (
        <BookingStep
          date={date}
          setDate={setDate}
          player={player}
          setPlayer={setPlayer}
          time={time}
          setTime={setTime}
          disabledDays={disabledDays}
          availableTimes={availableTimes}
          disabledTimes={disabledTimes}
          setActiveStep={setActiveStep}
          court={court}
          setCourt={setCourt}
          bookingFormData={bookingFormData}
          setBookingFormData={setBookingFormData}
        />
      )}
    </div>
  );
}
