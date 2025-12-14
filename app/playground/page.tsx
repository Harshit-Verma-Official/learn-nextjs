export default function Page() {
  return (
    <div className="flex">
      <div className="w-2/5 h-screen bg-blue-200">Left</div>

      <div className="w-3/5 h-screen p-4 flex flex-col">
        <div className="flex gap-4 overflow-x-auto snap-x snap-start snap-mandatory">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="w-1/2 h-10 bg-red-200 flex-none snap-start"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
