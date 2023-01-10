import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hook/useForm"
import { checkingAuth, startGoogleSignIn } from "../../store/auth/thunks"


export const LoginPage = () => {

    const dispatch = useDispatch()
    const { status } = useSelector(state => state.auth)

    const isAuth = useMemo(() => status === 'checking', [status])

    const { email, password, onInputChange, formState } = useForm({
        email: 'totoro@google.com',
        password: '123456'
    })

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log({ email, password })
        dispatch(checkingAuth())
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn())
    }

    return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Email'
                            type='email'
                            placeholder='correo@google.com'
                            fullWidth
                            value={email}
                            name='email'
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Password'
                            type='password'
                            placeholder='Password'
                            fullWidth
                            value={password}
                            name='password'
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuth}
                                type='submit'
                                variant='contained'
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuth}
                                variant='contained'
                                fullWidth
                                onClick={onGoogleSignIn}
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Link component={RouterLink} color='inherit' to='/auth/register'>
                            Create a new account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
