const quotes = [
    {
        quote: "나는 날마다,모든면에서,점점 더 좋아지고 있다.",
        author: "김준호"
    },
    {
        quote: "실패는 잊어라.하지만 그것이 준 교훈은 절대 잊으면 안된다.",
        author: "불드윈"
    },
    {
        quote: "우리는 행복하기 때문에 웃는게 아니라,웃기 때문에 행복하다.",
        author: "윌리엄 제임스"
    },
    {
        quote: "너 자신이 돼라. 다른 사람은 이미 있으니까.",
        author:"오스카 와일드"
    },
    {
        quote: "인생은 가까이서 보면 비극,멀리서 보면 희극이다.",
        author: "찰리 채플린"
    },
    {
        quote: "최고에 도달하려면 최저에서 시작해라",
        author: "P.시루스"
    },
    {
        quote: "행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
        author: "칭기즈칸"
    },
    {
        quote: "일단 시작해라. 나중에 완벽해지면 된다.",
        author: "론 무어"
    },
    {
        quote: "참을 인 세 번이면 호구다.",
        author: "박명수"
    },
    {
        quote: "가장 큰 위험은 위험 없는 삶이다.",
        author: "스티븐 코비"
    },
    {
        quote: "위험은 자신이 무엇을 하는지 모르는 데서 온다.",
        author: "워런 버핏"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;