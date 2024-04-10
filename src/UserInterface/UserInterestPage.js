import Progress from '../images/Progress.png'
import Globe from "../images/globe.png";
import Bow from '../images/Bow.png';
import Goal from "../images/Goal.png";
import EyeEmoji from "../images/Eyes.png";
import Header from '../Components/Header';
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';


export default function UserInterestPage(props){
  const navigate=useNavigate();
     const userInterestJSON = [
       {
         userinterestid: 1,
         description: "Learning specific skills to advance my career",
         image: `${Progress}`,
       },
       {
         userinterestid: 2,
         description: "Exploring different topics I'm interested in",
         image: `${Globe}`,
       },
       {
         userinterestid: 3,
         description: "Refereshing my Math foundation",
         image: `${Bow}`,
       },

       {
         userinterestid: 4,
         description: "Excersing my brain to stay sharp",
         image: `${Goal}`,
       },
       {
         userinterestid: 5,
         description: "Something else",
         image: `${EyeEmoji}`,
       },
     ];

const handleShadow=()=>{

}

    const showUserInterests=()=>{
 return userInterestJSON.map((item) => {
   return (
     <div
       onClick={() => handleShadow(item)}
       className="p-5 sm:w-64 sm:p-2 sm:mr-2 flex items-center border-box h-16 w-96 border-2 mt-6 sm:mt-4 rounded-md"
     >
       <img src={`${item.image}`} className="h-12 w-12" />

       <span className="text-sm">&nbsp;{item.description}</span>
     </div>
   );
 });
    }

return (
  <div className="flex flex-col items-center mt-8">
  
      <div className="w-5/6 h-2 bg-gradient-to-r from-lime-500 from-40% via-white via-30% to-white to-90% rounded border border-inherit"></div>
    
    <div className="flex flex-col items-center mt-4 tracking-normal">
      <div className="text-2xl sm:text-sm font-semibold">
        Which are you most interested in ?
      </div>
      <p className="mt-2 sm:text-center sm:text-xs sm:w-64 text-slate-400">
        {" "}
        Choose just one. This will help us get you started (but won't limit your
        experience)
      </p>
      {showUserInterests()}

      <button
        onClick={() => navigate("/rightplacepage")}
        className="h-12 w-36 bg-black text-white mt-4 hover:bg-gray-400 active:bg-gray-400 focus:outline-none rounded-md font-semibold tracking-normal"
      >
        Continue
      </button>
    </div>
  </div>
);

}