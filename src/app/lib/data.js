import { Error } from "mongoose";
import { Cour } from "./models";
import { connectToDb } from "./utils";

export const updateCour = async (id, updateData) => {
  try {
    await connectToDb();
    const updatedCour = await Cour.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return updatedCour;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update course");
  }
};

export const getCours = async () => {
  try {
    await connectToDb();
    const cours = await Cour.find();
    return cours;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch courses");
  }
};
export const getCour = async (titre) => {
  try {
    await connectToDb();
    const cour = await Cour.findOne({ titre: titre });
    console.log("correctly fetching the course");
    return cour;
  } catch (error) {
    console.log(error);
    throw new Error(Error);
  }
};
