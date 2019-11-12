import loginPage from '../page_objects/auth.page'
import creationSec from '../page_objects/create.page'
import accessCreate from '../page_objects/createInfo.page'
import utl from '../utilities/common.utilities'

class myAcc {

    get myTitle()               {return $('#center_column > h1');}
    get myLegend()              {return $('#center_column > p');}
    get buttonOrdDetsText()     {return $('#center_column > div > div:nth-child(1) > ul > li:nth-child(1) > a > span');}
    get buttonOrdDets()         {return $('#center_column > div > div:nth-child(1) > ul > li:nth-child(1) > a');}
    get buttonCredSlipText()    {return $('#center_column > div > div:nth-child(1) > ul > li:nth-child(2) > a > span');}
    get buttonCredSlip()        {return $('#center_column > div > div:nth-child(1) > ul > li:nth-child(2) > a');}
    get buttonMyAddrText()      {return $('#center_column > div > div:nth-child(1) > ul > li:nth-child(3) > a > span');}
    get buttonMyAddr()          {return $('#center_column > div > div:nth-child(1) > ul > li:nth-child(3) > a');}
    get buttonMyPersText()      {return $('#center_column > div > div:nth-child(1) > ul > li:nth-child(4) > a > span');}
    get buttonMyPers()          {return $('#center_column > div > div:nth-child(1) > ul > li:nth-child(4) > a');}
    get buttonMyWishText()      {return $('#center_column > div > div:nth-child(2) > ul > li > a > span');}
    get buttonMyWish()          {return $('#center_column > div > div:nth-child(2) > ul > li > a');}
    get buttonHome()            {return $('#center_column > ul > li > a');}
    
    /**
     *  VIP Access, creates account with dummy email and goes straight 
     *  into My Account screen with a single command line!
     */
    accountAccess() {
        loginPage.open();
        creationSec.createAddress.setValue(utl.emailRandom());
        creationSec.submitCreate();
        accessCreate.completeReq();
        accessCreate.submitAccInfo();
    }

}

export default new myAcc()