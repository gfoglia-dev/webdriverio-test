import loginPage from '../page_objects/auth.page'
import creationSec from '../page_objects/create.page'
import utl from '../utilities/common.utilities'

describe('User Story 002 - Create Account', () => {                         //Test case: "Verify access to Authentication screen" already made in login.spec
    
    it('verify if create account form exists', () => {
        loginPage.open();
            browser.pause(2000);                                            //without the pause, isDisplayed() was giving out false instead of true
        expect(creationSec.createForm.isDisplayed()).toBe(true);
    })

    it('verify default content of email address text box', () => {
        loginPage.open();
        expect(creationSec.emailCreate.getValue()).toEqual('');             //by default should be empty
    })

    it('verify trying to create account with existing email address', () => {
        loginPage.open();
        creationSec.createAddress.setValue('adelquis.trinidad@endava.com');
        creationSec.submitCreate();
        expect(creationSec.createError.getText()).toEqual('An account using this email address has already been registered. Please enter a valid password or request a new one.')
    })

    it('verify look & feel of create account section', () => {
        loginPage.open();
            expect(creationSec.createTitle.getText()).toEqual('CREATE AN ACCOUNT');
            expect(creationSec.createSub.getText()).toEqual('Please enter your email address to create an account.');
            expect(creationSec.emailLabel.getText()).toEqual('Email address');
            expect(creationSec.emailCreate.isEnabled()).toBe(true);
            expect(creationSec.createBtn.isClickable()).toBe(true);
            creationSec.createAddress.setValue('OSCARDESTROYER');
            creationSec.submitCreate();
            expect(creationSec.createRedMark.isDisplayed()).toBe(true);      //improvised look&feel (without styles verification)    
    })

    it('verify email address format validation - without @', () => {
        loginPage.open();
            creationSec.createAddress.setValue('OSCARDESTROYER.mail.com');
            creationSec.submitCreate();
        expect(creationSec.createError.getText()).toEqual('Invalid email address.');
    })

    it('verify email address format validation - without domain', () => {
        loginPage.open();
            creationSec.createAddress.setValue('OSCARDESTROYER@.com');
            creationSec.submitCreate();
        expect(creationSec.createError.getText()).toEqual('Invalid email address.');
    })

    it('verify email address format validation - without .com', () => {
        loginPage.open();
            creationSec.createAddress.setValue('OSCARDESTROYER@mail');
            creationSec.submitCreate();
        expect(creationSec.createError.getText()).toEqual('Invalid email address.');
    })

    it('verify email address format validation - without Username', () => {
        loginPage.open();
            creationSec.createAddress.setValue('@mail.com');
            creationSec.submitCreate();
        expect(creationSec.createError.getText()).toEqual('Invalid email address.');
    })

    it('verify create account email submit with unexisting address', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
            browser.pause(2000);                                             //same case as the one above, isDisplayed() was giving out false instead of true
        expect(creationSec.createPage.isDisplayed()).toBe(true);
    })
})

