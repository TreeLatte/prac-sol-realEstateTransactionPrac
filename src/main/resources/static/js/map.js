let mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
        disableDoubleClickZoom: true,
    };

let map = new kakao.maps.Map(mapContainer, mapOption);
map.setZoomable(false);

// 장소 검색 객체를 생성합니다
let ps = new kakao.maps.services.Places();

let geocoder = new kakao.maps.services.Geocoder();
map.setLevel(3);

console.log(transactions);

if(transactions){

    transactions.forEach((transaction) => {
        console.log(transaction);
        let findPlace = transaction.rdealerLawdnm + " " + transaction.dong + " " + transaction.jibun;
        console.log(findPlace);
        geocoder.addressSearch(findPlace,searchResultCB);
        // let point = {};
        // point.x = coordinate[1];
        // point.y = coordinate[0];
        // points.push(point);
        // path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
    });


    // var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    //
    // // 결과값으로 받은 위치를 마커로 표시합니다
    // var marker = new kakao.maps.Marker({
    //     map: map,
    //     position: coords
    // });
}
let infowindow = new kakao.maps.InfoWindow({
});
function searchResultCB(result, status) {
    if (status === kakao.maps.services.Status.OK) {
        map.setLevel(3);
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
    }
}

// 주소 검색 완료 시 호출되는 콜백함수 입니다
function addressSearchCB(result, status) {
    if (status === kakao.maps.services.Status.OK) {
        console.log(result);
        infowindow.close();
        map.setLevel(3);
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        const temp = document.createElement('div');
        temp.textContent = result[0].road_address.building_name;
        temp.style.width = '200px';
        temp.style.textAlign = 'center';
        temp.style.padding = '5px ';

        // infowindow.setContent('<div style="width:150px;text-align:center;padding:6px 0;" ></div>');
        infowindow.setContent(temp);
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

