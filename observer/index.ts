import { Post } from "./post";
import { PostNotification } from "./post-notification";
import { User } from "./user";

const user1 = new User(1, "Jake");
const user2 = new User(2, "Camyla");
const user3 = new User(3, "Alice");
const user4 = new User(4, "Aika");

const newPost = new Post(1, "Novo tênis das lojas Duffin");

const postNotification = new PostNotification(newPost);

postNotification.subscribe(user1);
postNotification.subscribe(user2);
postNotification.subscribe(user3);
postNotification.subscribe(user4);

postNotification.notifyAll();
