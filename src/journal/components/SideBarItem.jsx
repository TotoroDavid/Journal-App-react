import { useMemo } from "react"

import { useDispatch } from "react-redux"

import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

import { setActiveNote } from "../../store/journal/journalSlice"


export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch()

    const onClickNote = () => {
        dispatch(setActiveNote({ title, body, id, date, imageUrls }))
    }

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title
    }, [title])

    const newBody = useMemo(() => {
        return body.length > 40
            ? body.substring(0, 40) + '...'
            : body
    }, [title])

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={newBody} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}

/**
substring() method extracts characters,
between two indices (positions), from a string, and returns the substring.
 */