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
  CheckCircle,
  Clock,
  Quote,
  Play,
  Pause,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
} from "lucide-react"
import { getCaseById, getRelatedCases, type CaseStudy } from "@/lib/caseData"
import { useState, useRef } from "react"

export default function CaseDetailPage() {
  const { id } = useParams<{ id: string }>()
  const caseStudy = id ? getCaseById(id) : undefined
  const relatedCases = id ? getRelatedCases(id) : []
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

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 text-center">
            <h1 className="text-2xl font-bold mb-4">사례를 찾을 수 없습니다</h1>
            <Link href="/cases">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                사례 목록으로 돌아가기
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background" data-testid={`page-case-${id}`}>
      <Header />
      <main className="pt-20">
        {/* 브레드크럼 */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/cases" className="hover:text-foreground transition-colors">
              적용 사례
            </Link>
            <span>/</span>
            <span className="text-foreground">{caseStudy.title}</span>
          </nav>
        </div>

        {/* 헤더 섹션 */}
        <section className="py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* 텍스트 영역 */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{caseStudy.industry}</Badge>
                  <Badge>{caseStudy.solution}</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  {caseStudy.title}
                </h1>
                <p className="text-xl text-primary font-medium mb-6">
                  {caseStudy.client}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {caseStudy.overview}
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{caseStudy.timeline}</span>
                </div>
              </div>

              {/* 미디어 영역 */}
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden bg-muted shadow-2xl relative">
                  {caseStudy.videoUrl ? (
                    <>
                      <video
                        ref={videoRef}
                        src={caseStudy.videoUrl}
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
                  ) : (
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 성과 지표 섹션 */}
        <section className="py-12 lg:py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary" />
              주요 성과
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {caseStudy.results.map((result, idx) => (
                <Card key={idx} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                      {result.value}
                    </div>
                    <div className="font-semibold mb-1">{result.metric}</div>
                    <div className="text-sm text-muted-foreground">
                      {result.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 과제와 솔루션 섹션 */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* 과제 */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                  도입 전 과제
                </h2>
                <ul className="space-y-4">
                  {caseStudy.problemDetails.map((problem, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                          {idx + 1}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{problem}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 솔루션 */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Lightbulb className="w-8 h-8 text-primary" />
                  적용 솔루션
                </h2>
                <ul className="space-y-4">
                  {caseStudy.solutionDetails.map((solution, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{solution}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 고객 후기 섹션 */}
        {caseStudy.testimonial && (
          <section className="py-12 lg:py-16 bg-primary/5">
            <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 leading-relaxed">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {caseStudy.testimonial.author}
                </span>
                <span className="mx-2">|</span>
                <span>{caseStudy.testimonial.position}</span>
              </div>
            </div>
          </section>
        )}

        {/* 관련 사례 섹션 */}
        {relatedCases.length > 0 && (
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-8">관련 사례</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedCases.map((relatedCase) => (
                  <Link
                    key={relatedCase.id}
                    href={`/cases/${relatedCase.id}`}
                    className="block"
                  >
                    <Card className="group hover-elevate h-full">
                      <div className="flex gap-4 p-4">
                        <div className="w-32 h-24 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={relatedCase.image}
                            alt={relatedCase.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {relatedCase.industry}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {relatedCase.solution}
                            </Badge>
                          </div>
                          <h3 className="font-semibold mb-1 truncate">
                            {relatedCase.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {relatedCase.client}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 self-center" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 뒤로 가기 버튼 */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <Link href="/cases">
              <Button variant="outline" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                사례 목록으로 돌아가기
              </Button>
            </Link>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

