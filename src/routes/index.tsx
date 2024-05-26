import { createFileRoute } from "@tanstack/react-router";
import s from "@/scss/pages/IndexPage.module.scss";
import { Sidebar } from "@/components/Sidebar";
import { CoursesList } from "@/components/CoursesList";
import { getCourses } from "@/requests/courses";

export const Route = createFileRoute("/")({
  component: Index,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tag: search.tag as string || "Все темы"
    }
  },
  loaderDeps: ({ search: { tag } }) => ({ tag }),
  loader: ({deps: {tag}}) => getCourses().then(res => {
    if(tag === "Все темы"){
      return res.body
    }
    else{
      return res.body.filter(course => course.tags.includes(tag))
    }
  }),
});

function Index() {
  const courses = Route.useLoaderData()
  return (
    <div className={s.wrapper}>
      <Sidebar />
      <main className={s.container}>
        <CoursesList courses={courses}/>
      </main>
    </div>
  );
}
