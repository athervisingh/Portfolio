'use client';
import styles from './style.module.scss';
import Magnetic from '../../../../common/Magnetic';
export default function index() {
  
    return (
      <>
         <p className='text-xs relative top-10 left-4 opacity-50'>Social</p>
        <div  className={styles.header}>
         
            <div className={styles.nav}>
                <Magnetic>
                    <div className={styles.el}>
                        <a href='www.linkedin.com/in/athervi-singh'>Linkdin</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <a href='https://github.com/athervisingh'>GitHub</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <a href='https://x.com/AtherviSingh'>Twitter</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
            </div>
        </div>
  
        </>
    )
}