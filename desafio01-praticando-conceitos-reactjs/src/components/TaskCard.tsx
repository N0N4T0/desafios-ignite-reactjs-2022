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
            <button><CheckCircle size={24}/></button>
            <p>Ineger urna interdum massa libero auctor neque turpis turpis semper</p>
            <button><Trash size={24}/></button>
        </li>
    )
}