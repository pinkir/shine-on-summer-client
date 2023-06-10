import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const SocialLogin = () => {
    const { googleSignUp, setRefetch } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleGoogle = () => {
        googleSignUp()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                setRefetch(true);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                           
                            Swal.fire({
                                icon: 'success',
                                title: 'User SignUp successfully',

                            });
                            navigate(from, {replace: true})

                        }
                    })
            })
            .catch(error => {
                console.log("error", error.message)
            })
    }
    return (
        <div className="w-full text-center">
            <button onClick={handleGoogle} className="btn btn-success" ><FaGoogle></FaGoogle> Sign In With Google</button>
        </div>
    );
};

export default SocialLogin;