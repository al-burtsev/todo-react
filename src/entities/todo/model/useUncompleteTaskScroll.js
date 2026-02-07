import { useRef } from 'react'

const useUncompleteTaskScroll = (tasks) => {
    const firstUncompletedTaskRef = useRef(null)
    const firstUncompletedTaskId = tasks.find(({ isDone }) => !isDone)?.id

    return {
        firstUncompletedTaskRef,
        firstUncompletedTaskId
    }

}

export default useUncompleteTaskScroll