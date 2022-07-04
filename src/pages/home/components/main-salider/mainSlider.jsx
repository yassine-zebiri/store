import Classes from "./classes";
import Login from "./login";
import MultipleItems from "./MultipleItems";

export default function MainSlider(){
    return(
        <div className="main-row">
            <div className="box-2">
                <Login/>
                <Login/>
            </div>
            <div className="main-salider">
                <MultipleItems/>
                <div className="box-1">
                </div>
            </div>
            <div className="box">
                <Classes/>
            </div>
        </div>
    )
}