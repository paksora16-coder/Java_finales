//EJERCICIO 1
let vida = 100;
let pociones = 3;
const limiteInferior = 50; 
const limiteSuperior = 100; 

console.log(`Estado inicial -> Vida: ${vida}, Pociones: ${pociones}`);


const intervalo = setInterval(() => {
  vida -= 5;
  console.log(`La vida ha bajado a: ${vida}`);

  if (vida < limiteInferior && pociones > 0) {
    vida += 30;
    pociones--;
    
    if (vida > limiteSuperior) {
      vida = limiteSuperior;
    }
    
    console.log(`¡Poción usada! Vida actual: ${vida}. Pociones restantes: ${pociones}`);
  }

  if (vida <= 0) {
    vida = 0;
    console.log("¡Game Over! El jugador se ha quedado sin vida.");
    clearInterval(intervalo);
  }
}, 2000);


//EJERCICIO 2
const bolsa = [
  { nombre: "Pokeball", cantidad: 5, tipo: "Normal" },
  { nombre: "Repel", cantidad: 3, tipo: "Normal" },
  { nombre: "Quick Attack", cantidad: 2, tipo: "TM" },
  { nombre: "Surf", cantidad: 3, tipo: "TM" },
  { nombre: "Soda Pop", cantidad: 10, tipo: "Consumable" }
];

function organizarBolsa(elementos) {
  const tiposUnicos = [...new Set(elementos.map(item => item.tipo))];
  
  const clasificados = {};

  tiposUnicos.forEach(tipo => {
    clasificados[tipo] = elementos
      .filter(item => item.tipo === tipo)
      .sort((a, b) => b.cantidad - a.cantidad);
  });

  console.log("--- Elementos organizados por tipo y ordenados por cantidad ---");
  for (const tipo in clasificados) {
    console.log(`Tipo: ${tipo}`, clasificados[tipo]);
  }

  return clasificados;
}

organizarBolsa(bolsa);


//EJERCICIO 3
const pikachu = {
  nombre: "Pikachu",
  tipo: "Eléctrico",
  ataqueNombre: "Impacto Trueno",
  dañoBase: 20,
  vida: 50,
  defensa: 10
};

const charmander = {
  nombre: "Charmander",
  tipo: "Fuego",
  ataqueNombre: "Ascuas",
  dañoBase: 25,
  vida: 60,
  defensa: 15
};

function atacar(atacante, defensor) {
  console.log(`\n--- ¡${atacante.nombre} ataca a ${defensor.nombre} con ${atacante.ataqueNombre}! ---`);
  console.log(`Vida inicial de ${defensor.nombre}: ${defensor.vida}`);
  console.log(`Defensa de ${defensor.nombre}: ${defensor.defensa}`);

  let dañoReal = atacante.dañoBase - defensor.defensa;

  if (dañoReal < 0) {
    dañoReal = 0;
  }

  defensor.vida -= dañoReal;

  if (defensor.vida < 0) {
    defensor.vida = 0;
  }

  console.log(`Daño efectivo causado: ${dañoReal}`);
  console.log(`Vida restante de ${defensor.nombre}: ${defensor.vida}`);
}
atacar(pikachu, charmander);