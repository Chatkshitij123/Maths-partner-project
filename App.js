console.log("hello");


function SavedButton() {
    // console.log("working save btn")
    var b = document.querySelector('.inputBox1').innerHTML;
    var a = document.querySelector('.inputBox2').innerHTML;
    console.log(a)
    localStorage.setItem(b, a);
    s++;

}

function SearchButton() {
    event.preventDefault();

    console.log("working search btn")
    var problem = document.getElementById('problemBar').value;
    var category = document.getElementById('categoryBar').value;
    //    let category = fetch("https://github.com/aunyks/newton-api")
    //    pro.then((reponse1) => {
    //     return reponse1.json()
    //    }).then((value1) => {
    //     console.log(value1);
    //    })

    let pro = fetch(`https://newton.vercel.app/api/v2/${category}/${problem}`)
    console.log(pro)
    pro.then((reponse) => {
        console.log(reponse.status)
        console.log(reponse.ok)
        return reponse.json()
    }).then((value) => {
        // console.log(value);
        var input2 = value.result;
        document.querySelector(".inputBox2").innerHTML = input2;
    })

    // let pro1 = fetch('https://newton.now.sh/api/v2/simplify/2^2+2(2)')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    //   console.log(pro1);


    const Input1 = document.querySelector(".inputBox1").innerHTML = category + " :" + problem;

}


function delBtn(ele) {
    console.log("working delete btn")
    document.querySelector(".inputBox1").innerHTML = "";
    document.querySelector(".inputBox2").innerHTML = "";

}

var count = 0;
function HistoryButton() {

    if (count % 2 == 0) {




        
        document.querySelector('.History-box').style.display = "block";

        var data = document.querySelector('.History-box');

        for (p in localStorage) {
            var ans = localStorage.getItem(p);
            if (ans != null) {
                // console.log(ans);
                var h3 = document.createElement("h3");
                h3.setAttribute('class', 'remove')

                h3.innerHTML = `${p} ---->  Ans = ${ans}`;
                console.log(h3);
                data.appendChild(h3);

            }

        }
        count++;
    }
    else {
        document.querySelector('.History-box').style.display = "none";

        var rem = document.querySelectorAll('.remove');
        console.log(rem);
        for (var i = 0; i < rem.length; i++) {
            rem[i].remove();
        }

        count++;


    }


}