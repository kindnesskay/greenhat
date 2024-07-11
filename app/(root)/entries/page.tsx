import Tracker from "@/components/Tracker";
import DateDisplay from "@/components/DateDisplay";

export default function page() {
  return (
    <section className="w-full flex flex-col items-center gap-4 ">
      <>
        <DateDisplay />
        <Tracker />
      </>
    </section>
  );
}
