import naviSec from '../page_objects/nav.section'
import myAcc from '../page_objects/account.page'

describe('User Story 005 - My Account screen', () => {
    
    it('verify access to My Account screen after successful account creation', () => {
        myAcc.accountAccess();
        expect(naviSec.inTitle.getTitle()).toEqual('My account - My Store');
        naviSec.logout();
    })

    it('verify content and spelling on My Account screen', () => {
        myAcc.accountAccess();
        expect(naviSec.clientName.getText()).toEqual('Oscar Destroyer');
        expect(naviSec.logButtonName.getText()).toEqual('Sign out');
        expect(myAcc.myTitle.getText()).toEqual('MY ACCOUNT');
        expect(myAcc.myLegend.getText()).toEqual('Welcome to your account. Here you can manage all of your personal information and orders.');
        expect(myAcc.buttonOrdDetsText.getText()).toEqual('ORDER HISTORY AND DETAILS');
        expect(myAcc.buttonOrdDets.isDisplayed()).toEqual(true);
        expect(myAcc.buttonCredSlipText.getText()).toEqual('MY CREDIT SLIPS');
        expect(myAcc.buttonCredSlip.isDisplayed()).toEqual(true);
        expect(myAcc.buttonMyAddrText.getText()).toEqual('MY ADDRESSES');
        expect(myAcc.buttonMyAddr.isDisplayed()).toEqual(true);
        expect(myAcc.buttonMyPersText.getText()).toEqual('MY PERSONAL INFORMATION');
        expect(myAcc.buttonMyPers.isDisplayed()).toEqual(true);
        expect(myAcc.buttonMyWishText.getText()).toEqual('MY WISHLISTS');
        expect(myAcc.buttonMyWish.isDisplayed()).toEqual(true);
        expect(myAcc.buttonHome.isDisplayed()).toEqual(true);
        naviSec.logout();
    })
})