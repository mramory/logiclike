import { createFileRoute } from "@tanstack/react-router";
import s from "@/scss/pages/IndexPage.module.scss";
import { Sidebar } from "@/components/Sidebar";
import { CoursesList } from "@/components/CoursesList";
import { getCourses } from "@/requests/courses";
import { useMemo } from "react";
import { PendingComponent } from "@/components/PendingComponent";

export const Route = createFileRoute("/")({
  component: Index,
  pendingComponent: () => <PendingComponent />,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tag: search.tag as string || "Все темы"
    }
  },
  loaderDeps: ({ search: { tag } }) => ({ tag }),
  loader: ({deps: {tag}}) => getCourses().then(res => {
    const tags = new Set(res.body.map(course => course.tags).flat())
    if(tag === "Все темы"){
      return {
        courses: res.body,
        tags
      }
    }
    else{
      return {
        courses: res.body.filter(course => course.tags.includes(tag)),
        tags
      }
    }
  }),
});

function Index() {
  const {courses, tags} = Route.useLoaderData()

  const memoTags = useMemo(() => tags, [])

  return (
    <div className={s.wrapper}>
      <Sidebar tags={memoTags} />
      <main className={s.container}>
        <CoursesList courses={courses}/>
      </main>
    </div>
  );
}
