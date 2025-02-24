import "./first.css"
import Second from "../second/second";
let First = ()=>{
    return(
        <div className="firstDiv">
            This is the Div in First component
            <Second/>
        </div>
    );
}
export default First