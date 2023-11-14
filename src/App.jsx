
// import { useEffect ,useState} from "react";
import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { FaBook } from "react-icons/fa";
import { RiHome3Line } from "react-icons/ri";
import PieChart from "react-simple-pie-chart";
import { ImBooks } from "react-icons/im";
import { MdVideoCameraFront } from "react-icons/md";
const App = () => {
  const [open, setOpen] =useState(false)
//   const [datas, setdatas] = useState({});
 

//   useEffect(() => {
//     const fetchdata =async () => {
//     try {
//       const response = await fetch("data.json")
//       const data = await response.json()
//       setdatas(data)
//     } catch (error) {
//       console.log("error" , error);
//     }
//     }
//     fetchdata()
// }, []);
  
//   if (!datas) {
//     return <p>Loading</p>
//     }
  const datas ={
  "NAME": "PISENCE",
  "ATTENDANCE": {
    "monday": {
      "date": "21/7/23",
      "fn": "present",
      "an": "present"
    },
    "tuesday": {
      "date": "22/7/2423",
      "fn": "absent",
      "an": "present"
    },
    "wednesday": {
      "date": "23/7/25",
      "fn": "present",
      "an": "absent"
    },
    "thursday": {
      "date": "24/7/25",
      "fn": "present",
      "an": "present"
    },
    "friday": {
      "date": "25/7/25",
      "fn": "absent",
      "an": "present"
    }
  },
  "homework": ["english", "science", "maths"],
  "BehavioralAnalytics": ["good", "bad", "good", "bad", "good"]
}
 const attendanceData = datas?.ATTENDANCE;
    const good = datas?.BehavioralAnalytics?.filter(behavior => behavior === "good").length;
    const bad = datas?.BehavioralAnalytics?.filter(behavior => behavior === "bad").length;
    


   
  
  return (
    <div className="bg-red-50 relative h-screen w-full">
      <nav className="w-full h-16 flex items-center bg-gray-600">
     <h1 onClick={()=>setOpen(!open)} className={`text-5xl cursor-pointer text-red-300 ml-5 ${open ? "text-red-300" : "text-black"}`}><VscThreeBars /></h1>
      </nav>
      {
        open && <div onClick={() => setOpen(!open)} className="absolute top-16 left-0 bg-white w-72 h-48">
          <div className="mt-3 pl-3">
            <h6 className="text-2xl flex items-center"><span><RiHome3Line /></span> <span className="ml-2">Summary Dashboard</span></h6>
            <h6 className="text-2xl flex my-2 items-center"><span><ImBooks /></span> <span className="ml-2">Attendance Tracking</span></h6>
            <h6 className="text-2xl flex items-center"><span><MdVideoCameraFront /></span> <span className="ml-2">Behavioral Analytics</span></h6>
            <h6 className="text-2xl mt-2 flex items-center"><span><FaBook /></span> <span className="ml-2">Academic
Performance Tracking</span></h6>
    </div>

        </div>
      }
      <div className="container mx-auto px-2">
         < div className="bg-red-50 h-screen w-full">
        
          <h1 className="text-4xl font-bold my-6">HELLO! {datas.NAME}</h1>
         <div className="lg:flex lg:justify-between lg:items-center py-5 bg-gray-200">
  
  <div className="flex flex-col ml-7">
    
    <h4></h4>
    <p></p>
    <p className="mt-7 text-3xl font-bold">FN </p>
    <p className="mt-12 text-3xl font-bold">AN: </p>
  </div>

  
  {Object?.keys(attendanceData)?.map((day, index) => (
    <div className="flex flex-col text-center" key={index}>
     
      <h4 className="text-4xl font-bold">{day}</h4>
      <p className="text-lg font-semibold">{attendanceData[day].date}</p>
      <p className="w-12 h-12 my-3 ml-10" style={{ backgroundColor: attendanceData[day].fn === "absent" ? 'red' : 'green'}}> </p>
      <p className="w-12 h-12 my-3 ml-10" style={{ backgroundColor: attendanceData[day].an === "absent" ? 'red' : 'green', }}> </p>
    </div>
  ))}
</div>

        <div className="lg:flex lg:justify-around mt-4 items-start ">
            <div>
               <div className="bg-gray-200 p-10 h-72  w-96 ">
            <h1 className="text-center text-3xl font-bold">Homeworks</h1>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    {datas?.homework?.map((sub, index) => (
      <div key={index} className="p-2 ">
        <h1 className="text-3xl font-bold">{sub}</h1>
      </div>
    ))}
  </div>
          </div>
         </div>
          <div className="bg-gray-200 mt-2 lg:mt-0 flex justify-center items-center ml-12 p-10">
          <div className="w-full lg:w-64 lg:h-64">
          <PieChart
  slices={[
    {
      color: '#f00',
      value: bad,
    },
    {
      color: '#0f0',
      value: good,
    },
  ]}
/>
        </div>
        </div>
        </div>
      </div>
       </div>

    </div>
  );
};

export default App;