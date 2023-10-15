"use client";

import { useSearchParams } from "next/navigation";
import { Map, Polyline } from "react-kakao-maps-sdk";

interface LatLng {
  lat: number;
  lng: number;
}

export default function Page() {
  let latlngs = [];
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  if (data) {
    const decoded = decodeURI(data);
    const parsed = JSON.parse(decoded);
    latlngs = parsed.paths;
  }
  return (
    <>
      <Map
        center={{ lat: 37.564214, lng: 127.001699 }}
        level={8}
        style={{ width: "100%", height: "500px" }}
      >
        <Polyline
          path={latlngs}
          strokeWeight={10} // 선의 두께 입니다
          strokeColor={"#FF2400"} // 선의 색깔입니다
          strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={"solid"} // 선의 스타일입니다
        />
      </Map>
    </>
  );
}
