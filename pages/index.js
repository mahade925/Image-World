import Image from "next/image";
import Link from "next/link";
import styles from "../styles/index.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://api.unsplash.com/photos/?client_id=RgbvYAobryBKphBsjFcebaRUtgIB0497YfO7EJmBdms");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
  return (
    <>
      <h1 className={styles.indexTitle}>Image World</h1>
      {console.log(data)}
      <div className={styles.imageContainer}>
        {
          data.map((curElm) => {
            return (
              <div key={curElm.id} className={styles.img}>
                <Link href={`/details/${curElm.id}`}>
                  <Image src={curElm.urls.thumb} width="500" height="300"></Image>
                </Link>
              </div>
            )
          })
        }
      </div>
      <div class={styles.textCenter}>
          <button className={styles.btn}>Load More</button>
      </div>
    </>
  )
};

export default index;

