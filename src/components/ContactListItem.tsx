import React from "react";
import { Contact } from "../types/contact";

interface IContactListItem {
  contact: Contact;
}

function ContactListItem({ contact }: IContactListItem) {
  const { icon, value } = contact;

  return (
    <div className="flex items-center gap-x-2 text-gray">
      {icon}
      <p>{value}</p>
    </div>
  );
}

export default ContactListItem;
