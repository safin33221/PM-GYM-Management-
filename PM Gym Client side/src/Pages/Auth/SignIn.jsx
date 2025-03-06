import { useForm } from "react-hook-form";

const SignIn = () => {
    const { register, handleSubmit, watch } = useForm()
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <div className="max-w-xl rounded-xl shadow-2xl mx-auto  w-full flex justify-center items-center">

                <form onSubmit={handleSubmit(onSubmit)} className="m-10  space-y-2 w-full">

                    <label className="floating-label ">
                        <span>Your Email</span>
                        <input {...register("email")} type="text" placeholder="Your Eamil" className="input input-md w-full" />
                    </label>
                    <label className="floating-label">
                        <span>Password</span>
                        <input {...register('password')} type="text" placeholder="Password" className="input input-md w-full " />
                    </label>
                    <label className="floating-label">

                        <input type="submit" value='Sing In' className="btn btn-md" />
                    </label>

                </form>
            </div>
        </div>
    );
};

export default SignIn;