import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"
import { NavLink } from "react-router-dom"; 

export default function Nav(props) {
    return (
        <div className={styles.container}>
        
            <NavLink to={"/about"}> <button>About</button></NavLink>
            <NavLink to={"/home"}> <button>Home</button></NavLink>
            <NavLink to={"/Favorites"}> <button>Favorites</button></NavLink>
            <SearchBar
            onSearch={props.onSearch}
            />
        </div>
    );
 }
 