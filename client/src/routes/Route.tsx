import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Wellcome } from "../features";


const RouteWeb = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wellcome" element={<Wellcome />} />

            </Routes>
        </BrowserRouter>

    )
}

export default RouteWeb