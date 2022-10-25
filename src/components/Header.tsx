import { MdMail, MdPhoneEnabled, MdLocationOn } from "react-icons/md";
import { Contact } from "../types/contact";
import ContactList from "./ContactList";

interface IHeaderProps {
  firstName: string;
  lastName: string;
  role: string;
}

const CONTACT_INFORMATION: Contact[] = [
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

function Header({ firstName, lastName, role }: IHeaderProps) {
  return (
    <div className="bg-primary">
      <div className="max-w-[1280px] mx-auto py-12 px-10">
        <p className="text-white text-2xl md:text-5xl font-semibold">{`${firstName} ${lastName}`}</p>
        <p className="pt-2 text-gray text-xl md:text-3xl">{role}</p>
        <ContactList items={CONTACT_INFORMATION} />
      </div>
    </div>
  );
}

export default Header;
