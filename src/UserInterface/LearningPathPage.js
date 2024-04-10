import CoursesComponent from "../Components/CoursesComponent";


export default function LearningPathPage() {

 

  return (
    <div className="flex flex-col items-center justify-center mt-40 sm:mt-8 md:mt-8">
      <div className="font-bold text-4xl sm:text-xl md:text-xl tracking-wide">
        Learning path based on your answers
      </div>
      <div className="mt-8 sm:mt-4">
        Choose one to get started. You can switch anytime
      </div>
      <div className="flex sm:flex-col md:flex-col">
        <CoursesComponent heading={"Foundational Math"} />
        <CoursesComponent heading={"Mathematical Thinking"} />
      </div>
    </div>
  );
}
