export interface IUser {
  name: string;
  email: string;
  password: string;
  photo?: string;
  role: "Admin" | "User";
}
