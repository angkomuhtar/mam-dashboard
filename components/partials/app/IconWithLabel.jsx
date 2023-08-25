import { Icon } from "@iconify/react";
import React from "react";

const IconWithLabel = ({ icon, className, text }) => {
  let iconName = "";
  switch (icon) {
    case "calendar":
      iconName = "mdi:calendar-outline";
      break;
    case "lokasi":
      iconName = "entypo:location";
      break;
    case "peserta":
      iconName = "ci:users-group";
      break;
    case "pengajar":
      iconName = "mingcute:user-2-line";
      break;
    case "instansi":
      iconName = "tabler:building";
      break;
    case "sarana":
      iconName = "mdi:store-marker-outline";
      break;
    default:
      iconName = "mdi:calendar-outline";
      break;
  }
  return (
    <div className={`flex space-x-2 items-center  ${className}`}>
      <Icon icon={iconName} className='text-[1rem]' />
      <p className={`capitalize`}>{text}</p>
    </div>
  );
};

export default IconWithLabel;
