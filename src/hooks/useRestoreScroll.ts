import { useSearch } from "@tanstack/react-router"
import { useEffect, useRef } from "react"

export const useRestoreScroll = () => {
    const search = useSearch({from: "/"})
    const ref = useRef<HTMLUListElement>(null)
    useEffect(() => {
        if(ref.current){
            console.log("scroll")
            ref.current.scrollTo({top: 0, behavior: "smooth"})
        }
    }, [ref, search])

    return ref
}