import HoriazontalSlider from "@/components/HoriazontalSlider";
import Tracker from "@/components/Tracker";
import DateDisplay from "@/components/DateDisplay";

export default function page() {
  return (
    <section className="w-full flex flex-col items-center gap-2 min-h-screen">
      <>
        <DateDisplay />
        <HoriazontalSlider />
        <Tracker />
      </>
    </section>
  );
}
