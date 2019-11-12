class creationSec {

    get createAddress()     {return $('#email_create') ;}
    get createBtn()         {return $('#SubmitCreate > span');}
    get createError()       {return $('#create_account_error > ol > li');}
    get createForm()        {return $('#create-account_form');}
    get emailCreate()       {return $('#email_create');}
    get createTitle()       {return $('#create-account_form > h3');}
    get createSub()         {return $('#create-account_form > div > p');}
    get emailLabel()        {return $('#create-account_form > div > div.form-group > label');}
    get createRedMark()     {return $('#create-account_form > div > div.form-group.form-error');}
    get createPage()        {return $('.std div');}

    /**
     *  Clicks on 'Create an Account' button in Authentication Screen
     */
    submitCreate() {
        this.createBtn.click()
    }

}

export default new creationSec()