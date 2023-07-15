import AbstractView from "./abstractView";

export class Posts extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }
    

    async getHtml() {
        return `
        <h1>Posts</h1>
        <p>This is Posts page</p>
        `;
    }
}