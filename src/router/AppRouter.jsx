import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useCheckAuth } from "../hook/useCheckAuth"

export const AppRouter = () => {

    const { status } = useCheckAuth()

    if (status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <Routes>

            {
                (status === 'auth')
                    ? < Route path="/*" element={<JournalRoutes />} />
                    : <Route path="/auth/*" element={<AuthRoutes />} />
            }

            <Route path='/*' element={<Navigate to='/auth/login' />} />

            {/* login and register */}
            {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}
            {/* JournalApp */}
            {/* <Route path="/*" element={<JournalRoutes />} /> */}

            <Route />
        </Routes>
    )
}
