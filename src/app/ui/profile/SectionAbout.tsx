import { StrongLink } from "@/app/ui/profile/CustomLink";
import { Section, StickySectionTitle } from "@/app/ui/profile";

export default function SectionAbout({
  id,
  label,
}: {
  id: string;
  label: string;
}) {
  return (
    <Section id={id} label={label}>
      <StickySectionTitle>About</StickySectionTitle>
      <div className="font-light">
        <p className="mb-4">
          7년 차 개발자로 스타트업에서 웹과 앱을
          디자인/개발/배포/운영하였습니다. 대부분 웹 서비스 개발을 담당했으며
          필요에 따라 디자인도 같이 겸할 때가 많았습니다.
        </p>
        <p className="mb-4">
          최근까지 암호화폐 관련 서비스 개발에 주로 참여했으며{" "}
          <StrongLink href="https://bitcoin.org/en/bitcoin-core/">
            Bitcoin Core
          </StrongLink>{" "}
          ,<StrongLink href="https://geth.ethereum.org/">Geth</StrongLink>로 각
          진영의 노드 서버를 구축하기도 했습니다. 이 때문에 자연스럽게 블록체인
          기술에 대한 미래를 생각할 수 있었고{" "}
          <span>
            "데이터의 저장과 사용, 소유가 네티즌에게 주어지는 완전히 개인화된
            인터넷 환경"
          </span>
          으로 정의되는{" "}
          <StrongLink href="https://namu.wiki/w/%EC%9B%B93.0/">
            웹3.0
          </StrongLink>
          는 이제 웹서비스에서 필연적으로 사용될 기술이라는 의견입니다.
        </p>
        <p>
          컴퓨터 앞에 앉아 있는 시간 외에는 웨이트 트레이닝, 수영 등 운동을
          통해서 스트레스를 풀고 있습니다. 때때로 서핑을 목적으로 여행을
          떠납니다.
        </p>
      </div>
    </Section>
  );
}
