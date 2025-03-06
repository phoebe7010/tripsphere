import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from '../hooks/useKakaoLoader';

const KakoMap = () => {
  useKakaoLoader();

  return (
    <Map
      center={{
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        width: '100%',
        height: '450px',
      }}
      level={4}>
      <MapMarker
        position={{
          lat: 33.450701,
          lng: 126.570667,
        }}
      />
    </Map>
  );
};

export default KakoMap;
