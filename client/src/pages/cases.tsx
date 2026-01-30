import { useState, useEffect, useMemo } from "react"
import { Link, useLocation, useSearch } from "wouter"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  caseStudies,
  industryOptions,
  solutionOptions,
  productOptions,
  filterCases,
} from "@/lib/caseData"
import {
  ChevronRight,
  Home,
  Filter,
  ArrowRight,
  Mail,
  Building2,
  Cpu,
  Bot,
} from "lucide-react"

export default function CasesPage() {
  const [, setLocation] = useLocation()
  const searchString = useSearch()

  // URL에서 초기 필터 상태 읽기
  const getInitialFilters = () => {
    const params = new URLSearchParams(searchString)
    const industryParam = params.get("industry")
    const solutionParam = params.get("solution") || "all"
    const productParam = params.get("product") || "all"

    return {
      industries: industryParam ? industryParam.split(",").filter(Boolean) : [],
      solution: solutionParam,
      product: productParam,
    }
  }

  const [selectedIndustries, setSelectedIndustries] = useState<string[]>(
    getInitialFilters().industries
  )
  const [selectedSolution, setSelectedSolution] = useState(
    getInitialFilters().solution
  )
  const [selectedProduct, setSelectedProduct] = useState(
    getInitialFilters().product
  )
  const [email, setEmail] = useState("")

  // URL 변경 시 필터 상태 동기화
  useEffect(() => {
    const { industries, solution, product } = getInitialFilters()
    setSelectedIndustries(industries)
    setSelectedSolution(solution)
    setSelectedProduct(product)
  }, [searchString])

  // 전체 선택 여부
  const isAllSelected = selectedIndustries.length === industryOptions.length

  // 전체 선택/해제 토글
  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIndustries([])
    } else {
      setSelectedIndustries(industryOptions.map((opt) => opt.id))
    }
  }

  // 개별 산업군 토글
  const toggleIndustry = (industryId: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industryId)
        ? prev.filter((id) => id !== industryId)
        : [...prev, industryId]
    )
  }

  // 필터 적용 (URL 업데이트)
  const applyFilters = () => {
    const params = new URLSearchParams()
    if (selectedIndustries.length > 0) {
      params.set("industry", selectedIndustries.join(","))
    }
    if (selectedSolution && selectedSolution !== "all") {
      params.set("solution", selectedSolution)
    }
    if (selectedProduct && selectedProduct !== "all") {
      params.set("product", selectedProduct)
    }
    const queryString = params.toString()
    setLocation(queryString ? `/cases?${queryString}` : "/cases")
  }

  // 필터 초기화
  const resetFilters = () => {
    setSelectedIndustries([])
    setSelectedSolution("all")
    setSelectedProduct("all")
    setLocation("/cases")
  }

  // 필터링된 결과
  const filteredCases = useMemo(() => {
    const { industries, solution, product } = getInitialFilters()
    const actualSolution = solution === "all" ? "" : solution
    const actualProduct = product === "all" ? "" : product
    return filterCases(industries, actualSolution, actualProduct)
  }, [searchString])

  // 뉴스레터 구독
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 실제 구독 로직 구현
    alert(`${email}로 뉴스레터 구독이 완료되었습니다.`)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-background" data-testid="page-cases">
      <Header />
      <main className="pt-20">
        {/* 브레드크럼 */}
        <div className="bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/">
                <span className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Home className="w-4 h-4" />
                  홈
                </span>
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">적용 사례</span>
            </nav>
          </div>
        </div>

        {/* 페이지 헤더 */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">적용 사례</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              국내 대표 조선·건설 기업에서 실제 운영 중인 자동화 솔루션 사례입니다.
            </p>
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 좌측 사이드바 - 필터 */}
            <aside className="w-full lg:w-[280px] lg:sticky lg:top-24 lg:self-start flex-shrink-0">
              <div className="bg-white rounded-lg border p-5 space-y-6">
                {/* 필터 헤더 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <span className="font-semibold text-gray-900">필터</span>
                  </div>
                  <button
                    onClick={resetFilters}
                    className="text-xs text-gray-500 hover:text-primary transition-colors"
                  >
                    초기화
                  </button>
                </div>

                {/* 산업군 체크박스 */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-700">산업군</h3>
                  <div className="space-y-2">
                    {/* 전체 선택 */}
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <Checkbox
                        checked={isAllSelected}
                        onCheckedChange={toggleSelectAll}
                        className="data-[state=checked]:bg-primary"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        전체 선택
                      </span>
                    </label>
                    <div className="border-t my-2" />
                    {industryOptions.map((option) => (
                      <label
                        key={option.id}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <Checkbox
                          checked={selectedIndustries.includes(option.id)}
                          onCheckedChange={() => toggleIndustry(option.id)}
                          className="data-[state=checked]:bg-primary"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 솔루션 드롭다운 */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-700">솔루션 구분</h3>
                  <Select
                    value={selectedSolution}
                    onValueChange={setSelectedSolution}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="솔루션 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">전체</SelectItem>
                      {solutionOptions.map((option) => (
                        <SelectItem key={option.id} value={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* 제품 드롭다운 */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-700">제품 구분</h3>
                  <Select
                    value={selectedProduct}
                    onValueChange={setSelectedProduct}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="제품 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">전체</SelectItem>
                      {productOptions.map((option) => (
                        <SelectItem key={option.id} value={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* 필터 적용 버튼 */}
                <Button onClick={applyFilters} className="w-full">
                  필터 적용하기
                </Button>

                {/* 구분선 */}
                <div className="border-t" />

                {/* 뉴스레터 구독 섹션 */}
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary to-primary/80 p-5 text-white">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4" />
                      <span className="font-semibold text-sm">뉴스레터 구독</span>
                    </div>
                    <p className="text-xs text-white/80 mb-4">
                      최신 산업 자동화 트렌드와 사례를 받아보세요.
                    </p>
                    <form onSubmit={handleSubscribe} className="space-y-2">
                      <Input
                        type="email"
                        placeholder="이메일 주소"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 text-sm"
                        required
                      />
                      <Button
                        type="submit"
                        variant="secondary"
                        size="sm"
                        className="w-full gap-1"
                      >
                        구독하기 <ArrowRight className="w-3 h-3" />
                      </Button>
                    </form>
                  </div>
                  {/* 배경 장식 */}
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full" />
                  <div className="absolute -right-8 -top-8 w-16 h-16 bg-white/5 rounded-full" />
                </div>
              </div>
            </aside>

            {/* 우측 결과 그리드 */}
            <div className="flex-1 min-w-0">
              {/* 결과 카운트 */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">
                  총 <span className="font-semibold text-gray-900">{filteredCases.length}</span>개의 사례
                </p>
              </div>

              {/* 카드 그리드 */}
              {filteredCases.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCases.map((caseStudy) => (
                    <Link key={caseStudy.id} href={`/cases/${caseStudy.id}`}>
                      <article className="group bg-white rounded-lg border hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer h-full flex flex-col">
                        {/* 이미지 영역 */}
                        <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                          <img
                            src={caseStudy.image}
                            alt={caseStudy.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* 콘텐츠 영역 */}
                        <div className="p-5 flex-1 flex flex-col">
                          {/* 제목 */}
                          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {caseStudy.title}
                          </h3>

                          {/* 요약 (challenge 필드 활용) */}
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                            {caseStudy.challenge}
                          </p>

                          {/* 태그 영역 */}
                          <div className="flex flex-wrap gap-2 mt-auto">
                            <Badge variant="secondary" className="text-xs font-normal">
                              <Building2 className="w-3 h-3 mr-1" />
                              {caseStudy.client}
                            </Badge>
                            <Badge variant="outline" className="text-xs font-normal">
                              {caseStudy.industry.split(" ")[0].split("/")[0]}
                            </Badge>
                            {caseStudy.solution.toLowerCase().includes("plasma") ||
                            caseStudy.solution.toLowerCase().includes("cutting") ? (
                              <Badge variant="outline" className="text-xs font-normal">
                                <Cpu className="w-3 h-3 mr-1" />
                                Cutting
                              </Badge>
                            ) : caseStudy.solution.toLowerCase().includes("amr") ? (
                              <Badge variant="outline" className="text-xs font-normal">
                                <Bot className="w-3 h-3 mr-1" />
                                AMR
                              </Badge>
                            ) : null}
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <Filter className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500 mb-4">
                    선택한 필터에 해당하는 사례가 없습니다.
                  </p>
                  <Button variant="outline" onClick={resetFilters}>
                    필터 초기화
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
