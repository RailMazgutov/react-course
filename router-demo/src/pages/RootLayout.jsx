import {Outlet, useNavigation} from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

import classes from './RootLayout.module.css'

export default function RootLayout() {
    const navigation = useNavigation();
    return <>
        <MainNavigation />
        <main className={classes.content}>
            {navigation.state === 'loading' && <p>Loading...</p>}
            <Outlet />
        </main>
    </>;
}