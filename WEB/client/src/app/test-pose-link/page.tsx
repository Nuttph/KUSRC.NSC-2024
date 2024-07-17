"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/test-pose");
  }, [router]);

  return <div></div>;
};

export default page;
