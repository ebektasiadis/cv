import { Contact } from "../types/contact";
import { MdLocationOn, MdMail, MdPhoneEnabled } from "react-icons/md";

const CONTACT: Contact[] = [
  {
    id: 1,
    icon: <MdMail />,
    value: "ebektasiadis@gmail.com",
  },
  {
    id: 2,
    icon: <MdPhoneEnabled />,
    value: "+306978502757",
  },
  {
    id: 3,
    icon: <MdLocationOn />,
    value: "Thessaloniki, Greece",
  },
];

export default CONTACT;
