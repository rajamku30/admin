import axios from "axios";
import { sessionService } from "redux-react-session";

export const loginUser = (credencials, history, setFielsError, setSubmitting) => {
    return () => {
        axios.post("URL",
        credencials,
        {
            history: {
                "content-type" : "application/json"
            }
        })
        .then((response) => {

            const {data} = response;

            if (data.status === "FAILED") {
                const {message} = data;
                setFielsError("email", "Error Occured")
            } else if (data.status === "SUCCESS") {
                const token = "123456789";
                console.log("Save",token);
                sessionService.saveSession(token).then(() => {
                    history.push("/admin/dashboard");
                }).catch(err => console.log("Session Error",err))
            }

        //complete submission
        setSubmitting(false);

        })
        .catch(err => {
            const token = "123456789";
            const userData = {
                name: "Raja Ramasamy",
                email: "test@gmail.com",
            };
            sessionService.saveSession(token).then(() => {
                sessionService.saveUser(userData).then(() => {
                    history.push("/admin/dashboard");
                }).catch(err => console.log(err))
            }).catch(err => console.log(err))

            //complete submission
            setSubmitting(false);
        })
    }
}

export const signupUser = (credencials, history, setFielsError, setSubmitting) => {
    history.push("/login");
}


export const logoutUser = (history) => {
    sessionService.deleteSession();
    sessionService.deleteUser();
    history.push('/');
}