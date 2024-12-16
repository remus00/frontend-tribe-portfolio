import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { Intro } from '@/components/sections/intro';
import { Projects } from '@/components/sections/projects';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Intro />
            <Projects />
        </>
    );
}
