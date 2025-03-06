import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const ApplyTrainer = () => {
    const {user} = useAuth()
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <div className='max-w-xl mx-auto border rounded-2xl w-full'>
                <form onSubmit={handleSubmit(onSubmit)} className="m-10 space-y-2">
                    <h1 className="text-2xl font-bold text-center">Apply For Trainer</h1>

                    <label className="floating-label">
                        <span>Full Name</span>
                        <input {...register("fullName")} type="text" placeholder="Full Name" className="input input-md w-full" />
                    </label>

                    <label className="floating-label">
                        <span>Email</span>
                        <input {...register("email")} defaultValue={user?.email}  type="text" placeholder="Your Email" className="input input-md w-full" readOnly  />
                    </label>

                    <label className="floating-label">
                        <span>Age</span>
                        <input {...register("age")} type="number" placeholder="Your Age" className="input input-md w-full" />
                    </label>

                    <label className="floating-label">
              
                        <input {...register("profileImage")} type="file" className="file-input file-input-md w-full" />
                    </label>

                    <label className=" flex  items-center  gap-4">
                        <span className=' '>Skills:</span>
                        <div className=" flex gap-3  ">
                            <label className='flex gap-1 items-center'>
                                <input {...register("skills")} type="checkbox" value="Yoga" /> Yoga
                            </label>
                            <label className='flex gap-1 items-center'>
                                <input {...register("skills")} type="checkbox" value="Pilates" /> Pilates
                            </label>
                            <label className='flex gap-1 items-center'>
                                <input {...register("skills")} type="checkbox" value="Strength Training" /> Strength Training
                            </label>
                            <label className='flex gap-1 items-center'>
                                <input {...register("skills")} type="checkbox" value="Cardio" /> Cardio
                            </label>
                        </div>
                    </label>

                    <label className="flex flex-col gap-1">
                        <span>Available Days a Week:</span>
                        <div className="flex items-center ">
                            <label className='flex items-center  mx-2'>
                                <input {...register("availableDays")} type="checkbox" value="Sun" /> Sun
                            </label>
                            <label className='flex items-center  mx-2'>
                                <input {...register("availableDays")} type="checkbox" value="Mon" /> Mon
                            </label>
                            <label className='flex items-center  mx-2'>
                                <input {...register("availableDays")} type="checkbox" value="Tue" /> Tue
                            </label>
                            <label className='flex items-center  mx-2'>
                                <input {...register("availableDays")} type="checkbox" value="Wed" /> Wed
                            </label>
                            <label className='flex items-center  mx-2'>
                                <input {...register("availableDays")} type="checkbox" value="Thu" /> Thu
                            </label>
                            <label className='flex items-center  mx-2'>
                                <input {...register("availableDays")} type="checkbox" value="Fri" /> Fri
                            </label>
                            <label className='flex items-center  mx-2'>
                                <input {...register("availableDays")} type="checkbox" value="Sat" /> Sat
                            </label>
                        </div>
                    </label>

                    <label className="floating-label">
                        <span>Available Time in a Day</span>
                        <input {...register("availableTime")} type="text" placeholder="Available Time" className="input input-md w-full" />
                    </label>

                    <label className="floating-label">
                        <span>Other Info</span>
                        <textarea {...register("otherInfo")} placeholder="Other Info" className="textarea textarea-md w-full"></textarea>
                    </label>

                    <label className="floating-label">
                        <input type="submit" value='Apply' className="btn btn-md" />
                    </label>
                </form>
            </div>
        </div>
    );
};

export default ApplyTrainer;