import AbstractView from "./abstractView";

export class Settings extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
        <h1>Settings</h1>
        <p>This is Settings page</p>
        `;
  }
}
