import { Experience } from "../types/experience";
import { format } from "date-fns";
import { useMemo } from "react";

interface IExperienceListItemProps {
  experience: Experience;
}

const DATE_FORMAT_PATTERN = "LLL yyyy";

const formatDate = (date: Date) => format(date, DATE_FORMAT_PATTERN);

function ExperienceListItem({ experience }: IExperienceListItemProps) {
  const { position, employer, city, startDate, endDate, description, skills } =
    experience;

  const formattedDateRange = useMemo(() => {
    let formattedStartDate = "",
      formattedEndDate = "";

    if (startDate) {
      formattedStartDate = formatDate(startDate);
    }

    if (endDate) {
      formattedEndDate = endDate === "present" ? endDate : formatDate(endDate);
    }

    return [formattedStartDate, formattedEndDate]
      .filter((date) => date !== "")
      .join(" - ");
  }, [startDate, endDate]);

  const formattedEmployer = useMemo(() => {
    let result = employer;
    if (city) {
      result += `, ${city}`;
    }
    return result;
  }, [employer, city]);

  const formattedSkills = useMemo(() => {
    if (!skills || skills.length === 0) return null;
    return (
      <div className="pt-3 flex gap-1">
        <strong>Skills: </strong>
        <ul className="flex flex-wrap flex-row gap-1">
          {skills.map((skill) => (
            <li key={skill}>{`◾ ${skill}`}</li>
          ))}
        </ul>
      </div>
    );
  }, [skills]);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <p className="font-medium">{position}</p>
        <p>{formattedDateRange}</p>
      </div>

      <p className="text-darkgray">{formattedEmployer}</p>
      <p className="leading-5 text-lg text-justify">{description}</p>
      {formattedSkills}
    </div>
  );
}

export default ExperienceListItem;
