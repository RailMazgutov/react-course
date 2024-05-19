import {useState} from "react";

export function useInput(defaultValue, validationFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);

    const [didEdit, setDidEdit] = useState(false);

    function handleInputChange(event) {
        setEnteredValue(event.target.value);
        setDidEdit(false);
    }

    function handlerInputBlur() {
        setDidEdit(true);
    }

    return {
        value: enteredValue,
        handleInputChange,
        handlerInputBlur,
        hasError: didEdit && validationFn(enteredValue)
    }
}