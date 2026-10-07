import Link from "next/link";
import ContactUs from '../../components/ContactUs';

function LDCentre() {

    return (
        <>
            <main className="flex overflow-hidden flex-col pb-36 bg-neutral-100 max-md:pb-24">
                <header className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
                    <img loading="lazy" src="/HomePageImg/Our L&D Centre 1.png" alt="Our L&D Centre 1" className="object-cover w-full h-screen" />
                </header>
                <section className="flex  overflow-hidden -mt-28 z-10 flex-col items-start self-center px-12 py-16 ml-4 max-w-full bg-white w-4/5 lg:w-3/5 max-md:px-5">
                    <h1 className="text-3xl font-bold leading-none text-[#FF0000] uppercase">
                        L&D Centre
                    </h1>
                    <p className="self-stretch mt-7 text-base font-thin leading-6 text-zinc-800 max-md:max-w-full">
                        At JEF, we are committed to continuous improvement and excellence. The L&D Center is
                        designed to enhance the skills and expertise of our employees, ensuring they stay ahead of
                        industry trends and deliver superior service to our clients.
                    </p>
                    <nav className="flex  gap-4 items-center mt-16 max-md:mt-10">
                        <Link href={'/'}><Button text="back" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/616169b3ed5242979df0a07098acf715c7d90b4bfc5e4acc44cf58fd9c278f6c?apiKey=d3bbb7c7de3c4da4bc28ced0d6a3e488&" /></Link>
                        <Button text="Share Article" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/67ffe9d5cbb1fb26aabfd831ddcbff80ebfc35ad8aacf3e369c8c56711636305?apiKey=d3bbb7c7de3c4da4bc28ced0d6a3e488&" />
                    </nav>
                </section>
            </main>
            <ContactUs />
        </>
    );
}


function Button({ text, icon }) {
    return (
        <button className="flex gap-2.5 justify-center items-center self-stretch p-2.5 my-auto border border-black border-solid rounded-[60px] min-w-[102px]">
            <span className="self-stretch my-auto text-xs tracking-widest leading-tight text-black uppercase">
                {text}
            </span>
            {icon && (
                <img loading="lazy" src={icon}  className="object-contain flex-1 w-full aspect-square max-w-[19px]"  alt="Image"/>
            )}
        </button>
    );
}


export default LDCentre;
