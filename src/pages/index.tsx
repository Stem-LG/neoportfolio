import { effect, signal } from "@preact/signals-react";
import { Typewriter } from "react-simple-typewriter";
import { fullName, typewriterWords, aboutMe } from "@/content";

export default function Home() {
    return (
        <div className="max-w-[400px] px-5 sm:max-w-[620px] mx-auto">
            <h2 className={"text-xl sm:text-3xl mb-2 sm:mb-6 mt-10 sm:mt-14"}>Hello, I'm {fullName}</h2>
            <h3 className="flex text-md sm:text-xl">
                I'm a{"\u00A0"}
                <i>
                    <Typewriter
                        cursor
                        loop
                        delaySpeed={3000}
                        cursorStyle={"!"}
                        words={typewriterWords
                            .map((value) => ({ value, sort: Math.random() }))
                            .sort((a, b) => a.sort - b.sort)
                            .map(({ value }) => value)}
                    />
                </i>
            </h3>
            <hr className="my-2 sm:my-6 border-primary" />
            <h2 className="text-xl sm:text-3xl mb-2 sm:mb-6">About</h2>
            <p className="text-md sm:text-xl whitespace-pre-wrap">{aboutMe}</p>
        </div>
    );
}
