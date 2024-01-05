import React from 'react'
import {Grid, Box, Button} from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DownloadIcon from '@mui/icons-material/Download';

const Link = (props) => {
    return (
        <a href={props.href}></a>
    )
}

const StudentProfile = () => {
  return (
    <Box className="mt-5 borde">
        <Grid container spacing={4}>
            <Grid item  xs={12} md={7} >
                <div className="mb-4 bg-material py-3 rounded">
                    <div className="text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                        className="rounded-circle img-fluid" style={{width: '150px'}} />
                        <h5 className="my-3">John Smith</h5>
                        <p className="text-muted mb-1">Full Stack Developer</p>
                        <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                    </div>
                </div>
                <div className="card mb-4 student-info">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Full Name</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">Johnatan Smith</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Email</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">example@example.com</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Phone</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">(097) 234-5678</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Mobile</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">(098) 765-4321</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Address</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={5}>
            <Button
                variant="contained"
                color="secondary"
                href="download/"
                target="_blank"
                sx={{ width: '100%', borderRadius: "180px" }}
                size="large"
                startIcon={<DownloadIcon />}
                >
                Download Full Document
            </Button>
            
            <div className="mt-3">
                <p className="mb-2 text-center"><span className="roboto-font text-muted fs-5">Grade Sheets</span></p>
                <div className="row g-1 row-cols-2 mb-2">
                    <div className="col-md-6" href="#">
                    <a className="sem-gradesheet" href="#">
                        <i className='bx bxs-file-pdf'></i>
                        <span>1st Semester</span>
                    </a>
                    </div>
                    <div className="col-md-6" href="#">
                    <a className="sem-gradesheet" href="#">
                        <i className='bx bxs-file-pdf'></i>
                        <span>1st Semester</span>
                    </a>
                    </div>
                    <div className="col-md-6" href="#">
                    <a className="sem-gradesheet" href="#">
                        <i className='bx bxs-file-pdf'></i>
                        <span>1st Semester</span>
                    </a>
                    </div>
                    <div className="col-md-12" href="#">
                    <a className="year-gradesheet y1" href="#">
                        <i className='bx bxs-file-pdf'></i>
                        <span>1st Year Gradesheet</span>
                        <span className="num">1</span>
                    </a>
                    </div>
                    <div className="col-md-12" href="#">
                    <a className="year-gradesheet y2" href="#">
                        <i className='bx bxs-file-pdf'></i>
                        <span>2nd Year Gradesheet</span>
                        <span className="num">2</span>
                    </a>
                    </div>
                    <div className="col-md-12" href="#">
                    <a className="year-gradesheet y3" href="#">
                        <i className='bx bxs-file-pdf'></i>
                        <span>3rd Year Gradesheet</span>
                        <span className="num">3</span>
                    </a>
                    </div>
                    <div className="col-md-12" href="#">
                    <a className="year-gradesheet y4" href="#">
                        <span className="num">4</span>
                        <i className='bx bxs-file-pdf'></i>
                        <span>4th Year Gradesheet</span>
                    </a>
                    </div>
                </div>
            </div>
            <Button
                variant="outlined"
                color="success"
                href="download/"
                target="_blank"
                sx={{ width: '100%', marginTop:"1rem", height: "4rem" }}
                size="large"
                startIcon={<AccountBalanceIcon />}
                >
                Academic Transcript
            </Button>
            </Grid>
        </Grid>
    </Box>
  )
}

export default StudentProfile