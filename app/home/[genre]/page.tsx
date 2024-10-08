import MovieCard from "@/app/components/MovieCard";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";

async function getData(category: string, userId: string) {
  switch (category) {
    case "shows": {
      const data = await prisma.movie.findMany({
        where: { category: "show" },
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
      });
      return data;
    }
    case "movies": {
      const data = await prisma.movie.findMany({
        where: { category: "movie" },
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
      });
      return data;
    }
    case "recently": {
      const data = await prisma.movie.findMany({
        where: { category: "recent" },
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
      });
      return data;
    }
    default: {
      throw new Error();
    }
  }
}

const CategoryPage = async ({ params }: { params: { genre: string } }) => {
  const session = await getServerSession(authOptions);
  const data = await getData(params.genre, session?.user?.email as string);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0  mt-8 gap-6">
      {data.map((e) => (
        <div key={e.id} className="relative h-48">
          <Image
            src={e.imageString}
            alt="movie"
            width={500}
            height={400}
            className="rounded-sm absolute w-full object-cover"
          />
          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
              <Image
                src={e.imageString}
                alt="movie"
                width={800}
                height={800}
                className=" absolute w-full object-cover rounded-lg -z-10"
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

export default CategoryPage;
