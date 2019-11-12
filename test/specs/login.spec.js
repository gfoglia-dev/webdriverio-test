import loginPage from '../page_objects/auth.page'
import naviSec from '../page_objects/nav.section'

describe('User Story 006 - Login', () => {
   
    it('authentication behavior of unexisting user', () => {
        loginPage.open();
        loginPage.username.setValue('usuario.inexistente@endava.com');
        loginPage.password.setValue('abc123');
        loginPage.submit();
        expect(loginPage.alertMsg.getText()).toEqual('Authentication failed.');
    })
    
    it('authentication - verify email address field required', () => {
        loginPage.open();
        loginPage.username.setValue('');
        loginPage.password.setValue('');
        loginPage.submit();
        expect(loginPage.alertMsg.getText()).toEqual('An email address required.');
    })
    
    it('authentication - password is required', () => {
        loginPage.open();
        loginPage.username.setValue('adelquis.trinidad@endava.com');
        loginPage.password.setValue('');
        loginPage.submit();
        expect(loginPage.alertMsg.getText()).toEqual('Password is required.');
    })
    
    it('authentication - verify email address format validation - without @', () => {
        loginPage.open();
        loginPage.username.setValue('mufasa.mail.com');
        loginPage.password.setValue('12345');
        loginPage.submit();
        expect(loginPage.alertMsg.getText()).toEqual('Invalid email address.');
    })
    
    it('authentication - verify email address format validation - without domain', () => {
        loginPage.open();
        loginPage.username.setValue('mufasa@.com');
        loginPage.password.setValue('12345');
        loginPage.submit();
        expect(loginPage.alertMsg.getText()).toEqual('Invalid email address.');
    })
    
    it('authentication - verify email address format validation - without .com', () => {
        loginPage.open();
        loginPage.username.setValue('mufasa@mail');
        loginPage.password.setValue('12345');
        loginPage.submit();
        expect(loginPage.alertMsg.getText()).toEqual('Invalid email address.');
    })
    
    it('authentication - verify email address format validation - without username', () => {
        loginPage.open();
        loginPage.username.setValue('@mail.com');
        loginPage.password.setValue('12345');
        loginPage.submit();
        expect(loginPage.alertMsg.getText()).toEqual('Invalid email address.');
    })

    it('successful authentication of existing user', () => {
        loginPage.open();
        loginPage.username.setValue('adelquis.trinidad@endava.com');
        loginPage.password.setValue('abc123');
        loginPage.submit();
        expect(naviSec.inTitle.getTitle()).toEqual('My account - My Store');
        naviSec.logout();
    })

})