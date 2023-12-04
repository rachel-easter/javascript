document.addEventListener('DOMContentLoaded', function () {
            // Function to generate a random color in hexadecimal format
            function getRandomColor() {
                const letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            // Function to change the color of the paragraph
            function changeColor() {
                const paragraph = document.getElementById('colorParagraph');
                paragraph.style.color = getRandomColor();
            }

            // Event listener for the button click
            document.getElementById('colorButton').addEventListener('click', changeColor);
        });
