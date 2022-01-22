import Image from "next/image";
import Link from "next/link";
import styles from "../styles/index.module.css";
import Head from "next/head";
import { useState } from "react";

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
  const [count, setCount] = useState(0);
  return (
    <>
      <Head>
        <title>Image World</title>
        <link rel="shortcut icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJqQKZY-TvCsSOSrBpXpm6vZU9J8_vqY4HA&usqp=CAU" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className={styles.indexTitle}>Image World {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
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
      <div className={styles.textCenter}>
          <button className={styles.btn}>Load More</button>
      </div>
    </>
  )
};

export default index;

