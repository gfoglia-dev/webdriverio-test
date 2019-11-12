class accessCreate {

    //YOUR PERSONAL INFORMATION Selectors

    get createTitle()       {return $('#noSlide > h1');}
    get createSub1()        {return $('#account-creation_form > div:nth-child(1) > h3');}
    get createGender1()     {return $('#id_gender1');}
    get createGenEx1()      {return $('#account-creation_form > div:nth-child(1) > div.clearfix > div:nth-child(4)');}           //Mr. radio button display
    get createGenTitle1()   {return $('#account-creation_form > div:nth-child(1) > div.clearfix > div:nth-child(3) > label');}
    get createGender2()     {return $('#id_gender2');}
    get createGenEx2()      {return $('#account-creation_form > div:nth-child(1) > div.clearfix > div:nth-child(4)');}           //Mrs. radio button display
    get createGenTitle2()   {return $('#account-creation_form > div:nth-child(1) > div.clearfix > div:nth-child(4) > label');}
    get clientFName()       {return $('#customer_firstname');}  //client FIRST name : FName
    get clientLName()       {return $('#customer_lastname');}   //client LAST name : LName
    get clientEmail()       {return $('#email');}
    get clientPwd()         {return $('#passwd');}
    get pwdLegend()         {return $('//*[@id="account-creation_form"]/div[1]/div[5]/span');}
    get clientDay()         {return $('#uniform-days');}
    get dayOptions()        {return $('#days');}
    get clientMonth()       {return $('#uniform-months');}
    get monthOptions()      {return $('#months');}
    get clientYear()        {return $('#uniform-years');}
    get yearOptions()       {return $('#years')}
    get clientCheckbox1()   {return $('#newsletter');}
    get clientCheckbox2()   {return $('#optin');}

    //YOUR ADDRESS Selectors

    get createTitle2()      {return $('#account-creation_form > div:nth-child(2) > h3');}
    get addressFName()      {return $('#firstname');}
    get addressLName()      {return $('#lastname');}
    get companyName()       {return $('#company');}
    get clientAddress()     {return $('#address1');}
    get addressLegend()     {return $('//*[@id="account-creation_form"]/div[2]/p[4]/span');}
    get clientCity()        {return $('#city');}
    get clientState()       {return $('#id_state');}
    get clientZip()         {return $('#postcode');}
    get clientCountry()     {return $('#id_country');}
    get clientAdditional()  {return $('#other');}
    get clientHomePhone()   {return $('#phone');}
    get homePhoneLegend()   {return $('//*[@id="account-creation_form"]/div[2]/p[11]');}
    get clientPhone()       {return $('#phone_mobile');}
    get addressAlias()      {return $('#alias');}

    get createError()       {return $('//*[@id="center_column"]/div/ol/li');}   // Error Alert Message
    get createError2()      {return $('//*[@id="center_column"]/div/ol/li[2]');}
    get submitAcc()         {return $('#submitAccount');}       // Register button

    /**
     *  Clicks on 'Register >' button in Create an Account Screen
     */
    submitAccInfo() {
        this.submitAcc.click()
    }
    
    /**
     *  Completes required fields on Create An Account screen !
     */
    completeReq() {

        //Personal Information Area:
            this.clientFName.setValue('Oscar');
            this.clientLName.setValue('Destroyer');
            this.clientPwd.setValue('12345');
            this.clientDay.selectByIndex('21');   
            this.clientMonth.selectByIndex('6');  
            this.clientYear.selectByIndex('28');  
        // Your Address Area:
            this.clientAddress.setValue('Av. San Pistacho 1337');
            this.clientCity.setValue('Little Rock');
            this.clientState.selectByVisibleText('Arkansas');
            this.clientZip.setValue('72002');
            this.clientPhone.setValue('501-584-6455');
            this.addressAlias.setValue('Random Alias');
    }

    /**
     * PROJECT: DROPDOWN VALUES - tried many things, changed it a lot..failed a lot, wouldn't work :( it rests here to remind me of my failure (?) will keep trying to make it though
     */

    dropdownDayValues() {
        let i = 0;
        do  {
                var index = (this.clientDay.selectByIndex(i));
                var compare = index.getText();
                console.log(compare);
                    if (compare != '') {
                        i++; 
                        cond = true                                            
                    } else {
                        i = i+13;
                        cond = false;
                    }               
            } while (i < 13);
            if (cond = true) {
                return true
            } else {
                return false
            }
     };
    
}



export default new accessCreate()