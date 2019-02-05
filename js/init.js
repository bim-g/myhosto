function $(id){
    return document.getElementById(id);
}
function $$(id){return document.getElementsByClassName(id);} 
function heureJour(){
    var j=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimenche"];
    var m =["Janvier","Fevrier","Marse","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
    var d = new Date();
    var jour =j[d.getDay()-1]+" "+d.getDate()+" "+m[d.getMonth()]+" "+d.getFullYear(); 
    var temp =d.getHours()+":"+d.getMinutes()+":"+d.getUTCSeconds();
    $("activeTime").innerHTML=jour+"   "+temp;
    setTimeout(heureJour, 1000);
}
function quitter(){
    beforeExite();
    var q=confirm("Voulez-vous Vremant quittez?");
    if(q===true){
        alert("Quittez");
    }
}
function deconnection(){
    var q=confirm("Voulez-vous vous deconnectez?");
    if(q===true){
        alert("Deconnection");
    }
}
function togleMenu(){
    var minwidth="40px",maxwidth="100px";
    var state=window.localStorage.state===undefined?window.localStorage.setItem('state',true):false;
    var leftMenu=$$("left-bar");
    var textmenu =$$("text-menu");
    var newclass="";
    var ln =textmenu.length;
    var width=leftMenu[0].offsetWidth;
    if(state==true){
        width=leftMenu[0].offsetWidth;
    }
    var i=0;
    if(width>55){
        window.localStorage.setItem('state',true);
        leftMenu[0].style.width=minwidth;        
        for(;i<ln;i++){
            textmenu[i].style.display="none";
        }
    }else{
        setInterval(()=>{
            for(;i<ln;i++){
                textmenu[i].style.display="inline-block";
            } 
        },500)
        leftMenu[0].style.width=maxwidth;
    }
    leftMenu[0].style.transition =".5s all";
}
var beforeExite=()=>{
    var stateSave=window.localStorage.beforeExit;
    if(stateSave!==false){
        var q=window.confirm("veillez-enregistrer avant de quitter");
        if(q===false){
            close();
        }else{
            exit();
        }
    }
}
var startInputState=()=>{
    window.localStorage.setItem("beforeExit",true);
}
var endInputState=()=>{
    window.localStorage.setItem("beforeExit",false);
}
var listmalade=()=>{
    var list =$('listMalade');
    var malade=[
        {
            num:1,
            nom:"one",
            prenom:"moya",
            age:1,
            sexe:"f"
        },
        {
            num:2,
            nom:"DEUX",
            prenom:"two",
            age:2,
            sexe:"m"
        },
        {
            num:3,
            nom:"tatu",
            prenom:"trois",
            age:3,
            sexe:"f"
        }
    ];
    var result="";
    for(var x in malade){
        result+="<tr>"+
            "<td>"+malade[x].num+"</td>"+
            "<td>"+malade[x].nom+"</td>"+
            "<td>"+malade[x].prenom+"</td>"+
            "<td>"+malade[x].age+"</td>"+
            "<td>"+malade[x].sexe+"</td>"+
            "<td class=\"tab-edit btn-hover\"><i class=\"fa fa-pencil\"></i></td>"+
            "<td class=\"tab-trash btn-hover\"><i class=\"fa fa-trash-o\"></i></td></tr>";
    }
    list.innerHTML+=result;
}
function show(id){
    $(id).style.display="block";
}
function hide(id){
    $(id).style.display="none";
}
listmalade(togleMenu)
heureJour(window.localStorage.setItem("beforeExit",false));