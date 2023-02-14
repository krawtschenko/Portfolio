import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const PositionedSnackbar: React.FC<SnackbarType> = ({success, setSuccess}) => {
    const position: PositionType = {
        vertical: 'bottom',
        horizontal: 'right'
    }
    const {vertical, horizontal} = position

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSuccess(undefined)
    };

    return (
        <Stack spacing={2} sx={{width: '100%'}}>
            <Snackbar open={success} autoHideDuration={5000} onClose={handleClose}
                      anchorOrigin={{vertical, horizontal}}>
                <Alert onClose={handleClose} severity={'success'} sx={{width: '100%'}}>
                    Message was sent
                </Alert>
            </Snackbar>
        </Stack>
    );
}

type SnackbarType = {
    success: boolean | undefined
    setSuccess: (success: boolean | undefined) => void
}

type PositionType = {
    vertical: "bottom" | "top",
    horizontal: "center" | "right" | "left"
}