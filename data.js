const TECH_DATA = {
  meta: {
    title: "국가 전략기술 분류체계 현황",
    laws: [
      { id: "strategic", name: "국가전략기술육성법", short: "전략기술육성법", color: "#1a56db", sub: "국가전략기술" },
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
        tax_growth: "차세대 전자정보 디바이스 / 첨단 소·부·장",
        advanced: "반도체",
        protection: "반도체, 전기전자"
      },
      subsectors: [
        {
          name: "1-1. 메모리 반도체",
          items: [
            { name: "DRAM 설계·공정·소자", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "# 스펙 비교 - 국가핵심기술: 30나노 / 국가첨단전략: 16나노 / 조특법-국가전략: 15나노 / 국가전략기술: 10나노급 이하 목표(고집적-저항기반 메모리) // # 정책 참고 - 「반도체특별법」 시행 예정", specs: { strategic: "고집적 저항기반 메모리 (개발 목표 : 10나노급)", tax_strategic: "15나노 이하급 설계·제조", tax_growth: "12나노 이하급 설계·제조", advanced: "16나노 이하급 설계·공정·소자", protection: "30나노 이하급 D램 설계·공정·소자" } },
            { name: "낸드플래시 설계·공정·소자", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "# 스펙 비교 -국가핵심기술: 64단 / 국가첨단전략: 128단 / 조특법-국가전략: 170단 / 국가전략기술: 1,000단 이상 목표(고집적-저항기반 메모리)", specs: { strategic: "고집적 저항기반 메모리 (개발 목표 : 1,000단 이상)", tax_strategic: "170단 이상 설계·제조", tax_growth: "220단 이상 설계·제조", advanced: "128단 이상 설계·공정·소자", protection: "64단 이상 설계·공정·소자" } },
            { name: "적층형 메모리", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true }, note: "# 스펙 비교 -국가핵심기술: D램, 낸드, 30나노 이하급 파운드리 적층 / 국가첨단전략기술 : 16나노 이하급 D램, 128단 이상 낸드, 14나노 이하 파운드리 적층 / 조특법 : HBM 등 차세대 메모리", specs: { strategic: "고집적 저항기반 메모리 (적층형 3D D램 등)", tax_strategic: "▶차세대 메모리(HBM 등) \n▶3D 적층형 반도체", tax_growth: null, advanced: "▶16나노급 이하 D램 적층\n▶128단 이상 낸드 적층 \n▶14나노 이하급 파운드리 적층", protection: "▶D램 적층조립 및 검사 \n▶낸드 적층조립 및 검사 \n▶30나노 이하급 파운드리 적층" } },
            { name: "비휘발성·차세대 메모리(MRAM, PRAM, RRAM 등)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "고집적 저항기반 메모리(MRAM, PRAM, RRAM, FeRAM, ECRAM 등)", tax_strategic: "▶차세대 메모리 설계 \n▶차세대 메모리 소재·장비·부품(MRAM, PRAM, RRAM, PIM, LLC, CXL, SOM 등)", tax_growth: "차세대 메모리 설계 및 소재·부품·장비 (MRAM, PRAM, RRAM 등)", advanced: null, protection: null } }
          ]
        },
        {
          name: "1-2. 시스템·AI 반도체",
          items: [
            { name: "AI 반도체", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "# 지정 대상 - 국가전략기술: 고성능·저전력 AI반도체 / 조특법-국가전략: 7나노 이하 SoC", specs: { strategic: "고성능·저전력 AI 반도체 (AI반도체 소자, 설계, 최적화SW)", tax_strategic: "7나노 이하 고속컴퓨팅 SoC 설계·제조", tax_growth: "7나노 이하 고속컴퓨팅 SoC", advanced: null, protection: null } },
            { name: "화합물·전력반도체", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "# 지정 대상 - 국가전략기술: 전력반도체(화합물) / 조특법-국가전략: 0.35나노미터 이하 BCDMOS 등", specs: { strategic: "전력반도체 (화합물 기반 소재, 소자, 설계, 공정)", tax_strategic: "▶에너지효율향상 반도체 (실리콘 기반, 화합물 기반) \n▶전력 및 전력관리 반도체(0.35 μm 이하 BCDMOS 등)", tax_growth: "▶에너지효율향상 반도체 \n▶전력반도체 BCDMOS (0.13 μm 이하) \n▶전자제품 무선충전 기술", advanced: null, protection: null } },
            { name: "센서 반도체", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "# 스펙 비교 (이미지센서 관련) - 국가핵심기술: 1나노미터 이하 / 조특법-전략, 국가첨단: 0.8나노미터 이하 / 국가전략기술: 차세대 고성능 센싱", specs: { strategic: "차세대 고성능 센싱 (스마트기기용 초소형 MEMS, 모빌리티(레이더, 라이다), 극한환경용 등)", tax_strategic: "고성능 마이크로센서 설계·제조·패키징 (MEMS, 0.8μm 이하, CMOS 이미지센서 등)", tax_growth: "고성능 마이크로센서 설계·제조·패키징 (MEMS, 0.8μm 이하 CMOS 이미지센서 등)", advanced: "0.8μm 이하 이미지센서 설계·공정·소자", protection: "1μm 이하 이미지센서 설계·공정·소자" } },
            { name: "품목별 반도체 (모바일AP, 통신, 차량, 디스플레이 등)", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "# 지정 대상 - 개별 품목 단위로 지정, 체계별 확인 필요", specs: { strategic: null, tax_strategic: "▶차세대 디지털기기 SoC \n▶차량용 반도체 설계·제조 \n▶차세대 디지털기기 및 차량용 디스플레이용 반도체 (DDI, T-Con, PMIC)", tax_growth: "▶IoT·웨어러블 SoC \n▶차량용 반도체 설계·제조 \n▶플렉서블 및 차세대 차량 디스플레이 패널용 DDI", advanced: "OLED용 DDI 설계", protection: "▶모바일 AP SoC 설계공정 \n▶LTE·5G 등 통신 베이스모뎀 설계 \n▶OLED용 DDI 설계" } }
          ]
        },
        {
          name: "1-3. 반도체 공정·소재·부품·장비",
          items: [
            { name: "파운드리 공정", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "# 스펙 비교 - 국가핵심기술: 30나노 / 국가첨단전략: 14나노 / 조특법-전략: 7나노", specs: { strategic: null, tax_strategic: "▶SoC 관련 7nm 이하급 파운드리 제조공정·공정설계 \n▶7nm 이하 IP 설계·검증", tax_growth: "▶SoC 관련 7nm 이하급 파운드리 제조·후공정·장비", advanced: "▶14나노급 이하 파운드리 공정·소자 및 3차원 적층형성", protection: "▶30나노급 이하 파운드리 공정·소자 및 3차원 적층형성" } },
            { name: "반도체 소재부품장비 - 증착", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "# 참고 - 소부장 관련 보다 구체적인 특례는 「소부장특별법」(핵심전략기술) 확인 필요", specs: { strategic: "반도체 소재·부품·장비 (초미세 노광공정, (10나노 이하급) 초미세 식각 및 증착 (300mm 웨이퍼급))", tax_strategic: "▶고유전체용 전구체 (ALD, CVD 공정용) \n▶블랭크마스크 개발·제조", tax_growth: "▶고유전체용 전구체 (ALD, CVD 공정용) \n▶블랭크마스크 개발·제조", advanced: null, protection: null } },
            { name: "반도체 소재부품장비 - 노광", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "반도체 소재·부품·장비 (초미세 노광공정, (10나노 이하급) 초미세 식각 및 증착 (300mm 웨이퍼급))", tax_strategic: "포토레지스트 개발·제조", tax_growth: "포토레지스트 개발·제조", advanced: null, protection: null } },
            { name: "반도체 소재부품장비 - 식각", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "반도체 소재·부품·장비 (초미세 노광공정, (10나노 이하급) 초미세 식각 및 증착 (300mm 웨이퍼급))", tax_strategic: "▶고순도 불화수소 개발·제조(순도 5N 이상) \n▶고기능성 인산제조 (고선택비(1,000 이상))", tax_growth: "▶고순도 불화수소 개발·제조(순도 5N 이상) \n▶고기능성 인산제조 (고선택비(1,000 이상))", advanced: null, protection: null } },
            { name: "반도체 소재부품장비 - 제조기반", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "# 지정 대상 - 국가핵심기술: 대구경 웨이퍼 / 조특법-전략: 실리콘/화합물 기판, 석영 도가니", specs: { strategic: null, tax_strategic: "▶차세대·첨단 메모리 및 파운드리용 소재·장비·부품 \n▶반도체용 실리콘·화합물 기판 \n▶고순도 석영 도가니 (순도 5N 이상)", tax_growth: "▶첨단 메모리 장비·장비부품 \n▶SoC 파운드리 소재·장비 \n▶첨단 메모리 반도체용 기판 \n▶고순도 석영 도가니 (순도 5N 이상)", advanced: null, protection: "대구경(300mm) 웨이퍼 제조용 단결정 성장" } },
            { name: "반도체 소재부품장비 - 핵심부품", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "# 지정 대상 - MLCC(국가핵심(전기전자 분야), 조특법-신성장(첨단 소부장 분야)), MCM(조특법-전략)", specs: { strategic: null, tax_strategic: "AI컴퓨팅용 차세대 MCM 설계·제조·신소재·부품", tax_growth: "고기능 MLCC 소재·부품", advanced: null, protection: "21uF/mm3 이상 초고용량밀도 MLCC 설계·공정·제조 기술" } },
            { name: "반도체 패키징(후공정)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "# 지정 대상 - 시스템반도체용 첨단패키징 공정, 검사 등 전반이 지정 대상에 포함 (세부 확인 필요)", specs: { strategic: "반도체 첨단패키징 (이종집적 칩렛 패키지 관련 설계·해석, 공정, 제조·테스트 소부장 전반)", tax_strategic: "▶2D·2.5D·3D 패키징 공정 소재·부품·장비 \n▶고성능·고효율 시스템 반도체테스트 및 관련 장비·부품 \n▶코트막형성재 개발·제조", tax_growth: "▶웨이퍼레벨 칩 패키징 공정 \n▶코트막형성재 개발·제조(80mJ·cm2 이하 고감도, 폭 7μm 이하 재배선)", advanced: "시스템반도체용 첨단 패키지 공정·조립·검사 (FO-WLP, FO-PLP, FO-PoP, SiP 등)", protection: "시스템용 첨단 패키지 조립·검사(FO-WLP, FO-PLP, FO-PoP 등)" } }
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
            { name: "유기발광 패널", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "", specs: { strategic: null, tax_strategic: "AMOLED 패널 설계·제조·공정·모듈·구동", tax_growth: "능동형 유기발광다이오드 패널 및 부품ㆍ소재ㆍ장비 (대화면(9인치 이상), 전자이동도 9㎠/Vs 이상)", advanced: "AMOLED 패널 설계·제조·공정·구동 (초소형(3,000ppi), 중소형(500 ppi), 중대형(FHD), 대형(4K))", protection: "AMOLED 패널 설계·공정·제조·구동" } },
            { name: "유기발광 소재·부품·장비", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "(공통) 디스플레이 소재·부품·장비 (Ex-OLED 소재부품, 대면적, 온실리콘 장비)", tax_strategic: "▶패널 제조용 증착ㆍ코팅 소재 \n▶TFT 형성 장비 및 부품 (전자이동도 9㎠/Vs 이상) \n▶OLED 화소 형성ㆍ봉지 공정 장비·부품 \n▶하이브리드 커버 윈도우 (두께 100 ㎛ 이하, 투과율 80% 이상 UTG)", tax_growth: "대기압 플라즈마 식각장비", advanced: null, protection: null } }
          ]
        },
        {
          name: "2-2. 무기발광 디스플레이",
          items: [
            { name: "무기발광패널-퀀텀닷", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: false }, note: "# 스펙 비교 - QD 반치폭 40nm 이하 (국가첨단전략 : 색재현율 90% / 조특법-전략 : RoHS 충족)", specs: { strategic: "무기발광 디스플레이 (초소형·고효율·고색재현 광원, (개발목표 : 칩크기 5㎛ 등) 고속·고효율 디스플레이 생산)", tax_strategic: "친환경 QD 소재 적용 패널 (반치폭 40nm 이하, RoHS 충족)", tax_growth: "(공통) 친환경 QD 나노 소재 패널ㆍ부품ㆍ소재ㆍ장비 제조", advanced: "친환경 QD 소재 적용 패널 설계·제조·공정·구동 (반치폭 40nm, 색재현율 90%)", protection: null } },
            { name: "무기발광패널-마이크로LED", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "# 스펙 비교 - 국가첨단전략: 칩크기 30나노미터 이하 / 조특법-전략: 칩크기 50나노미터 이하", specs: { strategic: "무기발광 디스플레이 (초소형·고효율·고색재현 광원, (개발목표 : 칩크기 5㎛ 등) 고속·고효율 디스플레이 생산)", tax_strategic: "마이크로 LED 패널 (칩 크기 50㎛ 이하, 기판결합밀도 ≤1x1015/cm3)", tax_growth: "(공통) 마이크로 LED 패널ㆍ부품ㆍ소재ㆍ장비 제조 (칩 크기 100㎛ 이하)", advanced: "▶마이크로 LED 적용 패널 설계·제조·공정·구동 (칩 크기 30㎛ 이하) \n▶나노 LED 적용 패널 (칩 크기 1㎛ 이하)", protection: "(기타) TFT-LCD 패널(8세대급) 설계·공정·제조·구동" } },
            { name: "무기발광 소재·부품·장비", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "(공통) 디스플레이 소재·부품·장비 (친환경 융복합 디스플레이 소재)", tax_strategic: "마이크로 LED 에피·전사·접합 (EQE 청색 ≥20%, 녹색 ≥10%, 적색 ≥5%)", tax_growth: "▶(공통) 친환경 QD 나노 소재 패널ㆍ부품ㆍ소재ㆍ장비 제조 \n▶(공통) 마이크로 LED 패널ㆍ부품ㆍ소재ㆍ장비 제조 (칩 크기 100㎛ 이하)", advanced: null, protection: null } }
          ]
        },
        {
          name: "2-3. 프리폼·공간 디스플레이",
          items: [
            { name: "프리폼/공간 디스플레이 (패널, 소부장)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "# 지정 대상 - 국가전략기술: 프리폼 디스플레이 전반 / 조특법-신성장: 플렉서블 디스플레이", specs: { strategic: "▶프리폼 디스플레이 (극소곡률 롤러블·슬라이더블, 다축·다중 접이식 디스플레이, 고해상도·고신축율 구현, 신축성 디스플레이 신공정) \n▶(공통) 무기발광 디스플레이(마이크로LED 등 융복합 디스플레이 제품화)", tax_strategic: "(공통) 하이브리드 커버 윈도우 (두께 100 ㎛ 이하 UTG) (공통) 하이브리드 커버 윈도우 (두께 100 ㎛ 이하, 투과율 80% 이상 UTG)", tax_growth: "▶플렉서블 디스플레이 (이하 패널·부품·소재·장비 포함) \n▶차세대 차량용 디스플레이 \n▶VRㆍARㆍMR 기기용 디스플레이", advanced: null, protection: null } }
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
            { name: "AI 컴퓨팅 인프라", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "# 참고 - 조특법-전략 : 시설투자 세액공제 관련 조특법 시행규칙 별표6의2에 규정 / # 정책 참고 - 「인공지능기본법」 시행", specs: { strategic: "(공통) 효율적 학습 및 AI 인프라 고도화 (분산·병렬형 학습 인프라 구축 및 다종 AI 반도체 연계 등) (AI Cloud 최적운영 및 클라우드 환경 내 초거대 AI 모델 관리를 위한 플랫폼 기술)", tax_strategic: "AI 서비스 제공을 위한 서버, 스토리지, 전력공급, 공기조화, 냉각시설 및 전기통신 설비 (시행규칙)", tax_growth: "▶인지컴퓨팅 기술 \n▶이기종 멀티코어 SW 기술", advanced: null, protection: null } },
            { name: "클라우드 운영·관리", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "(공통) 효율적 학습 및 AI 인프라 고도화 (분산·병렬형 학습 인프라 구축 및 다종 AI 반도체 연계 등) (AI Cloud 최적운영 및 클라우드 환경 내 초거대 AI 모델 관리를 위한 플랫폼 기술)", tax_strategic: null, tax_growth: "SaaS, PaaS, IaaS", advanced: null, protection: null } }
          ]
        },
        {
          name: "3-2. AI 모델링",
          items: [
            { name: "AI 모델 경량화·최적화", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false }, note: "", specs: { strategic: "(공통) 효율적 학습 및 AI 인프라 고도화 (모델 경량화 및 최적화를 통한 학습 고효율화)", tax_strategic: "저전력·고효율 컴퓨팅 기술 (모델 경량화, 최적화 알고리즘)", tax_growth: null, advanced: null, protection: null } },
            { name: "AGI 원천기술(멀티모달, 에이전트 AI, 생성형 AI 등)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "# 지정 대상 - 조특법-전략: 생성형AI, 에이전트AI, 학습추론 고도화 / 국가전략기술: 첨단AI모델링-의사결정", specs: { strategic: "첨단 AI 모델링·의사결정 (멀티 에이전트 AI, 자율성장 AI, 상식 추론, 멀티모달, 뇌신경망 모사)", tax_strategic: "▶생성형 인공지능 \n▶에이전트 인공지능 \n▶학습 추론 고도화 (알고리즘(메타러닝, 딥러닝, 멀티모달 ) 추론기술 (연쇄사고, 분기구조, 다중 에이전트)", tax_growth: "▶딥러닝 등 학습 알고리즘, 지식추론, 지식베이스 구축 \n▶언어 이해 \n▶시각 이해 \n▶상황 이해", advanced: null, protection: null } }
          ]
        },
        {
          name: "3-3. AI 산업적용",
          items: [
            { name: "AI 산업적용", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "산업 활용·혁신 AI (전문영역별 특화 AI 개발 및 AI 전환을 위한 실증)", tax_strategic: null, tax_growth: "▶실시간 도시시설물 관리 \n▶지능형 콜드체인 모니터링", advanced: null, protection: null } }
          ]
        },
        {
          name: "3-4. AI 안전(Safety)",
          items: [
            { name: "AI 안전(Safety)", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "# 지정 대상 - 조특법-전략: 인간중심 인공지능 기술 / 조특법-신성장: 데이터 비식별화 기술 / 국가전략기술: 안전·신뢰AI", specs: { strategic: "안전·신뢰 AI(데이터 공정성, 모델 투명성, 시스템 강건성 강화)", tax_strategic: "인간 중심 인공지능 기술 (의사결정 구조 및 과정 직관화를 통한 신뢰성·안전성 향상)", tax_growth: "데이터 비식별화 기술", advanced: null, protection: null } }
          ]
        },
        {
          name: "3-5. SW·빅데이터",
          items: [
            { name: "SW", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶융합서비스 및 제품의 SW 내재화 기술 \n▶분산 병렬 SW 기술 \n▶차세대 메모리 기반 시스템 SW 기술 \n▶CAD·CAE SW 기술", advanced: null, protection: null } },
            { name: "빅데이터", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶빅데이터 수집·정제· 저장·처리 기술 \n▶빅데이터 분석·예측 기술", advanced: null, protection: null } }
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
            { name: "양자컴퓨팅", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "# 정책 참고 - 「양자기술산업법」 시행", specs: { strategic: "(공통) 양자컴퓨팅 (양자 하드웨어·시스템 기술 목표 : 초전도 1,000큐비트급, 이온포획, 중성원자 등)", tax_strategic: null, tax_growth: "(공통) 양자컴퓨터 제작·활용 (큐비트 구현, 큐비트 간 연산처리 장치)", advanced: null, protection: null } }
          ]
        },
        {
          name: "4-2. 양자 통신",
          items: [
            { name: "양자통신", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: true }, note: "# 지정 대상 - 국가핵심기술: 퀀텀 리피터 기술 / 국가전략기술: 양자통신(암호통신, 네트워크, 양자통신이론)", specs: { strategic: "양자통신 (양자암호통신, 양자네트워크(메모리, 중계기) 양자통신이론)", tax_strategic: null, tax_growth: null, advanced: null, protection: "퀀텀 리피터 기술 (양자이론 기반 통신장비 적용)" } }
          ]
        },
        {
          name: "4-3. 양자 센싱",
          items: [
            { name: "양자센싱", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false }, note: "", specs: { strategic: "양자센싱 (관성 센싱, 시간·주파수 센싱, 자기장·전기장 센싱, 광기반 센싱)", tax_strategic: null, tax_growth: null, advanced: null, protection: null } }
          ]
        },
        {
          name: "4-4. 양자 알고리즘·SW",
          items: [
            { name: "양자 알고리즘/SW", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "(공통) 양자컴퓨팅 (시스템SW, 오류정정·완화, 양자알고리즘 및 응용SW)", tax_strategic: null, tax_growth: "(공통) 양자컴퓨터 제작·활용 (양자컴퓨터 구동·원격사용, 계산·활용)", advanced: null, protection: null } }
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
            { name: "LTE/LTE-Adv", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: false, protection: true }, note: "# 지정 대상 - 국가핵심기술은 LTE/LTE_adv/5G 등 상용 기술을 폭넓게 포함", specs: { strategic: null, tax_strategic: null, tax_growth: null, advanced: null, protection: "▶LTE/LTE_adv 시스템설계 ▶LTE/LTE_adv/5G /5G_adv 계측기기 설계 \n▶5G 및 5G_adv시스템 설계 (빔포밍·MIMO및 이동통신망) \n▶기가급 이동무선백홀기술" } },
            { name: "5G/5G-Adv", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "", specs: { strategic: "5G-Adv (무선망 커버리지 확장기술 (5G 대비 에너지 30% 저감), 무선 네트워크 경량화)", tax_strategic: null, tax_growth: "▶5G 이동통신 기지국 장비 \n▶5G 이동통신 코어네트워크 \n▶차세대 근거리 무선통신 기술 (IEEE 802.11ac보다 고성능)", advanced: null, protection: "▶LTE/LTE_adv 시스템설계 ▶LTE/LTE_adv/5G /5G_adv 계측기기 설계 \n▶5G 및 5G_adv시스템 설계 (빔포밍·MIMO및 이동통신망) \n▶기가급 이동무선백홀기술" } }
          ]
        },
        {
          name: "5-2. 6G·위성통신",
          items: [
            { name: "6G", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "6G (초고속 6G 네트워크, 초저지연 네트워크 아키텍처, 통신인프라 저전력화)", tax_strategic: null, tax_growth: "6G 이동통신 기술 (µsec급 지연, Tera bps급 속도)", advanced: null, protection: null } },
            { name: "오픈랜(Open-RAN)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false }, note: "", specs: { strategic: "오픈랜(Open-RAN) (오픈랜 HW 및 시스템통합, 가상화·지능화 SW, 상호호환·시험검증 SW·장비)", tax_strategic: null, tax_growth: null, advanced: null, protection: null } },
            { name: "위성통신", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "# 체계 관련 - 조특법-신성장에서는 '항공-우주' 분야에 포함", specs: { strategic: "5G·6G 위성통신 (저궤도 위성통신 탑재체·본체, 중심국·관제국, 단말)", tax_strategic: null, tax_growth: "<항공·우주 분야> \n▶위성본체 부분품 개발기술 \n▶위성통신 송수신 안테나 \n▶위성 탑재체(통신 등)", advanced: null, protection: null } }
          ]
        },
        {
          name: "5-3. 통신 부품·장비",
          items: [
            { name: "통신 부품/장비", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "# 지정대상 - 개별 품목 단위로 지정, 체계별 확인 필요", specs: { strategic: "5G·6G 고효율 통신부품 (단말용 RF·안테나, 기지국·중계기용 RF·안테나, 테라급 광통신 부품)", tax_strategic: null, tax_growth: "5G 이동통신 단말 특화부품 (통신모듈, 모뎀, RF칩셋 등)", advanced: null, protection: "▶무선장치에 활용 가능한 전력증폭기 설계 기술 \n▶차세대 패킷 광 전달망 구현을 위한 광통신 핵심기술" } }
          ]
        },
        {
          name: "5-4. 기타 관련 기술",
          items: [
            { name: "(기타: 사물인터넷, UHD 방송)", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶IoT 네트워크 기술 \n▶IoT 플랫폼 기술 \n▶지상파 UHD방송 송신기 \n▶UHD 방송 통합 다중화기 \n▶시그널링 시스템", advanced: null, protection: null } }
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
            { name: "데이터·AI 보안", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "데이터·AI 보안 (프라이버시 강화(PET), AI특화 사이버보안, (AI대상 공격대응, AI기반 탐지분석) 양자내성암호 및 전환)", tax_strategic: null, tax_growth: "미래컴퓨팅 응용·보안기술 (양자컴퓨팅 암호화, 해독방지)", advanced: null, protection: null } }
          ]
        },
        {
          name: "6-2. 디지털 취약점 분석·침해대응",
          items: [
            { name: "디지털 취약점 분석·침해대응", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "▶디지털취약점 분석·대응 (SW 공급망 무결성 검증, 랜섬웨어 탐지·복구, 침해사고 추적(포렌식 등)) \n▶네트워크·클라우드 보안 (제로트러스트 아키텍처 내재화, 5G·6G 통신 보안, 지능형 보안관제 자동화)", tax_strategic: null, tax_growth: "사이버위협 인텔리전스 대응 기술", advanced: null, protection: null } }
          ]
        },
        {
          name: "6-3. 산업보안·블록체인",
          items: [
            { name: "지능형 영상보안", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "(공통) 산업·가상융합 보안(지능형 영상보안)", tax_strategic: null, tax_growth: "휴먼바이오·영상기반 안전·감시·보안 기술", advanced: null, protection: null } },
            { name: "융합보안", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "(공통) 산업·가상융합 보안(물리-가상 융합보안(CPS) : 국가중요시설, 모빌리티 등)", tax_strategic: null, tax_growth: "융합서비스·제품 보안 내재화 기술(자율주행차, 인공심박기, 도어락 등)", advanced: null, protection: null } },
            { name: "블록체인", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "(공통) 산업·가상융합 보안(웹3.0 탈중앙화 보안)", tax_strategic: null, tax_growth: "블록체인 기술(P2P네트워킹,합의 계약검증, 분산저장 등)", advanced: null, protection: null } }
          ]
        }
      ]
    },
    {
      id: 7, name: "바이오", icon: "🧬",
      laws: {
        strategic: "바이오",
        tax_strategic: "바이오의약품 / 백신",
        tax_growth: "바이오·헬스",
        advanced: "바이오",
        protection: "생명공학"
      },
      subsectors: [
        {
          name: "7-1. 의약품",
          items: [
            { name: "바이오의약품 연구개발", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "# 지정 대상, 스펙 비교 - 국가핵심기술: 항체 대규모 발효정제(1만리터 이상) / 국가첨단전략기술: 동물세포 배양정제(1만리터 이상), 오가노이드 분화배양(100dose-lot 이상 등) / 조특법-전략: 바이오 신약, 비임상시험, 바이오시밀러 / 국가전략기술: 유전자 세포치료(편집, 전달, RNA, CAR, 오가노이드, 세포 유래물질 등)", specs: { strategic: "유전자·세포치료 (차세대 유전자 편집, 유전자 전달, RNA 치료 플랫폼, CAR 기반 C&GT, 세포 유래물질 치료, 오가노이드 기반 치료제)", tax_strategic: "▶바이오 신약 후보물질 발굴 및 바이오 신약제조 \n▶비임상 시험 기술 (바이오의약품) \n▶바이오시밀러 제조 및 개량", tax_growth: "동물용의약품 후보물질 생산기술", advanced: "▶동물세포 배양·정제 (1만리터 이상) \n▶오가노이드 분화 및 배양 (배양규모 100dose·lot 이상, 세포구성률, 생존율 80% 이상)", protection: "항체 대규모 발효정제 (1만리터 이상)" } },
            { name: "화합물의약품 연구개발", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶혁신형 신약 후보물질 발굴 및 제조 \n▶혁신형 개량신약 개발 및 제조", advanced: null, protection: null } },
            { name: "임상 평가", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "# 지정 대상 - 조특법-전략: 바이오의약품 1상, 2상, 3상 / 조특법-신성장: 화합물의약품 1상, 2상, 3상", specs: { strategic: null, tax_strategic: "<바이오의약품 관련> \n▶임상약리시험(1상) \n▶치료적 탐색(2상) \n▶치료적 확증(3상) (1~3상 지원 대상: R&D 비용이 매출액 2% 이상, 전략기술 분야가 R&D 10% 이상)", tax_growth: "<화합물의약품 관련> \n▶임상약리시험(1상) \n▶치료적 탐색(2상)\n▶치료적 확증(3상) (3상 지원 대상: R&D 비용이 매출액 2% 이상, 전략기술 분야가 R&D 10% 이상)", advanced: null, protection: null } },
            { name: "제조-공정-인프라 및 특수치료제", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "# 지정 대상 - 국가핵심기술: 보툴리눔 독소제재 생산, 원자현미경 제조 / 조특법-전략: 바이오의약품 원료, 소재, 제조, 부품, 장비", specs: { strategic: null, tax_strategic: "▶바이오의약품 원료·소재 제조 \n▶바이오의약품 부품·장비 설계·제조", tax_growth: null, advanced: null, protection: "▶보툴리눔 독소제제 생산 \n▶원자현미경 제조" } }
          ]
        },
        {
          name: "7-2. 백신",
          items: [
            { name: "백신 연구개발 - 발굴", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "감염병 백신·치료(첨단 백신개발 플랫폼, 감염병 치료제 개발, 약리·독성 평가기술)", tax_strategic: "방어 항원 등 스크리닝 및 제조", tax_growth: "방어 항원 등 스크리닝 및 제조", advanced: null, protection: null } },
            { name: "백신 연구개발 - 비임상", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false }, note: "", specs: { strategic: "감염병 백신·치료(첨단 백신개발 플랫폼, 감염병 치료제 개발, 약리·독성 평가기술)", tax_strategic: "비임상 시험 기술(백신)", tax_growth: null, advanced: null, protection: null } },
            { name: "백신 임상평가", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: "<백신 관련> \n▶임상약리시험(1상) \n▶치료적 탐색(2상) \n▶치료적 확증(3상)", tax_growth: null, advanced: null, protection: null } },
            { name: "백신 생산기반", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: "▶백신 원료·원부자재 \n▶백신 생산장비", tax_growth: null, advanced: null, protection: null } }
          ]
        },
        {
          name: "7-3. 합성생물학",
          items: [
            { name: "합성생물학", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "# 정책 참고 - 「합성생물학육성법」 시행 예정", specs: { strategic: "합성생물학 (빅데이터·AI기반 모델링, 유전자합성·유전체 제작, 초고속 스크리닝·성능평가, DBTL 단계별 핵심장비·SW, 바이오소재 생산 스케일업, 바이오 공정 디지털트윈)", tax_strategic: null, tax_growth: "신규 또는 대량 생산이 가능한 바이오화학 소재 개발 및 미생물 발굴 바이오 파운드리", advanced: null, protection: null } }
          ]
        },
        {
          name: "7-4. AI-바이오",
          items: [
            { name: "AI-바이오", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "# 지정 대상 - 국가전략기술: 디지털 헬스데이터 분석-활용 (바이오 빅데이터, 특화 AI 모델링) / 조특법-신성장: 정밀의료, 맞춤형 건강관리", specs: { strategic: "디지털 헬스데이터 분석활용(바이오 빅데이터 및 분석 인프라, 특화 AI 모델링)", tax_strategic: null, tax_growth: "정밀의료 등 맞춤형 건강관리 및 질병 예방ㆍ진단ㆍ치료 서비스를 위한 플랫폼", advanced: null, protection: null } }
          ]
        },
        {
          name: "7-5. 바이오 농수산·식품",
          items: [
            { name: "바이오 농수산-식품", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶비가열 및 고온ㆍ고압 전처리 \n▶식품용 기능성 물질 개발·제조 \n▶신품종 종자개발·가공처리 \n▶유용미생물의 스크리닝 및 유용물질 대량생산공정 \n▶스마트팜 환경제어 기기 제작 \n▶단백질 분리ㆍ분획ㆍ정제 및 구조화 \n▶식품 냉ㆍ해동 안정화", advanced: null, protection: null } }
          ]
        },
        {
          name: "7-6. 바이오 화학",
          items: [
            { name: "바이오 화학", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶바이오매스 유래 바이오플라스틱 생산 \n▶바이오 화장품 소재 개발·제조", advanced: null, protection: null } }
          ]
        },
        {
          name: "7-7. 의료·진단기기",
          items: [
            { name: "의료-진단기기", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "# 지정 대상 - 개별 품목 단위로 지정, 체계별 확인 필요", specs: { strategic: null, tax_strategic: null, tax_growth: "▶기능 융합형 초음파 영상 \n▶신체 내 생분해 소재 \n▶유전자 검사용 진단기기·시약 \n▶암진단용 혈액 검사기기·시약 \n▶감염병 병원체 검사용 진단기기·시약 \n▶신체기능 복원ㆍ보조 의료기기", advanced: null, protection: "바이오마커 고정화 기술을 응용한 감염질환용 다종 면역 분석 시스템" } }
          ]
        }
      ]
    },
    {
      id: 8, name: "로봇", icon: "🦾",
      laws: {
        strategic: "로봇",
        tax_strategic: "-",
        tax_growth: "로봇 / 지능정보",
        advanced: "로봇",
        protection: "로봇"
      },
      subsectors: [
        {
          name: "8-1. 로봇 제품·부품",
          items: [
            { name: "로봇 공통플랫폼", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: true, protection: false }, note: "# 정책 참고 - 「지능형로봇법」 시행", specs: { strategic: null, tax_strategic: null, tax_growth: "웨어러블 로봇", advanced: "휴머노이드 로봇 구동기 및 프레임 (최고속도 3.3m/s 이상, 20kg 이상 운반)", protection: null } },
            { name: "로봇 부품", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: false }, note: "# 지정대상 - 개별 품목 단위로 지정, 체계별 확인 필요", specs: { strategic: "로봇 구동 부품·정밀제어·SW (시촉각 센싱, SW정의형 제어기, 모터·감속기·드라이버)", tax_strategic: null, tax_growth: "모터, 엔코더, 드라이버 일체형의 구동기술", advanced: "휴머노이드 로봇 구동기 및 프레임 (최고속도 3.3m/s 이상, 20kg 이상 운반)", protection: null } },
            { name: "제조용 로봇", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶고청정 환경 반도체 생산 로봇 \n▶태양전지 제조 로봇 \n▶FPD(디스플레이) 이송 로봇 \n▶협동기반 제조 로봇 \n▶용접 로봇", advanced: null, protection: null } },
            { name: "서비스용 로봇", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "# 지정대상 - 개별 품목 단위로 지정, 체계별 확인 필요", specs: { strategic: null, tax_strategic: null, tax_growth: "▶소형 구조로봇(내단열 기능, 험지 돌파 기능 포함) \n▶수술·진단·재활 로봇 간병 로봇 \n▶안내·통역 로봇 \n▶Tele-presence 로봇 \n▶생활도우미 로봇 \n▶교사 보조용 교육 로봇", advanced: null, protection: "복강경, 내시경 및 영상유도 수술로봇 시스템" } }
          ]
        },
        {
          name: "8-2. 로봇 지능기술",
          items: [
            { name: "로봇 자율이동", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "로봇 자율이동 (비정형 환경 주행플랫폼 설계, 공간·상황인지, LLM·VLM 기반 예외상황 극복)", tax_strategic: null, tax_growth: "▶실내외 자율이동 및 작업수행 로봇 기술 \n▶감시경계용 서비스로봇 환경·위치인식 및 주행 기술", advanced: null, protection: null } },
            { name: "로봇 자율조작", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "고난도 자율조작 (맥락지능 기반 물체인식, 조작동작 자율생성)", tax_strategic: null, tax_growth: "▶실내외 자율이동 및 작업수행 로봇 기술 \n▶감시경계용 서비스로봇 환경·위치인식 및 주행 기술", advanced: null, protection: null } },
            { name: "인간-로봇 상호작용", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: "인간-로봇 상호작용 (소셜행동 자율생성, 고안전 물리적 상호작용, 로봇 인공지능 모델)", tax_strategic: null, tax_growth: "▶대화신호 추출 기술 (음성 인식 및 음성-문자 변환, 의사소통 및 태스크 수행) \n▶직관적 교시 기술 (임무 지시 등 소통 방식 직관화)", advanced: null, protection: null } }
          ]
        },
        {
          name: "8-3. 로봇 시스템 통합",
          items: [
            { name: "로봇 시스템 통합", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "# 지정 대상 - 국가핵심기술 : 제조-물류 환경에서의 다중로봇 운영 SW, 이동형 로봇 통합통제 / 조특법-신성장 : 지능형 기계 및 자율협업. 사이버물리시스템(지능정보 분야) / 국가전략기술 : 가상제조(디지털트윈, 스마트팩토리)", specs: { strategic: "가상 제조(디지털 트윈에 스마트 팩토리 이식)", tax_strategic: null, tax_growth: "▶지능형 기계 및 자율 협업 (작업상태 자동 진단 및 생산설비 원격 제어) \n▶사이버 물리 시스템 기술", advanced: null, protection: "▶제조·물류 환경에서의 다중로봇 운영 SW 기술 \n▶이동형 로봇 통합통제 기술" } }
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
            { name: "자율주행 AI·SW 플랫폼", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "# 지정 대상 - 국가전략기술: 레벨 4+ 자율주행 / 조특법-전략: 인지 및 통합제어 / 조특법-신성장: 자율주행 기록 및 사고원인 규명 / 국가핵심기술: 상용화 3년 이내 핵심 부품·시스템", specs: { strategic: "(공통) 자율주행 시스템 (AI·SDV 융합 기반 자율주행 SW플랫폼, 평가‧보안 표준 벤치마크, 자율주행시스템 성능 안전, MaaS 연계 교통융합 서비스)", tax_strategic: "▶주행상황 인지 기반 통합제어 (구동·조향 ·제동 ·제어 등) \n▶탑승자 인지 및 인터페이스", tax_growth: "자율주행 기록 및 사고원인 규명", advanced: null, protection: "(공통) 자율주행자동차 핵심 부품·시스템 설계·제조 (상용화 3년 이내 제어시스템)" } },
            { name: "자율주행 HW플랫폼·센서", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: true }, note: "# 지정 대상 - 국가핵심기술 : 자율주행 핵심부품 시스템(상용화 3년 이내 카메라, 레이더, 라이더, 정밀측위) / 조특법-전략 : 주행상황 인지 센서, 주행지능정보처리 통합시스템", specs: { strategic: "(공통) 자율주행 시스템 (고성능 자율주행용 차량용 컴퓨팅 시스템)", tax_strategic: "▶주행상황 인지 센서 (비전센서, 공간정보처리 등) \n▶주행지능정보처리 통합시스템 (고속정보처리, 통신 등)", tax_growth: null, advanced: null, protection: "(공통) 자율주행자동차 핵심 부품·시스템 (상용화 3년 이내 카메라, 레이더, 라이더, 정밀측위)" } }
          ]
        },
        {
          name: "9-2. 친환경차",
          items: [
            { name: "전기동력 자동차", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "# 지정 대상 - 국가핵심기술 : 하이브리드 및 전력기반차 시스템 설게제조 / 조특법-전략 : 전기차 구동시스템 고효율화, 전기차 전력변화 및 충전 / 조특법-신성장 : 전기차 무선충전, 하이브리드차 / 국가전략기술 : 전기-수소차", specs: { strategic: "(공통) 전기·수소차 (전기구동, 전기에너지, 전기충전 시스템)", tax_strategic: "▶전기차 구동시스템 고효율화 \n▶전기차 전력변환 및 충전시스템", tax_growth: "▶전기차 초고속·고효율 무선충전 \n▶하이브리드차 구동시스템 고효율화", advanced: null, protection: "▶하이브리드 및 전력기반차 시스템 설계 및 제조" } },
            { name: "수소차", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: true }, note: "# 참고 - 조특법-전략은 '수소' 분야에 규정", specs: { strategic: "(공통) 전기·수소차 (연료전지·수소저장 시스템)", tax_strategic: "<수소 분야> \n▶수소연료 저장·공급 장치 \n▶수소차용 연료전지 시스템 (출력밀도 3.1kW/L, 효율 60%)", tax_growth: null, advanced: null, protection: "수소차 연료전지시스템 설계·공정·제조" } }
          ]
        },
        {
          name: "9-3. 내연기관차",
          items: [
            { name: "내연기관차", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: true }, note: "# 지정 대상 - 통상적인 내연기관차 기술은 '국가핵심기술'(보호) 대상\n(양산 후 2년 이내)", specs: { strategic: "(공통) 전기·수소차 (탄소중립연료 차량 시스템)", tax_strategic: null, tax_growth: null, advanced: null, protection: "▶가솔린 직접분사식 시스템 \n▶LPG 직접분사식 시스템 \n▶EURO 6 기준 이상 디젤엔진 \n▶자동차 엔진·자동변속기 (양산 후 2년 이내)" } }
          ]
        },
        {
          name: "9-4. 고속철도 차량",
          items: [
            { name: "고속철도 차량", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: false, protection: true }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: null, advanced: null, protection: "▶복합소재 일체성형 철도차량 차체 \n▶고속철도차량 동력시스템, 제어진단 \n▶고속철도차량 차체" } }
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
            { name: "우주 발사체", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "# 지정대상 - 개별 품목 단위로 지정, 체계별 확인 필요", specs: { strategic: "대형 다단연소 사이클 엔진(추력 100톤급 연소기, 고압•고출력 터보펌프, 엔진 재점화 및 추력제어, 극저온추진제)", tax_strategic: null, tax_growth: "우주 발사체 부분품 (액체엔진, 대형 구조물, 관성항법 유도시스템, 자세제어시스템, 전력시스템, 원격측정·추적시스템, 비행종단시스템)", advanced: null, protection: "▶고성능 극저온 터보펌프 \n▶극저온·고압 다이아프램 구동방식 개폐밸브" } },
            { name: "인공위성", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "# 지정대상 - 개별 품목 단위로 지정, 체계별 확인 필요", specs: { strategic: "우주관측•센싱 (해상도 25cm급 광역관측 SAR,전자광학탑재체, 무인자동 광학감시)", tax_strategic: null, tax_growth: "▶위성본체 부분품 (전력·자세제어·송수신 등 시스템) \n▶위성 탑재체 부분품 (광학·영상레이더·통신 등 탑재체) \n▶위성통신 송수신 안테나 (인공위성 추적 기능 안테나)", advanced: null, protection: "▶초고해상도 광학위성 고속기동 정밀 자세제어 및 결정 (고도 500km 50cm이하급) \n▶위성탑재 전자광학 카메라 제작·조립(구경 1m이상) \n▶SAR 탑재체 제작 및 신호처리(해상도 1m이하)" } },
            { name: "우주탐사", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false }, note: "", specs: { strategic: "달착륙•표면탐사 (1.8톤급 달착륙선 연착륙 실증,달표면탐사 탑재체, 심우주 유·무인 활동 기술)", tax_strategic: null, tax_growth: null, advanced: null, protection: null } }
          ]
        },
        {
          name: "10-2. 항공",
          items: [
            { name: "첨단 항공가스터빈 엔진·부품 (추력 15,000lbf 이상)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: false }, note: "# 스펙 비교 - 국가전략기술, 국가첨단전략기술 스펙 동일 (추력 15,000lbf) // # 참고 - 조세특례제한법, 국가첨단전략산업법은 '방위산업' 분야에 규정", specs: { strategic: "첨단 항공가스터빈 엔진·부품(추력 15,000lbf 이상 고출력·장수명 유·무인용 터보팬 가스터빈 엔진 설계·제조·평가·인증)", tax_strategic: null, tax_growth: "<방위산업 분야> \n유무인항공기 추진체계 (터보제트엔진, 터보샤프트엔진, 터보프롭엔진, 터보팬엔진, 왕복엔진)", advanced: "<방산 분야> \n유·무인기용 첨단항공엔진 핵심 소재·부품 (15,000lbf급 이상)", protection: null } },
            { name: "무인비행체", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶지능형 자율비행 제어 시스템 \n▶지능형 임무수행 \n▶무인기 탑재 첨단센서 \n▶무인기 전기구동 핵심부품 \n▶무인기 데이터링크 \n▶무인기 지상통제 \n▶물류배송용 드론 제조 \n▶드론용 하이브리드 추진 시스템", advanced: null, protection: null } },
            { name: "미래항공교통(AAM, UAM)", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false }, note: "# 참고 - 국가전략기술육성법은 '첨단 모빌리티' 분야에 규정", specs: { strategic: "<첨단 모빌리티 분야> \n도심항공교통(UAM) (교통관리 및 통신·항법·감시·정보, 운항·교통·인프라 통합실증, 기체·부품 및 시험평가, 인증체계 및 검증, 버티포트, 소재·부품 및 양산)", tax_strategic: null, tax_growth: null, advanced: null, protection: null } }
          ]
        }
      ]
    },
    {
      id: 11, name: "조선·해양", icon: "🚢",
      laws: {
        strategic: "우주항공·해양",
        tax_strategic: "미래형 운송 및 이동수단",
        tax_growth: "지능정보 / 첨단 소부장 / 탄소중립 등",
        advanced: "-",
        protection: "조선"
      },
      subsectors: [
        {
          name: "11-1. 조선",
          items: [
            { name: "고부가가치·친환경 선박 및 기자재", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "# 지정 대상 - 국가핵심기술: 선박 기자재, 친환경연료 선박 등 선박 관련 품목 다수 포함 / 조특법-전략: 친환경 선박 중심 / 조특법-신성장 : 선박 엔진, 발전시스템", specs: { strategic: null, tax_strategic: "▶환경친화적 첨단 선박 운송∙추진 \n▶환경친화적 첨단 선박 디지털 설계∙생산운영", tax_growth: "▶선박용 모터 설계∙제조 \n▶선박용 디젤엔진 제조 \n▶암모니아 선박 연료공급 및 후처리 \n▶선박발전시스템 （연료전지, 배터리, 축발전기 모터） \n▶선박용 암모니아 연료기반 수소생산 및 연료전지 적용", advanced: null, protection: "▶고부가가치 선박 및 해양시스템 \n▶선박∙해양구조물용 블록탑재 및 건조 \n▶선박용 핵심기자재 제조 \n▶디젤엔진·크랭크샤프트· 프로펠러 \n▶ERP·PLM 시스템 및 설계·생산지원 프로그램 \n▶액화가스 화물창, 연료탱크 \n▶친환경연료 운반 및 추진선박용 연료공급장치, 화물·BOG 운영시스템" } }
          ]
        },
        {
          name: "11-2. 운항",
          items: [
            { name: "선박 자율운항", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "", specs: { strategic: null, tax_strategic: "인공지능형 자율운항 （알고리즘SW, 서비스 플랫폼, 센서, 모니터링, 통합제어관리, 데이터 네트워크 보안 등）", tax_growth: "지능형 전자항해 기술 (e-Navigation)", advanced: null, protection: "선박 자율운항 및 통합제어관리 시스템" } }
          ]
        },
        {
          name: "11-3. 해양자원",
          items: [
            { name: "해양자원탐사", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false }, note: "", specs: { strategic: "해양자원탐사 (심해물리탐사 및 자원량 평가, 심해채광 및 심해환경 관리)", tax_strategic: null, tax_growth: null, advanced: null, protection: null } }
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
            { name: "고에너지밀도 리튬이온전지", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "# 스펙 비교 - 국가핵심기술 : 265Wh/kg / 국가첨단전략기술 : 280Wh/kg / 조특법-전략 : 265Wh/kg / 국가전략기술 : 350Wh/kg급 이상 목표 (파우치형 기준)", specs: { strategic: "(공통) 리튬이온전지 및 핵심소재 (고에너지밀도 리튬이온전지 (개발목표 : 350Wh/kg급))", tax_strategic: "고성능 리튬이차전지 부품·소재·셀 및 모듈 (에너지밀도 265Wh / kg, 6C-rate, 충방전 1,000회 이상)", tax_growth: "고성능 리튬이차전지 (에너지밀도 265Wh/kg, 6C-rate)", advanced: "고에너지밀도 리튬이차전지 (파우치형 : 280Wh/kg, 각형 : 252Wh/kg, 원통형 : 260~280Wh/kg)", protection: "고에너지밀도 리튬이차전지 (파우치형 : 265Wh·kg, 각형 : 238.5Wh·kg)" } },
            { name: "리튬이온전지 핵심소재 - 하이니켈 양극재", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true }, note: "# 스펙 비교 - 국가핵심, 조특법 등 : Ni > 80% / 국가전략기술 : Ni > 90% 목표", specs: { strategic: "(공통) 리튬이온전지 및 핵심소재 (하이니켈 양극재 : Ni > 90%)", tax_strategic: "하이니켈 양극재 (Ni > 80%)", tax_growth: null, advanced: "고용량 양극소재 (Ni > 80%)", protection: "양극소재(전구체 포함) (Ni > 80%)" } },
            { name: "리튬이온전지 핵심소재 - 음극재, 전극", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: true, protection: true }, note: "# 스펙 비교 - 전극 600mAH/g 이상", specs: { strategic: "(공통) 리튬이온전지 및 핵심소재 (실리콘계 음극재 : Si > 20%)", tax_strategic: "▶장수명 음극재 (충방전 1,000회 이상) \n▶(공통) 차세대 리튬이차전지 (600mAh/g 이상 고성능 전극)", tax_growth: "고효율∙고용량 음극재 (효율 88%, 용량 1,800mAh/g)", advanced: "(공통) 초고성능 전극 및 차세대 리튬이차전지 (600mAh/g 이상 실리콘 그라파이트 복합음극 등)", protection: "(공통) 초고성능 전극 및 차세대 리튬이차전지 (600mAh/g 이상)" } },
            { name: "리튬이온전지 핵심소재 - 분리막, 전해질", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false }, note: "-", specs: { strategic: "(공통) 리튬이온전지 및 핵심소재(핵심소재(고성능 전해질, 기능성박막 분리막 등), 전극소재(바인더, CNT 등), 친환경 소재생산 및 전극공정)", tax_strategic: "분리막 및 전해액 제조", tax_growth: null, advanced: null, protection: null } },
            { name: "리튬이온전지 핵심소재 - 기타 소재", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "# 지정 대상 - 개별 품목 단위로 지정, 체계별 확인 필요", specs: { strategic: "(공통) 리튬이온전지 및 핵심소재(핵심소재(고성능 전해질, 기능성박막 분리막 등), 전극소재(바인더, CNT 등), 친환경 소재생산 및 전극공정)", tax_strategic: "▶패키징 부품(파우치, 리드, 캡), 전극용 소재부품(도전재 등) \n▶고순도 금속화합물 제조∙가공", tax_growth: "▶전극용 탄소나노튜브, 도전재 \n▶고순도 리튬화합물 제조", advanced: null, protection: null } },
            { name: "친환경 소재 생산", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false }, note: "-", specs: { strategic: "(공통) 리튬이온전지 및 핵심소재(핵심소재(고성능 전해질, 기능성박막 분리막 등), 전극소재(바인더, CNT 등), 친환경 소재생산 및 전극공정)", tax_strategic: null, tax_growth: null, advanced: null, protection: null } }
          ]
        },
        {
          name: "12-2. 차세대 이차전지",
          items: [
            { name: "반·전고체전지", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true }, note: "# 스펙 비교 - 국가핵심기술, 국가첨단전략, 조특법-전략 : 600mAh/g 이상 고성능 전극 기준 / 국가전략기술 : 400Wh/kg 이상 반-전고체전지 개발목표", specs: { strategic: "차세대 이차전지 소재·셀 - 반·전고체전지 (400Wh/kg)", tax_strategic: "(공통) 차세대 리튬이차전지 (600mAh/g 이상 고성능 전극,전고체전지)", tax_growth: null, advanced: "(공통) 초고성능 전극 및 차세대 리튬이차전지(600mAh/g 이상 실리콘그라파이트 복합음극, 황 양극, 리튬금속 음극, 리튬금속전지, 리튬황전지, 전고체전지)", protection: "(공통) 초고성능 전극 및 차세대 리튬이차전지 (600mAh/g 이상)" } },
            { name: "리튬금속전지", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: true, protection: true }, note: "# 스펙 비교 - 국가핵심기술, 국가첨단전략, 조특법-전략 : 600mAh/g 이상 고성능 전극 기준 / 국가전략기술 : 충방전 800회 이상 리튬금속전지", specs: { strategic: "차세대 이차전지 소재·셀 - 리튬금속전지 (충방전 800회)", tax_strategic: "(공통) 차세대 리튬이차전지 (600mAh/g 이상 고성능 전극,전고체전지)", tax_growth: null, advanced: "(공통) 초고성능 전극 및 차세대 리튬이차전지(600mAh/g 이상 실리콘그라파이트 복합음극, 황 양극, 리튬금속 음극, 리튬금속전지, 리튬황전지, 전고체전지)", protection: "(공통) 초고성능 전극 및 차세대 리튬이차전지 (600mAh/g 이상)" } },
            { name: "리튬황전지", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: true }, note: "# 스펙 비교 - 국가핵심기술, 국가첨단전략, 조특법-전략 : 600mAh/g 이상 고성능 전극 기준 / 국가전략기술 : 400Wh/kg 이상 리튬황전지 개발목표", specs: { strategic: "차세대 이차전지 소재·셀 - 리튬황전지 (400Wh/kg)", tax_strategic: "(공통) 차세대 리튬이차전지 (600mAh/g 이상 고성능 전극,전고체전지)", tax_growth: null, advanced: "(공통) 초고성능 전극 및 차세대 리튬이차전지(600mAh/g 이상 실리콘그라파이트 복합음극, 황 양극, 리튬금속 음극, 리튬금속전지, 리튬황전지, 전고체전지)", protection: "(공통) 초고성능 전극 및 차세대 리튬이차전지 (600mAh/g 이상)" } },
            { name: "비리튬계 이온전지(나트륨이온전지)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "# 스펙 비교 - 국가전략기술 : 나트륨이온전지 (220Wh/kg 이상 개발 목표)", specs: { strategic: "차세대 이차전지 소재·셀 - 나트륨이온전지 (220Wh/kg)", tax_strategic: null, tax_growth: "비리튬계 이차전지 (흐름전지, 나트륨이차전지)", advanced: null, protection: null } },
            { name: "흐름전지", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "-", specs: { strategic: null, tax_strategic: null, tax_growth: "비리튬계 이차전지 (흐름전지, 나트륨이차전지)", advanced: null, protection: null } }
          ]
        },
        {
          name: "12-3. 모듈-팩·관리시스템",
          items: [
            { name: "이차전지 모듈-팩", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "# 스펙 비교 - 조특법 : 160Wh/kg 이상 / 국가전략기술 : 210Wh/kg 이상 개발목표", specs: { strategic: "(공통) 이차전지 모듈·시스템 (고에너지밀도 모듈-팩 설계 (목표 : 210Wh/kg 이상))", tax_strategic: "고에너지밀도 이차전지 팩 (160Wh/kg 이상)", tax_growth: "전기차 에너지저장 시스템 (160Wh/kg 이상)", advanced: null, protection: null } },
            { name: "배터리 관리시스템", laws: { strategic: true, tax_strategic: false, tax_growth: false, advanced: false, protection: false }, note: "", specs: { strategic: "(공통) 이차전지 모듈·시스템(배터리 지능형 통합관리 열폭주 및 화재 전이 차단)", tax_strategic: null, tax_growth: null, advanced: null, protection: null } }
          ]
        },
        {
          name: "12-4. 재사용·재활용",
          items: [
            { name: "재사용-재활용", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "# 스펙 비교 - 조특법-전략 : Li>35%, Co,Ni>90% / 국가전략기술 : Li>95%, Co,Ni>99% 이상 개발목표", specs: { strategic: "이차전지 재사용·재활용 (사용후 배터리 고속∙비파괴 진단, 재사용 이차전지 제조∙운용, 고순도 회수 및 친환경 공정 (Li > 95%, Co·Ni > 99%, 순도 > 99.9%))", tax_strategic: "사용후 배터리 평가 및 선별 사용후 배터리 재활용 (Li > 35%, Co·Ni > 90%)", tax_growth: "재사용∙재제조를 위한 선별 이차전지 제조공정 염폐수 자원순환", advanced: null, protection: null } }
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
            { name: "원자로 핵심 소재·부품", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶원자로 냉각재펌프 \n▶(공통) 내열 내식성 원자력 소재", advanced: null, protection: "원전 구조물 설계초과지진력 저감용 고무계열 면진장치" } },
            { name: "원전설계", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶신형원전 표준설계 \n▶가압경수형원전 설계", advanced: null, protection: null } },
            { name: "원전제조", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "-", specs: { strategic: null, tax_strategic: null, tax_growth: "▶대형 원자력발전소 제조 \n▶(공통) 혁신 제조공법 적용", advanced: null, protection: null } },
            { name: "원전운영", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "가동원전 계측제어설비 디지털 업그레이드", advanced: null, protection: null } }
          ]
        },
        {
          name: "13-2. 소형 원자로",
          items: [
            { name: "경수형 SMR", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "# 정책 참고 - 「SMR특별법」 시행 예정", specs: { strategic: "소형모듈원자로 (SMR 설계, 제조(기자재/소재), 건설, 종합시험)", tax_strategic: null, tax_growth: "▶SMR 설계 및 검증 \n▶SMR 제조 \n▶(공통) 내열 내식성 원자력 소재 \n▶(공통) 혁신 제조공법 적용", advanced: null, protection: null } },
            { name: "비경수형 SMR", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "", specs: { strategic: "(공통) 선진원자력시스템 및 폐기물관리 (고온가스로, 소듐냉각고속로, 용융염원자로, 핵연료 생산/시험)", tax_strategic: null, tax_growth: "(공통) 혁신 제조공법 적용", advanced: null, protection: "TRISO-SiC 핵연료 기술" } },
            { name: "연구용 원자로", laws: { strategic: false, tax_strategic: false, tax_growth: false, advanced: false, protection: true }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: null, advanced: null, protection: "▶중성자 거울 및 유도관 \n▶U-Mo 합금핵연료 제조" } }
          ]
        },
        {
          name: "13-3. 후행 핵주기",
          items: [
            { name: "후행 핵주기 (방폐물 운반·저장·처분·재활용, 원전 해체)", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "-", specs: { strategic: "선진원자력 및 폐기물 관리 (고준위 방폐물 부지평가, 운반/저장, 처분)", tax_strategic: null, tax_growth: "친환경·저탄소 후행 핵주기기술 (방폐물, 부지조사, 관리·운반·저장, 처분, 처리, 원전 해체)", advanced: null, protection: null } }
          ]
        },
        {
          name: "13-4. 방사선 활용",
          items: [
            { name: "방사선 활용", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "비파괴검사(NDT) 관련", specs: { strategic: null, tax_strategic: null, tax_growth: "방사선이용 대형 공정 시스템 검사", advanced: null, protection: null } }
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
            { name: "수전해 수소생산", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "-", specs: { strategic: "수전해 수소생산 (수전해 생산시스템, 고효율∙고내구성 소재 부품)", tax_strategic: "수전해 기반 청정수소 생산", tax_growth: "그린수소 생산 해양 플랫폼", advanced: null, protection: null } },
            { name: "기타 수소생산", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "# 지정 대상 - 조특법-전략 : 수전해, 블루, 청록수소 포괄 / 국가전략기술 : 수전해 중심", specs: { strategic: null, tax_strategic: "탄소포집 청정수소 생산 (블루수소, 청록수소)", tax_growth: "부생수소 생산", advanced: null, protection: null } }
          ]
        },
        {
          name: "14-2. 수소 저장·운송",
          items: [
            { name: "기체 수소 저장·운송", laws: { strategic: true, tax_strategic: true, tax_growth: false, advanced: false, protection: false }, note: "-", specs: { strategic: "수소 저장·운송 (수소 저장·운송 핵심 소재부품(700기압, 1톤급 튜브트레일러), 고강도 배관망 기술, 상용급 수소액화플랜트)", tax_strategic: "수소충전소 수소 생산∙압축∙ 저장∙충전 설비 수소 저장 효율화(고압기체)", tax_growth: null, advanced: null, protection: null } },
            { name: "액화 수소 저장·운송", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "-", specs: { strategic: "수소 저장·운송 (수소 저장·운송 핵심 소재부품(700기압, 1톤급 튜브트레일러), 고강도 배관망 기술, 상용급 수소액화플랜트)", tax_strategic: "수소 저장 효율화(액체 수소)", tax_growth: "▶수소 액화플랜트 핵심부품 \n▶액화수소 운반선 액화 수소 저장∙적하역 및 증발가스 처리 \n▶극저온 액체 저장 및 이송용 펌프 \n▶극저온 액체 저장 및 이송용 극저온 냉동기술", advanced: null, protection: null } },
            { name: "기타 수소 저장·운송", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: "수소 저장 효율화 (암모니아, LOHC, 고체수소저장)", tax_growth: null, advanced: null, protection: null } }
          ]
        },
        {
          name: "14-3. 수소 활용",
          items: [
            { name: "연료전지 - 고정용", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "발전용", specs: { strategic: "수소연료전지 및 발전 (발전용 수소연료전지 (200kW급 복합발전))", tax_strategic: "▶연료전지 전용부품 제조 (개질기, 막전극 접합체, 금속 분리판, 블로어) \n▶수소차용 고밀도 고효율 연료전지시스템", tax_growth: "▶SOFC 지지형 셀·스택·스템 (발전효율 50%, 4kW 이상) \n▶SOFC 소재", advanced: null, protection: "고정형 연료전지 설계, 제조, 진단 및 제어 (발전효율 35%, 내구성 4만시간)" } },
            { name: "연료전지 - 모빌리티용", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: true }, note: "수소차용, 건설-산업기계용", specs: { strategic: null, tax_strategic: "▶연료전지 전용부품 제조 (개질기, 막전극 접합체, 금속 분리판, 블로어) \n▶수소차용 고밀도 고효율 연료전지시스템", tax_growth: null, advanced: null, protection: "건설∙산업기계용 연료전지(1.0A·cm2 이상 전류밀도에서 4시간 이상 연속운전, 10kW급 이상)" } },
            { name: "수소·암모니아 발전", laws: { strategic: true, tax_strategic: true, tax_growth: true, advanced: false, protection: true }, note: "-", specs: { strategic: "수소연료전지 및 발전 (석탄∙암모니아 혼소, 수소 혼소∙전소 발전)", tax_strategic: "수소 가스터빈(혼소∙전소)", tax_growth: "▶암모니아 발전(혼소∙전소) \n▶수소 가스터빈용 암모니아 분해 기반 청정수소 생산 \n▶산업용 수소 보일러 및 연소기", advanced: null, protection: "발전용 가스터빈 수소연소 설계 및 제조" } },
            { name: "수소 활용 제철", laws: { strategic: false, tax_strategic: true, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: "수소환원제철", tax_growth: "▶함수소가스 활용 고로취입 \n▶철강 가열공정 탄소연료 대체", advanced: null, protection: null } },
            { name: "기타 수소 활용", laws: { strategic: false, tax_strategic: true, tax_growth: false, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: "수소 처리 바이오에너지 생산", tax_growth: null, advanced: null, protection: null } }
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
            { name: "태양광", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶페로브스카이트 등 탠덤 태양전지 핵심소재·대면적화 \n▶n형 대면적 태양전지·모듈 (효율 24%, M10, 출력밀도 210W/m2 ) \n▶저탄소 태양광 모듈 (탄소배출량 55kg CO2/kW 이하)", advanced: null, protection: null } },
            { name: "풍력", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶회전 동력 증속기 \n▶발전기 및 변환기 \n▶블레이드(8MW급 이상) \n▶해상풍력 발전단지 해저케이블", advanced: null, protection: null } },
            { name: "기타 재생에너지", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶지열에너지 회수 및 저장 \n▶지열발전 \n▶바이오매스 유래 에너지 생산 \n▶폐기물 액화∙가스화 \n▶미활용 폐열 회수∙활용 발전", advanced: null, protection: null } }
          ]
        },
        {
          name: "15-2. 발전·전력망·에너지효율화",
          items: [
            { name: "발전시스템", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶대형가스터빈 부품 및 시스템 \n▶초임계 이산화탄소 터빈구동 \n▶증기터빈 부품 및 시스템", advanced: null, protection: null } },
            { name: "전력망", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "# 지정 대상 - 국가핵심 : '전력케이블 시스템' / 조특법-신성장 : 지능형 전력망 관련 기술", specs: { strategic: null, tax_strategic: null, tax_growth: "▶지능형 전력계통 \n▶지능형 배전계통 \n▶지능형 검침인프라 \n▶전력관리시스템·전력변환장치 \n▶에너지관리시스템(EMS)", advanced: null, protection: "전력케이블 시스템 (500kV급 이상)" } },
            { name: "에너지 효율향상", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "# 지정 대상 - 국가핵심 : '히트펌프' / 조특법-신성장 : 건축물, 데이터센터, 히트펌프 등 포함", specs: { strategic: null, tax_strategic: null, tax_growth: "▶지능형 건축물 에너지 통합관리 \n▶데이터센터 냉방∙공조 \n▶히트펌프 효율 향상 \n▶고효율 산업용 전동기 \n▶친환경 냉매 개발", advanced: null, protection: "Low-GWP 냉매용 무급유 터보압축기 기반 산업용 고온 히트펌프" } }
          ]
        },
        {
          name: "15-3. 온실가스 감축 기술",
          items: [
            { name: "탄소 포집·활용·저장", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "-", specs: { strategic: null, tax_strategic: null, tax_growth: "▶연소 후 이산화탄소 포집 \n▶연소 전 이산화탄소 포집 \n▶순산소 연소기술 및 저가 산소 대량 제조 \n▶이산화탄소 지중 저장소 탐사 \n▶이산화탄소 수송∙저장 \n▶산업 부생가스 전환 \n▶이산화탄소 활용", advanced: null, protection: null } },
            { name: "산업공정 연·원료 대체", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶이산화탄소 반응경화 시멘트 \n▶산업 부산물 시멘트 원료화 \n▶이산화탄소 저감 시멘트 생산 연∙원료 대체 \n▶시멘트 소성공정 유연탄 대체 \n▶석유계 고분자 대체 바이오 케미칼 원료 생산 \n▶전기가열 나프타 분해 \n▶반도체ㆍ디스플레이 식각ㆍ증착공정 대체소재 \n▶반도체ㆍ디스플레이 제조공정 불소화합물, 아산화질소 배출 저감 \n▶LNG 냉열발전 결합형 재기화", advanced: null, protection: null } }
          ]
        },
        {
          name: "15-4. 오염저감·자원순환",
          items: [
            { name: "오염저감·자원순환", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "# 지정 대상 - 국가핵심 : 배기규제를 만족하는 디젤엔진 / 조특법-신성장 : 다양한 품목 포함", specs: { strategic: null, tax_strategic: null, tax_growth: "▶미세먼지 제거, 온실가스 동시 측정 \n▶배기가스 규제 대응 운송∙저장 \n▶디젤 미립자 필터 \n▶폐플라스틱 등 물리적 재활용 \n▶폐플라스틱 등 화학적 재활용 \n▶생분해성 플라스틱 \n▶폐기물 저감형 포장소재 \n▶폐수 재이용 \n▶폐섬유 자원순환 섬유소재", advanced: null, protection: "Off-road용 Tier 4F, Stage-V 배기규제를 만족하는 산업용 디젤엔진 및 후처리 시스템 설계" } }
          ]
        }
      ]
    },
    {
      id: 16, name: "소재·부품", icon: "⚙️",
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
            { name: "고기능 섬유", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "극한성능·친환경 섬유, 전기전자용·의료용 섬유 등", specs: { strategic: null, tax_strategic: null, tax_growth: "▶극한성능 섬유 제조 \n▶섬유기반 전기전자 소재·부품 \n▶의료용 섬유 제조 \n▶친환경섬유제조 \n▶PTFE 멤브레인 기반 ▶고능성 복합필터 제조 \n극세 장섬유 부직포 폭합필터", advanced: null, protection: null } },
            { name: "하이퍼 플라스틱", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "고강성 하이퍼플라스틱 복합필터", specs: { strategic: null, tax_strategic: null, tax_growth: "고강성 하이퍼플라스틱 복합필터", advanced: null, protection: null } },
            { name: "기능성 탄성소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶불소계 실리콘 \n▶불소계 고무 \n▶불소계 부타디엔 고무", advanced: null, protection: null } },
            { name: "정밀화학 소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶특수계면활성제 제조 \n▶비극성계 접착소재 제조 \n▶에폭시 수지 접착소재 제조", advanced: null, protection: null } },
            { name: "탄소 소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶탄소섬유복합재 가공장비 검사장비 제조 \n▶고기능성 인조흑연 제조 \n▶그래핀 기반 차세대에너지 시스템용 복합소재 제조", advanced: null, protection: null } }
          ]
        },
        {
          name: "16-2. 금속·세라믹 소재",
          items: [
            { name: "금속 소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶알루미늄 도금강판 제조 \n▶니켈 회수공정 \n▶희토류 원료 제조공정 \n▶고강도 마그네슘 온간성형 \n▶조명용 고효율 경량 방열부품 \n▶구리합금 설계·제조 \n▶구리 및 구리합금 박판 제조 \n▶타이타늄 소재, 금속재료 부품화 \n▶몰리브덴 금속, 탄화물 분말, 금속괴 제조 \n▶고융점 금속 기반 4N급 염화물 \n▶중희토 저감 고기능 영구자석 \n▶고성능 실리카 에어로젤 단열재 \n▶MLCC용 초미세 니켈 나노분말 및 내부전극용 나노페이스트", advanced: null, protection: "아연제련공정 저온 저압 헤마타이트 공정" } },
            { name: "세라믹 소재", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶차세대 배기가스 규제 대응 핵심소재 \n▶고순도 산화알루미늄 제조 \n▶거리감지용 압전결정소자, 초음파 트랜드듀서", advanced: null, protection: null } }
          ]
        },
        {
          name: "16-3. 철강",
          items: [
            { name: "철강", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "# 지정 대상 - 개별 품목 단위로 지정, 체계별 확인 필요 // 국가핵심기술은 '금속' 분야로 관리중", specs: { strategic: null, tax_strategic: null, tax_growth: "▶고청정 스테인리스계 무계목강관, 봉강 제조\n▶고기능성 H형강 제품 제조\n▶고규소 함량 저절손 전기강판\n▶장수명 금형소재 제조\n▶복합취련전로 활용 스크랩\n▶전기로 탄소원료 활용\n고로용선 및 전기로 용강합탕\n▶디지털 영상분석 기반 철스크랩 판정·선별", advanced: null, protection: "▶초정밀 도금 설비 및 설계·제어\n▶FINEX 유동로 조업\n▶고강도 철근 및 형강 제조\n▶고망간 함유 특수강 제조\n▶고강도 철강판재 제조\n▶조선발전소용 주·단강 제품 제조\n▶저니켈 고질소 스테인리스강 제조\n▶고강도 강판제조를 위한 스마트 수냉각 기술\n▶딥러닝 인공지능 기반 고로 조업 자동 제어" } }
          ]
        },
        {
          name: "16-4. 기반 부품",
          items: [
            { name: "기반 부품", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶고정밀 롤러베어링·볼베어링 \n▶고압 컨트롤 밸브 \n▶고정밀 볼스크류 \n▶능동마그네틱 베어링 \n▶고성능 터보식 펌프 \n▶특수 렌즈 소재∙부품", advanced: null, protection: null } }
          ]
        },
        {
          name: "16-5. (기타 관련 기술)",
          items: [
            { name: "(기타: 3d프린팅, 착용형 기기)", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "-", specs: { strategic: null, tax_strategic: null, tax_growth: "<지능정보, 디바이스 분야> \n▶신체부착형 유연기판·회로 \n▶유연한 양·음극 및 전극 \n▶섬유기반 유연전원 제조 \n▶3D 프린팅 소재·장비", advanced: null, protection: null } }
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
            { name: "기계·장비", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: true }, note: "# 지정 대상 - 머시닝센터·터닝센터·연삭가공기 등 공작기계 중심, 국가핵심기술은 중대형굴착기·초고속승강기 등도 포함", specs: { strategic: null, tax_strategic: null, tax_growth: "▶첨단 머시닝센터 \n▶열간 등방압 정수압 프레스 \n▶연삭가공기 \n▶첨단 터닝센터 \n▶첨단 회전 성형기 \n▶첨단 밸런싱머신 \n▶첨단 레이저 가공장비 \n▶방전가공기 장비∙부품 \n▶친환경 굴착기 설계·제조", advanced: null, protection: "▶다축 복합가공 터닝센터 \n▶고정밀 5축 머시닝센터 \n▶20톤 이상 중대형 굴착기 \n▶트랙터용 부하감응형 자동변속기 \n▶초고속 승강기" } }
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
            { name: "방산", laws: { strategic: true, tax_strategic: false, tax_growth: true, advanced: true, protection: true }, note: "# 참고 - 방산 기술 유출방지는 '국가핵심기술'이 아닌 '방위산업기술보호법'(방위산업기술) 에서 별도로 규율 중으로 확인 필요", specs: { strategic: "<우주항공·해양 분야> \n첨단 항공가스터빈 엔진·부품 (추력 15,000lbf급 이상)", tax_strategic: null, tax_growth: "▶추진체계 기술 (유무인 항공기, 기동장비, 유도무기, 함정 등 엔진, 구성품, 소재) \n▶군사위성체계 기술 (감시정찰, 통신위성 체계, 소재, 지상장비, 발사체 등) \n▶방위산업물자등의 수출 및 공급망 안정화를 위한 기술 \n▶유무인복합체계 기술 (환경인식, 자율임무 등 유무인협업, 통신, 보안 등 설계·제작·조립) \n▶전투기능 통합형 작전용 첨단디지털 의류", advanced: "유·무인기용 첨단 항공엔진 핵심 소재 및 부품 (15,000lbf급 이상)", protection: "「방위산업기술보호법」 ‘방위산업기술’ (총 128개)" } }
          ]
        }
      ]
    },
    {
      id: 19, name: "콘텐츠 기술", icon: "🎬",
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
            { name: "공간컴퓨팅 (실감형 콘텐츠)", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "", specs: { strategic: null, tax_strategic: null, tax_growth: "▶가상현실(VR) 콘텐츠 \n▶증강현실(AR) 콘텐츠 \n▶오감체험형 4D 콘텐츠 \n▶디지털 홀로그램 콘텐츠 \n▶AR 디바이스 제조기술", advanced: null, protection: null } }
          ]
        },
        {
          name: "19-2. 문화 콘텐츠",
          items: [
            { name: "게임·영화·방송·애니메이션·웹툰 콘텐츠", laws: { strategic: false, tax_strategic: false, tax_growth: true, advanced: false, protection: false }, note: "-", specs: { strategic: null, tax_strategic: null, tax_growth: "▶게임 콘텐츠 \n▶영화∙방송 콘텐츠 \n▶애니메이션 콘텐츠 \n▶만화∙웹툰 콘텐츠", advanced: null, protection: null } }
          ]
        }
      ]
    }
  ]
};
