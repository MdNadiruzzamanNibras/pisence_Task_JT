
import { useEffect ,useState} from "react";

import PieChart from "react-simple-pie-chart";

const App = () => {
  const [datas, setdatas] = useState({});
  const [loading, setLoading] =useState(false)

  useEffect(() => {
  setLoading(true)
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      setdatas(data)
    setLoading(false)})
    
}, []);
  if (loading) {
    <p>Loading</p>
  }
  if (!datas) {
    return loading
  }
 const attendanceData = datas?.ATTENDANCE;
    const good = datas?.BehavioralAnalytics?.filter(behavior => behavior === "good").length;
    const bad = datas?.BehavioralAnalytics?.filter(behavior => behavior === "bad").length;
    


   
  
  return (
    <div className="bg-red-50 h-screen w-full">
      <nav className="w-full h-16 bg-gray-600">
     
      </nav>
      
      <div className="container mx-auto px-2">
         < div className="bg-red-50 h-screen w-full">
        
          <h1 className="text-4xl font-bold my-6">HELLO! {datas.NAME}</h1>
         <div className="flex justify-between items-center py-5 bg-gray-200">
  
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

        <div className="flex justify-around mt-4 items-start ">
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