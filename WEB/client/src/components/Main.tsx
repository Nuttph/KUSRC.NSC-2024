"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";
const Main = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Stack direction="row">
          <Button variant="contained" className="text-[20px]">
            <Link href="/body">Click</Link>
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default Main;
