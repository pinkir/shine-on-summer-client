import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import useAxiosSecure from "./useAxiosSecure"
import { useQuery } from "@tanstack/react-query"

const useInstructor =() =>{
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            console.log('ins res', res)
            return res.data.admin;
        }
    })
    return [isInstructor, isInstructorLoading]
}

export default useInstructor;