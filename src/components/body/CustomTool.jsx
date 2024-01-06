import {React, useState} from 'react';
import { Button } from "@mui/material";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import * as urls from '../../BackendUrls'

const CustomTool = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (selectedFile) {
            try {
                const formData = new FormData();
                formData.append('file', selectedFile);
                const response = await axios.post(urls.exportExcelUrl, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                props.handleSnackbarOpen('Complete', 'success')
            } catch (error) {
                props.handleSnackbarOpen('Error uploading file', 'error')
            }
        } else {
            props.handleSnackbarOpen('No file selected', 'warning')
        }
    };
    return (
        <div className='mt-5' style={{ textAlign: 'left' }}>
            <div className="py-3 mb-5" >
                <div className="text-muted fs-5 text-center mb-2">Instructions</div>
                <ul className="mb-0">
                    <li className="text-success ">Use the provided excel workbook as a template.</li>
                    <li className="text-success ">Do not alter the field names, enter only the corresponding data.</li>
                    <li className="text-success ">Maintaining the order of the sheets is not necessary but don't change the name of the sheets.</li>
                    <li className="text-success ">Verify the data and the specified formatting before exporting.</li>
                </ul>
                <div className="container row-flexer mt-3">
                    <Button variant="contained" href={urls.excelTemplateUrl} startIcon={<DownloadRoundedIcon />}>
                        Download Template
                    </Button>
                </div>
            </div>
            <div className="mb-3">
                <label for="formFile" className="form-label">Select Excel File</label>
                <input onChange={e => handleFileChange(e)} className="form-control" accept=".xlsx" type="file" id="excelFile" />
                <div className="d-flex justify-content-end mt-2">
                    <Button onClick={handleUpload} color='secondary' style={{borderRadius: "180px", padding: "5px 25px"}} variant="contained" href="#outlined-buttons" startIcon={<CloudUploadIcon />}>
                        Export
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CustomTool