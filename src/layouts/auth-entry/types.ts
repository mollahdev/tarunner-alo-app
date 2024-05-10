import type { Dispatch, SetStateAction } from "react"

interface ContextValues {
    setTitle: Dispatch<SetStateAction<string>>
}

export type AuthEntryContext = ContextValues[keyof ContextValues][]