import {expect} from "@playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class SecurePage{
    constructor(page){
        this.actions = new CommonActions(page)
    }

    async getMessage(){
        return await this.actions.getText('#flash');
    }

    //assertions should be in the test case, but for this example, we will have it in the page object
    async assertLoggedInMessage(passedMessage){
        const message = this.getMessage()
        expect(message).toContain(passedMessage);
    }
}