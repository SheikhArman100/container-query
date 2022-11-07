import React from "react";
import { RiMenuLine, RiSearchLine } from "react-icons/ri";
import Card from "../components/Card";
import article from "../data/article";

function WithContainer() {
  return (
    <div className="mx-auto mt-8 w-full max-w-5xl px-4">
      <header className="relative flex h-10 items-center justify-between">
        <div className="flex items-center space-x-7">
          <RiMenuLine className="h-5 w-5" />
          <RiSearchLine className="h-5 w-5" />
        </div>
        <div className="absolute inset-x-0 flex justify-center">
          <svg
            width={65}
            height={40}
            viewBox="0 0 65 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={20.5}
              cy={20}
              r={20}
              fill="#38BDF8"
              style={{
                mixBlendMode: "multiply",
              }}
            />
            <circle
              cx={44.5}
              cy={20}
              r={20}
              fill="#6EE7B7"
              style={{
                mixBlendMode: "multiply",
              }}
            />
          </svg>
        </div>
        <p className="text-sm font-semibold">Sign in</p>
      </header>

      <nav className="mx-auto mt-4 hidden justify-between border-y py-5 text-sm font-semibold md:flex">
        <p>Business</p>
        <p>Design</p>
        <p>Culture</p>
        <p>Affairs</p>
        <p>Art</p>
        <p>Science</p>
        <p>Culture</p>
        <p>Sports</p>
      </nav>

      <main className="pb-32">
        <di className="grid">
          <Card article={article} />
        </di>

        <div
          className="mt-24 grid gap-x-6
         sm:grid-cols-3"
        >
          {[...Array(3).keys()].map((i) => (
            <Card key={i} article={article} />
          ))}
        </div>

        <div className="mt-24 grid gap-8 sm:grid-cols-2">
          {[...Array(2).keys()].map((i) => (
            <Card key={i} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default WithContainer;
