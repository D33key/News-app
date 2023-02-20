import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';
import cl from '../styles/Login.module.css';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div className={cl.login__wrapper}>
            <div className={cl.login__items}>
                <h1>Страница для логина</h1>
                <form className={cl.login__form} onSubmit={login}>
                    <MyInput type="text" placeholder="Введите логин" />
                    <MyInput type="password" placeholder="Введите пароль" />
                    <MyButton>Войти</MyButton>
                </form>
            </div>
        </div>
    );
};

export default Login;