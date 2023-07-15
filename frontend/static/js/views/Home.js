import AbstractView from "./abstractView";

export class Home extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }
    

    async getHtml() {
        return `
        <h1>Home</h1>
        <p>This is home page</p>
        `;
    }
}