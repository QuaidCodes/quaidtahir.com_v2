"use cdivent";

export default function Header() {
  return (
    <div className="w-full flex justify-center">
      <nav className="m-5 flex justify-between w-2/3">
        <h1 className="text-nowrap text-4xl">Quaid Tahir</h1>

        <div className="flex w-full flex-auto justify-end gap-10 text-2xl">
          <div>
            <a href="/">Home</a>
          </div>

          <div>
            <a href="/portfolio">Portfolio</a>
          </div>

          <div>
            <a href="/projects">Projects</a>
          </div>

          <div>
            <a href="/contact">Contact</a>
          </div>

          <div>
            <a href="/login">Sign in</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
