const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const PORT = 4000;

// CORS 허용
app.use(cors());
app.use(express.static('uploads')); // 업로드한 이미지를 정적으로 제공

// 업로드 폴더 설정
const uploadDir = path.join(__dirname, 'uploads');
fs.ensureDirSync(uploadDir);

// multer 설정
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, 'logo' + path.extname(file.originalname)); // 파일명은 항상 logo.png/jpg 등
    },
});
const upload = multer({ storage });

// 서버 정상 작동 확인
app.get('/', (req, res) => {
    res.send('🟢 백엔드 서버 정상 작동 중입니다!');
});


// 로고 업로드 API
app.post('/upload-logo', upload.single('file'), (req, res) => {
    res.json({ success: true, filename: req.file.filename });
});

// 현재 등록된 로고 파일명 반환
app.get('/current-logo', (req, res) => {
    const files = fs.readdirSync(uploadDir);
    const logo = files.find((f) => f.startsWith('logo'));
    if (logo) {
        res.json({ filename: logo });
    } else {
        res.status(404).json({ error: 'No logo found' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});
