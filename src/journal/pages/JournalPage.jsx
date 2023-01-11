import { useDispatch, useSelector } from "react-redux"

import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"

import { startNewNote } from "../../store/journal/thunks"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelected } from "../views/NothingSelected"

export const JournalPage = () => {

    const dispatch = useDispatch()
    const { isSaving, active } = useSelector(state => state.journal)

    const onclickNewNote = () => {
        dispatch(startNewNote())
    }

    return (
        <JournalLayout>
            {
                (!!active)
                    ? <NoteView />
                    : <NothingSelected />
            }
            <IconButton
                disabled={isSaving}
                onClick={onclickNewNote}
                size='large'
                sx={{
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
