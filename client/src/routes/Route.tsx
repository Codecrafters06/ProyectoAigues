import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Avatars, Instructions, Intro, Login, Profile, Ranking, Register, RoadMap, Status, Trivia, ScenariesAqua, ScenariesGotas, ScenariesEco, TriviaPageAquaMuseum, TriviaPageAquaSource, TriviaPageEcoMuseum,TriviaPageEcoSource, TriviaPageGotasMuseum, TriviaPageGotasSource  } from "../features";


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
                {/* <Route path="/scenaries" element={<Scenaries />} /> */}
                <Route path="/scenaries-aqua" element={<ScenariesAqua />} />
                <Route path="/scenaries-gotas" element={<ScenariesGotas />} />
                <Route path="/scenaries-eco" element={<ScenariesEco />} />
                <Route path="/status" element={<Status />} />
                <Route path="/trivia-aqua-museum" element={<TriviaPageAquaMuseum />} />
                <Route path="/trivia-aqua-source" element={<TriviaPageAquaSource />} />
                <Route path="/trivia-eco-museum" element={<TriviaPageEcoMuseum />} />
                <Route path="/trivia-eco-source" element={<TriviaPageEcoSource />} />
                <Route path="/trivia-gotas-museum" element={<TriviaPageGotasMuseum />} />
                <Route path="/trivia-gotas-source" element={<TriviaPageGotasSource />} />

            </Routes>
        </BrowserRouter>

    )
}

export default RouteWeb