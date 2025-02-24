import "./sixth.css"
import Seventh from "../seventh/seventh";
let Sixth = ()=>{
    return(
        <div className="sixthDiv">
            This is the content in Sixth component
            <Seventh/>
        </div>
    );
}
export default Sixth