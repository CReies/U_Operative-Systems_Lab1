import * as readline from 'readline';
import { FIFO, RR, SJF } from './algorithms';
import { readJSON } from './functions';
import { process } from './types';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const processes = readJSON('./src/processes.json') as process[];

const quantumTime = 1000;

function ask() {
	rl.question('Que algoritmo de planificación le gustaría utilizar?\n1- FIFO\n2- SJF\n3- RR\n#', 
	input => {
		switch (input) {
			case '1':
				rl.close();
				FIFO(processes, quantumTime);
				break;

			case '2':
				rl.close();
				SJF(processes, quantumTime);
				break;

			case '3':
				rl.close();
				RR(processes, quantumTime);
				break;

			default:
				console.log('\nPor favor ingrese un valor válido');
				setTimeout(() => {
					console.log();
					ask();
				}, 2000);
				break;
		}
	});
}

ask();
