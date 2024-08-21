"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";
interface iAppProps {
  title: string;
  overview: string;
  releaseDate: string;
  duration: number;
  id: number;
  youtubeUrl: string;
  age: number;
}

const MovieButtons = ({
  title,
  overview,
  age,
  id,
  duration,
  releaseDate,
  youtubeUrl,
}: iAppProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium">
        <PlayCircle className="size-6 mr-2" /> Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
      >
        <InfoIcon className="size-6 mr-2" /> Learn more
      </Button>

      <PlayVideoModal
        key={id}
        title={title}
        state={open}
        changeState={setOpen}
        overview={overview}
        youtubeUrl={youtubeUrl}
        duration={duration}
        release={releaseDate}
        age={age}
      />
    </>
  );
};

export default MovieButtons;
