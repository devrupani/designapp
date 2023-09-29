// import React from "react";
// import { Typography, Card, CardContent, Grid, TextField, Button, Avatar } from "@mui/material";
// import HowToRegIcon from '@mui/icons-material/HowToReg';


// function Contact() {
//     const colorStyle = { backgroundColor: '#71BFBC' }
//     return (
//         <>
//             <div className="d">

//                 <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
//                     <CardContent>
//                         <Grid align="center">
//                             <Avatar style={colorStyle} ><HowToRegIcon></HowToRegIcon></Avatar>
//                             <Typography gutterBottom varient="h5">Contact Us</Typography>
//                             <Typography gutterBottom color="textSecondary" varient="body2" component="p">Fill up the form and our team will get back to you within 24hours.</Typography>
//                         </Grid>
//                         <form>
//                             <Grid container spacing={1}>
//                                 <Grid xs={12} sm={6} item>
//                                     <TextField
//                                         name="firstname"
//                                         type="text"
//                                         margin="normal"
//                                         label="First name"
//                                         size="small"
//                                         placeholder="Enter First Name"
//                                         fullWidth
//                                         required
//                                     >
//                                     </TextField>
//                                 </Grid>
//                                 <Grid xs={12} sm={6} item>
//                                     <TextField
//                                         name="lastname"
//                                         type="text"
//                                         label="Last Name"
//                                         size="small"
//                                         margin="normal"
//                                         placeholder="Enter Last Name"
//                                         fullWidth
//                                         required

//                                     >
//                                     </TextField>
//                                 </Grid>

//                                 <Grid xs={12} item>

//                                     <TextField
//                                         name="email"
//                                         type="email"
//                                         label="Email"
//                                         size="small"
//                                         margin="normal"
//                                         placeholder="Enter Email"
//                                         fullWidth
//                                         required

//                                     >

//                                     </TextField>
//                                 </Grid>

//                                 <Grid xs={12} item>

//                                     <TextField
//                                         name="contact"
//                                         type="number"
//                                         label="Phone"
//                                         size="small"
//                                         margin="normal"
//                                         placeholder="Enter Contact"
//                                         fullWidth
//                                         required

//                                     >

//                                     </TextField>
//                                 </Grid>

//                                 <Grid xs={12} item>

//                                     <TextField
//                                         name="msg"
//                                         multiline
//                                         rows={4}
//                                         label="Message"
//                                         size="small"
//                                         margin="normal"
//                                         placeholder="Enter Your Message"
//                                         fullWidth
//                                         required


//                                     >

//                                     </TextField>
//                                 </Grid>

//                                 <Grid xs={12} item>
//                                     <Button type='submit' style={colorStyle} variant="contained" name="register" fullWidth >Submit</Button>
//                                 </Grid>

//                             </Grid>
//                         </form>
//                     </CardContent>
//                 </Card>
//             </div >
//         </>
//     );
// }

// export default Contact

import { Grid, Paper, Avatar, Typography } from '@mui/material';
import { LockClockOutlined } from '@mui/icons-material';
import { FormControl, TextField, Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react';
import { Link } from "react-router-dom";
import * as Yup from 'yup';

function Contact() {

    const paperStyle = { padding: 20, height: 'auto', width: 450, margin: '50px auto' }
    const colorStyle = { backgroundColor: '#71BFBC' }

    const initialValues = {
        firstname: '',
        lastname: '',
        contact: '',
        email: '',
        msg: ''

    }

    const validationSchema = Yup.object().shape({
        firstname: Yup.string().min(3, "Too Short").required("Required First Name"),
        lastname: Yup.string().min(3, "Too Short").required("Required Last Name"),
        email: Yup.string().email("Enter Valid Email").required("Required Email"),
        contact: Yup.string().matches(/^[0-9]+$/, "Enter Valid Contact").min(10, "Must Be 10 Digit").required('Required Contact'),
        email: Yup.string().email("Enter Valid Email").required("Required Email"),
        msg: Yup.string().min(20, "Maximum 20 characters are Must").required("Required Message")

    })

    const onSubmit = (values, props) => {
        alert('Done');
        console.log(values)
    }

    return (

        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>

                    <Avatar style={colorStyle}><LockClockOutlined ></LockClockOutlined></Avatar>
                    <h4><b>contact</b></h4>
                    <Typography gutterBottom color="textSecondary" varient="body2" component="p">Fill up the form and our team will get back to you within 24hours.</Typography>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(props) => (<Form>
                            <FormControl margin="normal" fullWidth required>

                                <Field as={TextField}
                                    name="firstname"
                                    sx={{ marginRight: '10px' }}
                                    id="standard-basic"
                                    type='text'
                                    label="First Name"
                                    variant="outlined"
                                    margin="normal"
                                    size="small"
                                    helperText={<ErrorMessage name="firstname" />}

                                />


                                <Field as={TextField}
                                    name="lastname"
                                    id="standard-basic"
                                    type='text'
                                    label="Last Name"
                                    variant="outlined"
                                    margin="normal"
                                    size="small"
                                    helperText={<ErrorMessage name="lastname" />}

                                />

                                <Field as={TextField}
                                    name="contact"
                                    sx={{ marginRight: '10px' }}
                                    id="standard-basic"
                                    label="Contact"
                                    variant="outlined"
                                    margin="normal"
                                    size="small"
                                    maxLength={10}
                                    helperText={<ErrorMessage name="contact" />}

                                />

                                <Field as={TextField}
                                    name="email"
                                    sx={{ marginRight: '10px' }}
                                    id="standard-basic"
                                    type='email'
                                    label="Email"
                                    variant="outlined"
                                    margin="normal"
                                    size="small"
                                    helperText={<ErrorMessage name="email" />}

                                />

                                <Field as={TextField}
                                    name="msg"
                                    multiline
                                    rows={4}
                                    sx={{ marginRight: '10px' }}
                                    id="standard-basic"
                                    type='message'
                                    label="Message"
                                    variant="outlined"
                                    margin="normal"
                                    size="small"
                                    helperText={<ErrorMessage name="msg" />}

                                />
                            </FormControl>
                            <hr />
                            <Button type="submit" variant="contained" name="msg" style={colorStyle} fullWidth margin="20px" >Submit</Button>
                            {/* <Button type="submit" variant="contained" name="login" style={colorStyle} fullWidth margin="20px">Login</Button> */}






                        </Form>
                        )}
                    </Formik >
                </Grid>
            </Paper >
        </Grid >

    );
}

export default Contact

