class ShoppingPage{

    get validatorOf(){
        return $("//a[text()='ProtoCommerce']");
    }

    get checkOut(){
        return $("//a[contains(text(),'Checkout')]");
    }

    get ValuesOfPrice(){
       return $$("//tr/td[4]/strong");
    }

    get ValidateSum(){
        return $("//h3/strong[text()='₹. 115000']");
    }
}

module.exports= new ShoppingPage();
    