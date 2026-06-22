import Box from "../../components/box";
import { useNavigate } from "react-router";

const Index = () => {
  const navigate = useNavigate();

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

  const movePage = (url: string) => {
    navigate(url);
  };

  return (
    <div className="pt-24 pb-8 flex flex-col items-center justify-center w-full min-h-[60vh] box-border">
      <div className="flex flex-col sm:flex-row justify-center items-center my-8 gap-4">
        {Experience.map((el, index) => {
          return <Box title={el.title} desc={el.desc} index={index} />;
        })}
      </div>
      <div className="flex flex-row items-center justify-center gap-8">
        <button
          className="p-2 rounded-xl hover:scale-110 duration-150 bg-red-800 h-fit w-fit"
          onClick={() => movePage("/cv-page")}
        >
          Move page to CV
        </button>
        <button
          className="p-2 rounded-xl hover:scale-110 duration-150 bg-blue-800 h-fit w-fit"
          onClick={() => movePage("movie-page")}
        >
          movie page
        </button>
      </div>
    </div>
  );
};

export default Index;
