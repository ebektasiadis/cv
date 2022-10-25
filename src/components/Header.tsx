import ContactList from "./ContactList";
import { CONTACT } from "../constants";

interface IHeaderProps {
  firstName: string;
  lastName: string;
  role: string;
}

function Header({ firstName, lastName, role }: IHeaderProps) {
  return (
    <div className="bg-primary">
      <div className="max-w-[1280px] mx-auto py-12 px-10">
        <p className="text-white text-2xl md:text-5xl font-semibold">{`${firstName} ${lastName}`}</p>
        <p className="pt-2 text-gray text-xl md:text-3xl">{role}</p>
        <ContactList items={CONTACT} />
      </div>
    </div>
  );
}

export default Header;
