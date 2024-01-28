import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import styles from'./Dialog.module.css'
function Dialog({name="Имя",text="Текст",id}){
    return(
        <div className={styles.dialog}>
            <NavLink className={styles.link} to={`/dialogs/${id}`}>{name}</NavLink>
            <p>{text}</p>
        </div>
    )
}
export default Dialog