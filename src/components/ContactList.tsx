import { useMemo } from "react";
import { Contact } from "../types/contact";
import ContactListItem from "./ContactListItem";

interface IContactProps {
  items: Contact[];
}

function ContactList({ items }: IContactProps) {
  const contactItemComponents = useMemo(() => {
    return items.map((item) => (
      <ContactListItem key={item.id} contact={item} />
    ));
  }, [items]);

  return (
    <div className="flex flex-wrap gap-5 pt-10">{contactItemComponents}</div>
  );
}

export default ContactList;
