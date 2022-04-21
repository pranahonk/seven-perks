
export const setColor = (category) =>{
    switch (category){
        case category === "sport":
            console.log(category)
            return "#F50057";
        case category === "lifestyle":
            return "#2196F3";
        case category === "culture":
            return "#FFCA28";
        default:
            return "#09357B";
    }

}

export const convertDate = (date) => {
    return date.replace(/T.*/,'').split('-').reverse().join('/')
}

export const isoStringToDate = (s) => {
    const b = s.split(/\D/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3]||0, b[4]||0, b[5]||0, b[6]||0));
}

export const getDayOfWeek = (s) =>{
    const getNum = isoStringToDate(s).getDay()

    switch (getNum){
        case 0:
            return "Sun "
        case 1:
            return "Mon "
        case 2:
            return "Tue "
        case 3:
            return "Wed "
        case 4:
            return "Thu "
        case 5:
            return "Fri "
        case 6:
            return "Sat "


    }
}


export const getHoursAndMinutes = (date) => {
    const d = new Date(date);
    return ` ${d.getHours()}.${d.getMinutes()}`
}

export const setSessionStorage = (data) => {

    let exist =  sessionStorage.getItem('bookmark');

    if (exist){
        const search =  JSON.parse(exist).findIndex(element => element.id === data.id);

        if(search === -1){
            let parsing = JSON.parse(exist);
            parsing.push(data)
            sessionStorage.setItem('bookmark', JSON.stringify(parsing));
        }

    }else{
        sessionStorage.setItem('bookmark', JSON.stringify([data]));
    }

}


export const getSessionStorage = (data) => {

    let exist =  sessionStorage.getItem('bookmark');

    if (exist){
        const search =  JSON.parse(exist).findIndex(element => element.id === data.id);

        return search > -1

    }else{
       return false
    }

}

