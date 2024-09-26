function handler() {
            // var array = [document.getElementById("arr").value];
            let array = ["banana", "jackfruit", "apple"];
            console.log(array);

            array.forEach((element) => {
                const elementValues = Object.values(element);

                console.log(elementValues);

                elementValues.forEach((data) => console.log(data));

            })
        }
handler();