let counterKey = 0;

function userCard(num) {

    let objCard = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        get key() {
            if (num === undefined) {
                num = ++counterKey;
            }

            if (num >= 1 && num <= 3) {
                return num;
            } else {
                console.error(`Параметр key має бути числом в діапазоні[1; 3]`);
                return -1;
            }
        }
    }

    return {
        getCardOptions: function () {
            return Object.create(
                {},
                {
                    balance: {
                        value: objCard.balance,
                    },
                    transactionLimit: {
                        value: objCard.transactionLimit,
                    },
                    historyLogs: {
                        value: objCard.historyLogs
                    },
                    key: {
                        value: objCard.key
                    }
                });
        },

        putCredits: function (balance) {
            objCard.balance += balance;

            objCard.historyLogs.push({
                operationType: 'Received credits',
                credits: balance,
                operationTime: getTime()
            });
        },

        takeCredits: function (cost) {
            if (cost <= objCard.transactionLimit && cost <= objCard.balance) {
                objCard.balance -= cost;

                objCard.historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: cost,
                    operationTime: getTime()
                });
            } else {
                console.error('Сума, яку Ви бажаєте взяти, перевищує ліміт транзакцій та залишок коштів на карті');
            }
        },

        setTransactionLimit: function (limit) {
            objCard.transactionLimit = limit;

            objCard.historyLogs.push({
                operationType: 'Transaction limit change',
                credits: limit,
                operationTime: getTime()
            });
        },

        transferCredits: function (credit, cardRecipient) {
            let tax = credit * 0.005; //0.5%
            // console.log(tax);

            if (credit + tax > objCard.transactionLimit) {
                console.error(`Ліміт транзакцій в ${objCard.transactionLimit} г.о. не дозволяє Вам перераховувати кошти у сумі ${credit} г.о., в тому числі ${tax} г.о. оподаткування, на іншу карту`);
            } else if (credit + tax > objCard.balance) {
                console.error(`Залишок коштів на карті (${objCard.balance} г.о.) не дозволяє Вам перераховувати кошти у сумі ${credit} г.о., в тому числі ${tax} г.о. оподаткування, на іншу карту`);
            } else {
                this.takeCredits(credit + tax);
                cardRecipient.putCredits(credit);
            }
        }
    };
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];

        counterKey = 0;
    }

    addCard() {
        if (this.cards.length < 3) {
            let card = userCard();
            this.cards.push(card);
        } else {
            console.error(`Користувач повинен мати не більше 3 карт!`);
        }
    }

    getCardByKey(key) {
        if (key > 3) {
            console.error('Ідентифікатор карти має бути в діапазоні [1; 3]!');
            return {};
        }
        /*        for (const element of this.cards) {
                    if(element.getCardOptions().key === key){
                        console.log(element.getCardOptions());
                    }
                }*/

        if (this.cards.find(item => item.getCardOptions().key === key)) {
            return this.cards.find(item => item.getCardOptions().key === key);
            // return this.cards.find(item => item.getCardOptions().key === key).getCardOptions();
        } else {
            console.error('Карти з таким ідентифікатором не існує!');
            return {};
        }
    }
}

let user = new UserAccount('Bob');

user.addCard()
user.addCard()

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());


function getTime() {
    let date = twoDigits(new Date().getDate());
    let month = twoDigits(new Date().getMonth() + 1);
    let hour = twoDigits(new Date().getHours());
    let minute = twoDigits(new Date().getMinutes());
    let second = twoDigits(new Date().getSeconds());

    return `${date}/${month}/${new Date().getFullYear()}, ${hour}:${minute}:${second}`;
}

function twoDigits(num) {
    if (num < 10) {
        return ('0' + num);
    } else {
        return num;
    }
}

