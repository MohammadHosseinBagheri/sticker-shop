import Link from "next/link";
import styles from "./header.module.scss";

const MyLink = (props) => {
  const { href, title } = props;
  return (
    <Link className={styles.headerlink} href={href}>
      <a>{title}</a>
    </Link>
  );
};

export default MyLink;
