import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { RefreshCw, RotateCw, Save, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface ConfigsProps {
  boldLength: number;
  setBoldLength: (boldLength: number) => void;
  fontSize: number;
  setFontSize: (fontSize: number) => void;
}

const Configs: React.FC<ConfigsProps> = ({
  boldLength,
  setBoldLength,
  fontSize,
  setFontSize,
}) => {
  const [tempBoldLength, setTempBoldLength] = useState(boldLength);
  const [tempFontSize, setTempFontSize] = useState(fontSize);
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    setBoldLength(tempBoldLength);
    setFontSize(tempFontSize);
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
