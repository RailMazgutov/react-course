import styles from './ErrorModal.module.css'

import ReactDOM from 'react-dom'

import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick}/>;
}

const Overlay = (props) => {
    return <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>;
}

const ErrorModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onConfirm}/>,
                document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <Overlay title={props.title}
                         message={props.message}
                         onConfirm={props.onConfirm}
                />,
                document.getElementById('overlay-root')
            )}
        </>
    );
}

export default ErrorModal;
