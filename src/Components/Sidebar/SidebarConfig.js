import {
    AiOutlineHome,
    AiFillHome,
    AiOutlineSearch,
    AiOutlineCompass,
    AiFillCompass,
    AiFillMessage,
    AiOutlineMessage,
    AiOutlineHeart,
    AiFillHeart,
    AiOutlinePlusCircle,
    AiFillPlusCircle,
  } from "react-icons/ai";
  import { RiVideoFill, RiVideoLine } from "react-icons/ri";
  import { CgProfile } from "react-icons/cg";
import {MdOutlineFeedback} from "react-icons/md";
export const mainu = [
    {
      title: "Home",
      icon: <AiOutlineHome className="text-2xl mr-5" />,
      activeIcon: <AiFillHome className="text-2xl mr-5" />,
    },
    {
      title: "Search",
      icon: <AiOutlineSearch className="text-2xl mr-5" />,
      activeIcon: <AiOutlineSearch className="text-2xl mr-5" />,
    },
    {
      title: "Create",
      icon: <AiOutlinePlusCircle className="text-2xl mr-5" />,
      activeIcon: <AiFillPlusCircle className="text-2xl mr-5" />,
    },
    { title: "Profile", icon: <CgProfile className="text-2xl mr-5" />, activeIcon: <CgProfile className="text-2xl mr-5" /> },
    { title: "Feedback", icon: <MdOutlineFeedback className="text-2xl mr-5" />, activeIcon: <MdOutlineFeedback className="text-2xl mr-5" /> },
  ];