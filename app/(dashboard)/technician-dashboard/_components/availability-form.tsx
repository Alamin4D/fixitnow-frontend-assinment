"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const AvailabilityForm = () => {
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      day,
      startTime,
      endTime,
    };

    console.log(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg border p-6"
    >
      <h2 className="text-xl font-semibold">
        Set Availability
      </h2>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Day
        </label>

        <Select onValueChange={setDay}>
          <SelectTrigger>
            <SelectValue placeholder="Select Day" />
          </SelectTrigger>

          <SelectContent>
            {days.map((d) => (
              <SelectItem key={d} value={d}>
                {d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Start Time
        </label>

        <Input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          End Time
        </label>

        <Input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full">
        Save Availability
      </Button>
    </form>
  );
};

export default AvailabilityForm;