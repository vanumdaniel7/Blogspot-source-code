const multer = require("multer");

const storage = multer.diskStorage({
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;