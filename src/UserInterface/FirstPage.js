import { useState } from 'react';
import Student from '../images/student.png';
import Professional from '../images/professional.png';
import Parent from "../images/parent.png";
import Learner from "../images/lifelong learner.png";
import Teacher from "../images/teacher.png";
import Other from "../images/other.png";
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import Header from '../Components/Header';
import {useSelector} from 'react-redux';

export default function FirstPage(){
  const dispatch=useDispatch();
  const navigate=useNavigate();
 const userStatus = useSelector((state) => state.userStatus);
 var uservalues,userid
 if(userStatus!==undefined){
    uservalues=Object.values(userStatus);
      userid=uservalues?.id
 }
 
  const [selectedUserOptionsId,setSelectedUserOptionsId]=useState(userid);
   const [changeBorderColor,setChangeBorderColor]=useState(false);
  

  const userOptionsJSON = [
    {
      id: 1,
      userStatus: "Student",
      description: "or soon to be enrolled",
      image: `${Student}`,
    },
    {
      id: 2,
      userStatus: "Professional",
      description: "or soon to be enrolled",
      description: "pursuing a career",
      image: `${Professional}`,
    },
    {
      id: 3,
      userStatus: "Parent",
      description: "of a school aged child",
      image: `${Parent}`,
    },
    { id: 4, userStatus: "Lifelong learner", image: `${Learner}` },
    { id: 5, userStatus: "Teacher", image: `${Teacher}` },
    { id: 6, userStatus: "Other", image: `${Other}` },
  ];

  const handleShadow=(item)=>{
    console.log(item.id);
    setChangeBorderColor(true);
    setSelectedUserOptionsId(item.id);
    
        dispatch({ type: "ADD_USER_STATUS", payload: [item.id, item] });
  }

       
  const showUserOptions=()=>{
    return userOptionsJSON.map((item)=>{
      return (
        <div
          onClick={() => handleShadow(item)}
          className={item.id===selectedUserOptionsId?"p-5 sm:p-2 flex items-center border-box border-pink-300 h-16 w-96 sm:w-64 border-2 mt-4 sm:mt-2 rounded-md":"p-5 sm:p-2 flex items-center border-box h-16 w-96 sm:w-64 border-2 mt-4 sm:mt-2 rounded-md"}
        >
          <img src={`${item.image}`} className="h-12 w-12" />
          <b>{item.userStatus}</b> &nbsp;
          <span className="sm:hidden text-slate-400">&nbsp;{item.description}</span>
        </div>
      );
    })
  }

    return (
      <div className="flex flex-col items-center mt-6">
        <div className="w-5/6 h-2 bg-gradient-to-r from-lime-500 from-30% via-white via-30% to-white to-90% rounded border border-inherit"></div>
        <div className="flex flex-col items-center mt-2 tracking-normal">
          <div className="text-2xl sm:text-xl font-semibold">
            Which describes you best ?
          </div>
          <p className="mt-2 sm:text-center text-slate-400">
            {" "}
            This will help us personalize your experience
          </p>
          {showUserOptions()}

          <button
            onClick={() => navigate("/userinterest")}
            className="h-12 w-36 bg-gray-500 text-white mt-4 hover:bg-gray-400 active:bg-gray-400 focus:outline-none rounded-md font-semibold tracking-normal"
          >
            Continue
          </button>
        </div>
      </div>
    );
}