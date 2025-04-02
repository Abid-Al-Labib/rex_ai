export const convertUtcToEasterTime = (utcTimestamp: string): string => {
    // Parse the UTC timestamp into a Date object
    const date = new Date(utcTimestamp);
  
    // Check if the Date object is valid
    if (isNaN(date.getTime())) {
      throw new Error('Invalid UTC timestamp');
    }
  
    // Bangladesh is UTC+6, so we add 6 hours to convert UTC to Bangladesh time
    const EasternOffset = -5 * 60 * 60 * 1000;
    const bdDate = new Date(date.getTime() + EasternOffset);
  
    // Extract the year, month, day, hours, and minutes
    const year = bdDate.getUTCFullYear();
    const month = bdDate.toLocaleString('en-GB', { month: 'short' }); // Get the month name in short format (e.g., 'Oct')
    const day = bdDate.getUTCDate().toString(); // Day of the month
    const hours = bdDate.getUTCHours().toString().padStart(2, '0'); // Hours in 24-hour format
    const minutes = bdDate.getUTCMinutes().toString().padStart(2, '0'); // Minutes with leading zero
  
    // Return the formatted date as '4 Oct 2024, hh:mm'
    return `${day} ${month} ${year}, ${hours}:${minutes}`;
  };