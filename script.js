const PARAS=[
    "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face",

    "The time to take action was now. All three men knew in their hearts this was the case, yet none of them moved a muscle to try. They were all watching and waiting for one of the others to make the first move so they could follow a step or two behind and help. The situation demanded a leader and all three men were followers",

    "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did",

    "She had been told time and time again that the most important steps were the first and the last. It was something that she carried within her in everything she did, but then he showed up and disrupted everything. He told her that she had it wrong. The first step wasn't the most important. The last step wasn't the most important. It was the next step that was the most important",

   "It was a scrape that he hardly noticed. Sure, there was a bit of blood but it was minor compared to most of the other cuts and bruises he acquired on his adventures. There was no way he could know that the rock that produced the cut had alien genetic material on it that was now racing through his bloodstream. He felt perfectly normal and continued his adventure with no knowledge of what was about to happen to him",

    "MaryLou wore the tiara with pride. There was something that made doing anything she didn't really want to do a bit easier when she wore it. She really didn't care what those staring through the window were thinking as she vacuumed her apartment",

    "He wandered down the stairs and into the basement. The damp, musty smell of unuse hung in the air. A single, small window let in a glimmer of light, but this simply made the shadows in the basement deeper. He inhaled deeply and looked around at a mess that had been accumulating for over 25 years. He was positive that this was the place he wanted to live",

    "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it. Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement",

    "It was the best compliment that he'd ever received although the person who gave it likely never knew. It had been an off-hand observation on his ability to hold a conversation and actually add pertinent information to it on practically any topic. Although he hadn't consciously strived to be able to do so, he'd started to voraciously read the news when he couldn't keep up on topics his friends discussed because their conversations went above his head. The fact that someone had noticed enough to compliment him that he could talk intelligently about many topics meant that he had succeeded in his quest to be better informed.",

    "The water rush down the wash and into the slot canyon below. Two hikers had started the day to sunny weather without a cloud in the sky, but they hadn't thought to check the weather north of the canyon. Huge thunderstorms had brought a deluge o rain and produced flash floods heading their way. The two hikers had no idea what was coming.",
]

const btn=document.querySelector("button");
const div=document.querySelector(".paras");
const input=document.querySelector("input");
let content=false;

btn.addEventListener("click", ()=>{
    if(input.value<1){
        window.alert("Enter a Value");
        input.value='';
    }   
    if(content==true){
        let child=div.childNodes;
        for(let n=1;n<child.length;n++){
            child[n].style.display="none";
        }
        content=false;
    }
    if(content==false){
       
        
        for(let i=0;i<input.value;i++){
            let rand=Math.floor(Math.random()*PARAS.length)
            let newP=document.createElement("p");
            newP.classList.add('para')
            newP.textContent=PARAS[rand];
            div.appendChild(newP);
        }
        
    }
    content=true;   
})