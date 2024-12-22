import City from "@/components/Home/City";
import Header from "@/components/Home/Header";
import Topplaces from "@/components/Home/Topplaces";
import Events from "@/components/Home/Events";

export default function Home() {
  return (
   <div className="overflow-hidden">
    <Header/>
    <City/>
    <Events/>
    <Topplaces/>
   </div>
  );
}
