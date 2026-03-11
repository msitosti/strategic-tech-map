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
      id: 1, name: "반도체", icon: "🔲",
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
            { name: "DRAM 설계·공정·소자", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "낸드플래시 설계·공정·소자", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "적층형 메모리", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true } },
            { name: "비휘발성·차세대 메모리(MRAM, PRAM, RRAM 등)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "1-2. 시스템·AI 반도체",
          items: [
            { name: "AI 반도체", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "화합물·전력반도체", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "센서 반도체", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "품목별 반도체 (모바일AP, 통신, 차량, 디스플레이 등)", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: true, protection: true } }
          ]
        },
        {
          name: "1-3. 반도체 공정·소재·부품·장비",
          items: [
            { name: "파운드리 공정", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "반도체 소재부품장비 - 증착", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "반도체 소재부품장비 - 노광", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "반도체 소재부품장비 - 식각", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "반도체 소재부품장비 - 제조기반", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: true } },
            { name: "반도체 소재부품장비 - 핵심부품", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: true } },
            { name: "반도체 패키징(후공정)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } }
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
            { name: "유기발광 패널", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "유기발광 소재부품장비", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "2-2. 무기발광 디스플레이",
          items: [
            { name: "무기발광패널-퀀텀닷", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: false } },
            { name: "무기발광패널-마이크로LED", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "무기발광 소재부품장비", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "2-3. 프리폼·공간 디스플레이",
          items: [
            { name: "프리폼/공간 디스플레이 (패널, 소부장)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } }
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
            { name: "AI 컴퓨팅 인프라", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "클라우드 운영·관리", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "3-2. AI 모델링",
          items: [
            { name: "AI 모델 경량화·최적화", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } },
            { name: "AGI 원천기술(멀티모달, 에이전트 AI, 생성형 AI 등)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "3-3. AI 산업적용",
          items: [
            { name: "AI 산업적용", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "3-4. AI 안전(Safety)",
          items: [
            { name: "AI 안전(Safety)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "3-5. SW·빅데이터",
          items: [
            { name: "SW", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "빅데이터", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
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
            { name: "양자컴퓨팅", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "4-2. 양자 통신",
          items: [
            { name: "양자통신", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: true } }
          ]
        },
        {
          name: "4-3. 양자 센싱",
          items: [
            { name: "양자센싱", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "4-4. 양자 알고리즘·SW",
          items: [
            { name: "양자 알고리즘/SW", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
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
            { name: "LTE/LTE-Adv", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: false, protection: true } },
            { name: "5G/5G-Adv", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true } }
          ]
        },
        {
          name: "5-2. 6G·위성통신",
          items: [
            { name: "6G", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "오픈랜(Open-RAN)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } },
            { name: "위성통신", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "5-3. 통신 부품·장비",
          items: [
            { name: "통신 부품/장비", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true } }
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
            { name: "데이터·AI 보안", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "6-2. 디지털 취약점 분석·침해대응",
          items: [
            { name: "디지털 취약점 분석·침해대응", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "6-3. 산업보안·블록체인",
          items: [
            { name: "지능형 영상보안", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "융합보안", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "블록체인", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
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
            { name: "바이오의약품 연구개발", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "화합물의약품 연구개발", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "임상 평가", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "제조-공정-인프라 및 특수치료제", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } }
          ]
        },
        {
          name: "7-2. 백신",
          items: [
            { name: "백신 연구개발", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "백신 임상평가", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: false } },
            { name: "백신 생산기반", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "7-3. 합성생물학",
          items: [
            { name: "합성생물학", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "7-4. AI-바이오",
          items: [
            { name: "AI-바이오", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "7-5. 바이오 농수산·식품",
          items: [
            { name: "바이오 농수산-식품", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "7-6. 바이오 화학",
          items: [
            { name: "바이오 화학", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "7-7. 의료·진단기기",
          items: [
            { name: "의료-진단기기", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } }
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
            { name: "로봇 공통플랫폼", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: true, protection: false } },
            { name: "로봇 부품", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: false } },
            { name: "제조용 로봇", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "서비스용 로봇", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } }
          ]
        },
        {
          name: "8-2. 로봇 지능기술",
          items: [
            { name: "로봇 자율이동", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "로봇 자율조작", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "인간-로봇 상호작용", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "8-3. 로봇 시스템 통합",
          items: [
            { name: "로봇 시스템 통합", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true } }
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
            { name: "자율주행 AI·SW 플랫폼", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: true } },
            { name: "자율주행 HW플랫폼·센서", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: true } }
          ]
        },
        {
          name: "9-2. 친환경차",
          items: [
            { name: "전기동력 자동차", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: true } },
            { name: "수소차", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: true } }
          ]
        },
        {
          name: "9-3. 내연기관차",
          items: [
            { name: "내연기관차", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: false, protection: true } }
          ]
        },
        {
          name: "9-4. 고속철도 차량",
          items: [
            { name: "고속철도 차량", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: false, protection: true } }
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
            { name: "우주 발사체", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true } },
            { name: "인공위성", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true } },
            { name: "우주탐사", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "10-2. 항공",
          items: [
            { name: "첨단 항공가스터빈 엔진·부품 (추력 15,000lbf 이상)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: false } },
            { name: "무인비행체", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "미래항공교통(AAM, UAM)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
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
            { name: "고부가가치·친환경 선박 및 기자재", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: true } }
          ]
        },
        {
          name: "11-2. 운항",
          items: [
            { name: "선박 자율운항", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: true } }
          ]
        },
        {
          name: "11-3. 해양자원",
          items: [
            { name: "해양자원탐사", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
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
            { name: "고에너지밀도 리튬이온전지", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "리튬이온전지 핵심소재 - 하이니켈 양극재", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true } },
            { name: "리튬이온전지 핵심소재 - 음극재, 전극", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true } },
            { name: "리튬이온전지 핵심소재 - 분리막, 전해질", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } },
            { name: "리튬이온전지 핵심소재 - 기타 소재", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "친환경 소재 생산", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "12-2. 차세대 이차전지",
          items: [
            { name: "반·전고체전지", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true } },
            { name: "리튬금속전지", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true } },
            { name: "리튬황전지", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: true } },
            { name: "비리튬계 이온전지(나트륨이온전지)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "흐름전지", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "12-3. 모듈-팩·관리시스템",
          items: [
            { name: "이차전지 모듈-팩", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "배터리 관리시스템", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "12-4. 재사용·재활용",
          items: [
            { name: "재사용-재활용", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } }
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
            { name: "원자로 핵심 소재·부품", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } },
            { name: "원전설계", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "원전제조", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "원전운영", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "13-2. 소형 원자로",
          items: [
            { name: "경수형 SMR", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "비경수형 SMR", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true } },
            { name: "연구용 원자로", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: false, protection: true } }
          ]
        },
        {
          name: "13-3. 후행 핵주기",
          items: [
            { name: "후행 핵주기 (방폐물 운반·저장·처분·재활용, 원전 해체)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "13-4. 방사선 활용",
          items: [
            { name: "방사선 활용", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
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
            { name: "수전해 수소생산", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "기타 수소생산", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "14-2. 수소 저장·운송",
          items: [
            { name: "기체 수소 저장·운송", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false } },
            { name: "액화 수소 저장·운송", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "기타 수소 저장·운송", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: false } }
          ]
        },
        {
          name: "14-3. 수소 활용",
          items: [
            { name: "연료전지 - 고정용", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: true } },
            { name: "연료전지 - 모빌리티용", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: true } },
            { name: "수소·암모니아 발전", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: true } },
            { name: "수소 활용 제철", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: false } },
            { name: "기타 수소 활용", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: false } }
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
            { name: "태양광", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "풍력", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "기타 재생에너지", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "15-2. 발전·전력망·에너지효율화",
          items: [
            { name: "발전시스템", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "전력망", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } },
            { name: "에너지 효율향상", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } }
          ]
        },
        {
          name: "15-3. 온실가스 감축 기술",
          items: [
            { name: "탄소 포집·활용·저장", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "산업공정 연·원료 대체", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "15-4. 오염저감·자원순환",
          items: [
            { name: "오염저감·자원순환", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } }
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
            { name: "고기능 섬유", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "하이퍼 플라스틱", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "기능성 탄성소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "정밀화학 소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } },
            { name: "탄소 소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "16-2. 금속·세라믹 소재",
          items: [
            { name: "금속 소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } },
            { name: "세라믹 소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "16-3. 철강",
          items: [
            { name: "철강", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } }
          ]
        },
        {
          name: "16-4. 기반 부품",
          items: [
            { name: "기반 부품", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
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
            { name: "기계·장비", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true } }
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
            { name: "방산", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: true } }
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
            { name: "공간컴퓨팅 (실감형 콘텐츠)", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        },
        {
          name: "19-2. 문화 콘텐츠",
          items: [
            { name: "게임·영화·방송·애니메이션·웹툰 콘텐츠", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false } }
          ]
        }
      ]
    }
  ]
};
