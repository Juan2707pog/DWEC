let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

let fechaDeHoy = new Date();
let diaDeHoy = fechaDeHoy.getDate();
let mes = fechaDeHoy.getMonth();
let mesNuevo = fechaDeHoy.getMonth();
let año = fechaDeHoy.getFullYear();

let dates = document.getElementById('dates');

let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthD = document.getElementById('prev-month');
let nextMonthD = document.getElementById('next-month');

month.textContent = monthNames[mes];
year.textContent = año.toString();

prevMonthD.addEventListener('click', ()=>lastMonth());
nextMonthD.addEventListener('click', ()=>nextMonth());



const writeMonth = (month) => {

    for(let i = startDay(); i>0;i--){
        dates.innerHTML += ` <span class="item disabled">
            ${getTotalDays(mes-1)-(i-1)}
        </span>`;
    }

    for(let i=1; i<=getTotalDays(month); i++){
        if(i===diaDeHoy && month === mesNuevo) {
            dates.innerHTML += ` <span class="item today">${i}</span>`;
        }else{
            dates.innerHTML += ` <span class="item">${i}</span>`;
        }
    }
}

const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {
        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((año % 100 !==0) && (año % 4 === 0) || (año % 400 === 0));
}

const startDay = () => {
    let start = new Date(año, mes, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastMonth = () => {
    if(mes !== 0){
        mes--;
    }else{
        mes = 11;
        año--;
    }

    setNewDate();
}

const nextMonth = () => {
    if(mes !== 11){
        mes++;
    }else{
        mes = 0;
        año++;
    }

    setNewDate();
}

const setNewDate = () => {
    fechaDeHoy.setFullYear(año,mes,diaDeHoy);
    month.textContent = monthNames[mes];
    year.textContent = año.toString();
    dates.textContent = '';
    writeMonth(mes);
}

writeMonth(mes);