import { StrongLink2 } from "@/app/ui/profile/CustomLink";

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Loosely designed in{" "}
        <StrongLink2 href="https://www.figma.com/">Figma</StrongLink2> and coded
        in{" "}
        <StrongLink2 href="https://code.visualstudio.com/">
          Visual Studio Code
        </StrongLink2>{" "}
        by yours truly. Built with{" "}
        <StrongLink2 href="https://nextjs.org/">Next.js</StrongLink2> and{" "}
        <StrongLink2 href="https://tailwindcss.com/">Tailwind CSS</StrongLink2>.
      </p>
    </footer>
  );
}
