import { Route } from "react-router";
import Homepage from "./Homepage";
import Post from "./Post";

function App() {
    return (
        <>
            <Route exact path="/" component={Homepage}></Route>
            <Route path="/post/:id" component={Post}></Route>
        </>
    );
}

export default App;
