import { BiWifi } from 'react-icons/bi';
import { IoCarSportOutline } from 'react-icons/io5';
import { BiTv } from 'react-icons/bi';
import { MdOutlineBreakfastDining } from 'react-icons/md';
import { GiBarbecue } from 'react-icons/gi';

const ServiceIcon = ({ type }) => {
  const icons = {
    wifi: <BiWifi />,
    parking: <IoCarSportOutline />,
    tv: <BiTv />,
    breakfast: <MdOutlineBreakfastDining />,
    barbecue: <GiBarbecue />,
  };

  return icons[type] || null;
};

export default ServiceIcon;
