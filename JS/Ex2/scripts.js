function openDialog() {
            dialog.show();
            var y = parseInt(secondLine.style.top.match(/\d+/));
            y+=180;
            secondLine.style.top = y + "px";
        }

function closeDialog() {
            dialog.close();
            var y = parseInt(secondLine.style.top.match(/\d+/));
            y-=180;
            secondLine.style.top = y + "px";

            document.write("Добро пожаловать!");
        }