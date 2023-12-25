export default function Contact() {
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
    return (
        <div className="max-w-[600px] px-5 mx-auto py-5 ">
            <h2 className="text-3xl text-center">Contact</h2>
            <div className="flex flex-col gap-3 mt-5 rounded-[5px] border border-primary p-5">
                    {contactMethods.map((method, index) => (
                        <a key={index} href={method.href} className="flex flex-row items-center gap-2">
                            {method.icon}
                            <span>{method.value}</span>
                        </a>
                    ))}
            </div>
        </div>
    );
}
