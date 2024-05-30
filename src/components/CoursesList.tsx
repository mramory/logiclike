import s from "@/scss/components/CoursesList.module.scss"
import { CourseCard } from "./CourseCard"
import { CourseType } from "@/types/courses"
import { useIfHasScrollbar } from "@/hooks/useIfHasScrollbar"
import { useRestoreScroll } from "@/hooks/useRestoreScroll"
import mergeRefs from "@/lib/mergeRefs"


interface CoursesListProps {
    courses: Array<CourseType>
}

export const CoursesList = ({courses}: CoursesListProps) => {
    const hasScrollbarRef = useIfHasScrollbar()
    const restoreScrollRef = useRestoreScroll()
    return(
        <ul ref={mergeRefs(hasScrollbarRef, restoreScrollRef)} className={s.container}>
            {courses.map((course) => (
                <li key={course.id}>
                    <CourseCard course={course} />
                </li>
            ))}
        </ul>
    )
}