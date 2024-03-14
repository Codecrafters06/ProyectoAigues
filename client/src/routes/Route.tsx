import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Avatars, Instructions, Intro, Login, Profile, Ranking, Register, RoadMap, Scenaries, Status, Trivia,  } from "../features";


const RouteWeb = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/avatars" element={<Avatars />} />
                <Route path="/instructions" element={<Instructions />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/register" element={<Register />} />
                <Route path="/roadmap" element={<RoadMap />} />
                <Route path="/scenaries" element={<Scenaries />} />
                <Route path="/status" element={<Status />} />
                <Route path="/trivia" element={<Trivia />} />

            </Routes>
        </BrowserRouter>

    )
}

export default RouteWeb