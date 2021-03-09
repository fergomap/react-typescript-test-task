import React, { FunctionComponent, ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import ButtonComponent from 'components/button/button.component';
import InputComponent from 'components/input/input.component';
import { FORM_CONSTANTS } from 'config/form.config';
import { firebaseLogIn } from 'services/auth.service';
import './log-in.component.scss';
import {useDispatch} from 'react-redux';
import { HIDE_LOADING_ACTION, SHOW_LOADING_ACTION } from 'store/loading/actions';

interface LogInFormData {
	email: string,
	password: string,
}

const LogInComponent: FunctionComponent = (): ReactElement => {
    const dispatch = useDispatch();
	const { register, handleSubmit, errors } = useForm<LogInFormData>();
    const [ generalError, setGeneralError ] = useState<string>('');

    const logIn = (formData: LogInFormData): void => {
        dispatch(SHOW_LOADING_ACTION);

        firebaseLogIn(formData.email, formData.password)
            .catch(e => setGeneralError(e.message))
            .finally(() => dispatch(HIDE_LOADING_ACTION));
    };

    return <section className="log-in-component">
        <form className="form-container" noValidate={true} onSubmit={handleSubmit(logIn)} data-testid="form">
            <h2>Sign in</h2>
            <InputComponent error={errors.email?.message} field="email" label="Email" register={register} rules={FORM_CONSTANTS.VALIDATION_RULES.EMAIL} type="email" />
            <InputComponent error={errors.password?.message} field="password" label="Password" register={register} rules={FORM_CONSTANTS.VALIDATION_RULES.PASSWORD} type="password" />
            <ButtonComponent label="Log In" type="submit"/>
            { generalError && <p className="auth-error">{ generalError }</p> }
        </form>
    </section>;
}

export default LogInComponent;
