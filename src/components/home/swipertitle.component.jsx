import styles from "./home.module.scss";

const SwiperTitle = () => {
  return (
    <div className={styles.title_container}>
      <div className={styles.title_line}></div>
      <h4 className={styles.title_text} >جدید ترین استیکر ها</h4>
      <div className={styles.title_line}></div>
    </div>
  );
};

export default SwiperTitle;
