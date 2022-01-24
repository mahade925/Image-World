import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/error.module.css";

const Errorpage = () => {
    return (
        <>
            <Head>
                <title>404</title>
                <link rel="shortcut icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAe1BMVEXy8vIzMzP19fX5+fkrKyscHBwhISEnJyfQ0NAZGRl2dnaUlJS5ubng4OD39/cfHx/t7e07OzvGxsaenp4AAADn5+eBgYHX19dBQUFqamqpqamIiIjLy8uvr69xcXFdXV0MDAxiYmJISEhVVVWfn5+/v7+Ojo5PT09ERER/mYuGAAAFFklEQVR4nO2d63aqOhhFIQkERG4q4t1qa93v/4SHAEFA26Pgxp245j+rGSOZZn0kXKxhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgILSE9Gv+3E4NC925tmDmdJJAwry1zTsq/CeImJmz6PRNBicrb83XCk+EYGwXg/A6DYKOCoXWRuF5QJfFIMJuUTDCYhbFCiswEt4vCoUDpnQUtv2isNMhCodyEN2iEMkoPLtfA0ISOYhuUSgLKpurHIVVGYXvblEoC6o1UTkK+2IQbsco2BpEwXeLQZjdorDVIAr0i/eKwkGHKHz2iQJJdIpCx6PCSocoTPtFYS+jEDy7Z8NBj2afKPhlFMynd2w4SCqj0KmkBSuuQRQ83mfvLwtqeFI5CnEZhU4bHj2i4PSKgiyobKRyFL55n71/cDY1iILZKwppcSLRZE/v2HCQjdVnlScLqtpRWLM+USBHDaJAyih0Ow1WFVT+9I4NB5n0Og1WFVSlozBnfVZ5ZFEYtFWOgiGj0GnvX0UhfHq/hkNeGOgahbUOURj1i0KsQRSiflGQawvr6R0bjioK3TY8VUHdqRyFXb8olNfr7bHKUZCD2NArZDgIpUGd7GX5TjApo8CD6+avGtKjyGtkpvnttflOCwnU95bnRVxx3M9PQflWWVDN41Vrz4teObAHkNfIsjDwNh9FlaRfLpcfKj/K3H1USJAGzavWPExeOrL7iZqjaxDmDoKTe+M9vhRTncgo3IKp4iD5XwfyvHkLVwSl2mpo7uCHmWKvgrdxcLkYa3Jx411VPsTJBk0cfLhNqiJnu7OTcODIyMdf24zy4mqxPyCnWas5l80t90MVB4bf4lRKsMe+Lw5ulQO+EosEKu/cKvZIUat14kkJqe+/emh3Q5oEcsjhpFgCVA7kSrA+D66ay0v4phkRZa/Ck4sD0vzDbQct5KWGzMGAnX4ycAAHAjiAAwEcwIGAbGZWzqybA69sbinswIg2Ts6mXOk+5oD4TslwPf4LyCWffPmQg8u6cajuDsGDDrQEDuBAAAdwIIADOBDAARwI4AAOBHAABwI4gAMBHMCBAA7gQAAHcCCAAzgQwEHdwTa/KzN6ZwdsmUQZK/6GDuTPApjMtSyruvlO6ef8HyWp7lhswKdv5EA+xtrCUvn5pUeh09v34766X8PyeS2Bue80DbIwGNPFh1XHdQ/OG1WDHEqj1NlcSI2uP72rNM3bkl/dGwBeBAnEs47ZQlmslvOnHd8rDQElyWQ1X55jnh0PXIvF5+V8NUkIfZODY0CT8fpsh5zVH3tijIf2cT5O9NdAaLQ9sPCnh76YzQ/bROuDZECdObN/eeot18BGjraTgdDJ3vpdQKnB2k/0nAvUuc9AYeFzo58FGo3cmwYYu/1ndxRptn2g43YZYNwOQ7b43B8O5wUPQ5u3P2CPdZJAjF3zOXcesoN3SqPqpx2idOxlxwve+JS7M7TJA03j+uBY+MdzjNbCUCwbDcc7Ng6bPPY1mQp0Us8BZ3Pnp/9Qk62YnTWr+WL2RAsJwbaWA25Oo18LfraI+jJrFtytFkuFBbt8rd4dxZ5G3qU+ssUAPfzrkERKsJZ3xpv6S3kRZpFoURZJErP8YLi9e9lD6DafCizWQ0FWEfz8G00fKW80/ZNJYL4W1UAQ+MzeG48Nhxh7m+ujIJOQ7h4+TUSCXaqRAhHwDo302zUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgHfiPzZsSiBEZ8cEAAAAAElFTkSuQmCC" />
            </Head>
            <div className={styles.container}>
                <Image src="/error.jpg" width="300" height="300"></Image>
                <h1 className={styles.errorTitle}>This page is not available</h1>
                <Link href={'/'}>
                    <button className={styles.btn}>back to home</button>
                </Link>
            </div>
        </>
    )
};

export default Errorpage;