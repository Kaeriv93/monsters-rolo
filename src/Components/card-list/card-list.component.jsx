import './card-list.style.css'
import Card from "../card/card.component";

const Cardlist = ({monsters}) =>{
    return (
        <div className="card-list">
            {monsters.map(monster =>{
             //deconstructuring is so much better
            return(
                <Card monster={monster}/>
             )
            })}
        </div>
        )
}

export default Cardlist;