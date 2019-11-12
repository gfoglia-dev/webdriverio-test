import loginPage from '../page_objects/auth.page'
import creationSec from '../page_objects/create.page'
import naviSec from '../page_objects/nav.section'

describe('User Story 001 - Authentication Screen', () => {
    
    it('verify Sign In button functionality in the main screen', () => {
        browser.url('');
        naviSec.login();
        expect(naviSec.inTitle.getTitle()).toEqual('Login - My Store');
    })

    it('verify breadcrumb button functionality', () => {
        loginPage.open();
        loginPage.breadBtn.click();
        expect(naviSec.inTitle.getTitle()).toEqual('My Store');
    })

    it('verify content of the Authentication page', () => {
        loginPage.open();
        expect(loginPage.breadBtn.isDisplayed()).toBe(true);
            expect(loginPage.breadNavi.getText()).toEqual('Authentication');
        expect(creationSec.createForm.isDisplayed()).toBe(true);
            expect(creationSec.createTitle.getText()).toEqual('CREATE AN ACCOUNT');
            expect(creationSec.createSub.getText()).toEqual('Please enter your email address to create an account.');
            expect(creationSec.emailCreate.isDisplayed()).toEqual(true);
            expect(creationSec.createBtn.isDisplayed()).toEqual(true);
        expect(loginPage.loginForm.isDisplayed()).toBe(true);
            expect(loginPage.authTitle.getText()).toEqual('ALREADY REGISTERED?');
            expect(loginPage.username.isDisplayed()).toEqual(true);
            expect(loginPage.password.isDisplayed()).toEqual(true);
            expect(loginPage.forgotPwd.isDisplayed()).toEqual(true);
            expect(loginPage.submitBtn.isDisplayed()).toEqual(true);
    })
})