import { CheckCircle, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './TaskCard.module.css'

interface TaskCardProps {
    content: string
}

export function TaskCard(props: TaskCardProps){
    const {content} = props

    return(
        <li className={styles.cardInformation}>
            <button className={styles.check}></button>
            <p>{content}</p>
            <button className={styles.trash}><Trash size={24}/></button>
        </li>
    )
}