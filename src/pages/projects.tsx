import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            title: "BudgetTrack",
            description: "An event budget management and tracking app\nuser/pass: admin",
            repository: "https://github.com/Stem-LG/budget-front",
            link: "https://budget.louay.tn",
            tech: [
                {
                    name: "Angular",
                    link: "https://angular.dev/",
                },
                {
                    name: "TailwindCSS",
                    link: "https://tailwindcss.com/",
                },
                {
                    name: "DjangoRF",
                    link: "https://www.django-rest-framework.org/",
                },
            ],
        },
        {
            title: "InternUp",
            description: "A mobile app simplifying internship discovery for students",
            repository: "https://github.com/Stem-LG/internup",
            link: "https://internup.louay.tn",
            tech: [
                {
                    name: "Flutter",
                    link: "https://flutter.dev/",
                },
                {
                    name: "GetX",
                    link: "https://pub.dev/packages/get",
                },
                {
                    name: "Figma",
                    link: "https://www.figma.com/",
                },
            ],
        },
        {
            title: "Linky",
            description: "A custom link shortner",
            repository: "https://www.github.com/Stem-LG/linky",
            link: "https://l.louay.tn/",
            tech: [
                {
                    name: "Next.js",
                    link: "https://nextjs.org",
                },
                {
                    name: "Material UI",
                    link: "https://mui.com/",
                },
                {
                    name: "NextAuth",
                    link: "https://next-auth.js.org/",
                },
                {
                    name: "Prisma",
                    link: "https://www.prisma.io/",
                },
                {
                    name: "TypeScript",
                    link: "https://www.typescriptlang.org/",
                },
            ],
        },
        {
            title: "portfolio v1",
            description: "My first portfolio website",
            repository: "https://www.github.com/Stem-LG/portfolio/",
            link: "https://v1.louay.tn/",
            tech: [
                {
                    name: "Next.js",
                    link: "https://nextjs.org",
                },
                {
                    name: "Material UI",
                    link: "https://mui.com/",
                },
                {
                    name: "NextAuth",
                    link: "https://next-auth.js.org/",
                },
                {
                    name: "Prisma",
                    link: "https://www.prisma.io/",
                },
                {
                    name: "TypeScript",
                    link: "https://www.typescriptlang.org/",
                },
            ],
        },
        {
            title: "Number Rec",
            description: "A handwritten number recognition software",
            repository: "https://github.com/Stem-LG/number_recognition",
            tech: [
                {
                    name: "Python",
                    link: "https://www.python.org",
                },
                {
                    name: "Keras",
                    link: "https://keras.io/",
                },
                {
                    name: "Tensorflow",
                    link: "https://www.tensorflow.org/",
                },
                {
                    name: "Tkinter",
                    link: "https://docs.python.org/3/library/tkinter.html",
                },
            ],
        },
        {
            title: "OTC Badge",
            description: "OrangeTechClub ISETN ID badge design",
            repository: null,
            link: "/assets/docs/otc_badge.pdf",
            tech: [
                {
                    name: "Inkscape",
                    link: "https://inkscape.org/",
                },
            ],
        },
        {
            title: "UniScore",
            description: "A flutter app that calculates tunisian university orientation score",
            repository: "https://github.com/Stem-LG/uniscore",
            link: "https://www.uniscore.cf/",
            tech: [
                {
                    name: "Flutter",
                    link: "https://flutter.dev/",
                },
                {
                    name: "GetX",
                    link: "https://pub.dev/packages/get",
                },
            ],
        },
        {
            title: "Top Services",
            description: "Website for a Landscaping and Gardening Company",
            repository: "https://github.com/Stem-LG/Top-Services",
            link: "https://www.topservices.cf/",
            tech: [
                {
                    name: "Next.js",
                    link: "https://nextjs.org",
                },
                {
                    name: "Material UI",
                    link: "https://mui.com/",
                },
            ],
        },
        {
            title: "LimitBat",
            description: "Battery management Flutter utility for Asus laptops running linux",
            repository: "https://www.github.com/stem-lg/limitbat",
            tech: [
                {
                    name: "Flutter",
                    link: "https://flutter.dev/",
                },
            ],
        },
        {
            title: "Bases",
            description: "A flutter app that converts between numeric bases and roman numbers",
            repository: "https://github.com/Stem-LG/Bases_Flutter",
            link: "https://stem-lg.github.io/",
            tech: [
                {
                    name: "Flutter",
                    link: "https://flutter.dev/",
                },
            ],
        },
    ];

    return (
        <div className="pt-5 w-full">
            <h1 className="w-fit mx-auto text-2xl sm:text-4xl ">Some Projects</h1>

            <div className="max-w-6xl mx-auto px-5 flex flex-wrap justify-center h-fit py-5 gap-5">
                {projects.map(({ title, description, tech, repository, link }, idx) => (
                    <div className="max-w-[350px] w-full rounded-[5px] border border-solid border-current p-4">
                        <div className=" flex justify-between items-center">
                            <h3 className="text-[20px]">{title}</h3>
                            <div className="flex">
                                {repository && (
                                    <Link
                                        className="rounded-[5px] p-[5px] pr-[3px] duration-200"
                                        href={repository}
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 24 24"
                                            className="fill-primary"
                                        >
                                            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                        </svg>
                                    </Link>
                                )}

                                {link && (
                                    <Link className="rounded-[5px] p-[5px] duration-200" href={link} target="_blank">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 -960 960 960"
                                            className="fill-primary"
                                        >
                                            <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                                        </svg>
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="py-2.5 font-extralight whitespace-pre-wrap">{description}</p>
                            <div className="flex flex-wrap gap-2">
                                {tech.map(({ name, link }, idx) => (
                                    <Link
                                        key={idx}
                                        href={link}
                                        className="bg-base-300 rounded-[5px] p-[5px] text-[14px]"
                                    >
                                        {name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
