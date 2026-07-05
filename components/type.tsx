"use client";
import { Typewriter } from "react-simple-typewriter";

export default function Type({ text }: { text: string }) {
  return (
    <div>
      <Typewriter
        words={[text]}
        loop={1}
        cursor={true}
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={0}
      />
    </div>
  );
}
