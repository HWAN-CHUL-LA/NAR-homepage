import { useState, useMemo } from "react"
import { Link } from "wouter"
import { Plus, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { caseStudies } from "@/lib/caseData"

const industryFilters = [
  { id: "all", label: "전체" },
  { id: "조선", label: "조선" },
  { id: "건설", label: "건설" },
]

const solutionOptions = [
  { value: "all", label: "솔루션" },
  { value: "cutting", label: "절단" },
  { value: "welding", label: "용접" },
  { value: "amr", label: "AMR" },
  { value: "ai", label: "Physical AI" },
]

const productOptions = [
  { value: "all", label: "제품" },
  { value: "형강절단", label: "형강절단 로봇" },
  { value: "수용접", label: "수용접 로봇" },
  { value: "amr", label: "AMR" },
  { value: "ai", label: "AI" },
]

export default function CaseFilterSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [solutionFilter, setSolutionFilter] = useState("all")
  const [productFilter, setProductFilter] = useState("all")
  const [isAnimating, setIsAnimating] = useState(false)

  const filteredCases = useMemo(() => {
    return caseStudies.filter((caseItem) => {
      const matchesIndustry = activeFilter === "all" || caseItem.industry.includes(activeFilter)
      const matchesSolution = solutionFilter === "all" || 
        caseItem.solution.toLowerCase().includes(solutionFilter.toLowerCase())
      return matchesIndustry && matchesSolution
    })
  }, [activeFilter, solutionFilter, productFilter])

  const handleFilterChange = (filterId: string) => {
    setIsAnimating(true)
    setActiveFilter(filterId)
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <section className="py-10 lg:py-14 bg-white" data-testid="case-filter-section">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Title */}
          <div className="lg:w-1/5 lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                Industry cases
              </h2>
              <Plus className="w-4 h-4 text-primary" />
            </div>
            <p className="text-gray-600 text-xs leading-relaxed">
              국내 대표 조선·건설 기업에서 실제 운영 중인 자동화 솔루션 사례
            </p>
          </div>

          {/* Right Column - Filters and Grid */}
          <div className="lg:w-4/5">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 pb-3 border-b border-gray-200">
              {/* Text Tabs */}
              <div className="flex items-center gap-4 overflow-x-auto pb-1 sm:pb-0">
                {industryFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => handleFilterChange(filter.id)}
                    className={`text-xs whitespace-nowrap transition-all pb-1 border-b-2 ${
                      activeFilter === filter.id
                        ? "text-gray-900 font-semibold border-gray-900"
                        : "text-gray-500 border-transparent hover:text-gray-700"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Dropdowns */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <select
                    value={solutionFilter}
                    onChange={(e) => setSolutionFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1.5 pr-8 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {solutionOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" />
                </div>

                <div className="relative">
                  <select
                    value={productFilter}
                    onChange={(e) => setProductFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1.5 pr-8 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {productOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Cards Grid */}
            <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 transition-opacity duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}>
              {filteredCases.slice(0, 6).map((caseItem) => (
                <Link key={caseItem.id} href={`/cases/${caseItem.id}`}>
                  <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer h-full flex flex-col">
                    {/* Content */}
                    <div className="p-3 flex-1">
                      <h3 className="text-xs font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {caseItem.title}
                      </h3>
                      <p className="text-[10px] text-gray-600 mb-2 line-clamp-2">
                        {caseItem.challenge}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 hover:bg-gray-200">
                          {caseItem.industry}
                        </Badge>
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 hover:bg-gray-200">
                          {caseItem.solution}
                        </Badge>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {filteredCases.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 text-sm">선택한 필터에 해당하는 사례가 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
