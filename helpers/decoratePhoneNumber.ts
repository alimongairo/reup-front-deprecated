/**
 * Returns decorated phone number
 *
 * @param phone input phone number (10 symbols), example - 9123642790
 *
 * @returns string phone number in "+ 7 (XXX) XXX-XX-XX" format
 *
 */

export const decoratePhoneNumber = (phone: any) => {
  const str = String(phone);
  if (str.length === 10)
    return (
      '+ 7 (' +
      str.slice(0, 3) +
      ') ' +
      str.slice(3, 6) +
      '-' +
      str.slice(6, 8) +
      '-' +
      str.slice(8, 10)
    );
};
