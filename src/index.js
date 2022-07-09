

import react from "react";
import reactDOM from "react-dom";

const App = () => {
    return <div> <h1>Hi there!</h1> </div>;
};

reactDOM.render(
    <App />,
    document.querySelector("#root")
);