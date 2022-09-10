import Img01 from "./images/img01.jfif";
import Sector from "./Sector";
const Display = () => {
    return ( 
        <>
            <div className="display">
                <img src={Img01} alt="" width='100%' height='400px'/>
            </div>
            <div className="meme">
            <Sector></Sector>
            <Sector></Sector>
            <Sector></Sector>
            </div>
            
        </>
        
     );
}
 
export default Display;