const TECH_DATA = {
  meta: {
    title: "국가 전략기술 분류체계 현황",
    laws: [
      { id: "strategic", name: "국가전략기술육성법", short: "전략육성법", color: "#1a56db", sub: "국가전략기술" },
      { id: "tax_strategic", name: "조세특례제한법(국가전략기술)", short: "조특법-전략", color: "#7e3af2", sub: "국가전략기술" },
      { id: "tax_growth", name: "조세특례제한법(신성장원천기술)", short: "조특법-신성장", color: "#057a55", sub: "신성장원천기술" },
      { id: "advanced", name: "국가첨단전략산업법", short: "첨단전략산업법", color: "#d03801", sub: "국가첨단전략기술" },
      { id: "protection", name: "산업기술보호법", short: "산업기술보호법", color: "#6b7280", sub: "국가핵심기술" }
    ]
  },
  sectors: [
    {
      id: 1, name: "반도체", icon: "💾",
      laws: {
        strategic: "반도체·디스플레이",
        tax_strategic: "반도체",
        tax_growth: "차세대 전자정보 디바이스, 첨단 소부장",
        advanced: "반도체",
        protection: "반도체, 전기전자"
      },
      subsectors: [
        {
          name: "1-1. 메모리 반도체",
          items: [
            { name: "DRAM 설계·공정·소자", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "국가핵심기술 : 30나노 / 국가첨단전략 : 16나노 / 조특법-국가전략 : 15나노 / 국가전략기술 : 10나노급 이하 목표(고집적-저항기반 메모리)" },
            { name: "낸드플래시 설계·공정·소자", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "국가핵심기술 : 64단 / 국가첨단전략 : 128단 / 조특법-국가전략 : 170단 / 국가전략기술 : 1,000단 이상 목표(고집적-저항기반 메모리)" },
            { name: "적층형 메모리", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true }, note: "국가핵심기술 : D램, 낸드, 30나노 이하급 파운드리 적층" },
            { name: "비휘발성·차세대 메모리(MRAM, PRAM, RRAM 등)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "1-2. 시스템·AI 반도체",
          items: [
            { name: "AI 반도체", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 고성능/저전력 AI반도체 / 조특법-국가전략 : 7나노 이하 SoC" },
            { name: "화합물·전력반도체", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 전력반도체 / 조특법-국가전략 : 0.35나노미터 이하 BCDMOS 등" },
            { name: "센서 반도체", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "이미지센서 관련 - 국가핵심기술 : 1나노미터 이하 / 조특법-전략, 국가첨단 : 0.8나노미터 이하 / 국가전략기술 : 차세대 고성능 센싱" },
            { name: "품목별 반도체 (모바일AP, 통신, 차량, 디스플레이 등)", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "국가핵심기술 : 모바일AP, 통신모뎀, OLED용 DDI" }
          ]
        },
        {
          name: "1-3. 반도체 공정·소재·부품·장비",
          items: [
            { name: "파운드리 공정", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "국가핵심기술 : 30나노 / 국가첨단전략 : 14나노 / 조특법-전략 : 7나노" },
            { name: "반도체 소재부품장비 - 증착", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "조특법-전략 : 고유전체용 전구체, 블랭크마스크 / 국가전략기술 : 반도체 소부장" },
            { name: "반도체 소재부품장비 - 노광", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "조특법-전략 : 포토레지스트" },
            { name: "반도체 소재부품장비 - 식각", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "조특법-전략 : 고순도 불화수소, 고기능성 인산" },
            { name: "반도체 소재부품장비 - 제조기반", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "국가핵심기술 : 대구경 웨이퍼 / 조특법-전략 : 실리콘/화합물 기판, 석영 도가니" },
            { name: "반도체 소재부품장비 - 핵심부품", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "MLCC(국가핵심, 조특법), MCM(조특법)" },
            { name: "반도체 패키징(후공정)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "시스템반도체용 첨단패키징 전반 (HBM 패키징 : 메모리 분야 참고)" }
          ]
        }
      ]
    },
    {
      id: 2, name: "디스플레이", icon: "🖥️",
      laws: {
        strategic: "반도체·디스플레이",
        tax_strategic: "디스플레이",
        tax_growth: "차세대 전자정보 디바이스",
        advanced: "디스플레이",
        protection: "디스플레이"
      },
      subsectors: [
        {
          name: "2-1. 유기발광 디스플레이",
          items: [
            { name: "유기발광 패널", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "AMOLED 패널 설계/제조/공정/모듈/구동" },
            { name: "유기발광 소재부품장비", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "조특법-전략 : 패널제조, TFT형성 장비 부품, 하이브리드 커버 윈도우 등" }
          ]
        },
        {
          name: "2-2. 무기발광 디스플레이",
          items: [
            { name: "무기발광패널-퀀텀닷", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: false }, note: "반치폭 40나노미터 이하" },
            { name: "무기발광패널-마이크로LED", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "조특법-전략 : 칩크기 50나노미터 이하 / 국가첨단전략 : 칩크기 30나노미터 이하" },
            { name: "무기발광 소재부품장비", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "2-3. 프리폼·공간 디스플레이",
          items: [
            { name: "프리폼/공간 디스플레이 (패널, 소부장)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 프리폼 디스플레이 / 조특법-신성장 : 플렉서블 디스플레이" }
          ]
        }
      ]
    },
    {
      id: 3, name: "AI·SW", icon: "🤖",
      laws: {
        strategic: "인공지능",
        tax_strategic: "인공지능",
        tax_growth: "지능정보 / 차세대 SW·보안",
        advanced: "-",
        protection: "-"
      },
      subsectors: [
        {
          name: "3-1. AI 인프라 고도화",
          items: [
            { name: "AI 컴퓨팅 인프라", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "조특법-전략(시행규칙) : 서버, 스토리지, 전력공급, 공기조화, 냉각시설 및 전기통신 설비 / 국가전략기술 : 효율적 학습 및 AI인프라 고도화" },
            { name: "클라우드 운영·관리", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "3-2. AI 모델링",
          items: [
            { name: "AI 모델 경량화·최적화", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false }, note: "조특법-전략 : 저전력고효율 컴퓨팅 기술" },
            { name: "AGI 원천기술(멀티모달, 에이전트 AI, 생성형 AI 등)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "조특법-전략 : 생성형AI, 에이전트AI, 학습추론 고도화 / 국가전략기술 : 첨단AI모델링-의사결정" }
          ]
        },
        {
          name: "3-3. AI 산업적용",
          items: [
            { name: "AI 산업적용", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "3-4. AI 안전(Safety)",
          items: [
            { name: "AI 안전(Safety)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "조특법-전략 : 인간중심 인공지능 기술 / 조특법-신성장 : 데이터 비식별화 기술 / 국가전략기술 : 안전신뢰AI" }
          ]
        },
        {
          name: "3-5. SW·빅데이터",
          items: [
            { name: "SW", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "빅데이터", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        }
      ]
    },
    {
      id: 4, name: "양자", icon: "⚛️",
      laws: {
        strategic: "양자",
        tax_strategic: "-",
        tax_growth: "지능정보",
        advanced: "-",
        protection: "정보통신"
      },
      subsectors: [
        {
          name: "4-1. 양자 컴퓨팅",
          items: [
            { name: "양자컴퓨팅", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 양자컴퓨팅 / 조특법-신성장 : 양자컴퓨터 제작활용 (공통)" }
          ]
        },
        {
          name: "4-2. 양자 통신",
          items: [
            { name: "양자통신", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: true }, note: "국가핵심기술 : 퀀텀 리피터 기술 / 국가전략기술 : 양자통신(암호통신, 네트워크, 양자통신이론)" }
          ]
        },
        {
          name: "4-3. 양자 센싱",
          items: [
            { name: "양자센싱", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false }, note: "국가전략기술 : 양자센싱(관성, 시간/주파수, 자기장/전기장, 광기반 등)" }
          ]
        },
        {
          name: "4-4. 양자 알고리즘·SW",
          items: [
            { name: "양자 알고리즘/SW", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 양자컴퓨팅 / 조특법-신성장 : 양자컴퓨터 제작활용 (공통)" }
          ]
        }
      ]
    },
    {
      id: 5, name: "통신", icon: "📡",
      laws: {
        strategic: "차세대 통신",
        tax_strategic: "-",
        tax_growth: "차세대 방송통신 / 항공·우주",
        advanced: "-",
        protection: "정보통신"
      },
      subsectors: [
        {
          name: "5-1. LTE·5G",
          items: [
            { name: "LTE/LTE-Adv", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: false, protection: true }, note: "국가핵심기술 : LTE/LTE_adv/5G/5G_adv 시스템, 계측기기" },
            { name: "5G/5G-Adv", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "조특법-전략 : 기지국장비, 코어네트워크, 차세대 근거리 무선통신 기술 / 국가전략기술 : 5G-Adv" }
          ]
        },
        {
          name: "5-2. 6G·위성통신",
          items: [
            { name: "6G", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 6G" },
            { name: "오픈랜(Open-RAN)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false }, note: "국가전략기술 : 오픈랜" },
            { name: "위성통신", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 5G-6G 위성통신 / 조특법-전략 : 항공-우주 분야 참고" }
          ]
        },
        {
          name: "5-3. 통신 부품·장비",
          items: [
            { name: "통신 부품/장비", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "국가핵심기술 : 전력증폭기, 광통신 핵심기술 / 조특법-신성장 : 단말 특화부품(통신모듈, 모뎀, RF침셋) / 국가전략기술 : 5G-6G 고효율 통신부품" }
          ]
        }
      ]
    },
    {
      id: 6, name: "사이버보안", icon: "🔐",
      laws: {
        strategic: "사이버보안",
        tax_strategic: "-",
        tax_growth: "지능정보 / 차세대SW-보안",
        advanced: "-",
        protection: "-"
      },
      subsectors: [
        {
          name: "6-1. 데이터·AI 보안",
          items: [
            { name: "데이터·AI 보안", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 데이터-AI보안 / 조특법-신성장 : 미래컴퓨팅 응용보안기술" }
          ]
        },
        {
          name: "6-2. 디지털 취약점 분석·침해대응",
          items: [
            { name: "디지털 취약점 분석·침해대응", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 디지털취약점 분석-대응, 네트워크-클라우드 보안 / 조특법-신성장 : 사이버위협 인텔리전스 대응 기술" }
          ]
        },
        {
          name: "6-3. 산업보안·블록체인",
          items: [
            { name: "지능형 영상보안", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 산업-가상융합 보안 / 조특법-신성장 : 휴먼바이오 영상기반" },
            { name: "융합보안", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 산업-가상융합 보안 / 조특법-신성장 : 융합서비스 제품 보안내재화" },
            { name: "블록체인", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 산업-가상융합 보안 / 조특법-신성장 : 블록체인 기술(P2P네트워킹, 분산저장 등)" }
          ]
        }
      ]
    },
    {
      id: 7, name: "첨단바이오", icon: "🧬",
      laws: {
        strategic: "첨단바이오",
        tax_strategic: "바이오의약품 / 백신",
        tax_growth: "바이오·헬스",
        advanced: "바이오",
        protection: "생명공학"
      },
      subsectors: [
        {
          name: "7-1. 의약품",
          items: [
            { name: "바이오의약품 연구개발", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "국가핵심기술 : 항체 대규모 발효정제(1만리터 이상) / 국가첨단전략 : 동물세포 배양정제(1만리터 이상), 오가노이드 분화배양(100dose-lot 이상 등) / 조특법-전략 : 바이오 신약, 비임상시험, 바이오시밀러 / 국가전략기술 : 유전자 세포치료(편집, 전달, RNA, CAR, 오가노이드, 세포 유래물질 등)" },
            { name: "화합물의약품 연구개발", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "조특법-신성장 : 혁신형 신약" },
            { name: "임상 평가", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "조특법-전략 : 바이오의약품 1상, 2상, 3상 / 조특법-신성장 : 화합물의약품 1상, 2상, 3상" },
            { name: "제조-공정-인프라 및 특수치료제", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "국가핵심기술 : 보툴리눔 독소제재 생산, 원자현미경 제조 / 조특법-전략 : 바이오의약품 원료, 소재, 제조, 부품, 장비" }
          ]
        },
        {
          name: "7-2. 백신",
          items: [
            { name: "백신 연구개발", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "조특법-전략 : 방어항원 등 스크리닝 및 제조, 비임상시험 / 국가전략기술 : 감염병 백신치료" },
            { name: "백신 임상평가", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: false }, note: "조특법-전략 : 백신 1상, 2상, 3상" },
            { name: "백신 생산기반", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: false }, note: "조특법-전략 : 백신 원료, 원부자재, 생산장비" }
          ]
        },
        {
          name: "7-3. 합성생물학",
          items: [
            { name: "합성생물학", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 합성생물학 (바이오파운드리 / cf. 합성생물학육성법), 조특법-신성장 : 바이오파운드리" }
          ]
        },
        {
          name: "7-4. AI-바이오",
          items: [
            { name: "AI-바이오", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 디지털 헬스데이터 분석-활용 (바이오 빅데이터, 특화 AI 모델링) / 조특법-신성장 : 정밀의료, 맞춤형 건강관리" }
          ]
        },
        {
          name: "7-5. 바이오 농수산·식품",
          items: [
            { name: "바이오 농수산-식품", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "조특법-신성장 : 비가열 및 고온ㆍ고압 전처리, 식품용 기능성 물질, 신품종 종자, 유용미생물, 스마트팜, 단백질 분리ㆍ분획ㆍ정제 및 구조화, 식품 냉ㆍ해동 안정화" }
          ]
        },
        {
          name: "7-6. 바이오 화학",
          items: [
            { name: "바이오 화학", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "조특법-신성장 : 바이오매스 유래 바이오플라스틱 생산, 바이오화장품" }
          ]
        },
        {
          name: "7-7. 의료·진단기기",
          items: [
            { name: "의료-진단기기", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "국가핵심기술 : 바이오마커 응용 감염질환용 면역 분석 시스템 / 조특법-신성장 : 초음파, 신체 내 생분해 소재, 유전자 검사용 및 감염병 진단기기, 암진단용 혈액 검사기기, 신체기능 복원보조 의료기기" }
          ]
        }
      ]
    },
    {
      id: 8, name: "첨단로봇·제조", icon: "🦾",
      laws: {
        strategic: "첨단로봇·제조",
        tax_strategic: "-",
        tax_growth: "로봇 / 지능정보",
        advanced: "로봇",
        protection: "로봇"
      },
      subsectors: [
        {
          name: "8-1. 로봇 제품·부품",
          items: [
            { name: "로봇 공통플랫폼", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: true, protection: false }, note: "국가첨단전략 : 휴머노이드 로봇 구동기 및 프레임 (최고속도 3.3m/s 이상, 20kg 이상 운반) / 조특법-신성장 : 웨어러블 로봇" },
            { name: "로봇 부품", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: false }, note: "국가첨단전략 : 휴머노이드 로봇 구동기 및 프레임 (최고속도 3.3m/s 이상, 20kg 이상 운반) / 조특법-신성장 : 웨어러블 로봇 / 국가전략기술 : 로봇 구동부품-정밀제어 SW (제어기, 모터, 감속기, 드라이버 등)" },
            { name: "제조용 로봇", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "조특법-신성장 : 반도체 생산, 태양전지 제조, FPD(디스플레이) 이송, 협동기반, 용접" },
            { name: "서비스용 로봇", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "국가핵심기술 : 복강경, 내시경 등 수술로봇 / 조특법-신성장 : 소형 구조, 수술진단재활, 간병, 안내통역, Tele-presence, 생활도우미, 교사보조용 교육" }
          ]
        },
        {
          name: "8-2. 로봇 지능기술",
          items: [
            { name: "로봇 자율이동", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 로봇 자율이동 / 조특법-신성장 : 실내외 자율이동 및 작업수행, 감시경계용 서비스로봇" },
            { name: "로봇 자율조작", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 고난도 자율조작" },
            { name: "인간-로봇 상호작용", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 인간-로봇 상호작용 / 조특법-신성장 : 대화신호 추출, 직관적 교시" }
          ]
        },
        {
          name: "8-3. 로봇 시스템 통합",
          items: [
            { name: "로봇 시스템 통합", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "국가핵심기술 : 제조-물류 환경에서의 다중로봇 운영 SW, 이동형 로봇 통합통제 / 조특법-신성장 : 지능형 기계 및 자율협업. 사이버물리시스템 / 국가전략기술 : 가상제조(디지털트윈, 스마트팩토리)" }
          ]
        }
      ]
    },
    {
      id: 9, name: "육상 모빌리티", icon: "🚗",
      laws: {
        strategic: "첨단 모빌리티",
        tax_strategic: "미래형 운송 및 이동수단",
        tax_growth: "미래형 자동차",
        advanced: "-",
        protection: "자동차·철도"
      },
      subsectors: [
        {
          name: "9-1. 자율주행",
          items: [
            { name: "자율주행 AI·SW 플랫폼", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "국가핵심기술 : 자율주행 핵심부품 시스템(상용화 3년 이내 제어시스템) / 조특법-전략 : 주행상황 인지기반 통합제어, 탑승자 인지 및 인터페이스, 조특법-신성장 : 자율주행 기록 및 사고원인 규명 / 국가전략기술 : 자율주행시스템" },
            { name: "자율주행 HW플랫폼·센서", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: true }, note: "국가핵심기술 : 자율주행 핵심부품 시스템(상용화 3년 이내 카메라, 레이더, 라이더, 정밀측위) / 조특법-전략 : 주행상황 인지 센서, 주행지능정보처리 통합시스템" }
          ]
        },
        {
          name: "9-2. 친환경차",
          items: [
            { name: "전기동력 자동차", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "국가핵심기술 : 하이브리드 및 전력기반차 시스템 설게제조 / 조특법-전략 : 전기차 구동시스템 고효율화, 전기차 전력변화 및 충전 / 조특법-신성장 : 전기차 무선충전, 하이브리드차 / 국가전략기술 : 전기-수소치" },
            { name: "수소차", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: true }, note: "조특법-전략 : '수소' 분야 검토 필요" }
          ]
        },
        {
          name: "9-3. 내연기관차",
          items: [
            { name: "내연기관차", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: false, protection: true }, note: "국가핵심기술 : 가솔린 직접분사식 시스템, LPG 직접분사식 시스템, EURO 6 기준 이상 디젤엔진, 자동차 엔진·자동변속기_x000B_(양산 후 2년 이내)" }
          ]
        },
        {
          name: "9-4. 고속철도 차량",
          items: [
            { name: "고속철도 차량", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: false, protection: true }, note: "국가핵심기술 : 복합소재 일체성형 철도차량 차체\n고속철도차량 동력시스템 제어진단, 고속철도차량 차체" }
          ]
        }
      ]
    },
    {
      id: 10, name: "우주·항공", icon: "🚀",
      laws: {
        strategic: "우주항공·해양 / 첨단 모빌리티",
        tax_strategic: "-",
        tax_growth: "항공·우주",
        advanced: "방산",
        protection: "우주"
      },
      subsectors: [
        {
          name: "10-1. 우주",
          items: [
            { name: "우주 발사체", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "국가전략기술 : 대형다단연소 사이클 엔진" },
            { name: "인공위성", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "국가전략기술 : 우주관측-센싱" },
            { name: "우주탐사", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false }, note: "국가전략기술 : 달착륙-표면탐사" }
          ]
        },
        {
          name: "10-2. 항공",
          items: [
            { name: "첨단 항공가스터빈 엔진·부품 (추력 15,000lbf 이상)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: false }, note: "국가전략기술 : 첨단항공 가스터빈 엔진-부품 / 국가첨단전략기술, 조특법-신성장 : 방위산업(방산) 분야에 포함 (스펙 동일 : 추력 15,000 lbf 이상)" },
            { name: "무인비행체", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "드론: 자율비행, 하이브리드 추진, 탑재센서" },
            { name: "미래항공교통(AAM, UAM)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false }, note: "국가전략기술 : 도심항공교통" }
          ]
        }
      ]
    },
    {
      id: 11, name: "조선·해양", icon: "🚢",
      laws: {
        strategic: "지능정보 / 첨단 소부장 / 탄소중립 등",
        tax_strategic: "우주항공·해양",
        tax_growth: "미래형 운송 및 이동수단",
        advanced: "-",
        protection: "조선"
      },
      subsectors: [
        {
          name: "11-1. 조선",
          items: [
            { name: "고부가가치·친환경 선박 및 기자재", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "국가핵심기술 : 선박 기자재, 친환경연료 선박 등 다수 포함 / 조특법-전략 : 친환경 선박" }
          ]
        },
        {
          name: "11-2. 운항",
          items: [
            { name: "선박 자율운항", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "인공지능형 자율운항 공통" }
          ]
        },
        {
          name: "11-3. 해양자원",
          items: [
            { name: "해양자원탐사", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false }, note: "국가전략기술 : 해양자원탐사" }
          ]
        }
      ]
    },
    {
      id: 12, name: "이차전지", icon: "🔋",
      laws: {
        strategic: "이차전지",
        tax_strategic: "이차전지",
        tax_growth: "에너지·환경",
        advanced: "이차전지",
        protection: "전기전자"
      },
      subsectors: [
        {
          name: "12-1. 리튬이온전지 및 핵심소재",
          items: [
            { name: "고에너지밀도 리튬이온전지", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "국가핵심기술 : 265 / 국가첨단전략기술 : 280 / 조특법-전략 : 265 / 국가전략기술 : 350급 이상 목표 (파우치형 기준, Wh/kg)" },
            { name: "리튬이온전지 핵심소재 - 하이니켈 양극재", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true }, note: "Ni > 80%" },
            { name: "리튬이온전지 핵심소재 - 음극재, 전극", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "전극 600mAH/g 이상" },
            { name: "리튬이온전지 핵심소재 - 분리막, 전해질", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false }, note: "" },
            { name: "리튬이온전지 핵심소재 - 기타 소재", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "친환경 소재 생산", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "12-2. 차세대 이차전지",
          items: [
            { name: "반·전고체전지", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true }, note: "국가핵심기술, 국가첨단전략, 조특법-전략 : 600mAh/g 이상 고성능 전극 기준 / 국가전략기술 : 400Wh/kg 이상 반-전고체전지 개발목표" },
            { name: "리튬금속전지", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true }, note: "국가핵심기술, 국가첨단전략, 조특법-전략 : 600mAh/g 이상 고성능 전극 기준 / 국가전략기술 : 충방전 800회 이상 리튬금속전지" },
            { name: "리튬황전지", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: true }, note: "국가핵심기술, 국가첨단전략, 조특법-전략 : 600mAh/g 이상 고성능 전극 기준 / 국가전략기술 : 400Wh/kg 이상 리튬황전지 개발목표" },
            { name: "비리튬계 이온전지(나트륨이온전지)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "국가전략기술 : 나트륨이온전지 (220Wh/kg 이상 개발 목표)" },
            { name: "흐름전지", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "12-3. 모듈-팩·관리시스템",
          items: [
            { name: "이차전지 모듈-팩", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "조특법 : 160Wh/kg 이상 / 국가전략기술 : 210Wh/kg 이상 개발목표" },
            { name: "배터리 관리시스템", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "12-4. 재사용·재활용",
          items: [
            { name: "재사용-재활용", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "조특법-전략 : Li>35%, Co,Ni>90% / 국가전랴긱술 : Li>95%, Co,Ni>99% 이상 개발목표" }
          ]
        }
      ]
    },
    {
      id: 13, name: "원자력", icon: "☢️",
      laws: {
        strategic: "차세대 원자력",
        tax_strategic: "-",
        tax_growth: "에너지·환경",
        advanced: "-",
        protection: "원자력"
      },
      subsectors: [
        {
          name: "13-1. 대형 원전",
          items: [
            { name: "원자로 핵심 소재·부품", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "국가핵심기술 : 원전 구조물 설계초과지진력 저잠용 고무계열 면진장치" },
            { name: "원전설계", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "원전제조", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "원전운영", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "13-2. 소형 원자로",
          items: [
            { name: "경수형 SMR", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "비경수형 SMR", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "" },
            { name: "연구용 원자로", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: false, protection: true }, note: "" }
          ]
        },
        {
          name: "13-3. 후행 핵주기",
          items: [
            { name: "후행 핵주기 (방폐물 운반·저장·처분·재활용, 원전 해체)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "13-4. 방사선 활용",
          items: [
            { name: "방사선 활용", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "비파괴검사(NDT)" }
          ]
        }
      ]
    },
    {
      id: 14, name: "수소", icon: "💧",
      laws: {
        strategic: "수소",
        tax_strategic: "수소",
        tax_growth: "에너지·환경 / 탄소중립",
        advanced: "-",
        protection: "수소"
      },
      subsectors: [
        {
          name: "14-1. 수소 생산",
          items: [
            { name: "수전해 수소생산", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "기타 수소생산", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "14-2. 수소 저장·운송",
          items: [
            { name: "기체 수소 저장·운송", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false }, note: "" },
            { name: "액화 수소 저장·운송", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "기타 수소 저장·운송", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "14-3. 수소 활용",
          items: [
            { name: "연료전지 - 고정용", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "" },
            { name: "연료전지 - 모빌리티용", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: true }, note: "" },
            { name: "수소·암모니아 발전", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "" },
            { name: "수소 활용 제철", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "기타 수소 활용", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: false }, note: "" }
          ]
        }
      ]
    },
    {
      id: 15, name: "클린에너지·환경", icon: "🌱",
      laws: {
        strategic: "-",
        tax_strategic: "-",
        tax_growth: "에너지·환경 / 탄소중립",
        advanced: "-",
        protection: "전기전자 / 기계"
      },
      subsectors: [
        {
          name: "15-1. 재생에너지",
          items: [
            { name: "태양광", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "풍력", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "기타 재생에너지", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "15-2. 발전·전력망·에너지효율화",
          items: [
            { name: "발전시스템", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "전력망", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "" },
            { name: "에너지 효율향상", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "" }
          ]
        },
        {
          name: "15-3. 온실가스 감축 기술",
          items: [
            { name: "탄소 포집·활용·저장", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "산업공정 연·원료 대체", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "15-4. 오염저감·자원순환",
          items: [
            { name: "오염저감·자원순환", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "" }
          ]
        }
      ]
    },
    {
      id: 16, name: "융복합 소재·부품", icon: "⚙️",
      laws: {
        strategic: "-",
        tax_strategic: "-",
        tax_growth: "융복합 소재 / 첨단 소·부·장",
        advanced: "-",
        protection: "금속"
      },
      subsectors: [
        {
          name: "16-1. 화학·고분자·섬유 소재",
          items: [
            { name: "고기능 섬유", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "하이퍼 플라스틱", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "기능성 탄성소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "정밀화학 소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" },
            { name: "탄소 소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "16-2. 금속·세라믹 소재",
          items: [
            { name: "금속 소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "" },
            { name: "세라믹 소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "16-3. 철강",
          items: [
            { name: "철강", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "" }
          ]
        },
        {
          name: "16-4. 기반 부품",
          items: [
            { name: "기반 부품", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        }
      ]
    },
    {
      id: 17, name: "기계·장비", icon: "🔧",
      laws: {
        strategic: "-",
        tax_strategic: "-",
        tax_growth: "첨단 소·부·장",
        advanced: "-",
        protection: "기계"
      },
      subsectors: [
        {
          name: "17. 기계·장비",
          items: [
            { name: "기계·장비", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "" }
          ]
        }
      ]
    },
    {
      id: 18, name: "방위산업", icon: "🛡️",
      laws: {
        strategic: "우주항공·해양",
        tax_strategic: "-",
        tax_growth: "방위산업",
        advanced: "방산",
        protection: "(방위산업기술보호법 별도)"
      },
      subsectors: [
        {
          name: "18. 방위산업",
          items: [
            { name: "방산", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: true }, note: "" }
          ]
        }
      ]
    },
    {
      id: 19, name: "콘텐츠 기술", icon: "🎮",
      laws: {
        strategic: "-",
        tax_strategic: "-",
        tax_growth: "콘텐츠 / 지능형 디바이스",
        advanced: "-",
        protection: "-"
      },
      subsectors: [
        {
          name: "19-1. 공간컴퓨팅 (실감형 콘텐츠)",
          items: [
            { name: "공간컴퓨팅 (실감형 콘텐츠)", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        },
        {
          name: "19-2. 문화 콘텐츠",
          items: [
            { name: "게임·영화·방송·애니메이션·웹툰 콘텐츠", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "" }
          ]
        }
      ]
    }
  ]
};
