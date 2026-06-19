import { useEffect, useState } from "react";
import "./App.css";
import Box from "./components/box";

function App() {
  const [count] = useState(0);


  useEffect(() => {
    console.log("pertama kali di render");
    return () => {};
  }, []);

  useEffect(() => {
    console.log("ke trigger kalo count berubah");
  }, [count]);

  const Experience = [
    {
      title: "PT Indivara Group",
      desc: "Frontend Developer yang mengerjakan 3 Aplikasi Wealth Management System",
    },
    {
      title: "PT Suka Group",
      desc: "Backend Developer yang mengerjakan 3 Aplikasi Distribution Management System",
    },
  ];

  return (
    <>
    <div className="flex flex-row gap-4">
      {Experience.map((el, index) => {
        return <Box title={el.title} desc={el.desc} index={index} />;
      })}
    </div>
    </>
  );
}

export default App;
