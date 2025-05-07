import Greeting from "./components/Greeting.jsx"
import Hello from "./components/Hello.jsx"
import JsxExample from "./components/JsxExample.jsx"
import Welcome from "./components/Welcome.jsx"

export function App() {

    return (
        <div className="App">

            <h1>Olá mundo</h1>
            <Hello nome={"CArlos"} />
            <JsxExample/>
            <Welcome nome={"Jonas"}/>

            <Greeting name="João" age={25}/>

        </div>
    )
}