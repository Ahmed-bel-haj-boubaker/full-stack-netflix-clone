"use client";

import { Button } from "@/components/ui/button";
import { HeartIcon, PlayCircle } from "lucide-react";
import PlayVideoModal from "./PlayVideoModal";
import { useState } from "react";

interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
  age: number;
  year: number;
  time: number;
}

const MovieCard = ({
  title,
  overview,
  age,
  year,
  time,
  movieId,
  watchList,
  watchListId,
  youtubeUrl,
}: iAppProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="-mt-14" onClick={() => setOpen(true)}>
        <PlayCircle className="size-20" />
      </button>
      <div className="right-5 top-5 absolute z-10">
        {watchList ? (
          <form>
            <input type="hidden" name="movieId" value={movieId} />
            <Button variant="outline" size="icon">
              <HeartIcon className="size-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form>
            <Button variant="outline" size="icon">
              <HeartIcon className="size-4  " />
            </Button>
          </form>
        )}
      </div>
      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1 ">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm ">{year}</p>
          <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">
            {age}+
          </p>
          <p className="font-normal text-sm">{time}h</p>
        </div>
        <p className="line-clamp-1 textsm text-gray-200 font-light">
          {overview}
        </p>
      </div>
      <PlayVideoModal
        title={title}
        overview={overview}
        state={open}
        changeState={setOpen}
        youtubeUrl={youtubeUrl}
        key={movieId}
        duration={0}
        release={0}
      />
    </>
  );
};

export default MovieCard;
