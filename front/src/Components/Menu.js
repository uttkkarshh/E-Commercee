// JavaScript source code
function Menu({ name }) { 
    return (
        <div className="HomeMenu" >
        <div className="MenuIn">
        <img src={`${name}.jpg`} height="250px" width="250px"/>
        <h4 className="MenuHE">{name}</h4>
        </div>
     </div>
 
        );
}
export default Menu;