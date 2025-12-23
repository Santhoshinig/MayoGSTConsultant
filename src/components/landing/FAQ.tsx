import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Who should file an Income Tax Return?",
      answer: "Any individual whose gross total income exceeds the basic exemption limit (₹2.5 lakhs for individuals below 60 years) must file an ITR. Additionally, those who want to claim refunds, carry forward losses, or apply for loans/visas should also file.",
    },
    {
      question: "What documents do I need for filing ITR?",
      answer: "You'll need: PAN Card, Aadhaar Card, Form 16 (if salaried), Bank statements, Investment proofs (80C, 80D), Rent receipts (for HRA claims), and details of other income sources like rental income or capital gains.",
    },
    {
      question: "How long does it take to get a refund?",
      answer: "Typically, refunds are processed within 20-45 days after e-verification of your return. If you file early in the season, you may get your refund faster. We help you track your refund status in real-time.",
    },
    {
      question: "What is the difference between Old and New Tax Regime?",
      answer: "The Old Regime offers various deductions (80C, 80D, HRA, etc.) but has higher tax rates. The New Regime has lower tax rates but no deductions. Our calculator helps you choose the one that saves you more tax.",
    },
    {
      question: "Is my data safe with The Mayo Consultant?",
      answer: "Absolutely! We use bank-grade 256-bit SSL encryption to protect your data. We are fully compliant with government regulations and never share your personal information with third parties.",
    },
    {
      question: "What is GST filing and who needs to do it?",
      answer: "GST filing is mandatory for businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs for services). It includes filing GSTR-1 (outward supplies), GSTR-3B (monthly summary), and annual returns.",
    },
    {
      question: "How does Mayo CRM help tax consultants?",
      answer: "Mayo CRM is a free tool that helps CAs and tax consultants manage client data, track filing deadlines, store documents securely, and send automated reminders. It's designed specifically for tax professionals.",
    },
    {
      question: "Can I file ITR myself or do I need an expert?",
      answer: "If you have simple income sources (salary, one house property), you can easily file yourself using our guided process. For complex cases (multiple businesses, capital gains, foreign income), we recommend expert assistance.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about tax filing and our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
