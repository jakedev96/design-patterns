export class Post {
  constructor(public readonly postId: number, public subject: string) {
    this.postId = postId;
    this.subject = subject;
  }
}
