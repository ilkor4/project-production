import { Suspense} from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from '../theme/useTheme';
import { MainPageAsync } from '../pages/MainPage/MainPage.async';
import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async';
import '../styles/index.scss';
import { classNames } from '../helpers/classNames/classNames';

export  const App = () => {
    const { theme, toggleTheme }  = useTheme();

    return(
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>На главную</Link>
            <Link to={'/about'}>О проекте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />}/>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    )
}