import React from "react";
import { Paper, Typography, IconButton, Container, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useStore from "./store.js";

export default function TaskCard({ key, id, title, columnId }) {
    const { deleteTask } = useStore();

    return (
        <Paper elevation={1} sx={{ p: 2, mb: 2 }}>
            <Box
                sx={{
                  display: "flex",
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <Typography>{title}</Typography>
                <IconButton
                    onClick={() => deleteTask(columnId, id)}
                    size="small"
                    aria-label="delete task"
                    sx={{color: 'error.main'}}
                >
                    <DeleteIcon fontSize="small"  />
                </IconButton>
            </Box>
        </Paper>
    );
}
