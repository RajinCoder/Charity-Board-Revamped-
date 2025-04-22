import Navbar from "../components/navbar";
import { FormEvent } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // prevents reloading the page

    const formData = new FormData(event.currentTarget); // converts our form into the struct of react's Form Data
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/home");
    } else {
      // error
    }
  }
  return (
    <div className="h-screen flex flex-col items-center gap-y-30">
      <Navbar />
      <div>
        <form
          className="w-[25vw] py-6 px-8 shadow-md text-black"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl justify-self-center py-4 font-bold">Login</h1>
          <label htmlFor="email" className="text-xl">
            Email:
          </label>
          <br />
          <input
            type="text"
            name="email"
            className="w-full border border-gray-300 rounded-md mb-4 px-2 text-lg"
          />
          <br />
          <label htmlFor="password" className="text-xl">
            Password:
          </label>
          <br />
          <input
            type="password"
            name="password"
            className="w-full border border-gray-300 rounded-md mb-6 px-2 text-lg"
          />
          <br />
          <button
            type="submit"
            className="bg-sky-600 w-full rounded-md text-white text-xl mb-25 font-medium py-2 hover:bg-sky-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
