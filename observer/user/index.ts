import { Post } from "../post";

export interface IObserver {
  update(post: Post): void;
}

export class User implements IObserver {
  constructor(public readonly userId: number, public readonly name: string) {
    this.userId = userId;
    this.name = name;
  }

  update(post: Post) {
    console.log(`${this.name} has been notified from post ${post.subject}`);
  }
}
