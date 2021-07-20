


const { assert } = require('chai');
const { default: scrollIntoView } = require('webdriverio/build/commands/element/scrollIntoView');
const ShoppingPage= require('../PageObjects/shoppingPage');
const commonElements= require('../util/commonElements');
const elementUtil =require("../util/elementUtil")


class shoppingActions{

    //Validating ShoppingCart Landing
    validateLandingOnShoppingPage(){
    browser.pause(4000)
    ShoppingPage.validatorOf.isDisplayed();
    }

    //selecting 2 products
    selectProduct(){
        let productName=["Blackberry","Nokia Edge"]
        productName.forEach(function(product){
            
          commonElements.productselection(product).click();
        })

        browser.pause(3000);
       
        elementUtil.doClick(ShoppingPage.checkOut);
    }

    //shopping cart Operations
    shoppingCart(){
        let Price= ShoppingPage.ValuesOfPrice.map(price=>parseInt(price.getText().split(".")[1].trim())).reduce((acc,pri)=>acc+pri,0)
        console.log("Total Price : ", Price);
        let TotalSum= parseInt(ShoppingPage.ValidateSum.getText().split(".")[1].trim());
        console.log("Total Price Displayed: ", TotalSum);
        assert.equal(Price,TotalSum)
       // expect(Price).toEqual(TotalSum);

    }

}
module.exports=new shoppingActions();