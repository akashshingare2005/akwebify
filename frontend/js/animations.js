document.addEventListener("DOMContentLoaded",()=>{
  const els=document.querySelectorAll(".animate-on-scroll");
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("animated");
        obs.unobserve(e.target);
      }
    });
  },{threshold:.2});
  els.forEach(el=>obs.observe(el));
});

