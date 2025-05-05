import Image from "next/image";
import styles from "./page.module.css";
import AnimatedBox from "@/components/gsap/AnimatedG";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <AnimatedBox />
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}
