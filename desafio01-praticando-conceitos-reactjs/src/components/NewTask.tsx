import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'

export function NewTask(){
    return(
        <main className={styles.main}>
            <form>
                <input type="text" name="" placeholder='Adicione uma tarefa'/>

                <footer>
                    <button type="submit">
                        Criar
                        <PlusCircle size={16} />
                    </button>
                </footer>
            </form>
        
            <div className={styles.tasksContainer}>
                <div className={styles.newTask}>
                    Tarefas criadas
                    <span>0</span>
                </div>
                <div className={styles.taskDone}>
                    Concluídas
                    <span>0</span>
                </div>
            </div>
        </main>
    )
}