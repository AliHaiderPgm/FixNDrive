import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard/index"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" index element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router