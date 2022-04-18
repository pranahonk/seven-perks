
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

