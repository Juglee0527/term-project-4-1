import React, { useEffect } from 'react';

function KakaoMap() {
    useEffect(() => {
        if (document.getElementById('kakao-map-script')) return;

        const script = document.createElement('script');
        script.id = 'kakao-map-script';
        script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=99c357602bb26ffeda3f4839f4b65ab6&autoload=false';
        script.async = true;

        script.onload = () => {
            if (window.kakao && window.kakao.maps) {
                window.kakao.maps.load(() => {
                    const container = document.getElementById('map');
                    const options = {
                        center: new window.kakao.maps.LatLng(37.392221, 126.958969),
                        level: 3,
                    };
                    const map = new window.kakao.maps.Map(container, options);
                    new window.kakao.maps.Marker({
                        position: new window.kakao.maps.LatLng(37.392221, 126.958969),
                        map: map,
                    });
                });
            }
        };

        document.head.appendChild(script);
    }, []);

    return (
        <section style={{ padding: '2rem' }}>
            <h3>📍 회사 위치</h3>
            <div
                id="map"
                style={{ width: '100%', height: '400px', border: '1px solid #ccc' }}
            ></div>
        </section>
    );
}

export default KakaoMap;
