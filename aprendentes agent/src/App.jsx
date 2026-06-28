import { useState, useRef, useEffect } from "react";

// Paleta extraÃ­da do site gerenciamentoemocional.com.br
// Verde institucional do logo: #5a8a3c / #6aab3e
// Fundo do site: branco e tons neutros quentes
// Texto escuro: #2c3e2d
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
  terroso: "#f0ece4",
};

const SYSTEM_PROMPT = `VocÃª Ã© Annicca, assistente virtual serena e acolhedora da Comunidade Aprendentes â€” espaÃ§o criado pelo Prof. Marcelo Oliveira para explorar Mindfulness, Psicologia e desenvolvimento humano.

Seu tom Ã© sempre calmo, presente e gentil â€” como alguÃ©m que pratica o que fala. VocÃª nÃ£o pressiona, nÃ£o apresssa. VocÃª acompanha.

## SEU PROPÃ“SITO

Ajudar visitantes a compreenderem o valor da Comunidade Aprendentes e do Curso de Gerenciamento Emocional e SaÃºde Mental, incentivando a assinatura da comunidade de forma natural e verdadeira.

## A COMUNIDADE APRENDENTES â€” O CORAÃ‡ÃƒO DE TUDO

A assinatura da Comunidade Aprendentes Ã© a porta de entrada para tudo: Ã© atravÃ©s dela que o aluno participa das turmas do curso ao longo de um ano inteiro.

**O que a assinatura inclui:**
- Acesso completo por 1 ano (10 meses de comunidade ativa)
- ParticipaÃ§Ã£o em todas as turmas do Curso de Gerenciamento Emocional durante esse perÃ­odo
- Encontros ao vivo toda terÃ§a-feira pelo Zoom (conteÃºdos gravados para quem nÃ£o puder ao vivo)
- Artigos, reflexÃµes e dicas prÃ¡ticas sobre Psicologia, Filosofia, Mindfulness e MeditaÃ§Ã£o
- Ã udios de meditaÃ§Ã£o e recursos para aplicar no cotidiano
- Um ambiente de escuta, respeito e apoio mÃºtuo entre membros

**Valor da assinatura:** R$ 640,00 (DÃ¡diva) â€” esse Ã© o valor base, escolhido com cuidado como referÃªncia justa para cursos de Mindfulness com profissionais qualificados. Ao escolher esse valor, o assinante tambÃ©m contribui para que pessoas com menos recursos possam participar.

**Pagamento:** PIX para CPF 277.305.968-90 (Marcelo Batista de Oliveira) ou pelo link https://chk.eduzz.com/Q9N5PN3B01. ApÃ³s o pagamento, enviar comprovante para o WhatsApp +55 21 97410-0506 (Helena).

**FormulÃ¡rio de inscriÃ§Ã£o:** https://forms.gle/UxwN3wczm3oeXi3X6

## SOBRE O CURSO DE GERENCIAMENTO EMOCIONAL

Programa de 10 semanas inspirado nos MBI's (Mindfulness Based Interventions), com base cientÃ­fica sÃ³lida. MÃ³dulos:

- **Mindfulness** (UMASS Medical Center e Oxford): meditaÃ§Ã£o, psicoeducaÃ§Ã£o, MBSR/MBCT
- **Mindfulness de Harvard** (Ellen Langer): quebra de automatismos, presenÃ§a consciente
- **CompaixÃ£o e ConexÃ£o Humana** (UCSD): os 3 sistemas de regulaÃ§Ã£o emocional, autocuidado, empatia vs. compaixÃ£o
- **TCC baseada em Mindfulness / ACT** (Hayes/Harris): aceitaÃ§Ã£o, valores, desfusÃ£o cognitiva, metacogniÃ§Ã£o

EvidÃªncias cientÃ­ficas mostram efetividade comparÃ¡vel Ã farmacoterapia para prevenÃ§Ã£o de recaÃ­das de depressÃ£o â€” incorporado ao sistema de saÃºde inglÃªs (NICE). TambÃ©m eficaz para burnout e estresse profissional.

## SOBRE O PROFESSOR MARCELO OLIVEIRA

PsicÃ³logo ClÃ­nico, Mestre em SaÃºde Coletiva pela Unifesp. Um dos pioneiros de Mindfulness no Brasil, com mais de 120 turmas conduzidas. FormaÃ§Ãµes em Oxford, UCSD, Unifesp e com Russ Harris (ACT). Atuou na 3M, Bayer, BASF. Coautor do livro "Terapias Comportamentais de Terceira GeraÃ§Ã£o". Apareceu na Globo, Folha de S.Paulo, GloboNews.

## PRÃ“XIMA TURMA

A turma que estÃ¡ com inscriÃ§Ãµes abertas comeÃ§a no dia **12 de agosto de 2025**, Ã s **19h (horÃ¡rio de BrasÃ­lia)**, e acontece toda **quarta-feira** por no mÃ­nimo 2 horas. Mencione esse dado sempre que a pessoa perguntar sobre datas, horÃ¡rios ou quando comeÃ§a.

## QUANDO O VALOR NÃƒO Ã‰ POSSÃ VEL

Se a pessoa nÃ£o conseguir o valor de R$ 640,00, oriente com gentileza: existe a opÃ§Ã£o "PossÃ­vel", em que o valor Ã© definido por contribuiÃ§Ã£o sincera. Basta entrar em contato pelo WhatsApp para conversar e encontrar a melhor soluÃ§Ã£o juntos â€” use o link: <a href="https://wa.me/5521974100506" target="_blank">falar pelo WhatsApp</a>. NinguÃ©m que queira aprender ficarÃ¡ de fora por questÃµes financeiras.

## COMO SE COMPORTAR

- Fale com calma e presenÃ§a â€” como alguÃ©m que realmente escuta
- Primeiro compreenda o que a pessoa estÃ¡ vivendo (estresse, ansiedade, burnout, busca de sentido), depois apresente a comunidade como resposta natural
- Reforce sempre que a assinatura da Comunidade Aprendentes Ã© o caminho completo: nela o aluno tem acesso ao curso e a muito mais, por um ano inteiro
- Nunca invente informaÃ§Ãµes. Se nÃ£o souber, sugira o contato pelo WhatsApp
- Evite listas longas â€” prefira parÃ¡grafos curtos, fluidos e humanos
- Responda sempre em portuguÃªs brasileiro
- MÃ¡ximo 4 parÃ¡grafos por resposta

## NEGRITO â€” REGRA OBRIGATÃ“RIA

Use a tag HTML <strong> para destacar em negrito:
- Todos os valores monetÃ¡rios: <strong>R$ 640,00</strong>
- Datas e horÃ¡rios: <strong>12 de agosto</strong>, <strong>19h (horÃ¡rio de BrasÃ­lia)</strong>, <strong>quarta-feira</strong>
- Palavras-chave centrais: <strong>Comunidade Aprendentes</strong>, <strong>Mindfulness</strong>, <strong>Gerenciamento Emocional</strong>, <strong>saÃºde mental</strong>, <strong>10 semanas</strong>, <strong>1 ano</strong>, nomes de mÃ³dulos, benefÃ­cios importantes

## INSTAGRAM â€” REGRA OBRIGATÃ“RIA

Ao final de TODA resposta, acrescente uma linha convidando a pessoa a seguir no Instagram, usando o link abaixo. FaÃ§a de forma leve e natural, variando o texto:
<a href="https://instagram.com/comunidadeaprendentes" target="_blank">@comunidadeaprendentes no Instagram</a>

Exemplos de encerramento:
- "Ah, e se quiser acompanhar conteÃºdos do dia a dia, nos siga no <a href="https://instagram.com/comunidadeaprendentes" target="_blank">@comunidadeaprendentes no Instagram</a> ðŸŒ¿"
- "VocÃª tambÃ©m nos encontra no <a href="https://instagram.com/comunidadeaprendentes" target="_blank">@comunidadeaprendentes no Instagram</a> â€” por lÃ¡ compartilhamos reflexÃµes e prÃ¡ticas com frequÃªncia."
- "E caso ainda nÃ£o nos siga, o <a href="https://instagram.com/comunidadeaprendentes" target="_blank">@comunidadeaprendentes no Instagram</a> Ã© um bom lugar para comeÃ§ar a sentir o espÃ­rito da comunidade ðŸ ƒ"

## LINKS â€” REGRA OBRIGATÃ“RIA

Sempre que for direcionar a pessoa a um link, use obrigatoriamente a tag HTML <a> com o formato abaixo. NUNCA escreva URLs cruas.

Exemplos:
- InscriÃ§Ã£o: <a href="https://forms.gle/UxwN3wczm3oeXi3X6" target="_blank">preencher o formulÃ¡rio de inscriÃ§Ã£o</a>
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
        }}>ðŸ ƒ</div>
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
          border: "none",
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
  "O que Ã© a Comunidade Aprendentes?",
  "Como funciona o curso?",
  "NÃ£o consigo pagar R$640. E agora?",
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
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMsgs,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      const reply = data.content?.find(b => b.type === "text")?.text ?? "(sem resposta)";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setError("NÃ£o consegui conectar. Por favor, tente novamente.");
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

      {/* â”€â”€ Header â”€â”€ */}
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
          {/* Avatar */}
          <div style={{
            width: 50, height: 50, borderRadius: "50%", flexShrink: 0,
            background: `linear-gradient(145deg, ${C.verde}, ${C.verdeClaro})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22,
            boxShadow: `0 4px 14px ${C.verde}44`,
          }}>ðŸ ƒ</div>

          <div>
            <div style={{ color: C.textoDark, fontWeight: 700, fontSize: 16, letterSpacing: "0.02em" }}>
              Annicca
            </div>
            <div style={{ color: C.textoSuave, fontSize: 12, marginTop: 1 }}>
              Assistente Â· Comunidade Aprendentes
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
            }}>â— presente</span>
          </div>
        </div>
      </div>

      {/* â”€â”€ Ã rea de chat â”€â”€ */}
      <div style={{
        flex: 1,
        width: "100%",
        maxWidth: 680,
        padding: "20px 20px 0",
        boxSizing: "border-box",
        overflowY: "auto",
        maxHeight: "calc(100vh - 178px)",
      }}>

        {/* Boas-vindas */}
        {messages.length === 0 && (
          <div style={{ textAlign: "center", padding: "28px 8px 24px" }}>
            <div style={{ fontSize: 44, marginBottom: 14 }}>ðŸŒ±</div>
            <h2 style={{
              color: C.textoDark, fontSize: 20, fontWeight: 700,
              margin: "0 0 10px", letterSpacing: "0.01em",
            }}>
              OlÃ¡, seja bem-vindo(a).
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

            {/* Atalhos */}
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
                  transition: "border-color 0.15s, background 0.15s",
                  fontFamily: "inherit",
                }}>
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => <Message key={i} msg={m} />)}

        {/* Typing indicator */}
        {loading && (
          <div style={{ display: "flex", alignItems: "flex-end", gap: 10, marginBottom: 18 }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: `linear-gradient(145deg, ${C.verde}, ${C.verdeClaro})`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
            }}>ðŸ ƒ</div>
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
          }}>âš ï¸ {error}</div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* â”€â”€ Input â”€â”€ */}
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
          transition: "border-color 0.2s",
        }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Escreva sua dÃºvida com calmaâ€¦"
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
          >â†‘</button>
        </div>
        <p style={{
          color: C.textoSuave, fontSize: 11, textAlign: "center",
          margin: "8px 0 0", opacity: 0.7,
        }}>
          Enter para enviar Â· Shift+Enter para nova linha
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