
import Header from "../Components/Header";
import {useNavigate} from 'react-router-dom';

export default function UserMathComfortPage(){
   
    const integral="\u222B"+"x^2"+"dx"

    const mathsOptionsJSON = [
      {
        mathoptionid: 1,
        algebricexpression: "5/2=?",
        heading: "Arithmetic",
        subheading: "Introductory",
      },
      {
        mathoptionid: 1,
        algebricexpression: "3x+5=4",
        heading: "Basic Algebra",
        subheading: "Foundational",
      },
      {
        mathoptionid: 1,
        algebricexpression: "x = -b±√(b2 – 4ac)/2a",
        heading: "Intermediate Algebra",
        subheading: "Intermediate",
      },
      {
        mathoptionid: 1,
        algebricexpression: `${integral}`,
        heading: "Calculus",
        subheading: "Advanced",
      },
    ];

    const navigate=useNavigate();
    const handleShadow=()=>{

    }

 const showMathsOptions=()=>{
 return mathsOptionsJSON.map((item) => {
   return (
     <div
       onClick={() => handleShadow(item)}
       className="p-5 flex items-center flex-col justify-center border-box h-40 w-64 md:w-48 border-2 mt-12 sm:mt-4 md:mt-6 ml-4 rounded-md"
     >
       <span className="text-xl">{item.algebricexpression}</span>
       <span className="text-base mt-4 md:text-sm">&nbsp;{item.heading}</span>
       <span className="text-xl text-slate-400">&nbsp;{item.subheading}</span>
     </div>
   );
 });
 }
 
    return (
      <div className="flex flex-col items-center mt-8 sm:mt-4">
        <div className="w-5/6 h-2 bg-gradient-to-r from-lime-500 from-60% via-white via-30% to-white to-90% rounded border border-inherit"></div>
        <div className="flex flex-col items-center mt-20 sm:mt-4 md:mt-6 tracking-normal">
          <div className="text-2xl sm:text-xl font-semibold">
            What is your maths comfort zone?
          </div>
          <p className="mt-4 sm:mt-2 sm:text-center">
            {" "}
            Choose the highest level you feel confident in - you can always
            adjust later.
          </p>
        </div>
        <div className="flex flex-row sm:flex-col md:flex-col">
          {" "}
          {showMathsOptions()}
        </div>

        <button
          onClick={() => navigate("/reviewpage")}
          className="h-12 w-36 bg-black text-white mt-12 sm:mt-4 md:mt-4 hover:bg-gray-400 active:bg-gray-400 focus:outline-none rounded-md font-semibold tracking-normal"
        >
          Continue
        </button>
      </div>
    );
}