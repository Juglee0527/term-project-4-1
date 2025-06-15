const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs-extra");
const path = require("path");

const app = express();
const PORT = 4000;

const uploadDir = path.join(__dirname, "uploads");
fs.ensureDirSync(uploadDir); // 없으면 생성

app.use(cors());
app.use("/uploads", express.static(uploadDir));

// multer 설정
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // 한글 포함 OK
    },
});
const upload = multer({ storage });

// 루트 확인용
app.get("/", (req, res) => {
    res.send("🟢 백엔드 서버 정상 작동 중입니다!");
});

// 로고 업로드
app.post("/upload-logo", upload.single("logo"), async (req, res) => {
    try {
        // 업로드 후, 기존 파일 삭제 (새 파일 제외하고)
        const files = await fs.readdir(uploadDir);
        for (const file of files) {
            if (file !== req.file.filename) {
                await fs.remove(path.join(uploadDir, file));
            }
        }

        return res.status(200).json({ filename: req.file.filename });
    } catch (error) {
        console.error("업로드 오류:", error);
        return res.status(500).send("파일 업로드 중 오류 발생");
    }
});

// 현재 로고 경로 반환
app.get("/current-logo", async (req, res) => {
    try {
        const files = await fs.readdir(uploadDir);
        if (files.length === 0) return res.status(404).send("파일 없음");
        return res.json({ filename: files[0] });
    } catch (error) {
        return res.status(500).send("파일 조회 실패");
    }
});

app.listen(PORT, () => {
    console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});
