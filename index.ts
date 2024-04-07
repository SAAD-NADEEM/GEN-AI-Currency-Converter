#!/usr/bin/env node

import inquirer from "inquirer";
async function program() {
// ---------------------- Currency & Thier symbols ----------------------
const currency: any = 
{
    PKR: 1,
    USD: 0.0036,
    EUR: 0.0033,
    TRY: 0.12,
    INR: 0.30,   
};

const symbols: any = 
{
    PKR: "RS",
    USD: "$",
    EUR: "€",
    TRY: "TL",
    INR: "₹",   
};

// ---------------------- Object of "from" ----------------------

let user_answer = await inquirer.prompt([
    {
        message: `Enter the currency you want to convert from: `,
        name: "from",
        type: "list",
        choices: ["PKR", "USD", "EUR", "TRY", "INR"],
    },
])

// ---------------------- Object of "to" ----------------------

do {
    const user_answer2 = await inquirer.prompt([
        {
            message: `Enter the currency you want to convert to: `,
            name: "to",
            type: "list",
            choices: ["PKR", "USD", "EUR", "TRY", "INR"],
        },
    ])
    var condition = user_answer.from == user_answer2.to;
    // console.log(condition);
    if (condition) {
        console.log("[Please select a different currency]");
    }
    else {
        var toReturn = user_answer2.to;
    };
}while(condition);

// ---------------------- Object of "amount" ----------------------

do {
    const user_answer3 = await inquirer.prompt([
        {
            message: `Enter the amount: `,
            name: "amount",
            type: "number",
        },
    ]);
    var condition = user_answer3.amount == 0 || Number.isNaN(user_answer3.amount);
    if (condition) {
        console.log("[Please enter a valid amount]");
    }
    else {
        var amountReturn = user_answer3.amount;
    };
}while(condition);

// ---------------------- Conversion ----------------------

let from = currency[user_answer.from];
let to = currency[toReturn];
let amount = amountReturn;
let baseAmmount = amount / from;
let converted = baseAmmount * to;
console.log(`=======================`)
console.log(`${symbols[user_answer.from]} ${amount} = ${symbols[toReturn]} ${converted.toFixed(2)}`);
console.log(`=======================`)

};

console.log(`
---------------------------------
:                               :
: Welcome To Currency Converter :
:                               :
---------------------------------`
);

// ---------------------- Menu ----------------------

var process = true;
while(process){
    const menu = await inquirer.prompt([
    {
        message: "Main Menu",
        type: "list",
        name: "Main",
        choices: ["Run", "Quit"],      
    }
    ]);
    
    if(menu.Main == "Run") 
    {
        await program();
    }
    else
    {
        process = false;
        console.log("Thanks For Using!");
    };
};