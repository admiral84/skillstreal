"use server";
import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcrypt";

export const handleGithubLogin = async () => {
  console.log(" login called");
  await signIn("github");
};

export const handleGithubLogout = async () => {
  console.log("logout  called");
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, passwordRetape } =
    Object.fromEntries(formData);

  if (password !== passwordRetape) {
    return { error: "password do not match" };
  }
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "user already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    console.log(hashPassword);
    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });

    await newUser.save();
    console.log("saved to db");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "something went wrong during the saving" };
  }
};
//login action
export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
    return { error: "incorrect username or password" };
  }
};
