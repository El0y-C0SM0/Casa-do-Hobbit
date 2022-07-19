window.alert('Preparado?');
window.alert('O jogo começa em 3!');
window.alert('2!');
window.alert('1!');
const jump = () => {
    const hero = document.querySelector('.hero');
    hero.classList.add('pular');
    
    setTimeout(() => {
        hero.classList.remove('pular');

    },2000);
    }
    let X=0;
    const pontos = ()=>{
        
        X+=100;
       
    }
    
    document.addEventListener("click",jump);
    document.addEventListener("click",pontos);

    const inf = setInterval(()=>{
        const hero = document.querySelector('.hero');
        const monster = document.querySelector('.monstro');
        const monsterlocal =  monster.offsetLeft;
        
        const heroLocal = +window.getComputedStyle(hero).bottom.replace('px','');
        
        if(monsterlocal<=120 && heroLocal < 100 && monsterlocal > 0){
            
            window.alert('Voce perdeu! Aperte F5 pare recomeçar! Pontos = ' +X);
            monster.style.animation = 'none';
            monster.style.left = `${120}px`;
        }
        
    },10)
   

