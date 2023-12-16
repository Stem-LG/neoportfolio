export default function Resume() {
    return (
        <div className="h-[calc(100svh-200px)] md:h-[calc(100svh-120px)] w-full">
            <h2 className="my-5 text-center text-3xl">My Resume</h2>
            <iframe
                className="h-full w-full"
                src="https://www.louay.tn/assets/docs/cv_english.pdf"
            />
        </div>
    );
}