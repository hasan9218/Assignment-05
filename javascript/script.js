// heart count
let count = 0;
let totalCount = document.getElementById("heart-count");
function clickCount() {
    count = count + 1;
    totalCount.innerText = count;
}



// calling function

let coins = 100;

let callButton = document.querySelectorAll(".calling-btn");

for (let btn of callButton) {
    btn.addEventListener("click", function () {
        let singleItem = btn.parentElement.parentElement;

        let serviceName = singleItem.querySelector(".service-text p").innerText;
        let serviceNumber = singleItem.querySelector(".service-text span").innerText;

        // calling history add
        const callHistoryContainer = document.getElementById("call-history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div id="historyList" class="history-content flex items-center justify-between bg-[#fafafa] rounded-lg p-4 mb-5">
            <div class="call-history">
                 <h4 class="font-semibold text-base text-black">${serviceName}</h4>
                 <span class="text-[#5c5c5c] text-base">${serviceNumber}</span>
            </div>
            <div class="call-history-time">
                <span class="text-black text-sm">${new Date().toLocaleTimeString()}</span>
            </div>
        </div>
        `;
        callHistoryContainer.append(newHistory);


        // calling history remove
        const removeBtn = document.getElementById("remove-btn");
        removeBtn.addEventListener("click", () => {
            newHistory.innerHTML = "";
        });


        // coin count
        if (coins < 20) {
            alert("Your Coin Is Over, You Need 20 Coin for Call");
            return;
        }
        alert(`Calling ${serviceName} ${serviceNumber}`);

        coins = coins - 20;
        document.getElementById("total-coin").innerText = coins;
    });

}
