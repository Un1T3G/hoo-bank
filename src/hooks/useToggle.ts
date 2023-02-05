import React, { useState } from "react"

interface IProps{
    initialValue: boolean
}

export const useToggle = ({initialValue} : IProps) => {
    const [state, setState] = useState(initialValue)

    const toggle = () => setState(prev => !prev)

    return {
        state,
        toggle
    }
}