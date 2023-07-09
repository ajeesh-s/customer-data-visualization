export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const getRange = (val: number): string => {
  if (val >= 0 && val <= 10000) {
    return "0-10000";
  } else if (val >= 10001 && val <= 30000) {
    return "10001-30000";
  } else if (val >= 30001 && val <= 60000) {
    return "30001-60000";
  } else if (val >= 60001 && val <= 100000) {
    return "60001-100000";
  } else if (val > 100000) {
    return "100000+";
  }
  return "";
};
