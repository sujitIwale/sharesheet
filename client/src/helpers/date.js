import { formatDistance } from "date-fns";

export const getPeriod = (date) => {
  date = new Date(date);
  return formatDistance(date, new Date(), { addSuffix: true });
  //=> "3 days ago"
};
