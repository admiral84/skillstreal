import { Cour } from "@/app/lib/models";
import { connectToDb } from "@/app/lib/utils";
import { NextResponse } from "next/server";
export const GET = async (request, { params }) => {
  const { titre } = params;
  try {
    connectToDb();
    const cour = await Cour.findOne({ titre });
    return NextResponse.json(cour);
  } catch (error) {
    console.log(error);
    throw new Error("can not ferch course");
  }
};
