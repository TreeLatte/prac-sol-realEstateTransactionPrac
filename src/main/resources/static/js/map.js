let mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

let map = new kakao.maps.Map(mapContainer, mapOption);

// 장소 검색 객체를 생성합니다
let ps = new kakao.maps.services.Places();

let geocoder = new kakao.maps.services.Geocoder();

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
// function placesSearchCB (data, status, pagination) {
//     if (status === kakao.maps.services.Status.OK) {
//
//         // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
//         // LatLngBounds 객체에 좌표를 추가합니다
//         var bounds = new kakao.maps.LatLngBounds();
//
//         for (var i = 0; i < data.length; i++) {
//             displayMarker(data[i]);
//             bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
//         }
//
//         // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
//         map.setBounds(bounds);
//     }
//     else {
//         console.log(data);
//         console.log(status);
//         console.log(pagination);
//     }
// }

// 주소 검색 완료 시 호출되는 콜백함수 입니다
function addressSearchCB(result, status) {
    if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">result</div>'
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);

    }
}

function searchResultOnclick(thisElement, rdealerLawdnm,dong,jibun){
    $(".search_line").removeClass("active");
    $(thisElement).addClass("active");
    let findPlace = rdealerLawdnm + " " + dong + " " + jibun;
    // let findPlace = "고양시 덕양구 화정동 851";
    // let findPlace2 = rdealerLawdnm + " " + dong;


    // ps.keywordSearch(findPlace, placesSearchCB);
    geocoder.addressSearch(findPlace,addressSearchCB);
}

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {

    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x)
    });

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow();

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
}

