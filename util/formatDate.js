process.env.TZ = 'America/Guayaquil';

//const moment_locate = require("../libs/moment_timezone")

let getFecha_format = (fecha)=>
{

    var new_fecha = new Date(fecha)


    var dia = new_fecha.getDate();

    var mes = new_fecha.getMonth();

    mes += 1

    var min = new_fecha.getMinutes()
    var hour = new_fecha.getHours()
    var seg = new_fecha.getSeconds()

    if(dia<10)
    {
        dia = "0"+dia;
    }
    if(mes<10)
    {
        mes = "0"+mes;
    }

    if(hour<10)
    {
        hour = "0"+hour;
    }

    if(min<10)
    {
        min = "0"+min;
    }

    if(seg<10)
    {
        seg = "0"+seg;
    }



    return (new_fecha.getFullYear()+"-"+mes+"-"+dia+" "+hour+":"+min+":"+seg)

    //return moment_constr.subtract(10, 'days').calendar();
}

let getHora = (fecha)=>
{
    var horas = new Date(fecha)

    var min = horas.getMinutes()
    var hour = horas.getHours()
    var seg = horas.getSeconds()

    if(hour<10)
    {
        hour = "0"+hour;
    }

    if(min<10)
    {
        min = "0"+min;
    }

    if(seg<10)
    {
        seg = "0"+seg;
    }

    return (hour +":"+min+":"+seg)
}


let getFechaDiaAnterior = ()=>
{
    let hoy = new Date()
    let DIA_EN_MILISEGUNDOS = 24 * 60 * 60* 1000
    let ayer = new Date(hoy.getTime() - DIA_EN_MILISEGUNDOS)
    return ayer
}

let getFecha_dd_mm_yyyy = (fecha)=>
{


    var fecha_ = new Date(fecha)


    var dia = fecha_.getDate();

    var mes = fecha_.getMonth();

    mes =mes +1;

    if(dia<10)
    {
        dia = "0"+dia;
    }
    if(mes<10)
    {
        mes = "0"+mes;
    }

    return (fecha_.getFullYear()+"-"+mes+"-"+dia)
}

let getMin_diferencia = (fechaProg,fechaMarc)=>
{
    var fechaPro = new Date(fechaProg)
    var fechaMar = new Date(fechaMarc)

    //console.log(fechaPro+ " ---> " +fechaMar)

    var min = fechaPro.getMinutes() - fechaMar.getMinutes()

    if((-1*min)>=0)
    {
        //console.log("Minutos : "+Math.abs(min))
        return Math.abs(min)
    }
    return null
}

let getFecha_dd_mm_yyyy_to_String = (fecha)=>
{
    var fecha_ = new Date(fecha)
    var dia = fecha_.getDay() ;
    var mes = fecha_.getMonth();
    mes = mes + 1;
    var diaTexto = "DOMINGO"
    var mesTexto = "ENERO"

    switch (dia)
    {
        case 1:
            diaTexto = "LUNES"
            break;
        case 2:
            diaTexto = "MARTES"
            break;
        case 3:
            diaTexto = "MIERCOLES"
            break;
        case 4:
            diaTexto = "JUEVES"
            break;
        case 5:
            diaTexto = "VIERNES"
            break;
        case 6:
            diaTexto = "SABADO"
            break;
        case 7:
            diaTexto = "DOMINGO"
            break;
    }

    switch (mes) {
        case 1:
            mesTexto = "ENERO"
            break;
        case 2:
            mesTexto = "FEBRERO"
            break;
        case 3:
            mesTexto = "MARZO"
            break;
        case 4:
            mesTexto = "ABRIL"
            break;
        case 5:
            mesTexto = "MAYO"
            break;
        case 6:
            mesTexto = "JUNIO"
            break;
        case 7:
            mesTexto = "JULIO"
            break;
        case 8:
            mesTexto = "AGOSTO"
            break;
        case 9:
            mesTexto = "SEPTIEMBRE"
            break;
        case 10:
            mesTexto = "OCTUBRE"
            break;
        case 11:
            mesTexto = "NOVIEMBRE"
            break;
        case 12:
            mesTexto = "DICIEMBRE"
            break;
    }

    //console.log("MES : "+mes)
    //
    // console.log("DIA : "+dia)

    return diaTexto+","+fecha_.getDate()+" DE "+mesTexto+", "+fecha_.getFullYear()

}


let getSeg_diferencia = (fechaProg,fechaMarc)=>
{
    var fechaPro = new Date(fechaProg)
    var fechaMar = new Date(fechaMarc)

    //console.log(fechaPro+ " ---> " +fechaMar)
    var seg = fechaPro.getSeconds() - fechaMar.getSeconds()

    if((-1*seg>=0))
    {
        //console.log("Segundos : "+Math.abs(seg))
        return Math.abs(seg)
    }
    return null
}

let getFechaActual = ()=>
{
    var  fecha  = new Date();
    var mes = (fecha.getMonth()+1)
    var day = fecha.getDay()
    var format = fecha.getFullYear()+"-"+(mes<10 ? "0"+mes : mes)+"-"+(day<10 ? "0"+day : day)
    //console.log(format)
    return format
}

let getFechaHoraActual = ()=>
{
    var  fecha  = new Date();
    var mes = (fecha.getMonth()+1)
    var day = fecha.getDay()
    var hora = fecha.getHours()
    var minutos = fecha.getMinutes()
    var segundos = fecha.getSeconds()
    var format = fecha.getFullYear()+"-"+(mes<10 ? "0"+mes : mes)+"-"+(day<10 ? "0"+day : day)+" "
        +(hora<10 ? "0"+hora : hora)+":"+(minutos<10 ? "0"+minutos : minutos)+":"+(segundos<10 ? "0"+segundos : segundos)
    //console.log(format)
    return format
}



let suma = (date_1 , date_2)=>
{
    var datetime1 = date_create(date_1);
    var datetime2 = date_create(date_2);

    var interval = (datetime1 + datetime2);

    return interval;

}

let suma_horas = (hora1,hora2)=>{

    var hora1 = hora1.split(":")
    var hora2 = hora2.split(":")
    var temp=0;

    //sumo segundos
    var segundos= parseInt(hora1[2])+parseInt(hora2[2]);
    while(segundos>=60)
    {
        segundos=segundos-60;
        temp++;
    }

    //sumo minutos
    var minutos=parseInt(hora1[1])+parseInt(hora2[1])+temp;
    var temp=0;
    while(minutos>=60){
        minutos=minutos-60;
        temp++;
    }

    //sumo horas
    var horas=parseInt(hora1[0])+parseInt(hora1[0])+temp;

    if(horas<10)
        horas= '0'+horas;

    if(minutos<10)
        minutos= '0'+minutos;

    if(segundos<10)
        segundos= '0'+segundos;

    var sum_hrs = horas+':'+minutos+':'+segundos;

    return (sum_hrs);

}

let convertSecondtoTimeString = (seconds)=>
{
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10) ? '0' + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10) ? '0' + second : second;
    return hour + ':' + minute + ':' + second;
}


let convertToDateTimefromEpochSeconds = (fecha_hora)=>
{
    var milliseconds = 5 * 60 * 60 * 1000
    var dateObj = new Date(fecha_hora);
    dateObj.setHours(dateObj.getHours() - 5)
    /*dateObj.setMinutes(dateObj.getMinutes() - 1) // LE RESTO 1 MINUTO*/
    var epochSeconds = (dateObj.getTime()) / 1000; // Divide by 1000 to get seconds
    console.log("EPOCHTIME SECONS : "+epochSeconds)
    return epochSeconds;
}

module.exports = {getFecha_format,getHora,getFecha_dd_mm_yyyy,getMin_diferencia,getSeg_diferencia,
    suma_horas,getFechaDiaAnterior,getFechaHoraActual,
    getFechaActual,getFecha_dd_mm_yyyy_to_String,convertSecondtoTimeString,convertToDateTimefromEpochSeconds}