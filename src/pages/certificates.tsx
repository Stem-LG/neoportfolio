import Link from "next/link";

export default function Certificats() {
    const certs = [
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

    return (
        <div className="max-w-[1600px] w-full mx-auto px-5 flex flex-wrap justify-center h-fit py-5 gap-5">
            {certs.map(({ title, issuer, online, date, link }, idx) => (
                <div
                    key={idx}
                    className="max-w-[380px] w-full rounded-[5px] border border-solid border-current p-4 pb-12 relative"
                >
                    <div className=" flex justify-between gap-4">
                        <h3 className="text-[20px]">{title}</h3>
                        {link && (
                            <Link className="p-[5px] duration-200" href={link} target="_blank">
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
                    <p className="py-2.5 grow font-extralight">
                        <span className="font-bold">Issued by:</span> {issuer}
                    </p>
                    <div className="flex gap-2 absolute bottom-4">
                        <div className="hover:cursor-pointer bg-base-300 rounded-[5px] p-[5px] text-[14px]">
                            {online ? "Online" : "In-person"}
                        </div>
                        <div className="hover:cursor-pointer bg-base-300 rounded-[5px] p-[5px] text-[14px]">{date}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
