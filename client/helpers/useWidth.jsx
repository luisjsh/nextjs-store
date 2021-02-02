import {useState, useEffect} from 'react'
import {debounce} from 'lodash'

function UseWidth() {
    const [width, setWidth] = useState(0)

    useEffect(()=>{
        const setSize = ()=>{
            setWidth(window.innerWidth)
        }
        setSize()
    }, [])

    useEffect(()=>{
        const handleResize = debounce ( () => {
            setWidth(window.innerWidth)
        }
        , 300)

        window.addEventListener('resize', handleResize)

        return ()=> window.removeEventListener('resize', handleResize)
    }, [])    
    
    return  width
}

export default UseWidth
