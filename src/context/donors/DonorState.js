import { useEffect, useState } from "react";
import donorContext from "./donorContext";

const DonorState = (props) => {
    const initialDonors = [];
    const [donors, setDonors] = useState(initialDonors);
    const LINK = process.env.REACT_APP_LINK;

    useEffect(() => {
        console.log(donors)

    }, [donors]);

    const getDonors = async () => {

    }

    const addDonor = async (name, age, email, phone, address, gender, bloodGroup, donationDate, state, city) => {
        console.log("InDnorState");
        const response = await fetch(`${LINK}/api/donor/createDonor`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({ name, age, email, phone, address, gender, bloodGroup, donationDate, state, city }),
        })
        // .then(function (response) {
        //     const donor = response.json();
        //     console.log({response:response});
        //     console.log({ donor: donor })
        //     console.log(donors)
        //     setDonors(donors.concat(donor));
        //     donors.map((donor)=>{
        //         console.log("name")
        //         console.log(donor.name)
        //     })
        // })

        const donor = await response.json();

        

        setDonors(donors.concat(donor));
        // console.log(donors);
        
    }
    return (
        <donorContext.Provider value={{ donors, addDonor }}>
            {props.children}
        </donorContext.Provider>
    )
}
export default DonorState;