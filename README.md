# Simulação Física com Matter.js e p5.js

Este projeto demonstra uma simulação básica de física utilizando a **biblioteca Matter.js** em conjunto com **p5.js** para renderização gráfica. Nele, diferentes corpos físicos (círculo, quadrado e retângulo) interagem com o solo, cada um com propriedades físicas distintas.

---

## 📚 Bibliotecas Utilizadas

- **Matter.js** – motor de física 2D
- **p5.js** – biblioteca para criação e renderização gráfica

---

## ⚙️ Funcionalidades

- Criação de um motor de física (`Engine`)
- Adição de corpos físicos ao mundo (`World`)
- Simulação de:
  - Um **círculo**
  - Um **quadrado**
  - Um **retângulo**
- Cada corpo possui propriedades diferentes como:
  - `restitution` (elasticidade)
  - `friction` (atrito)
  - `frictionAir` (resistência do ar)
- Um **chão estático** que impede os objetos de caírem infinitamente

---

## 🧱 Estrutura do Código

### Variáveis Principais
- `engine` – motor da física
- `world` – mundo físico
- `circulo`, `quadrado`, `retangulo` – corpos dinâmicos
- `ground` – corpo estático (chão)

---

## ▶️ Funcionamento

### `setup()`
- Cria o canvas
- Inicializa o motor de física
- Cria o chão (objeto estático)
- Cria os corpos com propriedades físicas diferentes
- Define modos de desenho (`rectMode` e `ellipseMode`)

### `draw()`
- Atualiza o motor de física a cada frame
- Desenha o fundo
- Renderiza os corpos de acordo com suas posições no mundo físico

---

## 🧪 Propriedades dos Objetos

### Círculo
- Boa elasticidade
- Baixo atrito
- Sem resistência do ar

### Quadrado
- Alta elasticidade
- Pouco atrito
- Resistência média do ar

### Retângulo
- Quase sem elasticidade
- Alto atrito
- Alta resistência do ar

---

## 📌 Observações

- As dimensões desenhadas no `draw()` não correspondem exatamente às dimensões físicas criadas no Matter.js.
- O projeto é ideal para fins educacionais e experimentação com física básica.

---

## 🚀 Como Executar

1. Importe as bibliotecas **p5.js** e **Matter.js** no seu projeto
2. Cole o código em um arquivo `.js`
3. Execute em um servidor local ou editor online como:
   - p5.js Web Editor

---

## 🧠 Autor
Gabriel Bento
