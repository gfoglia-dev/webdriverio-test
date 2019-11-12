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