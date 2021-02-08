import React from 'react'
import {Controller} from 'react-hook-form'
import Dropzone from 'react-dropzone'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import {ListItem, makeStyles} from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import {CloudUpload, InsertDriveFile} from '@material-ui/icons'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#eee',
        textAlign: 'center',
        cursor: 'pointer',
        color: '#333',
        padding: '10px',
        marginTop: '20px'
    },
    icon: {
        marginTop: '16px',
        color: '#888',
        fontSize: '42px'
    }
}))

const FileInput = ({control, name}) => {

    const styles = useStyles()

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({onChange, onBlur, value}) => <>
                <Dropzone
                    onDrop={onChange}>
                    {({getRootProps, getInputProps}) => (<Paper className={styles.root}  variant='outlined' {...getRootProps()}>
                        <CloudUpload className={styles.icon}/>
                        <input name={name} onBlur={onBlur} {...getInputProps()}/>
                        <p> Drag n drop files here, or click to select files</p>
                    </Paper>)
                    }
                </Dropzone>
                <List>
                    {value.map((f, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <InsertDriveFile/>
                            </ListItemIcon>
                            <ListItemText primary={f.name} secondary={f.size}/>
                        </ListItem>
                    ))}
                </List>
            </>
            }
        />
    )
}

export default FileInput