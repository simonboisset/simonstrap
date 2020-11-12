export const classNames = (classNames: (string | undefined)[]) => {
  return classNames.filter((className) => !!className).join(' ');
};
