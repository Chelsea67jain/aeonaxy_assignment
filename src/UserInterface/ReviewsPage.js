import Header from "../Components/Header";
import {useNavigate} from 'react-router-dom';
import CartoonImage from '../images/cartoon.jpg';
import Rating from '../images/5 star rating.png';

export default function ReviewPage(){
    const navigate=useNavigate();

    return (
      <div className="flex flex-col items-center mt-8">
        <Header page={"rightplacepage"} />
        <div className="flex flex-row items-center justify-center mt-4 tracking-normal">
          <img src={`${CartoonImage}`} className="h-full w-80 mr-40 mt-6" />
          <div className="w-5/6">
            <div className="text-2xl font-semibold">You're on your way!</div>

            <div className="w-96 mt-6">
              <img src={`${Rating}`} className="w-24" />
              <i >
                {" "}
                "Through its engaging and well-structured courses, Brillant has
                taught me mathematical concepts that I previously struggled to
                understand. I now feel confident approching both technical job
                interviews and real world problem solving situations."
              </i>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate("/searchingpage")}
          className="h-12 w-36 bg-black text-white mt-4 hover:bg-gray-400 active:bg-gray-400 focus:outline-none rounded-md font-semibold tracking-normal"
        >
          Continue
        </button>
      </div>
    );
}