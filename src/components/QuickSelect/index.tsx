import styles from "./index.module.scss";

interface QuickSelectLink {
    strArea: string;
}

interface QuickSelectProps {
    headline: string;
    items: QuickSelectLink[];
}

const QuickSelect = ({ headline, items }: QuickSelectProps) => {
    console.log('### links', items);

    return (
        <div className={styles.container}>
            <div>{headline}</div>
            <div className={styles.links}>
                {items.map(({ strArea }) => {
                    return (
                        <div key={strArea}>
                            {strArea}
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default QuickSelect;