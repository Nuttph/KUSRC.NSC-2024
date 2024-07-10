"use server";

import { cookies } from "next/headers";

export async function createCookie() {
  cookies().set({
    name: "n",
    value: "l",
    httpOnly: true,
    path: "/",
  });
}
