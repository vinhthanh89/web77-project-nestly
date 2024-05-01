export const calcBookingNights = (startDate , endDate) => {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const difference = Math.abs(date2 - date1);
    const totalDays = Math.ceil(difference / millisecondsPerDay);
    return totalDays;
}


