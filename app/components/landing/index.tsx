import { About } from "~/components/landing/About";
import { Footer } from "~/components/landing/Footer";
import { Founders } from "~/components/landing/Founders";
import { Hero } from "~/components/landing/Hero";
import { Vision } from "~/components/landing/Vision";

export function Landing() {
    return (
        <div className="landing-page">
            <Hero />
            <About />
            <Founders />
            <Vision />
            <Footer />
        </div>
    );
}
