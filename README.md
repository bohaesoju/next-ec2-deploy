# Next.js 배포 - EC2, Nginx, PM2

이 프로젝트는 Next.js 애플리케이션을 AWS EC2에 배포합니다. **Nginx**를 이용한 리버스 프록시, **PM2**를 활용한 프로세스 관리, **SSL 인증서** 설정으로 안전하고 확장 가능한 배포 파이프라인을 제공합니다.

## 주요 기능

- **EC2를 이용한 서버 호스팅**  
 EC2 인스턴스에서 Node.js 애플리케이션을 실행하고, 보안 그룹 설정으로 안전한 접근을 제공합니다.

- **Nginx를 활용한 리버스 프록시**  
 Nginx를 통해 효율적인 요청 처리와 SSL termination을 수행합니다.

- **PM2를 이용한 프로세스 관리**  
 PM2로 Node.js 프로세스를 관리하여 안정적인 운영과 무중단 배포를 지원합니다.

## 배포 워크플로

1. **빌드 프로세스**
  - `npm run build` 명령어로 Next.js 애플리케이션을 빌드합니다.
  - 테스트 실행 및 코드 품질 검사를 수행합니다.

2. **서버 배포**
  - EC2 인스턴스에 SSH 접속하여 최신 코드를 pull 합니다.
  - 의존성 설치 및 빌드를 수행합니다.
  - PM2를 통해 애플리케이션을 재시작합니다.

3. **Nginx 설정**
  - 도메인 기반 라우팅을 설정합니다.
  - SSL 인증서를 적용하여 HTTPS를 활성화합니다.

4. **모니터링 설정**
  - PM2를 통한 프로세스 모니터링을 구성합니다.
  - 로그 수집 및 알림 설정을 구성합니다.

## 사전 준비 사항

1. **AWS 설정**
  - EC2 인스턴스 생성 및 보안 그룹 구성
  - 탄력적 IP 할당 및 도메인 설정
  - SSL 인증서 발급 (Let's Encrypt 권장)

2. **서버 환경 설정**
  - Node.js 설치 (v18 이상 권장)
  - Nginx 설치 및 기본 설정
  - PM2 전역 설치

3. **GitHub Secrets**  
  GitHub 저장소에 다음 환경 변수를 추가합니다:
  - `SSH_PRIVATE_KEY`
  - `HOST_IP`
  - `HOST_USER`
  - `PM2_APP_NAME`
  - `DEPLOY_PATH`

## 설치 및 실행

```bash
# 프로젝트 클론
git clone https://github.com/yourusername/next-ec2-deploy.git

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# PM2로 실행
pm2 start npm --name "next" -- start
