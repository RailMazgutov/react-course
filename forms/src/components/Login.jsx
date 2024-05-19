import {useInput} from "../hooks/useInput.js";
import {hasMinLength, isEmail} from "../util/validation.js";

export default function Login() {
    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handlerInputBlur: handleEmailBlur,
        hasError: emailHasError
    } = useInput('', isEmail);

    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handlerInputBlur: handlePasswordBlur,
        hasError: passwordHasError
    } = useInput('', (value) => hasMinLength(value, 6));

    function handleSubmit(event) {
        event.preventDefault();
        if (emailHasError || passwordHasError) {
            return;
        }
        console.log(emailValue, passwordValue);
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                        value={emailValue}/>
                    {emailHasError && <p>Please enter a valid email</p>}
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password"
                           type="password"
                           name="password"
                           onBlur={handlePasswordBlur}
                           onChange={handlePasswordChange}
                           value={passwordValue}/>
                    {passwordHasError && <p>Please enter a valid password</p>}
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
