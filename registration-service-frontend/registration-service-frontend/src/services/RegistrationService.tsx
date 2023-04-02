
class RegistrationService {
    static baseUrl = "http://localhost:8080/start-register";

    async startRegistration() {
        const response = await fetch(`${RegistrationService.baseUrl}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.text();
    }

    async registerUser(registerData: any) {
        const response = await fetch(`${RegistrationService.baseUrl}/register-user`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerData), // body data type must match "Content-Type" header
        });

        const responseFromHandler = await this.responseHandler(response);
        return await responseFromHandler.json();
    }

    async responseHandler(response: Response): Promise<Response> {
        return new Response();
    }

}

export default new RegistrationService();

