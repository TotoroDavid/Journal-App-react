import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelected } from "../views/NothingSelected"

export const JournalPage = () => {
    return (
        <JournalLayout>
            <NothingSelected />
            {/* <NoteView /> */}
            <IconButton
                size='large'
                xs={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    )
}
