
const $form=document.querySelector('#form');
$form.addEventListener('submit',handleSubmit);

async function handleSubmit(event){
    event.preventDefault();
    const form= new FormData(this);
    const response =await fetch(this.action,{
        method:this.method,
        body:form,
        headers:{
            "Accept": "aplication/jason"
        }

    })
    if (response.ok){
        this.reset()
        alert("Gracias Te enviaremos una respuesta pronto")
    }

}

function tirar(){  

    var array_img =new Array();
    array_img[0]= new Image();
    array_img[0].src= "0.jpeg"
    array_img[1]= new Image();
    array_img[1].src= "01.jpeg"
    array_img[2]= new Image();
    array_img[2].src= "2.jpeg"
    array_img[3]= new Image();
    array_img[3].src= "3.jpeg"
    array_img[4]= new Image();
    array_img[4].src= "4.jpeg"
    array_img[5]= new Image();
    array_img[5].src= "5.jpeg"
    array_img[6]= new Image();
    array_img[6].src= "6.jpeg"
    array_img[7]= new Image();
    array_img[7].src= "7.jpeg"
    array_img[8]= new Image();
    array_img[8].src= "8.jpeg"
    array_img[9]= new Image();
    array_img[9].src= "9.jpeg"
    array_img[10]= new Image();
    array_img[10].src= "10.jpeg"
    array_img[11]= new Image();
    array_img[11].src= "11.jpeg"
    array_img[12]= new Image();
    array_img[12].src= "12.jpeg"
    array_img[13]= new Image();
    array_img[13].src= "13.jpeg"
    array_img[14]= new Image();
    array_img[14].src= "14.jpeg"
    array_img[15]= new Image();
    array_img[15].src= "15.jpeg"
    array_img[16]= new Image();
    array_img[16].src= "16.jpeg"
    array_img[17]= new Image();
    array_img[17].src= "17.jpeg"
    array_img[18]= new Image();
    array_img[18].src= "18.jpeg"
    array_img[19]= new Image();
    array_img[19].src= "19.jpeg"
    array_img[20]= new Image();
    array_img[20].src= "20.jpeg"
    array_img[21]= new Image();
    array_img[21].src= "21.jpeg"

 ///////////////////////////////////////////////////   
  
    const carta1 = document.getElementById("carta1");
    
    const carta2 = document.getElementById("carta2");
    const carta3 = document.getElementById("carta3");
    const carta4_1 = document.getElementById("carta4_1");
    const carta4_2 = document.getElementById("carta4_2");
    const carta4_3 = document.getElementById("carta4_3"); 
    const fecha = document.getElementById("fecha").value;
    const sonido_c1 = document.getElementById("carta_1_a");
    const sonido_c2 = document.getElementById("carta_2_a");
    const sonido_c3 = document.getElementById("carta_3_a");
    fecha[5]=0;
    fecha[6]=0;
//////////////////////////////////////////////////////
console.log(fecha)
    const suma_año = parseInt(fecha[0])+parseInt(fecha[1])+parseInt(fecha[2])+parseInt(fecha[3]);
    const suma_dia = parseInt(fecha[8])+parseInt(fecha[9]);
    const suma_mes = parseInt(fecha[5])+parseInt(fecha[6]);
    const str_dia = fecha[8]+fecha[9];
    const strDia_2 =str_dia.toString();
    const dia3 = parseInt(strDia_2);
    
    console.log("DiaStr#:",strDia_2);
   

    
    
    console.log("AÑO:",suma_año,"Mes:",suma_mes,"Dia: ",suma_dia,"Str_dia: ",strDia_2);
//////////////////////////////////////////////////////
// Calulo de año
if(suma_año < 22){
  

        carta1.src=array_img[suma_año].src;
        carta4_3.src=array_img[suma_año].src;
        console.log("Año",suma_año);
   
    let ruta1="sonidos/"+suma_año+"s.mp3";
    sonido_c3.src=ruta1;
    sonido_c3.setAttribute("style","background-color:green")

     
    }
    else{
        const año2_str = suma_año.toString()
        const suma2_año = parseInt(año2_str[0])+parseInt(año2_str[1]);
        carta1.src=array_img[suma2_año].src;
        carta4_3.src=array_img[suma2_año].src;
        let ruta1="sonidos/"+suma2_año+"s.mp3";
       sonido_c3.src=ruta1;
       sonido_c3.setAttribute("style","background-color:green")

     
        console.log("suma de año 2:",suma2_año)
        console.log(ruta1)
    }


// Caculo de Dia
if(str_dia > 21){
    carta3.src = array_img[suma_dia].src;
    carta4_1.src = array_img[suma_dia].src;
    console.log("dia",suma_dia)
    let ruta2="sonidos/"+suma_dia+"s.mp3";
    sonido_c1.src=ruta2;
    sonido_c1.setAttribute("style","background-color:red")
    console.log(ruta2)
    
    
   
}else{
    carta3.src = array_img[dia3].src;
    carta4_1.src = array_img[dia3].src;
    let ruta2="sonidos/"+dia3+"s.mp3";
    sonido_c1.src=ruta2;
    sonido_c1.setAttribute("style","background-color:blue")
    console.log(ruta2)
    
}
    
    
// Calulo de Mes 
const str_mes = fecha[5]+fecha[6];

console.log("Mes: ",str_mes)

if(str_mes < 9 ){
carta2.src = array_img[suma_mes].src
carta4_2.src = array_img[suma_mes].src
let ruta3="sonidos/"+suma_mes+"s.mp3";
    sonido_c2.src=ruta3;
    sonido_c2.setAttribute("style","background-color:purple")
    console.log(ruta3)

    }else{
    
        
    carta2.src =array_img[str_mes].src;
    carta4_2.src =array_img[str_mes].src;
    let ruta3="sonidos/"+str_mes+"s.mp3";
    sonido_c2.src=ruta3;
    sonido_c2.setAttribute("style","background-color:green")
    console.log(ruta3)

    }



//Cambio Cartas Mix


    
}


function tirar_2(){  

    var array_img =new Array();
    array_img[0]= new Image();
    array_img[0].src= "b_2/0.jpeg"
    array_img[1]= new Image();
    array_img[1].src= "b_2/01.jpeg"
    array_img[2]= new Image();
    array_img[2].src= "b_2/2.jpeg"
    array_img[3]= new Image();
    array_img[3].src= "b_2/3.jpeg"
    array_img[4]= new Image();
    array_img[4].src= "b_2/4.jpeg"
    array_img[5]= new Image();
    array_img[5].src= "b_2/5.jpeg"
    array_img[6]= new Image();
    array_img[6].src= "b_2/6.jpeg"
    array_img[7]= new Image();
    array_img[7].src= "b_2/7.jpeg"
    array_img[8]= new Image();
    array_img[8].src= "b_2/8.jpeg"
    array_img[9]= new Image();
    array_img[9].src= "b_2/9.jpeg"
    array_img[10]= new Image();
    array_img[10].src= "b_2/10.jpeg"
    array_img[11]= new Image();
    array_img[11].src= "b_2/11.jpeg"
    array_img[12]= new Image();
    array_img[12].src= "b_2/12.jpeg"
    array_img[13]= new Image();
    array_img[13].src= "b_2/13.jpeg"
    array_img[14]= new Image();
    array_img[14].src= "b_2/14.jpeg"
    array_img[15]= new Image();
    array_img[15].src= "b_2/15.jpeg"
    array_img[16]= new Image();
    array_img[16].src= "b_2/16.jpeg"
    array_img[17]= new Image();
    array_img[17].src= "b_2/17.jpeg"
    array_img[18]= new Image();
    array_img[18].src= "b_2/18.jpeg"
    array_img[19]= new Image();
    array_img[19].src= "b_2/19.jpeg"
    array_img[20]= new Image();
    array_img[20].src= "b_2/20.jpeg"
    array_img[21]= new Image();
    array_img[21].src= "b_2/21.jpeg"

 ///////////////////////////////////////////////////   
  
    const carta1 = document.getElementById("carta1");
    
    const carta2 = document.getElementById("carta2");
    const carta3 = document.getElementById("carta3");
    const carta4_1 = document.getElementById("carta4_1");
    const carta4_2 = document.getElementById("carta4_2");
    const carta4_3 = document.getElementById("carta4_3"); 
    const fecha = document.getElementById("fecha").value;
    const sonido_c1 = document.getElementById("carta_1_a");
    const sonido_c2 = document.getElementById("carta_2_a");
    const sonido_c3 = document.getElementById("carta_3_a");
    fecha[5]=0;
    fecha[6]=0;
//////////////////////////////////////////////////////
console.log(fecha)
    const suma_año = parseInt(fecha[0])+parseInt(fecha[1])+parseInt(fecha[2])+parseInt(fecha[3]);
    const suma_dia = parseInt(fecha[8])+parseInt(fecha[9]);
    const suma_mes = parseInt(fecha[5])+parseInt(fecha[6]);
    const str_dia = fecha[8]+fecha[9];
    const strDia_2 =str_dia.toString();
    const dia3 = parseInt(strDia_2);
    
    console.log("DiaStr#:",strDia_2);
   

    
    
    console.log("AÑO:",suma_año,"Mes:",suma_mes,"Dia: ",suma_dia,"Str_dia: ",strDia_2);
//////////////////////////////////////////////////////
// Calulo de año
if(suma_año < 22){
  

        carta1.src=array_img[suma_año].src;
        carta4_3.src=array_img[suma_año].src;
        console.log("Año",suma_año);
   
    let ruta1="sonidos/"+suma_año+"s.mp3";
    sonido_c3.src=ruta1;
    sonido_c3.setAttribute("style","background-color:green")

     
    }
    else{
        const año2_str = suma_año.toString()
        const suma2_año = parseInt(año2_str[0])+parseInt(año2_str[1]);
        carta1.src=array_img[suma2_año].src;
        carta4_3.src=array_img[suma2_año].src;
        let ruta1="sonidos/"+suma2_año+"s.mp3";
       sonido_c3.src=ruta1;
       sonido_c3.setAttribute("style","background-color:green")

     
        console.log("suma de año 2:",suma2_año)
        console.log(ruta1)
    }


// Caculo de Dia
if(str_dia > 21){
    carta3.src = array_img[suma_dia].src;
    carta4_1.src = array_img[suma_dia].src;
    console.log("dia",suma_dia)
    let ruta2="sonidos/"+suma_dia+"s.mp3";
    sonido_c1.src=ruta2;
    sonido_c1.setAttribute("style","background-color:red")
    console.log(ruta2)
    
    
   
}else{
    carta3.src = array_img[dia3].src;
    carta4_1.src = array_img[dia3].src;
    let ruta2="sonidos/"+dia3+"s.mp3";
    sonido_c1.src=ruta2;
    sonido_c1.setAttribute("style","background-color:blue")
    console.log(ruta2)
    
}
    
    
// Calulo de Mes 
const str_mes = fecha[5]+fecha[6];

console.log("Mes: ",str_mes)

if(str_mes < 9 ){
carta2.src = array_img[suma_mes].src
carta4_2.src = array_img[suma_mes].src
let ruta3="sonidos/"+suma_mes+"s.mp3";
    sonido_c2.src=ruta3;
    sonido_c2.setAttribute("style","background-color:purple")
    console.log(ruta3)

    }else{
    
        
    carta2.src =array_img[str_mes].src;
    carta4_2.src =array_img[str_mes].src;
    let ruta3="sonidos/"+str_mes+"s.mp3";
    sonido_c2.src=ruta3;
    sonido_c2.setAttribute("style","background-color:green")
    console.log(ruta3)

    }



//Cambio Cartas Mix


    
}

