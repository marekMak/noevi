"use client";
import Image from "next/image";
import Hero from "./Hero/page";
import { Canvas } from "@react-three/fiber";
import { View, Loader } from "@react-three/drei";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
    </div>
  );
}
