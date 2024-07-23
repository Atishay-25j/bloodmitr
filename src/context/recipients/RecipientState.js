import { useEffect, useState } from "react";
import recipientContext from "./recipientContext";

const RecipientState = (props)=>{

    const initialRecipients = [];
    const [recipients, setRecipients] = useState(initialRecipients);
    const LINK = process.env.REACT_APP_LINK;

    useEffect(() => {
        console.log(recipients)

    }, [recipients]);

    

    const addRecipient = async (pname, page, pemail, pphone, paddress, pgender, bloodGroup, reqDate, state, city) => {
        // console.log("InDnorState");
        const response = await fetch(`${LINK}/api/recipient/createRecipient`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({pname, page, pemail, pphone, paddress, pgender, bloodGroup,reqDate, state, city }),
        })


        const recipient = await response.json();

        

        setRecipients(recipients.concat(recipient));
        
        console.log(recipient)
    }

    return (
        <recipientContext.Provider value={{ recipients, addRecipient }}>
            {props.children}
        </recipientContext.Provider>
    )
}
export default RecipientState;
