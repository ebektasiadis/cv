import React, { useMemo } from "react";
import { Experience } from "../types/experience";
import ExperienceListItem from "./ExperienceListItem";

interface IExperienceListProps {
  items: Experience[];
}

function ExperienceList({ items }: IExperienceListProps) {
  const experienceListItems = useMemo(() => {
    return items.map((item) => (
      <ExperienceListItem key={item.id} experience={item} />
    ));
  }, [items]);

  return <div className="flex flex-wrap gap-5">{experienceListItems}</div>;
}

export default ExperienceList;
