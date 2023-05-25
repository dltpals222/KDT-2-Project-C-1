

function currPageGroup(currPage, pageNumCount = 5) {
  return Math.ceil(currPage / pageNumCount);
}

const btn = document.getElementById('button');
btn.addEventListener('click', function(n,c){
  if('click'===click){
    currPageGroup(n,c);
  }
});

const container = document.getElementById('root');
const pic = document.getElementById('picture');
const info = document.getElementById('information');
