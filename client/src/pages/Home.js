import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import business from "../images/real-estate.png";


const Home = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Businesses</Typography>
                <img src={business} alt="businesses" height="250" />
            </AppBar>
        </Container>
    )
}

export default Home;


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