import Link from "next/link";

export default function Resume() {
    return (
        <div className="w-full p-5">
            <h1 className="w-fit mx-auto text-4xl relative -z-10">
                My Resume
                <Link href="https://www.louay.tn/resume.pdf" className="absolute -right-8 -top-2"><PDFIcon/></Link>
            </h1>
            <div className="flex flex-wrap gap-5 mt-5">
                {[
                    {
                        title: "Education",
                        icon: <GradCapIcon />,
                        content: [
                            {
                                title: "Bachelor of Information Technology",
                                // subtitle: "Information Systems Development Specialty",
                                date: "2022 - 2025",
                                place: "Higher Institute of Technological Studies of Nabeul",
                                location: "Nabeul, Tunisia",
                            },
                            {
                                title: "Other Certificates",
                                link: "/certificates",
                            },
                        ],
                    },
                    {
                        title: "Experience",
                        icon: <ExperienceIcon />,
                        content: [
                            {
                                title: "FreeLance Web Developer",
                                date: "02/2023 - Present",
                                description:
                                    "I am a Freelance Web Developer, I work on several projects, with main focus on the Front End side, using React.JS and Next.JS.\n*Open for proposals*",
                            },
                            {
                                title: "Python Instructo",
                                date: "07/2023",
                                place: "SmartFuture",
                                location: "Tunis, Tunisia",
                                description:
                                    'I served as a Python instructor for a 2-week intensive course, preparing 20 students to earn their "IT Specialist - Python" Certification.',
                            },
                            {
                                title: "Front End Developer",
                                date: "01/2023 - 02/2023",
                                place: "AfterCode",
                                location: "Nabeul, Tunisia",
                                description:
                                    "I contributed to the development of a PWA part of a Property Management System. Then I contributed to the improvement of the UI and development of missing components in an admin control panel, part of the same PMS.",
                            },
                        ],
                    },
                ].map(({ title, icon, content }, idx) => (
                    <div
                        key={idx}
                        className="flex-1 min-w-full sm:min-w-[470px] w-full border border-primary p-5 rounded-lg"
                    >
                        <div className="flex items-center gap-2 mb-5">
                            {icon}
                            <h2 className="text-secondary-content font-medium text-xl">{title}</h2>
                        </div>
                        {content.map(({ title, subtitle, date, place, location, description, link }: any, idx) => (
                            <>
                                {idx != 0 && <hr className="border-primary my-3" />}
                                <div key={idx}>
                                    {link ? (
                                        <Link href={link} className="text-xl font-medium underline underline-offset-4">
                                            {title}
                                        </Link>
                                    ) : (
                                        <h3 className="text-xl font-medium">{title}</h3>
                                    )}

                                    <h4 className="text-md font-extralight">{subtitle}</h4>
                                    <div className="text-secondary-content">
                                        <p className="text-sm font-light mt-1">{date}</p>
                                        <p className="text-sm font-light">{place}</p>
                                        <p className="text-sm font-light">{location}</p>
                                        <p className="text-md font-light mt-1 whitespace-pre-wrap">{description}</p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

function GradCapIcon() {
    return (
        <svg width="32px" height="32px" viewBox="0,0,256,256">
            <g
                fill="currentColor"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
            >
                <g transform="scale(4,4)">
                    <path d="M31.99609,12.03711c-1.08125,0 -2.16102,0.21734 -3.16602,0.65234l-7.75,3.33984l5.14063,2.14063l4.19922,-1.81055c0.5,-0.22 1.04008,-0.33008 1.58008,-0.33008c0.54,0 1.08008,0.11008 1.58008,0.33008l21.30469,9.18164c0.183,0.079 0.30078,0.25998 0.30078,0.45898c0,0.199 -0.11778,0.37998 -0.30078,0.45898l-21.30469,9.18164c-1,0.43 -2.16016,0.43 -3.16016,0l-21.30469,-9.18164c-0.183,-0.079 -0.30273,-0.25898 -0.30273,-0.45898c0,-0.2 0.11973,-0.37998 0.30273,-0.45898l8.15234,-3.51172l13.96289,5.81641c0.252,0.105 0.51158,0.1543 0.76758,0.1543c0.783,0 1.52866,-0.46147 1.84766,-1.23047c0.425,-1.019 -0.05617,-2.19023 -1.07617,-2.61523l-10.39062,-4.33008l0.01172,-0.00391l-5.14062,-2.14062l-10.7793,4.65039c-1.47,0.63 -2.41992,2.06992 -2.41992,3.66992c0,1.6 0.94992,3.03992 2.41992,3.66992l6.5293,2.81445v6.70117v10.32617c-0.60406,0.4563 -1,1.17269 -1,1.98828v4c0,1.381 1.119,2.5 2.5,2.5h1c1.381,0 2.5,-1.119 2.5,-2.5v-4c0,-0.8156 -0.39594,-1.53198 -1,-1.98828v-3.77344c2.81132,2.01709 7.58079,4.26172 15,4.26172c9.44,0 14.64044,-3.6415 16.89844,-5.8125c1.336,-1.283 2.10156,-3.10595 2.10156,-5.00195v-6.70117l6.5293,-2.81445c1.47,-0.63 2.41992,-2.06992 2.41992,-3.66992c0,-1.6 -0.94992,-3.03992 -2.41992,-3.66992l-22.35937,-9.64062c-1.01,-0.435 -2.09258,-0.65234 -3.17383,-0.65234zM17,34.20898l11.83008,5.10156c1.01,0.44 2.08992,0.65039 3.16992,0.65039c1.08,0 2.15992,-0.21039 3.16992,-0.65039l11.83008,-5.10156v4.97656c0,0.813 -0.31805,1.58419 -0.87305,2.11719c-1.825,1.754 -6.08795,4.69727 -14.12695,4.69727c-8.039,0 -12.30195,-2.94327 -14.12695,-4.69727c-0.555,-0.533 -0.87305,-1.30419 -0.87305,-2.11719z"></path>
                </g>
            </g>
        </svg>
    );
}

function ExperienceIcon() {
    return (
        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M12 14V12M12 14V16M12 14H18C19.1046 14 20 13.1046 20 12M12 14H6C4.89543 14 4 13.1046 4 12V8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8M20 12V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V17M20 12V11M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
            </g>
        </svg>
    );
}


function PDFIcon(){
    return (
        <svg fill="currentColor" width="28px" height="28px" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                    {" "}
                    <path d="m28.6 11.4h5.1a1.11 1.11 0 0 0 1.1-1.1 1.32 1.32 0 0 0 -.3-.8l-7.2-7.1a.89.89 0 0 0 -.7-.3 1.11 1.11 0 0 0 -1.1 1.1v5.1a3.12 3.12 0 0 0 3.1 3.1z"></path>{" "}
                    <path d="m49.83 32.45a1.43 1.43 0 0 0 -1.39-1.45h-12a1.43 1.43 0 0 0 -1.44 1.44v1.44a1.43 1.43 0 0 0 1.4 1.44h6.14l-11 11a1.42 1.42 0 0 0 0 2l1 1a1.54 1.54 0 0 0 1.09.45 1.32 1.32 0 0 0 .94-.38l11-11v6a1.43 1.43 0 0 0 1.43 1.44h1.53a1.43 1.43 0 0 0 1.47-1.4z"></path>{" "}
                    <path d="m18.35 20.68h-1.46v4.93h1.46a1.56 1.56 0 0 0 1.56-1.1 3.93 3.93 0 0 0 .24-1.44 3.61 3.61 0 0 0 -.36-1.77 1.53 1.53 0 0 0 -1.44-.62z"></path>{" "}
                    <path d="m11.29 20.93a1.27 1.27 0 0 0 -.84-.25h-1.45v2.23h1.46a1.18 1.18 0 0 0 .84-.28 1.09 1.09 0 0 0 .3-.86 1 1 0 0 0 -.33-.84z"></path>{" "}
                    <path d="m33.24 16h-7.84a4.67 4.67 0 0 1 -4.7-4.6v-7.8a1.42 1.42 0 0 0 -1.34-1.5h-12.56a4.67 4.67 0 0 0 -4.7 4.6v29.4a4.6 4.6 0 0 0 4.62 4.6h17.88v-.1a15.92 15.92 0 0 1 10.2-14.9v-8.1a1.58 1.58 0 0 0 -1.56-1.6zm-20.75 7.65a2.93 2.93 0 0 1 -1.89.56h-1.6v2.71h-1.51v-7.55h3.24a2.64 2.64 0 0 1 1.76.63 2.3 2.3 0 0 1 .66 1.8 2.35 2.35 0 0 1 -.66 1.85zm8.66 1.9a2.73 2.73 0 0 1 -2.53 1.45h-3.26v-7.63h3.26a3.85 3.85 0 0 1 1.17.17 2.49 2.49 0 0 1 1.28.95 3.43 3.43 0 0 1 .54 1.22 5.6 5.6 0 0 1 .14 1.29 5 5 0 0 1 -.6 2.55zm7.92-4.84h-3.81v1.74h3.34v1.31h-3.34v3.16h-1.57v-7.54h5.38z"></path>{" "}
                </g>{" "}
            </g>
        </svg>
    );
}