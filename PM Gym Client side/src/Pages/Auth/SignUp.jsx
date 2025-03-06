import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../api/Utils";

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const onSubmit = async data => {
        const imgUrl = await imageUpload(data.photo[0])
        try {

            await createUser(data.email, data.password)
            await updateUserProfile(data.name, imgUrl)
            navigate('/')


        } catch (error) {
            console.log(error);
        }


    }
    return (
        <div>
            <div className="max-w-xl rounded-xl shadow-2xl mx-auto  w-full flex justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="m-10  space-y-2 w-full">
                    <h1 className="text-2xl font-bold text-center">Sign Up Now !</h1>

                    <label className="floating-label ">
                        <span>Your Name</span>
                        <input {...register("name")} type="text" placeholder="Your Name" className="input input-md w-full" />
                    </label>
                    <label className="floating-label ">

                        <input {...register("photo")} type="file" placeholder="Your Eamil" className="file-input file-input-md w-full" />
                    </label>
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
                    <p>Already Have an account? <Link to={`/sign-In`} className="text-blue-600 underline">Sing Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;