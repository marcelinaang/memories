import React, { useState } from "react";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { createPost } from "../../actions/posts";

const Form = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    };

    const handleClear = () => {
        // TODO: handleClear Form

    };

    const handleChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value });
    };
    const handleFileInput = ({ base64 }) => {
        setPostData({ ...postData, selectedFile: base64 });
    };

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={handleChange}
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={handleChange}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                    value={postData.message}
                    onChange={handleChange}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={handleChange}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        name="selectedFile"
                        type="file"
                        multiple={false}
                        onDone={handleFileInput}
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={handleClear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
