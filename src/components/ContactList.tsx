import React, { useMemo } from "react";
import { Contact } from "../types/contact";
import { v4 as uuid } from "uuid";
import ContactListItem from "./ContactListItem";

interface IContactProps {
  items: Contact[];
}

function ContactList({ items }: IContactProps) {
  const contactItemComponents = useMemo(() => {
    return items.map((item) => <ContactListItem key={uuid()} contact={item} />);
  }, [items]);

  return (
    <div className="flex flex-wrap gap-5 pt-10">{contactItemComponents}</div>
  );
}

export default ContactList;
