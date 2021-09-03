const billAmount = document.querySelector('#billamount');
const givenAmount= document.querySelector('#givenamount');
const checkButton= document.querySelector('#check');
const noOfNote= document.querySelectorAll('#no-of-note');
const arrayOfNote=[2000,500,100,20,10,5,1];

billAmount.addEventListener('focusout', () => {
    if(billAmount.value!==""){
        message.style.display="none";
        if (billAmount.value === 0){
            forWrongInput("invalid input...")
        }else {
            givenamount.style.visibility="visible";
            lableofgivenamount.style.visibility="visible";
        }
        givenAmount.addEventListener('focusout', () =>{
            if(givenAmount.value!==""){
                message.style.display="none";
                check.style.visibility="visible";
            }else{
                forWrongInput("Enter the values.....")
            }
        })
    }else{
        forWrongInput("Enter the values.....")
    }
})

checkButton.addEventListener("click", function checking(){
    cashtable.style.visibility="hidden";
    message.style.display="none";
    if (Number(givenAmount.value) >= Number(billAmount.value) ){
        const balance=Number(givenAmount.value)- Number(billAmount.value)
        mainCalculation(balance);
    }else{
        forWrongInput("Ready to wash the dish......");
    }    
});
function forWrongInput(msg) {
    message.style.display="block";
    message.innerText=msg;
}
function mainCalculation(balanceAmount) {
    tableContainer.style.visibility="visible";
    cashtable.style.visibility="visible";
    for (let i=0;i < arrayOfNote.length;i++){
        const numberOfNotes= Math.trunc(balanceAmount / arrayOfNote[i]);
        balanceAmount=balanceAmount %arrayOfNote[i];
        noOfNote[i].innerText= numberOfNotes;
    }
};
    
      
