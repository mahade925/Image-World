import Image from "next/image";

export const getStaticPaths = async () => {
    const res = await fetch("https://api.unsplash.com/photos/?client_id=RgbvYAobryBKphBsjFcebaRUtgIB0497YfO7EJmBdms");
    const data = await res.json();
    console.log(data)

    const paths = data.map((curElem) => {
        return {
            params: {
                imageId: curElem.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.imageId;
    const res = await fetch(`https://api.unsplash.com/photos/?client_id=RgbvYAobryBKphBsjFcebaRUtgIB0497YfO7EJmBdms`);
    const allImage = await res.json();
    const data = allImage.find((e) => {
        return e.id === id
    })

    return {
        props: {
            data,
        },
    };
};


const imgData = ({ data }) => {
    const { id, urls, likes, user } = data;
    return (
        <>
            <div style={{
                width: '50%',
                margin: 'auto'
            }}>
                <h1 style={{marginTop: '5%'}}>Image Detail</h1>
                <Image src={urls.thumb} width="500" height="300"></Image>
                <h3>Image Id : {id}</h3>
                <h3>Username : {user.username}</h3>
                <h3>Likes : {likes}</h3>
                <h4>{user.bio}</h4>
            </div>
        </>
    );
};

export default imgData;