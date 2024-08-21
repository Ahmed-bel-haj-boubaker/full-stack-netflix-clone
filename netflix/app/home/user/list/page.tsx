import MovieCard from "@/app/components/MovieCard";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";

async function getData(userId: string) {
  const data = await prisma.watchList.findMany({
    where: { userId: userId },

    select: {
      Movie: {
        select: {
          title: true,
          overview: true,
          youtubeString: true,
          imageString: true,
          WatchLists: true,
          id: true,
          age: true,
          release: true,
          duration: true,
        },
      },
    },
  });
  return data;
}
const page = async () => {
  const session = await getServerSession(authOptions);
  const data = await getData("abc");
  return (
    <>
      <h1 className="text-white text-4xl font-bold underline mt-10 px-5 sm:px-0">
        Your watch list
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
        {data.map((e) => (
          <div key={e.Movie?.id as number} className="relative h-48">
            <Image
              src={e.Movie?.imageString as string}
              alt="Movie"
              width={500}
              height={400}
              className="rounded-sm absolute w-full h-full"
            />
            <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
              <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
                {" "}
                <Image
                  src={e.Movie?.imageString as string}
                  alt="Movie"
                  width={800}
                  height={800}
                  className="rounded-lg  object-cover absolute w-full h-full -z-10"
                />
                <MovieCard
                  title={e.Movie?.title as string}
                  overview={e.Movie?.overview as string}
                  movieId={e.Movie?.id as number}
                  watchListId={e.Movie?.WatchLists[0]?.id as string}
                  youtubeUrl={e.Movie?.youtubeString as string}
                  watchList={
                    (e.Movie?.WatchLists.length as number) > 0 ? true : false
                  }
                  key={e.Movie?.id}
                  age={e.Movie?.age as number}
                  year={e.Movie?.release as number}
                  time={e.Movie?.duration as number}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
