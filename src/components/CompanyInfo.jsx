import React from 'react';

function CompanyInfo() {
    return (
        <section>
            <h1>하이지노</h1>
            <p>
                하이지노는 스마트팩토리와 탄소중립 솔루션을 개발하는 IT 기업입니다.
                AI, IoT, 데이터 분석 기술을 바탕으로 제조업의 디지털 전환을 선도하고 있습니다.
            </p>

            <h3>📌 회사 정보</h3>
            <ul>
                <li><strong>설립연도:</strong> 2018년</li>
                <li><strong>대표자:</strong> 김하율</li>
                <li><strong>본사 위치:</strong> 경기도 안양시 동안구 시민대로 248번길 25, 703·706호</li>
                <li><strong>주요 사업:</strong> 스마트팩토리 시스템, 탄소중립 솔루션, IoT 기반 장비</li>
                <li><strong>홈페이지:</strong> <a href="https://hygino.recruiter.im" target="_blank" rel="noreferrer">https://hygino.recruiter.im</a></li>
            </ul>
        </section>
    );
}

export default CompanyInfo;
