import React, {useState} from 'react'
import MainContainer from './MainContainer'
import {
    ListItem,
    makeStyles,
    Paper,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core'
import {useData} from '../DataContex'
import TableCell from '@material-ui/core/TableCell'
import Table from '@material-ui/core/Table'
import {Link} from 'react-router-dom'
import List from '@material-ui/core/List'
import {InsertDriveFile} from '@material-ui/icons'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PrimaryButton from './PrimaryButton'
import Swal from 'sweetalert2'
import ReactConfetti from 'react-confetti'


const useStyles = makeStyles({
    root: {
      marginBottom: '30px',
      marginTop: '15px',
    },
    table: {
        marginBottom: '30px'
    }
})


const Result = () => {
    const [success,setSuccess] =useState(false)
    const styles = useStyles()
    const {data} = useData()
    const entries = Object.entries(data).filter((entry) => entry[0] !== 'files')
    const {files} = data

    const onSubmit = () => {
        Swal.fire("GG", 'success')
        setSuccess(true)
    }

    if(success){
        return <ReactConfetti />
    }

    return (
        <MainContainer>
            <Typography component='h2' variant='h5'>📂 Form Values</Typography>
            <TableContainer className={styles.root} component={Paper}>
                <Table className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell> Field</TableCell>
                            <TableCell align='right'> Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            entries.map(entry => (
                                <TableRow key={entry[0]}>
                                    <TableCell>{entry[0]}</TableCell>
                                    <TableCell align='right'>{entry[1].toString()}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {
                files && (
                    <>
                        <Typography component='h2' variant='h5'>📂 Files </Typography>
                        <List>
                            {
                                files.map((f, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon>
                                            <InsertDriveFile/>
                                        </ListItemIcon>
                                        <ListItemText primary={f.name} secondary={f.size}/>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </>
                )
            }
            <PrimaryButton onClick={onSubmit}> Submit </PrimaryButton>
            <Link to='/'>Start over</Link>

        </MainContainer>
    )
}

export default Result