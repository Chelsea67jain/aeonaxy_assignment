import Header from "../Components/Header";
import WeightingIcon from '../images/Weighting machine.jpg';
import {useNavigate} from 'react-router-dom';
//https://luxury-elf-c36878.netlify.app/

export default function RightPlacePage(){
    const navigate=useNavigate();
    return (
      <div className="flex flex-col items-center mt-8 sm:mt-4">
        <div className="w-5/6 h-2 bg-gradient-to-r from-lime-500 from-50% via-white via-30% to-white to-90% rounded border border-inherit"></div>
        <div className="flex flex-row sm:flex-col md:flex-col items-center mt-4 sm:mt-0 tracking-normal">
          <img src={`${WeightingIcon}`} className="h-96 w-80 mr-40 sm:mr-0" />
          <div className="w-5/6 sm:w-full">
            <div className="text-2xl font-semibold">
              You're in the right place
            </div>
            <div className="mt-8 w-96 sm:w-80 sm:mt-2">
              Brilliant gets you hands-on to help improve your professional
              skills and knowledge. You'll interact with concepts and solve fun
              problems in math, science and computer science.
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate("/mathpage")}
          className="h-12 w-36 bg-black text-white mt-4 hover:bg-gray-400 active:bg-gray-400 focus:outline-none rounded-md font-semibold tracking-normal"
        >
          Continue
        </button>
      </div>
    );
}