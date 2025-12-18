import { useState, useRef } from "react"
import { useParams, Link } from "wouter"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CTASection from "@/components/CTASection"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Download, 
  MessageSquare,
  Play,
  Pause,
  Zap,
  Target,
  Shield,
  Settings
} from "lucide-react"
import { getProductById, getRelatedProducts, type ProductDetail } from "@/lib/productData"

const featureIcons = [Zap, Target, Shield, Settings]

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const product = id ? getProductById(id) : undefined
  const relatedProducts = id ? getRelatedProducts(id) : []
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24 text-center">
            <h1 className="text-3xl font-bold mb-4">제품을 찾을 수 없습니다</h1>
            <p className="text-muted-foreground mb-8">요청하신 제품 정보가 존재하지 않습니다.</p>
            <Link href="/products">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                제품 목록으로
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background" data-testid={`page-product-${product.id}`}>
      <Header />
      <main className="pt-20">
        {/* 브레드크럼 */}
        <div className="bg-muted/30 border-b">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/products" className="hover:text-foreground transition-colors">
                제품
              </Link>
              <span>/</span>
              <Link 
                href={`/products?tab=${product.categorySlug}`} 
                className="hover:text-foreground transition-colors"
              >
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* 히어로 섹션 */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* 텍스트 영역 */}
              <div>
                <Badge variant="secondary" className="mb-4">
                  {product.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-primary font-medium mb-6">
                  {product.tagline}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="gap-2">
                      <MessageSquare className="w-4 h-4" />
                      상담 신청
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    스펙시트 다운로드
                  </Button>
                </div>
              </div>

              {/* 미디어 영역 */}
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden bg-muted shadow-2xl relative">
                  {product.videoUrl ? (
                    <>
                      <video
                        ref={videoRef}
                        src={product.videoUrl}
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                        onEnded={() => setIsPlaying(false)}
                      />
                      <button
                        onClick={togglePlay}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group"
                      >
                        <div className={`w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                          {isPlaying ? (
                            <Pause className="w-8 h-8 text-foreground" />
                          ) : (
                            <Play className="w-8 h-8 text-foreground ml-1" />
                          )}
                        </div>
                      </button>
                    </>
                  ) : product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                      <Settings className="w-24 h-24 text-primary/30" />
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-xl -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* 주요 기능 섹션 */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center">주요 기능</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              {product.name}의 핵심 기능을 소개합니다
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature, idx) => {
                const Icon = featureIcons[idx % featureIcons.length]
                return (
                  <Card key={idx} className="hover-elevate">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* 사양 및 이점 섹션 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 기술 사양 */}
              <div>
                <h2 className="text-2xl font-bold mb-6">기술 사양</h2>
                <Card>
                  <CardContent className="p-0">
                    <table className="w-full">
                      <tbody>
                        {product.specifications.map((spec, idx) => (
                          <tr key={idx} className={idx !== 0 ? "border-t" : ""}>
                            <td className="py-4 px-6 text-muted-foreground font-medium">
                              {spec.label}
                            </td>
                            <td className="py-4 px-6 text-right font-semibold">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </div>

              {/* 도입 효과 */}
              <div>
                <h2 className="text-2xl font-bold mb-6">도입 효과</h2>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 관련 제품 섹션 */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <h2 className="text-2xl font-bold mb-8">관련 제품</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((related) => (
                  <Link key={related.id} href={`/products/${related.id}`}>
                    <Card className="h-full hover-elevate cursor-pointer">
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-3 text-xs">
                          {related.category}
                        </Badge>
                        <h3 className="font-semibold text-lg mb-2">{related.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {related.tagline}
                        </p>
                        <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                          자세히 보기
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

