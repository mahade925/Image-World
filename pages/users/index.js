import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

const users = () => {
    const [users, setUsers] = useState([]);
    const [moreUsers, setMoreUsers] = useState(5);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.slice(0,moreUsers)))
    }, [moreUsers]);

    console.log(users)

    return (
        <>
            <Head>
                <title>Users</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                <link rel="shortcut icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwnYnwftDUSjsQmLQvMBZ2pwDXhAJiIdfKvg&usqp=CAU" />
            </Head>
            <h1 className="text-center mt-5">Hello users - {moreUsers}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 container m-auto">
            {
                users.map(user => <>
                        <div className="col">
                            <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{user.name}</h5>
                                        <h6>Email : {user.email}</h6>
                                        <h6>Phone : {user.phone}</h6>
                                        {/* <h6>Address : {user.address.city}</h6> */}
                                        <button type="button" className="btn btn-info">View Detail</button>
                                    </div>
                            </div>
                        </div>
                </>)
            }
            </div>
            {
                moreUsers==5 ? <div className="text-center mt-3">
                <button onClick={() => setMoreUsers(moreUsers+5)} type="button" className="text-center btn btn-primary">Show More</button>
                </div> : <div className="text-center mt-3">
                <button onClick={() => setMoreUsers(moreUsers-5)} type="button" className="btn btn-danger">Show less</button>
                </div>
            }
        </>
    )
}

export default users