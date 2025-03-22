export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });
// -1 because months are zero indexed
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
