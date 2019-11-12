class loginPage {

    get loginForm()     { return $('#login_form');}
    get username()      { return $('#email');}
    get password()      { return $('#passwd');}
    get forgotPwd()     { return $('#login_form > div > p.lost_password.form-group > a');}
    get submitBtn()     { return $('#SubmitLogin');}
    get authTitle()     { return $('#login_form > h3');}
    get breadBtn()      { return $('.home');}
    get breadNavi()     { return $('#columns > div.breadcrumb.clearfix > span.navigation_page');}
    get alertMsg()      { return $('.alert-danger li');}
    
    /**
     *  Clicks on submit Sign in button in ALREADY REGISTERED? section
     */
    submit() {
        this.submitBtn.click()
    }   

    /**
     *  Access directly into Authentication Page URL
     */
    open () {
        browser.url('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    }
    
}

export default new loginPage()