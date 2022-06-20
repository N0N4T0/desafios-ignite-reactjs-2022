import styles from './Task.module.css'

import clipboard from '../assets/clipboard.svg'

export function Task(){
    return (
        <div className={styles.container}>
            <img src={clipboard} alt="Sem tarefas" />
            <div className={styles.emptyMessage}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}