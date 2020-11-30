import styles from "./gift.module.scss";
const GiftHeader = () => {
  return (
    <div className={styles.gift_header_container} >
      به  ملیا استیکر خوش اومدی :) اگر دفعه اولی هست که از ما خرید میکنی با استفاده
      ار کد  AVAL  از ما 10 درصد تخفیف بگیر. ارسال سفارش ها برای سفارش های تا
      آخر چهارشنبه هر هفته، جمعه ها (پیک) و شنبه ها (پست) خواهد بود.
    </div>
  );
};

export default GiftHeader;
