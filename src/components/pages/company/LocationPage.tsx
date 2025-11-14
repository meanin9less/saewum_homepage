import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { PageBanner } from "../../common/PageBanner"

export default function LocationPage() {

  return (
    <div className="pt-48 min-h-screen">
      <PageBanner title="찾아오시는길" description="새움소프트 본사 위치와 오시는 길을 안내합니다" backgroundImage="/img/page_Banner_img/common_background.png" />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            새움소프트 <span className="text-blue-600">에</span>
          </h2>
          <p className="text-xl text-gray-600">방문하시는 길을 안내해드리겠습니다.</p>
        </div>

        <Map
          center={{ lat: 37.0084, lng: 126.9613 }}
          style={{ width: '100%', height: '400px' }}
          level={3}
          className="rounded-lg mb-8"
        >
          <MapMarker position={{ lat: 37.0084, lng: 126.9613 }} />
        </Map>

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
