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
    icon: <MdMail />,
    value: "ebektasiadis@gmail.com",
  },
  {
    icon: <MdPhoneEnabled />,
    value: "+306978502757",
  },
  {
    icon: <MdLocationOn />,
    value: "Thessaloniki, Greece",
  },
];

function Header({ firstName, lastName, role }: IHeaderProps) {
  return (
    <div className="px-10 py-12 bg-primary">
      <p className="text-white text-5xl font-semibold">{`${firstName} ${lastName}`}</p>
      <p className="pt-2 text-gray text-3xl">{role}</p>
      <ContactList items={CONTACT_INFORMATION} />
    </div>
  );
}

export default Header;
