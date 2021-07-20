
const actionLogIn= require('../PageActions/logInActions')
const shoppingActions= require('../PageActions/shoppingActions')



describe("LogInPage Actions",()=>{
        
    
    it("user LogInActions",()=>{
        browser.url('https://www.rahulshettyacademy.com/loginpagePractise/');
        browser.pause(1000);
        browser.maximizeWindow();
        actionLogIn.performLogIn();
    });

    it("Shopping PageActions", ()=>{
        shoppingActions.validateLandingOnShoppingPage();
        shoppingActions.selectProduct();
        shoppingActions.shoppingCart();

    });
});

