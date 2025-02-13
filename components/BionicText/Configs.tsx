"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { RotateCw, Save, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useBionic } from "@/context/bionicContext";
import { Slider } from "../ui/slider";

const Configs = () => {
  const {
    boldLength,
    fontSize,
    setBoldLength,
    setFontSize,
    playbackSpeed,
    setPlaybackSpeed,
  } = useBionic();

  const [tempBoldLength, setTempBoldLength] = useState(boldLength);
  const [tempFontSize, setTempFontSize] = useState(fontSize);
  const [tempPlaybackSpeed, setTempPlaybackSpeed] = useState(playbackSpeed);
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    setBoldLength(tempBoldLength);
    setFontSize(tempFontSize);
    setPlaybackSpeed(tempPlaybackSpeed);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="border">
          <Settings />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Configurations</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex items-center gap-2 p-2">
          <Label htmlFor="bold-length">Bold length:</Label>
          <Input
            id="bold-length"
            type="number"
            value={tempBoldLength}
            min={1}
            max={10}
            onChange={(e) => setTempBoldLength(Number(e.target.value))}
            className="w-16 text-center"
          />
        </div>
        <div className="flex items-center gap-2 p-2">
          <Label htmlFor="font-size">Font size:</Label>
          <Input
            id="font-size"
            type="number"
            value={tempFontSize}
            min={4}
            max={64}
            onChange={(e) => setTempFontSize(Number(e.target.value))}
            className="w-16 text-center"
          />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <Label htmlFor="playback-speed">Playback speed:</Label>
          <div className="flex space-x-1">
            <Slider
              id="playback-speed"
              defaultValue={[playbackSpeed]}
              min={100}
              max={3000}
              step={100}
              onValueChange={(value) => setTempPlaybackSpeed(value[0])}
            />
            <div className="border p-1 min-w-12 text-right">
              {tempPlaybackSpeed / 1000}s
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-row-reverse justify-evenly gap-2">
          <Button
            onClick={handleSave}
            className="w-full bg-green-600 hover:bg-green-700"
            size="sm"
          >
            <Save />
            Save
          </Button>
          <Button
            onClick={() => {
              setTempFontSize(16);
              setBoldLength(3);
            }}
            className="border"
            variant="ghost"
            size="sm"
          >
            <RotateCw />
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Configs;
