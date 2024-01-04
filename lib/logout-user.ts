import { redirect } from "next/navigation";

export default async function logout() {
  const token={value:""}
  await fetch("http://localhost:3000/api/auth", {
    method: "DELETE",
    headers: {
      Cookie: `session=${token?.value}`,
    },
  })
    .then((response) => {
      console.log(response);
      redirect("/");
    })
    .catch((error) => {
      console.error(error);
    });
}
