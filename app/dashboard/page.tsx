import Logout from "@/components/logout";

export default function page() {
  return (
    <div className="mx-auto max-w-4xl my-32 ">
      <h1 className="text-3xl mb-8">
        You are now in protected area of the app
      </h1>
      <div>
        <Logout />
      </div>
    </div>
  );
}
