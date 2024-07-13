"use client";
import Maincontent from "@/components/content/Maincontent";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const layout = () => {
  const router = useRouter();
  const partname = usePathname();
  useEffect(() => {
    if (partname == "/content") {
      router.push("/content/pose1");
    }
  }, [router]);
  return (
    <div>
      <Maincontent />
    </div>
  );
};

export default layout;
