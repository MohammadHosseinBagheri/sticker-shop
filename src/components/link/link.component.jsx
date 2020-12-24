import Link from "next/link";
import styles from "./header.module.scss";

const MyLink = (props) => {
  const { href, title } = props;
  return (
    <Link  href={href}>
      <a className={`d-none d-md-flex ${styles.headerlink}`} >{title}</a>
    </Link>
  );
};

export default MyLink;
