import s from "@/scss/components/Sidebar.module.scss"
import { Link } from "@tanstack/react-router"
import { memo } from "react"

export const Sidebar = memo(() => {
    return(
        <aside className={s.container}>
            <SidebarItem value="Все темы" />
            <SidebarItem value="Логика и мышление" />
            <SidebarItem value="Загадки" />
            <SidebarItem value="Головоломки" />
            <SidebarItem value="Путешествия" />
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