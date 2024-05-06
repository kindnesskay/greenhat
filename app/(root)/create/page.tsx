import DateDisplay from "@/components/DateDisplay";
import Form from "@/components/Form";

export default function page() {
  return (
    <section>
      <div className="flex flex-col gap-8">
        <DateDisplay />
        <Form />
      </div>
    </section>
  );
}
