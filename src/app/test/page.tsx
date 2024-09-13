import { HeroCarousal } from "@/components/Hero/HeroCarousal";
import { HeroImages } from "@/utils/images";

export default function page() {
    return (
        <div className="overflow-hidden h-screen w-full">
            <HeroCarousal items={HeroImages}/>
        </div>
    )
}