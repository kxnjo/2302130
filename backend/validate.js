export function validateInput(input) {
  const xssPattern = /<script.*?>.*?<\/script.*?>|javascript:/gi;
  const sqlPattern = /('|--|;|--|\b(SELECT|UPDATE|DELETE|INSERT|DROP|WHERE)\b)/gi;

  if (xssPattern.test(input)) return "xss";
  if (sqlPattern.test(input)) return "sql";
  return "ok";
}