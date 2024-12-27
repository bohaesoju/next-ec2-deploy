import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">EC2 배포 가이드</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. EC2 설정</h2>
            <div className="space-y-2">
              <p>• 인스턴스 생성 (Ubuntu 20.04)</p>
              <p>• 보안그룹: 22(SSH), 80(HTTP), 443(HTTPS) 포트 개방</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Nginx 설정</h2>
            <div className="space-y-2">
              <p>• sudo apt-get install nginx</p>
              <p>• nginx 설정 파일 수정</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. PM2 배포</h2>
            <div className="space-y-2">
              <p>• npm install -g pm2</p>
              <p>• npm run build</p>
              <p>• pm2 start npm --name "next" -- start</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
