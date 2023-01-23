		var randomLetterASCII;
		var timerID;

		var startButton = document.getElementById("start");
		startButton.addEventListener("click", onPress);


		function onPress()
		{

			randomLetterASCII = Math.floor(Math.random() * 26) + 97;


			console.log(randomLetterASCII);

		var newP = document.createElement("p");
			newP.id = "timer";
			    newPersonText = document.createTextNode("10");
			        newP.appendChild(newPersonText);
			            document.body.appendChild(newP);

		
			document.addEventListener("keydown", guess);
			
			timerID = setInterval(decrement, 1000);

			setTimeout(displayCuteThing, 20000);
		}

		
		function decrement()
		{
			var timerP = document.getElementById("timer");
			var timerValue = timerP.childNodes[0].nodeValue;

			if(timerValue > 0)
			{
				timerValue = parseInt(timerValue) - 1;
				timerP.childNodes[0].nodeValue = timerValue;
			}
			
			else
			{
				
				clearInterval(timerID);
				
				document.removeEventListener("keydown", guess);
				alert("You lose!");
				document.createTextNode("You lose! Try again.");
				document.getElementById("insert").innerHTML="Sorry! Try again.";
			}
		}


		function guess()
		{

			var currentGuess = parseInt(event.key.charCodeAt());


			if(currentGuess >= 65 && currentGuess <= 90)
			{
				currentGuess = currentGuess + 32;
			}


			if(currentGuess == randomLetterASCII)
			{
				clearInterval(timerID);
				document.removeEventListener("keydown", guess);
				alert("You win!");
				document.getElementById("insert").innerHTML="You picked " + event.key + ". You're correct!";
			}
		}

		function displayCuteThing()
		{
			var cuteThing = document.createElement("img");
			cuteThing.src = "https://media.giphy.com/media/VbhLF9VRbTHZLgwgz2/giphy.gif";
			cuteThing.alt = "Dancing Ferret";
			document.body.appendChild(cuteThing);
		}
