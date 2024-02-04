export const validateEmail = (email: string): boolean => {
  //RFC 2822 compliant regex from: https://regexr.com/2rhq7
  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return emailRegex.test(email);
};

export const validateName = (name: string): boolean => {
  if (name.length < 2) return false;
  return true;
};

export const validatePhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) return true;
  return false;
};
