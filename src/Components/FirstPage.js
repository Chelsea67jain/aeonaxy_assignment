import Student from '../images/student.png';
import Professional from '../images/professional.png';
import Parent from "../images/parent.png";
import Learner from "../images/lifelong learner.png";
import Teacher from "../images/teacher.png";
import Other from "../images/other.png";



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
          <div className="p-5 flex items-center border-box h-16 w-96 border-2 mt-4 rounded-md">
            <img src={`${Student}`} className="h-12 w-12" />
            <b>Student</b> &nbsp;
            <span className="text-slate-400"> or soon to be enrolled</span>
          </div>
          <div className="p-5 flex items-center border-box h-16 w-96 border-2 mt-2 rounded-md">
            <img src={`${Professional}`} className="h-12 w-12" />
            <b>Professional</b> &nbsp;{" "}
            <span className="text-slate-400">pursuing a career</span>
          </div>
          <div className="p-5 flex items-center border-box h-16 w-96 border-2 mt-2 rounded-md">
            <img src={`${Parent}`} className="h-12 w-12" />
            &nbsp; <b>Parent</b> &nbsp;{" "}
            <span className="text-slate-400">of a school aged child</span>
          </div>
          <div className="p-5 flex items-center border-box h-16 w-96 border-2 mt-2 rounded-md">
            <img src={`${Learner}`} className="h-12 w-12" />
            &nbsp; <b>Lifelong learner</b>
          </div>

          <div className="p-5 flex items-center border-box h-16 w-96 border-2 mt-2 rounded-md">
            <img src={`${Teacher}`} className="h-12 w-12" />
            &nbsp;<b>Teacher</b>
          </div>

          <div className="p-5 flex items-center border-box h-16 w-96 border-2 mt-2 rounded-md">
            <img src={`${Other}`} className="h-12 w-12" />
            &nbsp;<b>Other</b>
          </div>

          <button className="h-12 w-36 bg-gray-500 text-white mt-4 hover:bg-gray-400 active:bg-gray-400 focus:outline-none rounded-md font-semibold tracking-normal">
            Continue
          </button>
        </div>
      </div>
    );
}