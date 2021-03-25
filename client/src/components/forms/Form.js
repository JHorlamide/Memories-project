import React, {useEffect, useState} from 'react';
import useStyles from './style';
import {useDispatch, useSelector} from 'react-redux';

/* From Material UI */
import {Button, Paper, TextField, Typography} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {createPost, updatePost} from '../../actions/posts';

const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        tags: '',
        message: '',
        selectedFile: '',
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    const {creator, title, tags, message} = postData;

    const post = useSelector((state) => {
        return currentId
            ? state.posts.find((post) => {
                return post._id === currentId;
            })
            : null;
    });

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const onChange = (e) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value.split(','),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }

        clearButtonHandler();
    };

    const handleBase64 = ({base64}) => {
        setPostData({
            ...postData,
            selectedFile: base64,
        });
    };

    const clearButtonHandler = () => {
        setCurrentId(null);

        setPostData({
            creator: '',
            title: '',
            tags: '',
            message: '',
            selectedFile: '',
        });
    };

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete='off'
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant='h6'>
                    {currentId ? 'Editing' : 'Creating'} a Memory
                </Typography>
                {/* Creator */}
                <TextField
                    name='creator'
                    variant='outlined'
                    label='Creator'
                    fullWidth
                    value={creator}
                    onChange={(e) => onChange(e)}
                />

                {/* Title */}
                <TextField
                    name='title'
                    variant='outlined'
                    label='Title'
                    fullWidth
                    value={title}
                    onChange={(e) => onChange(e)}
                />

                {/* Message */}
                <TextField
                    name='message'
                    variant='outlined'
                    label='Message'
                    fullWidth
                    value={message}
                    onChange={(e) => onChange(e)}
                />

                {/* Tags */}
                <TextField
                    name='tags'
                    variant='outlined'
                    label='Tags'
                    fullWidth
                    value={tags}
                    onChange={(e) => onChange(e)}
                />

                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={handleBase64}/>
                </div>

                <Button
                    className={classes.buttonSubmit}
                    variant='contained'
                    color='primary'
                    size='large'
                    type='submit'
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    className={classes.buttonSubmit}
                    variant='contained'
                    color='secondary'
                    size='large'
                    onClick={clearButtonHandler}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
