import multer from "multer";
import fs from "fs";
import path from "path";

// فولدر التحميل
const uploadFolder = "uploads/employees";

// إنشاء الفولدر لو مش موجود
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}

// إعداد Multer
export const upload = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadFolder);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, Date.now() + "-" + file.fieldname + ext);
    }
  });

  return multer({ storage });
};








