import Hero from "./sections/Hero";
import CityGrid from "./sections/CityGrid";
import DiscussProject from "./sections/DiscussProject";

export default function PanIndiaContent() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <Hero />
      <CityGrid />
      <DiscussProject />
    </main>
  );
}