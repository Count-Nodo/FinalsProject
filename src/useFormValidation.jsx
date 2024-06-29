

import { useForm } from 'react-hook-form';

const useFormValidation = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const validateEmail = (value) => {
        if (!value) {
            return 'Email is required';
        }
        if (!/\S+@\S+\.\S+/.test(value)) {
            return 'Invalid email address';
        }
        return true;
    };

    const validateYear = (value) => {
        if (!value) {
            return 'Year is required';
        }
        const currentYear = new Date().getFullYear();
        if (value < 1000 || value > currentYear) {
            return `Enter a valid year between 1000 and ${currentYear}`;
        }
        return true;
    };

    const validateHistoryFact = (value) => {
        if (!value) {
            return 'History fact is required';
        }
        return true;
    };

    const onSubmit = (data, e) => {

        console.log(data);

        setTimeout(() => {
            console.log('Data sent successfully!');
            window.alert('Submitted successfully!');
            e.target.reset(); 
        }, 1000); 
    };

    return {
        register,
        handleSubmit,
        errors,
        validateEmail,
        validateYear,
        validateHistoryFact,
        onSubmit
    };
};

export default useFormValidation;
