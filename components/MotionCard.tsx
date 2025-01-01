export default function MotionCard() {
    return <main className="bg-gray-100 sm:bg-red-100
    md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100
    h-screen flex items-center
    justify-center p-5">
      <div className="bg-white shadow-lg p-5 w-full
      rounded-3xl max-w-screen-sm flex flex-col gap-3">
        {["Nico","Me","You","Yourself"].map((person,index) => {
          return (
            <div key={index} className="flex items-center gap-5
              p-2.5 border-b-2 pb-5 last:border-0 last:pb-0 group">
              <div className="size-10 bg-blue-300 rounded-full"></div>
              <span className="text-lg font-medium group-hover:text-red-500">{person}</span>
              <div className="size-6 animate-bounce bg-red-500 text-white flex items-center
              justify-center rounded-full">
                <span className="text-[black]">{index}</span>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  }
  