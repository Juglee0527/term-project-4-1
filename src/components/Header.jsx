import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Header.css";

function Header() {
    const [logoFilename, setLogoFilename] = useState(null);

    const fetchLogo = async () => {
        try {
            const res = await axios.get("http://localhost:4000/current-logo");
            setLogoFilename(res.data.filename); // ✅ 정확히 서버 응답의 키
        } catch (err) {
            console.error("로고 불러오기 실패:", err.message);
        }
    };

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("logo", file); // ✅ multer.single("logo")에 대응

        try {
            await axios.post("http://localhost:4000/upload-logo", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            fetchLogo(); // 업로드 후 바로 다시 불러오기
        } catch (err) {
            console.error("업로드 실패:", err.message);
        }
    };

    useEffect(() => {
        fetchLogo();
    }, []);

    return (
        <header className="header-wrapper">
            {logoFilename && (
                <div className="banner-container">
                    <img
                        src={`http://localhost:4000/uploads/${logoFilename}`}
                        alt="로고 배너"
                        className="banner-image"
                    />
                </div>
            )}
            <div className="header-content">
                <h1 className="company-title">하이지노 소개 페이지</h1>
                <input type="file" onChange={handleUpload} />
            </div>
        </header>
    );
}

export default Header;
