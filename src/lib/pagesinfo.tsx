export const pages = [
    {   
        title: "index.tsx",
        pathname: "/",
        icon: ({ variant = "normal" }) => {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={variant == "normal" ? "32" : "22"}
                    viewBox="0 -960 960 960"
                    width={variant == "normal" ? "32" : "22"}
                    className="fill-primary"
                >
                    <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
                </svg>
            );
        },
    },
    {
        title: "projects.tsx",
        pathname: "/projects/",
        icon: ({ variant = "normal" }) => {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={variant == "normal" ? "32" : "22"}
                    viewBox="0 -960 960 960"
                    width={variant == "normal" ? "32" : "22"}
                    className="fill-primary"
                >
                    <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Z" />
                </svg>
            );
        },
    },
    {
        title: "resume.tsx",
        pathname: "/resume/",
        icon: ({ variant = "normal" }) => {
            return (
                <svg
                    width={variant == "normal" ? "32" : "22"}
                    height={variant == "normal" ? "32" : "22"}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="fill-primary"
                        fillRule="evenodd"
                        d="M14.25 2.5a.25.25 0 0 0-.25-.25H7A2.75 2.75 0 0 0 4.25 5v14A2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19V9.147a.25.25 0 0 0-.25-.25H15a.75.75 0 0 1-.75-.75zm.75 9.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zm0 4a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z"
                        clipRule="evenodd"
                    />
                    <path
                        className="fill-primary"
                        d="M15.75 2.824c0-.184.193-.301.336-.186c.121.098.23.212.323.342l3.013 4.197c.068.096-.006.22-.124.22H16a.25.25 0 0 1-.25-.25z"
                    />
                </svg>
            );
        },
    },
    {
        title: "contact.tsx",
        pathname: "/contact/",
        icon: ({ variant = "normal" }) => {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={variant == "normal" ? "32" : "22"}
                    viewBox="0 -960 960 960"
                    width={variant == "normal" ? "32" : "22"}
                    className="fill-primary"
                >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
                </svg>
            );
        },
    },
];
