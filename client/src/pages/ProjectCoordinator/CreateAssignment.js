import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Layout from '../../components/Layout/Layout';
import ProjectCoordinatorMenu from '../../components/Layout/ProjectCoordinatorMenu';
import axios from 'axios';
import toast from 'react-hot-toast';
import { HiIdentification } from 'react-icons/hi2';
import { MdEmail } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const CreateAssignment = () => {
  const [moduleCode, setmoduleCode] = useState('');
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [file, setFile] = useState('');
  //   const [allImage, setAllImage] = useState(null);
  //   const [pdfFile, setPdfFile] = useState(null);

  // useEffect(() => {
  //   getPdf();
  // }, []);
  // const getPdf = async () => {
  //   const result = await axios.get("http://localhost:5000/get-files");
  //   console.log(result.data.data);
  //   setAllImage(result.data.data);
  // };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('moduleCode', moduleCode);
    formData.append('assignmentTitle', assignmentTitle);
    formData.append('file', file);
    console.log(moduleCode, assignmentTitle, file);

    const result = await axios.post(
      '/api/v1/assignment/create-assignment',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    console.log(result);
    if (result.data.status === 'ok') {
      alert('Uploaded Successfully!!!');
      //   toast.success(res.data.message);
      //   getPdf();
    }
  };
  //   const showPdf = (pdf) => {
  //     // window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
  //     setPdfFile(`http://localhost:5000/files/${pdf}`);
  //   };

  return (
    <Layout>
      {/* <div className="container-fluid m-3 b-3"> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ProjectCoordinatorMenu />
          </div>
          <div className="col-md-9 main">
            <div className="wrapp">
              {/* <div className="wrap2"> */}
              <form onSubmit={submitImage} action="">
                <h1>Create Assignment</h1>
                <div className="input-box">
                  <input
                    type="text"
                    value={moduleCode}
                    onChange={(e) => setmoduleCode(e.target.value)}
                    placeholder="module code"
                    required
                  ></input>
                  <HiIdentification className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    value={assignmentTitle}
                    onChange={(e) => setAssignmentTitle(e.target.value)}
                    placeholder="title"
                    required
                  ></input>
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="file"
                    value={file}
                    onChange={(e) => setFile(e.target.value)}
                    placeholder="Email"
                    required
                  ></input>
                  <MdEmail className="icon" />
                </div>

                {/* <button type="submit">Register</button> */}
                <Button>Create New User</Button>
                {/* <div className="login-link">
              <p>
                have an account please{' '}
                <Link to="/login" className="login">
                  login
                </Link>
              </p>
            </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default CreateAssignment;
