let basePreguntas = [
    //Pregunta 1
    {
    pregunta: "¿Cuál es el nobre de la siguiente compuerta?",
    ayuda: "Esta compuerta solo tiene una entrada y una salida y esta actúa como un inversor.",
    imagen: "./img/NOT.png",
    respuesta: "NOT",
    distractores:["AND", "OR", "XNOR"],

    },
    //Pregunta 2
    {
        pregunta: "¿Cuál es el nobre de la siguiente compuerta?",
        ayuda: "Indica que es necesario que en todas sus entradas se tenga un estado binario 1 para que la salida otorgue un 1 binario.",
        imagen: "./img/AND.png",
        respuesta: "AND",
        distractores:["XNOR", "NAND", "XOR"],
    
        },
        //Pregunta 3
    {
        pregunta: "¿Cuál es el nombre de la siguiente compuerta?", 
        ayuda: "Es or",
        imagen: "./img/OR.png",
        respuesta: "OR",
        distractores:["NOR", "XNOR", "AND"],
    
        },
    //Pregunta 4
    {
        pregunta: "¿Cuál es el resultado de la siguiente compuerta, si a= 1 y b= 0?", 
        imagen: "./img/OR.png",
        respuesta: "1",
        distractores:["0", "", ""],
    
        },
    
];