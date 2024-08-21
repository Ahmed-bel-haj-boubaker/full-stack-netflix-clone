import Image from "next/image";
import prisma from "../utils/db";
import MovieCard from "./MovieCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";

async function getData(userId: string) {
  const data = await prisma.movie.findMany({
    select: {
      title: true,
      overview: true,
      youtubeString: true,
      imageString: true,
      WatchLists: {
        where: {
          userId: userId,
        },
      },
      id: true,
      age: true,
      release: true,
      duration: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });
  return data;
}

const RecentlyAdded = async () => {
  const session = await getServerSession(authOptions);
  const data = await getData(session?.user?.email as string);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {data.map((e) => (
        <div key={e.id} className="relative h-48">
          <Image
            src={e.imageString}
            alt="Movie"
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full"
          />
          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
              {" "}
              <Image
                src={e.imageString}
                alt="Movie"
                width={800}
                height={800}
                className="rounded-lg  object-cover absolute w-full h-full -z-10"
              />
              <MovieCard
                title={e.title}
                overview={e.overview}
                movieId={e.id}
                watchListId={e.WatchLists[0]?.id}
                youtubeUrl={e.youtubeString}
                watchList={e.WatchLists.length > 0 ? true : false}
                key={e.id}
                age={e.age}
                year={e.release}
                time={e.duration}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentlyAdded;
