import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full gap-4 bg-zinc-950">
      <h1 className="font-semibold text-5xl/[4rem] text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-violet-700">
        Chen Ning
      </h1>
      <p className="text-white">Website building in progress...</p>
      <p className="text-white">
        Check out my{" "}
        <Link className="underline" href={`/blog`}>
          blog!
        </Link>
      </p>
    </div>
  );
}
