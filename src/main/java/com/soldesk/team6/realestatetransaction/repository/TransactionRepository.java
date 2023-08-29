package com.soldesk.team6.realestatetransaction.repository;

import com.soldesk.team6.realestatetransaction.domain.Transaction;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import javax.persistence.EntityManager;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.util.*;

@Repository
@RequiredArgsConstructor
public class TransactionRepository {

    private final EntityManager em;
    private final String REST_API_KEY = "3368d77b1785d1fe6b098c7f89993eba";
    private final String REST_API_URL = "https://dapi.kakao.com/v2/local/search/address";

    //DB에 있는 각종 거래 결과를 얻어오는 매서드
    public List<Transaction> find(String address) {

        //b_code(법정동코드)의 5자리 필요.
        String b_code = getBcode(address);
        //카카오 api 검색결과에서 법정동코르를 추출 -> 이를 이용해서 db검색 -> 그 결과를 리턴
        return em.createQuery("select i from Transaction as i where i.regionalCode = :regionalCode", Transaction.class).setParameter("regionalCode",b_code)
                .getResultList();
    }

    //카카오 로컬 api에 주소를 입력하여 법정동 코드를 얻어오는 매서드
    private String getBcode(String address){

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("Authorization", "KakaoAK " + REST_API_KEY); //Authorization 설정
        HttpEntity<String> httpEntity = new HttpEntity<>(httpHeaders); //엔티티로 만들기
        URI targetUrl = UriComponentsBuilder
                .fromUriString(REST_API_URL) //기본 url
                .queryParam("query", address) //인자
                .build()
                .encode(StandardCharsets.UTF_8) //인코딩
                .toUri();

        //GetForObject는 헤더를 정의할 수 없음
        ResponseEntity<Map> result = restTemplate.exchange(targetUrl, HttpMethod.GET, httpEntity, Map.class);
        Map apiCallResult = result.getBody();
        LinkedHashMap documentMap = (LinkedHashMap)((ArrayList<?>)apiCallResult.get("documents")).get(0);
        LinkedHashMap addressMap = (LinkedHashMap)documentMap.get("address");
        String b_code = addressMap.get("b_code").toString().substring(0,5);
        return b_code; //내용 반환
    }
}
