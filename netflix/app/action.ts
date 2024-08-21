"use server";
import prisma from "./utils/db";

export async function addTowatchList(formData: FormData) {
  const movieId = formData.get("movieId");
  console.log(movieId);
  const data = await prisma.watchList.create({
    data: {
      userId: "abc",
      movieId: Number(movieId),
    },
  });
}
