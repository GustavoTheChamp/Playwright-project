class HomePage {
    constructor(page) {
      this.page = page;
      this.title = page.locator('h1');
      this.getStartedLink = page.locator('text=Get started');
    }
  
    async navigate() {
      await this.page.goto('https://playwright.dev/');
    }
  
    async getTitle() {
      return await this.title.innerText();
    }
  
    async clickGetStarted() {
      await this.getStartedLink.click();
    }
  }
  
  module.exports = HomePage;