import _ from 'lodash';
import './style.css';
// import Logo from './logo.png'
// import Data from './data.xml';
// import printMe from './print.js';
import { cube } from './math.js';

 if (process.env.NODE_ENV !== 'production') {
       console.log('Looks like we are in development mode!');
     }else{
       console.log('Looks like we are in production mode!');

     }

function component() {
    var element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add(".hello");
    var btn = document.createElement('button');
       btn.innerHTML = 'Click me and check the console!' + cube(5);
    // btn.onclick = printMe;
 
    element.appendChild(btn);
    // element.classList.add('hello');

    // var imgs = new Image();
    // imgs.src = Logo;
    // element.appendChild(imgs);
    // console.log(Data);
    return element;
  }
  
  document.body.appendChild(component());

    if (module.hot) {
        module.hot.accept('./print.js', function() {
            console.log('Accepting the updated printMe module!');
            printMe();
        })
    }