rows = document.querySelectorAll("tr");
result = document.querySelector("#result");
restart = document.querySelector("#button");

table = [];

for (row of rows) {
    rowArray = row.querySelectorAll("td");
    table.push(rowArray);
}
sym = "X"
result.innerText = "Turn: X";
result.style.color = "black";
count = 0;

function getSymbol() {
    r = sym;
    switch (sym) {
        case "X":
            sym = "O";
            break;
        case "O":
            sym = "X";
            break;
    }
    result.innerText = "Turn: " + sym;
    return r;
}


playing = true;
for (i = 0; i < 3; ++i) {
    for (j = 0; j < 3; ++j) {
        table[i][j].addEventListener("click", function() {
            if (playing && this.innerText == "") {
                this.innerText = getSymbol();
                ++count;
                winner = check();
                if (winner == 0) {
                    playing = false;
                    result.innerText = "Oops! It's a Draw!"
                    result.style.color = "red";
                } else if (winner != null) {
                    playing = false;
                    result.innerText = "Victory " + winner + "!";
                    result.style.color = "green";
                }
            }
        })
    }
}

function checkRow(r) {
    if (table[r][0].innerText == table[r][1].innerText && table[r][1].innerText == table[r][2].innerText && table[r][0].innerText != "")
        return table[r][0].innerText;
    else
        return null;
}

function checkColumn(r) {
    if (table[0][r].innerText == table[1][r].innerText && table[1][r].innerText == table[2][r].innerText && table[0][r].innerText != "")
        return table[0][r].innerText;
    else
        return null;
}

function check() {
    for (i = 0; i < 3; i++) {
        c = checkRow(i);
        if (c != null) {
            return c;
        }
        c = checkColumn(i);
        if (c != null) {
            return c;
        }
    }

    if (table[0][0].innerText == table[1][1].innerText && table[1][1].innerText == table[2][2].innerText && table[0][0].innerText != "")
        return table[0][0].innerText;
    else if (table[0][2].innerText == table[1][1].innerText && table[1][1].innerText == table[2][0].innerText && table[0][2].innerText != "")
        return table[2][0].innerText;
    else if (count == 9)
        return 0;

    return null;
}


restart.addEventListener("click", function() {
    sym = "X"
    result.innerText = "Turn: X";
    result.style.color = "black";
    count = 0;
    playing = true;
    for (i = 0; i < 3; ++i) {
        for (j = 0; j < 3; ++j) {
            table[i][j].innerText = "";
        }
    }
})