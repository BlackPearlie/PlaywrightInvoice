/**
 * Returns the last day of the given month for the given year.
 * Month is 1-based (1 = January, 12 = December).
 */
export function getLastDayOfMonth(month: number, year: number = new Date().getFullYear()): string {
    const lastDay = new Date(year, month, 0).getDate();
    const paddedMonth = month.toString().padStart(2, '0');
    const paddedDay = lastDay.toString().padStart(2, '0');
    return `${year}-${paddedMonth}-${paddedDay}`;
}

/**
 * Returns the last day of June for the current year.
 */
export function getLastDayOfJune(year: number = new Date().getFullYear()): string {
    return getLastDayOfMonth(6, year);
}

/**
 * Generates a random number.
 */
export function generateRandomNumber(length: number = 5): number {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a unique client name.
 */
export function generateClientName(name: string): string {
    return `${name} ${generateRandomNumber()}`;
}