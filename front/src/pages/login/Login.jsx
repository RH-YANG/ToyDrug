import React from 'react';
import { useForm } from 'react-hook-form';

import style from './Login.module.scss';
import { login } from '../../api/golem_api';



const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (formData) => {
        const result = await login(formData);
        console.log(result)
    };

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <label className={style.label_input}>
                email
                <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                />
                <span>{errors.email ? errors.email.message : ' '}</span>
            </label>

            <label className={style.label_input}>
                &nbsp; pwd
                <input
                    type="password"
                    {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <span>{errors.password.message}</span>}
            </label>

            <label className={style.label_checkbox}>
                <span>Stay signed in</span>
                <input
                    type="checkbox"
                    {...register('autoLogin')}
                />
            </label>
            <div className={style.button_group}>
                <button type="submit">login</button>
                <button type="button">donno</button>
            </div>
        </form>
    );
};

export default Login;
