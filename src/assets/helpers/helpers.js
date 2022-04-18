
export const setColor = (category = "sport") =>{

    switch (category){
        case "sport":
            return "#F50057";
        case "lifestyle":
            return "#2196F3";
        case "culture":
            return "#FFCA28";
        default:
            return "#09357B";
    }

}

