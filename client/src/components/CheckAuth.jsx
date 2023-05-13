import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const CheckAuth = ({children}) => {
    const user = useSelector(state => state.result.userID)
    return user ? children : <Navigate to={'/'} replace={true}></Navigate>
}

export default CheckAuth