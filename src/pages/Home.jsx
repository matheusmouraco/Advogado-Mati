
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Scale, Target, Smartphone, TrendingUp, Users, Lock, MessageSquare, Briefcase, BookOpen, UserCheck, Search, FileText, Bot, Handshake, Goal } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {

  const whatsappLink = "https://wa.me/5511992644010?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mati%20Studio%20e%20quero%20meu%20site%20jur%C3%ADdico.";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const benefits = [
    { icon: <Search className="w-8 h-8 mb-4 text-[#FF004D] mx-auto"/>, title: "Posicionamento no Google", text: "Apareça nas primeiras páginas e seja encontrado por quem precisa de você." },
    { icon: <UserCheck className="w-8 h-8 mb-4 text-[#FF004D] mx-auto"/>, title: "Geração de Leads Qualificados", text: "Com textos claros, formulários estratégicos e WhatsApp integrado." },
    { icon: <Smartphone className="w-8 h-8 mb-4 text-[#FF004D] mx-auto"/>, title: "Atendimento Facilitado", text: "Agilidade no contato e pré-atendimento direto do site." },
    { icon: <Briefcase className="w-8 h-8 mb-4 text-[#FF004D] mx-auto"/>, title: "Valorização da Marca Jurídica", text: "Visual, narrativa e comunicação que transmitem profissionalismo e ética." },
    { icon: <FileText className="w-8 h-8 mb-4 text-[#FF004D] mx-auto"/>, title: "Conteúdo que Educa e Conecta", text: "Artigos, dicas e notícias ajudam a construir autoridade." },
    { icon: <Scale className="w-8 h-8 mb-4 text-[#FF004D] mx-auto"/>, title: "Conformidade com a OAB", text: "Sites sóbrios, objetivos e totalmente dentro das diretrizes éticas." },
  ];

  const portfolioCases = [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/55925d58a_portfolio-1-a-50-Prancheta-2.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5bb9ddf73_portfolio-1-a-50-Prancheta-34.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f661aa57c_portfolio-1-a-50-Prancheta-44-1.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/244fb717a_portfolio-51-a-100-Prancheta-9.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0cd1f2dbd_portfolio-51-a-100-Prancheta-46-1.png"
  ];

  return (
    <>
      <Toaster />
      <style>{`
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e5a74737b_giammarco-boscaro-zeH-ljawHtg-unsplash.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .cta-bg {
          background-image: linear-gradient(to top, rgba(255, 0, 77, 0.1), transparent);
        }
        .final-cta-bg {
           background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3b08c4e8b_giammarco-boscaro-zeH-ljawHtg-unsplash.jpg');
           background-size: cover;
           background-position: center;
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm shadow-md z-40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1dd374859_Group-1171276258.png" alt="Mati Studio Logo" className="h-10" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full group px-6">
                Fale com um Especialista
                <MessageSquare className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>

        <meta name="google-site-verification" content="AziCyYpMant0mfZqMFkFTUv-re-yyZA_oMi6GoGG3c4" />
        
      </header>

      <main className="bg-black text-zinc-200 pt-[68px]">
        {/* Hero Section */}
        <section className="hero-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-36">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Scale className="w-16 h-16 text-[#FF004D] mx-auto mb-4"/>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                ADVOGADO, sua reputação começa antes do primeiro atendimento.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
                E na era digital, começa com uma busca no Google. Todos os dias, milhares de pessoas procuram por advogados online. A pergunta é: seu nome aparece? E quando aparece, ele transmite a autoridade que você construiu?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Chega de depender só do boca a boca.</h2>
             <p className="mt-6 text-lg text-zinc-400 max-w-3xl mx-auto">Você pode ser um excelente profissional, mas se o seu site não convence — ou pior, nem existe — você está deixando clientes valiosos para o concorrente.</p>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1dd374859_Group-1171276258.png" alt="Mati Studio Logo" className="h-12 mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">Na Mati Studio, criamos sites e landing pages para advogados e escritórios com um objetivo claro:</p>
            <p className="text-xl md:text-2xl text-[#FF004D] font-semibold">Transformar sua credibilidade profissional em presença digital de alto padrão.</p>
          </div>
        </section>

        {/* What your site will do */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Um site jurídico não é só estética.</h2>
                    <p className="mt-4 text-xl text-zinc-300">É posicionamento. É estratégia. É geração de oportunidades.</p>
                    <p className="mt-6 text-2xl font-bold text-white">O que seu novo site vai fazer por você:</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {icon: Briefcase, text: "Apresentar seus serviços com clareza, ética e sofisticação"},
                        {icon: Handshake, text: "Gerar confiança antes mesmo da primeira reunião"},
                        {icon: Search, text: "Aumentar seu alcance no Google"},
                        {icon: MessageSquare, text: "Facilitar o contato com clientes pelo WhatsApp"},
                        {icon: Goal, text: "Fortalecer sua marca pessoal ou institucional"},
                        {icon: Bot, text: "Trabalhar por você, 24 horas por dia"},
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 bg-zinc-800 p-4 rounded-lg">
                            <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                                <item.icon className="w-6 h-6 text-[#FF004D]"/>
                            </div>
                            <p className="text-zinc-300">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Areas of Law */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Especialistas em presença digital para o mercado jurídico</h2>
              <p className="text-lg text-zinc-400 mb-10">Trabalhamos com advogados de diversas áreas:</p>
              <div className="flex flex-wrap justify-center gap-4">
                  {["Cível", "Penal", "Trabalhista", "Previdenciário", "Empresarial", "Família e Sucessões", "Imobiliário", "Direito Médico", "Tributário"].map(area => (
                      <div key={area} className="bg-zinc-800 text-zinc-200 rounded-full px-5 py-2 text-md font-medium flex items-center gap-2">
                        <Scale className="w-4 h-4 text-[#FF004D]"/> {area}
                      </div>
                  ))}
              </div>
          </div>
        </section>

        {/* Services Structure */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-4xl font-bold text-white mb-12">Estrutura pensada para performance e confiança</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <Card className="bg-zinc-800 border-zinc-700 text-white p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <BookOpen className="w-10 h-10 text-[#FF004D]"/>
                            <h3 className="text-2xl font-bold">Site Institucional Jurídico</h3>
                        </div>
                        <ul className="space-y-3 list-disc list-inside text-zinc-300">
                            <li>Página inicial com apelo estratégico e autoridade</li>
                            <li>Página "Sobre" com storytelling da sua trajetória</li>
                            <li>Apresentação das especialidades com linguagem acessível</li>
                            <li>Página de contato com formulário e WhatsApp</li>
                            <li>SEO jurídico para ser encontrado no Google</li>
                            <li>Blog opcional com artigos e conteúdos educativos</li>
                        </ul>
                    </Card>
                    <Card className="bg-zinc-800 border-zinc-700 text-white p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <Target className="w-10 h-10 text-[#FF004D]"/>
                            <h3 className="text-2xl font-bold">Landing Pages Jurídicas</h3>
                        </div>
                         <p className="text-zinc-400 mb-3">Perfeitas para captar leads em áreas específicas como Revisão de aposentadoria, Planejamento sucessório, Inventário, etc.</p>
                        <ul className="space-y-3 list-disc list-inside text-zinc-300">
                            <li>Estrutura direta e textos estratégicos</li>
                            <li>Foco total em conversão real de clientes</li>
                        </ul>
                    </Card>
                </div>
            </div>
        </section>

         {/* Differentiator Table */}
        <section id="differentiators" className="py-20 bg-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-4xl font-bold text-white mb-12">Por que o site feito pela Mati Studio é diferente?</h2>
                <div className="grid md:grid-cols-2 gap-0.5 bg-zinc-700 rounded-lg overflow-hidden">
                    <div className="bg-zinc-800 p-6">
                        <h3 className="font-bold text-xl text-red-500 mb-4">Site Genérico</h3>
                        <ul className="space-y-3 text-zinc-400">
                            <li className="line-through">Sem estratégia de autoridade</li>
                            <li className="line-through">Layout básico e impessoal</li>
                            <li className="line-through">Textos genéricos e frios</li>
                            <li className="line-through">Difícil de encontrar no Google</li>
                            <li className="line-through">Sem foco em conversão</li>
                        </ul>
                    </div>
                    <div className="bg-zinc-900 p-6">
                        <h3 className="font-bold text-xl text-[#FF004D] mb-4">Site Jurídico da Mati Studio</h3>
                        <ul className="space-y-3 text-zinc-300">
                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF004D] mt-1 shrink-0"/><span>Posicionamento como referência no segmento</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF004D] mt-1 shrink-0"/><span>Design elegante, com identidade visual única</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF004D] mt-1 shrink-0"/><span>Redação profissional com foco em conexão</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF004D] mt-1 shrink-0"/><span>SEO jurídico aplicado desde o início</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#FF004D] mt-1 shrink-0"/><span>Estrutura pensada para gerar contatos e agendamentos</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Quem confia na gente</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioCases.map((src, i) => (
                <motion.div 
                  key={i} 
                  className="rounded-lg overflow-hidden shadow-lg border border-zinc-700/50"
                  variants={fadeIn} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{delay: i * 0.1}}
                >
                  <img src={src} alt={`Portfolio case ${i + 1}`} className="w-full h-auto object-cover"/>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Detailed Benefits */}
        <section id="benefits" className="py-20 bg-black cta-bg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-white text-center mb-12">Benefícios do seu novo site jurídico:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, i) => (
                        <motion.div key={i} className="text-center p-6 bg-zinc-900/50 rounded-lg border border-zinc-700 backdrop-blur-sm" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{delay: i * 0.1}}>
                            {benefit.icon}
                            <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                            <p className="text-zinc-400">{benefit.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-bg">
          <div className="py-24 text-center bg-black/70">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">O futuro da advocacia também é digital.</h2>
                <p className="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto">A sua presença online não pode ser deixada de lado. É ela que inicia a confiança, educa seu cliente e abre portas para novas oportunidades.</p>
                <div className="mt-10">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full text-lg px-10 py-6 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Quero meu site jurídico agora
                    </Button>
                  </a>
                </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Mati Studio | Autoridade Jurídica em Presença Digital</p>
        </div>
      </footer>
    </>
  );
}
