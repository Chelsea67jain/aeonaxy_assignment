import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

export default function SearchingRecommendationPage(){
   const navigate=useNavigate();

    useEffect(()=>{
const timer = setTimeout(() => {
  navigate('/learningpathpage')

}, 5000);

return () => clearTimeout(timer);
    },[])
    
    return (
      <div className="mt-60 flex flex-col items-center justify-center">
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
        <div className="mt-10 w-84 text-xl font-semibold">
          Finding learning path recommendations for you based on 
       your responses
        </div>
      </div>
    );
}