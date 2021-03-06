! function() {
    function e(e) {
        i[c].classList.remove("active-slide"), i[e].classList.add("active-slide"), c = e, a.style.display = 0 === c ? "none" : "inline-block", c === i.length - 1 ? (o.style.display = "none", s.style.display = "inline-block") : (o.style.display = "inline-block", s.style.display = "none")
    }



    const n = document.getElementById("quiz"),
        t = document.getElementById("results"),
        s = document.getElementById("submit"),

        r = [{
            question: "Who invented JavaScript?",
            answers: {
                a: "Douglas Crockford",
                b: "Sheryl Sandberg",
                c: "Brendan Eich"
            },
            correctAnswer: "c"
        }, {
            question: "Which one of these is a JavaScript package manager?",
            answers: {
                a: "Node.js",
                b: "TypeScript",
                c: "npm"
            },
            correctAnswer: "c"
        }, {
            question: "How many heading types are there in HTML?",
            answers: {
                a: "1",
                b: "7",
                c: "6"
            },
            correctAnswer: "c"
        }, {
            question: "Which tool can you use to ensure code quality?",
            answers: {
                a: "Angular",
                b: "jQuery",
                c: "RequireJS",
                d: "ESLint"
            },
            correctAnswer: "d"
        }, {
            question: "Which tool is used to reduce the file size of HTML?",
            answers: {
                a: "Minifier",
                b: "Compressor",
                c: "None",
                d: "All Of Above"
            },
            correctAnswer: "a"
        }, {
            question: "What is the ending extension for HTML?",
            answers: {
                a: ".html",
                b: ".hypertext",
                c: "None",
                d: "All Of Above"
            },
            correctAnswer: "a"
        },{
            question: "What is the ending extension for HTML?",
            answers: {
                a: ".html",
                b: ".hypertext",
                c: "None",
                d: "All Of Above"
            },
            correctAnswer: "a"
        },  {
            question: "What is the oldest website in the world?",
            answers: {
                a: "http://info.cern.ch",
                b: "https://www.google.com",
                c: "https://www.vortex.com/",
                d: "All Of Above"
            },
            correctAnswer: "a"
        }, 
             
             {
            question: "How to add a ordered list in HTML?",
            answers: {
                a: "ol",
                b: "orderedlist tag",
                c: "All Of The Above"
            },
            correctAnswer: "a"
        }, {
            question: "Who invented HTML?",
            answers: {
                a: "Tim Berners Lee",
                b: "Susan Wojcicki",
                c: "Sundar Pichai"
            },
            correctAnswer: "a"
        }, {
            question: "Who is the CEO of Google from the year 2015",
            answers: {
                a: "Satya Nadela",
                b: "Sundar Pichai"
            },
            correctAnswer: "b"
        }, {
            question: "Do All HTML tags have ending tags?",
            answers: {
                a: "No",
                b: "Yes",
                c: "I Don't Know"
            },
            correctAnswer: "a"
        }, {
            question: "How can we connect javascript?",
            answers: {
                a: "link rel=main.js",
                b: "script src=main.js"
            },
            correctAnswer: "b"
        }, {
            question: "How can we embed an other page in a HTML website?",
            answers: {
                a: "embed",
                b: "add"
            },
            correctAnswer: "a"
        }, {
            question: "Will all the tags have a full name or can they be written as short such as img?",
            answers: {
                a: "They SHOULD be having a full name",
                b: "They might or might not have a full name",
                c: "I Don't Know"
            },
            correctAnswer: "b"
        }];
    ! function() {
        const e = [];

        r.forEach((n, t) => {
            const s = [];
            for (letter in n.answers) s.push(`<label>\n           <input type="radio" name="question${t}" value="${letter}">\n           ${letter} :\n           ${n.answers[letter]}\n         </label>`);
            e.push(`<div class="slide">\n         <div class="question"> ${n.question} </div>\n         <div class="answers"> ${s.join("")} </div>\n       </div>`)
        }), n.innerHTML = e.join("")
    }();
    const a = document.getElementById("previous"),
        o = document.getElementById("next"),
        i = document.querySelectorAll(".slide");
    let c = 0;
    e(c), s.addEventListener("click", function() {
        const e = n.querySelectorAll(".answers");
        let s = 0;
        r.forEach((n, t) => {
            const r = `input[name=question${t}]:checked`;
            (e[t].querySelector(r) || {}).value === n.correctAnswer ? (s++, e[t].style.color = "lightgreen") : e[t].style.color = "red"
        }), t.innerHTML = `${s} out of ${r.length}`
    }), a.addEventListener("click", function() {
        e(c - 1)
    }), o.addEventListener("click", function() {
        e(c + 1)
    })
}();
