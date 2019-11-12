class naviSec {

    get inTitle()       { return $('head > title');}
    get logButtonName() { return $('#header > div.nav > div > div > nav > div:nth-child(2)');}
    get loginBtn()      { return $('.login');}
    get logoutBtn()     { return $('.logout');}
    get clientName()    { return $('#header > div.nav > div > div > nav > div:nth-child(1) > a');}

    /**
     *  Clicks on Sign in button in Navigation bar
     */
    login() {
        this.loginBtn.click();
   }
    /**
     *  Clicks on Sign out button in Navigation bar
     */
    logout() {
        this.logoutBtn.click()
    }
}

export default new naviSec()