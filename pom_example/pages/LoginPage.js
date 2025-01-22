import {expect} from '@playwright/test'
import CommonActions from '../utils/CommonActions.js'

export default class LoginPage{
    constructor(page){
        //initializes a new CommonActions object called this.actions, which will make it available to the rest of the class
        this.actions = new CommonActions(page);
        // we can use selector initialization in the constructor, in case the locators change
        // we can also use a separate page with locators which we can import, it all depends on the project/ease of use
        this.usernameSelector = '#username'
    }

    async navigate(){
        await this.actions.navigate('https://the-internet.herokuapp.com/login');
    }

    async login(username, password){
        await this.actions.fill('#username', username);
        await this.actions.fill('#password', password);
        await this.actions.click('button');
    }

    async getErrorMessage(){
        return await this.actions.getText('#flash');
    }

    async assertErrorMessage(expectedMessage){
        const actualMessage = await this.getErrorMessage();
        expect(actualMessage).toContain(expectedMessage);
    }
}