import React from 'react';
import HeroSlider from '../components/HeroSlider';
import LogoSlider from "../components/LogoSlider";


export default function Home() {
    return (
        <>
            <div className="mt-10 w-full">
                <HeroSlider />
                <LogoSlider />
            </div>
        </>
    )
}