"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
  label: string;
  name: string;
}

const CTDatePicker = ({ label, name }: IProps) => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  const [date, setDate] = useState<Date>();

  useEffect(() => {
    setValue(name, date);
  }, [date]);

  return (
    <div className="grid">
      <label className="text-sm text-slate-800">{label}</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date ? moment(date).format("LL") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {errors[name] && (
        <span className="text-primary text-xs">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default CTDatePicker;
