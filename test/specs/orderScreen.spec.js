import naviSec from '../page_objects/nav.section'
import myAcc from '../page_objects/account.page'
import myOrderHis from '../page_objects/order.page'

describe('User Story 008 - Order History', () => {

    it('verify that client is able to access Order history screen', () => {
        myOrderHis.orderAccess();
        myAcc.buttonOrdDets.click();
        expect(naviSec.inTitle.getTitle()).toEqual('Order history - My Store');
        naviSec.logout();
    })

    it('verify correct content of Order History screen', () => {
        myOrderHis.orderAccess();
        myAcc.buttonOrdDets.click();
        expect(myOrderHis.orderTitle.getText()).toEqual('ORDER HISTORY');
        expect(myOrderHis.orderLegend.getText()).toEqual("Here are the orders you've placed since your account was created.");
        expect(myOrderHis.orderList.isExisting()).toBe(true);
        naviSec.logout();
    })

    it('verify that for each order the correct information is displayed', () => {
        myOrderHis.orderAccess();
        myAcc.buttonOrdDets.click();
        browser.setWindowSize(1600, 900);
        browser.pause(1000);
        expect(myOrderHis.orderRef.getText()).toEqual('Order reference');
        expect(myOrderHis.orderDate.getText()).toEqual('Date');
        expect(myOrderHis.orderTPrice.getText()).toEqual('Total price');
        expect(myOrderHis.orderPayment.getText()).toEqual('Payment');
        expect(myOrderHis.orderStatus.getText()).toEqual('Status');
        expect(myOrderHis.orderInvoice.getText()).toEqual('Invoice');
        naviSec.logout();
    })

    it('verify that client is able to download invoice', () => {
        myOrderHis.orderAccess();
        myAcc.buttonOrdDets.click();
        browser.setWindowSize(1600, 900);
        expect(myOrderHis.invoiceDL.isExisting()).toBe(true);
        naviSec.logout();
    })

    it('verify Details button behavior', () => {
        myOrderHis.orderAccess();
        myAcc.buttonOrdDets.click();
        browser.setWindowSize(1600, 900);
        myOrderHis.orderDetails.click();
        expect(myOrderHis.detailsTitle.getText()).toEqual("FOLLOW YOUR ORDER'S STATUS STEP-BY-STEP"); //verifies appeareance of order details title
        naviSec.logout();
    })

    it('verify Reorder button behavior', () => {
        myOrderHis.orderAccess();
        myAcc.buttonOrdDets.click();
        browser.setWindowSize(1600, 900);
        myOrderHis.reorderButton.click();
        expect(myOrderHis.shopCartTitle.getText()).toEqual('Your shopping cart');   //verifies actual page through navigation_page
        naviSec.logout();
    })
}) 