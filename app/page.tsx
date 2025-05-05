import Image from "next/image";
import styles from "./page.module.css";
import AnimatedBox from "@/components/gsap/AnimatedG";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <AnimatedBox />
    <Button className="mt-4">
      Click Me
    </Button>
    </div>
  );
}
