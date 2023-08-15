// func1

const greetMe = () => {
    console.log("Hello Cynthia! Today will be a great day");
}

greetMe();

// 2

const printBarrelRoll = (name) => {
    console.log(`${name} did a barrel roll!`);
}

printBarrelRoll("Star Fox");

// 3

const printLoopToTen = () => {
    for(let i = 0; i <= 10; i++){
        console.log(i);
    }
}

printLoopToTen();

// 4

const sayGoodbye = (name) => {
    console.log(`Goodbye, ${name}`);
}
sayGoodbye("Sally");

// 5
// yeah, asked chatGPT for help with this

const createMarioPole = (n) => {
    const pole = [];
    for (let i = 0; i < n; i++) {
    pole.push("   ||");
  }
  pole.push("-------");
  pole.unshift('***');
  pole.unshift('**');
  pole.unshift('*');
  return pole.join("\n");
}

console.log(createMarioPole(5));