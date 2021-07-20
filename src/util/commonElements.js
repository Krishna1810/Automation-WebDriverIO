class commonElements{
    productselection(product){
     return $("//a[text()='"+product+"']/..//..//..//div/button")
    }
}
module.exports= new commonElements();