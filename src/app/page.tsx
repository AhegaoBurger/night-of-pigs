
import Image from "next/image";
import { RetroGridDemo } from "./(components)/retro-grid-demo";
import { TextRevealDemo } from "./(components)/text-reveal-demo";
import WordRotate from "@/components/magicui/word-rotate";

const words = ["we made it", "we are making it", "we'll make it"]

export default function Home() {
  return (
    <main >
      <TextRevealDemo />
      <h1 className="text-5xl font-semibold text-center my-12">
          Don't worry
          <span className="text-green-600">
            <WordRotate words={words} />
          </span>
          try your best.
      </h1>
      <RetroGridDemo />
    </main>
  );
}
