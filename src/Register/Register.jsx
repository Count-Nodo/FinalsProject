

import React from 'react';
import useFormValidation from '../useFormValidation'; 
import './Register.css'; 

const Register = () => {
    const {
        register,
        handleSubmit,
        errors,
        validateEmail,
        validateYear,
        validateHistoryFact,
        onSubmit
    } = useFormValidation(); 

    return (
        <div className="register-container">
            <h2>Send a Fun History Fact</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <p className="error-message">{errors.name.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', {
                            validate: validateEmail
                        })}
                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        id="year"
                        {...register('year', {
                            validate: validateYear
                        })}
                    />
                    {errors.year && <p className="error-message">{errors.year.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="fact">History Fact:</label>
                    <textarea
                        id="fact"
                        {...register('fact', {
                            validate: validateHistoryFact
                        })}
                    />
                    {errors.fact && <p className="error-message">{errors.fact.message}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;
