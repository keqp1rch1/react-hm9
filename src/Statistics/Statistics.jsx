import React from 'react';
import styles from "./Statistics.module.css";

export default function Statistics({stats}) {
    return (
        <div>

                <p className={styles.pp}>UPLOAD STATS</p>

            <div className={styles.div1}>

            <ul>
                <li id={styles.first}>
                    <span className={styles.spann}>{stats[0].label}</span>
                    <span> {stats[0].percentage}</span>
                </li>
                <li id={styles.second}>
                    <span>{stats[1].label}</span>
                    <span> {stats[1].percentage}</span>
                </li>
                <li id={styles.third}>
                    <span>{stats[2].label}</span>
                    <span> {stats[2].percentage}</span>
                </li>
                <li id={styles.fourth}>
                    <span>{stats[3].label}</span>
                    <span> {stats[3].percentage}</span>
                </li>
            </ul>


            </div>

            
        </div>
    )
}
