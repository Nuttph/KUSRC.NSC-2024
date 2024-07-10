"use server";

import { cookies } from "next/headers";

export async function createCookie() {
  cookies().set({
    name: "cookie",
    value: "vOF_cookie",
    httpOnly: true,
    path: "/",
  });
}
