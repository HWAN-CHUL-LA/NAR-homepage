import ProductCard from "../ProductCard";
import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png";

export default function ProductCardExample() {
  return (
    <div className="max-w-xs">
      <ProductCard
        name="Laser Cutting Cell"
        category="Cutting System Products"
        description="고정밀 파이버 레이저 기반 형강 절단 셀. 2D/3D 복합 형상 대응 가능."
        specs={[
          "출력: 6kW~12kW",
          "절단 두께: ~25mm",
          "위치 정밀도: ±0.1mm",
        ]}
        image={cuttingImage}
      />
    </div>
  );
}
