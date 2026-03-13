"use client";

export default function Login() {
  return (
    <section className="flex justify-center">
      <form action="" className="flex flex-col gap-3">
        <h1>Sign in</h1>

        <input
          type="email"
          name=""
          id=""
          placeholder="someone@domain.com"
          className="block w-full outline-none "
        />
        <input
          type="password"
          placeholder="********"
          className="block w-full outline-none"
        />

        <button className="block hover:bg-accentb w-full rounded">
          Sign in
        </button>

        <p>
          Don't have an account?
          <a className="hover:underline">Register here</a>
        </p>
      </form>
    </section>
  );
}
