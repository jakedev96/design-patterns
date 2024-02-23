import { Post } from "../post";
import { IObserver } from "../user";

interface ISubject {
  notifyAll(): void;
  subscribe(user: IObserver): void;
  unsubscribe(user: IObserver): void;
}

export class PostNotification implements ISubject {
  protected observers: IObserver[] = [];

  constructor(public readonly post: Post) {
    this.post = post;
  }

  subscribe(user: IObserver): void {
    this.observers.push(user);
  }

  unsubscribe(user: IObserver): void {
    this.observers = this.observers.filter((observer) => observer !== user);
  }

  notifyAll() {
    this.observers.forEach((observer) => {
      observer.update(this.post);
    });
  }
}
