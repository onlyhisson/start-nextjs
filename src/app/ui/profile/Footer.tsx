import { StrongLink2 } from "@/app/ui/profile/CustomLink";

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        디자인은{" "}
        <StrongLink2 href="https://brittanychiang.com/">
          Brittany Chiang
        </StrongLink2>
        를 참조했습니다.{" "}
        <StrongLink2 href="https://nextjs.org/">Next.js</StrongLink2>,{" "}
        <StrongLink2 href="https://tailwindcss.com/">Tailwind CSS</StrongLink2>,{" "}
        폰트는{" "}
        <StrongLink2 href="https://noonnu.cc/font_page/1127">
          더잠실체
        </StrongLink2>
        로 빌드하였고 IDC에서 배포 및 운영하고 있습니다.
      </p>
    </footer>
  );
}
