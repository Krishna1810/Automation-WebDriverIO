const { default: waitForDisplayed } = require("webdriverio/build/commands/element/waitForDisplayed");

class elementUtil{

    //Click on Elements
    doClick(locator){
        $(locator).waitForClickable();
        $(locator).click();
    }

    //send values
    doType(locator,value){
        browser.pause(2000)
        $(locator).setValue(value);
    }

    //select Value From DropDown
    dropDownSelections(locator, selectBy, valueOf){
        
        switch(selectBy){
            case "visibleText":
                $(locator).selectByVisibleText(valueOf);
                break;
            case "index":
                let intIndex= parseInt(valueOf);
                $(locator).selectByIndex(intIndex);
                break;
            case "value":
                $(locator).selectByAttribute(valueOf);
                break;

        }
    }

    //getText From 
    getText(locator){
        $(locator).waitForDisplayed();
        $(locator).getText();
    }

    //element is displayed or not  @hardAssertion 
    toBeDisplayed(locator){
        $(locator).waitForDisplayed()
        expect($(locator)).toBeDisabled();
     }




    



      



}

module.exports= new elementUtil();