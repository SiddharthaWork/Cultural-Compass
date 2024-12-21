import { IoMdHome } from "react-icons/io";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { GoProject } from "react-icons/go";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { RiBloggerLine } from "react-icons/ri";


const navMenu = [
    {
        // icon: <HomeOutlinedIcon />,
        title: "Home",
        link: "/",
        icon: <IoMdHome/>,
      },
      {
        title: "Explore",
        link: "/visit",
        icon: <FaPeopleRoof/>,

      },
      {
        title: "Top Places",
        link: "/services",
        icon: <MdHomeRepairService/>,

      },
      {
        title: "Our Guides",
        link: "/how-we-work",
        icon: <GrUserWorker/>,

      },
      
]
export default navMenu;
