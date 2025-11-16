import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import { PageBanner } from "../../common/PageBanner"

export default function LocationPage() {
  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_APP_KEY as string || "",
  });

  return (
    <div className="min-h-screen">
      <PageBanner title="찾아오시는길" description="새움소프트 본사 위치와 오시는 길을 안내합니다" backgroundImage="/img/page_Banner_img/common_background.png" />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            새움소프트 <span className="text-blue-600">에</span>
          </h2>
          <p className="text-xl text-gray-600">방문하시는 길을 안내해드리겠습니다.</p>
        </div>

        {/* Kakao Map Integration */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <Map
            center={{ lat: 37.388648752408, lng: 126.940437407746 }}
            style={{ width: "100%", height: "450px" }}
            level={3}
          >
            <MapMarker position={{ lat: 37.388648752408, lng: 126.940437407746 }}>
              <div style={{
                padding: "15px",
                minWidth: "200px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                border: "none",
                outline: "none"
              }}>
                <div style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "8px"
                }}>
                  새움소프트
                </div>
                <div style={{
                  fontSize: "12px",
                  color: "#666",
                  marginBottom: "10px"
                }}>
                  경기도 안양시 만안구 안양천서로 93
                </div>
                <div style={{
                  display: "flex",
                  gap: "8px"
                }}>
                  <a
                    href="https://map.kakao.com/link/map/새움소프트,37.388648752408,126.940437407746"
                    style={{
                      flex: 1,
                      padding: "6px 12px",
                      backgroundColor: "#f0f0f0",
                      color: "#333",
                      textDecoration: "none",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "500",
                      textAlign: "center"
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    큰 지도보기
                  </a>
                  <a
                    href="https://map.kakao.com/link/to/새움소프트,37.388648752408,126.940437407746"
                    style={{
                      flex: 1,
                      padding: "6px 12px",
                      backgroundColor: "#2563eb",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "500",
                      textAlign: "center"
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    길찾기
                  </a>
                </div>
              </div>
            </MapMarker>
          </Map>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">(주) 새움소프트 SaeumSoft, Ltd</h3>
          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-bold">Address .</span> 경기도 안양시 만안구 안양천서로 93 새움빌딩 1,2,3층
            </p>
            <p className="text-sm text-gray-600">1호선 명학역 도보 5분거리, 4호선 범계역 도보 10분거리</p>
            <p className="text-lg mt-4">
              <span className="font-bold">Contact .</span> teampl.net@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
