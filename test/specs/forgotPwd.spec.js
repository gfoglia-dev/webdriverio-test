import loginPage from '../page_objects/auth.page'
import pwdPage from '../page_objects/recovery.page'

describe('User Story 007 - Forgot Password', () => {

    it('verify Forgot Password Title', () => {
        loginPage.open();
        loginPage.forgotPwd.click();
        expect(pwdPage.pwdTitle.getText()).toEqual('FORGOT YOUR PASSWORD?');
    })

    it('verify legend on Forgot Password screen', () => {
        loginPage.open();
        loginPage.forgotPwd.click();
        expect(pwdPage.pwdLegend.getText()).toEqual('Please enter the email address you used to register. We will then send you a new password.');
    })
    
    it('verify validation message when client enters invalid email', () => {
        loginPage.open();
        loginPage.forgotPwd.click();
        pwdPage.pwdEmail.setValue('aeiou');
        pwdPage.retrieveButton.click();
        expect(pwdPage.pwdError.getText()).toEqual('Invalid email address.');
    })

    it('verify validation message when client enters an unexisting email address', () => {
        loginPage.open();
        loginPage.forgotPwd.click();
        pwdPage.pwdEmail.setValue('aeiou@oscar.com');
        pwdPage.retrieveButton.click();
        expect(pwdPage.pwdError.getText()).toEqual('There is no account registered for this email address.');
    })

    it('verify behavior of Retrieve Password button', () => {
        loginPage.open();
        loginPage.forgotPwd.click();
        pwdPage.pwdEmail.setValue('asdasd@mail.com');
        pwdPage.retrieveButton.click();
        expect(pwdPage.pwdLegend.getText()).toEqual('A confirmation email has been sent to your address: asdasd@mail.com');
    })
})