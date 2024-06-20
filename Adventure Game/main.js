#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.greenBright("/$$$$$$$$ /$$                  /$$$$$$$$ /$$                    /$$$$$$$$                       "));
console.log(chalk.bold.greenBright("|__  $$__/|__/                 |__  $$__/                       |__  $$__/      "));
console.log(chalk.bold.greenBright("   | $$    /$$  /$$$$$$$         | $$  /$$$$$$   /$$$$$$$         | $$  /$$$$$$   /$$$$$$ "));
console.log(chalk.bold.greenBright("   | $$   | $$ /$$_____/         | $$ |____  $$ /$$_____/         | $$ /$$__  $$ /$$__  $$"));
console.log(chalk.bold.greenBright("   | $$   | $$| $$               | $$  /$$$$$$$| $$               | $$| $$  \ $$| $$$$$$$$"));
console.log(chalk.bold.greenBright("   | $$   | $$| $$               | $$ /$$__  $$| $$               | $$| $$  | $$| $$_____/"));
console.log(chalk.bold.greenBright("   | $$   | $$|  $$$$$$$         | $$|  $$$$$$$|  $$$$$$$         | $$|  $$$$$$/|  $$$$$$$"));
console.log(chalk.bold.greenBright("   |__/   |__/ \_______/          |__/ \_______/ \_______/           |__/ \______/  \_______/"));
console.log("\n");
console.log(chalk.bold.cyanBright("********************************************************************************************************"));
console.log("\n");
const board = [];
let indexNumberOfBoard;
function createBoard(board) {
    board.push([' ', ' ', ' ']);
    board.push([' ', ' ', ' ']);
    board.push([' ', ' ', ' ']);
}
function drawBoard(board) {
    console.log(chalk.bold.cyanBright('                                       ┌─────┬─────┬─────┐'));
    console.log(chalk.bold.cyanBright('                                       │ ' + board[0][0] + '   │ ' + board[0][1] + '   │ ' + board[0][2] + '   │'));
    console.log(chalk.bold.cyanBright('                                       ├─────┼─────┼─────┤'));
    console.log(chalk.bold.cyanBright('                                       │ ' + board[1][0] + '   │ ' + board[1][1] + '   │ ' + board[1][2] + '   │'));
    console.log(chalk.bold.cyanBright('                                       ├─────┼─────┼─────┤'));
    console.log(chalk.bold.cyanBright('                                       │ ' + board[2][0] + '   │ ' + board[2][1] + '   │ ' + board[2][2] + '   │'));
    console.log(chalk.bold.cyanBright('                                       └─────┴─────┴─────┘\n'));
}
async function userMove(board, player) {
    const put = await inquirer.prompt([{
            type: "input",
            name: "index",
            message: (chalk.bold.yellowBright("Select index number of board from 1 to 9"))
        }]);
    const indexNumberOfBoard = put.index;
    if (indexNumberOfBoard === "1") {
        if (board[0][0] === ' ') {
            board[0][0] = player;
        }
        else {
            console.log(chalk.bold.magentaBright("\n👉 Box already filled 💫👊💥."));
        }
    }
    else if (indexNumberOfBoard === "2") {
        if (board[0][1] === ' ') {
            board[0][1] = player;
        }
        else {
            console.log(chalk.bold.magentaBright("\n👉 Box already filled 💫👊💥."));
        }
    }
    else if (indexNumberOfBoard === "3") {
        if (board[0][2] === ' ') {
            board[0][2] = player;
        }
        else {
            console.log(chalk.bold.magentaBright("\n👉 Box already filled 💫👊💥."));
        }
    }
    else if (indexNumberOfBoard === "4") {
        if (board[1][0] === ' ') {
            board[1][0] = player;
        }
        else {
            console.log(chalk.bold.magentaBright("\n👉 Box already filled 💫👊💥."));
        }
    }
    else if (indexNumberOfBoard === "5") {
        if (board[1][1] === ' ') {
            board[1][1] = player;
        }
        else {
            console.log(chalk.bold.magentaBright("\n👉 Box already filled 💫👊💥."));
        }
    }
    else if (indexNumberOfBoard === "6") {
        if (board[1][2] === ' ') {
            board[1][2] = player;
        }
        else {
            console.log(chalk.bold.magentaBright("\n👉 Box already filled 💫👊💥."));
        }
    }
    else if (indexNumberOfBoard === "7") {
        if (board[2][0] === ' ') {
            board[2][0] = player;
        }
        else {
            console.log(chalk.bold.magentaBright("\n👉 Box already filled 💫👊💥."));
        }
    }
    else if (indexNumberOfBoard === "8") {
        if (board[2][1] === ' ') {
            board[2][1] = player;
        }
        else {
            console.log(chalk.bold.magentaBright("\n👉 Box already filled 💫👊💥."));
        }
    }
    else if (indexNumberOfBoard === "9") {
        if (board[2][2] === ' ') {
            board[2][2] = player;
        }
        else {
            console.log(chalk.bold.magentaBright("\n👉 Box already filled 💫👊💥."));
        }
    }
    else {
        console.log(chalk.bold.greenBright("\n👉 ❌Invalid Index No 👊💥."));
    }
}
function CheckWinner(board, player) {
    if (
    // Checking for horizontal wins
    (board[0][0] === player && board[0][1] === player && board[0][2] === player) ||
        (board[1][0] === player && board[1][1] === player && board[1][2] === player) ||
        (board[2][0] === player && board[2][1] === player && board[2][2] === player) ||
        // Checking for vertical wins
        (board[0][0] === player && board[1][0] === player && board[2][0] === player) ||
        (board[0][1] === player && board[1][1] === player && board[2][1] === player) ||
        (board[0][2] === player && board[1][2] === player && board[2][2] === player) ||
        // Checking for diagonal wins
        (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
        console.log(chalk.bold.greenBright(`                          Result: ${player} has won the match! 🎉🎊💫✨`));
        return true;
    }
    else {
        return false;
    }
}
// All Functions Call
createBoard(board); //ya board ka parts ka function ha
drawBoard(board); //yaha pooora board print hoga uska function ha
let player = "X"; // yaha player bataya ha ka player X hoga
let winner = false; //Yaha say loop laga ha
while (!winner) {
    await userMove(board, player); //yaha say player say input langay or board ma print karwaingay 
    drawBoard(board); // Draw the board again after the move
    winner = CheckWinner(board, player); // Check for a winner
    //Yaha player ko switch kiya ha pehlay X play karay ga Phir O karay ga
    if (player == "X") {
        player = "O";
    }
    else {
        player = "X";
    }
}
