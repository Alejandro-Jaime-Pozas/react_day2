import Nav from "./components/Nav";
import Students from "./components/Students";
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
            {/* <ToDo /> */}
            {/* insert Students here */}
            <h1>Hello there</h1>
            <Students />
        </div>
        
        </>
    );
}

export default App;
