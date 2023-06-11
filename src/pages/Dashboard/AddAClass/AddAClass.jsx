import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting = import.meta.env.VITE_image_token;
const AddAClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.class_picture[0])
        

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgRes =>{
            if(imgRes.success){
                const imgURL = imgRes.data.display_url;
                const {class_name, instractor_name, students, price, seats,  email, status} = data;
                const newClass = {class_name, instractor_name, email, status, students: parseFloat(students), price: parseFloat(price), seats: parseFloat(seats), class_picture: imgURL}
                console.log(newClass);
                axiosSecure.post('/classes', newClass)
                .then(data =>{
                    if(data.data.insertedId){
                        reset()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
        
    }
    

    return (
        <div className="w-full">
            <Helmet>
                <title> shine on summer || Add a class</title>
            </Helmet>
            <h4 className="text-sky-500 font-bold text-3xl text-center">ADD A CLASS</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center gap-10 w-full">
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text"
                                {...register("class_name", { required: true })}
                                name="class_name" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="file"
                            {...register("class_picture", { required: true })}
                             name="class_picture" className="file-input file-input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Students</span>
                            </label>
                            <input type="number" 
                            {...register("students", { required: true })}
                            name="students" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number"
                            {...register("price", { required: true })}
                             name="price" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                    </div>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Seats</span>
                            </label>
                            <input type="number"
                            {...register("seats", { required: true })}
                             name="seats" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Instractor name</span>
                            </label>
                            <input type="text" 
                            {...register("instractor_name", { required: true })}
                            defaultValue={user.displayName}
                            name="instractor_name" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text"> Instructor Email</span>
                            </label>
                            <input type="email"
                            {...register("email", { required: true })}
                            defaultValue={user?.email}
                             name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text"> Status</span>
                            </label>
                            <input type="text"
                            {...register("status", { required: true })}
                            defaultValue="pending"
                             name="status" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div>

                            <input type="submit" value="Add Class" className="btn btn-success mt-3 w-full" />

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddAClass;