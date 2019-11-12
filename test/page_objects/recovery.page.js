class pwdPage {

    get pwdTitle()          {return $('#center_column > div > h1');}
    get pwdLegend()         {return $('#center_column > div > p');}     //same selector as successful password retrieve screen
    get pwdEmail()          {return $('#email');}
    get pwdError()          {return $('#center_column > div > div > ol > li');}
    get retrieveButton()    {return $('#form_forgotpassword > fieldset > p > button');}
}

export default new pwdPage()