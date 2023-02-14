import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar, {SnackbarOrigin} from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const PositionedSnackbar: React.FC<SnackbarType> = ({success, setSuccess}) => {
    const [state, setState] = React.useState<State>({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
    });
    const {vertical, horizontal, open} = state;

    const handleClick = () => {
        setState({...state, open: true});
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setState({...state, open: false});
    };

    return (
        <Stack spacing={2} sx={{width: '100%'}}>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{vertical, horizontal}}>
                <Alert onClose={handleClose} severity={success ? 'success' : 'error'} sx={{width: '100%'}}>
                    {success ? 'This is a success message!' : 'This is an error message!'}
                </Alert>
            </Snackbar>
        </Stack>
    );
}

type SnackbarType = {
    success: boolean
    setSuccess: (success: boolean) => void
}

export interface State extends SnackbarOrigin {
    open: boolean;
}