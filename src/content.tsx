// meta info
const fullName = "Louay Ghanney";
const description = "I am a Developer with passion for all types of programming, with special experience in Next.JS .";


// Path: pages/index.tsx
const typewriterWords = ["Web Developer", "Freelancer", "Tech Enthusiast", "Junior Instructor", "Quick Learner"];

//supports \n
const aboutMe = `
Student, self-taught full-stack wizard, and knowledge-sharing instructor.

I juggle code in all its forms while pushing boundaries and building cool stuff.

Explore my portfolio and let's unlock your digital ideas together.
`;

// Path: pages/projects.tsx
const projects = [
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

// Path: pages/certificates.tsx
const certificates = [
    {
        title: "IT Specialist in Python",
        issuer: "Certiport",
        link: "https://www.credly.com/badges/9d5fc864-bcfa-4831-a3dd-6d4060754bc7",
        online: false,
        date: "06/2023",
    },
    {
        title: "Machine Learning Specialization",
        issuer: "DeepLearning.ai",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/N5RFXEPYE4GX",
        online: true,
        date: "05/2023",
    },
    {
        title: "Google IT Support Specialization",
        issuer: "Google",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/NR94EGMGGGSL",
        online: true,
        date: "01/2023",
    },
    {
        title: "Google IT Automation with Python",
        issuer: "Google",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/TCZET7PLYLFL",
        online: true,
        date: "02/2023",
    },
];

// Path: pages/resume.tsx
const education = [
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
];

const experience = [
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
];

// Path; pages/contact.tsx
const contactMethods = [
    {
        value: "louayghanney71@gmail.com",
        href: "mailto:louayghanney71@gmail.com",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
                className="mr-[5px] fill-primary"
            >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
            </svg>
        ),
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
                className="mr-[5px] fill-primary"
            >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
            </svg>
        ),
        value: "(216) 90 656 399",
        href: "tel:+21690656399",
    },
];

export { fullName, description, typewriterWords, aboutMe, projects, certificates, education, experience, contactMethods };
