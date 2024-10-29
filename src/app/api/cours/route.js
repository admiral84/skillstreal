import { Cour } from "@/app/lib/models";
import { connectToDb } from "@/app/lib/utils";
import { NextResponse } from "next/server";
export const GET = async (request) => {
  try {
    connectToDb();
    const cours = await Cour.find();
    return NextResponse.json(cours);
  } catch (error) {
    console.log(error);
    throw new Error("can not ferch courses");
  }
};
