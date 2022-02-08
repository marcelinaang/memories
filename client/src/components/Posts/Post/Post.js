import React from "react";
import moment from "moment";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = () => {
        setCurrentId(post._id);
    };
    const handleLike = () => {
        dispatch(likePost(post._id));
    };

    const handleDelete = () => {
        dispatch(deletePost(post._id));
    };

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={
                    post.selectedFile ||
                    "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                }
                title={post.title}
            />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="h6">
                    {moment(post.createdAt).fromNow()}
                </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button
                    style={{
                        color: "white",
                        display: "flex",
                        justifyContent: "end",
                    }}
                    size="small"
                    onClick={handleClick}
                >
                    <EditIcon fontSize="small" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">
                    {post.tags.map((tag) => tag.length > 0 && `#${tag} `)}
                </Typography>
            </div>
            <Typography variant="h5" gutterBottom className={classes.title}>
                {post.title}
            </Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={handleLike}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;{post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={handleDelete}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;
