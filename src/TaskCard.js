import React from 'react';
import { Paper, Typography} from '@mui/material';

export default function TaskCard({id, title}) {
    return (
        <Paper elevation={1} sx={{ p: 2, mb: 2}}>
            <Typography>
                {title}
            </Typography>
        </Paper>
    );
}