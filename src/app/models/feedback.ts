import { User } from "./user.model";

export interface Feedback {

  name: String;
  email: String;
  user: User;
  feedback: String;

}
