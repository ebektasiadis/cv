export type Experience = {
  id: number;
  position: string;
  employer: string;
  city?: string;
  startDate?: Date;
  endDate?: Date | "present";
  description: string;
  skills?: string[];
};
