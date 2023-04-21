import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {updateToken} from "../../api/updateToken";
import {loginCall} from "../../api/loginCall";

const Login = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState<any>({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        loginCall(inputs).then(token => {
            updateToken(token.token);
            navigate('/burger-builder');
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={inputs.name || ""} onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" value={inputs.password || ""} onChange={handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Login;