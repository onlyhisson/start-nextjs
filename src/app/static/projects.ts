const projects = [
  {
    title: "거래소 지갑 시스템",
    titleLabel: "거래소 지갑 시스템 프로젝트",
    href: "https://velog.io/@onlyhisson?tag=crypto",
    imgSrc: "/wallet_flow.png",
    imgAlt: "wallet_flow",
    skills: ["Node.js", "web3.js", "MariaDB"],
    skillLinks: [
      {
        id: 1,
        title: "BitcoinRPC.js",
        href: "https://github.com/onlyhisson/bitcoin-rpc-function-sample",
      },
    ],
    description: [
      "2022. 10 - 2023. 04",
      "API - 지갑 주소 생성, 지갑 주소 유효성 확인",
      "Bitcoin 스케쥴러 - 출금 처리(Transaction Batching), 입금 확인(블록의 트랜잭션 스캔), 입출금 트랜잭션 컨펌 처리, " +
        "UTXO 의 spent 여부 확인(핫웰렛 출금시, 회원 지갑의 비트코인 집금시 필요), " +
        "memory pool 분당 정보 편집 & 수집(트랜잭션 수수료 책정 위함)",
      "Ethereum(+ERC20 Token) 스케쥴러 - 출금 처리, 입금 확인(블록의 트랜잭션 스캔), 입출금 트랜잭션 컨펌 처리",
      "Tron(+TRC20 Token) 스케쥴러 - 출금 처리, 입금 확인(블록의 트랜잭션 스캔), 입출금 트랜잭션 컨펌 처리",
      "비트코인은 bitcoin core 에서 제공하는 프로그램을 RPC 서버로 셋팅 후 요청할 수 있는 명령어를 Nodejs로 함수화 함",
      "트론은 tronweb 모듈 에서 제공하는 API 사용",
    ],
  },
  {
    title: "PG 앱 개발 · Android",
    titleLabel: "결제 앱 개발",
    href: "https://play.google.com/store/apps/details?id=com.pairingpay",
    imgSrc: "/pairing.png",
    imgAlt: "paring_2.0",
    skills: ["React Native", "Redux", "styled-components"],
    skillLinks: [],
    description: [
      "2022. 02 - 2022. 04",
      "상품 정보, 카드 정보로 결제 요청 및 처리 결과 조회",
      "Google Play 스토어에 배포함",
    ],
    installInfo: {
      href: "https://play.google.com/store/apps/details?id=com.pairingpay",
      content: "100+ Installs",
    },
  },
  {
    title: "암호화폐 거래소",
    titleLabel: "암호화폐 거래소",
    href: "https://www.bitstoa.com/ex",
    imgSrc: "/tv.png",
    imgAlt: "trading view",
    skills: ["PHP", "HTML", "CSS", "jQuery", "MariaDB"],
    skillLinks: [
      {
        id: 1,
        title: "trading-view.js",
        href: "https://gitlab.com/onlyhisson/trading-view/-/blob/master/test_jhs4.html",
      },
    ],
    description: [
      "2021. 02 - 2021. 08",
      "시세 차트 부분(trading view) 구현",
      "소캣 통신으로 바이낸스 호가 및 시세 정보를 거래 메뉴 화면에 출력",
    ],
  },
  {
    title: "청소 중개 플랫폼 관리자",
    titleLabel: "청소 중개 플랫폼 관리 페이지",
    href: null,
    imgSrc: "/cleaning.jpeg",
    imgAlt: "paring_2.0",
    skills: ["Node.js", "Express.js", "HTML", "CSS", "jQuery", "MariaDB"],
    skillLinks: [],
    description: [
      "2020. 10 - 2020. 12",
      "지역별 청소 업체 및 매칭 건 조회",
      "결제 금액, 미결제 금액, 매칭건수 등 통계 대시보드 개발",
    ],
  },
  {
    title: "스마트팜",
    titleLabel: "스마트팜",
    href: null,
    imgSrc: "/hanarofarm.png",
    imgAlt: "paring_2.0",
    skills: ["Node.js", "Express.js", "HTML", "CSS", "jQuery", "MariaDB"],
    skillLinks: [],
    description: [
      "2018. 06 - 2019. 05",
      "농장 자율 재배를 위한 데이터 수집",
      "- 공공데이터포털에서 제공하는 외부 API를 이용해 스마트팜이 있는 지역의 기상 정보 및 해당 지역의 센서 정보를 수집",
      "- 수집한 정보를 차트로 구현, 특정 시간 단위 데이터 갱신 처리",
      "기기 소캣 통신",
      "- 웹에서 스마트팜 비밀하우스의 좌우 창 개폐를 원격 처리",
      "- 작물 영양분을 주입하는 양액기 원격 조작",
    ],
  },
  {
    title: "SCMS(스마트카드 통합관리 솔루션)",
    titleLabel: "USIM 관리자 웹페이지",
    href: null,
    imgSrc:
      "https://cdn.greenpostkorea.co.kr/news/photo/202301/205094_206160_729.jpg",
    imgAlt: "paring_2.0",
    skills: ["JAVA", "HTML", "CSS", "jQuery", "Oracle"],
    skillLinks: [],
    description: [
      "2014. 04 - 2015. 12",
      "모바일 USIM 관리자 시스템 개발 및 운영",
      "- KT 모바일 회원 USIM의 신용 카드 및 교통 카드 정보를 관리",
      "서버 하드웨어 교체",
      "- 새 하드웨어에 프로그램 소스 이관 작업 및 셋팅",
    ],
  },
];

export default projects;
