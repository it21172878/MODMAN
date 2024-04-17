// const multer = require('multer');
import multer from 'multer';
//configure how the files are stored
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //where to store the file
    // cb(null, 'uploads/');
    return cb(null, 'submitAssignment/');
  },
  filename: function (req, file, cb) {
    // return cb(null, new Date().toISOString() + file.originalname);
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  //reject a file if it's not a jpg or png
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'application/pdf'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const submit = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

// module.exports = upload;
export default submit;
