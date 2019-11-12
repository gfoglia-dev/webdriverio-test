import loginPage from '../page_objects/auth.page'
import creationSec from '../page_objects/create.page'
import accessCreate from '../page_objects/createInfo.page'
import naviSec from '../page_objects/nav.section'
import utl from '../utilities/common.utilities'

describe('User Story 003 - Create Account - Personal Info Area', () => {

    it('verify content of Personal Information Area', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        browser.pause(2000);                                                            //without the pause I get some falsy instead of truthy :/                                              
        expect(accessCreate.createTitle.getText()).toEqual('CREATE AN ACCOUNT');
        expect(accessCreate.createSub1.getText()).toEqual('YOUR PERSONAL INFORMATION');
        expect(accessCreate.createGenEx1.isDisplayed()).toBe(true); 
        expect(accessCreate.createGenEx2.isDisplayed()).toBe(true); 
        expect(accessCreate.clientFName.isDisplayed()).toBe(true);
        expect(accessCreate.clientLName.isDisplayed()).toBe(true);
        expect(accessCreate.clientEmail.isDisplayed()).toBe(true);
        expect(accessCreate.clientPwd.isDisplayed()).toBe(true);
        expect(accessCreate.clientDay.isDisplayed()).toBe(true);     
        expect(accessCreate.clientMonth.isDisplayed()).toBe(true);   
        expect(accessCreate.clientYear.isDisplayed()).toBe(true);    
        expect(accessCreate.clientCheckbox1.isEnabled()).toBe(true);   
        expect(accessCreate.clientCheckbox2.isEnabled()).toBe(true); 
    })

    it('verify radio buttons title', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        browser.pause(1000);
        expect(accessCreate.createGenTitle1.getText()).toEqual('Mr.');
        expect(accessCreate.createGenTitle2.getText()).toEqual('Mrs.');
    })

    it('verify behavior of radio buttons', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        browser.pause(1000);
        expect(accessCreate.createGender1.isEnabled()).toBe(true);
        expect(accessCreate.createGender1.isSelected()).toBe(false);
        accessCreate.createGender1.click();                              //clicks on Mr.
        expect(accessCreate.createGender1.isSelected()).toBe(true);      //verifies that Mr. was selected
        expect(accessCreate.createGender2.isEnabled()).toBe(true);
        expect(accessCreate.createGender2.isSelected()).toBe(false);     
        accessCreate.createGender2.click();                              //clicks on Mrs.
        expect(accessCreate.createGender2.isSelected()).toBe(true);      //verifies that Mrs. was selected
        expect(accessCreate.createGender1.isSelected()).toBe(false);     //verifies that Mr. was de-selected
    })

    it('verify that first name field is required', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();                                                     //test case expected result describes that a red mark on wrong fields should also
        accessCreate.clientFName.clearValue();                                          //be displayed when submitting the form along with the alert error message,
        accessCreate.submitAccInfo();                                                   //but they won't appear unless you interact directly by clicking the field and then outside
        expect(accessCreate.createError.getText()).toEqual('firstname is required.');   //which is why am only using the given alerts as 'expect', and red marks are verified on later tests
    })                                                                                                                                                                
                                                                                        
    it('verify first name field max length', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientFName.setValue(utl.maxChar32());
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('firstname is too long. Maximum length: 32');
    })

    it('verify first name valid green check', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        expect((JSON.stringify(accessCreate.clientFName.getCSSProperty('color'))).includes('#35b33f')).toBe(true); //verify if contains green check color code #35b33f
    })

    it('verify first name invalid red mark', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientFName.clearValue();
        browser.keys(['Tab']);
        expect((JSON.stringify(accessCreate.clientFName.getCSSProperty('color'))).includes('#f13340')).toBe(true); //verify if contains red mark color code #f13340
    })
    
    it('verify that first name starting with a number is invalid - red mark', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());    
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientFName.setValue('8aaaaal');
        browser.keys(['Tab']);
        expect((JSON.stringify(accessCreate.clientFName.getCSSProperty('color'))).includes('#f13340')).toBe(true);
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('firstname is invalid.')
    })
    
    it('verify that last name field is required', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();                                                     
        accessCreate.clientLName.clearValue();                                          
        accessCreate.submitAccInfo();                                                   
        expect(accessCreate.createError.getText()).toEqual('lastname is required.');   
    })                                                                                                                                                                
                                                                                        
    it('verify last name field max length', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientLName.setValue(utl.maxChar32());
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('lastname is too long. Maximum length: 32');
    })

    it('verify last name valid green check', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        expect((JSON.stringify(accessCreate.clientLName.getCSSProperty('color'))).includes('#35b33f')).toBe(true); //verify if contains green check color code #35b33f
    })

    it('verify last name invalid red mark', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientLName.clearValue();
        browser.keys(['Tab']);
        expect((JSON.stringify(accessCreate.clientLName.getCSSProperty('color'))).includes('#f13340')).toBe(true); //verify if contains red mark color code #f13340
    })
    
    it('verify that first name starting with a number is invalid - red mark', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientLName.setValue('8oooool');
        browser.keys(['Tab']);
        expect((JSON.stringify(accessCreate.clientLName.getCSSProperty('color'))).includes('#f13340')).toBe(true);
    })
    
    it('verify that email field is required', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();                                                     
        accessCreate.clientEmail.clearValue();                                          
        accessCreate.submitAccInfo();                                                   
        expect(accessCreate.createError.getText()).toEqual('email is required.');    
    })                                                                                                                                                                
    
    it('verify that email field is completed by default with input from previous screen', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        const mailcompare = creationSec.createAddress.getValue();
        creationSec.submitCreate();
        browser.pause(2000);                                                                              
        expect(accessCreate.clientEmail.getValue()).toEqual(mailcompare);    
    })                                                                                                                                                                
    
    it('verify email field validation when entering an already registered address', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();                                                     
        accessCreate.clientEmail.setValue('adelquis.trinidad@endava.com');                                          
        accessCreate.submitAccInfo();                                                   
        expect(accessCreate.createError.getText()).toEqual('An account using this email address has already been registered.');    
    })                                                                                                                                                                
    
    it('verify email field format validation', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();                                                     
        accessCreate.clientEmail.setValue('adelquis.trinidad.endava.com');              //without @                               
        accessCreate.submitAccInfo();                                                   
        expect(accessCreate.createError.getText()).toEqual('email is invalid.');        
        accessCreate.clientEmail.setValue('adelquis.trinidad@.com');                    //without domain                      
        accessCreate.submitAccInfo();                                                   
        expect(accessCreate.createError.getText()).toEqual('email is invalid.');        
        accessCreate.clientEmail.setValue('adelquis.trinidad@endava');                  //without .com                        
        accessCreate.submitAccInfo();                                                   
        expect(accessCreate.createError.getText()).toEqual('email is invalid.');   
        accessCreate.clientEmail.setValue('@endava.com');                               //without username
        accessCreate.submitAccInfo();                                                   
        expect(accessCreate.createError.getText()).toEqual('email is invalid.');          
    })                                                                                                                                                                
    
    it('verify that password field is required', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();                                                     
        accessCreate.clientPwd.clearValue();                                          
        accessCreate.submitAccInfo();                                                   
        expect(accessCreate.createError.getText()).toEqual('passwd is required.');    
    })                                                                                                                                                                
    
    it('verify that password field is required', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();                                                   
        expect(accessCreate.pwdLegend.getText()).toEqual('(Five characters minimum)');    
    })                                                                                                                                                                
    
    it('verify that password field is required', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();                                                     
        accessCreate.clientPwd.setValue('uwu');                                          
        accessCreate.submitAccInfo();                                                   
        expect(accessCreate.createError.getText()).toEqual('passwd is invalid.');    
    })                                                                                                                                                                
    
    it('verify values of Date of Birth DAY dropdown', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());   //GABRIEL, YOU'RE THE BEST :D -- seriously though, I spent a whole evening trying out stuff and coming up with nothing...
        creationSec.submitCreate();                              //feedback supplier, if you have a better way to verify and validate a dropdown contents, PLEASE DO SHARE IT!
        expect((accessCreate.dayOptions.getText()).replace(/\s/g,'')).toEqual('-12345678910111213141516171819202122232425262728293031');
    })

    it('verify values of Date of Birth MONTH dropdown', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());  
        creationSec.submitCreate();                             
        expect((accessCreate.monthOptions.getText()).replace(/\s/g,'')).toEqual('-JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember');
    })
    
    it('verify values of Date of Birth YEAR dropdown', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());  
        creationSec.submitCreate();                             
        expect((accessCreate.yearOptions.getText()).replace(/\s/g,'')).toEqual('-201920182017201620152014201320122011201020092008200720062005200420032002200120001999199819971996199519941993199219911990198919881987198619851984198319821981198019791978197719761975197419731972197119701969196819671966196519641963196219611960195919581957195619551954195319521951195019491948194719461945194419431942194119401939193819371936193519341933193219311930192919281927192619251924192319221921192019191918191719161915191419131912191119101909190819071906190519041903190219011900');
    })
    
    it('Verify date of birth validation - Day', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientDay.selectByIndex(0);
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('Invalid date of birth');
    })

    it('Verify date of birth validation - Month', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientMonth.selectByIndex(0);
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('Invalid date of birth');
    })

    it('Verify date of birth validation - Year', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.clientYear.selectByIndex(0);
        accessCreate.submitAccInfo();
        expect(accessCreate.createError.getText()).toEqual('Invalid date of birth');
    })

    it('Verify behavior of "Sign up for our newsletter" checkbox', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        browser.pause(2000);
        expect(accessCreate.clientCheckbox1.isEnabled()).toBe(true);
        expect(accessCreate.clientCheckbox1.isSelected()).toBe(false);
        accessCreate.clientCheckbox1.click();
        expect(accessCreate.clientCheckbox1.isSelected()).toBe(true);
    })

    it('Verify behavior of "Receive special offers" checkbox', () => {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        browser.pause(2000);
        expect(accessCreate.clientCheckbox2.isEnabled()).toBe(true);
        expect(accessCreate.clientCheckbox2.isSelected()).toBe(false);
        accessCreate.clientCheckbox2.click();
        expect(accessCreate.clientCheckbox2.isSelected()).toBe(true);
    })  
})

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
    /**
     *  En caso de que se basen en los Test Case del "Automation Coding Test Cases" para la corrección:
     *  Hay un error en el enunciado de las User Stories para la pagina de Automation Practice, que se arrastró a los Test Case que hicieron para que usemos todos los mismos; 
     *  el "green check" y la "red mark" no aparecen en los campos de "Your Address"; esta explicito que si lo hacen en el enunciado, pero se debe haber arrastrado por Copy-Paste
     *  Cuando testeamos manualmente en clase comprobamos que no existen las marcas en esa sección. * Aviso porque no van a estar los tests que usen solo eso de Expected, obviamente ¯\_(ツ)_/¯ *
     */

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