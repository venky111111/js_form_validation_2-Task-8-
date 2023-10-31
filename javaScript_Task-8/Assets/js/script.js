function validate(){
        
        let m = check1();
        if(m==10){
           
        }  
}
 var c=0;  
     
function check1(){
  
  const ar=[fn,sn,em,nm,np,cp,gn,dt,cn,ch];
  let fname=document.getElementById("fName");
  let sname=document.getElementById("sName");
  let email=document.getElementById("email");
  let number1=document.getElementById("number");
  let npassword=document.getElementById("nPassword");
  
  let cpassword=document.getElementById("cPassword");
  const gender1=document.getElementById("gender"); 
  let date=document.getElementById("dateInput"); 
  let country=document.getElementById("country");
  let check=document.getElementById("check");
  const arr=[fname,sname,email,number1,npassword,cpassword,gender1,date,country,check];
    if (Fname11()===true){
        if(Sname11()===true){
            if( mail11()===true){
                if(number11()===true){
                    if(Npassword11()===true){
                        if(Cpassword11()===true){
                            if(getSelectedValue11()===true){
                                if( date11()===true){
                                    if(country11()===true){
                                        if(check11()==true){
                                            const modal = document.getElementById("successModal");
                                            modal.style.display = "block";
                                        }
                                        else{
                                            for(let i=0;i<ar.length-1;i++){
                                             
                                                ar[i].innerHTML="";
                                                arr[i].style.borderColor="black";
                                                
                                            }
                                        }
                                    }
                                    else{
                                        for(let i=0;i<ar.length;i++){
                                            if(i>8){
                                            ar[i].innerHTML="";
                                            arr[i].style.borderColor="black";
                                            }
                                        }
                                    }

                                }
                                else{
                                    for(let i=0;i<ar.length;i++){
                                        if(i>7){
                                        ar[i].innerHTML="";
                                        arr[i].style.borderColor="black";
                                        }
                                    }
                                }

                            }
                            else{
                                for(let i=0;i<ar.length;i++){
                                    if(i>6){
                                    ar[i].innerHTML="";
                                    arr[i].style.borderColor="black";
                                    }
                                }
                            }
                        }
                        else{
                            for(let i=0;i<ar.length;i++){
                                if(i>5){
                                ar[i].innerHTML="";
                                arr[i].style.borderColor="black";
                                }
                            }
                        }
                    }
                    else{
                        for(let i=0;i<ar.length;i++){
                            if(i>4){
                            ar[i].innerHTML="";
                            arr[i].style.borderColor="black";
                            }
                        }
                    }
                }
                else{
                    for(let i=0;i<ar.length;i++){
                        if(i>3){
                        ar[i].innerHTML="";
                        arr[i].style.borderColor="black";
                        }
                    }
                }
                
            }
            else
            {
                for(let i=0;i<ar.length;i++){
                    if(i>2){
                    ar[i].innerHTML="";
                    arr[i].style.borderColor="black";
                    }
                }
            }
            
        }
        else{
            for(let i=0;i<ar.length;i++){
                if(i>1){
                ar[i].innerHTML="";
                arr[i].style.borderColor="black";
                }
            }
        }
    }
    else{

        for(let i=1;i<ar.length;i++){
            ar[i].innerHTML="";
            arr[i].style.borderColor="black";
        }
    }
        
 
    }

    function Fname11()
    {
        let fname=document.getElementById("fName");
        const FName=fname.value;
        let fn=document.getElementById("fn");
            if (FName =="") {
                    fn.innerHTML="Please give your first name"; 
                    fname.style.borderColor="red";
                    fn.style.color="red";
                


            }
            else if(checkName(FName)&&(FName.charAt(0)>='A'&&FName.charAt(0)<='Z')){
            
                fn.innerHTML="";
                fname.style.borderColor="green";
                c++;              
                return true;
            }

            else {
                fn.innerHTML="Please give letters only and first letter must be capital";
                fn.style.color="red";
                fname.style.borderColor="red";
                return false;
            }
            function checkName(input) {
                let nameReg = /^[a-zA-Z]+$/;
                let valid = nameReg.test(input);
                return valid;
            }
           
       return false;
    }
  
    function Sname11()
    {
        let sname=document.getElementById("sName");
        const SName=sname.value;
        let sn=document.getElementById("sn"); 

        if(SName==="")
        {
            sn.innerHTML="Please give your second name"; 
                sname.style.borderColor="red";
                sn.style.color="red";
                return false;
        }
        else if(checkName(SName)){
        
            sn.innerHTML="";
            sname.style.borderColor="green";
            return true;
        }
        else 
        {
            sn.innerHTML="Please give letters only";
            sn.style.color="red";
            sname.style.borderColor="red";
            return false;
        }
        function checkName(input) 
        {
            let nameReg = /^[a-zA-Z]+$/;
            let valid = nameReg.test(input);
            return valid;
        }
    

    }
    function mail11(){
        let email=document.getElementById("email");
        const Email=email.value;
        let em=document.getElementById("em");
        if(Email===""){
            em.innerHTML="Please give your email"; 
                email.style.borderColor="red";
                em.style.color="red";
               return false;
        }
        else if(checkMail(Email)){
        
            em.innerHTML="";
            email.style.borderColor="green";
            
            return true;
        }
        else {
            em.innerHTML="Please give Valid mail";
            em.style.color="red";
            email.style.borderColor="red";
           return false;
        }
        function checkMail(input){
            
            let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                let valid = emailReg.test(input);
                    return valid;
        }
        
    }
  
    function number11(){

        let number1=document.getElementById("number");
        const number=number1.value;
        let nm=document.getElementById("nm");
        if(number===""){
            nm.innerHTML="Please give your number"; 
                number1.style.borderColor="red";
                nm.style.color="red";
                return false;
        }
        else if(checkNumber(number))
        {
            if((number.charAt(3)>='6'&&number.charAt(3)<='9')&&(number.charAt(0)=='+')){
            nm.innerHTML="";
            number1.style.borderColor="green";
          
            
         
            return true;
            }
            else{
                nm.innerHTML="Number is invalid";
                number1.style.borderColor="red";
                nm.style.color="red";
                return false;
            }
        }
        else{
            nm.innerHTML="Please give valid mobile number ";
            nm.style.color="red";
            number1.style.borderColor="red";
            return false; 
        }
        function checkNumber(input) {
                
            let mobileReg = /^[+0-9]{13}$/;
            let valid = mobileReg.test(input);
            return valid;
        }
        
    }
    
    function Npassword11(){
        
        let npassword=document.getElementById("nPassword");
        const NPassword=npassword.value;
        let np=document.getElementById("np");
            if(NPassword==""){
                    np.innerHTML="Please give your new password"; 
                    npassword.style.borderColor="red";
                    np.style.color="red";
                    c=c-1;
                    checking(5);
            }
            else if(checkPassword(NPassword)){
                np.innerHTML="";
                npassword.style.borderColor="green"; 
                c++;
            //    Cpassword11();
               return true;
            }
            else{
                np.innerHTML="Password should containe one number,one capital letter,one small letter,one symbol and atleast 8 characters";
                np.style.color="red";
                npassword.style.borderColor="red";
                c=c-1;
                checking(5);
            }
            function checkPassword(input) {
                let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                let valid = regex.test(input);
                return valid;
            }
            return false;
    }
   
    function Cpassword11(){
        
        let npassword=document.getElementById("nPassword");
        const NPassword=npassword.value;
        let np=document.getElementById("np");
    
       let cpassword=document.getElementById("cPassword");
        const CPassword=cpassword.value;
        let cp=document.getElementById("cp");

        if(CPassword==""){
                cp.innerHTML="Please conform password"; 
                cpassword.style.borderColor="red";
                cp.style.color="red";
                c=c-1;
                checking(6);
        }
        else if(CPassword===NPassword){
            cp.innerHTML="";
        cpassword.style.borderColor="green";
        c++;
            // getSelectedValue11();
            return true;

        }
        else{
            cp.innerHTML="password does not match";
            cp.style.color="red";
            cpassword.style.borderColor="red"; 
            c=c-1;
            checking(6);
        }
        return false;
    }
    function getSelectedValue11(){
        const gender1=document.getElementById("gender");  
        let gn=document.getElementById("gn"); 
        var getSelectedValue = document.querySelector('input[name="fav"]:checked'); 
        if(getSelectedValue==null){
            gn.innerHTML="Please give your gender"; 
            gender1.style.borderColor="red";
            gn.style.color="red";
            c=c-1;
            checking(7);
        }
        else{
            gn.innerHTML="";
            gender1.style.borderColor="green";
            c++;
            // date11();
            return true;
        }
        return false;
    }
    function date11(){
        let date=document.getElementById("dateInput");
        const Date=date.value;
        let dt=document.getElementById("dt");
    
        if(Date==''){
            dt.innerHTML="Please give your date of birth"; 
            date.style.borderColor="red";
            dt.style.color="red";
            c=c-1;
            checking(8);
        }
        else{
            dt.innerHTML="";
            date.style.borderColor="green";
            c++;
            // country11();
            return true;

        }
        return false;
    }
    function country11(){
        let country=document.getElementById("country");
    const Country=country.value;
    let cn=document.getElementById("cn");
        if(Country===''){
            cn.innerHTML="Please give your country"; 
            country.style.borderColor="red";
            cn.style.color="red";
            c=c-1;
            checking(9);
        }
        else{
            cn.innerHTML="";
            country.style.borderColor="green";
            c++;
            // check11();
            return true;

        }
        return false;
    }
    function check11(){
        
        let check=document.getElementById("check");
        const Check=check.value;
        let ch=document.getElementById("ch");
        if(!check.checked){
            ch.innerHTML="Please give your conformation"; 
            check.style.borderColor="red";
            ch.style.color="red";
            c=c-1;
            checking(10);
        }
        else{
            ch.innerHTML="";
            check.style.borderColor="green";
            c++;
            return true;
        }
        return false;
    }
    
   


