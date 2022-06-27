import styles from './TaskList.module.css'

import clipboard from '../assets/clipboard.svg'
import { useState } from 'react';

export function TaskList(){

    const [tasksDone, setTaksDone] = useState(0)
    const isEmptyTask = false

    return (
        <>
            <div className={styles.taskListContainer}>
                <div className={styles.newTask}>
                    Tarefas criadas
                    {/* <span>{numberOfTasksCreated}</span> */}
                    <span>0</span>
                </div>
                <div className={styles.taskDone}>
                    Concluídas
                    {/* <span>{numberOfTasksDone}</span> */}
                    <span>0</span>
                </div>
            </div>

            <div className={styles.taskCardContainer}>
                {isEmptyTask ? (
                    <>
                        <img src={clipboard} alt="Sem tarefas" />
                        <div className={styles.emptyMessage}>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </>
                ) : ('oi')}
            </div>
        </>
    )
}