import { useState, useRef, useEffect } from "react";

const C = {
  verde: "#5a8a3c",
  verdeClaro: "#7db852",
  verdePale: "#eef5e8",
  verdeLight: "#d6ebc4",
  verdeMid: "#a8d080",
  branco: "#ffffff",
  bgPage: "#f7f9f4",
  bgCard: "#ffffff",
  textoDark: "#2c3e2d",
  textoMid: "#4a6448",
  textoSuave: "#7a9470",
  borda: "#c8ddb8",
  bordaSuave: "#e2eeda",
};

const SYSTEM_PROMPT = `Você é Annicca, assistente virtual serena e acolhedora da Comunidade Aprendentes — espaço criado pelo Prof. Marcelo Oliveira para explorar Mindfulness, Psicologia e desenvolvimento humano.

Seu tom é sempre calmo, presente e gentil — como alguém que pratica o que fala. Você não pressiona, não apressa. Você acompanha.

## SEU PROPÓSITO

Ajudar visitantes a compreenderem o valor da Comunidade Aprendentes e do Curso de Gerenciamento Emocional e Saúde Mental, incentivando a assinatura da comunidade de forma natural e verdadeira.

## A COMUNIDADE APRENDENTES — O CORAÇÃO DE TUDO

A assinatura da Comunidade Aprendentes é a porta de entrada para tudo: é através dela que o aluno participa das turmas do curso ao longo de um ano inteiro.

**O que a assinatura inclui:**
- Acesso completo por 1 ano (10 meses de comunidade ativa)
- Participação em todas as turmas do Curso de Gerenciamento Emocional durante esse período
- Encontros ao vivo toda quarta-feira pelo Zoom (conteúdos gravados para quem não puder ao vivo)
- Artigos, reflexões e dicas práticas sobre Psicologia, Filosofia, Mindfulness e Meditação
- Áudios de meditação e recursos para aplicar no cotidiano
- Um ambiente de escuta, respeito e apoio mútuo entre membros

**Valor da assinatura:** R$ 640,00 (Dádiva) — esse é o valor base, escolhido com cuidado como referência justa para cursos de Mindfulness com profissionais qualificados. Ao escolher esse valor, o assinante também contribui para que pessoas com menos recursos possam participar.

**Pagamento:** PIX para CPF 277.305.968-90 (Marcelo Batista de Oliveira) ou pelo link https://chk.eduzz.com/Q9N5PN3B01. Após o pagamento, enviar comprovante para o WhatsApp +55 21 97410-0506 (Helena).

**Formulário de inscrição:** https://forms.gle/UxwN3wczm3oeXi3X6

## SOBRE O CURSO DE GERENCIAMENTO EMOCIONAL

Programa de 10 semanas inspirado nos MBI's (Mindfulness Based Interventions), com base científica sólida. Módulos:

- **Mindfulness** (UMASS Medical Center e Oxford): meditação, psicoeducação, MBSR/MBCT
- **Mindfulness de Harvard** (Ellen Langer): quebra de automatismos, presença consciente
- **Compaixão e Conexão Humana** (UCSD): os 3 sistemas de regulação emocional, autocuidado, empatia vs. compaixão
- **TCC baseada em Mindfulness / ACT** (Hayes/Harris): aceitação, valores, desfusão cognitiva, metacognição

Evidências científicas mostram efetividade comparável à farmacoterapia para prevenção de recaídas de depressão — incorporado ao sistema de saúde inglês (NICE). Também eficaz para burnout e estresse profissional.

## SOBRE O PROFESSOR MARCELO OLIVEIRA

Psicólogo Clínico, Mestre em Saúde Coletiva pela Unifesp. Um dos pioneiros de Mindfulness no Brasil, com mais de 120 turmas conduzidas. Formações em Oxford, UCSD, Unifesp e com Russ Harris (ACT). Atuou na 3M, Bayer, BASF. Coautor do livro "Terapias Comportamentais de Terceira Geração". Apareceu na Globo, Folha de S.Paulo, GloboNews.

## PRÓXIMA TURMA

A turma que está com inscrições abertas começa no dia **12 de agosto de 2025**, às **19h (horário de Brasília)**, e acontece toda **quarta-feira** por no mínimo 2 horas. Mencione esse dado sempre que a pessoa perguntar sobre datas, horários ou quando começa.

## QUANDO O VALOR NÃO É POSSÍVEL

Se a pessoa não conseguir o valor de R$ 640,00, oriente com gentileza: existe a opção "Possível", em que o valor é definido por contribuição sincera. Basta entrar em contato pelo WhatsApp para conversar e encontrar a melhor solução juntos — use o link: <a href="https://wa.me/5521974100506" target="_blank">falar pelo WhatsApp</a>. Ninguém que queira aprender ficará de fora por questões financeiras.

## COMO SE COMPORTAR

- Fale com calma e presença — como alguém que realmente escuta
- Primeiro compreenda o que a pessoa está vivendo (estresse, ansiedade, burnout, busca de sentido), depois apresente a comunidade como resposta natural
- Reforce sempre que a assinatura da Comunidade Aprendentes é o caminho completo: nela o aluno tem acesso ao curso e a muito mais, por um ano inteiro
- Nunca invente informações. Se não souber, sugira o contato pelo WhatsApp
- Evite listas longas — prefira parágrafos curtos, fluidos e humanos
- Responda sempre em português brasileiro
- Máximo 4 parágrafos por resposta

## NEGRITO — REGRA OBRIGATÓRIA

Use a tag HTML <strong> para destacar em negrito:
- Todos os valores monetários: <strong>R$ 640,00</strong>
- Datas e horários: <strong>12 de agosto</strong>, <strong>19h (horário de Brasília)</strong>, <strong>quarta-feira</strong>
- Palavras-chave centrais: <strong>Comunidade Aprendentes</strong>, <strong>Mindfulness</strong>, <strong>Gerenciamento Emocional</strong>, <strong>saúde mental</strong>, <strong>10 semanas</strong>, <strong>1 ano</strong>

## INSTAGRAM — REGRA OBRIGATÓRIA

Ao final de TODA resposta, acrescente uma linha convidando a pessoa a seguir no Instagram, usando o link abaixo. Faça de forma leve e natural, variando o texto:
<a href="https://instagram.com/comunidadeaprendentes" target="_blank">@comunidadeaprendentes no Instagram</a>

Exemplos de encerramento:
- "Ah, e se quiser acompanhar conteúdos do dia a dia, nos siga no <a href="https://instagram.com/comunidadeaprendentes" target="_blank">@comunidadeaprendentes no Instagram</a> 🌿"
- "Você também nos encontra no <a href="https://instagram.com/comunidadeaprendentes" target="_blank">@comunidadeaprendentes no Instagram</a> — por lá compartilhamos reflexões e práticas com frequência."

## LINKS — REGRA OBRIGATÓRIA

Sempre que for direcionar a pessoa a um link, use obrigatoriamente a tag HTML <a> com o formato abaixo. NUNCA escreva URLs cruas.

Exemplos:
- Inscrição: <a href="https://forms.gle/UxwN3wczm3oeXi3X6" target="_blank">preencher o formulário de inscrição</a>
- Pagamento: <a href="https://chk.eduzz.com/Q9N5PN3B01" target="_blank">acessar o link de pagamento</a>
- WhatsApp: <a href="https://wa.me/5521974100506" target="_blank">falar pelo WhatsApp</a>
- Instagram: <a href="https://instagram.com/comunidadeaprendentes" target="_blank">@comunidadeaprendentes no Instagram</a>`;

function Message({ msg }) {
  const isUser = msg.role === "user";
  return (
    <div style={{
      display: "flex",
      flexDirection: isUser ? "row-reverse" : "row",
      alignItems: "flex-end",
      gap: 10,
      marginBottom: 18,
    }}>
      {!isUser && (
        <div style={{
          width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
          background: `linear-gradient(145deg, ${C.verde}, ${C.verdeClaro})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16,
          boxShadow: `0 2px 10px ${C.verdeMid}55`,
        }}>🍃</div>
      )}
      {isUser ? (
        <div style={{
          maxWidth: "76%",
          padding: "13px 17px",
          borderRadius: "18px 4px 18px 18px",
          background: `linear-gradient(135deg, ${C.verde}, ${C.verdeClaro})`,
          color: C.branco,
          fontSize: 14,
          lineHeight: 1.75,
          boxShadow: `0 3px 14px ${C.verde}33`,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          letterSpacing: "0.01em",
        }}>
          {msg.content}
        </div>
      ) : (
        <div
          style={{
            maxWidth: "76%",
            padding: "13px 17px",
            borderRadius: "4px 18px 18px 18px",
            background: C.branco,
            color: C.textoDark,
            fontSize: 14,
            lineHeight: 1.75,
            boxShadow: `0 2px 10px rgba(0,0,0,0.07)`,
            border: `1px solid ${C.bordaSuave}`,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            letterSpacing: "0.01em",
          }}
          data-annicca
          dangerouslySetInnerHTML={{ __html: msg.content }}
        />
      )}
    </div>
  );
}

const QUICK = [
  "O que é a Comunidade Aprendentes?",
  "Como funciona o curso?",
  "Não consigo pagar R$640. E agora?",
  "Quero me inscrever!",
];

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(text) {
    const msg = (text ?? input).trim();
    if (!msg || loading) return;
    const newMsgs = [...messages, { role: "user", content: msg }];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);
    setError(null);
    try {
      const geminiContents = newMsgs.map(m => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: geminiContents,
            generationConfig: { maxOutputTokens: 1000 },
          }),
        }
      );
      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "(sem resposta)";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setError("Não consegui conectar. Por favor, tente novamente.");
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }

  function onKey(e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: C.bgPage,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>

      {/* Header */}
      <div style={{
        width: "100%", maxWidth: 680,
        padding: "20px 20px 0",
        boxSizing: "border-box",
      }}>
        <div style={{
          background: C.branco,
          borderRadius: 18,
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          gap: 14,
          boxShadow: `0 2px 18px ${C.verde}14`,
          border: `1px solid ${C.borda}`,
        }}>
          <div style={{
            width: 50, height: 50, borderRadius: "50%", flexShrink: 0,
            background: `linear-gradient(145deg, ${C.verde}, ${C.verdeClaro})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22,
            boxShadow: `0 4px 14px ${C.verde}44`,
          }}>🍃</div>

          <div>
            <div style={{ color: C.textoDark, fontWeight: 700, fontSize: 16, letterSpacing: "0.02em" }}>
              Annicca
            </div>
            <div style={{ color: C.textoSuave, fontSize: 12, marginTop: 1 }}>
              Assistente · Comunidade Aprendentes
            </div>
          </div>

          <div style={{ marginLeft: "auto" }}>
            <span style={{
              fontSize: 11, color: C.verde,
              background: C.verdePale,
              border: `1px solid ${C.verdeLight}`,
              borderRadius: 20,
              padding: "3px 11px",
              fontWeight: 600,
              letterSpacing: "0.03em",
            }}>● presente</span>
          </div>
        </div>
      </div>

      {/* Área de chat */}
      <div style={{
        flex: 1,
        width: "100%",
        maxWidth: 680,
        padding: "20px 20px 0",
        boxSizing: "border-box",
        overflowY: "auto",
        maxHeight: "calc(100vh - 178px)",
      }}>

        {messages.length === 0 && (
          <div style={{ textAlign: "center", padding: "28px 8px 24px" }}>
            <div style={{ fontSize: 44, marginBottom: 14 }}>🌱</div>
            <h2 style={{
              color: C.textoDark, fontSize: 20, fontWeight: 700,
              margin: "0 0 10px", letterSpacing: "0.01em",
            }}>
              Olá, seja bem-vindo(a).
            </h2>
            <p style={{
              color: C.textoMid, fontSize: 14, margin: "0 0 6px",
              lineHeight: 1.7, maxWidth: 380, marginLeft: "auto", marginRight: "auto",
            }}>
              Sou Annicca, e estou aqui para te apresentar a <strong style={{ color: C.verde }}>Comunidade Aprendentes</strong> e o Curso de Gerenciamento Emocional do Prof. Marcelo Oliveira.
            </p>
            <p style={{
              color: C.textoSuave, fontSize: 13, marginBottom: 26,
              lineHeight: 1.6,
            }}>
              Como posso te ajudar hoje?
            </p>

            <div style={{
              display: "flex", flexWrap: "wrap", gap: 8,
              justifyContent: "center",
            }}>
              {QUICK.map((q, i) => (
                <button key={i} onClick={() => send(q)} style={{
                  padding: "9px 16px",
                  borderRadius: 22,
                  border: `1.5px solid ${C.borda}`,
                  background: C.branco,
                  color: C.verde,
                  fontSize: 13,
                  cursor: "pointer",
                  fontWeight: 500,
                  lineHeight: 1.4,
                  fontFamily: "inherit",
                }}>
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => <Message key={i} msg={m} />)}

        {loading && (
          <div style={{ display: "flex", alignItems: "flex-end", gap: 10, marginBottom: 18 }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: `linear-gradient(145deg, ${C.verde}, ${C.verdeClaro})`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
            }}>🍃</div>
            <div style={{
              padding: "12px 16px", borderRadius: "4px 18px 18px 18px",
              background: C.branco,
              border: `1px solid ${C.bordaSuave}`,
              display: "flex", gap: 5, alignItems: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
            }}>
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: "inline-block",
                  width: 7, height: 7, borderRadius: "50%",
                  background: C.verdeMid,
                  animation: "blink 1.3s ease-in-out infinite",
                  animationDelay: `${i * 0.22}s`,
                }} />
              ))}
            </div>
          </div>
        )}

        {error && (
          <div style={{
            padding: "10px 16px", borderRadius: 10,
            background: "#fff8f8", border: "1px solid #f5c6c6",
            color: "#b94040", fontSize: 13, marginBottom: 14,
          }}>⚠️ {error}</div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{
        width: "100%", maxWidth: 680,
        padding: "12px 20px 22px",
        boxSizing: "border-box",
      }}>
        <div style={{
          display: "flex", gap: 10, alignItems: "flex-end",
          background: C.branco,
          border: `1.5px solid ${C.borda}`,
          borderRadius: 18,
          padding: "10px 10px 10px 18px",
          boxShadow: `0 4px 22px ${C.verde}10`,
        }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Escreva sua dúvida com calma…"
            rows={1}
            style={{
              flex: 1, background: "transparent", border: "none", outline: "none",
              color: C.textoDark, fontSize: 14, lineHeight: 1.65,
              resize: "none", maxHeight: 110, overflowY: "auto",
              fontFamily: "inherit",
            }}
            onInput={e => {
              e.target.style.height = "auto";
              e.target.style.height = Math.min(e.target.scrollHeight, 110) + "px";
            }}
          />
          <button
            onClick={() => send()}
            disabled={!input.trim() || loading}
            style={{
              width: 42, height: 42, borderRadius: 13, border: "none",
              background: input.trim() && !loading
                ? `linear-gradient(135deg, ${C.verde}, ${C.verdeClaro})`
                : C.verdePale,
              color: input.trim() && !loading ? C.branco : C.verdeMid,
              cursor: input.trim() && !loading ? "pointer" : "default",
              fontSize: 18, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
              boxShadow: input.trim() && !loading ? `0 3px 10px ${C.verde}44` : "none",
            }}
          >↑</button>
        </div>
        <p style={{
          color: C.textoSuave, fontSize: 11, textAlign: "center",
          margin: "8px 0 0", opacity: 0.7,
        }}>
          Enter para enviar · Shift+Enter para nova linha
        </p>
      </div>

      <style>{`
        @keyframes blink {
          0%, 80%, 100% { opacity: 0.25; transform: scale(0.75); }
          40% { opacity: 1; transform: scale(1); }
        }
        * { scrollbar-width: thin; scrollbar-color: ${C.verdeLight} transparent; }
        textarea::placeholder { color: ${C.textoSuave}; opacity: 0.7; }
        [data-annicca] a {
          color: ${C.verde};
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        [data-annicca] a:hover { color: ${C.verdeClaro}; }
        [data-annicca] strong {
          color: ${C.textoDark};
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
