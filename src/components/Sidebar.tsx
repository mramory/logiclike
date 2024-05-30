import s from "@/scss/components/Sidebar.module.scss"
import { Link } from "@tanstack/react-router"
import { memo } from "react"

interface SidebarProps {
    tags: Set<string>
}

export const Sidebar = memo(({tags}: SidebarProps) => {
    return(
        <aside className={s.container}>
            <SidebarItem value="Все темы" />
            {Array.from(tags).map(tag => <SidebarItem key={tag} value={tag} />)}
        </aside>
    )
})


interface SidebarItemProps {
    value: string
}

const SidebarItem = ({value}: SidebarItemProps) => {
    return(
        <Link resetScroll={false} activeProps={{className: s.active}} search={{tag: value}} className={s.item}>
            {value}
        </Link>
    )
}