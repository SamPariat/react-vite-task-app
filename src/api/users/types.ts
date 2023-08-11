export type User = {
  name: string;
  email: string;
  age: number;
  password: string;
  tokens?: Array<{ token: string }>;
  profileImage?: Buffer;
};
