
const logInPage=require("../PageObjects/logInPage");
const elementUtil =require("../util/elementUtil")
const config= require("../PropertyFiles/config");


class logInActions{

    performLogIn(){
        elementUtil.doType(logInPage.UserName,config.userName);
        elementUtil.doType(logInPage.Password,config.Password);
        elementUtil.doClick(logInPage.UserSelect);
        elementUtil.doClick(logInPage.Okay);
        elementUtil.dropDownSelections(logInPage.StudentSelection,"visibleText","Student");
        elementUtil.doClick(logInPage.CheckOutAgreement);
        elementUtil.doClick(logInPage.SignInButton);
       }

}

module.exports= new logInActions();