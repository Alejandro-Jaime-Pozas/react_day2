import Nav from "./components/Nav";
import ToDo from "./components/ToDo";
// import ToDoForm from "./components/ToDoForm";

function App(props) {
    // return value for <> needs to be ONE ELEMENT, cannot be more than one
    return (
        <>
        <Nav />
        <div className='container'>
            <br></br>
            {/* ToDo below contains multiple elements, mainly the whole to-do functionality section */}
            <ToDo />
        </div>
        
        </>
    );
}

export default App;
