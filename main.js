const base= "https://covers.openlibrary.org/b/id/";
let index =0;
let datubasea=[
    {
      "isbn": "1617293563",
      "egilea": "Raoul-Gabriel Urma",
      "data": "Nov 15, 2018",
      "izenburua": "Modern Java in Action: Lambdas, streams, functional and reactive programming",
      "filename": "8508261-M.jpg"
    },
  
   {
      "isbn": "9781617291302",
      "egilea": "Benjamin Muschko",
      "data": "Mar 09, 2014",
      "izenburua": "Gradle in Action",
      "filename": "8514400-M.jpg"
    },
  
       {
      "isbn": "1883601126",
      "egilea": "Matt Welsh",
      "data": "1995",
      "izenburua": "The Linux bible",
      "filename": "6764181-M.jpg"
    },
    
  {
      "isbn": "9781617293290",
      "egilea": "Dmitry Jemerov",
      "data": "Feb 19, 2017",
      "izenburua": "Kotlin in Action",
      "filename": "8507716-M.jpg"
    }
  ]
window.onload = function(){
    
    let iru= document.getElementById("irudia");
    iru.src= base + datubasea[index].filename;
    

    let ize= document.getElementById("izenburua");
    ize.value = datubasea[index].izenburua;

    let eg= document.getElementById("egilea");
    eg.value= innerHTML=datubasea[index].egilea;

    let is= document.getElementById("isbn");
    is.value=datubasea[index].isbn;

    let da= document.getElementById("data");
    da.value=datubasea[index].data;

    let besk = document.getElementById("esk");
    let bezk = document.getElementById("ezk");
    let bil = document.getElementById("bilatu");
    besk.onclick = function(){
        if(index<datubasea.length-1){
            bezk.disabled=false
            index++;
            iru.src= base + datubasea[index].filename;
            ize.value = datubasea[index].izenburua;
            eg.value= innerHTML=datubasea[index].egilea;
            is.value=datubasea[index].isbn;
            da.value=datubasea[index].data;
        }else{
          besk.disabled=true
        }
    }
    bezk.onclick = function(){
        if(index>0){
          besk.disabled=false
            index--;
            iru.src= base + datubasea[index].filename;
            ize.value = datubasea[index].izenburua;
            eg.value= innerHTML=datubasea[index].egilea;
            is.value=datubasea[index].isbn;
            da.value=datubasea[index].data;
        }else{
          bezk.disabled=true
        }
    }
    bil.onclick = function(){
      let isbn = document.getElementById("isbn").value;
      let aurkitu = false;
      for(let i=0; i<datubasea.length; i++){
        if(datubasea[i].isbn == isbn){
          aurkitu = true;
          index = i;
          iru.src= base + datubasea[index].filename;
          ize.value = datubasea[index].izenburua;
          eg.value= innerHTML=datubasea[index].egilea;
          is.value=datubasea[index].isbn;
          da.value=datubasea[index].data;
        }
      }
      if(!aurkitu){
        alert("Ez da aurkitu");
      }
    }

};
