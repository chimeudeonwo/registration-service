import React, {useEffect, useState} from 'react';
import registrationService from "../../services/RegistrationService";
export const RegisterStart = () => {
    const[startRegistration, setStartRegistration] = useState<string>();

    useEffect(() => {
        startRegistrationHandler().then();
    }, [])

    const startRegistrationHandler = async() => {
        const response = await registrationService.startRegistration();
        response && setStartRegistration(response)
    }

    return (
        <div>
            <p>Registration start page: {startRegistration}</p>
        </div>
    )
}