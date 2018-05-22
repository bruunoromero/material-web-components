export const doIfExists = (
  context: object,
  keys: string[],
  fn: (v: any, key?: string) => void
) => {
  keys.forEach(key => {
    if (context[key]) {
      fn(context[key], key);
    }
  });
};
