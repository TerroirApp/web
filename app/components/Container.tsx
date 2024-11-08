import type { ReactNode } from "react";
import styles from "./Container.module.css";

export function PageContainer({ children }: { children: ReactNode }) {
    return <div className={styles.main}>{children}</div>;
}
