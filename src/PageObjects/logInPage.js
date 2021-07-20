

class logInPage_Object{

get UserName(){
        
    return  $("//input[@name='username']");
}

get Password()
{
    return $("//input[@name='password']");
}

get UserSelect(){
    return $("//span[text()=' User']/..//span[@class='checkmark']");
}

get Okay(){
    return $("//div[@class='modal-content']").$("//button[@id='okayBtn']");
}

get StudentSelection(){
    return $("//select[@class='form-control']");
}

get CheckOutAgreement(){
    return $("//input[@id='terms']");
}

get SignInButton(){
    return $("//input[@value='Sign In']");
}

}  

module.exports = new logInPage_Object();

