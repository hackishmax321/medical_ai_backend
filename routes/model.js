const User = require("../models/User");
const { spawn } = require('child_process');
const multer = require('multer');
const path = require('path');
const router = require("express").Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'routes/modules/images_to_text/uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append a timestamp to make the filename unique
  }
});

const upload = multer({ storage: storage });


//CREATE

router.post("/", async (req, res) => {
  console.log("POST");
  const param = req.body.phrase;
  const email = req.body.email;
  try {
    const pythonScriptPath = 'routes/modules/images_to_text/main.py';
    // const param = req.params.phrase;
    const pythonProcess = spawn('python', [pythonScriptPath, param]);

    let pythonOutput = '';
    let pythonErrors = '';

    pythonProcess.stdout.on('data', (data) => {
        pythonOutput += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        pythonErrors += data.toString();
    });
    
    pythonProcess.on('close', (code) => {
        if (code === 0) {
          res.json({ data: pythonOutput });
        } else {
          res.status(500).json({ error: pythonErrors });
        }
    });

    // res.status(200).json(updatedOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/img-to-text", upload.single('image'), async (req, res) => {
  try {
    const imagePath = req.file.path; // Retrieve the path of the uploaded file
    const pythonScriptPath = 'routes/modules/images_to_text/main.py';
    console.log(imagePath)
    const pythonProcess = spawn('python', [pythonScriptPath, imagePath]);

    let pythonOutput = '';
    let pythonErrors = '';

    pythonProcess.stdout.on('data', (data) => {
        pythonOutput += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        pythonErrors += data.toString();
    });

    pythonProcess.on('close', (code) => {
        if (code === 0) {
          res.json({ data: pythonOutput });
        } else {
          res.status(500).json({ error: pythonErrors });
        }
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;