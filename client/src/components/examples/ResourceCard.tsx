import ResourceCard from "../ResourceCard";
import { remoteCuttingImage as cuttingImage } from "@/lib/remoteImageUrls"

export default function ResourceCardExample() {
  return (
    <div className="max-w-sm">
      <ResourceCard
        title="Smart Cutting System 브로슈어"
        description="형강 절단 토탈 솔루션의 주요 기능과 적용 사례를 담은 제품 소개서입니다."
        type="brochure"
        fileSize="PDF 4.2MB"
        thumbnail={cuttingImage}
      />
    </div>
  );
}
