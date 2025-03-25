import { User } from "./User";

const user = new User({ id: 1 });

user.set({ name: "SONDOS" });

user.save();

const user2 = new User({ name: "Laila" });

user2.save();
