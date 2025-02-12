import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Save, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface ConfigsProps {
  boldLength: number;
  setBoldLength: (boldLength: number) => void;
}

const Configs: React.FC<ConfigsProps> = ({ boldLength, setBoldLength }) => {
  const [tempBoldLength, setTempBoldLength] = useState(boldLength);
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    setBoldLength(tempBoldLength);
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
        <div className="p-2 flex justify-end">
          <Button
            onClick={handleSave}
            className="w-full bg-green-600 hover:bg-green-700"
            size="sm"
          >
            <Save />
            Save
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Configs;
