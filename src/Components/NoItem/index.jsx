import noItem  from "./assets/NoCard.svg";

export function NoItem(){

    return (

        <>
            <h3>You don´t have any input to show at the moment</h3>
            <img src={noItem}></img>
        </>
    )


}