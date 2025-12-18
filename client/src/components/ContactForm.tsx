import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const formSchema = z.object({
  company: z.string().min(1, "회사명을 입력해주세요"),
  name: z.string().min(1, "담당자명을 입력해주세요"),
  email: z.string().email("올바른 이메일 주소를 입력해주세요"),
  phone: z.string().min(1, "연락처를 입력해주세요"),
  solution: z.string().min(1, "관심 솔루션을 선택해주세요"),
  message: z.string().optional(),
  agree: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집에 동의해주세요",
  }),
});

type FormData = z.infer<typeof formSchema>;

const solutions = [
  { value: "cutting", label: "Smart Cutting System" },
  { value: "amr", label: "산업현장 특화형 Omnidirectional AMR" },
  { value: "ai-brain", label: "AI Brain Robot" },
  { value: "other", label: "기타 / 통합 솔루션" },
];

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: "",
      name: "",
      email: "",
      phone: "",
      solution: "",
      message: "",
      agree: false,
    },
  });

  const onSubmit = (data: FormData) => {
    // todo: remove mock functionality - implement actual form submission
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    toast({
      title: "문의가 접수되었습니다",
      description: "담당자가 빠른 시일 내에 연락드리겠습니다.",
    });
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 text-center" data-testid="form-success">
        <CardContent className="p-0">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">문의가 접수되었습니다</h3>
          <p className="text-muted-foreground mb-6">
            담당자가 영업일 기준 24시간 이내에 연락드리겠습니다.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            새 문의하기
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
      data-testid="contact-form-container"
    >
      <Card>
        <CardHeader className="pb-4">
          <h3 className="text-xl font-semibold">상담 신청</h3>
          <p className="text-sm text-muted-foreground">
            아래 양식을 작성해주시면 담당자가 연락드립니다
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>회사명 *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="회사명"
                          {...field}
                          data-testid="input-company"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>담당자명 *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="이름"
                          {...field}
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일 *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="email@company.com"
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>연락처 *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="010-0000-0000"
                          {...field}
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="solution"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>관심 솔루션 *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger data-testid="select-solution">
                          <SelectValue placeholder="솔루션 선택" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {solutions.map((sol) => (
                          <SelectItem
                            key={sol.value}
                            value={sol.value}
                            data-testid={`option-${sol.value}`}
                          >
                            {sol.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>문의 내용</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="현장 상황이나 필요한 솔루션에 대해 간략히 알려주세요"
                        className="min-h-[100px]"
                        {...field}
                        data-testid="textarea-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="agree"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start gap-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        data-testid="checkbox-agree"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal">
                        개인정보 수집 및 이용에 동의합니다 *
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full gap-2"
                disabled={form.formState.isSubmitting}
                data-testid="button-submit"
              >
                <Send className="w-4 h-4" />
                상담 신청하기
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">연락처</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">이메일</p>
                <p className="text-muted-foreground">contact@robotics.co.kr</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">전화</p>
                <p className="text-muted-foreground">02-1234-5678</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">주소</p>
                <p className="text-muted-foreground">
                  서울특별시 강남구 테헤란로 123
                  <br />
                  ROBOTICS 빌딩 5층
                </p>
              </div>
            </div>
          </div>
        </div>
        <Card className="p-6 bg-muted/50">
          <h4 className="font-semibold mb-2">빠른 응답을 약속합니다</h4>
          <p className="text-sm text-muted-foreground">
            영업일 기준 24시간 이내에 담당자가 연락드립니다.
            긴급한 문의는 전화로 연락해 주세요.
          </p>
        </Card>
      </div>
    </div>
  );
}
