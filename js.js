window.onload = function() {

    // 변수 지정

    var introduceContainer = document.getElementsByClassName('introducecontainer'), 
        introduceImg = document.getElementsByClassName('introduceimg'), 
        slides = document.getElementsByClassName('slides'), 
        slideCount = slides.length,
        currentIndex = 0, 
        rightbutton = document.getElementsByClassName('right'),
        leftbutton = document.getElementsByClassName('left');

        console.log(slideCount);

    // 슬라이드 이동 함수

    function goToSlide(idx) {
        introduceImg[0].style.left = idx * -100 + '%';
        introduceImg[0].classList.add('animated');
        currentIndex = idx;
    }


    //버튼을 클릭하면 슬라이드 이동시키기 

    leftbutton[0].addEventListener('click', function(e){
        e.preventDefault();
        // 처음일 때 
        if(currentIndex != 0 ){
            goToSlide(currentIndex - 1)
        }
    });

    rightbutton[0].addEventListener('click', function(e){
        e.preventDefault();
        // 마지막일 때 
        if(currentIndex != slideCount-1 ){
            goToSlide(currentIndex + 1);
        }
    });

    

    //첫 번째 슬라이드 먼저 보이도록 하기 
    goToSlide(0);






































//     var currentContent = 0;
//     const right = document.getElementsByClassName("right"); //오른쪽 버튼
//     const left = document.getElementsByClassName("left"); //왼쪽 버튼

//     document.addEventListener('click', function (event) {
//     if (event.target.matches('.left')) {
//         if (currentContent === 0){
//             currentContent = 0;
//         } else {
//             currentContent = 1;
//         }
//         document.querySelector('.introduceimg1').style.display = 'flex'
//         document.querySelector('.introduceimg2').style.display = 'flex'
//         document.querySelector('.introduceimg3').style.display = 'flex'
//         // document.querySelector('.introduceimg4').style.display = 'flex'
//         // document.querySelector('.introduceimg5').style.display = 'flex'
//         // document.querySelector('.introduceimg6').style.display = 'flex'
//         // document.querySelector('.introduceimg7').style.display = 'flex'
//         // document.querySelector('.introduceimg8').style.display = 'flex'

//         // document.querySelector('.introduceimg1').style.width = '50%'
//     } else if (event.target.matches('.right')) {
//         if (currentContent === 1){
//             currentContent = 1;
//         } else {
//             currentContent = 1;
//         } 
//         document.querySelector('.introduceimg1').style.display = 'none'
//         document.querySelector('.introduceimg2').style.display = 'flex'
//         document.querySelector('.introduceimg3').style.display = 'flex'
//         // document.querySelector('.introduceimg2').style.width = '50%'
//     }
// });


    // document.getElementsByClassName('right').addEventListener('click', function() {
    //     sectiontwo.style.background = 'red';
    //     document.querySelector('introduceimg').style.transform = ('translate(-420vw)')
    // });

    // var typingBool = false;
    //   var typingIdx = 0;
    //   var typingTxt = $(".maintext").text();
    //   typingTxt=typingTxt.split("");
    //   if(typingBool==false) {
    //       typingBool=true;
    //       var tyInt = setInterval(typing,100);
    // }

    // function typing() {
    //     if(typingIdx<typingTxt.length){
    //         $(".typing").append(typingTxt[typingIdx]);
    //         typingIdx++;
    //     }
    //     else {
    //         clearInterval(tyInt);
    //     }
    // }

    // document.getElementById('myphoto').addEventListener('click', function() {
    
    //     document.getElementsByClassName('innerinner').style.marginLight = '20px';
    // });
    
}