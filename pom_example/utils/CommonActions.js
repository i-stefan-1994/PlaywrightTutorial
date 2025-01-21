export default class CommonActions{
    constructor(page){
        this.page = page; //initializes the page
    }

    async navigate(url){
        await this.page.pause();
        await this.page.goto(url);
    }

    async click(selector){
        await this.page.click(selector)
    }
    async fill(selector, text){
        await this.page.fill(selector, text);
    }

    async getText(selector){
        const text = await this.page.locator(selector).textContent();
        if(text === null){
            throw new Error("No text found for the given selector")
        }

        return text().trim();
    }

    async isChecked(selector){
        return await this.page.isChecked(selector)
    }
}