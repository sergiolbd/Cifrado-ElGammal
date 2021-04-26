import {ELGammal} from './ElGammal';

/**
 * Solicitamos datos por pantalla haciendo uso de node.js
 */
console.log('INTERCAMBIO DE CLAVES DE DIFFIE-HELLMANY CIFRADO DE ELGAMAL');
const entrada = ['Imput p --> ', 'Input a --> ', 'Input k --> ', 'Input x --> ', 'Input m -->  '];
const respuestas: number[] = [];

function pregunta(i: number) {
  process.stdout.write(entrada[i]);
}

process.stdin.on('data', function(data) {
  respuestas.push(parseInt(data.toString()));

  if (respuestas.length < entrada.length) {
    pregunta(respuestas.length);
  } else {
    console.log('\n*****************************************************\n');
    const ElGammal1 = new ELGammal(respuestas[0], respuestas[1], respuestas[2], respuestas[3], respuestas[4]);
    ElGammal1.printGammal();
    process.exit();
  }
});

pregunta(0);

