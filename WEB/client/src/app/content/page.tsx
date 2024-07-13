"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/content/pose1");
  }, [router]);

  return <div></div>;
};

export default page;
