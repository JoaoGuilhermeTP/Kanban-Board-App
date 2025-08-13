import React from 'react';
import { Paper, Typography} from '@mui/material';

export default function TaskCard() {
    return (
        <Paper elevation={1} sx={{ p: 2, mb: 2}}>
            <Typography>
                This is a task card.
            </Typography>
        </Paper>
    );
}