import { effect, signal } from "@preact/signals-react";
import { Typewriter } from "react-simple-typewriter";

const counter = signal(0);

const mounted = signal(false);
effect(() => {
    setTimeout(() => {
        mounted.value = true;
    }, 300);
});

export default function Home() {
    return (
        <div
            className={
                "max-w-[400px] px-5 sm:max-w-[620px] mx-auto  transition-all duration-500 " +
                (mounted.value ? "opacity-100" : "translate-x-[-50px] opacity-0")
            }
        >
            <h2 className={"text-xl sm:text-3xl mb-2 sm:mb-6 mt-10 sm:mt-14"}>Hello, I'm Louay Ghanney</h2>
            <h3 className="flex text-md sm:text-xl">
                I'm a{"\u00A0"}
                <i>
                    <Typewriter
                        cursor
                        loop
                        delaySpeed={3000}
                        cursorStyle={"!"}
                        words={[
                            "Web Developer",
                            "Freelancer",
                            "Tech Enthusiast",
                            "Junior Instructor",
                            "Always Learning",
                        ]
                            .map((value) => ({ value, sort: Math.random() }))
                            .sort((a, b) => a.sort - b.sort)
                            .map(({ value }) => value)}
                    />
                </i>
            </h3>
            <hr className="my-2 sm:my-6 border-primary" />
            <h2 className="text-xl sm:text-3xl mb-2 sm:mb-6">About</h2>
            <p className="text-md sm:text-xl mb-2 sm:mb-3">
                Student, self-taught full-stack wizard, and knowledge-sharing instructor.
            </p>
            <p className="text-md sm:text-xl mb-2 sm:mb-3">
                I juggle code in all its forms while pushing boundaries and building cool stuff.
            </p>
            <p className="text-md sm:text-xl">Explore my portfolio and let's unlock your digital ideas together.</p>
        </div>
    );
}
