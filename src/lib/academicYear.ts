/**
 * RVU's academic year rolls over on 1 June; before that date the
 * ongoing year is (currentYear-1)-currentYear, on/after it's
 * currentYear-(currentYear+1).
 */
export function getAcademicYear(date: Date = new Date()) {
  const year = date.getFullYear();
  const rolledOver = date.getMonth() >= 5; // June is month index 5

  const startYear = rolledOver ? year : year - 1;
  const endYear = startYear + 1;

  return {
    startYear,
    endYear,
    long: `${startYear}–${endYear}`,
    short: `${startYear}–${String(endYear).slice(-2)}`,
  };
}
