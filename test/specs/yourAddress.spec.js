import loginPage from '../page_objects/auth.page'
import creationSec from '../page_objects/create.page'
import accessCreate from '../page_objects/createInfo.page'
import naviSec from '../page_objects/nav.section'
import utl from '../utilities/common.utilities'

describe('User Story 004 - Create Account - your Address Area', () => {

    it('verify content of Your Address Area', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        browser.pause(2000);
        expect(accessCreate.createTitle2.getText()).toEqual('YOUR ADDRESS');
        expect(accessCreate.addressFName.isDisplayed()).toBe(true);
        expect(accessCreate.addressLName.isDisplayed()).toBe(true);
        expect(accessCreate.companyName.isDisplayed()).toBe(true);
        expect(accessCreate.clientAddress.isDisplayed()).toBe(true);
        expect(accessCreate.clientCity.isDisplayed()).toBe(true);
        expect(accessCreate.clientState.isExisting()).toBe(true);
        expect(accessCreate.clientZip.isExisting()).toBe(true);
        expect(accessCreate.clientCountry.isExisting()).toBe(true);
        expect(accessCreate.clientAdditional.isDisplayed()).toBe(true);
        expect(accessCreate.clientHomePhone.isDisplayed()).toBe(true);
        expect(accessCreate.clientPhone.isDisplayed()).toBe(true);
        expect(accessCreate.addressAlias.isDisplayed()).toBe(true);
    })

    it('verify that first name field is completed by default with Personal Info Area input', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        expect(accessCreate.addressFName.getText()).toEqual(accessCreate.clientFName.getText());
    })

    it('verify max length validation in Your Address - first name field', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.addressFName.setValue(utl.maxChar32());
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('firstname is too long. Maximum length: 32');
    })

    it('verify validation in Your Address - first name field cant start with number', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.addressFName.setValue('1aaaldo');
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('firstname is invalid.');
    })

    it('verify validation in Your Address - first name field is required', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.addressFName.clearValue();
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('firstname is required.');
    })

    it('verify that last name field is completed by default with Personal Info Area input', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        expect(accessCreate.addressLName.getText()).toEqual(accessCreate.clientLName.getText());
    })

    it('verify max length validation in Your Address - last name field', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.addressLName.setValue(utl.maxChar32());
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('lastname is too long. Maximum length: 32');
    })

    it('verify validation in Your Address - last name field cant start with number', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.addressLName.setValue('8aaaldo');
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('lastname is invalid.');
    })

    it('verify validation in Your Address - last name field is required', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.addressLName.clearValue();
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('lastname is required.');
    })

    it('verify Company field max length validation', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.companyName.setValue(utl.maxChar64());
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('company is too long. Maximum length: 64')
    })

    it('verify validation in Your Address - Address field is required', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientAddress.clearValue();
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('address1 is required.');
    })

    it('verify Address field max length validation', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientAddress.setValue(utl.maxChar128());
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('address1 is too long. Maximum length: 128')
    })

    it('verify Address field legend displayed', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        expect(accessCreate.addressLegend.getText()).toEqual('Street address, P.O. Box, Company name, etc.');
        expect((JSON.stringify(accessCreate.addressLegend.getCSSProperty('color'))).includes('#f13340')).toBe(true);    //verifies text color red
    })
    
    it('verify validation in Your Address - City field is required', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientCity.clearValue();
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('city is required.');
    })

    it('verify City field max length validation', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientCity.setValue(utl.maxChar64());
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('city is too long. Maximum length: 64')
    })
    
    it('verify values of State dropdown', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());  
        creationSec.submitCreate();
        accessCreate.completeReq();
        expect(accessCreate.clientState.getText()).toEqual('-\nAlabama\nAlaska\nArizona\nArkansas\nCalifornia\nColorado\nConnecticut\nDelaware\nDistrict of Columbia\nFlorida\nGeorgia\nHawaii\nIdaho\nIllinois\nIndiana\nIowa\nKansas\nKentucky\nLouisiana\nMaine\nMaryland\nMassachusetts\nMichigan\nMinnesota\nMississippi\nMissouri\nMontana\nNebraska\nNevada\nNew Hampshire\nNew Jersey\nNew Mexico\nNew York\nNorth Carolina\nNorth Dakota\nOhio\nOklahoma\nOregon\nPennsylvania\nPuerto Rico\nRhode Island\nSouth Carolina\nSouth Dakota\nTennessee\nTexas\nUS Virgin Islands\nUtah\nVermont\nVirginia\nWashington\nWest Virginia\nWisconsin\nWyoming');
    })
    
    it('verify that zip/postal code field is not displayed if Country = "-" ', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.clientCountry.selectByIndex(0);
        expect(accessCreate.clientZip.isDisplayed()).toBe(false);
    })

    it('verify that State is required', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientState.selectByIndex(0)
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('This country requires you to choose a State.');
    }) 

    it('verify that Zip/Postal code is required', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientZip.clearValue();
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual("The Zip/Postal code you've entered is invalid. It must follow this format: 00000");
    })
    it('verify that Zip/Postal 00000 format is accepted', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientZip.setValue('00000')
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.isDisplayed()).toBe(false);
        naviSec.logout();
    })

    it('verify Zip/Postal Code field validation when entering characters instead of numbers', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientZip.setValue('aaaaa');
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual("The Zip/Postal code you've entered is invalid. It must follow this format: 00000");
    })

    it('verify Zip/Postal Code field validation when entering less and more than 5 numbers', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientZip.setValue('1111');
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual("The Zip/Postal code you've entered is invalid. It must follow this format: 00000");
        accessCreate.clientZip.setValue('1111111111');
        accessCreate.clientPwd.setValue('111111');
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual("The Zip/Postal code you've entered is invalid. It must follow this format: 00000");
    })

    it('verify that Country is required', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientCountry.selectByIndex(0);
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('id_country is required.');
    })
    
    it('verify values of Country dropdown', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());  
        creationSec.submitCreate();
        expect((accessCreate.clientCountry.getText()).replace(/\s/g,'')).toEqual('-UnitedStates');
    })

    it('verify if when "-" is selected in Country field, a validation message appears', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientCountry.selectByIndex(0);
        accessCreate.submitAccInfo();
        expect(accessCreate.createError2.getText()).toEqual('Country cannot be loaded with address->id_country');
    })

    it('verify Additional Information max character length validation - more than 300 characters', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientAdditional.setValue(utl.maxChar300());
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('other is too long. Maximum length: 300');
    })

    it('verify Additional Information max character length validation - allows 300 characters', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientAdditional.setValue((utl.maxChar300()).slice(0, -1));
        accessCreate.submitAccInfo();
        expect(naviSec.inTitle.getTitle()).toEqual('My account - My Store');
        naviSec.logout();
    })

    it('verify that Mobile Phone is required', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientPhone.clearValue();
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('You must register at least one phone number.')
    })

    it('verify that Mobile Phone is numeric field', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientPhone.setValue('12345678');
        accessCreate.submitAccInfo();
        expect(naviSec.inTitle.getTitle()).toEqual('My account - My Store');
        naviSec.logout();
    })

    it('verify that Mobile Phone field cannot accept characters', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientPhone.setValue('asdffasd');
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('phone_mobile is invalid.');
    })
    
    it('verify Home phone legend', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        browser.pause(1000);
        expect(accessCreate.homePhoneLegend.getText()).toEqual('You must register at least one phone number.');
    })

    it('verify that Home Phone is numeric field', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientHomePhone.setValue('12345678');
        accessCreate.submitAccInfo();
        expect(naviSec.inTitle.getTitle()).toEqual('My account - My Store');
        naviSec.logout();
    })

    it('verify that Home Phone field cannot accept characters', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientHomePhone.setValue('asdffasd');
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('phone is invalid.');
    })
    
    it('verify that Assign Alias field is required', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.addressAlias.clearValue();
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('alias is required.');
    })

    it('verify that Assign Alias field is completed by default with My Address', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        browser.pause(1000);
        expect(accessCreate.addressAlias.getValue()).toEqual('My address');
    })

    it('verify behavior of Register button in Create An Account screen', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.submitAccInfo();
        expect(naviSec.inTitle.getTitle()).toEqual('My account - My Store');
        naviSec.logout();
    })
})