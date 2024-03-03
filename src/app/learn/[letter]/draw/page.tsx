"use client";
import React from "react";
import { Tldraw } from "tldraw";

const DrawPage = () => {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw />
    </div>
  );
};

export default DrawPage;
