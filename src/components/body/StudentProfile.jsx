import React from 'react'
import { Grid, Box, Button } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DownloadIcon from '@mui/icons-material/Download';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import * as urls from '../../BackendUrls';


const StudentProfile = (props) => {
    let semester_gradesheets = props.studentData.semester_gradesheets.map(sem => (
        <div key={sem.semester_number} className="col-md-6" href="#">
            <a className="sem-gradesheet" href={urls.baseUrl + sem.url} target="_blank">
                <i className='bx bxs-file-pdf'></i>
                <span>{sem.semester_number}{sem.semester_suffix} Semester</span>
            </a>
        </div>
    ))
    let custom_semester_gradesheets = props.studentData.custom_semester_gradesheets.map(sem => (
        <div key={sem.semester_number} className="col-md-6" href="#">
            <a className="sem-gradesheet" href={urls.baseUrl + sem.url} target="_blank">
                <i className='bx bxs-file-pdf'></i>
                <span>{sem.semester_number}{sem.semester_suffix} Semester</span>
            </a>
        </div>
    ))
    let year_gradesheets = props.studentData.year_gradesheets.map(year => (
        <div key={year.year_number} className="col-md-12" href="#">
            <a className="year-gradesheet y1" href={ urls.baseUrl + year.url} target="_blank">
                <i className='bx bxs-file-pdf'></i>
                <span>{year.year_number}{year.year_suffix} Year Gradesheet</span>
                <span className="num">{year.year_number}</span>
            </a>
        </div>
    ))
    let custom_yearly_gradesheets = props.studentData.custom_yearly_gradesheets.map(year => (
        <div key={year.year_number} className="col-md-12" href="#">
            <a className="year-gradesheet y1" href={ urls.baseUrl + year.url} target="_blank">
                <i className='bx bxs-file-pdf'></i>
                <span>{year.year_number}{year.year_suffix} Year Gradesheet</span>
                <span className="num">{year.year_number}</span>
            </a>
        </div>
    ))
    return (
        <Box className="mt-5 mb-3">
            <Grid container spacing={4}>
                <Grid item xs={12} md={7} >
                    <div className="mb-4 bg-light shadow-sm py-3 rounded">
                        <div className="text-center">
                            <img src={ urls.baseUrl + props.studentData.student.avatar_url} alt="avatar"
                                className="rounded-circle img-fluid" style={{ width: '150px' }} />
                            <h5 className="my-3">{props.studentData.student.name}</h5>
                            <p className="text-muted mb-1">{props.studentData.student.registration}</p>
                            <p className="text-muted mb-4">CGPA: {props.studentData.student.cgpa}</p>
                        </div>
                    </div>
                    <div className="card mb-4 student-info">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Full Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{props.studentData.student.name}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Department</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{props.studentData.student.dept}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Session</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{props.studentData.student.session}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{props.studentData.student.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Button
                        variant="contained"
                        color="secondary"
                        href={urls.baseUrl + props.studentData.full_document_url}
                        target="_blank"
                        sx={{ width: '100%', borderRadius: "180px" }}
                        size="large"
                        startIcon={<DownloadIcon />}
                    >
                        Download All GradeSheets
                    </Button>

                    <div className="mt-3">
                        <p className="mb-2 text-center"><span className="roboto-font text-muted fs-5">Grade Sheets</span></p>
                        <div className="row g-1 row-cols-2 mb-2">
                            {custom_semester_gradesheets}
                            {semester_gradesheets}
                            {custom_yearly_gradesheets}
                            {year_gradesheets}
                        </div>
                    </div>
                    <Button
                        variant="outlined"
                        color="success"
                        href={urls.baseUrl + props.studentData.transcript_url}
                        target="_blank"
                        sx={{ width: '100%', marginTop: "1rem", height: "4rem" }}
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