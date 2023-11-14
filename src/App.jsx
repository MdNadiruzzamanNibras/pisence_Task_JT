
import { useEffect } from "react";
import { useState } from "react";
import PieChart from 'react-simple-pie-chart';

const App = () => {
  const [datas, setdatas] = useState([])
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
    .then(data=> setdatas(data))
  }, [])

    const good = datas?.BehavioralAnalytics?.filter(behavior => behavior === "good").length;
    const bad = datas?.BehavioralAnalytics?.filter(behavior => behavior === "bad").length;
    
 const attendanceData = datas?.ATTENDANCE;

   
  console.log(datas);
  return (
    <div className="bg-red-50 h-screen w-full">
      <nav className="w-full h-16 bg-gray-600"></nav>
      
      <div className="container mx-auto px-2">
         < div className="bg-red-50 h-screen w-full">
        
          <h1 className="text-4xl font-bold">HELLO! {datas.NAME}</h1>
          <div className="flex justify-between items-center">
            
       
          
          {Object.keys(attendanceData).map((day, index) => (
            <div className="flex flex-col" key={index}>
              <h4>{day}</h4>
              <p>Date: {attendanceData[day].date}</p>
              <p>FN: {attendanceData[day].fn}</p>
              <p>AN: {attendanceData[day].an}</p>
            </div>
          ))}
       
            
            
</div>
        <div className="flex justify-center items-start ">
            <div>
               <div className="bg-gray-200 p-10 h-72  w-96 ">
            <h1 className="text-center text-3xl font-bold">Homeworks</h1>
           <div className="grid grid-cols-2 gap-4">
    {datas?.homework?.map((sub, index) => (
      <div key={index} className="p-2 ">
        <h1 className="text-3xl font-bold">{sub}</h1>
      </div>
    ))}
  </div>
          </div>
         </div>
          <div className="bg-gray-200 flex justify-center items-center ml-12 p-10">
          <div className="w-64 h-64">
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