const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");

const valores = [120, 180, 90, 210];
const rotulos = ["Site", "API", "Banco", "Rede"];

// Fundo
ctx.fillStyle = "#f8fafc";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Título
ctx.font = "bold 28px Arial";
ctx.fillStyle = "#172554";
ctx.fillText("Desempenho dos serviços", 35, 45);

// Eixos
ctx.beginPath();
ctx.moveTo(60, 80);
ctx.lineTo(60, 330);
ctx.lineTo(560, 330);
ctx.strokeStyle = "#334155";
ctx.lineWidth = 3;
ctx.stroke();

// Gradiente das barras
const gradiente = ctx.createLinearGradient(0, 90, 0, 330);
gradiente.addColorStop(0, "#60a5fa");
gradiente.addColorStop(1, "#1d4ed8");

const larguraBarra = 75;
const espacamento = 42;
const inicioX = 95;
const baseY = 330;

for (let i = 0; i < valores.length; i++) {
    const altura = valores[i];
    const x = inicioX + i * (larguraBarra + espacamento);
    const y = baseY - altura;

    ctx.fillStyle = gradiente;
    ctx.fillRect(x, y, larguraBarra, altura);

    ctx.font = "bold 18px Arial";
    ctx.fillStyle = "#0f172a";
    ctx.fillText(String(valores[i]), x + 18, y - 10);

    ctx.font = "18px Arial";
    ctx.fillText(rotulos[i], x + 10, 360);
}

// Indicador circular
ctx.beginPath();
ctx.arc(500, 45, 14, 0, 2 * Math.PI);
ctx.fillStyle = "#16a34a";
ctx.fill();
ctx.strokeStyle = "#14532d";
ctx.lineWidth = 2;
ctx.stroke();

ctx.font = "18px Arial";
ctx.fillStyle = "#14532d";
ctx.fillText("Sistema ativo", 365, 52);
