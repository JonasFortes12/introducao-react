import Greeting from "./components/Greeting.jsx"
import Hello from "./components/Hello.jsx"
import JsxExample from "./components/JsxExample.jsx"
import Welcome from "./components/Welcome.jsx"
import Counter from "./components/Counter.jsx"
import LoginControl from "./components/LoginControl.jsx"
import ToDoList from "./components/ToDoList.jsx"
import EventExample from "./components/EventExample.jsx"
import CounterEffect from "./components/CounterEffect.jsx"
import FormExample from "./components/FormExample.jsx"
import Message from "./components/Message.jsx"
import MessageList from "./components/MessageList.jsx"

export function App() {

    return (
        <div className="App">

            {/* <h1>Olá mundo</h1>
            <Hello nome={"CArlos"} />
            <JsxExample/>
            <Welcome nome={"José"}/>
            <Greeting name="João" age={25}/> */}
            {/* <Counter/> */}
            {/* <LoginControl/> */}
            {/* <ToDoList/> */}
            {/* <EventExample/> */}
            {/* <CounterEffect/> */}
            {/* <FormExample/> */}

            {/* <Message text={'Olá mundo!'} onDismiss={()=>{alert("Mensagem fechada")}}/> */}

            <MessageList/>    


        </div>
    )
}