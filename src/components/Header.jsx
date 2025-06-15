import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Header() {
    const [logoUrl, setLogoUrl] = useState(null);

    // 현재 로고 불러오기
    useEffect(() => {
        axios
            .get('http://localhost:4000/current-logo')
            .then((res) => {
                setLogoUrl(`http://localhost:4000/${res.data.filename}`);
            })
            .catch(() => {
                setLogoUrl(null);
            });
    }, []);

    // 업로드 이벤트 처리
    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        await axios.post('http://localhost:4000/upload-logo', formData);
        setLogoUrl(`http://localhost:4000/logo${file.name.slice(file.name.lastIndexOf('.'))}`);
    };

    return (
        <header className="header">
            <h1>Hygino Company</h1>
            {logoUrl && <img src={logoUrl} alt="Company Logo" style={{ height: '120px', marginTop: '1rem' }} />}
            <div style={{ marginTop: '1rem' }}>
                <input type="file" accept="image/*" onChange={handleUpload} />
            </div>
        </header>
    );
}

export default Header;
