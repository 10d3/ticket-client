import Card from "../upComing/Card";
import { events1 } from "../data/data";

function TopEvent() {

  return (
    <div className=" w-full h-fit flex flex-col items-center mb-16 mt-16 overscroll-x-none">
      <div className="md:max-w-[70%] flex flex-col items-center w-full ">
        <div className="w-full h-fit mt-14 mb-4 md:mt-auto md:mb-auto md:my-20 items-center flex flex-col md:flex-row flex-nowrap md:justify-between">
          <h1 className="text-2xl font-bold">Top Events</h1>
        </div>
        <div className=" w-full h-fit flex flex-col justify-center items-center gap-2 md:flex-row md:flex-wrap py-4">
          {events1.map((ct, i) => (
            <Card key={i} data={ct} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopEvent;
