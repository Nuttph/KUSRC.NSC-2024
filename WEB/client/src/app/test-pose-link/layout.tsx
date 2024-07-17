"use client";
import Maincontent from "@/components/content/Maincontent";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const layout = () => {
  const router = useRouter();
  const partname = usePathname();
  useEffect(() => {
    router.push("/test-pose");
  }, [router]);
  return <div></div>;
};

export default layout;
