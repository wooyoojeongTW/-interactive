/**아이디연결 */
const circle = document.querySelector('#circle');
/**article 연결 */
const article = document.querySelectorAll('article');

// console.log(circle,article)

/**article=8개, 반복처리 mouseenter, mouseleave  */
for(let el of article){
  // 마우스 들어오면 회전 일시정지
  el.addEventListener('mouseenter',() =>{
    circle.style.animationPlayState = 'paused'
  })
  /**마우스 나가먄 회전 */
  el.addEventListener('mouseleave',() =>{
    circle.style.animationPlayState = 'running'
  })
}