import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-contact">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">문의하기</h1>
            <p className="text-lg text-muted-foreground">
              현장 상황에 맞는 자동화 솔루션을 제안해드립니다.
              아래 양식을 작성해주시면 전문 엔지니어가 연락드리겠습니다.
            </p>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
