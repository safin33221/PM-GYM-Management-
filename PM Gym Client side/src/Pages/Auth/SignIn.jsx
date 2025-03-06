import { useForm } from "react-hook-form";
import { Link } from "react-router";

const SignIn = () => {
    const { register, handleSubmit, watch } = useForm()
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <div className="max-w-xl rounded-xl shadow-2xl mx-auto  w-full flex justify-center items-center">

                <form onSubmit={handleSubmit(onSubmit)} className="m-10  space-y-2 w-full">
                    <h1 className="text-2xl font-bold text-center">Sign Up Now</h1>

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
                    <div className="border-t"></div>

                    <p>Don't Have an account? <Link to={`/sign-Up`} className="text-blue-600 underline">Sing UP</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;