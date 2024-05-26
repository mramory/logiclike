import s from "@/scss/components/CourseCard.module.scss"
import { CourseType } from "@/types/courses"


interface CourseCardProps {
    course: CourseType
}

export const CourseCard = ({course}: CourseCardProps) => {
    return(
        <div className={s.container}>
            <div style={{backgroundColor: course.bgColor}}>
                <img src={course.image} />
            </div>
            <p>{course.name}</p>
        </div>
    )
}