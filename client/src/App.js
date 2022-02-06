import React, { useEffect } from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import memories from "./images/memories.png";

import useStyles from "./styles";

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar
                position="static"
                color="inherit"
                className={classes.appBar}
            >
                <Typography
                    variant="h2"
                    align="center"
                    className={classes.heading}
                >
                    Memories
                </Typography>
                <img
                    src={memories}
                    alt="memories"
                    height="60"
                    className={classes.image}
                />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="stretch"
                        spacing={3}
                    >
                        <Grid item xs={12} sm={8}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;
