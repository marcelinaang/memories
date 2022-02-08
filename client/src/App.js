import React, { useEffect, useState } from "react";
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
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

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
                <Container disableGutters>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="stretch"
                        className={classes.mainContainer}
                        spacing={3}
                    >
                        <Grid item sm={12} md={8}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;
