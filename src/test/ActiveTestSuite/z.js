
describe("LogInPage Actions",()=>{
        
    
    it("user LogInActions",()=>{
        browser.url('https://en.wikipedia.org/wiki/Wipro');
        browser.pause(1000);
        browser.maximizeWindow();
        browser.getTitle();
        browser.pause(8000);
    });
});