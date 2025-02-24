import "./third.css"
import Fourth from "../four/four";
let Third = ()=>{
    return(
        <div className="thirdDiv">This is the content in the Third component
        <Fourth/>
        </div>
    );
}
export default Third