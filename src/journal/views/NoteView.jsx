import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {
    return (
        <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center' sx={{ mb: 1 }}
            className='animate__animated animate__fadeIn animate__faster'
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>
                    Friday January 6
                </Typography>
            </Grid>
            <Grid item>
                <Button color='primary' sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    save
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    placeholder="Add a title"
                    label='Title'
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today?"
                    minRows='5'
                />
            </Grid>
            <ImageGallery />
        </Grid>
    )
}
