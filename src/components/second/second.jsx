import "./second.css"
import Third from "../third/third";
let Second = ()=>{
    return(
        <div className="secondDiv">This is the content in Second component
        <Third/>
        </div>
    );
}
export default Second