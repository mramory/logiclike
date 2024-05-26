import { fetchWrapper } from "@/lib/fetchWrapper"
import { CourseType } from "@/types/courses"

export const getCourses = async () => {
    const response = await fetchWrapper<Array<CourseType>>(import.meta.env.VITE_API_URL+"/courses.json", {
        method: "GET"
    })
    return response
}