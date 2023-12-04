interface BuildMakerPersonOptions {
  getUUID: () => string;
  getAge: (birthDate: Date) => number;
}

interface PersonOptions {
  name: string;
  birthDate: Date;
}

export const buildMakePerson = ({
  getUUID,
  getAge,
}: BuildMakerPersonOptions) => {
  return ({ name, birthDate }: PersonOptions) => {
    return {
      id: getUUID(),
      name,
      birthDate,
      age: getAge(birthDate),
    };
  };
};
