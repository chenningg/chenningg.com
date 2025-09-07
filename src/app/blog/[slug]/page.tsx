export default function Post() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full gap-4 bg-gray-500">
      <div className="flex items-center justify-center gap-3 mb-2 text-white">
        <div className="w-60 h-60 bg-slate-800 flex justify-center items-center">
          Slate
        </div>
        <div className="w-60 h-60 bg-gray-800 flex justify-center items-center">
          Gray
        </div>
        <div className="w-60 h-60 bg-zinc-800 flex justify-center items-center">
          Zinc
        </div>
        <div className="w-60 h-60 bg-neutral-800 flex justify-center items-center">
          Neutral
        </div>
        <div className="w-60 h-60 bg-stone-800 flex justify-center items-center">
          Stone
        </div>
      </div>
      <h1 className="font-semibold text-4xl text-white">TITLE</h1>
      <p className="text-white">CONTENT GOES HERE</p>
    </div>
  );
}
