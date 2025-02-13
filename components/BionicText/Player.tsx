"use client";

import { useBionic } from "@/context/bionicContext";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pause, Play, RotateCw } from "lucide-react";
import { Button } from "../ui/button";

const BionicPlayer = () => {
  const { fontSize, outputText, playbackSpeed } = useBionic();

  const [words, setWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setWords(outputText.split(" "));
    setCurrentWordIndex(0);
  }, [outputText]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying && words.length > 0) {
      interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => {
          if (prevIndex < words.length - 1) return prevIndex + 1;
          setIsPlaying(false);
          return prevIndex;
        });
      }, playbackSpeed);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, words, playbackSpeed]);

  return (
    <Dialog
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setCurrentWordIndex(0);
          setIsPlaying(false);
        }
      }}
    >
      <DialogTrigger asChild disabled={!outputText}>
        <Button className="border" variant="ghost">
          <Play />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Bionic Player</DialogTitle>
        <div
          id="conversionOutput"
          style={{ fontSize: `${fontSize}px` }}
          className="border rounded-md p-4 h-32 w-full flex items-center justify-center text-foreground bg-background text-center"
          dangerouslySetInnerHTML={{ __html: words[currentWordIndex] }}
        />
        <div className="flex gap-2 mt-4">
          <Button onClick={() => setIsPlaying((prev) => !prev)} variant="ghost">
            {isPlaying ? <Pause /> : <Play />}
          </Button>
          <Button onClick={() => setCurrentWordIndex(0)} variant="ghost">
            <RotateCw />
          </Button>
        </div>
        <DialogFooter className="text-gray-400 flex flex-col">
          <div>
            {currentWordIndex + 1} / {words.length}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BionicPlayer;
