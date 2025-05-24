import styles from "./index.module.scss";

interface QuickSelectLink {
    strArea: string;
}

interface QuickSelectProps {
    headline: string;
    items: QuickSelectLink[];
}

const QuickSelect = ({ headline, items }: QuickSelectProps) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.headline}>{headline}</h2>
            <div className={styles.links}>
                {items.map(({ strArea }) => {
                    return (
                        <button key={strArea} className={styles.button}>
                            {strArea}
                        </button>
                    )

                })}
            </div>
        </div>
    )
}

export default QuickSelect;