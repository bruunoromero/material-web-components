export const camelCaseToDash = (str: string) =>
  str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();

export const keysToString = (cls: object) =>
  Object.keys(cls)
    .filter(key => cls[key])
    .join(" ");
