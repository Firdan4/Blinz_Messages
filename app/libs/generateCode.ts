const generateCode = (): string => {
  const randomIndex = crypto.randomUUID();
  const code = randomIndex.split("-")[0];

  return code.toUpperCase().toString();
};

export default generateCode;
