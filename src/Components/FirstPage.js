

export default function FirstPage(){
       
    return (
      <div className="flex flex-col items-center mt-8">
        <div className="w-5/6 h-2 bg-gradient-to-r from-lime-500 from-10% via-white via-30% to-white to-90% rounded border border-inherit"></div>
        <div className="flex flex-col items-center mt-4 tracking-normal">
          <div className="text-2xl font-semibold">
            Which describes you best ?
          </div>
          <p className="mt-2 text-slate-400">
            {" "}
            This will help us personalize your experience
          </p>
          <div className="border-box h-16 w-96 border-2 mt-4 rounded-md"></div>
          <div className="border-box h-16 w-96 border-2 mt-2 rounded-md"></div>
          <div className="border-box h-16 w-96 border-2 mt-2 rounded-md"></div>
          <div className="border-box h-16 w-96 border-2 mt-2 rounded-md"></div>
          <div className="border-box h-16 w-96 border-2 mt-2 rounded-md"></div>
          <div className="border-box h-16 w-96 border-2 mt-2 rounded-md"></div>
          <button className="h-12 w-36 bg-gray-500 text-white mt-4 hover:bg-gray-400 active:bg-gray-400 focus:outline-none rounded-md font-semibold tracking-normal">
            Continue
          </button>
        </div>
      </div>
    );
}