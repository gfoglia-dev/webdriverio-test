import loginPage from '../page_objects/auth.page'

class myOrderHis {

    get orderTitle()        {return $('#center_column > h1');}
    get orderLegend()       {return $('#center_column > p');}
    get orderList()         {return $('#order-list');}
    get orderRef()          {return $('#order-list > thead > tr > th.first_item.footable-first-column');}   
    get orderDate()         {return $('#order-list > thead > tr > th:nth-child(2)');}
    get orderTPrice()       {return $('#order-list > thead > tr > th:nth-child(3)');}
    get orderPayment()      {return $('#order-list > thead > tr > th:nth-child(4)');}
    get orderStatus()       {return $('#order-list > thead > tr > th:nth-child(5)');}
    get orderInvoice()      {return $('#order-list > thead > tr > th:nth-child(6)');}
    get orderDetails()      {return $('#order-list > tbody > tr > td.history_detail.footable-last-column > a.btn.btn-default.button.button-small');}
    
    get reorderButton()     {return $('#order-list > tbody > tr > td.history_detail.footable-last-column > a.link-button');}

    get invoiceDL()         {return $('#order-list > tbody > tr > td.history_invoice > a');}
    get detailsTitle()      {return $('#block-order-detail > h1');}

    get shopCartTitle()     {return $('#columns > div.breadcrumb.clearfix > span.navigation_page');}

    /**
     *  Used to log in with existing account and have access to Order History screen with items.
     */
    orderAccess() {
        loginPage.open();
        loginPage.username.setValue('pepeamigo@gmail.com');
        loginPage.password.setValue('pepito');
        loginPage.submit();
    }
}

export default new myOrderHis ()