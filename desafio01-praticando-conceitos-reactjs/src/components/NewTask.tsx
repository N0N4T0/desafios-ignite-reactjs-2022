import styles from './NewTask.module.css'

export function NewTask(){
    return(
        <main className={styles.main}>
            <form>
                <input type="text" name="" />

                <footer>
                    <button type="submit">
                        Criar
                    </button>
                </footer>
            </form>
        
        </main>
    )
}