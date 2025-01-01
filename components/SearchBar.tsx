export default function SearchBar() {
    return <main className="bg-gray-100 sm:bg-red-100
    md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100
    h-screen flex items-center
    justify-center p-5">
      <div className="bg-white shadow-lg p-5 w-full
      rounded-3xl max-w-screen-sm flex flex-col gap-2 
      md:flex-row *:outline-none has-[.peer]:bg-green-100">
        <input 
        className="w-full rounded-full h-12 bg-gray-200 pl-5
        ring ring-transparent focus:ring-green-500 
        focus:ring-offset-2 transition-shadow placeholder:drop-shadow
        invalid:focus:ring-orange-500 peer"
        type="text" 
        required
        placeholder="Search here..."
        />
        <span className="text-red-500
        font-medium hidden peer-invalid:block">Email is required</span>
        <button className=" text-white py-2 rounded-full
        active:scale-90 transition-transform 
        font-medium md:px-10 bg-gradient-to-tr
        from-cyan-500 to-purple-400 peer-required:bg-green-500">
          Search
        </button>
      </div>
    </main>
  }
  