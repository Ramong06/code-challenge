import React, { useEffect, useState } from 'react';
import API from "../utils/API";


const Home = () => {
    // const [search, setSearch] = useState("");
    // const [id, setId] = useState("60919db960a9770234b848be");
    // const [rating, setRating] = useState();

    // const getBusinesses = () => {
    //     API.search()
    //         .then((res) => {
    //             console.log(res.data);
    //         });
    // };

    // useEffect(() => {
    //     getBusinesses();
    // });

    // const updateRating = () => {
    //     API.update(id, rating)
    //         .then((res) => {
    //             console.log(res);
    //             getBusinesses();
    //         })
    // }

    return (
        <div>
            <h1>THIS IS HOME PAGE</h1>
            {/* <form onSubmit={(event) => {
                event.preventDefault();
                console.log(rating);
                updateRating()
                }}>
                {/* <input type="search" value={id} onChange={(event) => {
                    const newId = event.target.value;
                    setId(newId);
                }} placeholder="id" /> */}
                {/* <input type="search"  value={rating} onChange={(event) => {
                    const newRating = event.target.value;
                    setRating(newRating);
                }} placeholder="rating"  />
            </form> */}
        </div>
    )
}

export default Home;
