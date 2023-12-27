import { contactMethods } from "@/content";

export default function Contact() {
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
